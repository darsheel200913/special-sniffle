// Simple JavaScript for any interactive behavior (Optional for now)
document.addEventListener('DOMContentLoaded', function () {
    // Example: smooth scroll to sections when clicking navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
