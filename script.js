// Math Animations Platform - Main JavaScript File

// Global variables
let currentAnimations = {};
let isAnimating = false;

// Initialize the platform when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeTopicFilters();
    setupSmoothScrolling();
    
    // Initialize MathJax after content is loaded
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize all animations
function initializeAnimations() {
    initializeDerivativeAnimation();
    initializeCircleAnimation();
    initializeSineWaveAnimation();
}

// Derivative Animation
function initializeDerivativeAnimation() {
    const canvas = document.querySelector('#derivative-animation canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Draw static preview
    drawDerivativePreview(ctx, width, height);
}

function drawDerivativePreview(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
    
    // Set up coordinate system
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 50;
    
    // Draw axes
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();
    
    // Draw function f(x) = x^2/4
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = -width/2; x < width/2; x += 1) {
        const realX = x / scale;
        const realY = realX * realX / 4;
        const canvasX = centerX + x;
        const canvasY = centerY - realY * scale;
        
        if (x === -width/2) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();
    
    // Draw tangent line at x = 1
    const x = 1;
    const y = x * x / 4;
    const slope = x / 2; // derivative of x^2/4 is x/2
    
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const pointX = centerX + x * scale;
    const pointY = centerY - y * scale;
    
    // Draw tangent line
    const lineLength = 60;
    const startX = pointX - lineLength;
    const startY = pointY + slope * lineLength;
    const endX = pointX + lineLength;
    const endY = pointY - slope * lineLength;
    
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    
    // Draw point
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(pointX, pointY, 4, 0, 2 * Math.PI);
    ctx.fill();
}

// Circle Animation
function initializeCircleAnimation() {
    const canvas = document.querySelector('#circle-animation canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    drawCirclePreview(ctx, width, height);
}

function drawCirclePreview(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 60;
    
    // Draw circle
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw radius
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.stroke();
    
    // Draw center point
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
    ctx.fill();
    
    // Label radius
    ctx.fillStyle = '#ff6b6b';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('r', centerX + radius/2, centerY - 10);
}

// Sine Wave Animation
function initializeSineWaveAnimation() {
    const canvas = document.querySelector('#sine-wave-animation canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    drawSineWavePreview(ctx, width, height);
}

function drawSineWavePreview(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
    
    const centerY = height / 2;
    const amplitude = 50;
    const frequency = 0.02;
    
    // Draw sine wave
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x < width; x++) {
        const y = centerY + amplitude * Math.sin(frequency * x);
        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    // Draw center line
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
}

// Animation playback functions
function playAnimation(type) {
    if (isAnimating) return;
    
    isAnimating = true;
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Playing...';
    button.disabled = true;
    
    switch(type) {
        case 'derivative':
            animateDerivative();
            break;
        case 'circle':
            animateCircle();
            break;
        case 'sine':
            animateSineWave();
            break;
    }
    
    // Reset button after animation
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        isAnimating = false;
    }, 3000);
}

function animateDerivative() {
    const canvas = document.querySelector('#derivative-animation canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let frame = 0;
    const totalFrames = 60;
    
    function animate() {
        if (frame >= totalFrames) return;
        
        drawDerivativePreview(ctx, width, height);
        
        // Add animation effects here
        const progress = frame / totalFrames;
        const alpha = Math.sin(progress * Math.PI * 2) * 0.3 + 0.7;
        
        ctx.globalAlpha = alpha;
        drawDerivativePreview(ctx, width, height);
        ctx.globalAlpha = 1;
        
        frame++;
        requestAnimationFrame(animate);
    }
    
    animate();
}

function animateCircle() {
    const canvas = document.querySelector('#circle-animation canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let frame = 0;
    const totalFrames = 120;
    
    function animate() {
        if (frame >= totalFrames) return;
        
        ctx.clearRect(0, 0, width, height);
        
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = 60;
        const currentRadius = (frame / totalFrames) * maxRadius;
        
        // Draw growing circle
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, currentRadius, 0, 2 * Math.PI);
        ctx.stroke();
        
        // Draw radius
        if (currentRadius > 0) {
            ctx.strokeStyle = '#ff6b6b';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + currentRadius, centerY);
            ctx.stroke();
        }
        
        // Draw center point
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
        ctx.fill();
        
        frame++;
        requestAnimationFrame(animate);
    }
    
    animate();
}

function animateSineWave() {
    const canvas = document.querySelector('#sine-wave-animation canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let frame = 0;
    const totalFrames = 120;
    
    function animate() {
        if (frame >= totalFrames) return;
        
        ctx.clearRect(0, 0, width, height);
        
        const centerY = height / 2;
        const amplitude = 50;
        const frequency = 0.02;
        const phase = (frame / totalFrames) * Math.PI * 4;
        
        // Draw center line
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();
        
        // Draw animated sine wave
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < width; x++) {
            const y = centerY + amplitude * Math.sin(frequency * x + phase);
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        
        frame++;
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Topic filtering functionality
function initializeTopicFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const animationCards = document.querySelectorAll('.animation-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            animationCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-topic') === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Utility functions
function debounce(func, wait) {
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

// Intersection Observer for animations on scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all animation cards
    document.querySelectorAll('.animation-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Export functions for potential external use
window.MathAnimations = {
    playAnimation,
    scrollToSection,
    initializeAnimations
};
