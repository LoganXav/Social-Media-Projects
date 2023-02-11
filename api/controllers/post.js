import { db } from "../connect.js"
import jwt from "jsonwebtoken"
import moment from "moment"


export const getPosts =(req, res) => {    // the purpose of this is to get our posts from the db and render onto the ui

    const token = req.cookies.accessToken           // we have access to the token if we,re logged in
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token, "secretkey", (err, userInfo) => {    // this validates the token if it's our users token(extra security)
        if(err) return res.status(403).json("Token is not valid!")

        const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationships
        AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId = ?
        ORDER BY p.createdAT DESC`        
    
        db.query(q, [userInfo.id, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err)
            console.log(err)
        return res.status(200).json(data)
        })
    })
}
export const addPost =(req, res) => {         // the purpose of this is to add a share post functionality to our project by adding our posts to the db for the get post above to render onto the ui. The next thing is to go to the share.jsx and set how our client takes the data we want to add and makes api requests with axios to our routes(endpoints).

    const token = req.cookies.accessToken           // we have access to the token if we,re logged in. 
    if(!token) return res.status(401).json("Not logged in!")  // this entire function requires us to be logged in to the site before i.e have the accessToken before we can do any of these things

    jwt.verify(token, "secretkey", (err, userInfo) => {    // this validates the token if it matches the one the server sent to the userId(extra security). We named it userInfo for clarity because we can access the user's id(userInfo.id)
        if(err) return res.status(403).json("Token is not valid!")

        const q = "INSERT INTO posts (`desc`, `img`, `createdAt`, `userId`) VALUES (?)"
        
        const values = [     // these are the values we will add to the db when we make a post
            req.body.desc,
            req.body.img,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),   // the moment library gives us access to the exact time the post was made
            userInfo.id                             // this logs the userInfo id of the authorized user making the post i.e the logged in user that has the access token. This is how we store the post with the right user
        ]
    
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            console.log(err)
        return res.status(200).json("Post has been created")
        })
    })
}