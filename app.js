/* ==========================================
   VEGUI® — Main Application Script
   Collection: Broken Love
   ================================---------- */

document.addEventListener('DOMContentLoaded', () => {
    console.log('VEGUI® — System Initialized [Broken Love Collection]');

    // Capturar los botones de "Add to Cart" para darles interacción visual
    const cartButtons = document.querySelectorAll('.btn-add-cart');

    cartButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const originalText = button.textContent;
            button.textContent = 'ADDED TO CART';
            button.style.borderColor = '#f1f1f1';
            button.style.backgroundColor = '#f1f1f1';
            button.style.color = '#080808';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.borderColor = '';
                button.style.backgroundColor = '';
                button.style.color = '';
            }, 1500);

            console.log(`Producto ${index + 1} seleccionado.`);
        });
    });
});
