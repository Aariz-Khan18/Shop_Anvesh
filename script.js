// --- Automatic Time-Based Theme Logic ---
function setAutoTheme() {
    const currentHour = new Date().getHours();
    const body = document.body;
    if (currentHour >= 19 || currentHour < 6) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
    }
}

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

// --- Hero Slider Logic ---
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
setInterval(() => {
    if (slides.length > 0) {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
    }
}, 3000);

// --- Dynamic Product Injection & Filtering Logic ---
const productsData = [
    { category: "Decor", name: "Vintage Wall Clock", img: "https://images.unsplash.com/photo-1581022295087-35e593704911?auto=format&fit=crop&w=500&q=80" },
    { category: "Toys", name: "Giant Teddy Bear", img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=500&q=80" },
    { category: "Watches", name: "Premium Men's Watch", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500&q=80" },
    { category: "Personalized", name: "Custom Photo Frame", img: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=500&q=80" },
    { category: "Decor", name: "Ceramic Vases", img: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=500&q=80" },
    { category: "Toys", name: "Plush Bunny", img: "https://images.unsplash.com/photo-1676617725486-28b8debed187?q=80&w=687?auto=format&fit=crop&w=500&q=80" },
    { category: "Watches", name: "Elegant Women's Watch", img: "https://images.unsplash.com/photo-1653651460770-73513a4b25a5?auto=format&fit=crop&w=500&q=80" },
    { category: "Personalized", name: "Engraved Wooden Pen", img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=500&q=80" },
    { category: "Decor", name: "Table Lamp", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=500&q=80" },
    { category: "Toys", name: "Educational Puzzle", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80" },
    { category: "Personalized", name: "Printed Coffee Mugs", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=80" },
    { category: "Decor", name: "Scented Candles", img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=500&q=80" },
    { category: "Watches", name: "Smart Fitness Watch", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80" },
    { category: "Personalized", name: "Custom Name Chain", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80" },
    { category: "Decor", name: "Abstract Showpiece", img: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=500&q=80" },
    { category: "Toys", name: "Action Figures", img: "https://images.unsplash.com/photo-1524481905007-ea072534b820?q=80&w=1170?auto=format&fit=crop&w=500&q=80Hx8fGVufDB8fHx8fA%3D%3D" },
    { category: "Decor", name: "Artificial Plant", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80" },
    { category: "Watches", name: "Couple Watches Combo", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=500&q=80" },
    { category: "Personalized", name: "Resin Art Clock", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=500&q=80" },
    { category: "Toys", name: "Remote Control Car", img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=500&q=80" }
];

let currentCategory = 'All';
let itemsToShow = 4;

function renderProducts() {
    const productGrid = document.getElementById('dynamic-product-grid');
    const loadMoreContainer = document.getElementById('load-more-container');
    productGrid.innerHTML = ""; 

    const filteredProducts = currentCategory === 'All' 
        ? productsData 
        : productsData.filter(p => p.category === currentCategory);

    const productsToRender = filteredProducts.slice(0, itemsToShow);

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card show-scroll'; 
        card.innerHTML = `
            <div class="img-container">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <h3>
                <span class="product-category-tag">${product.category}</span>
                ${product.name}
            </h3>
        `;
        productGrid.appendChild(card);
    });

    if (itemsToShow >= filteredProducts.length) {
        loadMoreContainer.style.display = 'none';
    } else {
        loadMoreContainer.style.display = 'block';
    }
}

function filterProducts(category, event) {
    if (event) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    
    currentCategory = category;
    itemsToShow = 4; 
    
    renderProducts();
}

function loadMoreProducts() {
    itemsToShow += 16; 
    renderProducts();
}

// --- Rotating Reviews Logic ---
const reviewsData = [
    { name: "Mayank Kushwaha", stars: "★★★★★", text: "Best gift shop in Datia. Quality products and excellent behavior." },
    { name: "Abdul Habib Alam", stars: "★★★★★", text: "Amazing Gift Gallery truly lives up to its name. Best personalized gifts!" },
    { name: "Nikki Tilwani", stars: "★★★★★", text: "Great collection of showpieces. Jitendra uncle is very polite." },
    { name: "Devansh Shrivastava", stars: "★★★★½", text: "Very good variety of soft toys and watches. Pricing is reasonable." },
    { name: "Vineet Kumar", stars: "★★★★☆", text: "Loved the photo frames! Delivered on time with great finishing." },
    { name: "Pooja Sharma", stars: "★★★★☆", text: "Perfect place to buy birthday gifts. Highly satisfied." },
    { name: "Rahul Patel", stars: "★★★★★", text: "Bought an anniversary gift for my parents. They absolutely loved it!" },
    { name: "Sneha Gupta", stars: "★★★★☆", text: "Nice collection. The dark theme of this website is also cool!" },
    { name: "Amit Singh", stars: "★★★★★", text: "Premium quality perfumes available here. Will visit again." },
    { name: "Priya Desai", stars: "★★★★½", text: "I always come here for festive shopping. Highly recommended." },
    { name: "Vikram Verma", stars: "★★★★★", text: "Very authentic and beautiful showpieces. 10/10." },
    { name: "Anjali Joshi", stars: "★★★★☆", text: "Affordable and best. Good customer service by the owner." },
    { name: "Rohan Mehta", stars: "★★★★★", text: "Customized mugs and cushions are of top quality." },
    { name: "Kavita Tiwari", stars: "★★★★½", text: "Best place in Datia for unique gifts." },
    { name: "Suresh Shrivastava", stars: "★★★★★", text: "Got a wall clock from here. Working perfectly and looks elegant." },
    { name: "Neha Jain", stars: "★★★★☆", text: "Lots of options to choose from. Very happy with my purchase." },
    { name: "Manish Yadav", stars: "★★★★★", text: "Jitendra sir is very helpful in suggesting the best gifts." },
    { name: "Aditya Rao", stars: "★★★★½", text: "Good experience overall. Nice ambiance in the shop." },
    { name: "Kiran Patel", stars: "★★★★★", text: "Soft toys are very fluffy and nice. My daughter loved the teddy." },
    { name: "Sameer Khan", stars: "★★★★☆", text: "Bought a wallet for my brother. Genuine quality." },
    { name: "Ayesha Siddiqui", stars: "★★★★★", text: "They packed the gift beautifully. No need to go anywhere else." },
    { name: "Deepak Bhatia", stars: "★★★★½", text: "The collection of wind chimes and idols is mesmerizing." },
    { name: "Sunita Agarwal", stars: "★★★★★", text: "Best rates in the market. Must visit for weddings." },
    { name: "Vishal Chaudhary", stars: "★★★★☆", text: "Friendly staff and quick service." }
];

let currentReviewIndex = 0;
const reviewsToShow = 3;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderNextReviews() {
    const container = document.getElementById('dynamic-reviews');
    container.classList.add('fade-out');

    setTimeout(() => {
        container.innerHTML = ''; 
        for (let i = 0; i < reviewsToShow; i++) {
            if (currentReviewIndex >= reviewsData.length) {
                currentReviewIndex = 0;
                shuffleArray(reviewsData);
            }
            const review = reviewsData[currentReviewIndex];
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="stars">${review.stars}</div>
                <p>"${review.text}"</p>
                <div class="reviewer-name">- ${review.name}</div>
            `;
            container.appendChild(card);
            currentReviewIndex++;
        }
        container.classList.remove('fade-out');
    }, 500); 
}

// --- Scroll Animation Logic ---
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
        }
    });
}, { threshold: 0.1 });

// --- Initialize On Load ---
window.onload = () => {
    setAutoTheme(); 
    renderProducts(); 
    shuffleArray(reviewsData);
    renderNextReviews();
    setInterval(renderNextReviews, 5000); 

    document.querySelectorAll('.hidden-scroll').forEach((el) => scrollObserver.observe(el));
};
                             
