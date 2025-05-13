let menu = document.querySelector(".hamburger-menu");
let navbar = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

let navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

let filterButtons = document.querySelectorAll(".filter-button");
let projectItems = document.querySelectorAll(".project-item");


filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        let filter = document.getElementById("data-filter").value;

        projectItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

let projectImages = document.querySelectorAll(".project-item img");
let lightbox = document.createElement("div");
let lightboxImage = document.createElement("img");

lightbox.id = "lightbox";
lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0, 0, 0, 0.8)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "1000";

lightboxImage.style.maxWidth = "90%";
lightboxImage.style.maxHeight = "90%";

lightbox.appendChild(lightboxImage);
document.body.appendChild(lightbox);

projectImages.forEach(image => {
    image.addEventListener("click", function () {
        lightboxImage.src = this.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});

let contactForm = document.querySelector("#contact-form");
let formFields = contactForm.querySelectorAll("input, textarea");

formFields.forEach(field => {
    field.addEventListener("input", function () {
        if (this.value.trim() === "") {
            this.classList.add("error");
            this.nextElementSibling.textContent = "This field is required.";
        } else {
            this.classList.remove("error");
            this.nextElementSibling.textContent = "";
        }
    });
});

contactForm.addEventListener("submit", function (event) {
    let isValid = true;

    formFields.forEach(field => {
        if (field.value.trim() === "") {
            field.classList.add("error");
            field.nextElementSibling.textContent = "This field is required.";
            isValid = false;
        } else {
            field.classList.remove("error");
            field.nextElementSibling.textContent = "";
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});