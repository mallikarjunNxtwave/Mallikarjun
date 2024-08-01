const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');


const app = express();

const PORT = 5005;

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo db Connected Successfully"))
.catch((error) => console.log(error));

app.use(bodyParser.json())
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});