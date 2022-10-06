const express = require('express');
const os = require('os')
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const colors = require('colors');
const mongoose = require('mongoose');
const routes = require('./routes/routes')

// Initialize application :
const app = express();

// middleware :

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors())
app.use((req, res, next)=>{
    console.log(req.path.bgGreen , req.method.bgRed);
    next();
})

// Connect to database :
mongoose.connect(process.env.MONGODB_URI)
.then(() =>{
    app.listen(process.env.PORT, ()=>{
        console.log('Database is connected'.bgGreen);
        console.table(`SERVER LISTENING AT ${process.env.PORT}`.bgBlue);
    })
})
.catch((err) => {
    console.table(err);
})

// server status :
app.get('/', (req, res, next)=>{
    const date = new Date();
    res.status(200).json({
        Server: 'Online',
        System: os.cpus(),
        Date: date,
        Author: 'areamobile',
    })
})

// Routes :

app.use('/api/v1/', routes);
