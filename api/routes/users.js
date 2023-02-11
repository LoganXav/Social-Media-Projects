import express from "express";
import { getUser } from "../controllers/user.js"

const router = express.Router()

router.get("/find/:userId", getUser)    //when we call this endpoint "/test", it calls the function

export default router