document.addEventListener("DOMContentLoaded", function () {
    // Επιλέγουμε όλα τα κουμπιά φίλτρων
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Επιλέγουμε όλα τα προϊόντα (κάρτες) που έχουν data-category
    const productCards = document.querySelectorAll(".col");

    // Προσθέτουμε event listener σε κάθε κουμπί φίλτρου
    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Παίρνουμε την κατηγορία που επιλέχθηκε από το data-category
            const category = button.getAttribute("data-category");

            // Ελέγχουμε όλα τα προϊόντα και εμφανίζουμε ή κρύβουμε ανάλογα με την επιλογή
            productCards.forEach((card) => {
                if (category === "all") {
                    // Αν επιλεγεί "Όλα", εμφανίζουμε όλες τις κάρτες
                    card.style.display = "block";
                } else {
                    // Διαφορετικά, εμφανίζουμε μόνο τις κάρτες που ταιριάζουν στην κατηγορία
                    if (card.getAttribute("data-category") === category) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    });
});
