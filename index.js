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
const skillsSection = document.getElementById("skillSection");
const skillsButton = document.querySelector(".skills");


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
        skillsSection.style.display = "none";
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
})

closeContactMeDirectlySection.addEventListener("click", (event) => {
    contactMeDirectlySection.style.display = "none";
})

skillsButton.addEventListener("click", (event) => {
    skillsSection.style.display = "flex";
    bodySection.style.justifyContent = "center";
    bodySection.style.alignItems = "center";
})

function toggleSkillsExclusive(header) {
    const allCategories = document.querySelectorAll('.skillCategory');
    const clickedCategory = header.parentElement;
    const skills = header.nextElementSibling;

    if (skills.style.display === "none") {
        // Hide all other categories
        allCategories.forEach(category => {
            if (category !== clickedCategory) {
                category.style.display = "none";
            }
        });
        // Show the clicked category's skills
        skills.style.display = "block";
    } else {
        // Show all categories again if clicked category is already expanded
        allCategories.forEach(category => {
            category.style.display = "block";
            category.querySelector('.skills').style.display = "none"; // Collapse all skills
        });
    }
}