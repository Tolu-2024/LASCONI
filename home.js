

document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Select all dropdown links
    const dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent link navigation
            
            // Close any open dropdowns before opening a new one
            document.querySelectorAll(".dropdown").forEach(item => {
                if (item !== this.parentElement) {
                    item.classList.remove("active");
                }
            });

            // Toggle the clicked dropdown
            this.parentElement.classList.toggle("active");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(item => {
                item.classList.remove("active");
            });
        }
    });
 
});

document.addEventListener("DOMContentLoaded", function() {
    function showContent(id) {
        var contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }

    // Attach event listeners dynamically
    document.querySelectorAll('.tab').forEach(button => {
        button.addEventListener('click', function() {
            showContent(this.getAttribute('onclick').split("'")[1]);
        });
    });
});

