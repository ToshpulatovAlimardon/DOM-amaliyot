"use strict";

// 1-exercise
const promoAdv = document.querySelectorAll(".promo__adv img");
promoAdv.forEach((item) => {
    item.remove();
});

// 2-exercise
const promoGenre = document.querySelector(".promo__genre");

promoGenre.textContent = "Komediya";

// 3-exercise
const promoBg = document.querySelector(".promo__bg");

promoBg.style.backgroundImage = 'url("img/1.jpg")';

// 4-exercise
