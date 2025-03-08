

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



document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".clickable");
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");
    let overlay = document.getElementById("imageOverlay");
    let closeBtn = document.querySelector(".close");
    let prevBtn = document.querySelector(".prev");
    let nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function openModal(imgElement) {
        modal.style.display = "flex";
        overlay.style.display = "block";
        modalImg.src = imgElement.src;
        currentIndex = Array.from(images).indexOf(imgElement);
    }

    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }

    function changeImage(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        modalImg.src = images[currentIndex].src;
    }

    images.forEach(img => {
        img.addEventListener("click", function () {
            openModal(this);
        });
    });

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    prevBtn.addEventListener("click", () => changeImage(-1));
    nextBtn.addEventListener("click", () => changeImage(1));

    document.addEventListener("keydown", function (event) {
        if (modal.style.display === "flex") {
            if (event.key === "ArrowRight") {
                changeImage(1);
            } else if (event.key === "ArrowLeft") {
                changeImage(-1);
            } else if (event.key === "Escape") {
                closeModal();
            }
        }
    });
});
