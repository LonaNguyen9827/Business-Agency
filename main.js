const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
});

// Section 2 - Video
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
    if (video.paused) {
        video.play();
        btn.className = "far fa-pause-circle";
        video.style.opacity = ".7";
    } else {
        video.pause();
        btn.className = "far fa-play-circle";
        video.style.opacity = ".3";
    }
};

btn.addEventListener("click", () => {
    playPause();
});

video.addEventListener("timeupdate", () => {
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`;
    if (video.ended) {
        btn.className = "far fa-play-circle";
        video.style.opacity = ".3";
    }
});

// Section 3 - Flip CARD
const cards = document.querySelectorAll(".pricing-card");
let currentIndex = -1;

cards.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (currentIndex !== -1 && currentIndex !== index) {
            cards[currentIndex].classList.remove("flip");
        }

        if (index === currentIndex) {
            // Xóa class "flip"
            item.classList.remove("flip");
            currentIndex = -1; // Reset biến theo dõi
        } else {
            // Thêm class "flip" vào card hiện tại
            item.classList.add("flip");
            currentIndex = index; // Cập nhật index của card đang được "flip"
        }
    });
});
