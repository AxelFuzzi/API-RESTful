class claseYmetodos {

    constructor() {
        this.productos = [];
    }

    async getAllProductos() {
        return this.productos;
    }

    async getProducto(id) {
        console.log(id);
        return this.productos.find(producto => producto.id === Number(id));
    }

    async addProducto(producto) {
        if (producto.id) {
            throw 'El producto ya tiene ID';
        }

        producto.id = this.maxId() + 1;
        this.productos.push(producto);
        return producto.id;
    }

    async updateProducto(id, producto) {
        const index = this.productos.findIndex(producto => producto.id === Number(id));
        if (index < 0) return undefined;
        producto.id = Number(id);
        this.productos.splice(index, 1, producto);
        return producto;
    }

    async deleteProducto(id) {
        const index = this.productos.findIndex(producto => producto.id === Number(id));
        if (index < 0) return undefined;
        this.productos.splice(index, 1);
        return id;
    }

    maxId() {
        return Math.max(...this.productos.map(o => o.id), 0);
    }
}

module.exports = claseYmetodos;