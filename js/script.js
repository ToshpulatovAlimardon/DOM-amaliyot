"use strict";

// 1-exercise
const promoAdv = document.querySelector(".promo__adv");
promoAdv.remove();

// 2-exercise
const promoGenre = document.querySelector(".promo__genre");

promoGenre.textContent = "Komediya";

// 3-exercise
const promoBg = document.querySelector(".promo__bg");

promoBg.style.cssText =
    'background: url("../img/1.jpg"); background-position: bottom;';
