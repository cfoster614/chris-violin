const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

const features = document.querySelectorAll(".feature");
const dots = document.querySelectorAll(".feature-dot");
const nextFeature = document.querySelector(".feature-next");
const prevFeature = document.querySelector(".feature-prev");

let currentFeature = 0;

function showFeature(index) {
    features.forEach(feature => {
        feature.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    features[index].classList.add("active");
    dots[index].classList.add("active");
}

nextFeature.addEventListener("click", () => {
    currentFeature++;

    if (currentFeature >= features.length) {
        currentFeature = 0;
    }

    showFeature(currentFeature);
});

prevFeature.addEventListener("click", () => {
    currentFeature--;

    if (currentFeature < 0) {
        currentFeature = features.length - 1;
    }

    showFeature(currentFeature);
});