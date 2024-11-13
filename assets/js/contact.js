    // Initialise EmailJS avec ton utilisateur (obtenu sur le tableau de bord d'EmailJS)
    emailjs.init("cQaLg4KcrS2QCVlaE");

    // Récupère le formulaire et ajoute un écouteur d'événement
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page lors de la soumission
        console.log("Formulaire soumis");
    
        // Récupère les valeurs du formulaire
        var formData = {
            nom: document.getElementById("nom").value,
            email: document.getElementById("email").value,
            telephone: document.getElementById("telephone").value,
            message: document.getElementById("message").value
        };
    
        // Envoie l'email via EmailJS
        emailjs.send("service_nah9h5s", "template_tz3psms", formData)
            .then(function(response) {
                alert("Votre message a été envoyé avec succès !");
            }, function(error) {
                alert("Une erreur s'est produite. Veuillez réessayer.");
            });
    });
    