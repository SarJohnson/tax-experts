        const carousel = document.getElementById('carousel');
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showSlides(index) {
            const itemsPerSlide = 3;
            const offset = index * -100 / itemsPerSlide;
            carousel.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            const maxIndex = Math.ceil(items.length / 3) - 1;
            currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
            showSlides(currentIndex);
        }

        function prevSlide() {
            const maxIndex = Math.ceil(items.length / 3) - 1;
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
            showSlides(currentIndex);
        }

        // Auto-rotate slides every 5 seconds
        setInterval(nextSlide, 5000);

        // Modal JavaScript
        const modal = document.getElementById("servicesModal");

        function openModal() {
            modal.style.display = "flex";
        }

        function closeModal() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.querySelector('.nav-links');
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;
        
            // Toggle the mobile menu
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        
            // Add smooth scroll with offset adjustment
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
        
                    // Calculate the offset position, adjusting for the navbar height
                    const offsetPosition = targetElement.offsetTop - navbarHeight;
        
                    // Scroll to the calculated position
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
        
                    // Close the mobile menu after clicking a link (if open)
                    navLinks.classList.remove('active');
                });
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
            const slides = document.querySelectorAll(".slideshow-slide");
            let currentIndex = 0;
        
            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove("active");
                    slide.style.display = "none"; // Hide all slides
                    if (i === index) {
                        slide.classList.add("active");
                        slide.style.display = "flex"; // Show only the active slide
                    }
                });
            }
        
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }
        
            // Show the first slide initially
            showSlide(currentIndex);
        
            // Change slides every 5 seconds
            setInterval(nextSlide, 5000);
        });