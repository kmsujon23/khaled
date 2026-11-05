(function () {
    "use strict";

    const header = document.querySelector(".kms-header");
    const menuButton = document.querySelector(".kms-menu-toggle");
    const navigation = document.querySelector(".kms-navigation");
    const backTop = document.querySelector(".kms-back-top");
    const year = document.querySelector("#kms-year");

    if (year) year.textContent = new Date().getFullYear();

    function updateScrollState() {
        if (header) header.classList.toggle("kms-scrolled", window.scrollY > 24);
        if (backTop) backTop.classList.toggle("visible", window.scrollY > 600);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const open = navigation.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(open));
            menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
            document.body.classList.toggle("kms-menu-open", open);
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                document.body.classList.remove("kms-menu-open");
            });
        });
    }

    if (backTop) {
        backTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const revealItems = document.querySelectorAll(".kms-reveal");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(function (item) { observer.observe(item); });
    } else {
        revealItems.forEach(function (item) { item.classList.add("is-visible"); });
    }

    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".kms-navigation a[href^='#']"));
    if ("IntersectionObserver" in window && sections.length) {
        const sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function (link) {
                    link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
                });
            });
        }, { rootMargin: "-35% 0px -55% 0px" });
        sections.forEach(function (section) { sectionObserver.observe(section); });
    }
})();
