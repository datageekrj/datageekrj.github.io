const aboutButton = document.querySelector(".about");
const topImage = document.getElementById("image");
const bottomRoot = document.getElementById("root");
const allButtons = document.querySelectorAll(".button");
const aboutSection = document.getElementById("aboutSection");
const youTubeButton = document.querySelector(".youtube");
const goBackButton = document.querySelector(".goBack");
const projectSection = document.getElementById("projectSection");
const projectButton = document.querySelector(".projects");
const bodySection = document.querySelector("body");

allButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        topImage.style.display = "none";
        bottomRoot.style.display = "none";
    });
})


aboutButton.addEventListener("click", (event) => {
    aboutSection.style.display = "flex";
    goBackButton.style.display = "block"
})

youTubeButton.addEventListener("click", (event) => {
    window.open("https://www.youtube.com/@datageekrj");
    topImage.style.display = "block";
    bottomRoot.style.display = "flex    ";
})

goBackButton.addEventListener("click", (event) => {
    topImage.style.display = "block";
    bottomRoot.style.display = "flex";
    goBackButton.style.display = "none";
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    bodySection.style.justifyContent = "center";
    bodySection.style.alignItems = "";
})

projectButton.addEventListener("click", (event) => {
    projectSection.style.display = "flex";
    goBackButton.style.display = "block";
    bodySection.style.justifyContent = "center";
    bodySection.style.alignItems = "center";
})
