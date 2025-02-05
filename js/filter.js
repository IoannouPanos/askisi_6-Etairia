document.addEventListener("DOMContentLoaded", function () {
    // Επιλέγουμε όλα τα κουμπιά φίλτρων
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Επιλέγουμε όλα τα προϊόντα (κάρτες) που έχουν data-category
    const productCards = document.querySelectorAll(".col");

    // Συνάρτηση για φιλτράρισμα προϊόντων
    function filterProducts(category) {
        productCards.forEach((card) => {
            if (category === "all") {
                card.style.display = "block";
            } else {
                card.style.display = card.getAttribute("data-category") === category ? "block" : "none";
            }
        });
    }

    // Διαβάζουμε το query parameter από το URL
    const params = new URLSearchParams(window.location.search);
    const categoryFromURL = params.get("category");

    // Αν υπάρχει κατηγορία στο URL, εφαρμόζουμε το φιλτράρισμα
    if (categoryFromURL) {
        filterProducts(categoryFromURL);
    }

    // Προσθέτουμε event listener στα κουμπιά φίλτρων
    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const category = button.getAttribute("data-category");
            filterProducts(category);
        });
    });
});
