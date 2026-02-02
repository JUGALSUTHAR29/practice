document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the application
    initApp();
    
    function initApp() {
        // Set up event listeners
        setupEventListeners();
        
        // Set current year in footer
        setCurrentYear();
        
        // Highlight first item in each category
        highlightFirstItems();
    }
    
    function setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch(this.value.trim());
                }
            });
        }
        
        // Navigation links highlighting
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Show notification
                showNotification(Navigating to ${this.textContent} page...);
            });
        });
        
        // Category card click events
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const categoryTitle = this.querySelector('.category-title').textContent;
                showNotification(Opening ${categoryTitle} category...);
                
                // Add visual feedback
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
        
        // Featured card click events
        const featuredCards = document.querySelectorAll('.featured-card');
        featuredCards.forEach(card => {
            card.addEventListener('click', function() {
                const featuredTitle = this.querySelector('.featured-title').textContent;
                showNotification(Loading details for "${featuredTitle}"...);
            });
        });
        
        // View All button
        const viewAllBtn = document.querySelector('.view-all');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Loading all featured content...');
            });
        }
        
        // Quick links in sidebar
        const quickLinks = document.querySelectorAll('.sidebar-list a');
        quickLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.textContent;
                showNotification(Opening ${linkText}...);
            });
        });
    }
    
    function performSearch(searchTerm) {
        if (searchTerm) {
            // In a real app, this would make an API call
            console.log(Searching for: ${searchTerm});
            
            // Show search results notification
            showNotification(Searching for "${searchTerm}"...);
            
            // Highlight matching items (simulated search)
            highlightSearchResults(searchTerm);
            
            // Clear search input
            document.getElementById('searchInput').value = '';
        } else {
            showNotification('Please enter a search term', 'warning');
        }
    }
    
    function highlightSearchResults(searchTerm) {
        // Remove any existing highlights
        const highlightedItems = document.querySelectorAll('.search-highlight');
        highlightedItems.forEach(item => {
            item.classList.remove('search-highlight');
        });
        
        if (!searchTerm) return;
        
        // Find and highlight matching items
        const allItems = document.querySelectorAll('.item-name, .featured-title, .sidebar-list .item-name');
        let matchCount = 0;
        
        allItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm.toLowerCase())) {
                item.classList.add('search-highlight');
                matchCount++;
                
                // Scroll to first match
                if (matchCount === 1) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        
        // Show result count
        if (matchCount > 0) {
            showNotification(Found ${matchCount} result(s) for "${searchTerm}");
        } else {
            showNotification(No results found for "${searchTerm}", 'warning');
        }
    }
    
    function highlightFirstItems() {
        // Highlight first item in each category for visual emphasis
        const categoryLists = document.querySelectorAll('.item-list');
        categoryLists.forEach(list => {
            const firstItem = list.querySelector('li:first-child .item-name');
            if (firstItem) {
                firstItem.classList.add('item-highlight');
            }
        });
    }
    
    function showNotification(message, type = 'info') {
        // Remove existing notification if present
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = notification notification-${type};
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: ${type === 'warning' ? '#f59e0b' : '#2563eb'};
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
            font-weight: 500;
        `;
        
        // Add keyframe animation
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            .search-highlight {
                background-color: #fef3c7;
                padding: 2px 4px;
                border-radius: 3px;
                border-left: 3px solid #f59e0b;
            }
        `;
        document.head.appendChild(styleSheet);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
    
    function setCurrentYear() {
        const yearElement = document.querySelector('.copyright p');
        if (yearElement) {
            const currentYear = new Date().getFullYear();
            yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
        }
    }
    
    // Add some interactive features on hover
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});