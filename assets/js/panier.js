document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelectorAll('.product-item');
    const subtotalElement = document.getElementById('subtotal');
    const discountElement = document.getElementById('discount');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');

    const calculateTotal = () => {
        let subtotal = 0;
        let shipping = 0;
        productList.forEach(item => {
            const price = parseFloat(item.getAttribute('data-price'));
            const quantity = parseInt(item.getAttribute('data-quantity'));
            const size = item.getAttribute('data-size'); // Récupérer la taille
            const color = item.getAttribute('data-color'); // Récupérer la couleur

            console.log(`Taille: ${size}, Couleur: ${color}`);  // Pour vérifier la taille et la couleur

            subtotal += price * quantity;
        });

        // Calcul de la remise
        const discount = subtotal * 0.20; // Remise de 20%
        const total = subtotal - discount + shipping;

        // Mise à jour de l'affichage
        subtotalElement.textContent = subtotal.toFixed(2);
        discountElement.textContent = discount.toFixed(2);
        shippingElement.textContent = shipping.toFixed(2); // Livraison gratuite ici
        totalElement.textContent = total.toFixed(2);
    };

    // Calcul initial
    calculateTotal();

    // Si les quantités ou prix changent, on recalcule
    productList.forEach(item => {
        const quantityElement = item.querySelector('.product-quantity');
        quantityElement.addEventListener('change', (e) => {
            const newQuantity = parseInt(e.target.value);
            item.setAttribute('data-quantity', newQuantity);
            calculateTotal();
        });
    });
});
