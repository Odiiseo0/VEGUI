// --- CONFIGURACIÓN DE PRODUCTOS Y FOTOS ---
// Pega aquí los links de las imágenes (pueden ser de Instagram o enlaces directos)
const productos = [
    {
        id: 1,
        nombre: "HUSTLE OVERSIZE TEE",
        precio: "$550.00 MXN",
        imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80", // Cambia por tu foto 1
        descripcion: "Algodón pesado 280g, lavado ácido, corte boxy fit."
    },
    {
        id: 2,
        nombre: "SKIMASK GRAPHIC HOODIE",
        precio: "$890.00 MXN",
        imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80", // Cambia por tu foto 2
        descripcion: "Sudadera con capucha y pasamontañas integrado, serigrafía en pecho."
    },
    {
        id: 3,
        nombre: "MEXICO REWORK JERSEY",
        precio: "$750.00 MXN",
        imagen: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80", // Cambia por tu foto 3
        descripcion: "Jersey conmemorativo edición especial de fútbol urbano."
    },
    {
        id: 4,
        nombre: "VINTAGE CAR OVERSIZE TEE",
        precio: "$580.00 MXN",
        imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80", // Cambia por tu foto 4
        descripcion: "Gráfico clásico de auto estilo underground en espalda."
    },
    {
        id: 5,
        nombre: "HUSTLAS BALACLAVA SKIMASK",
        precio: "$350.00 MXN",
        imagen: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80", // Cambia por tu foto 5
        descripcion: "Pasamontañas bordado de alta densidad color negro."
    }
];

let currentIndex = 0;
const total = productos.length;

// Cargar datos iniciales al abrir la página
window.onload = function() {
    productos.forEach((prod, index) => {
        let i = index + 1;
        document.getElementById(`img-${i}`).src = prod.imagen;
        document.getElementById(`title-${i}`).innerText = prod.nombre;
        document.getElementById(`price-${i}`).innerText = prod.precio;
        document.getElementById(`desc-${i}`).innerText = prod.descripcion;
    });
    document.getElementById('total-slides').innerText = total;
};

// Función para deslizar entre productos con las flechas
function moverSlide(direccion) {
    document.getElementById(`item-${currentIndex + 1}`).className = 'product-card next';
    
    currentIndex += direccion;
    if (currentIndex >= total) currentIndex = 0;
    if (currentIndex < 0) currentIndex = total - 1;

    // Actualizar clases de animación
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = total - 1;
    
    let nextIndex = currentIndex + 1;
    if (nextIndex >= total) nextIndex = 0;

    document.getElementById(`item-${prevIndex + 1}`).className = 'product-card prev';
    document.getElementById(`item-${currentIndex + 1}`).className = 'product-card active';
    document.getElementById(`item-${nextIndex + 1}`).className = 'product-card next';

    // Actualizar indicador numérico
    document.getElementById('current-slide').innerText = currentIndex + 1;
}

// Función para enviar el pedido directo a WhatsApp con la talla elegida
function pedirWhatsApp(numItem) {
    const prod = productos[numItem - 1];
    const tallaSeleccionada = document.getElementById(`size-${numItem}`).value;
    
    // REEMPLAZA ESTE NÚMERO con el WhatsApp real de HOS (ej. 528112345678)
    const telefonoHOS = "528100000000"; 
    
    const mensaje = `¡Qué tal! Me interesa apartar la prenda *${prod.nombre}* en talla *${tallaSeleccionada}* (${prod.precio}). ¿Hacen entregas en Monterrey o envíos?`;
    
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefonoHOS}&text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}
