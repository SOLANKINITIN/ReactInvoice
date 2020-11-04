const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// connect database
connectDB();
//Init Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({ extended: false }));
app.get('/', (req, res, next) => res.send('API Running'));

app.use('/api/api', require('./Routes/api/api'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started port ${PORT}`));
