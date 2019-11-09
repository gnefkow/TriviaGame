// VARIABLES

//DOM ELEMENTS
    var mainTextEL = document.getElementById(`mainText`);
    var startButtonEL = document.getElementById(`startButton`);
    var questionChoicesEL = document.getElementById(`questionChoices`);
    var timerEL = document.getElementById(`timer`);

//MECHANICS

// QUESTION BANK ---------- ---------- ---------- ---------- ---------- 
var questionBank = [
 {
   question : "Beat on the brat. Beat on the brat. Beat on the brat with a...",
   choices : ["Pork-Pie Hat!", "Baseball Bat!"],
   correctAnswer: "Baseball Bat!"
 },
 {
  question : "A message to you",
  choices : ["Tony", "Baby", "Rudy"],
  correctAnswer: "Rudy"
  },
  {
    question : "The Guns of...",
    choices : ["The gangster", "Navarone", "Rudy"],
    correctAnswer: "Navarone"
  },
  {
    question : "sfgf",
    choices : ["asfg", "asg", "asfg"],
    correctAnswer: "asge"
  }
];

// TIMER ---------- ---------- ---------- ---------- ---------- 
  var intervalID;  
  var clockRunning = false;
  var timeLeft;  

  function runClock() {
    if (!clockRunning){
      timeLeft = 100;  //set the timer here
      intervalId = setInterval(countDown, 1000);
      clockRunning = true;
      };
    };

  function stopClock(){ 
    clearInterval(intervalId);
    };

  function countDown() {
    timeLeft--;
    timerEL.innerHTML = `<h2>${timeLeft}</h2>`;
    if(timeLeft === 0) {
      clockRunning = false;
      stopClock();
      gameOver();
      };
    };
  



// ////////// ========== ========== GAME STATES ========== ========== ////////// //

// ---------- ---------- START PAGE ---------- ---------- //
function startPage() {
  // Displays Intro Text:
    mainTextEL.innerHTML = "Click to Start Game";
    questionChoices.style.display = "none";
  // START BUTTON STARTS THE GAME (calls the startGame function):
    startButtonEL.onclick = startGame;
  };


  // ----- ----- ---------- START THE GAME: ---------- ----- ----- //
  function startGame() { 
    console.log("START!")
   // Hide the "Start Page" or "Game Over" pages:
      startButtonEL.style.display = "none";

  // Start the CLock:    
      runClock();
      countDown();
      timerEL.style.display = "block";
  
  // Display answer choice div:
     questionChoicesEL.style.display = "block";

  // Start the Game:
      displayQuestions();
  };


// ---------- ---------- DISPLAY QUESTIONS ---------- ---------- //

// Set the initial Question Number:
  var currentQuestion = 0;

// Set the maximum question number:
  var lastQuestionPlusOne = questionBank.length;

// User can answer questions:
  function displayQuestions() {
    console.log(`Current question ${currentQuestion}`);

    //Display Question:
      mainTextEL.textContent = questionBank[currentQuestion].question;

    //Set Current Answer:
      var currentAnswer = questionBank[currentQuestion].correctAnswer;
      console.log(`The answer should be: ${currentAnswer}`);

    // Create Answers in the DOM:
      for( var i = 0; i < questionBank[currentQuestion].choices.length; i++) {
        var eachChoice = questionBank[currentQuestion].choices[i];
        var anchorTag = document.createElement("a");
        var choiceOption = document.createElement("li");
        choiceOption.textContent = eachChoice;
        choiceOption.classList.add("choiceOption");
        anchorTag.appendChild(choiceOption);
        questionChoices.appendChild(anchorTag);
        choiceOption.setAttribute("data-choice", eachChoice);
      };
  
    // Increase the "currentQuestion" counter
      currentQuestion++;
    
    // Determine whether it was the right answer:
      document.getElementById("questionChoices").addEventListener("click", function(e) {
        if(e.target && e.target.nodeName == "LI") {
        // Set the player's choice:
          var currentChoice = e.target.dataset.choice
        //Check the Answer:
          if(currentChoice == currentAnswer){
            console.log("Got it right!")
          } else {
            console.log("got it wrong")
          };

      // Determine if this was the last question:  
        if(currentQuestion == lastQuestionPlusOne) {
          gameOver()
        } else {
          displayQuestions()
        }; 
      }
    });
  };


// ---------- ---------- GAMEOVER ---------- ---------- //
  function gameOver() {
    mainTextEL.innerHTML = "How did you do?";

    //replay Button
    startButtonEL.style.display = "block";
    startButtonEL.innerHTML = "play again";

    //Hide Game Play Elements:
      timerEL.style.display = "none";
      questionChoices.style.display = "none";
  };
    // function: executes after last question or when the timer is up
    // display sum of correct answers



// Time to start some shit:
  startPage();