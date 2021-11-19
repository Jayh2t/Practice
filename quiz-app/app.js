let questions = [
  {
    question: "What is the name of Draco Malfoy's son?",
    answer: {
      a: "Scorpius",
      b: "Lucius",
      c: "Diego",
      d: "Severus",
      e: "Dane",
    },
    correct: 0,
  },
  {
    question: "What creature does Dumbledore have as a pet?",
    answer: {
      a: "Efreet",
      b: "Fey",
      c: "Phoenix",
    },
    correct: 2,
  },
  {
    question: "What is Voldemort's final horcrux?",
    answer: {
      a: "A mirror",
      b: "A snake",
      c: "A brooch",
      d: "A violin",
    },
    correct: 1,
  },
  {
    question:
      "Who takes over as headmaster of Hogwarts after Dumbledore's death?",
    answer: {
      a: "Voldemort",
      b: "Narcissa Black",
      c: "Professor Trelawny",
      d: "Delores Umbridge",
      e: "Professor Snape",
    },
    correct: 4,
  },
  {
    question:
      "Who killed Deatheater Antonin Dolohov during the Battle of Hogwarts?",
    answer: {
      a: "Professor Flitwick",
      b: "Ron Weasley",
      c: "Falling Debris",
      d: "Hermione Granger",
    },
    correct: 0,
  },
];

// variable use
let totalQues = 0;
let score = 0;
let quizBtn = document.querySelector("#quizBtn");

// Set process
const processGame = document.querySelector("#processGame");
processGame.setAttribute("max", questions.length);
processGame.setAttribute("value", totalQues);
const answerList = document.querySelector("#answerList");
const questionContent = document.querySelector("#questionContent");

// Get a question
const showQues = (index) => {
  // get question content
  questionContent.innerHTML = questions[index].question;

  const questionInfo = questions[index].answer;
  for (let key in questionInfo) {
    const quizAns = document.createElement("div");
    quizAns.classList.add("quiz-ans");

    const quizInput = document.createElement("input");
    quizInput.type = "radio";
    quizInput.name = "answer";
    quizInput.id = key;

    const quizLabel = document.createElement("label");
    quizLabel.setAttribute("for", key);
    quizLabel.innerHTML = questionInfo[key];

    quizAns.appendChild(quizInput);
    quizAns.appendChild(quizLabel);
    answerList.appendChild(quizAns);
  }
};

// Add event when click submit button
quizBtn.addEventListener("click", () => {
  console.log(totalQues, questions.length - 1);
  // do check result
  checkResult();
  // remove all answer from prev question
  removeChild();
  totalQues++;
  if (totalQues <= questions.length - 1) {
    showQues(totalQues);
  } else {
    questionContent.innerHTML = `You have scored ${score}`;
    quizBtn.style.display = "none";
    processGame.style.display = "none";
    document.querySelector(".quiz-info").style.display = "none";
  }
  processGame.setAttribute("value", totalQues);
});

function removeChild() {
  document.querySelectorAll("#answerList .quiz-ans").forEach((ele) => {
    document.querySelector("#answerList").removeChild(ele);
  });
}

showQues(totalQues);

// function check result
const checkResult = () => {
  // get result
  let result;
  let listAnwser = document.querySelectorAll(".quiz-ans input");
  listAnwser.forEach((ele, index) => {
    if (ele.checked) {
      result = index;
    }
  });
  //check result true or false
  if (result === questions[totalQues].correct) {
    // increase score
    score++;
  }
};
