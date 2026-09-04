// Variable para saber qué producto estamos viendo (1, 2 o 3)
let productoActual = 1;
const totalProductos = 3;

function cambiarProducto(direccion) {
    // Ocultar el producto actual
    document.getElementById(`producto-3`).classList.remove('active');
    document.getElementById(`producto-${productoActual}`).classList.remove('active');
    document.getElementById(`producto-1`).classList.remove('active');

    // Calcular el siguiente producto
    if (direccion === 'adelante') {
        productoActual++;
        if (productoActual > totalProductos) {
            productoActual = 1; // Vuelve al primero
        }
    } else {
        productoActual--;
        if (productoActual < 1) {
            productoActual = totalProductos; // Vuelve al último
        }
    }

    // Preparar las clases CSS para la animación
    let prev = productoActual - 1;
    if (prev < 1) prev = totalProductos;
    let next = productoActual + 1;
    if (next > totalProductos) next = 1;

    // Aplicar clases: El anterior a la izquierda, el actual activo, el siguiente a la derecha
    document.getElementById(`producto-${prev}`).className = 'product-section prev';
    document.getElementById(`producto-${productoActual}`).className = 'product-section active';
    document.getElementById(`producto-${next}`).className = 'product-section next';
}

function enviarPedido(numProducto) {
    // Obtiene la talla específica del producto seleccionado
    const talla = document.getElementById(`talla-${numProducto}`).value;
    
    let nombreProducto = "";
    // Define el nombre basado en qué botón se presionó
    if (numProducto === 1) nombreProducto = "HUSTLE OVERSIZE - BLACK";
    if (numProducto === 2) nombreProducto = "GRAFFITI MTY - WHITE";
    if (numProducto === 3) nombreProducto = "OLD ENGLISH - BLUE";
    
    //
