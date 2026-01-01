// Signup
function signup() {
  alert("Signup Successful!");
  window.location.href = "login.html";
}

// Login
function login() {
  alert("Login Successful!");
  window.location.href = "quiz.html";
}

// Quiz Data
const quizData = [
  { q: "HTML stands for?", o: ["Hyper Text Markup Language","High Text ML","Home Tool ML"], a: 0 },
  { q: "CSS used for?", o: ["Logic","Styling","Database"], a: 1 },
  { q: "JS is?", o: ["Programming Language","Markup","Style Sheet"], a: 0 }
];

let index = 0;
let score = 0;

function loadQuiz() {
  if (!document.getElementById("question")) return;
  document.getElementById("question").innerText = quizData[index].q;
  let options = document.getElementById("options");
  options.innerHTML = "";
  quizData[index].o.forEach((opt,i)=>{
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "btn";
    btn.onclick = ()=>checkAnswer(i);
    options.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === quizData[index].a) score++;
}

function nextQuestion() {
  index++;
  if (index < quizData.length) loadQuiz();
  else {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
}

loadQuiz();
