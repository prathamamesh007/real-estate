// ==========================================
// PREMIUM REAL ESTATE WEBSITE - JAVASCRIPT
// ==========================================

// Property Data
const properties = [
    {
        id: 1,
        title: "Luxury Modern Villa",
        location: "Beverly Hills, California",
        price: 1850000,
        type: "villa",
        status: "sale",
        bedrooms: 5,
        bathrooms: 4,
        area: 4500,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        description: "Stunning modern villa with panoramic views, infinity pool, and state-of-the-art amenities.",
        amenities: ["Pool", "Gym", "Garden", "Garage", "Smart Home", "Security System"]
    },
    {
        id: 2,
        title: "Downtown Penthouse",
        location: "Manhattan, New York",
        price: 8500,
        type: "penthouse",
        status: "rent",
        bedrooms: 3,
        bathrooms: 3,
        area: 2800,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        description: "Luxurious penthouse with breathtaking city views and premium finishes throughout.",
        amenities: ["Balcony", "Concierge", "Gym", "Parking", "City View", "Modern Kitchen"]
    },
    {
        id: 3,
        title: "Oceanfront Beach House",
        location: "Malibu, California",
        price: 2950000,
        type: "house",
        status: "sale",
        bedrooms: 6,
        bathrooms: 5,
        area: 5200,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        description: "Spectacular beachfront property with direct ocean access and stunning sunset views.",
        amenities: ["Beach Access", "Pool", "Deck", "Outdoor Kitchen", "Wine Cellar", "Home Theater"]
    },
    {
        id: 4,
        title: "Elegant Family Home",
        location: "Austin, Texas",
        price: 4200,
        type: "house",
        status: "rent",
        bedrooms: 4,
        bathrooms: 3,
        area: 3200,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        description: "Beautiful family home in a quiet neighborhood with excellent schools nearby.",
        amenities: ["Garden", "Garage", "Fireplace", "Patio", "Storage", "Laundry Room"]
    },
    {
        id: 5,
        title: "Industrial Chic Loft",
        location: "Brooklyn, New York",
        price: 1250000,
        type: "apartment",
        status: "sale",
        bedrooms: 2,
        bathrooms: 2,
        area: 1800,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        description: "Converted loft with exposed brick, high ceilings, and modern industrial design.",
        amenities: ["High Ceilings", "Exposed Brick", "Modern Kitchen", "Parking", "Rooftop Access"]
    },
    {
        id: 6,
        title: "Grand Suburban Estate",
        location: "Greenwich, Connecticut",
        price: 3450000,
        type: "house",
        status: "sale",
        bedrooms: 7,
        bathrooms: 6,
        area: 6800,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        description: "Magnificent estate on sprawling grounds with tennis court and guest house.",
        amenities: ["Tennis Court", "Guest House", "Pool", "Garden", "Library", "Wine Cellar", "Gym"]
    },
    {
        id: 7,
        title: "Contemporary Condo",
        location: "Miami, Florida",
        price: 3500,
        type: "apartment",
        status: "rent",
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        description: "Modern condo with ocean views and resort-style amenities.",
        amenities: ["Ocean View", "Pool", "Gym", "Concierge", "Parking", "Balcony"]
    },
    {
        id: 8,
        title: "Mountain Retreat",
        location: "Aspen, Colorado",
        price: 4850000,
        type: "villa",
        status: "sale",
        bedrooms: 5,
        bathrooms: 5,
        area: 4200,
        image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=600&fit=crop",
        description: "Luxurious mountain retreat with ski-in/ski-out access and panoramic views.",
        amenities: ["Ski Access", "Hot Tub", "Fireplace", "Game Room", "Wine Cellar", "Heated Floors"]
    }
];

// ==========================================
// NAVIGATION
// ==========================================
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navbarToggle.querySelectorAll('span');
        spans[0].style.transform = navbarMenu.classList.contains('active') ? 'rotate(45deg) translateY(8px)' : '';
        spans[1].style.opacity = navbarMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navbarMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-8px)' : '';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        const spans = navbarToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
function searchProperties() {
    const location = document.getElementById('searchLocation')?.value.toLowerCase();
    const type = document.getElementById('searchType')?.value;
    const budget = document.getElementById('searchBudget')?.value;
    
    // Store search criteria in sessionStorage
    sessionStorage.setItem('searchLocation', location || '');
    sessionStorage.setItem('searchType', type || '');
    sessionStorage.setItem('searchBudget', budget || '');
    
    // Redirect to properties page
    window.location.href = 'properties.html';
}

// Allow Enter key to trigger search
const searchInputs = document.querySelectorAll('.hero-search input, .hero-search select');
searchInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchProperties();
        }
    });
});

// ==========================================
// FILTER FUNCTIONALITY (for properties page)
// ==========================================
function filterProperties() {
    const location = document.getElementById('filterLocation')?.value.toLowerCase() || '';
    const type = document.getElementById('filterType')?.value || '';
    const status = document.getElementById('filterStatus')?.value || '';
    const minPrice = parseInt(document.getElementById('filterMinPrice')?.value) || 0;
    const maxPrice = parseInt(document.getElementById('filterMaxPrice')?.value) || Infinity;
    const bedrooms = parseInt(document.getElementById('filterBedrooms')?.value) || 0;
    
    let filtered = properties.filter(property => {
        const matchLocation = !location || property.location.toLowerCase().includes(location);
        const matchType = !type || property.type === type;
        const matchStatus = !status || property.status === status;
        const matchPrice = property.price >= minPrice && property.price <= maxPrice;
        const matchBedrooms = !bedrooms || property.bedrooms >= bedrooms;
        
        return matchLocation && matchType && matchStatus && matchPrice && matchBedrooms;
    });
    
    displayProperties(filtered);
}

