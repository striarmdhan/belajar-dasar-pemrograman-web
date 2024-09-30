const toggleButton = document.getElementById('darkModeToggle');
const icon = document.getElementById('darkModeIcon');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            toggleButton.style.color = 'white';
            toggleButton.style.backgroundColor = 'rgb(5, 36, 62)';
            
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            toggleButton.style.color = 'rgb(10, 63, 106)';
            toggleButton.style.backgroundColor = 'white';
        }
});


const hamburger = document.getElementById("hamburger");
const menuContainer = document.querySelector(".menu-container");
const navLinks = document.querySelectorAll(".menu-container a");

hamburger.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuContainer.classList.remove("active");
    });
});


