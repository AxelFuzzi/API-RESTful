const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

const productosRouter = require('./router/router');

app.use("/api/productos", productosRouter);

app.listen(port, () => {
    console.log(`Api en http://localHost:${port}`);
});