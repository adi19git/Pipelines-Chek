// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Learn More button functionality
document.getElementById('learnBtn').addEventListener('click', function () {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    
    // Get form data
    const formData = new FormData(this);
    
    // Show success message
    formMessage.textContent = '✓ Thank you! Your message has been sent.';
    formMessage.style.color = '#90EE90';
    
    // Reset form
    this.reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// Add active state to nav items on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Console welcome message
console.log('%cWelcome to Django App!', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with Django, HTML, CSS, and JavaScript', 'color: #666; font-size: 12px;');
