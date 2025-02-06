const header = document.querySelector("header")



window.addEventListener("scroll",function(){
    header.classList.toggle( "sticky" , window.scrollY > 0);
});


var menu = document.querySelector("#menu-icon");
var navber = document.querySelector(".nav-bar");

function toggle(){
    menu.classList.toggle("bx-x");
    navber.classList.toggle('open');
}

let openshop = document.querySelector(".shoping")
let closeshop = document.querySelector(".closeshopping")
let list = document.querySelector(".list")
let listcard = document.querySelector(".listcart")
let body = document.querySelector("body")
let total = document.querySelector(".total")
let quantity = document.querySelector(".quantity")
let cart = document.querySelector(".cart")


openshop.addEventListener("click", ()=> {
    cart.style.top = '0';
    cart.style.transition = 'transform 0.5s ease'; // Smooth animation
});

closeshop.addEventListener("click", ()=> {
    cart.style.top = '-200%';
    cart.style.transition = 'transform 0.5s ease'; // Smooth animation
});


//openshop.addEventListener("click",()=>{
//    cart.style.top = '0'
//})

//closeshop.addEventListener("click",()=>{
//    cart.style.top = '-200%'
//})

let products = [
    {
        id:1,
        name:"Black Rice",
        qt:"Quantity: " + "250Gm",
        image:'img/products/black rice1.png',
        description:"Black Rice is a nutrient-dense, antioxidant-rich rice with a deep purple hue, offering a slightly nutty flavor. It's high in fiber, iron, and protein, promoting heart health and digestion.",
        price: 100
    },
    {
        id:2,
        name:"Idly Podi",
        qt:"Quantity: " + "250Gm",
        image:'img/products/idly podi1.png',
        description:"Idly Podi, also known as 'gunpowder,' is a spicy South Indian condiment made from roasted lentils, spices, and seeds. It's typically mixed with oil and enjoyed with idlis or dosas.",
        price: 125
    },
    {
        id:3,
        name:"Millet Dosa mix",
        qt:"Quantity: " + "250Gm",
        image:'img/products/millet dosa mix1.png',
        description:"Millet Dosa Mix is a nutritious, ready-to-make blend of millets and lentils, offering a fiber-rich, gluten-free, and wholesome option for a healthy breakfast.",
        price: 95
    },
    {
        id:4,
        name:"Multi Millet Magic mix",
        qt:"Quantity: " + "250Gm",
        image:'img/products/multi millet magic mix1.png',
        description:"Multi Millet Mix is a nutritious blend of various millets, rich in fiber, protein, and essential nutrients. It's a versatile, gluten-free option for preparing healthy porridges, dosas, or rotis",
        price: 100
    },
    {
        id:5,
        name:"Parupu Podi",
        qt:"Quantity: " + "250Gm",
        image:'img/products/parupu podi1.png',
        description:"Parupu Podi is a flavorful South Indian spice mix made from roasted lentils and spices. It's commonly used as a condiment for rice or as a seasoning for various dishes.",
        price: 150
    },
    {
        id:6,
        name:"Sprouted Mix",
        qt:"Quantity: " + "250Gm",
        image:'img/products/sprouted mix1.png',
        description:"Sprouted Mix is a nutritious blend of sprouted grains and legumes, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        price: 110
    }
];

let listcards = [];

// Load cart from localStorage if exists
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        listcards = JSON.parse(savedCart);
        reloadCard();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(listcards));
}

// Add this function to handle animations
function addAnimations() {
    // Product card animations
    const cards = document.querySelectorAll('.item');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });

    // Filter button animations
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn, index) => {
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.classList.add('slide-in');
    });

    // Title animation
    const title = document.querySelector('.products-title');
    if (title) {
        title.classList.add('fade-down');
    }

    // Tagline animation
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.classList.add('fade-up');
    }
}

