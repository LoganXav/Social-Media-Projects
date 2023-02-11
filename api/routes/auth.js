import express from "express";
import { login, register, logout  } from "../controllers/auth.js"

const router = express.Router()

router.post("/login", login)    //when we call this endpoint "/", it calls the function which grabs info from the db
router.post("/register", register)    
router.post("/logout", logout)    


export default router