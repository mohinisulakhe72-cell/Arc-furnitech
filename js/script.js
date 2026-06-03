/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const fadeElements = document.querySelectorAll(".fade-up");

if (fadeElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach((el) => {
        revealObserver.observe(el);
    });
}

/* =========================================
   COUNTER ANIMATION
========================================= */

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounterAnimation() {
    if (counterStarted) return;
    counterStarted = true;

    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 120;

        function updateCounter() {
            count += increment;
            if (count < target) {
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    });
}

const statsSection = document.querySelector(".stats-section");

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounterAnimation();
            }
        });
    }, { threshold: 0.4 });

    statsObserver.observe(statsSection);
}

/* =========================================
   PRODUCT IMAGE SWITCH
========================================= */

const mainImage = document.getElementById("mainProductImage");
const thumbnails = document.querySelectorAll(".thumb");

if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", () => {
            mainImage.src = thumb.src;
            thumbnails.forEach((t) => {
                t.classList.remove("active-thumb");
            });
            thumb.classList.add("active-thumb");
        });
    });
}

/* =========================
   FOOTER LANGUAGE SLIDER
========================= */

const brandTrack = document.getElementById("brandTrack");

// FIX: Only run if brandTrack exists on this page
if (brandTrack) {
    let currentSlide = 0;
    const totalSlides = 5;

    setInterval(() => {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        brandTrack.style.transform = `translateY(-${currentSlide * 70}px)`;
    }, 1000);
}

/* =========================================
   HOME PAGE 360 AUTO ROTATION
========================================= */

const viewer = document.getElementById("viewer");

if (viewer) {
    const frames = [
        "images/360/chair1.png",
        "images/360/chair2.png",
        "images/360/chair3.png",
        "images/360/chair4.png",
        "images/360/chair5.png",
        "images/360/chair6.png",
        "images/360/chair7.png",
        "images/360/chair8.png"
    ];

    let currentFrame = 0;

    setInterval(() => {
        currentFrame++;
        if (currentFrame >= frames.length) {
            currentFrame = 0;
        }
        viewer.src = frames[currentFrame];
    }, 120);
}

/* ==========================
   PRODUCT SLIDER
========================== */

const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// FIX: Only run if slider elements exist on this page
if (slides && slideItems.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= slideItems.length) {
            currentIndex = 0;
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideItems.length - 1;
        }
        updateSlider();
    });
}

// Executive chair smooth scroll (for anchor links if used) //

const chairLinks = document.querySelectorAll('.chair-card a');

