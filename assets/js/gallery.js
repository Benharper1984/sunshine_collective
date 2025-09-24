// Gallery Page JavaScript
// Handles image filtering, lightbox, and gallery interactions

class GalleryController {
    constructor() {
        this.currentFilter = 'all';
        this.lightboxOpen = false;
        this.currentLightboxItem = null;
        this.init();
    }

    init() {
        this.initImageFilters();
        this.initLightbox();
        this.initGalleryGrid();
        this.initKeyboardNavigation();
    }

    // Image filtering functionality
    initImageFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        if (filterButtons.length === 0 || galleryItems.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Get filter value
                const filter = button.getAttribute('data-filter');
                this.currentFilter = filter;

                // Filter items with animation
                this.filterGalleryItems(galleryItems, filter);
            });
        });
    }

    filterGalleryItems(items, filter) {
        items.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;

            if (shouldShow) {
                // Stagger the animation for visual appeal
                setTimeout(() => {
                    item.classList.remove('filtered-out');
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, index * 50);
            } else {
                item.classList.add('filtered-out');
                item.style.opacity = '0';
                item.style.transform = 'scale(0.9)';
            }
        });
    }

    // Lightbox functionality
    initLightbox() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightboxModal = document.getElementById('lightbox-modal');
        const lightboxClose = document.getElementById('lightbox-close');

        if (!lightboxModal) return;

        // Add click handlers to gallery items
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openLightbox(item, index);
            });
        });

        // Close lightbox handlers
        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => this.closeLightbox());
        }

        // Close on background click
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                this.closeLightbox();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightboxOpen) {
                this.closeLightbox();
            }
        });
    }

    openLightbox(item, index) {
        const lightboxModal = document.getElementById('lightbox-modal');
        const lightboxTitle = lightboxModal.querySelector('.lightbox-title');
        const lightboxDescription = lightboxModal.querySelector('.lightbox-description');
        const lightboxGradient = lightboxModal.querySelector('.lightbox-gradient');

        if (!lightboxModal) return;

        // Get item data
        const title = item.querySelector('.placeholder-content h4').textContent;
        const description = item.querySelector('.placeholder-content p').textContent;
        const gradientClass = item.querySelector('.placeholder-gradient').className.split(' ').find(cls => cls.startsWith('gradient-'));

        // Update lightbox content
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = this.getFullDescription(title, description);
        
        // Apply the same gradient
        if (gradientClass) {
            lightboxGradient.className = 'lightbox-gradient ' + gradientClass;
        }

        // Show lightbox
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.lightboxOpen = true;
        this.currentLightboxItem = index;
    }

    closeLightbox() {
        const lightboxModal = document.getElementById('lightbox-modal');
        if (lightboxModal) {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
            this.lightboxOpen = false;
            this.currentLightboxItem = null;
        }
    }

    getFullDescription(title, shortDescription) {
        // Expanded descriptions for lightbox
        const fullDescriptions = {
            'Backyard Food Forest': 'A complete transformation of a residential backyard into a productive food forest ecosystem. This project includes fruit trees, berry bushes, herb spirals, and companion plantings that work together to create a self-sustaining system. The design incorporates permaculture principles of zoning and stacking functions.',
            'Composting Workshop': 'Hands-on workshop teaching community members how to create nutrient-rich compost using kitchen scraps, yard waste, and organic materials. Participants learn about carbon-to-nitrogen ratios, turning techniques, and troubleshooting common composting issues.',
            'Rain Garden Installation': 'A beautiful and functional rain garden designed to capture and filter stormwater runoff while providing habitat for native plants and wildlife. This installation demonstrates how to work with natural water flows to prevent erosion and create beauty.',
            'Herb Spiral Garden': 'An elegant spiral design that maximizes growing space while creating multiple microclimates for various herbs. The spiral\'s vertical structure provides different sun and moisture conditions, perfect for Mediterranean herbs at the top and moisture-loving plants at the base.',
            'Living Wall Design': 'Indoor vertical garden system that brings nature inside while improving air quality and creating a stunning focal point. This design uses a modular system that\'s easy to maintain and perfect for urban environments.',
            'Seed Starting Class': 'Spring workshop focused on starting seeds indoors and preparing for the growing season. Participants learn about seed selection, germination techniques, transplanting, and hardening off seedlings for successful garden establishment.',
            'Permaculture Vegetable Garden': 'A productive vegetable garden designed using permaculture principles including companion planting, natural pest management, and soil building techniques. This garden demonstrates how to grow abundant food while building soil health.',
            'Greywater System': 'An innovative water recycling system that captures and reuses water from sinks and showers to irrigate the landscape. This system significantly reduces water usage while keeping nutrients in the local ecosystem.',
            'Permaculture Principles': 'Educational workshop introducing the 12 principles of permaculture design and how to apply them in home gardens and landscapes. Participants learn to observe patterns, catch and store energy, and design for beneficial relationships.',
            'Pollinator Garden': 'A vibrant garden designed specifically to support local pollinators including bees, butterflies, and hummingbirds. Features native plants that bloom throughout the growing season, providing continuous nectar and pollen sources.',
            'Office Plant Design': 'Workplace biophilic design that incorporates plants to improve air quality, reduce stress, and increase productivity. This design considers lighting conditions, maintenance requirements, and aesthetic integration with the workspace.',
            'Raised Bed Installation': 'Community garden project featuring raised beds constructed from sustainable materials. These beds provide improved drainage, soil control, and accessibility while creating defined growing spaces for community members.'
        };

        return fullDescriptions[title] || shortDescription + ' This project showcases sustainable design principles and demonstrates how permaculture techniques can be applied to create beautiful, productive spaces.';
    }

    // Gallery grid enhancements
    initGalleryGrid() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Add hover effects with debouncing
        galleryItems.forEach(item => {
            let hoverTimeout;
            
            item.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(() => {
                    this.enhanceGalleryItem(item, true);
                }, 100);
            });

            item.addEventListener('mouseleave', () => {
                clearTimeout(hoverTimeout);
                this.enhanceGalleryItem(item, false);
            });
        });

        // Masonry-style layout adjustment
        this.adjustGalleryLayout();
        window.addEventListener('resize', this.debounce(() => {
            this.adjustGalleryLayout();
        }, 250));
    }

    enhanceGalleryItem(item, isHover) {
        const gradient = item.querySelector('.placeholder-gradient');
        const content = item.querySelector('.placeholder-content');
        
        if (isHover) {
            // Add subtle rotation and scale
            item.style.transform = 'translateY(-8px) scale(1.02) rotateY(2deg)';
            
            // Enhance gradient
            if (gradient) {
                gradient.style.filter = 'brightness(1.1) saturate(1.2)';
            }
        } else {
            // Reset transforms
            item.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            
            if (gradient) {
                gradient.style.filter = 'brightness(1) saturate(1)';
            }
        }
    }

    adjustGalleryLayout() {
        const gallery = document.querySelector('.gallery-grid');
        const items = document.querySelectorAll('.gallery-item');
        
        if (!gallery || items.length === 0) return;

        // Dynamic column count based on screen size
        const containerWidth = gallery.offsetWidth;
        const itemWidth = 320; // minimum item width
        const gap = 32; // gap between items
        const columns = Math.floor(containerWidth / (itemWidth + gap));
        
        // Update CSS grid
        gallery.style.gridTemplateColumns = `repeat(${Math.max(1, columns)}, 1fr)`;
    }

    // Keyboard navigation for accessibility
    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.lightboxOpen) return;

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.navigateLightbox(-1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.navigateLightbox(1);
                    break;
            }
        });
    }

    navigateLightbox(direction) {
        if (this.currentLightboxItem === null) return;

        const galleryItems = Array.from(document.querySelectorAll('.gallery-item')).filter(item => 
            this.currentFilter === 'all' || item.getAttribute('data-category') === this.currentFilter
        );

        const currentIndex = galleryItems.findIndex((item, index) => index === this.currentLightboxItem);
        let newIndex = currentIndex + direction;

        // Wrap around
        if (newIndex < 0) newIndex = galleryItems.length - 1;
        if (newIndex >= galleryItems.length) newIndex = 0;

        const newItem = galleryItems[newIndex];
        if (newItem) {
            this.closeLightbox();
            setTimeout(() => {
                this.openLightbox(newItem, newIndex);
            }, 100);
        }
    }

    // Utility function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Load more functionality (for future expansion)
    initLoadMore() {
        const loadMoreButton = document.querySelector('.load-more-btn');
        if (loadMoreButton) {
            loadMoreButton.addEventListener('click', () => {
                this.loadMoreItems();
            });
        }
    }

    async loadMoreItems() {
        // Placeholder for loading more gallery items
        console.log('Loading more gallery items...');
        
        // This would typically fetch more items from a server
        // For now, just simulate the loading
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('More items loaded');
                resolve();
            }, 1000);
        });
    }
}

// Initialize gallery controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.querySelector('.gallery-main'))) {
        new GalleryController();
    }
});