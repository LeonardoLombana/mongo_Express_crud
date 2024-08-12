const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:9080"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));


const db = require("./app/models");
const { connect } = require('mongoose');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB connect succesfully");
    })
    .catch(err => {
        console.log("DB connection not succesful", err);
        process.exit();
    });


app.get("/", (req,res) => {
    res.json({message: "Hello there"})
});

const PORT = process.eventNames.PORT || 9080;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}.`)
});