// Add smooth scrolling for better user experience
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to service cards when they come into view
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Simple animation for cards when page loads
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
    
    // Track clicks on WhatsApp links for better user experience
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You could add analytics tracking here if needed
            console.log('WhatsApp link clicked:', this.href);
            
            // Add a small visual feedback when button is clicked
            const btn = this;
            btn.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 200);
        });
    });
});