

    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const body = document.body;

    // ouvrir le menu
    menuIcon.addEventListener("click", () => {
        body.classList.add("menu-active");
    });

    // fermer le menu
    closeIcon.addEventListener("click", () => {
        body.classList.remove("menu-active");
    });
