const express = require('express');
const router = express.Router();
const rutas = require('../metodosRespuestas/metodosRespuestas');

router.get('/', rutas.getAllProductos);

router.get('/:id', rutas.getProducto);

router.post('/', rutas.addProducto);

router.put('/:id', rutas.updateProducto);

router.delete('/:id', rutas.deleteProducto);

module.exports = router;