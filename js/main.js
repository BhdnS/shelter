//BURGER MENU
const box = document.querySelector(".burger__box");
const items = document.querySelector(".burger__items");
const body = document.querySelector("body");
const btn = document.querySelector(".burger__img");

document.addEventListener("click", showMenu);

function showMenu(e) {
  if (e.target.closest(".burger__img")) {
    box.classList.toggle("block");
    items.classList.toggle("right");
    btn.classList.toggle("deg");
    body.classList.toggle("hidden");
  }
  if (!e.target.closest(".burger__img")) {
    box.classList.remove("block");
    items.classList.remove("right");
    btn.classList.remove("deg");
    body.classList.remove("hidden");
  }
}

//CARUSEL

const petsCards = document.querySelector(".our-friends__pets");
const leftBtn = document.querySelector(".our-friends__left");
const rightBtn = document.querySelector(".our-friends__button-right");
const cards = document.querySelectorAll(".our-friends__card");
const allCards = cards.length;
let visibleCards = 3;
let currentPosition = 0;

for (let i = visibleCards; i < allCards; i++) {
  cards[i].style.display = "none";
}

leftBtn.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
  } else {
    currentPosition = allCards - visibleCards;
  }
  updateSlider();
});

rightBtn.addEventListener("click", () => {
  if (currentPosition < allCards - visibleCards) {
    currentPosition++;
  } else {
    currentPosition = 0;
  }
  updateSlider();
});

function updateSlider() {
  if (window.innerWidth >= 769) {
    visibleCards = 3;
  } else if (window.innerWidth >= 321) {
    visibleCards = 2;
  } else {
    visibleCards = 1;
  }

  for (let i = 0; i < allCards; i++) {
    if (i >= currentPosition && i < currentPosition + visibleCards) {
      cards[i].style.display = "flex";
    } else {
      cards[i].style.display = "none";
    }
  }
}

//POPUP
const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");
const cardThree = document.querySelector(".card-3");
const cardFour = document.querySelector(".card-4");
const cardFive = document.querySelector(".card-5");
const cardSix = document.querySelector(".card-6");
const cardSeven = document.querySelector(".card-7");
const cardEight = document.querySelector(".card-8");
const popupOne = document.querySelector(".popup__one");
const popupTwo = document.querySelector(".popup__two");
const popupThree = document.querySelector(".popup__three");
const popupFour = document.querySelector(".popup__four");
const popupFive = document.querySelector(".popup__five");
const popupSix = document.querySelector(".popup__six");
const popupSeven = document.querySelector(".popup__seven");
const popupEight = document.querySelector(".popup__eight");
const popupExit = document.querySelector(".popup__exit");

cardOne.addEventListener("click", showPopupOne);

function showPopupOne(e) {
  if (e.target.closest(".card-1")) {
    popupOne.classList.toggle("active");
  }
}

cardTwo.addEventListener("click", showPopupTwo);

function showPopupTwo(e) {
  if (e.target.closest(".card-2")) {
    popupTwo.classList.toggle("active");
  }
}

cardThree.addEventListener("click", showPopupThree);

function showPopupThree(e) {
  if (e.target.closest(".card-3")) {
    popupThree.classList.toggle("active");
  }
}

cardFour.addEventListener("click", showPopupFour);

function showPopupFour(e) {
  if (e.target.closest(".card-4")) {
    popupFour.classList.toggle("active");
  }
}

cardFive.addEventListener("click", showPopupFive);

function showPopupFive(e) {
  if (e.target.closest(".card-5")) {
    popupFive.classList.toggle("active");
  }
}

cardSix.addEventListener("click", showPopupSix);

function showPopupSix(e) {
  if (e.target.closest(".card-6")) {
    popupSix.classList.toggle("active");
  }
}

cardSeven.addEventListener("click", showPopupSeven);

function showPopupSeven(e) {
  if (e.target.closest(".card-7")) {
    popupSeven.classList.toggle("active");
  }
}

cardEight.addEventListener("click", showPopupEight);

function showPopupEight(e) {
  if (e.target.closest(".card-8")) {
    popupEight.classList.toggle("active");
  }
}
