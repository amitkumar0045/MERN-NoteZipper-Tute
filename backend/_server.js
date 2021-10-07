//1.// this is our entry point as we defined during ""npm init""

//2.// required is used to bring the packages justLike ">> import {something} from 'pathhh' <<"  
const express = require('express')
const notes = require('./data/notes') //dummy  data
const dotenv = require("dotenv")//contains secret info like api-keys

//3.// creating an object of imported package//
const app = express();
dotenv.config();

//**7.**// --creating & hitting API end-point
app.get("/", (req, res) => {
    res.send("API is RUNNING....")
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

// app.get('/api/notes/:id/:id2', (req, res) => {
//     const note = notes.find((n) => n.id === req.params.id);
//     console.log(req.params);
// })

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})

//** **//

//4.// creating a web server
//_DEFAULT_>><< app.listen(5000, console.log("Server started on PORT 5000"))  //
const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running on port ${PORT}`
    )
);

//5.// to run this file "node server.js" =>
// replaced as due to folder structure ""node backend/server.js""
//6.// we need to run ""node backend/server.js"" this cmd every time to run server so,
//we will add this file to package.json inside ""scripts", like below
//  "start": "node backend/server.js" adding it in pkg.json



//\\ THIS is our WEB_SERVER //\\