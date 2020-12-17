const hamburgerIcon = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
const mobileNav = document.querySelector('.mobile-nav');

const toggleMenu = () => {
    logo.classList.toggle('hide');
    mobileNav.classList.toggle('hide');
    document.querySelector('header').classList.toggle('mobile-bg');

    if (hamburgerIcon.src.endsWith('Group(1).png')) {
        hamburgerIcon.setAttribute('src', '../images/Vector(3).png');
    } else {
        hamburgerIcon.setAttribute('src', '../images/Group(1).png');
    }
};

hamburgerIcon.addEventListener('click', toggleMenu);
