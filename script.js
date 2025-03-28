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
                sidebar.style.left = "0"; // Ensure it's visible
            } else {
                toggleBtn.style.display = "block"; // Show on small screens
                sidebar.classList.remove("active"); // Keep sidebar closed initially
                sidebar.style.left = "-250px"; // Hide it off-screen
            }
        }

        // Run function on load and on window resize
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        // Sidebar Toggle
        toggleBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            if (sidebar.classList.contains("active")) {
                sidebar.style.left = "0"; // Show sidebar
            } else {
                sidebar.style.left = "-250px"; // Hide sidebar
            }
        });
    });


//progress bar
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".circular-progress").forEach((progress) => {
            let percentage = parseInt(progress.querySelector(".progress-value").innerText);
            let color = progress.getAttribute("data-color") || "#FF7077"; // Default color
            progress.style.background = `conic-gradient(${color} ${percentage * 3.6}deg, rgba(119, 85, 119, 0.275) 0deg)`;
        });
    });
    

