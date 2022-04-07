require('dotenv').config();

const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./midleware/ErrorHandlingMidleware')
const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)
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