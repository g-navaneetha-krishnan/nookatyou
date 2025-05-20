
        // Navigation scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Animate categories on scroll
        const categories = document.querySelectorAll('.category-card');
        
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Add a delay for staggered animation
                    const index = Array.from(categories).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.15}s`;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        categories.forEach(category => {
            observer.observe(category);
        });

        // Product hover effect
        const products = document.querySelectorAll('.product');
        
        products.forEach(product => {
            product.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            });
            
            product.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            });
        });
    