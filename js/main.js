// مستمع تحميل الصفحة لتهيئة كل شيء
document.addEventListener("DOMContentLoaded", function () {
    // اختيار العناصر اللي هيطبق عليها تأثير الظهور
    const elementsToReveal = document.querySelectorAll("section, .feature-box, .stats, .tile, .rewards-section, .downloadSection");

    // إعدادات IntersectionObserver للظهور والاختفاء المستمر
    const observerOptions = {
        root: null, // الـ Viewport كمرجع
        rootMargin: "0px", // مسافة إضافية حوالين العنصر
        threshold: 0.1 // يبدأ التأثير لما 10% من العنصر يظهر
    };

    // إنشاء الـ Observer لمراقبة العناصر بشكل مستمر
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // إضافة الكلاس للظهور
            } else {
                entry.target.classList.remove("visible"); // إزالة الكلاس للاختفاء
            }
        });
    }, observerOptions);

    // تطبيق الكلاس الأساسي ومراقبة العناصر
    elementsToReveal.forEach(element => {
        element.classList.add("scroll-reveal");
        observer.observe(element); // المراقبة مستمرة
    });

    // تشغيل الـ Carousel
    const carouselElement = document.getElementById("logoCarousel");
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            wrap: true,
            ride: "carousel"
        });
    }
});

// مستمع الـ Scroll لتأثير الـ Navbar وتسليط الضوء على الـ Nav Links
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");
    let lastSection = sections[sections.length - 1];
    let lastLink = navLinks[navLinks.length - 1];
    let bottomOfLastSection = lastSection.offsetTop + lastSection.offsetHeight;
    let scrollY = window.scrollY + window.innerHeight;

    // تأثير الـ Navbar عند الـ Scroll
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }

    // تسليط الضوء على الـ Nav Links بناءً على القسم المرئي
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
    

function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
}

window.addEventListener("scroll", debounce(function () {
    // الكود بتاع الـ Navbar والـ Highlight هنا
}, 100));

document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.createElement("button");
    backToTop.textContent = "رجوع للأعلى";
    backToTop.style.cssText = "position: fixed; bottom: 20px; right: 20px; display: none; padding: 10px 20px; background-color: #118ac9; color: white; border: none; border-radius: 25px; cursor: pointer;";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
