let motherDiv = document.querySelector("body > div ");
// creating html + buttons

let startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.id = "start";
startButton.setAttribute("onclick", "startButtonClick()");
motherDiv.appendChild(startButton);

// big div

let quizScreen = document.createElement("div");
quizScreen.id = "quiz-screen";
quizScreen.style.overflow = "hidden";
motherDiv.appendChild(quizScreen);

// next & previous buttons outside div

let previousButton = document.createElement("button");
previousButton.innerText = "Vorige";
previousButton.id = "vorige";
previousButton.setAttribute("onclick", "previousButtonClick()");

let nextButton = document.createElement("button");
nextButton.innerText = "Volgende";
nextButton.id = "volgende";
nextButton.setAttribute("onClick", "nextButtonClick()");
motherDiv.appendChild(previousButton);
motherDiv.appendChild(nextButton);
//content main div

let title = document.createElement("h1");
title.innerText = "Math Problem";
quizScreen.appendChild(title);

let Question = document.createElement("h2");
title.innerText = "Math Problem";
quizScreen.appendChild(title);

// page handler
let pagina = 1;
let progressText = document.createElement("span");
progressText.innerText = pagina + " /6";
quizScreen.appendChild(progressText);
let innerScreen = document.createElement("div");
innerScreen.id = "quiz-inner";

motherDiv.appendChild(innerScreen);

let answer1 = document.createElement("div");
motherDiv.appendChild(answer1);

let borderblock1 = document.createElement("div");
borderblock1.id = "borderblock1";
motherDiv.appendChild(borderblock1);

let ball2 = document.createElement("div");
ball2.id = "ball2";
ball2.innerText = "1";
motherDiv.appendChild(ball2);

let answer2 = document.createElement("div");
motherDiv.appendChild(answer2);

let borderblock2 = document.createElement("div");
borderblock2.id = "borderblock2";
motherDiv.appendChild(borderblock2);

let ball3 = document.createElement("div");
ball3.id = "ball3";
ball3.innerText = "2";
motherDiv.appendChild(ball3);

let answer3 = document.createElement("div");
motherDiv.appendChild(answer3);

let borderblock3 = document.createElement("div");
borderblock3.id = "borderblock3";
motherDiv.appendChild(borderblock3);

let ball4 = document.createElement("div");
ball4.id = "ball4";
ball4.innerText = "3";
innerScreen.style.overflow = "hidden";
motherDiv.appendChild(ball4);

let answer4 = document.createElement("div");
motherDiv.appendChild(answer4);

let borderblock4 = document.createElement("div");
borderblock4.id = "borderblock4";
motherDiv.appendChild(borderblock4);

let ball5 = document.createElement("div");
ball5.id = "ball5";
ball5.innerText = "4";
motherDiv.appendChild(ball5);

let answer5 = document.createElement("div");
motherDiv.appendChild(answer5);

let borderblock5 = document.createElement("div");
borderblock5.id = "borderblock5";
motherDiv.appendChild(borderblock5);

let ball6 = document.createElement("div");
ball6.id = "ball6";
ball6.innerText = "5 ";
motherDiv.appendChild(ball6);

//random

//function randomizer(nummer) {
// return Math.floor(Math.random() * nummer)
//}

//let vraag = randomizer(100) + " + " + randomizer(100)
//let sum = eval(vraag)

//onclick function
function startButtonClick() {
  startButton.style.display = "none";
  quizScreen.style.display = "block";
  innerScreen.style.display = "block";
  answer1.style.display = "block";
  answer2.style.display = "block";
  answer3.style.display = "block";
  answer4.style.display = "block";
  answer5.style.display = "block";
  borderblock1.style.display = "block";
  borderblock2.style.display = "block";
  borderblock3.style.display = "block";
  borderblock4.style.display = "block";
  borderblock5.style.display = "block";
  ball2.style.display = "block";
  ball3.style.display = "block";
  ball4.style.display = "block";
  ball5.style.display = "block";
  ball6.style.display = "block";

  innerScreen.innerText = vraag[0].question;

  answer1.id = "answer";
  answer2.id = "answer2";
  answer3.id = "answer3";
  answer4.id = "answer4";
  answer5.id = "answer5";
  answer1.innerText = vraag[0].answers.a;
  answer2.innerText = vraag[0].answers.b;
  answer3.innerText = vraag[0].answers.c;
  answer4.innerText = vraag[0].answers.d;
  answer5.innerText = vraag[0].answers.e;

  previousButton.style.display = "inline-block";
  nextButton.style.display = "inline-block";
}

