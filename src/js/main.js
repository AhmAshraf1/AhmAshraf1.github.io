// Portfolio Website JavaScript
// Apple-inspired interactions and smooth transitions

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initializeNavigation();
  initializeMobileMenu();
  initializeScrollProgress();
  initializeFadeInAnimations();
  initializeProjectFiltering();
  initializeProjectModals();
  initializeContactForm();
  initializePageTransitions();
  initializeYear();
  initializeTimelineInteractions();
});

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-item');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
    });
  });
}

// Mobile menu functionality
function initializeMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      
      // Animate hamburger to X
      const spans = this.querySelectorAll('span');
      if (!mobileMenu.classList.contains('hidden')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        // Reset hamburger
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
}

// Scroll progress bar
function initializeScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      scrollProgress.style.width = scrollPercent + '%';
    });
  }
}

// Fade-in animations using Intersection Observer
function initializeFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => observer.observe(el));
  }
}

// Project filtering functionality
function initializeProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.classList.remove('text-primaryText', 'bg-white/10');
          btn.classList.add('text-secondaryText');
        });
        
        this.classList.add('active', 'text-primaryText', 'bg-white/10');
        
        // Filter projects
        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category');
          
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.6s ease-out';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

// Project modal functionality
function initializeProjectModals() {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const closeModal = document.getElementById('close-modal');
  
  if (projectCards.length > 0 && modal) {
    // Project data
    const projectData = {
      'plant-disease': {
        title: 'Plant Disease Detection System',
        content: `
          <div class="space-y-6">
            <div class="bg-white/5 p-6 rounded-2xl">
              <h3 class="text-xl font-bold mb-3 text-primaryText">Project Overview</h3>
              <p class="text-secondaryText leading-relaxed">
                AI-powered system for detecting plant diseases using computer vision and deep learning. 
                Built a robot and mobile app for plant health analysis with real-time disease detection.
              </p>
            </div>
            
            <div class="bg-white/5 p-6 rounded-2xl">
              <h3 class="text-xl font-bold mb-3 text-primaryText">Technical Details</h3>
              <ul class="text-secondaryText space-y-2">
                <li>• Expanded dataset to 6000+ images across 5 disease classes</li>
                <li>• Fine-tuned MobileNetV3Large achieving ~91% test accuracy</li>
                <li>• Low inference time (&lt;17ms) for real-time applications</li>
                <li>• Integrated with robotic system for automated analysis</li>
              </ul>
            </div>
            
            <div class="bg-white/5 p-6 rounded-2xl">
              <h3 class="text-xl font-bold mb-3 text-primaryText">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span class="tag-cv px-3 py-1 rounded-full text-sm">Python</span>
                <span class="tag-ml px-3 py-1 rounded-full text-sm">TensorFlow</span>
                <span class="tag-deploy px-3 py-1 rounded-full text-sm">OpenCV</span>
                <span class="tag-cv px-3 py-1 rounded-full text-sm">MobileNetV3</span>
              </div>
            </div>
            
            <div class="bg-white/5 p-6 rounded-2xl">
              <h3 class="text-xl font-bold mb-3 text-primaryText">Results & Impact</h3>
              <ul class="text-secondaryText space-y-2">
                <li>• 91%+ accuracy in disease detection</li>
                <li>• Real-time processing capability</li>
                <li>• Scalable solution for agricultural applications</li>
                <li>• Published research paper on methodology</li>
              </ul>
            </div>
          </div>
        `
      },
      'license-plate': {
        title: 'Arabic License Plate Recognition',
        content: `
          <div class="space-y-6">
            <div class="bg-white/5 p-6 rounded-2xl">
              <h3 class="text-xl font-bold mb-3 text-primaryText">Project Overview</h3>
              <p class="text-secondaryText leading-relaxed">
                YOLO-based detection system combined with EasyOCR for Arabic license plate recognition. 
                Achieved high accuracy in both detection and character recognition for Arabic text.
              </p>
            </div>
            
            <div class="bg-white/5 p-6 rounded-2xl">
              <h3 class="text-xl font-bold mb-3 text-primaryText">Technical Details</h3>
              <ul class="text-secondaryText space-y-2">
                <li>• 99% mAP50 for license plate detection</li>
                <li>• 98% mAP50 for character recognition</li>
                <li>• Real-time processing for images and videos</li>
                <li>• Streamlit demo interface for testing</li>
              </ul>
            </div>
            
            <div class="bg-white/5 p-6 rounded-2xl">
              <h3 class="text-xl font-bold mb-3 text-primaryText">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span class="tag-cv px-3 py-1 rounded-full text-sm">YOLO</span>
                <span class="tag-ml px-3 py-1 rounded-full text-sm">EasyOCR</span>
                <span class="tag-deploy px-3 py-1 rounded-full text-sm">Streamlit</span>
                <span class="tag-cv px-3 py-1 rounded-full text-sm">OpenCV</span>
              </div>
            </div>
          </div>
        `
      }
      // Add more projects as needed
    };
    
    // Open modal on project card click
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
          modalTitle.textContent = project.title;
          modalContent.innerHTML = project.content;
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    
    // Close modal
    if (closeModal) {
      closeModal.addEventListener('click', closeModalFunction);
    }
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModalFunction();
      }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFunction();
      }
    });
    
    function closeModalFunction() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  }
}