if (chairLinks.length > 0) {
    chairLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // FIX: Ensure href is not just '#' before querying
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/* =========================================
   EXECUTIVE CHAIR DYNAMIC LOGIC
========================================= */

const chairs = [
    {
        id: 1,
        name: "High-Back Premium",
        tagline: "Maximum support, ultimate authority.",
        image:"images/Ergonnomic_arc.jpeg",
        price: "₹12,999",
        // NEW: Media array supports multiple images and videos
        media: [
            { type: 'image', src: 'images/arc_align_pro.jpeg', alt: 'High-Back Premium Front' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'High-Back Premium Side' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'High-Back Premium Detail' },
            { type: 'video', src: 'videos/f_f_a_e_b_mp_-Picsart-BackgroundRemover.webm', alt: 'Video Review' } // YOUR VIDEO SLIDE
        ],
        description: "Command the room with our High-Back Premium Executive Chair. Featuring a tall backrest that cradles your neck and head, thick plush cushioning, and luxurious leather upholstery, this chair is the quintessential 'boss chair.' Designed to project authority while providing maximum comfort for long days at the desk."
    },
    {
        id: 2,
        name: "Mid-Back Manager",
        tagline: "Sleek mobility for the modern leader.",
        image:"images/arc_align_pro2.jpeg",
        price: "₹8,999",
        media: [
            { type: 'image', src: 'images/arc_aura.jpeg', alt: 'Mid-Back Manager' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1589364235049-6485937817f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Mid-Back Manager Side' }
        ],
        description: "Built for the dynamic leader, the Mid-Back Manager offers a professional aesthetic without the bulk. Its shorter backrest promotes an upright posture and greater freedom of movement, making it perfect for fast-paced environments, boardrooms, and collaborative workspaces."
    },
    {
        id: 3,
        name: "Ergonomic Executive",
        tagline: "Science meets luxury.",
        image:"images/arc_aura1.jpeg",
       
        media: [
            { type: 'image', src: 'images/arc_aura1.jpeg', alt: 'Ergonomic Executive' },
            { type: 'image', src: 'images/ExecutivePage/ergo1.jpeg', alt: 'Ergonomic Executive Side' },
            { type: 'image', src: 'images/ExecutivePage/ergo2.jpeg', alt: 'Ergonomic Executive Side' },
            { type: 'video', src: 'videos/Executive_Ergonomic.mp4' },
            
        ],
        description: "Why choose between luxury and spine health? The Ergonomic Executive combines premium aesthetics with advanced lumbar support, adjustable headrests, and a flexible backrest. Perfect for the modern professional who spends long hours at the desk but refuses to compromise on style or posture."
    },
    {
        id: 7,
        name: "Mesh Executive",
        tagline: "Cool, breathable command.",
        image:"images/arc_vertex1.jpeg",
        price: "₹10,999",
        media: [
            { type: 'image', src: 'images/arc_apex.jpeg', alt: 'Mesh Executive' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Mesh Executive Side' }
        ],
        description: "Stay cool under pressure. The Mesh Executive chair combines the authoritative look of an executive seat with the breathable, temperature-regulating benefits of advanced mesh. Ideal for warm climates and professionals who demand airflow alongside luxury."
    }
];
function showExecView(viewType) {
    const gridView = document.getElementById('executive-grid-view');
    const detailView = document.getElementById('executive-detail-view');
    
    if(!gridView || !detailView) return; // Stops errors on other pages

    if (viewType === 'grid') {
        gridView.style.display = 'block';
        detailView.style.display = 'none';
    } else if (viewType === 'detail') {
        gridView.style.display = 'none';
        detailView.style.display = 'block';
    }
    window.scrollTo(0, 0);
    
    const descContent = document.getElementById('detail-description');
    if(descContent) descContent.classList.remove('active');
    
    const descIcon = document.getElementById('desc-icon');
    if(descIcon) descIcon.innerText = '+';
}

function renderExecCategories() {
    const grid = document.getElementById('chair-grid');
    if (!grid) return; // Stops errors on other pages
    
    grid.innerHTML = ''; 
    chairs.forEach(chair => {
        const card = document.createElement('div');
        card.className = 'exec-card';
        card.onclick = () => showExecDetail(chair.id);
        card.innerHTML = `
            <img class="exec-card-img" src="${chair.image}" alt="${chair.name}">
            <div class="exec-card-info">
                <h3 class="exec-card-name">${chair.name}</h3>
                <p class="exec-card-tagline">${chair.tagline}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function showExecDetail(id) {
    const chair = chairs.find(c => c.id === id);
    if(!chair) return;
    
    document.getElementById('detail-name').innerText = chair.name;
    document.getElementById('detail-price').innerText = chair.price;
    document.getElementById('detail-description').innerText = chair.description;
    
    // Render the Amazon-style gallery
    renderExecMedia(chair.media);
    
    showExecView('detail');
}

// NEW: Renders the main image and thumbnail row
function renderExecMedia(mediaArray) {
    const mainMediaContainer = document.getElementById('detail-main-media');
    const thumbContainer = document.getElementById('detail-thumbnails');

    if(!mainMediaContainer || !thumbContainer) return;

    mainMediaContainer.innerHTML = '';
    thumbContainer.innerHTML = '';

    if(mediaArray && mediaArray.length > 0) {
        // Set the first item as the main media
        setMainMedia(mediaArray[0]);

        // Create thumbnails
        mediaArray.forEach((item, index) => {
            const thumb = document.createElement('div');
            thumb.className = `exec-thumb ${index === 0 ? 'active' : ''}`;
            
            if(item.type === 'video') {
                thumb.innerHTML = `<i class="fas fa-play-circle play-icon"></i>`;
            } else {
                thumb.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
            }

            // Click event to change main media
            thumb.onclick = () => {
                setMainMedia(item);
                // Remove active class from all thumbs, add to clicked
                document.querySelectorAll('.exec-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };

            thumbContainer.appendChild(thumb);
        });
    }
}

// NEW: Changes the main image or plays the video
function setMainMedia(mediaItem) {
    const mainMediaContainer = document.getElementById('detail-main-media');
    if(!mainMediaContainer) return;

    mainMediaContainer.innerHTML = ''; // Clear current

    if(mediaItem.type === 'video') {
        mainMediaContainer.innerHTML = `
            <video autoplay muted loop playsinline style="width: 80%; height: 80%; object-fit: contain;">
                <source src="${mediaItem.src}" type="video/webm">
            </video>
        `;
    } else {
        mainMediaContainer.innerHTML = `
            <img src="${mediaItem.src}" alt="${mediaItem.alt}">
        `;
    }
}

function toggleDescription() {
    const descContent = document.getElementById('detail-description');
    const descIcon = document.getElementById('desc-icon');
    
    if(!descContent || !descIcon) return;
    
    descContent.classList.toggle('active');
    if (descContent.classList.contains('active')) { 
        descIcon.innerText = '-'; 
    } else { 
        descIcon.innerText = '+'; 
    }
}

// Initialize the grid when the page loads
window.addEventListener('DOMContentLoaded', () => { 
    renderExecCategories(); 
});

// NEW: Renders the main image and thumbnail row
function renderExecMedia(mediaArray) {
    const mainMediaContainer = document.getElementById('detail-main-media');
    const thumbContainer = document.getElementById('detail-thumbnails');

    if(!mainMediaContainer || !thumbContainer) return;

    mainMediaContainer.innerHTML = '';
    thumbContainer.innerHTML = '';

    if(mediaArray && mediaArray.length > 0) {
        // Set the first item as the main media
        setMainMedia(mediaArray[0]);

        // Create thumbnails
        mediaArray.forEach((item, index) => {
            const thumb = document.createElement('div');
            thumb.className = `exec-thumb ${index === 0 ? 'active' : ''}`;
            
            if(item.type === 'video') {
                thumb.innerHTML = `<i class="fas fa-play-circle play-icon"></i>`;
            } else {
                thumb.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
            }

            // Click event to change main media
            thumb.onclick = () => {
                setMainMedia(item);
                // Remove active class from all thumbs, add to clicked
                document.querySelectorAll('.exec-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };

            thumbContainer.appendChild(thumb);
        });
    }
}

// NEW: Changes the main image or plays the video
function setMainMedia(mediaItem) {
    const mainMediaContainer = document.getElementById('detail-main-media');
    if(!mainMediaContainer) return;

    mainMediaContainer.innerHTML = ''; // Clear current

    if(mediaItem.type === 'video') {
        mainMediaContainer.innerHTML = `
            <video autoplay muted loop playsinline style="width: 80%; height: 80%; object-fit: contain;">
                <source src="${mediaItem.src}" type="video/webm">
            </video>
        `;
    } else {
        mainMediaContainer.innerHTML = `
            <img src="${mediaItem.src}" alt="${mediaItem.alt}">
        `;
    }
}