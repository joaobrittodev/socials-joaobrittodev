 window.addEventListener('load', function () {
            const loadingScreen = document.getElementById('loading-screen');
            setTimeout(function () {
                loadingScreen.style.display = 'none';
            },); // Adds a 1-second delay for debugging
        });

        document.addEventListener('DOMContentLoaded', function () {
            const elements = document.querySelectorAll('.reveal');

            const revealOnScroll = function () {
                for (let i = 0; i < elements.length; i++) {
                    let windowHeight = window.innerHeight;
                    let elementTop = elements[i].getBoundingClientRect().top;
                    let elementVisible = 150;

                    if (elementTop < windowHeight - elementVisible) {
                        elements[i].classList.add('reveal-active');
                    } else {
                        elements[i].classList.remove('reveal-active');
                    }
                }
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Initial check on page load
        });