const aboutButton = document.querySelector(".about");

const bottomRoot = document.getElementById("root");
const allButtons = document.querySelectorAll(".button");
const aboutSection = document.getElementById("aboutSection");
const youTubeButton = document.querySelector(".youtube");
const goBackButton = document.querySelectorAll(".goBack");
const projectSection = document.getElementById("projectSection");
const projectButton = document.querySelector(".projects");
const bodySection = document.querySelector("body");
const contactSection = document.getElementById("contactSection");
const contactButton = document.querySelector(".contact");
const contactMeDirectly = document.getElementById("contactMeDirectly");
const contactMeDirectlySection = document.getElementById("contactMeDirectlySection");
const closeContactMeDirectlySection = document.getElementById("closeContactMeDirectlySection");

allButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        bottomRoot.style.display = "none";
    });
})

aboutButton.addEventListener("click", (event) => {
    aboutSection.style.display = "flex";
})

youTubeButton.addEventListener("click", (event) => {
    window.open("https://www.youtube.com/@datageekrj");
    
    bottomRoot.style.display = "flex    ";
})

goBackButton.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        
        bottomRoot.style.display = "flex";
        // btn.style.display = "none";
        aboutSection.style.display = "none";
        projectSection.style.display = "none";
        bodySection.style.justifyContent = "center";
        bodySection.style.alignItems = "";
        contactSection.style.display = "none";
    });
})

projectButton.addEventListener("click", (event) => {
    projectSection.style.display = "flex";
    bodySection.style.justifyContent = "center";
    bodySection.style.alignItems = "center";
})

contactButton.addEventListener("click", (event) => {
    contactSection.style.display = "flex";
    bodySection.style.justifyContent = "center";
    bodySection.style.alignItems = "center";
})

contactMeDirectly.addEventListener("click", (event) => {
    contactMeDirectlySection.style.display = "flex";
    // bodySection.style.justifyContent = "center";
    // bodySection.style.alignItems = "center";
})

closeContactMeDirectlySection.addEventListener("click", (event) => {
    contactMeDirectlySection.style.display = "none";
})
