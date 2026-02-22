// This script only smooth-scrolls if the link starts with a "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Only prevent default if it's an actual hash link (not just "#")
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault(); // Stop normal click
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});