import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv"

dotenv.config({path:"./.env"})

const app=express();


app.use(bodyParser.urlencoded({extended:true}))


export {app}



