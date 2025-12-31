let category = localStorage.getItem("category");
let difficulty = localStorage.getItem("difficulty");
let questions = questionsData[category][difficulty];
let current = 0, score = 0;
let timeLeft = 10, timerInterval;

function loadQuestion() {
  if (!questions) return alert("Error: No questions found!");
  if (current >= questions.length) return endQuiz();

  document.getElementById("question").textContent = questions[current].q;
  const opts = document.getElementById("options");
  opts.innerHTML = "";

  questions[current].opts.forEach((opt, idx) => {
    opts.innerHTML += `<li><input type="radio" name="opt" value="${idx}"> ${opt}</li>`;
  });

  resetTimer();
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 10;
  document.getElementById("timer").innerText = timeLeft;
  timerInterval = setInterval(()=>{
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    if(timeLeft<=0) nextQuestion();
  },1000);
}

function nextQuestion() {
  let selected = document.querySelector("input[name='opt']:checked");
  if(selected && +selected.value === questions[current].ans) score++;
  current++;
  loadQuestion();
}

function endQuiz() {
  clearInterval(timerInterval);
  localStorage.setItem("score", score);
  localStorage.setItem("total", questions.length);
  window.location.href = "result.html";
}

loadQuestion();
