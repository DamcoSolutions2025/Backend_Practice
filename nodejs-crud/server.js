const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api.js');
// const indexroute=require('./indexroute.js');
const userRoutes = require('./src/routes/user.routes.js');
const productRoutes = require('./src/routes/product.routes.js')
const port = 3000;
const app = express();

app.listen(port, function () {
    console.log("Server is listening at port:" + port);
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/product',productRoutes)
