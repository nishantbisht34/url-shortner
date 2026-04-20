const express = require("express")
const { connectDb } = require('./config/db')
const urlRoute = require('./routes/urlRoute')
const URL = require('./models/urlModel')

const app = express()

// connection
connectDb('mongodb://localhost:27017/short-url').then(() => console.log('Mongodb Connected'))

// middleware
app.use(express.json())

// Routes
app.use('/url', urlRoute)
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            }
        })
    res.redirect(entry.redirectUrl)
})

app.listen(8001, () => console.log('Sever is running on port 8001'))