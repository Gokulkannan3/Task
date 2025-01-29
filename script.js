document.addEventListener('DOMContentLoaded', () => {
    const foodData = [
        { id: 1, name: "Home Made Pizza", price: "₹190", rating: "4.7", time: "50-79 min", img: "images/piza.jpeg", discount: "0%" },
        { id: 2, name: "Pasta Delight", price: "₹220", rating: "4.5", time: "30-60 min", img: "images/pasta.jpeg", discount: "50%" },
        { id: 3, name: "Burger Special", price: "₹150", rating: "4.8", time: "25-50 min", img: "images/burger.jpg", discount: "0%" },
        { id: 4, name: "Veggie Platter", price: "₹180", rating: "4.6", time: "40-70 min", img: "images/veggie.jpeg", discount: "15%" },
        { id: 5, name: "Tandoori Chicken", price: "₹184", rating: "4.3", time: "15-29 min", img: "images/tandoori.jpeg", discount: "0%" },
        { id: 6, name: "Chilli Chicken", price: "₹116", rating: "4.1", time: "30-40 min", img: "images/chilli.jpeg" , discount: "0%" },
        { id: 7, name: "Paneer Tikka", price: "₹200", rating: "4.6", time: "20-40 min", img: "images/paneer.jpg" , discount: "20%" },
        { id: 8, name: "Veg Biryani", price: "₹170", rating: "4.4", time: "40-60 min", img: "images/biryani.jpg" , discount: "0%" },
        { id: 9, name: "Chicken Curry", price: "₹250", rating: "4.7", time: "45-75 min", img: "images/chicken.jpeg" , discount: "0%" },
        { id: 10, name: "Paneer Masala", price: "₹200", rating: "4.6", time: "20-40 min", img: "images/paneerm.jpeg" , discount: "30%" },
        { id: 11, name: "Veg Rice", price: "₹170", rating: "4.4", time: "40-60 min", img: "images/biryani.jpg" , discount: "0%" },
        { id: 12, name: "BBQ Chicken", price: "₹250", rating: "4.7", time: "45-75 min", img: "images/bbq.jpeg" , discount: "20%" },
    ];

    const foodGrid = document.getElementById('food-grid');
    const counts = {};

    function createFoodCard(item) {
        counts[item.id] = 0;
        const card = document.createElement('div');
        card.classList.add('food-card');
        card.innerHTML = `
            <div class="food-card-image">
                <img src="${item.img}" alt="${item.name}">
                ${item.discount !== "0%" ? `<p class="discount-badge">${item.discount}</p>` : ""}
            </div>
            <div class="food-card-content">
                <div class="food-card-header">
                    <span>${item.name}</span>
                    <span>${item.price}</span>
                </div>
                <div class="food-card-footer">
                    <div class="food-rating">
                        <img class="star" src="images/star.png" alt="star">
                        <div class="rate">${item.rating}</div>
                        <div class="food-time"><div class="p">${item.time}</div></div>
                    </div>
                    <div class="add-remove-btn">
                        <button id="minus-${item.id}" class="minus-btn" onclick="decreasedCount(${item.id})" style="display: none;">
                            <img src="images/minus.png"/>
                        </button>
                        <span id="count-${item.id}" style="display: none;">0</span>
                        <button id="plus-${item.id}" class="plus-btn" onclick="increasedCount(${item.id})"><img src="images/add.png"/></button>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    foodData.forEach(item => {
        foodGrid.appendChild(createFoodCard(item));
    });

    window.decreasedCount = (id) => {
        if (counts[id] > 0) {
            counts[id]--;
            updateCount(id);
            if (counts[id] === 0) {
                const minusBtn = document.getElementById(`minus-${id}`);
                const countSpan = document.getElementById(`count-${id}`);

                minusBtn.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                countSpan.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
                minusBtn.style.transform = "scale(0)";
                countSpan.style.transform = "scale(0)";
                setTimeout(() => {
                    minusBtn.style.display = "none";
                    countSpan.style.display = "none";
                }, 500);
            }
        }
    };

    window.increasedCount = (id) => {
        counts[id]++;
        updateCount(id);
        const minusBtn = document.getElementById(`minus-${id}`);
        const countSpan = document.getElementById(`count-${id}`);
        
        minusBtn.style.display = "inline-block";
        countSpan.style.display = "inline-block";

        setTimeout(() => {
            minusBtn.style.transform = "scale(1)";
            countSpan.style.transform = "scale(1)";
        }, 10);

        minusBtn.style.transition = "transform 0.5s ease-in-out";
        countSpan.style.transition = "transform 0.5s ease-in-out";
    };

    function updateCount(id) {
        document.getElementById(`count-${id}`).textContent = counts[id];
    }
});

function openCartModal() {
    const modal = document.getElementById("cartModal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
}

function openSearchModal() {
    const modal2 = document.getElementById("searchModal");
    modal2.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
}

function closeCartModal() {
    const modal = document.getElementById("cartModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.position = "";
}

function closeSearchModal() {
    const modal2 = document.getElementById("searchModal");
    modal2.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.position = "";
}

const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", () => {
    video.play();
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
});

pauseBtn.addEventListener("click", () => {
    video.pause();
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
});

document.addEventListener('DOMContentLoaded', () => {
    const foodData = [
        { id: 1, name: "Home Made Pizza", price: "₹190", rating: "4.7", time: "50-79 min", img: "images/piza.jpeg", discount: "0%" },
        { id: 2, name: "Pasta Delight", price: "₹220", rating: "4.5", time: "30-60 min", img: "images/pasta.jpeg", discount: "50%" },
        { id: 3, name: "Burger Special", price: "₹150", rating: "4.8", time: "25-50 min", img: "images/burger.jpg", discount: "0%" },
        { id: 4, name: "Veggie Platter", price: "₹180", rating: "4.6", time: "40-70 min", img: "images/veggie.jpeg", discount: "15%" },
        { id: 5, name: "Tandoori Chicken", price: "₹184", rating: "4.3", time: "15-29 min", img: "images/tandoori.jpeg", discount: "0%" },
        { id: 6, name: "Chilli Chicken", price: "₹116", rating: "4.1", time: "30-40 min", img: "images/chilli.jpeg" , discount: "0%" },
        { id: 7, name: "Paneer Tikka", price: "₹200", rating: "4.6", time: "20-40 min", img: "images/paneer.jpg" , discount: "20%" },
        { id: 8, name: "Veg Biryani", price: "₹170", rating: "4.4", time: "40-60 min", img: "images/biryani.jpg" , discount: "0%" },
        { id: 9, name: "Chicken Curry", price: "₹250", rating: "4.7", time: "45-75 min", img: "images/chicken.jpeg" , discount: "0%" },
    ];

    const carouselTrack = document.getElementById('carousel-track');
    let currentIndex = 1;
    const counts = {};

    foodData.forEach(item => counts[item.id] = 0);

    function createFoodCard(item, isCenter = false) {
        const card = document.createElement('div');
        card.classList.add('food-card2');
        if (isCenter) {
            card.classList.add('center-card');
        }
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            ${item.discount !== "0%" ? `<p class="discount-badge">${item.discount}</p>` : ""}
            </div>
            <div class="food-card-content">
                <div class="food-card-header">
                    <span>${item.name}</span>
                    <span>${item.price}</span>
                </div>
                <div class="food-card-footer">
                    <div class="food-rating">
                        <img class="star" src="images/star.png" alt="star">
                        <div class="rate">${item.rating}</div>
                        <div class="food-time"><div class="p">${item.time}</div></div>
                    </div>
                    <div class="add-remove-btn2">
                        <button id="minuss-${item.id}" class="minus-btn" onclick="decreaseCount(${item.id})" style="display: none;">
                            <img src="images/minus.png"/>
                        </button>
                        <span id="counts-${item.id}" style="display: none;">0</span>
                        <button id="pluss-${item.id}" class="plus-btn" onclick="increaseCount(${item.id})"><img src="images/add.png"/></button>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    function updateCarousel() {
        carouselTrack.innerHTML = '';
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
        const nextIndex = currentIndex + 1 < foodData.length ? currentIndex + 1 : null;

        if (prevIndex !== null) {
            carouselTrack.appendChild(createFoodCard(foodData[prevIndex]));
        }

        carouselTrack.appendChild(createFoodCard(foodData[currentIndex], true));

        if (nextIndex !== null) {
            carouselTrack.appendChild(createFoodCard(foodData[nextIndex]));
        }
    }

    function moveCarousel(direction) {
        const newIndex = currentIndex + direction;
        const maxIndex = foodData.length - 1;

        if (newIndex >= 0 && newIndex < foodData.length) {
            const cardToAnimate = direction === 1 ? carouselTrack.children[2] : carouselTrack.children[0];

            cardToAnimate.classList.add(direction === 1 ? 'slide-out-leftt' : 'slide-out-rightt');

            setTimeout(() => {
                cardToAnimate.classList.remove('slide-out-left', 'slide-out-rightt');
                currentIndex = newIndex;
                updateCarousel();

                // Update button states
                const prevBtn = document.getElementById('prevBtn');
                const nextBtn = document.getElementById('nextBtn');

                document.getElementById('prevBtnImg').src = currentIndex === 0 ? "images/gleft.png" : "images/wleft.png";
                document.getElementById('nextBtnImg').src = currentIndex === maxIndex ? "images/play1.png" : "images/play.png";

                if (currentIndex === 0) {
                    prevBtn.style.backgroundColor = "white";  
                    prevBtn.style.border = "2px solid #1AC073";
                } else {
                    prevBtn.style.backgroundColor = "#1AC073";
                    prevBtn.style.border = "none";
                }

                if (currentIndex === maxIndex) {
                    nextBtn.style.backgroundColor = "white";  
                    nextBtn.style.border = "2px solid #1AC073";
                } else {
                    nextBtn.style.backgroundColor = "#1AC073";  
                    nextBtn.style.border = "none";
                }
            }, 500);
        }
    }

    window.moveCarousel = moveCarousel;

    window.decreaseCount = (id) => {
        if (counts[id] > 0) {
            counts[id]--;
            updateCount(id);
    
            const minusBtn = document.getElementById(`minuss-${id}`);
            const countSpan = document.getElementById(`counts-${id}`);
    
            minusBtn.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
            countSpan.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
    
            if (counts[id] === 0) {
                minusBtn.style.transform = "scale(0)";
                countSpan.style.transform = "scale(0)";
    
                setTimeout(() => {
                    minusBtn.style.display = "none";
                    countSpan.style.display = "none";
                }, 500);
            }
        }
    };
    
    window.increaseCount = (id) => {
        counts[id]++;
        updateCount(id);
    
        const minusBtn = document.getElementById(`minuss-${id}`);
        const countSpan = document.getElementById(`counts-${id}`);
    
        minusBtn.style.display = "inline-block";
        countSpan.style.display = "inline-block";
    
        setTimeout(() => {
            minusBtn.style.transform = "scale(1)";
            countSpan.style.transform = "scale(1)";
        }, 10);
    
        minusBtn.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
        countSpan.style.transition = "transform 0.5s ease-in-out, opacity 0.5s";
    };    

    function updateCount(id) {
        document.getElementById(`counts-${id}`).textContent = counts[id];
    }

    updateCarousel();
});