// Update your existing initapp function
function initapp() {
    let list = document.querySelector('.list');
    list.innerHTML = ''; // Clear existing content
    
    // Add skeleton loaders
    for(let i = 0; i < 6; i++) { // Assuming 6 products, adjust as needed
        let skeleton = document.createElement('div');
        skeleton.classList.add('item', 'skeleton-card');
        skeleton.innerHTML = `
            <div class="skeleton skeleton-img"></div>
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-qt"></div>
            <div class="skeleton skeleton-desc"></div>
            <div class="skeleton skeleton-price"></div>
            <div class="skeleton skeleton-button"></div>
        `;
        list.appendChild(skeleton);
    }

    // Load actual products with delay to show skeleton
    setTimeout(() => {
        list.innerHTML = ''; // Clear skeletons
        
        products.forEach((value, key) => {
            let newdiv = document.createElement('div');
            newdiv.classList.add("item");
            
            newdiv.innerHTML = `
                <img src="${value.image}" alt="${value.name}">
                <div class="title">${value.name}</div>
                <div class="qt">${value.qt}</div>
                <div class="description">${value.description}</div>
                <div class="price">₹${value.price}</div>
                <button onclick="addtocart(${key})">
                    <i class="ri-shopping-cart-line"></i>
                    Add To Cart
                </button>
            `;
            list.appendChild(newdiv);
        });
    }, 1000); // 1 second delay, adjust as needed
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initapp();
    loadCart();
    
    // Add click event for shopping cart icon
    const cartIcon = document.querySelector('.shoping');
    cartIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        openCart();
    });

    // Close cart button
    document.querySelector('.closeshopping').addEventListener('click', closeCart);
});

