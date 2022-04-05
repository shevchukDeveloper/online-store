require('dotenv').config();

const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
    try {
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
        await sequelize.authenticate()
        await sequelize.sync()
        
    } catch (error) {
        console.log(error);
    }
}

start()