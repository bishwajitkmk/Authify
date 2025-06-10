const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

// Root route
app.get('/', (req, res) => {
  res.send("Authify API is running")
})

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
  })
})
.catch(err => console.error('MongoDB connection failed', err))