// Contact Page JavaScript
// Handles contact form, consultation booking, and form enhancements

class ContactController {
    constructor() {
        this.init();
    }

    init() {
        this.initContactForm();
        this.initFormEnhancements();
        this.initConsultationBooking();
        this.initSmoothScrolling();
    }

    // Contact form functionality
    initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactFormSubmission(contactForm);
        });

        // Auto-resize textarea
        const messageTextarea = contactForm.querySelector('#message');
        if (messageTextarea) {
            messageTextarea.addEventListener('input', this.autoResizeTextarea);
        }

        // Subject-based form customization
        const subjectSelect = contactForm.querySelector('#subject');
        if (subjectSelect) {
            subjectSelect.addEventListener('change', (e) => {
                this.customizeFormBasedOnSubject(e.target.value);
            });
        }
    }

    async handleContactFormSubmission(form) {
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        try {
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';

            // Validate form data
            if (!this.validateContactForm(formData)) {
                throw new Error('Please fill in all required fields');
            }

            // Submit form data
            await this.submitContactForm(formData);

            // Show success message
            this.showSuccessMessage();
            form.reset();
            
            // Reset any customizations
            this.resetFormCustomizations();

        } catch (error) {
            console.error('Contact form error:', error);
            this.showErrorMessage(error.message);
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
        }
    }

    validateContactForm(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Please enter a valid email address');
        }

        return true;
    }

    async submitContactForm(formData) {
        // This would integrate with your backend API or email service
        // For demonstration, we'll simulate the submission
        
        const formObject = {};
        for (let [key, value] of formData.entries()) {
            if (formObject[key]) {
                // Handle checkbox arrays
                if (Array.isArray(formObject[key])) {
                    formObject[key].push(value);
                } else {
                    formObject[key] = [formObject[key], value];
                }
            } else {
                formObject[key] = value;
            }
        }

        console.log('Contact form submission:', formObject);

        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success/failure
                if (Math.random() > 0.1) { // 90% success rate
                    resolve({ status: 'success' });
                } else {
                    reject(new Error('Network error. Please try again.'));
                }
            }, 1500);
        });
    }

    customizeFormBasedOnSubject(subject) {
        const form = document.getElementById('contact-form');
        const messageTextarea = form.querySelector('#message');
        
        // Update placeholder text based on subject
        const placeholders = {
            consultation: "Tell us about your property, goals, and what you'd like to achieve with your space...",
            design: "Describe your design project, property size, and vision for your space...",
            workshop: "Which workshops are you interested in? Do you have specific topics you'd like to learn about?",
            installation: "What type of installation are you considering? Please include details about your space and timeline...",
            general: "How can we help you with your permaculture journey?"
        };

        if (messageTextarea && placeholders[subject]) {
            messageTextarea.placeholder = placeholders[subject];
        }

        // Show/hide relevant checkboxes
        this.updateInterestsCheckboxes(subject);
    }

    updateInterestsCheckboxes(subject) {
        const checkboxGroups = document.querySelectorAll('.form-group .checkbox-label');
        
        checkboxGroups.forEach(group => {
            const input = group.querySelector('input');
            const value = input.value;
            
            // Show relevant checkboxes based on subject
            switch (subject) {
                case 'consultation':
                    group.style.display = value === 'consultation' ? 'flex' : 'none';
                    break;
                case 'workshop':
                    group.style.display = value === 'workshops' ? 'flex' : 'none';
                    break;
                default:
                    group.style.display = 'flex';
            }
        });
    }

    resetFormCustomizations() {
        const messageTextarea = document.querySelector('#message');
        if (messageTextarea) {
            messageTextarea.placeholder = "Tell us about your project, property, or questions...";
        }
        
        const checkboxGroups = document.querySelectorAll('.form-group .checkbox-label');
        checkboxGroups.forEach(group => {
            group.style.display = 'flex';
        });
    }

    autoResizeTextarea(e) {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    // Form enhancements
    initFormEnhancements() {
        this.addFloatingLabels();
        this.addProgressIndicator();
        this.initCharacterCount();
        this.addFormFieldAnimations();
    }

    addFloatingLabels() {
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
        
        formInputs.forEach(input => {
            if (input.type === 'checkbox') return;
            
            const parent = input.parentNode;
            const label = parent.querySelector('label');
            
            if (!label) return;
            
            // Add floating label behavior
            input.addEventListener('focus', () => {
                label.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.classList.remove('focused');
                }
            });
            
            // Check initial state
            if (input.value) {
                label.classList.add('focused');
            }
        });
    }

    addProgressIndicator() {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'form-progress';
        progressBar.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <span class="progress-text">0% Complete</span>
        `;
        
        // Add styles
        progressBar.style.cssText = `
            margin-bottom: 2rem;
            padding: 1rem;
            background: linear-gradient(135deg, var(--color-light) 0%, var(--color-off-white) 100%);
            border-radius: var(--radius-md);
        `;
        
        form.insertBefore(progressBar, form.firstChild);
        
        // Update progress on input
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.updateFormProgress());
        });
    }

    updateFormProgress() {
        const form = document.getElementById('contact-form');
        const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
        const progressFill = form.querySelector('.progress-fill');
        const progressText = form.querySelector('.progress-text');
        
        if (!progressFill || !progressText) return;
        
        let completed = 0;
        requiredInputs.forEach(input => {
            if (input.value.trim()) completed++;
        });
        
        const percentage = Math.round((completed / requiredInputs.length) * 100);
        
        progressFill.style.width = percentage + '%';
        progressText.textContent = percentage + '% Complete';
        
        // Add gradient to progress fill
        progressFill.style.background = 'var(--gradient-primary)';
        progressFill.style.transition = 'width 0.3s ease';
    }

    initCharacterCount() {
        const messageTextarea = document.querySelector('#message');
        if (!messageTextarea) return;
        
        const maxLength = 500;
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.875rem;
            color: var(--color-warm-neutral);
            margin-top: 0.5rem;
        `;
        
        messageTextarea.parentNode.appendChild(counter);
        
        const updateCounter = () => {
            const length = messageTextarea.value.length;
            counter.textContent = `${length}/${maxLength} characters`;
            
            if (length > maxLength * 0.8) {
                counter.style.color = 'var(--color-primary)';
            } else {
                counter.style.color = 'var(--color-warm-neutral)';
            }
        };
        
        messageTextarea.addEventListener('input', updateCounter);
        updateCounter();
    }

    addFormFieldAnimations() {
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentNode.style.transform = 'scale(1.02)';
                input.style.boxShadow = '0 0 0 3px rgba(26, 200, 219, 0.1)';
            });
            
            input.addEventListener('blur', () => {
                input.parentNode.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
        });
    }

    // Consultation booking
    initConsultationBooking() {
        const bookingButtons = document.querySelectorAll('.consultation-option, .btn[href*="book"]');
        
        bookingButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.tagName === 'A' && button.href.includes('#')) {
                    e.preventDefault();
                }
                this.handleConsultationBooking(button);
            });
        });
    }

    handleConsultationBooking(element) {
        // Determine consultation type
        const isFree = element.textContent.includes('Free') || 
                       element.closest('.consultation-option')?.textContent.includes('Free');
        
        if (isFree) {
            this.bookFreeConsultation();
        } else {
            this.bookPaidConsultation();
        }
    }

    bookFreeConsultation() {
        // Scroll to contact form and pre-fill
        const contactForm = document.getElementById('contact-form');
        const subjectSelect = contactForm.querySelector('#subject');
        
        if (subjectSelect) {
            subjectSelect.value = 'consultation';
            this.customizeFormBasedOnSubject('consultation');
        }
        
        // Scroll to form
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight the form
        contactForm.style.boxShadow = '0 0 30px rgba(26, 200, 219, 0.3)';
        setTimeout(() => {
            contactForm.style.boxShadow = 'var(--shadow-md)';
        }, 2000);
    }

    bookPaidConsultation() {
        // This would integrate with a booking system like Calendly
        this.showBookingModal();
    }

    showBookingModal() {
        const modal = document.createElement('div');
        modal.className = 'booking-modal';
        modal.innerHTML = `
            <div class="booking-modal-content">
                <button class="modal-close">&times;</button>
                <h3>Book Your Consultation</h3>
                <p>Choose your preferred booking method:</p>
                <div class="booking-options">
                    <a href="mailto:hello@sunshinecollective.com?subject=1-Hour%20Consultation%20Booking" class="booking-btn">
                        📧 Email Us
                    </a>
                    <a href="tel:+15551234567" class="booking-btn">
                        📞 Call Us
                    </a>
                    <button class="booking-btn" onclick="window.open('https://calendly.com/sunshine-collective', '_blank')">
                        📅 Online Calendar
                    </button>
                </div>
            </div>
        `;
        
        // Add styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 2rem;
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    // Smooth scrolling for anchor links
    initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Success and error messages
    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <div class="success-content">
                <div class="success-icon">✓</div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
        `;
        
        this.showNotificationMessage(message, 'success');
    }

    showErrorMessage(errorText) {
        const message = document.createElement('div');
        message.className = 'error-message';
        message.innerHTML = `
            <div class="error-content">
                <div class="error-icon">⚠</div>
                <h4>Error Sending Message</h4>
                <p>${errorText}</p>
            </div>
        `;
        
        this.showNotificationMessage(message, 'error');
    }

    showNotificationMessage(messageElement, type) {
        messageElement.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 2rem;
            border-radius: var(--radius-lg);
            color: white;
            max-width: 400px;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease-out;
            box-shadow: var(--shadow-xl);
            background: ${type === 'success' ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        `;
        
        document.body.appendChild(messageElement);
        
        // Animate in
        requestAnimationFrame(() => {
            messageElement.style.transform = 'translateX(0)';
        });
        
        // Auto remove
        setTimeout(() => {
            messageElement.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.parentNode.removeChild(messageElement);
                }
            }, 300);
        }, 5000);
        
        // Click to close
        messageElement.addEventListener('click', () => {
            messageElement.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.parentNode.removeChild(messageElement);
                }
            }, 300);
        });
    }
}

// Initialize contact controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.querySelector('.contact-main'))) {
        new ContactController();
    }
});