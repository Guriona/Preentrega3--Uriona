const carrito = [
    { producto: "cuarderno", precio: 500 },
    { producto: "carpeta", precio: 1000 },
    { producto: "lapicera", precio: 50 },
    { producto: "mochila", precio: 3000 }
];

let precioTotal = 0;

function agregarProducto(producto, precio) {
    const productoElegido = carrito.find(item => item.producto === producto);

    if (productoElegido) {
        productoElegido.cantidad++;
    } else {
        carrito.push({ producto, precio, cantidad: 1 });
    }
    precioTotal += precio
}

let btnCuaderno = document.getElementById("btn__cuaderno").addEventListener("click", () => {
    agregarProducto("cuaderno", 500);
    actualizarPrecio();
});

let btnCarpeta = document.getElementById("btn__carpeta").addEventListener("click", () => {
    agregarProducto("carpeta", 1000);
    actualizarPrecio();
});

let btnLapicera = document.getElementById("btn__lapicera").addEventListener("click", () => {
    agregarProducto("lapicera", 50);
    actualizarPrecio();
});

let btnMochila = document.getElementById("btn__mochila").addEventListener("click", () => {
    agregarProducto("mochila", 3000);
    actualizarPrecio();
});

function actualizarPrecio() {
    const precioFinal = document.getElementById("precioFinal");
    precioFinal.textContent = `Total: $${precioTotal}`

}

const eliminarProductos = document.getElementById("eliminarProductos");
    eliminarProductos.addEventListener("click", () => {
        resetearProductos();
    });

function resetearProductos() {
    
    carrito.length = 0;
    precioTotal = 0;
    
    actualizarPrecio();
}