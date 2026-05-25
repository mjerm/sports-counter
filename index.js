let countHome = 0;
let countGuest = 0;

let counterGuest = document.getElementById('counter-guest');
let counterHome = document.getElementById('counter-home');

counterGuest.textContent = 0;
counterHome.textContent = 0;

function incrementHomeOne() {
  countHome += 1;
  counterHome.textContent = countHome;
}

function incrementHomeTwo() {
  countHome += 2;
  counterHome.textContent = countHome;
}

function incrementHomeThree() {
  countHome += 3;
  counterHome.textContent = countHome;
}

function incrementGuestOne() {
  countGuest += 1;
  counterGuest.textContent = countGuest;
}

function incrementGuestTwo() {
  countGuest += 2;
  counterGuest.textContent = countGuest;
}

function incrementGuestThree() {
  countGuest += 3;
  counterGuest.textContent = countGuest;
}

function newGame() {
  countHome = 0;
  countGuest = 0;
  counterHome.textContent = countHome;
  counterGuest.textContent = countGuest;
}
