document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const sidebar = document.createElement("div");
    const navItems = document.querySelectorAll("nav ul li a");

    // Create Sidebar dynamically
    sidebar.classList.add("sidebar");
    document.body.appendChild(sidebar);

    navItems.forEach((item) => {
        const clonedItem = item.cloneNode(true);
        sidebar.appendChild(clonedItem);
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
            sidebar.classList.add("active");
        } else {
            header.classList.remove("scrolled");
            sidebar.classList.remove("active");
        }
    });
});

function toggleDarkMode() {
    const body = document.body;
    const darkModeIcon = document.getElementById("dark-mode-icon");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        darkModeIcon.textContent = "☀️"; // Sun icon for light mode
    } else {
        darkModeIcon.textContent = "🌚"; // Moon icon for dark mode
    }
}

// Set dark mode as default
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dark-mode");
});