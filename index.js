const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})
ocument.addEventListener("DOMContentLoaded", function() {
    const buyNowButtons = document.querySelectorAll(".buy-now");

    buyNowButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            // Enlaces correspondientes para cada botón "Comprar Ahora"
            const links = [
                "https://mpago.la/2JTfeq7",
                "https://otro-enlace.com", // Reemplaza con el enlace deseado para la segunda sección
                // Agrega más enlaces aquí si tienes más secciones
            ];

            // Redirige al enlace correspondiente
            window.location.href = links[index];
        });
    });
});