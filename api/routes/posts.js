import Express from "express";
import { getPosts, addPost } from "../controllers/post.js"

const router = Express.Router()     // these are endpoints for our api requests that execute the functions stored in our controllers. these controllers communicate with the database 

router.get("/", getPosts)    //when we call this endpoint "/ + posts", it calls the function which grabs info from the db
router.post("/", addPost)    //when we call this endpoint, it calls the function that adds data to the db

export default router