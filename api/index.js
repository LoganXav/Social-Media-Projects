import  express  from "express";
const app = express()
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import likeRoutes from "./routes/likes.js"
import authRoutes from "./routes/auth.js"
import commentRoutes from "./routes/comments.js"
import cors from "cors"
import multer from "multer"
import cookieParser from "cookie-parser"

app.get('/', (req, res) => {
    res.send("It's working!")
})

// //middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)

    next()
})

app.use(express.json()) // this allows the application to use json from the body that gets passed to it from a user request e.g postman or input fields
app.use(cors({
    origin: "http://localhost:3000"
}))       // prevents another url from having access to our api

app.use(cookieParser())


const storage = multer.diskStorage({    // multer.js for file Uploads. we could have done this with a route and controller btw
    destination: function (req, file, cb) {   //The destination property is a function that specifies where uploaded files will be stored. The cb (callback) function is used to specify the destination path.
      cb(null, '../client/public/upload')    // we've created a directory to store our uploaded files. This just routes us to that destination
    },
    filename: function (req, file, cb) {     
      cb(null, Date.now() + file.originalname)  // this allows us save the image files with their original names but inorder to avoid a conflict when we upload images with the same name we append a current date generator to the beginning of the image url which obviously makes each url unique
    }
  })
  
  const upload = multer({ storage: storage })  // Finally, the upload constant is set to the result of calling multer with an object specifying the storage as storage. The upload constant can be used to handle file uploads in a route handler.

app.post("/api/upload", upload.single("file"), (req, res) => {   // this is an endpoint for the upload request. It activates a function that uploads a single file.
    const file = req.file  // file is defined as the file field loaded with the user image    
    res.status(200).json(file.filename)   // if the upload request is ok, it sends file.filename(to be stored in our db btw)
})


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/comments", commentRoutes)


app.listen(8800, () => {
    console.log("API workingg!");
});