// Enhanced contact form functionality with validation
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formMessages = document.getElementById('form-messages');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const submitBtn = document.getElementById('submit-btn');
  const loadingSpinner = document.querySelector('.loading-spinner');
  
  if (contactForm) {
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => clearValidation(input));
    });
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate all fields
      let isValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });
      
      if (!isValid) {
        showMessage('error', 'Please fill in all required fields correctly.');
        return;
      }
      
      // Show loading state
      if (submitBtn && loadingSpinner) {
        submitBtn.disabled = true;
        loadingSpinner.classList.remove('hidden');
        submitBtn.querySelector('span').textContent = 'Sending...';
      }
      
      // Simulate form submission (replace with actual backend)
      setTimeout(() => {
        showMessage('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
        contactForm.reset();
        
        // Reset button state
        if (submitBtn && loadingSpinner) {
          submitBtn.disabled = false;
          loadingSpinner.classList.add('hidden');
          submitBtn.querySelector('span').textContent = 'Send Message';
        }
      }, 2000);
    });
  }
  
  function validateField(field) {
    const validationType = field.getAttribute('data-validation');
    const value = field.value.trim();
    const validationMessage = field.parentNode.querySelector('.validation-message');
    
    let isValid = true;
    let message = '';
    
    if (validationType === 'required' && !value) {
      isValid = false;
      message = 'This field is required.';
    } else if (validationType === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        message = 'Please enter a valid email address.';
      }
    }
    
    // Show/hide validation message
    if (validationMessage) {
      if (!isValid) {
        validationMessage.textContent = message;
        validationMessage.classList.remove('hidden');
        field.classList.add('border-error', 'focus:ring-error');
        field.classList.remove('border-white/10', 'focus:ring-info');
      } else {
        validationMessage.classList.add('hidden');
        field.classList.remove('border-error', 'focus:ring-error');
        field.classList.add('border-white/10', 'focus:ring-info');
      }
    }
    
    return isValid;
  }
  
  function clearValidation(field) {
    const validationMessage = field.parentNode.querySelector('.validation-message');
    if (validationMessage) {
      validationMessage.classList.add('hidden');
    }
    field.classList.remove('border-error', 'focus:ring-error');
    field.classList.add('border-white/10', 'focus:ring-info');
  }
  
  function showMessage(type, customMessage = '') {
    if (formMessages) {
      formMessages.classList.remove('hidden');
      
      if (type === 'success') {
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        if (customMessage) {
          successMessage.querySelector('span:last-child').textContent = customMessage;
        }
      } else {
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');
        if (customMessage) {
          errorMessage.querySelector('span:last-child').textContent = customMessage;
        }
      }
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessages.classList.add('hidden');
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
      }, 5000);
    }
  }
}

// Timeline interactions for CV page
function initializeTimelineInteractions() {
  const timelineDots = document.querySelectorAll('.timeline-dot');
  
  timelineDots.forEach(dot => {
    dot.addEventListener('click', function() {
      const year = this.getAttribute('data-year');
      
      // Add click animation
      this.style.transform = 'scale(1.2)';
      setTimeout(() => {
        this.style.transform = 'scale(1.1)';
      }, 150);
      
      // Show year tooltip or highlight
      console.log(`Timeline dot clicked: ${year}`);
    });
    
    // Hover effects
    dot.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    
    dot.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// Smooth page transitions
function initializePageTransitions() {
  const links = document.querySelectorAll('a[href^="/"], a[href^="./"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip external links and same page links
      if (href.startsWith('http') || href === window.location.pathname) {
        return;
      }
      
      e.preventDefault();
      
      // Add page transition effect
      document.body.style.opacity = '0';
      document.body.style.transform = 'translateY(20px)';
      document.body.style.transition = 'all 0.3s ease-apple';
      
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
  
  // Page load animation
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
  });
}

// Initialize year in footer
function initializeYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Enhanced hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Scale and transform effects for cards
  const interactiveCards = document.querySelectorAll('.card');
  interactiveCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02) translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });
  
  // Button hover effects
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Tag hover effects
  const tags = document.querySelectorAll('.tag-cv, .tag-ml, .tag-deploy');
  tags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
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
});

// Intersection Observer for scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .timeline-dot, .skill-item, .certification-item, .language-item');
  animateElements.forEach(el => observer.observe(el));
});
