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
const seriesList = document.querySelector(".promo__interactive-list");
const seriesDb = {
    series: [
        "Omar",
        "The Final Legacy",
        "Ertugrul",
        "Magnificent Century",
        "The Great Seljuks: Guardians...",
    ],
};

seriesList.innerHTML = "";
seriesDb.series.forEach((item, index) => {
    seriesList.innerHTML += `
    <li class="promo__interactive-item"> ${index + 1} ${item}
        <div class="delete"></div>
    </li>
    `;
});
