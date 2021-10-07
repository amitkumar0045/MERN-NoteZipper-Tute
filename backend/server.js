const express = require('express')
const notes = require('./data/notes') //dummy data for check only
const dotenv = require("dotenv");//contains secrt info like api-keys
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleWare')

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

//\\----
// app.get("/", (req, res) => {
//     res.send("API is RUNNING....")
// })

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// })

// app.get('/api/notes/:id', (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note);
// })
//\\----

app.use('/api/users', userRoutes);  // using Routes
app.use('/api/notes', noteRoutes); // using Routes

app.use(notFound);  // using MiddleWares
app.use(errorHandler); //using MiddleWares

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server Started on port ${PORT}`
    )
);
