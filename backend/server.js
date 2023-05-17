const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./Config/db')
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes')

const { notFound, errorHandler } = require('./Middlewares/errorMiddleware');

const PORT = 5000
dotenv.config()
// console.log(process.env.API_SECRET);
connectDB();

const app = express();

app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("API is running")
})
app.use(cors())
app.use('/api/users',userRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server started on port ${PORT}`))
