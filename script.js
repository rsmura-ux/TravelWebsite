/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");

}


/* =====================================================
   ITINERARY BUTTON
===================================================== */

function showItinerary(destination) {

    alert(
        "✈️ " + destination +
        "\n\nThis itinerary will be available soon!"
    );

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received. ✈️";

    contactForm.reset();

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});