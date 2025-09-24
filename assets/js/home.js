// Home Page JavaScript
// Handles testimonials carousel and home-specific functionality

class HomePageController {
    constructor() {
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000; // 5 seconds
        this.init();
    }

    init() {
        this.initTestimonialsCarousel();
        this.initHeroAnimations();
        this.initServiceCardHovers();
    }

    // Testimonials Carousel
    initTestimonialsCarousel() {
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.indicators = document.querySelectorAll('.indicator');

        if (this.slides.length === 0) return;

        // Set up indicators click handlers
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoplay();
            });
        });

        // Touch/swipe support for mobile
        this.initTouchSupport();

        // Start autoplay
        this.startAutoplay();

        // Pause autoplay on hover
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
            carousel.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    goToSlide(index) {
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');

        // Update current slide index
        this.currentSlide = index;

        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoplay() {
        if (this.slides.length <= 1) return;
        
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }

    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }

    resetAutoplay() {
        this.pauseAutoplay();
        this.startAutoplay();
    }

    // Touch support for carousel
    initTouchSupport() {
        const carousel = document.querySelector('.testimonials-carousel');
        if (!carousel) return;

        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.prevSlide();
                } else {
                    this.nextSlide();
                }
                this.resetAutoplay();
            }
        });
    }

    // Hero animations
    initHeroAnimations() {
        const hero = document.querySelector('.hero');
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroActions = document.querySelector('.hero-actions');

        if (!hero) return;

        // Add floating animation to hero background elements
        this.createFloatingElements();

        // Parallax effect on scroll (subtle)
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            if (hero) {
                hero.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });

        // Typewriter effect for hero title (optional enhancement)
        if (heroTitle && heroTitle.dataset.typewriter === 'true') {
            this.typewriterEffect(heroTitle);
        }
    }

    createFloatingElements() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        // Create floating decorative elements
        const floatingElements = [
            { symbol: '🌱', delay: 0 },
            { symbol: '🍃', delay: 2000 },
            { symbol: '🌸', delay: 4000 },
            { symbol: '🦋', delay: 6000 }
        ];

        floatingElements.forEach((element, index) => {
            setTimeout(() => {
                this.createFloatingElement(element.symbol, hero);
            }, element.delay);
        });
    }

    createFloatingElement(symbol, container) {
        const element = document.createElement('div');
        element.textContent = symbol;
        element.style.cssText = `
            position: absolute;
            font-size: 2rem;
            opacity: 0.6;
            pointer-events: none;
            z-index: 1;
            animation: float 8s infinite linear;
        `;

        // Random starting position
        element.style.left = Math.random() * 100 + '%';
        element.style.top = '100%';

        container.appendChild(element);

        // Remove element after animation
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, 8000);
    }

    // Service card hover effects
    initServiceCardHovers() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.animateServiceCard(e.target, true);
            });

            card.addEventListener('mouseleave', (e) => {
                this.animateServiceCard(e.target, false);
            });
        });
    }

    animateServiceCard(card, isHover) {
        const gradient = card.querySelector('.card-gradient');
        
        if (isHover) {
            // Expand gradient on hover
            if (gradient) {
                gradient.style.height = '100%';
                gradient.style.opacity = '0.1';
            }
        } else {
            // Reset gradient
            if (gradient) {
                gradient.style.height = '4px';
                gradient.style.opacity = '1';
            }
        }
    }

    // Typewriter effect (optional enhancement)
    typewriterEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
    }

    // Intersection Observer for scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe sections for animation
        const sections = document.querySelectorAll('.featured-services, .testimonials, .newsletter');
        sections.forEach(section => observer.observe(section));
    }

    // Newsletter form enhancement
    enhanceNewsletterForm() {
        const form = document.getElementById('newsletter-form');
        if (!form) return;

        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');

        // Add floating labels effect
        [nameInput, emailInput].forEach(input => {
            if (input) {
                this.addFloatingLabel(input);
            }
        });
    }

    addFloatingLabel(input) {
        const parent = input.parentNode;
        const label = document.createElement('label');
        label.textContent = input.placeholder;
        label.style.cssText = `
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.3s ease;
            color: var(--color-warm-neutral);
            pointer-events: none;
        `;

        parent.style.position = 'relative';
        parent.appendChild(label);

        input.addEventListener('focus', () => {
            label.style.top = '0';
            label.style.fontSize = '0.875rem';
            label.style.color = 'var(--color-primary)';
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                label.style.top = '50%';
                label.style.fontSize = '1rem';
                label.style.color = 'var(--color-warm-neutral)';
            }
        });
    }
}

// Add CSS for floating animation
const floatingCSS = `
@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.6;
    }
    50% {
        opacity: 0.3;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}

.animate-in {
    animation: fadeInUp 0.8s ease-out;
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = floatingCSS;
document.head.appendChild(style);

// Initialize home page controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.querySelector('.hero'))) {
        new HomePageController();
    }
});