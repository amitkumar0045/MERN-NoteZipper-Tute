const express = require('express')
const notes = require('./data/notes') //dummy  data
const dotenv = require("dotenv");//contains secrt info like api-keys
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleWare')

const app = express();
dotenv.config();
connectDB();
app.use(express.json())
// app.use(notFound);
// app.use(errorHandler);

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

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server Started on port ${PORT}`
    )
);
