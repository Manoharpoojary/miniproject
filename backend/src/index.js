import { app } from "./app.js";
import dotenv from "dotenv"

dotenv.config({path:"./.env"})

const port=3000

app.listen(process.env.PORT || port,()=>{
    console.log(`server listening on port ${port}`)
})

