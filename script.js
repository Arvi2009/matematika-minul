// Global variables for quiz data and state
const quizzes = {
  penjumlahan: [
    { question: "1 + 1", answer: 2 },
    { question: "2 + 2", answer: 4 },
    { question: "3 + 1", answer: 4 },
    { question: "4 + 2", answer: 6 },
    { question: "5 + 3", answer: 8 },
    { question: "6 + 1", answer: 7 },
    { question: "7 + 2", answer: 9 },
    { question: "8 + 1", answer: 9 },
    { question: "9 + 0", answer: 9 },
    { question: "1 + 3", answer: 4 },
    { question: "2 + 4", answer: 6 },
    { question: "3 + 5", answer: 8 },
    { question: "4 + 4", answer: 8 },
    { question: "5 + 2", answer: 7 },
    { question: "6 + 3", answer: 9 },
    { question: "7 + 1", answer: 8 },
    { question: "8 + 0", answer: 8 },
    { question: "9 + 1", answer: 10 },
    { question: "1 + 4", answer: 5 },
    { question: "2 + 5", answer: 7 },
    { question: "3 + 6", answer: 9 },
    { question: "4 + 3", answer: 7 },
    { question: "5 + 1", answer: 6 },
    { question: "6 + 2", answer: 8 },
    { question: "7 + 0", answer: 7 },
    { question: "8 + 2", answer: 10 },
    { question: "9 + 3", answer: 12 },
    { question: "1 + 5", answer: 6 },
    { question: "2 + 6", answer: 8 },
    { question: "3 + 7", answer: 10 },
    { question: "4 + 1", answer: 5 },
    { question: "5 + 4", answer: 9 },
    { question: "6 + 0", answer: 6 },
    { question: "7 + 3", answer: 10 },
    { question: "8 + 4", answer: 12 },
    { question: "9 + 2", answer: 11 },
    { question: "1 + 6", answer: 7 },
    { question: "2 + 7", answer: 9 },
    { question: "3 + 8", answer: 11 },
    { question: "4 + 0", answer: 4 },
    { question: "5 + 5", answer: 10 },
    { question: "6 + 4", answer: 10 },
    { question: "7 + 2", answer: 9 },
    { question: "8 + 3", answer: 11 },
    { question: "9 + 4", answer: 13 },
    { question: "1 + 7", answer: 8 },
    { question: "2 + 8", answer: 10 },
    { question: "3 + 9", answer: 12 },
    { question: "4 + 6", answer: 10 },
    { question: "5 + 0", answer: 5 },
    { question: "6 + 5", answer: 11 },
    { question: "7 + 4", answer: 11 },
    { question: "8 + 1", answer: 9 },
    { question: "9 + 5", answer: 14 }
  ],
  pengurangan: [
    { question: "100 - 1", answer: 99 },
    { question: "99 - 2", answer: 97 },
    { question: "98 - 3", answer: 95 },
    { question: "97 - 4", answer: 93 },
    { question: "96 - 5", answer: 91 },
    { question: "95 - 6", answer: 89 },
    { question: "94 - 7", answer: 87 },
    { question: "93 - 8", answer: 85 },
    { question: "92 - 9", answer: 83 },
    { question: "91 - 10", answer: 81 },
    { question: "90 - 11", answer: 79 },
    { question: "89 - 12", answer: 77 },
    { question: "88 - 13", answer: 75 },
    { question: "87 - 14", answer: 73 },
    { question: "86 - 15", answer: 71 },
    { question: "85 - 16", answer: 69 },
    { question: "84 - 17", answer: 67 },
    { question: "83 - 18", answer: 65 },
    { question: "82 - 19", answer: 63 },
    { question: "81 - 20", answer: 61 },
    { question: "80 - 21", answer: 59 },
    { question: "79 - 22", answer: 57 },
    { question: "78 - 23", answer: 55 },
    { question: "77 - 24", answer: 53 },
    { question: "76 - 25", answer: 51 },
    { question: "75 - 26", answer: 49 },
    { question: "74 - 27", answer: 47 },
    { question: "73 - 28", answer: 45 },
    { question: "72 - 29", answer: 43 },
    { question: "71 - 30", answer: 41 },
    { question: "70 - 31", answer: 39 },
    { question: "69 - 32", answer: 37 },
    { question: "68 - 33", answer: 35 },
    { question: "67 - 34", answer: 33 },
    { question: "66 - 35", answer: 31 },
    { question: "65 - 36", answer: 29 },
    { question: "64 - 37", answer: 27 },
    { question: "63 - 38", answer: 25 },
    { question: "62 - 39", answer: 23 },
    { question: "61 - 40", answer: 21 },
    { question: "60 - 41", answer: 19 },
    { question: "59 - 42", answer: 17 },
    { question: "58 - 43", answer: 15 },
    { question: "57 - 44", answer: 13 },
    { question: "56 - 45", answer: 11 },
    { question: "55 - 46", answer: 9 },
    { question: "54 - 47", answer: 7 },
    { question: "53 - 48", answer: 5 },
    { question: "52 - 49", answer: 3 },
    { question: "51 - 50", answer: 1 }
  ],
  perkalian: [
    { question: "1 x 2", answer: 2 },
    { question: "2 x 2", answer: 4 },
    { question: "3 x 3", answer: 9 },
    { question: "4 x 4", answer: 16 },
    { question: "5 x 5", answer: 25 },
    { question: "6 x 6", answer: 36 },
    { question: "7 x 7", answer: 49 },
    { question: "8 x 8", answer: 64 },
    { question: "9 x 9", answer: 81 },
    { question: "10 x 10", answer: 100 },
    { question: "11 x 11", answer: 121 },
    { question: "12 x 12", answer: 144 },
    { question: "13 x 13", answer: 169 },
    { question: "14 x 14", answer: 196 },
    { question: "15 x 15", answer: 225 },
    { question: "16 x 16", answer: 256 },
    { question: "17 x 17", answer: 289 },
    { question: "18 x 18", answer: 324 },
    { question: "19 x 19", answer: 361 },
    { question: "20 x 20", answer: 400 },
    { question: "21 x 21", answer: 441 },
    { question: "22 x 22", answer: 484 },
    { question: "23 x 23", answer: 529 },
    { question: "24 x 24", answer: 576 },
    { question: "25 x 25", answer: 625 },
    { question: "26 x 26", answer: 676 },
    { question: "27 x 27", answer: 729 },
    { question: "28 x 28", answer: 784 },
    { question: "29 x 29", answer: 841 },
    { question: "30 x 30", answer: 900 },
    { question: "31 x 31", answer: 961 },
    { question: "32 x 32", answer: 1024 },
    { question: "33 x 33", answer: 1089 },
    { question: "34 x 34", answer: 1156 },
    { question: "35 x 35", answer: 1225 },
    { question: "36 x 36", answer: 1296 },
    { question: "37 x 37", answer: 1369 },
    { question: "38 x 38", answer: 1444 },
    { question: "39 x 39", answer: 1521 },
    { question: "40 x 40", answer: 1600 },
    { question: "41 x 41", answer: 1681 },
    { question: "42 x 42", answer: 1764 },
    { question: "43 x 43", answer: 1849 },
    { question: "44 x 44", answer: 1936 },
    { question: "45 x 45", answer: 2025 },
    { question: "46 x 46", answer: 2116 },
    { question: "47 x 47", answer: 2209 },
    { question: "48 x 48", answer: 2304 },
    { question: "49 x 49", answer: 2401 },
    { question: "50 x 50", answer: 2500 }
  ],
  pembagian: [
    { question: "100 ÷ 1", answer: 100 },
    { question: "99 ÷ 3", answer: 33 },
    { question: "98 ÷ 2", answer: 49 },
    { question: "96 ÷ 4", answer: 24 },
    { question: "95 ÷ 5", answer: 19 },
    { question: "90 ÷ 3", answer: 30 },
    { question: "88 ÷ 4", answer: 22 },
    { question: "84 ÷ 7", answer: 12 },
    { question: "81 ÷ 9", answer: 9 },
    { question: "80 ÷ 8", answer: 10 },
    { question: "75 ÷ 5", answer: 15 },
    { question: "72 ÷ 6", answer: 12 },
    { question: "70 ÷ 7", answer: 10 },
    { question: "66 ÷ 6", answer: 11 },
    { question: "64 ÷ 8", answer: 8 },
    { question: "60 ÷ 5", answer: 12 },
    { question: "56 ÷ 7", answer: 8 },
    { question: "54 ÷ 6", answer: 9 },
    { question: "50 ÷ 5", answer: 10 },
    { question: "48 ÷ 6", answer: 8 },
    { question: "45 ÷ 9", answer: 5 },
    { question: "42 ÷ 7", answer: 6 },
    { question: "40 ÷ 8", answer: 5 },
    { question: "36 ÷ 6", answer: 6 },
    { question: "35 ÷ 7", answer: 5 },
    { question: "32 ÷ 8", answer: 4 },
    { question: "30 ÷ 5", answer: 6 },
    { question: "28 ÷ 7", answer: 4 },
    { question: "27 ÷ 9", answer: 3 },
    { question: "25 ÷ 5", answer: 5 },
    { question: "24 ÷ 6", answer: 4 },
    { question: "21 ÷ 7", answer: 3 },
    { question: "20 ÷ 5", answer: 4 },
    { question: "18 ÷ 6", answer: 3 },
    { question: "16 ÷ 4", answer: 4 },
    { question: "15 ÷ 5", answer: 3 },
    { question: "14 ÷ 7", answer: 2 },
    { question: "12 ÷ 4", answer: 3 },
    { question: "10 ÷ 5", answer: 2 },
    { question: "9 ÷ 3", answer: 3 },
    { question: "8 ÷ 4", answer: 2 },
    { question: "6 ÷ 2", answer: 3 },
    { question: "4 ÷ 2", answer: 2 },
    { question: "3 ÷ 1", answer: 3 },
    { question: "2 ÷ 1", answer: 2 },
    { question: "1 ÷ 1", answer: 1 }
  ]
};

