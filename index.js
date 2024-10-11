// scoreboard
const homeScore = document.querySelector(".home-section .current-score")
const guestScore = document.querySelector(".guest-section .current-score")

// home buttons
const plusOneHome = document.querySelector(".home-section .plus-one")
const plusTwoHome = document.querySelector(".home-section .plus-two")
const plusThreeHome = document.querySelector(".home-section .plus-three")

// guest buttons
const plusOneGuest = document.querySelector(".guest-section .plus-one")
const plusTwoGuest = document.querySelector(".guest-section .plus-two")
const plusThreeGuest = document.querySelector(".guest-section .plus-three")

// clear button
const clearBtn = document.querySelector(".clear-btn")

// function for adding score to home
function plusScoreHome(score) {
  let currentScore = parseInt(homeScore.textContent)
  currentScore += score
  homeScore.textContent = currentScore
}

// function for adding score to home
function plusScoreGuest(score) {
  let currentScore = parseInt(guestScore.textContent)
  currentScore += score
  guestScore.textContent = currentScore
}

// function to clear all
function clearAll() {
  homeScore.textContent = 0
  guestScore.textContent = 0
}

// event listeners to add scores to home
plusOneHome.addEventListener("click", () => {
  plusScoreHome(1)
})
plusTwoHome.addEventListener("click", () => {
  plusScoreHome(2)
})
plusThreeHome.addEventListener("click", () => {
  plusScoreHome(3)
})

// event listeners to add scores to guest
plusOneGuest.addEventListener("click", () => {
  plusScoreGuest(1)
})
plusTwoGuest.addEventListener("click", () => {
  plusScoreGuest(2)
})
plusThreeGuest.addEventListener("click", () => {
  plusScoreGuest(3)
})

// event listener to clear all
clearBtn.addEventListener("click", () => {
  clearAll()
})
