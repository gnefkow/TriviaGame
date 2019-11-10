// VARIABLES

//DOM ELEMENTS
    var mainTextEL = document.getElementById(`mainText`);
    var startButtonEL = document.getElementById(`startButton`);
    var restartButtonEL = document.getElementById(`restartButton`);
        restartButtonEL.style.display = "none";
    var questionChoicesEL = document.getElementById(`questionChoices`);
    var timerEL = document.getElementById(`timer`);
    timerEL.style.display = "none";
    var displayScoreEL = document.getElementById(`display-score`);
        displayScoreEL.style.display = "none";
    var messageToast = document.getElementById("messageToast");
    


    //MECHANICS

// QUESTION BANK ---------- ---------- ---------- ---------- ---------- 
var questionBank = [
 {
   question : "I don't practice Santaria",
   choices : ["I ain't got no crystal ball", "When my back's against the wall", "If I'm about to fall"],
   correctAnswer: "I ain't got no crystal ball"
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
    question : "Celebrate the",
    choices : ["Bullet", "Good Times", "Rudeboys"],
    correctAnswer: "Bullet"
    },
    {
      question : "Why must you record my phone calls?",
      choices : ["Are you trying to find me?", "Are you planning a bootleg LP?", "This is a message to you!"],
      correctAnswer: "Are you planning a bootleg LP?"
    },
    {
      question : "You're too nice...",
      choices : ["...for your own good.", "...to be my friend.", "...to talk to."],
      correctAnswer: "...to talk to."
    },
    {
      question : "Spanish songs in...",
      choices : ["Puerta Vallarta", "Andalucía", "Ana Garcia"],
      correctAnswer: "Andalucía"
      },
  {
    question : "Sound system gonna bring me back up, right...",
    choices : ["In this bad town!", "One thing that I can depend on!", "In a better place, in a better time"],
    correctAnswer: "One thing that I can depend on!"
  }
];

// POINTS COUNTER
var score;

// TIMER ---------- ---------- ---------- ---------- ---------- 
  var intervalID;  
  var clockRunning = false;
  var timeLeft;  

  function runClock() {
    if (!clockRunning){
      timeLeft = 30;  //set the timer here
      intervalId = setInterval(countDown, 1000);
      clockRunning = true;
      };
    };

  function stopClock(){ 
    clearInterval(intervalId);
    };

  function countDown() {
    timeLeft--;
    timerEL.textContent = timeLeft;
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
  
  //Hide Unneeded DOM Elements:
    questionChoices.style.display = "none";

  // START BUTTON STARTS THE GAME (calls the startGame function):
    startButtonEL.onclick = startGame;
  };


  // ----- ----- ---------- START THE GAME: ---------- ----- ----- //
  function startGame() { 

   // Hide the "Start Page" or "Game Over" pages:
      startButtonEL.style.display = "none";

  // Start the Clock:    
      runClock();
      countDown();
      timerEL.style.display = "block";
  
  // Display answer choice div:
     questionChoicesEL.style.display = "block";

  // Start the Game:
      play();
  };


// ---------- ---------- DISPLAY QUESTIONS ---------- ---------- //
// var currentAnswer
function play(){
// Set the initial Question Number:
  var currentQuestion = 0;

// Set initial score
  score = 0;
  displayScoreEL.style.display = "none";

// Set the maximum question number:
  var lastQuestion = questionBank.length-1;
  
  //Set Current Answer:
  var currentAnswer = questionBank[currentQuestion].correctAnswer;
 
// Show the Questions:
  displayQuestions();

      

// User can answer questions:
  function displayQuestions() {

    //Display Question:
      mainTextEL.textContent = questionBank[currentQuestion].question;

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

    };

    // Click:
    document.getElementById("questionChoices").addEventListener("click", function(e) {
      if(e.target && e.target.nodeName == "LI") {
    // Set the player's choice:
      var currentChoice = e.target.dataset.choice
      console.log(`On currentQuestion: ${currentQuestion}, Answer is: ${currentAnswer}, Answered: ${currentChoice}`);
    // Check the Answer:
      if(currentChoice == currentAnswer){
        score++;
        console.log("correct")
      } else {
        console.log("incorrect")
      };

    // Run next Steps:
      determineNextSteps()
    };
  });

    function determineNextSteps(){
      //Clear the Answer Choices
      console.log("determine next steps");
        var choicesUL = document.getElementById("questionChoices");
        while (choicesUL.firstChild) {
          choicesUL.removeChild(choicesUL.firstChild);
        };
    //Determine if this was the last question:  
      if(currentQuestion == lastQuestion) {
        gameOver()
      } else {
        currentQuestion++;
        currentAnswer = questionBank[currentQuestion].correctAnswer;
        displayQuestions();
      }; 
    };

  };


// ---------- ---------- GAMEOVER ---------- ---------- //
  function gameOver() {
    mainTextEL.innerHTML = "How did you do?";

    //replay Button
      restartButtonEL.style.display = "block";
      restartButtonEL.onclick = restart;

      function restart() {
        location.reload();
      }
    
    // Display Score:
      displayScoreEL.style.display = "block";
      displayScoreEL.textContent = `You got ${score} out of ${questionBank.length}!`

    //Hide Game Play Elements:
      timerEL.style.display = "none";
      questionChoices.style.display = "none";
  };
    // function: executes after last question or when the timer is up
    // display sum of correct answers



// Time to start some shit:
  startPage();