const connect = require("./connect");
const express = require("express");
const cors = require("cors");
const posts = require("./postRoutes");
const users = require("./userRoutes");
const fileUpload = require("express-fileupload");


//const awsRoutes = require("./awsRoutes");
const multer = require("multer");
const upload = multer();

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json()) 
app.use(upload.any())
app.use(posts)
app.use(users)
//app.use(awsRoutes)

app.listen(PORT, () => {
    connect.connectToserver()
    console.log(` ttttttttthe server is running on port ${PORT}`)
})