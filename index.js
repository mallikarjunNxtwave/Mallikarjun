const express = require('express');
const path = require('path');
const {open} = require('sqlite');
const sqlite3 = require('sqlite3');
const app = express();

const dbPath = path.join(__dirname,"user.db");

let db = null;

const initilizeDbAndServer = async() => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });
        app.listen(5005, () => {
            console.log('Server Running at 5005');
        })
        
    } catch (error) {
        console.log(`Db Error: ${error.message}`);
        process.exit(1);
    }
}
app.get('/', async (req,res) => {
    res.send("<h1>HELLO WORLD1!</h1>");
});



initilizeDbAndServer();