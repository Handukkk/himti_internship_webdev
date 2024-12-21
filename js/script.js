document.getElementById('navbar-logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

document.getElementById('home').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

document.getElementById('events').addEventListener('click', function(e) {
    e.preventDefault();
    const element = document.getElementById('events-container')
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    })
});

document.getElementById('about').addEventListener('click', function(e) {
    e.preventDefault();
    const element = document.getElementById('about-container')
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - 35;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    })
});

document.getElementById('contact').addEventListener('click', function(e) {
    e.preventDefault();
    const element = document.getElementById('contact-container')
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    })
});
