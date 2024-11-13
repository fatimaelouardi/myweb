// product.js

// Gérer la sélection de la couleur
document.querySelectorAll('.color-option').forEach(function(option) {
    option.addEventListener('click', function() {
        // Retirer la classe 'selected' de toutes les options
        document.querySelectorAll('.color-option').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        // Ajouter la classe 'selected' à l'option cliquée
        this.classList.add('selected');
    });
});

// Gérer la sélection de la taille
document.querySelectorAll('.size-option').forEach(function(option) {
    option.addEventListener('click', function() {
        // Retirer la classe 'selected' de toutes les options
        document.querySelectorAll('.size-option').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        // Ajouter la classe 'selected' à l'option cliquée
        this.classList.add('selected');
    });
});

// Gérer la quantité
let quantity = 1;
document.getElementById("increase").addEventListener("click", function() {
    quantity++;
    document.getElementById("quantity-display").textContent = quantity;
});

document.getElementById("decrease").addEventListener("click", function() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity-display").textContent = quantity;
    }
});

// Événement d'ajout au panier
document.getElementById("add-to-cart").addEventListener("click", function() {
    const color = document.querySelector('.color-option.selected')?.getAttribute('data-color') || 'Aucune couleur';
    const size = document.querySelector('.size-option.selected')?.getAttribute('data-size') || 'Aucune taille';
    const quantityValue = quantity;

    const product = {
        name: "Nom du Produit",
        color: color,
        size: size,
        quantity: quantityValue,
        price: 29.99
    };

    // Sauvegarde du produit dans le panier via localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirection vers la page du panier
    window.location.href = "cart.html";
});


// Sélection des images secondaires et de l'image principale
const secondaryImages = document.querySelectorAll('.second-images img');
const mainImage = document.getElementById('main-image');

// Gestion de l'événement de clic sur chaque image secondaire
secondaryImages.forEach((img) => {
    img.addEventListener('click', () => {
        // Remplace l'image principale par l'image secondaire cliquée
        mainImage.src = img.src;
        mainImage.alt = img.alt;
    });
});



// details

// Sélectionner les titres des onglets et les contenus
const tabTitles = document.querySelectorAll('.tab-title');
const tabContents = document.querySelectorAll('.tab-content');

// Ajouter un événement de clic pour chaque titre
tabTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Supprimer la classe 'active' des titres et contenus actuels
    document.querySelector('.tab-title.active').classList.remove('active');
    document.querySelector('.tab-content.active').classList.remove('active');
    
    // Ajouter la classe 'active' au titre et au contenu correspondant
    title.classList.add('active');
    document.getElementById(title.getAttribute('data-tab')).classList.add('active');
  });
});
