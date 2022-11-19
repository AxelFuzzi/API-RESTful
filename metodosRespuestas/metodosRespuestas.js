const Producto = require('../producto/producto');
const claseYmetodos = require('../metodos/claseYmetodos');
const metodo = new claseYmetodos();

exports.getAllProductos = async (req, res) => {
    res.json(await metodo.getAllProductos());
}

exports.getProducto = async (req, res) => {
    const id = req.params.id;
    const producto = await metodo.getProducto(id);
    res.json((producto ? producto : { error: 'producto no encontrado' }));
}

exports.addProducto = async (req, res) => {
    const { title, price, thumbnail } = req.body;
    const producto = new Producto(title, price, thumbnail);
    const newId = await metodo.addProducto(producto);
    res.json(producto);
}

exports.updateProducto = async (req, res) => {
    const id = req.params.id;
    const { title, price, thumbnail } = req.body;
    const producto = new Producto(title, price, thumbnail);
    const newProducto = await metodo.updateProducto(id, producto);
    res.json((newProducto ? newProducto : { error: 'producto no encontrado' }));
}

exports.deleteProducto = async (req, res) => {
    const id = req.params.id;
    const deletedId = await metodo.deleteProducto(id);
    res.json((deletedId ? { id: deletedId } : { error: 'producto no encontrado' }));
}
