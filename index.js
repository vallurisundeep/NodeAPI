const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
var cors = require('cors')

require('dotenv/config');
const postsRoute=require('./routes/posts');
app.use(cors());
app.use(bodyParser.json());
app.use('/posts',postsRoute);

app.get('/',(req,res)=>{
    res.send("Welcome Sundeep");
    
});
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true,useUnifiedTopology: true },
()=>{

console.log("DB connected")
});



//server listen
const port=process.env.port || 3000;
app.listen(port, ()=>console.log(`Listening!`));