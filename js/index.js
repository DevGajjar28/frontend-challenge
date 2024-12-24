// Generate snowflakes specific to the #introduction section
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄️';

    // Randomize snowflake position, size, and animation duration
    const size = Math.random() * 1.5 + 0.5 + 'rem'; // Snowflake size
    const duration = Math.random() * 5 + 5 + 's'; // Animation duration
    const leftPosition = Math.random() * 100 + '%'; // Horizontal position

    snowflake.style.left = leftPosition;
    snowflake.style.fontSize = size;
    snowflake.style.animationDuration = duration;

    // Append snowflakes only to the introduction section
    const introductionSection = document.querySelector('#introduction');
    introductionSection.appendChild(snowflake);

    // Remove snowflake after its animation ends
    setTimeout(() => snowflake.remove(), parseFloat(duration) * 1000);
};

// Continuously create snowflakes within the #introduction section
setInterval(createSnowflake, 200);



// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});