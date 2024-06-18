const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send("Hello! This is root route");

});

app.listen(3001, ()=>{
    console.log("Server started! maybe..");
});
