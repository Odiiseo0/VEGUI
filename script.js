function enviarPedido() {
    // Obtenemos la talla que seleccionó el usuario
    const tallaSeleccionada = document.getElementById('talla').value;
    const producto = "PLAYERA OVERSIZE 'HUSTLE' - BLACK";
    
    // REEMPLAZA ESTE NÚMERO por el WhatsApp real de HOS (ej. 528112345678)
    const telefono = "528100000000"; 
    
    // Armamos el texto del mensaje automático
    const mensaje = `¡Que tal! Me interesa comprar la ${producto} en talla *${tallaSeleccionada}*. ¿Aún hay disponible?`;
    
    // Creamos el enlace oficial de la API de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    
    // Asignamos el enlace al botón dinámicamente
    document.getElementById('whatsapp-btn').href = url;
}
