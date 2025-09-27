import express from "express"
import dotenv from "dotenv"
const app = express();
dotenv.config()
const port = process.env.PORT;
console.log(port);

console.log("hello")

app.listen(port , () => {
    // console.log("listening to port number ", port);
    console.log(`listening to port number ${port}`)
} )