let vraag = [
  {
    question: "What is 10/2?",
    answers: {
      a: "3",
      b: "5",
      c: "115",
      d: "200",
      e: "400",
    },
    correctAnswer: "5",
  },
  {
    question: "What is 30/3?",
    answers: {
      a: "6",
      b: "1",
      c: "10",
      d: "2400",
      e: "41200",
    },
    correctAnswer: "10",
  },
  {
    question: "What is 18/2?",
    answers: {
      a: "11",
      b: "87",
      c: "9",
      d: "2440",
      e: "210",
    },
    correctAnswer: "9",
  },

  {
    question: "What is 10*2?",
    answers: {
      a: "34",
      b: "20",
      c: "123",
      d: "0",
      e: "410",
    },
    correctAnswer: "20",
  },

  {
    question: "What is 20/2?",
    answers: {
      a: "77",
      b: "5",
      c: "115",
      d: "260",
      e: "10",
    },
    correctAnswer: "10",
  },

  {
    question: "What is 6/2?",
    answers: {
      a: "3",
      b: "24",
      c: "115",
      d: "220",
      e: "30",
    },
    correctAnswer: "3",
  },
];
let scoren = 0;
answer1.addEventListener("click", clicked);
answer2.addEventListener("click", clicked);
answer3.addEventListener("click", clicked);
answer4.addEventListener("click", clicked);
answer5.addEventListener("click", clicked);

function clicked(event) {
  document.getElementById("answer").style.pointerEvents = "none";
  document.getElementById("answer2").style.pointerEvents = "none";
  document.getElementById("answer3").style.pointerEvents = "none";
  document.getElementById("answer4").style.pointerEvents = "none";
  document.getElementById("answer5").style.pointerEvents = "none";

  if (event.target.innerText === vraag[pagina - 1].correctAnswer) {
    event.target.style.background = "green";
  } else if (event.target.innerText !== vraag[pagina - 1].correctAnswer)
    event.target.style.background = "red";

  if (event.target.innerText === vraag[pagina - 1].correctAnswer) {
    scoren++;
  }
}

function previousButtonClick() {
  if (pagina >= 2 && pagina <= 6) {
    pagina--;
    progressText.innerText = pagina + " /6";
    innerScreen.innerText = vraag[pagina - 1].question;
    answer1.innerText = vraag[pagina - 1].answers.a;
    answer2.innerText = vraag[pagina - 1].answers.b;
    answer3.innerText = vraag[pagina - 1].answers.c;
    answer4.innerText = vraag[pagina - 1].answers.d;
    answer5.innerText = vraag[pagina - 1].answers.e;
    document.getElementById("answer").style.background = "white";
    document.getElementById("answer2").style.background = "white";
    document.getElementById("answer3").style.background = "white";
    document.getElementById("answer4").style.background = "white";
    document.getElementById("answer5").style.background = "white";
  }
}

function nextButtonClick() {
  if (pagina >= 1 && pagina <= 5) {
    pagina++;
    progressText.innerText = pagina + " /6";
    innerScreen.innerText = vraag[pagina - 1].question;
    answer1.innerText = vraag[pagina - 1].answers.a;
    answer2.innerText = vraag[pagina - 1].answers.b;
    answer3.innerText = vraag[pagina - 1].answers.c;
    answer4.innerText = vraag[pagina - 1].answers.d;
    answer5.innerText = vraag[pagina - 1].answers.e;
    document.getElementById("answer").style.background = "white";
    document.getElementById("answer2").style.background = "white";
    document.getElementById("answer3").style.background = "white";
    document.getElementById("answer4").style.background = "white";
    document.getElementById("answer5").style.background = "white";
    document.getElementById("answer").style.pointerEvents = "";
    document.getElementById("answer2").style.pointerEvents = "";
    document.getElementById("answer3").style.pointerEvents = "";
    document.getElementById("answer4").style.pointerEvents = "";
    document.getElementById("answer5").style.pointerEvents = "";
  }
  startButtonClick.nextButtonClick;
}
