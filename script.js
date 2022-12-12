const burger = document.getElementById("burger")
const links = document.querySelector(".links")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    links.classList.toggle("open")
})

// Meniu links animation
const sections = document.querySelectorAll("section")
const anchors = document.querySelectorAll("a")
window.addEventListener("scroll", function(){
    let current

    for(let section of sections){
       if(window.pageYOffset >= section.offsetTop - 50){
            current = section.getAttribute("id")
       }
    }

    for(let anchor of anchors){
        anchor.classList.remove("active")
        if(anchor.getAttribute("href") === "#" + current){
            anchor.classList.add("active")
        }
    }

    // Heading animation
    const headings = document.querySelectorAll("h2")
    for(let heading of headings){
        heading.classList.remove("headingAnimation")
    }

    let currentHeading = document.getElementById(current).querySelector("h2")
    currentHeading.classList.add("headingAnimation")
    })

    // Pirmo heading užkrovimas perkrovus puslapį
    window.addEventListener("load", function(){
        const firstHeading = document.querySelector("h2")
        firstHeading.classList.add("headingAnimation")
})

// Mobile meniu suskleidimas paspausdus anchor
for(let anchor of anchors){
    anchor.addEventListener("click", function(){
        links.classList.remove("open")
        burger.classList.remove("rotate")
    })
}