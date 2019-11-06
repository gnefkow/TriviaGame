// VARIABLES

//DOM ELEMENTS
    var mainTextEL = document.getElementById(`mainText`);
    var startButtonEL = document.getElementById(`startButton`);
    var questionChoices = document.getElementById(`questionChoices`);
    var timerEL = document.getElementById(`timer`);

//MECHANICS

// QUESTION BANK ---------- ---------- ---------- ---------- ---------- 
var questionBank = {
  1 : [
    "Beat on the brat. Beat on the brat. Beat on the brat with a...",
    "Pork-Pie Hat!",
    "Baseball Bat!",
    1
  ],
  "2" : [
    "A message to you",
    "Tony",
    "Baby",
    "Rudy",
    3
  ],
  "3" : [
    "The Guns of...",
    "The gangsters",
    "Navarone",
    "Rudy",
    2
  ]
};

//Generate Question Arrays
  //Create an open array for everything:
    var questionNumber = [];
  
  // Generate the number of questions based off of the Question Bank Object:
  for (var key in questionBank) {
    if (questionBank.hasOwnProperty(key)) {
      questionNumber.push(key);
      questionNumber.push(questionBank[key]);
    };
  };

  // for (var i = 0; i < questionNumbers.length; i++) {
  //     var currentQuestion = questionNumbers[i];
  //     var question = questionBank.currentQuestion;
  //   // currentQuestion.push(i);

  // }
    

// TIMER ---------- ---------- ---------- ---------- ---------- 
  var intervalID;  
  var clockRunning = false;
  var timeLeft;  

  function runClock() {
    if (!clockRunning){
      timeLeft = 40;  //set the timer here
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


  // ----- ----- START THE GAME: ----- ----- //
  function startGame() { 
    console.log("START!")
   // Hide the "Start Page" or "Game Over" pages:
      startButtonEL.style.display = "none";

  // Start the CLock:    
      runClock();
      countDown();
      timerEL.style.display = "block";

  // Start the Game:
      displayQuestions();
  };


// ---------- ---------- DISPLAY QUESTIONS ---------- ---------- //
var questionNumberPlay;
function displayQuestions(){
  //Display Question:
    mainTextEL.innerHTML = questionNumber[1][0];
 // Display answer choices:
     questionChoices.style.display = "block";

};

    
    
    




  
  //Question
    // Display Question Text
    // Display answer text
      //if an answer is clicked:
        //  record the answer
          // record if the answer was correct
          // display a success message if the answer was correct
          // display an unsuccessful message if the answer was incorrect

  


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