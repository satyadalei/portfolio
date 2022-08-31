let navItems_ul = document.getElementById("nav-list-itmes");
let hamburg = document.getElementById("hamburg_menubar");
let navLinkItems = document.querySelectorAll(".nav-item") ;
console.log(navLinkItems);
console.log(typeof(Object.keys(navLinkItems)));
function toogleNav(){
    navItems_ul.classList.toggle("nav_links_flip");
    hamburg.classList.toggle("cross-nav-burger");
    console.log("Nav item clicked")
}
hamburg.addEventListener("click" ,toogleNav);
navLinkItems.forEach(function(link){
    link.addEventListener("click", toogleNav)
});
let skillsContent = document.getElementById("skills");
let experienceContent = document.getElementById("experience");
let educationContent = document.getElementById("education");
let skillsLink = document.getElementById("skills-link");
let experienceLink = document.getElementById("experience-link");
let educationLink = document.getElementById("education-link");
function openExperienceTab(){
    experienceContent.classList.add("active-tab-content");
    experienceLink.classList.add("active-tab-link");

    skillsContent.classList.remove("active-tab-content");
    skillsLink.classList.remove("active-tab-link");
    educationContent.classList.remove("active-tab-content");
    educationLink.classList.remove("active-tab-link");
}
function openSkillsTab(){
    skillsContent.classList.add("active-tab-content");
    skillsLink.classList.add("active-tab-link");
    
    experienceContent.classList.remove("active-tab-content");
    experienceLink.classList.remove("active-tab-link");
    educationContent.classList.remove("active-tab-content");
    educationLink.classList.remove("active-tab-link");
}
function openEducationTab(){
    educationContent.classList.add("active-tab-content");
    educationLink.classList.add("active-tab-link");
    
    skillsContent.classList.remove("active-tab-content");
    skillsLink.classList.remove("active-tab-link");
    experienceContent.classList.remove("active-tab-content");
    experienceLink.classList.remove("active-tab-link");
}
//openExperienceTab()