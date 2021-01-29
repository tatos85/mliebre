const express = require('express')
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use('/static',express.static(publicPath));

app.listen(process.env.PORT || 3000, ()=>{
    console.log("servidor corriendo");
})

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/registro', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
