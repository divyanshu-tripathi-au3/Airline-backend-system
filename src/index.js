const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors())

const config = require('./config/serverConfig')
const moment = require('moment')


// body-parser setup  --- for global middleware setup we use app.use      for perticular routes we define middleware in routes
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// database setup to connect config file





// global route setup


// port setup
app.listen(config.PORT, () => console.log(`Server is running at http://localhost:${config.PORT}`))






// ============================================= for undersatnding  not to use ===============================================
// creating server method

// const http = require("http");
// const host = 'localhost';
// const port = 8000;

        // const requestListener = function (req, res) {}; 

        // const requestListenerForHtml = function (req, res) {
        //     res.setHeader("Content-Type", "text/html");
        //     res.writeHead(200);
        //     res.end(`<html><body><h1>This is HTML</h1></body></html>`);
        // };

        // const requestListenerForJson = function (req, res) {
        //     res.setHeader("Content-Type", "application/json");
        //     res.writeHead(200);
        //     res.end(`{"message": "This is a JSON response"}`);
        // };

        // const requestListenerForCsv = function (req, res) {
        //     res.setHeader("Content-Type", "text/csv");
        //     res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
        //     res.writeHead(200);
        //     res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
        // };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });