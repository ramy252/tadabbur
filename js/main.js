window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");
    let lastSection = sections[sections.length - 1];
    let lastLink = navLinks[navLinks.length - 1];
    let bottomOfLastSection = lastSection.offsetTop + lastSection.offsetHeight;
    let scrollY = window.scrollY + window.innerHeight;

    if (scrollY >= bottomOfLastSection) {
        navLinks.forEach(link => link.classList.remove("highlight"));
        lastLink.classList.add("highlight");
    } else {
        sections.forEach(section => {
            let top = section.offsetTop - 100;
            let bottom = top + section.offsetHeight;
            let id = section.getAttribute("id");

            if (window.scrollY >= top && window.scrollY < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove("highlight");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("highlight");
                    }
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
        const carouselElement = document.getElementById('logoCarousel');
        if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
                interval: 3000,
                wrap: true,
                ride: 'carousel'
            });
        }
});
    
