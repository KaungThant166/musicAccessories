let menuTag = document.getElementById('humburger_menu');
let menuItem = document.getElementById('menu')

menuTag.addEventListener("click", () => {
    menuItem.classList.toggle("active");

    if (menuTag.innerHTML == `<i class="fa-solid fa-xmark"></i>`) {
        menuTag.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menuTag.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
})




let allBtn = document.getElementById("all-btn")
let watchBtn = document.getElementById("watch-btn")
let vrBtn = document.getElementById("vr-btn")
let laptopBtn = document.getElementById("laptop-btn");
let bootsBtn = document.getElementById("boots-btn");

let all_cards = document.getElementsByClassName("pcard")
let boots_cards = document.getElementsByClassName("boots");
let vr_cards = document.getElementsByClassName("vr");
let laptop_cards = document.getElementsByClassName("laptop");
let watch_cards = document.getElementsByClassName("watch");

let bootsHide = () => {
    for (let boots_card of boots_cards) {
        boots_card.style.display = "none"
    };
}

let vrHide = () => {
    for (let vr_card of vr_cards) {
        vr_card.style.display = "none"
    };
}

let watchHide = () => {
    for (let watch_card of watch_cards) {
        watch_card.style.display = "none"
    }
}
let laptopHide = () => {
    for (let laptop_card of laptop_cards) {
        laptop_card.style.display = "none"
    }
}


allBtn.addEventListener('click', () => {
    for (let all_card of all_cards) {
        all_card.style.display = "block"
    }

    allBtn.classList.add("active")
    vrBtn.classList.remove("active");
    laptopBtn.classList.remove("active")
    watchBtn.classList.remove("active");
    bootsBtn.classList.remove("active");
})

bootsBtn.addEventListener('click', () => {

    for (let boots_card_card of boots_cards) {
        boots_card_card.style.display = "block"
    };
    laptopHide();
    vrHide();
    watchHide();

    bootsBtn.classList.add("active");
    allBtn.classList.remove("active")
    vrBtn.classList.remove("active");
    laptopBtn.classList.remove("active")
    watchBtn.classList.remove("active");


})


watchBtn.addEventListener('click', () => {

    for (let watch_card of watch_cards) {
        watch_card.style.display = "block"
    };
    laptopHide();
    vrHide();
    bootsHide();
    bootsBtn.classList.remove("active");
    allBtn.classList.remove("active")
    vrBtn.classList.remove("active");
    laptopBtn.classList.remove("active")
    watchBtn.classList.add("active");

})

vrBtn.addEventListener('click', () => {

    for (let vr_card of vr_cards) {
        vr_card.style.display = "block"
    }

    laptopHide();
    watchHide();
    bootsHide();
    bootsBtn.classList.remove("active");
    allBtn.classList.remove("active")
    vrBtn.classList.add("active");
    laptopBtn.classList.remove("active")
    watchBtn.classList.remove("active");

})
laptopBtn.addEventListener('click', () => {

    for (let laptop_card of laptop_cards) {
        laptop_card.style.display = "block"
    }

    vrHide();
    watchHide();
    bootsHide();
    bootsBtn.classList.remove("active");
    allBtn.classList.remove("active")
    vrBtn.classList.remove("active");
    laptopBtn.classList.add("active")
    watchBtn.classList.remove("active");

})