// Shuffle function to randomize array elements
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 30;

// Utility function to get element by id
function $(id) {
  return document.getElementById(id);
}

// Initialize quiz page
function initQuiz(quizName) {
  const allQuestions = quizzes[quizName].slice();
  const easyQuestions = allQuestions.slice(0, 5);
  const harderQuestions = allQuestions.slice(5);
  const shuffledHarder = shuffle(harderQuestions);
  currentQuiz = easyQuestions.concat(shuffledHarder);
  currentQuestionIndex = 0;
  score = 0;
  updateProgress();
  showQuestion();
  updateScoreDisplay();
}

// Show current question with fadeInUp animation
function showQuestion() {
  const questionObj = currentQuiz[currentQuestionIndex];
  const questionEl = $("question-text");
  questionEl.textContent = questionObj.question;
  questionEl.classList.remove("fade-in-up");
  void questionEl.offsetWidth; // trigger reflow
  questionEl.classList.add("fade-in-up");

  $("answer-input").value = "";
  $("feedback").textContent = "";
  $("feedback").className = "";
  $("next-btn").style.display = "none";

  // Reset and start timer
  resetTimer();
  startTimer();
}

// Check answer and show feedback
function checkAnswer() {
  const userAnswer = $("answer-input").value.trim();
  if (userAnswer === "") {
    alert("Tolong isi jawabanmu ya!");
    return;
  }
  const correctAnswer = currentQuiz[currentQuestionIndex].answer.toString();
  const feedbackEl = $("feedback");
  if (userAnswer === correctAnswer) {
    score++;
    updateScoreDisplay();
    feedbackEl.textContent = "Hebat!";
    feedbackEl.style.color = "var(--color-green)";
    showStarAnimation();
    playSound("success");
    $("next-btn").style.display = "inline-block";
    $("answer-input").disabled = true;
    stopTimer();
  } else {
    feedbackEl.textContent = "Coba lagi ya";
    feedbackEl.style.color = "var(--color-yellow)";
    shakeElement($("answer-input"));
    playSound("fail");
    showNotification("Jawaban salah, coba lagi ya");
  }
}

