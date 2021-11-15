
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

const postsRoute = require('./routes/posts');

const app = express();

app.use(bodyParser.json());
app.use('/posts', postsRoute);

//Middleware
app.use('/posts',(req,res)=> {
    console.log('Posts')
})


app.get('/', (req,res)=> {
    res.send('We are on Home')
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, ()=> {
    console.log("connected to DB")
});
app.listen(9000, function() {
    console.log("Server started")
})