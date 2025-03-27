document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.createElement("button");
    toggleBtn.id = "sidebarToggle";
    toggleBtn.innerHTML = "☰";

    // Place toggle button at the right side of the navbar
    document.querySelector(".navbar-brand").after(toggleBtn);

    // Show/hide toggle button based on screen size
    function checkScreenSize() {
        if (window.innerWidth >= 992) {
            toggleBtn.style.display = "none"; // Hide on large screens
            sidebar.classList.add("active");  // Keep sidebar open
        } else {
            toggleBtn.style.display = "block"; // Show on small screens
            sidebar.classList.remove("active"); // Keep sidebar closed initially
        }
    }

    // Run function on load and on window resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Sidebar Toggle
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
});