function reloadCard() {
    let listCard = document.querySelector('.listcart');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');
    
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    
    // Create a new array without null values
    listcards = listcards.filter(item => item !== null);
    
    listcards.forEach((value, key) => {
        totalPrice = totalPrice + value.price * value.quantity;
        count = count + value.quantity;
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="item-image">
                <img src="${value.image}" alt="${value.name}">
            </div>
            <div class="item-details">
                <div class="item-header">
                    <div class="name">${value.name}</div>
                    <button class="remove-item" onclick="removeItem(${key})">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
                <div class="qt">${value.qt}</div>
                <div class="item-footer">
                    <div class="price">₹${value.price}</div>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})"
                                class="quantity-btn ${value.quantity <= 1 ? 'disabled' : ''}">
                            <i class="ri-subtract-line"></i>
                        </button>
                        <span class="quantity-display">${value.quantity}</span>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})"
                                class="quantity-btn">
                            <i class="ri-add-line"></i>
                        </button>
                    </div>
                </div>
                <div class="item-total">
                    Total: ₹${value.price * value.quantity}
                </div>
            </div>`;
        listCard.appendChild(newDiv);
    });
    
    // Update cart counter and total
    total.innerText = `₹${totalPrice}`;
    quantity.innerText = count;
    
    // Update cart status
    updateCartStatus(count);
    // Save cart
    saveCart();
}

function updateCartStatus(count) {
    const listCard = document.querySelector('.listcart');
    const checkoutBtn = document.querySelector('.checkout');
    
    if (count === 0) {
        listCard.innerHTML = `
            <div class="empty-cart">
                <i class="ri-shopping-cart-line"></i>
                <p>Your cart is empty</p>
            </div>`;
        // Don't hide the checkout section, just update the total
        checkoutBtn.style.display = 'flex';
    } else {
        checkoutBtn.style.display = 'flex';
    }
}

function addtocart(key) {
    if(listcards[key] == null) {
        listcards[key] = JSON.parse(JSON.stringify(products[key]));
        listcards[key].quantity = 1;
    } else {
        listcards[key].quantity += 1;
    }
    
    reloadCard();
    // Show notification
    showNotification(`Added ${products[key].name} to cart`);
    // Open cart if not already open
    openCart();
}

function changeQuantity(key, quantity) {
    if(quantity <= 0) {
        removeItem(key);
    } else {
        listcards[key].quantity = quantity;
    }
    reloadCard();
}

function removeItem(key) {
    // Remove the item immediately from listcards
    delete listcards[key];
    
    // Clean up the array by removing null entries
    listcards = listcards.filter(item => item !== null);
    
    // Update the cart display
    reloadCard();
    
    // Show notification
    showNotification('Item removed from cart');
}

function showNotification(message) {
    const popup = document.querySelector('.pop');
    
    // Clear any existing timeout
    if (window.notificationTimeout) {
        clearTimeout(window.notificationTimeout);
        popup.classList.remove('active');
        // Small delay before showing new notification
        setTimeout(() => {
            showNewNotification();
        }, 100);
    } else {
        showNewNotification();
    }

    function showNewNotification() {
        popup.innerHTML = `
            <i class='bx bx-check'></i>
            <span>${message}</span>
        `;
        popup.classList.add('active');
        
        // Set new timeout
        window.notificationTimeout = setTimeout(() => {
            popup.classList.remove('active');
            window.notificationTimeout = null;
            // Ensure body scroll is restored
            document.body.style.overflow = '';
        }, 2500); // 2.5 seconds
    }
}

function openCart() {
    const cart = document.querySelector('.cart');
    if (!cart.classList.contains('active')) {
        cart.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    const cart = document.querySelector('.cart');
    cart.classList.remove('active');
    // Only restore scroll if no notification is active
    if (!document.querySelector('.pop.active')) {
        document.body.style.overflow = '';
    }
}

function wb(){
    let message = "Order Details:\n\n";
    let total = 0;
    
    listcards.forEach((item) => {
        if(item != null) {
            message += `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
            total += item.price * item.quantity;
        }
    });
    
    message += `\nTotal: ₹${total}`;
    
    // Replace with your WhatsApp number
    let phone = "919488019244";
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// About Page Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Only run if we're on the about page (check for about-hero section)
    const aboutHero = document.querySelector('.about-hero');
    if (!aboutHero) return;

    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once the animation is done, we can stop observing the element
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and value items
    document.querySelectorAll('.about-card, .value-item').forEach((elem) => {
        animateOnScroll.observe(elem);
    });

    // Add parallax effect to cards
    const cards = document.querySelectorAll('.about-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Only apply effect on non-mobile devices
            if (window.innerWidth > 768) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                    scale3d(1.02, 1.02, 1.02)
                `;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = `${scrolled}%`;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add loading animation to icons
    const icons = document.querySelectorAll('.about-card i');
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
    });

    // Performance optimization
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Update scroll progress
                const winScroll = document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.style.width = `${scrolled}%`;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add touch ripple effect for mobile
    const addRippleEffect = (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        const rect = e.target.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        e.target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    };

    document.querySelectorAll('.about-card, .value-item').forEach(elem => {
        elem.addEventListener('touchstart', addRippleEffect);
    });
});

// Add this function for index page animations
function initIndexAnimations() {
    // Only run if we're on index page
    if (!document.querySelector('#hero')) return;

    // Add loading effects
    const mainContent = document.querySelector('.main-txt');
    const mainImage = document.querySelector('.main-img');
    const featureContent = document.querySelector('.feature-content');

    // Store original feature content
    const originalFeatureContent = featureContent ? featureContent.innerHTML : '';

    // Initially hide content and show skeletons
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.insertAdjacentHTML('beforebegin', `
            <div class="skeleton-text-content">
                <div class="skeleton-heading"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-button"></div>
            </div>
        `);
    }

    if (mainImage) {
        mainImage.style.opacity = '0';
        mainImage.insertAdjacentHTML('beforebegin', `
            <div class="skeleton-image-content">
                <div class="skeleton-hero-image"></div>
            </div>
        `);
    }

    if (featureContent) {
        featureContent.style.opacity = '0';
        featureContent.innerHTML = `
            <div class="row skeleton-feature">
                <div class="main-row">
                    <div class="skeleton-text"></div>
                    <div class="skeleton-heading"></div>
                    <div class="skeleton-image"></div>
                </div>
            </div>
            <div class="row skeleton-feature">
                <div class="main-row">
                    <div class="skeleton-text"></div>
                    <div class="skeleton-heading"></div>
                    <div class="skeleton-image"></div>
                </div>
            </div>
        `;
    }

    // Load content with animation after delay
    setTimeout(() => {
        // Remove skeletons
        document.querySelector('.skeleton-text-content')?.remove();
        document.querySelector('.skeleton-image-content')?.remove();

        if (mainContent) {
            mainContent.style.opacity = '1';
            mainContent.classList.add('slide-in-left');
        }
        if (mainImage) {
            mainImage.style.opacity = '1';
            mainImage.classList.add('slide-in-right');
        }
        if (featureContent) {
            featureContent.style.opacity = '1';
            featureContent.innerHTML = originalFeatureContent;
            document.querySelectorAll('.row').forEach(row => {
                row.classList.add('fade-in-up');
            });
        }
    }, 2000);
}

// Add this to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initIndexAnimations();
});

