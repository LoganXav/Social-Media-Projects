import express from "express";
import { getComments } from "../controllers/comment.js"

const router = express.Router()

router.get("/", getComments)    //when we call this endpoint "/", it calls the function which grabs info from the db

export default router