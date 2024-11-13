// Variables de commande
const subtotal = 100; // Exemple de sous-total
const discount = 20; // Exemple de remise
const shipping = 5; // Exemple de frais de livraison
const total = subtotal - discount + shipping; // Calcul du total

// Variables pour les adresses
let addressCount = 1; // Adresse de base déjà présente

// Fonction pour mettre à jour les totaux dans l'aside
function updateOrderDetails() {
    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('discount').textContent = discount;
    document.getElementById('shipping').textContent = shipping;
    document.getElementById('total').textContent = total;
}

// Ajouter une nouvelle adresse
document.getElementById('add-address').addEventListener('click', function() {
    if (addressCount < 3) {
        document.getElementById('address-form').style.display = 'block';
    } else {
        document.getElementById('address-limit-message').style.display = 'block';
    }
});

// Ajouter une nouvelle adresse dans la liste
document.getElementById('new-address-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postal-code').value;

    const newAddressItem = document.createElement('li');
    newAddressItem.classList.add('address-item');
    newAddressItem.innerHTML = `
        <input type="radio" name="address" value="${address}, ${city}, ${postalCode}">
        <label>${address}, ${city}, ${postalCode}</label>
    `;
    
    // Ajouter l'adresse juste après l'adresse de base
    const addressList = document.getElementById('address-list');
    addressList.insertBefore(newAddressItem, addressList.children[1]); // L'ajoute après l'adresse de base

    addressCount++;
    document.getElementById('address-form').style.display = 'none'; // Masquer le formulaire
    document.getElementById('address-limit-message').style.display = 'none'; // Masquer le message d'erreur
});

// Sélectionner la méthode de paiement
document.getElementById('payment-card').addEventListener('click', function() {
    document.getElementById('card-form').style.display = 'block';
    document.getElementById('paypal-form').style.display = 'none';
});

document.getElementById('payment-paypal').addEventListener('click', function() {
    document.getElementById('paypal-form').style.display = 'block';
    document.getElementById('card-form').style.display = 'none';
});

// Passer la commande
document.getElementById('checkout-btn').addEventListener('click', function() {
    // Afficher la confirmation
    document.getElementById('confirmation').style.display = 'flex';
});

// Revenir à la page d'accueil
document.getElementById('home-btn').addEventListener('click', function() {
    window.location.href = '/'; // Redirige vers la page d'accueil
});

// Initialiser les totaux
updateOrderDetails();