// ==========================================
// SORT FUNCTIONALITY
// ==========================================
function sortProperties(sortBy) {
    let sorted = [...properties];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.reverse();
            break;
        case 'area-large':
            sorted.sort((a, b) => b.area - a.area);
            break;
        default:
            break;
    }
    
    displayProperties(sorted);
}

// ==========================================
// DISPLAY PROPERTIES
// ==========================================
function displayProperties(propertiesToDisplay) {
    const container = document.getElementById('propertiesContainer');
    if (!container) return;
    
    if (propertiesToDisplay.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
                <i class="fas fa-home" style="font-size: 4rem; color: var(--color-grey); margin-bottom: 1rem;"></i>
                <h3>No properties found</h3>
                <p style="color: var(--color-grey);">Try adjusting your filters to see more results.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = propertiesToDisplay.map(property => `
        <div class="property-card" onclick="viewProperty(${property.id})">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-tag ${property.status === 'rent' ? 'for-rent' : ''}">${property.status === 'sale' ? 'For Sale' : 'For Rent'}</span>
                <span class="property-price">${formatPrice(property.price, property.status)}</span>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location}</span>
                </div>
                <div class="property-features">
                    <div class="property-feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.bedrooms} Beds</span>
                    </div>
                    <div class="property-feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} Baths</span>
                    </div>
                    <div class="property-feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.area.toLocaleString()} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================
function formatPrice(price, status) {
    if (status === 'rent') {
        return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
}

function viewProperty(id) {
    sessionStorage.setItem('selectedPropertyId', id);
    window.location.href = 'property-detail.html';
}

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validate
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Success message
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}

// ==========================================
// ENQUIRY FORM (for property detail page)
// ==========================================
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('enquiryName').value;
        const email = document.getElementById('enquiryEmail').value;
        const phone = document.getElementById('enquiryPhone').value;
        const message = document.getElementById('enquiryMessage').value;
        
        // Validate
        if (!name || !email || !phone || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Success message
        alert('Your enquiry has been submitted! An agent will contact you shortly.');
        enquiryForm.reset();
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// ANIMATION ON SCROLL
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.property-card, .feature-card, .team-card, .testimonial-card, .stat-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the properties page and apply saved filters
    if (window.location.pathname.includes('properties.html')) {
        const savedLocation = sessionStorage.getItem('searchLocation');
        const savedType = sessionStorage.getItem('searchType');
        const savedBudget = sessionStorage.getItem('searchBudget');
        
        if (savedLocation && document.getElementById('filterLocation')) {
            document.getElementById('filterLocation').value = savedLocation;
        }
        if (savedType && document.getElementById('filterType')) {
            document.getElementById('filterType').value = savedType;
        }
        
        // Display all properties initially
        displayProperties(properties);
        
        // Clear session storage
        sessionStorage.removeItem('searchLocation');
        sessionStorage.removeItem('searchType');
        sessionStorage.removeItem('searchBudget');
    }
    
    // Check if we're on the property detail page
    if (window.location.pathname.includes('property-detail.html')) {
        const propertyId = parseInt(sessionStorage.getItem('selectedPropertyId'));
        if (propertyId) {
            loadPropertyDetails(propertyId);
        }
    }
});

// ==========================================
// LOAD PROPERTY DETAILS
// ==========================================
function loadPropertyDetails(id) {
    const property = properties.find(p => p.id === id);
    if (!property) {
        window.location.href = 'properties.html';
        return;
    }
    
    // Update page title
    document.title = `${property.title} - Premium Estates`;
    
    // Update property details
    document.getElementById('propertyTitle').textContent = property.title;
    document.getElementById('propertyLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${property.location}`;
    document.getElementById('propertyPrice').textContent = formatPrice(property.price, property.status);
    document.getElementById('propertyStatus').textContent = property.status === 'sale' ? 'For Sale' : 'For Rent';
    document.getElementById('propertyDescription').textContent = property.description;
    
    // Update features
    document.getElementById('propertyBedrooms').textContent = property.bedrooms;
    document.getElementById('propertyBathrooms').textContent = property.bathrooms;
    document.getElementById('propertyArea').textContent = property.area.toLocaleString();
    document.getElementById('propertyType').textContent = property.type.charAt(0).toUpperCase() + property.type.slice(1);
    
    // Update amenities
    const amenitiesList = document.getElementById('amenitiesList');
    amenitiesList.innerHTML = property.amenities.map(amenity => `
        <li><i class="fas fa-check"></i> ${amenity}</li>
    `).join('');
    
    // Update main image
    document.getElementById('mainPropertyImage').src = property.image;
    
    // Update gallery
    const gallery = document.getElementById('propertyGallery');
    gallery.innerHTML = Array(4).fill(property.image).map((img, index) => `
        <img src="${img}" alt="${property.title}" onclick="changeMainImage('${img}')">
    `).join('');
}

function changeMainImage(src) {
    document.getElementById('mainPropertyImage').src = src;
}
