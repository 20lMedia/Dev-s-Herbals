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
        id: 1,
        name: "Black Rice",
        image: 'img/products/black rice1.png',
        description: "Black Rice is a nutrient-dense, antioxidant-rich rice with a deep purple hue, offering a slightly nutty flavor. It's high in fiber, iron, and protein, promoting heart health and digestion.",
        category: "herbs",
        variants: [
            {
                id: '1-250g',
                weight: '250g',
                price: 130,
                stock: 50
            },
            {
                id: '1-500g',
                weight: '500g',
                price: 230,
                stock: 30
            },
        ]
    },
    {
        id: 2,
        name: "Idly Podi",
        image: 'img/products/idly podi1.png',
        description: "Idly Podi, also known as 'gunpowder,' is a spicy South Indian condiment made from roasted lentils, spices, and seeds. It's typically mixed with oil and enjoyed with idlis or dosas.",
        category: "spices",
        variants: [
            {
                id: '2-100g',
                weight: '100g',
                price: 50,
                stock: 50

            },
        ]
    },
    {
        id: 3,
        name: "Millet Dosa mix",
        image: 'img/products/millet dosa mix1.png',
        description: "Millet Dosa Mix is a nutritious, ready-to-make blend of millets and lentils, offering a fiber-rich, gluten-free, and wholesome option for a healthy breakfast.",
        category: "mixes",
        variants: [
            {
                id: '3-400g',
                weight: '400g',
                price: 95,
                stock: 40

            },
        ]
    },
    {
        id: 4,
        name: "Multi Millet Magic mix",
        image: 'img/products/multi millet magic mix1.png',
        description: "Multi Millet Mix is a nutritious blend of various millets, rich in fiber, protein, and essential nutrients. It's a versatile, gluten-free option for preparing healthy porridges, dosas, or rotis",
        category: "mixes",
        variants: [
            {
                id: '4-250g',
                weight: '250g',
                price: 110,
                stock: 45
            },
            {
                id: '4-500g',
                weight: '500g',
                price: 200,
                stock: 30
            },
        ]
    },
    {
        id: 5,
        name: "Parupu Podi",
        image: 'img/products/parupu podi1.png',
        description: "Parupu Podi is a flavorful South Indian spice mix made from roasted lentils and spices. It's commonly used as a condiment for rice or as a seasoning for various dishes.",
        category: "spices",
        variants: [
            {
                id: '5-100g',
                weight: '100g',
                price: 60,
                stock: 35

            },
        ]
    },
    {
        id: 6,
        name: "Sprouted Mix",
        image: 'img/products/sprouted mix1.png',
        description: "Sprouted Mix is a nutritious blend of sprouted grains and legumes, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "mixes",
        variants: [
            {
                id: '6-250g',
                weight: '250g',
                price: 110,
                stock: 40
            },
            {
                id: '6-500g',
                weight: '500g',
                price: 200,
                stock: 30
            },
        ]
    },
    {
        id: 7,
        name: "Atta Noodles",
        image: 'img/products/atta noodels.png',
        description: "Atta Noodles is a flavorful blend of atta and noodles, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "mixes",

        variants: [
            {
                id: '7-200g',
                weight: '200g',
                price: 45,
                stock: 40
            },

        ]
    },
    {
        id: 8,
        name: "Ullundu kanji Mix",
        image: 'img/products/ullundu kanji.png',
        description: "Ullundu kanji Mix is a flavorful blend of ullundu and kanji, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "mixes",

        variants: [
            {
                id: '8-250g',
                weight: '250g',
                price: 110,
                stock: 40
            },

            {
                id: '8-500g',
                weight: '500g',
                price: 200,
                stock: 25
            },

            {
                id: '8-1kg',
                weight: '1kg',
                price: 380,
                stock: 15
            }

        ]
    },
    {
        id: 9,
        name: "Kolumbu Thul",
        image: 'img/products/Kolumbu thul.png',
        description: "Kolumbu Thul is a flavorful blend of kolumbu and thul, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "spices",


        variants: [
            {
                id: '9-250g',
                weight: '250g',
                price: 130,
                stock: 40

            },
            {
                id: '9-500g',
                weight: '500g',
                price: 250,
                stock: 25
            },

        ]
    },
    {
        id: 10,
        name: "Red Chilly Powder",
        image: 'img/products/Red Chilly Powder.png',
        description: "Red Chilly Powder is a flavorful blend of red chilly, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "spices",
        variants: [
            {
                id: '10-100g',
                weight: '100g',
                price: 70,
                stock: 40

            },

        ]
    }, 
    {
        id: 11,
        name: "Horse Grain Mix",
        image: 'img/products/horse grain mix.png',
        description: "Horse Grain Mix is a flavorful blend of horse grain, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "mixes",
        variants: [
            {
                id: '11-250g',
                weight: '250g',
                price: 110,
                stock: 40

            },
            {
                id: '11-500g',
                weight: '500g',
                price: 200,
                stock: 25
            },

        ]
    },
    {
        id: 12,
        name: "Multigrain Atta",
        image: 'img/products/multigrain atta.png',
        description: "Multigrain Atta is a flavorful blend of multigrain, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "mixes",
        variants: [
            {
                id: '12-1kg',
                weight: '1kg',
                price: 100,
                stock: 40


            },
            {
                id: '12-500g',
                weight: '500g',
                price: 60,
                stock: 25
            },

        ]
    }, 
    {
        id: 13,
        name: "Garlic Idly Podi",
        image: 'img/products/garlic idly podi.png',
        description: "Garlic Idly Podi is a flavorful blend of garlic, rich in protein, vitamins, and enzymes. It enhances digestion and adds a wholesome touch to salads and soups.",
        category: "spices",


        variants: [

            {
                id: '13-100g',
                weight: '100g',
                price: 60,
                stock: 40

            },
        ]
    },   
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
    filterProducts('all');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initapp();
    loadCart();
    
    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-filter');
            filterProducts(category);
        });
    });

    // Add click event for shopping cart icon
    const cartIcon = document.querySelector('.shoping');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            openCart();
        });
    }

    // Close cart button
    const closeShopBtn = document.querySelector('.closeshopping');
    if (closeShopBtn) {
        closeShopBtn.addEventListener('click', closeCart);
    }
});

