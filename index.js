function mover(element) {
    element.style.color = '#2a8cff';
}

function movout(element) {
    element.style.color = '#42a4ff';
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hamburger Menu for Mobile
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.navbar ul');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<i class="bx bx-menu"></i>';
navbar.prepend(hamburger);

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="bx bx-chevron-up"></i>';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Newsletter Form Submission with Formspree
const form = document.querySelector('footer .news-col form');
const emailInput = form.querySelector('input[name="email"]');
const formMessage = form.querySelector('.form-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        formMessage.textContent = 'Please enter an email address.';
        formMessage.style.color = '#ff4444';
        return;
    }
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = '#ff4444';
        return;
    }

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formMessage.textContent = 'Thank you for subscribing!';
            formMessage.style.color = '#42a4ff';
            emailInput.value = '';
        } else {
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            formMessage.style.color = '#ff4444';
        }
    } catch (error) {
        formMessage.textContent = 'Error: Could not connect to the server.';
        formMessage.style.color = '#ff4444';
    }
});