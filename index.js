import express from "express"
import dotenv from "dotenv"
const app = express();
dotenv.config()
const port = process.env.PORT;
console.log(port);

console.log("hello")

//befor accepting a request
//middlewares

//frontend(postman)  -> middleware ->  calls backend (apis)
app.use(express.json());

app.post('/', (req, res)=>{
    // console.log("the request is ", req);
    console.log("the request body is ", req.body);
    console.log("the query param is ", req.query)
    res.send("hello world")
})

app.listen(port , () => {
    // console.log("listening to port number ", port);
    console.log(`listening to port number ${port}`)
} )