function reloadCard() {
    let listCard = document.querySelector('.listcart');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');
    
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    
    Object.entries(listcards).forEach(([cartKey, item]) => {
        if (!item) return;
        
        const product = products.find(p => p.id === item.id);
        const variant = product.variants.find(v => v.id === item.variantId);
        
        totalPrice += item.price * item.quantity;
        count += item.quantity;
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <div class="item-header">
                    <div class="name">${item.name} (${item.weight})</div>
                    <button class="remove-item" onclick="removeItem('${cartKey}')">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
                <div class="item-footer">
                    <div class="price">₹${item.price}</div>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity('${cartKey}', ${item.quantity - 1})"
                                class="quantity-btn ${item.quantity <= 1 ? 'disabled' : ''}">
                            <i class="ri-subtract-line"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button onclick="changeQuantity('${cartKey}', ${item.quantity + 1})"
                                class="quantity-btn"
                                ${item.quantity >= variant.stock ? 'disabled' : ''}>
                            <i class="ri-add-line"></i>
                        </button>
                    </div>
                </div>
                <div class="item-total">
                    Total: ₹${item.price * item.quantity}
                </div>
            </div>`;
        listCard.appendChild(newDiv);
    });
    
    total.innerText = `₹${totalPrice}`;
    quantity.innerText = count;
    
    updateCartStatus(count);
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

function addtocart(productKey, variantId) {
    const product = products.find(p => p.id === productKey + 1); // Add 1 because product IDs start at 1
    const variant = product.variants.find(v => v.id === variantId);
    
    if (!variant || variant.stock <= 0) {
        showNotification('Sorry, this item is out of stock');
        return;
    }

    const cartKey = `${productKey}-${variantId}`;
    
    if (!listcards[cartKey]) {
        listcards[cartKey] = {
            ...product,
            variantId: variantId,
            weight: variant.weight,
            price: variant.price,
            quantity: 1
        };
    } else {
        if (listcards[cartKey].quantity >= variant.stock) {
            showNotification('Sorry, no more stock available');
            return;
        }
        listcards[cartKey].quantity += 1;
    }
    
    reloadCard();
    showNotification(`Added ${product.name} (${variant.weight}) to cart`);
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
    listcards = Object.fromEntries(
        Object.entries(listcards).filter(([_, value]) => value !== null)
    );
    
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

function wb() {
    let message = "Order Details:\n\n";
    let total = 0;
    
    Object.values(listcards).forEach((item) => {
        if(item) {
            message += `${item.name} (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
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

// Add function to update price when variant is selected
function updatePrice(selectElement, productKey) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    const stock = selectedOption.getAttribute('data-stock');
    const variantId = selectElement.value;
    
    // Update price display
    document.getElementById(`price-${productKey}`).textContent = `₹${price}`;
    
    // Update add to cart button
    const addButton = document.getElementById(`add-btn-${productKey}`);
    if (stock <= 0) {
        addButton.disabled = true;
        addButton.innerHTML = '<i class="ri-shopping-cart-line"></i> Out of Stock';
    } else {
        addButton.disabled = false;
        addButton.innerHTML = '<i class="ri-shopping-cart-line"></i> Add To Cart';
        // Update onclick handler with new variant
        addButton.setAttribute('onclick', `addtocart(${productKey}, '${variantId}')`);
    }
}

// Add new filter function
function filterProducts(category) {
    const list = document.querySelector('.list');
    
    // First, fade out existing items
    const existingItems = document.querySelectorAll('.item');
    existingItems.forEach(item => {
        item.classList.add('fade-out');
    });

    // Clear list after fade out
    setTimeout(() => {
        list.innerHTML = '';
        
        // Add skeleton loaders
        for(let i = 0; i < 3; i++) {
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

        // Filter and show new items
        setTimeout(() => {
            list.innerHTML = '';
            
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(product => product.category === category);
            
            // Create all items with opacity 0
            filteredProducts.forEach((product) => {
                let newdiv = document.createElement('div');
                newdiv.classList.add("item");
                newdiv.style.opacity = '0';
                
                const defaultVariant = product.variants[0];
                
                newdiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="title">${product.name}</div>
                    <div class="variant-selector">
                        <select onchange="updatePrice(this, ${product.id - 1})" data-product-key="${product.id - 1}">
                            ${product.variants.map(variant => `
                                <option value="${variant.id}" 
                                        ${variant.stock <= 0 ? 'disabled' : ''}
                                        data-price="${variant.price}"
                                        data-stock="${variant.stock}">
                                    ${variant.weight} - ₹${variant.price} 
                                    ${variant.stock <= 0 ? '(Out of Stock)' : ''}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="description">${product.description}</div>
                    <div class="price" id="price-${product.id - 1}">₹${defaultVariant.price}</div>
                    <button onclick="addtocart(${product.id - 1}, '${defaultVariant.id}')" 
                            class="add-to-cart-btn" 
                            id="add-btn-${product.id - 1}"
                            ${defaultVariant.stock <= 0 ? 'disabled' : ''}>
                        <i class="ri-shopping-cart-line"></i>
                        ${defaultVariant.stock <= 0 ? 'Out of Stock' : 'Add To Cart'}
                    </button>
                `;
                list.appendChild(newdiv);
            });

            // Trigger reflow
            list.offsetHeight;

            // Fade in items with delay
            const items = document.querySelectorAll('.item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transition = 'opacity 0.3s ease';
                    item.style.opacity = '1';
                }, index * 100);
            });
        }, 500);
    }, 300);
}

// Add these CSS rules to your stylesheet
const style = document.createElement('style');
style.textContent = `
    .item {
        opacity: 1;
        transition: opacity 0.3s ease;
    }
    
    .fade-out {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .skeleton-card {
        opacity: 0.7;
        animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
        0% { opacity: 0.7; }
        50% { opacity: 0.4; }
        100% { opacity: 0.7; }
    }
`;
document.head.appendChild(style);