// Show notification popup
function showNotification(message) {
  let notification = document.getElementById("notification");
  if (!notification) {
    notification = document.createElement("div");
    notification.id = "notification";
    document.body.appendChild(notification);
  }
  notification.textContent = message;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

// Show star animation for correct answer
function showStarAnimation() {
  const star = document.createElement("div");
  star.className = "star";
  star.textContent = "⭐";
  document.body.appendChild(star);
  const rect = $("answer-input").getBoundingClientRect();
  star.style.left = rect.left + rect.width / 2 + "px";
  star.style.top = rect.top - 30 + "px";
  setTimeout(() => {
    star.remove();
  }, 1000);
}

// Shake element animation for wrong answer
function shakeElement(el) {
  el.classList.add("shake");
  setTimeout(() => {
    el.classList.remove("shake");
  }, 500);
}

// Play sound effect
function playSound(type) {
  if (!window.Audio) return;
  let audio;
  if (type === "success") {
    audio = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
  } else if (type === "fail") {
    audio = new Audio("https://actions.google.com/sounds/v1/cartoon/boing.ogg");
  }
  if (audio) {
    audio.play();
  }
}

// Show next question or finish quiz
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuiz.length) {
    showFinalScore();
  } else {
    $("answer-input").disabled = false;
    showQuestion();
    updateProgress();
  }
}

// Update progress bar
function updateProgress() {
  const progressBar = $("progress-bar");
  const percent = ((currentQuestionIndex) / currentQuiz.length) * 100;
  progressBar.style.width = percent + "%";
}

// Update score display
function updateScoreDisplay() {
  const scoreEl = $("score");
  if (scoreEl) {
    scoreEl.textContent = `Skor: ${score}`;
  }
}

// Show final score message
function showFinalScore() {
  const mainContent = $("main-content");
  mainContent.innerHTML = `
    <h2>Selamat! Kamu selesai.</h2>
    <p>Skor akhir kamu: <strong>${score} dari ${currentQuiz.length}</strong></p>
    <button onclick="location.reload()">Coba Lagi</button>
    <button onclick="location.href='index.html'">Kembali ke Beranda</button>
  `;
  localStorage.setItem("lastScore", score);
}

// Initialize page based on quiz type
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");
  if (page && quizzes[page]) {
    initQuiz(page);
  }
});
