

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

let routeDisplay;
let routeControl;

function initRouteDisplay() {
    // Initialize the map centered on LASCON
    routeDisplay = L.map('routeDisplay').setView([6.564322, 3.250581], 14);

    // Set up OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(routeDisplay);

    // Initialize route control
    routeControl = L.Routing.control({
        waypoints: [],
        routeWhileDragging: true
    }).addTo(routeDisplay);
}

function getDirections() {
    let startLocation = document.getElementById("start-location").value;

    if (!startLocation) {
        alert("Please enter your location!");
        return;
    }

    // Geocode the start location using OpenStreetMap's Nominatim API
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${startLocation}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                let startLat = parseFloat(data[0].lat);
                let startLon = parseFloat(data[0].lon);

                // Clear previous routes
                routeControl.setWaypoints([]);

                // Set new waypoints and generate a route
                routeControl.setWaypoints([
                    L.latLng(startLat, startLon),  // Start location
                    L.latLng(6.564322, 3.250581)   // Destination: LASCON, Nigeria
                ]);
            } else {
                alert("Location not found. Please try again!");
            }
        })
        .catch(error => {
            console.error("Error fetching location:", error);
            alert("Error fetching location. Please try again later!");
        });
}

// Initialize the map on page load
window.onload = initRouteDisplay;


document.getElementById("yourForm").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form submitted!");
});

document.addEventListener("DOMContentLoaded", function () {
    var routeDisplay = document.getElementById("routeDisplay");
    console.log(routeDisplay);  // Should log the div element
});


