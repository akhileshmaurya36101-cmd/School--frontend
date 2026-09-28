// Welcome message
window.onload = function () {
    console.log("Welcome to Bright Future School");
};


// Contact Form Validation
document.querySelector("form").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been submitted.");

    this.reset();
});


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});