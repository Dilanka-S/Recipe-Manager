console.log("MERN stack CRUD recipe management app for Code94 by Dilanka Vishad Seneviratne");

const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/recipe-routes");
const app = express();
 
//Middlewares
// app.use('/',(request, response, next)=>{
//     response.send("Welcome to the Recipe Manager")
// });
app.use(express.json());
app.use("/recipes", router);
//Connecting to the MongoDB server
mongoose.set('strictQuery',false);
mongoose.connect(
    "mongodb+srv://admin:oEwD0RX8q0j2ZGFx@cluster0.yr4kxuh.mongodb.net/?retryWrites=true&w=majority"
     )
     .then(()=>console.log("Connected to the Recipe Manager database"))
     .then(()=>{
        app.listen(5001);
     })
     .catch((err)=> console.log(err));

// Default created admin account details;
// username : admin
// admin password  : oEwD0RX8q0j2ZGFx
