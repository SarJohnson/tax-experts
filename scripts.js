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

        // Function to scroll with offset for fixed navbar
        function scrollToSection(event) {
            event.preventDefault(); // Prevent the default link behavior
            const targetId = event.currentTarget.getAttribute("href").substring(1); // Get the ID without the #
            const targetElement = document.getElementById(targetId);

            // Calculate the offset position
            const offsetPosition = targetElement.offsetTop - 60; // Adjust 60px to match navbar height

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" // Smooth scroll effect
            });
        }

        // Add event listeners to each navbar link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', scrollToSection);
        });