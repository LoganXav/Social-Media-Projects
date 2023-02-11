import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const register = (req, res) => {

    //CHECK IF USER EXISTS

    const q = "SELECT * FROM users WHERE username = ?";   //using the question mark here provides extra security. q is the query instruction for our database
    
    db.query(q, [req.body.username], (err, data) => {        //grabs the result of our query instructed by q and compares it with the user input in req.body.username. Our outcomes are either (err or data)
        if(err) return res.status(500).json(err)    // if there's a server error
        if(data.length) return res.status(409).json("User already exists!")  // if  the data has a length i.e exists, return a user already exists message
    
    
        //CREATE THE NEW USER
        //Hash the password (encrypt)
        const salt = bcrypt.genSaltSync(10)          // gives an encrypted password template of 10 sorts
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)  // synchronizes our password with the encryption template

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";  // to create a new user we'll have to write the user inputs into the db. q instructs the db on how

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]  // putting our user input values into an array

        db.query(q, [values], (err, data) => {      // grabs the query pathway and slots our values through it
            if(err) return res.status(500).json(err)  // server error
            return res.status(200).json("User has been created.")  // returns a 200 status when it's a success
        })
    })
}

export const login = (req, res) => {

    const q = "SELECT * FROM users WHERE username = ?"  // this returns an array 

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("User not found")

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)  // the array contains only one user and so we select it with data[0] and compare it's password with the one the user gives us

        if(!checkPassword) return res.status(400).json("Wrong Password or username!")   // if checkPassword is not true

        const token = jwt.sign({id: data[0].id}, "secretkey")    //this checks if our userId equals the id of the post
    
        const {password, ...others} = data[0]  // this destructures the data we get back and helps us seperate the othr user details from the password, so we can use just the others in our cookie below

        res
        .cookie("accessToken", token, {      // sends the token to the client as a cookie
            httpOnly: true,                    //this means we are going to send and take our cookies through our website only, so a random script cannot use our cookie  
        })
        .status(200)
        .json(others)
    })
    
}

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"         // we use this because for example our react app port number is 3000 and the api port number is 8800(not matching). but this property grants it access to clear our cookie and logout from the client side
    }).status(200).json("User has been logged out.")

}