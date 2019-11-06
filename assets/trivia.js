// VARIABLES

//DOM ELEMENTS
    var mainTextEL = document.getElementById(`mainText`);
    var startButtonEL = document.getElementById(`startButton`);
    var questionChoices = document.getElementById(`questionChoices`);
    var timerEL = document.getElementById(`timer`);

//MECHANICS
  // CLOCK  
    var intervalID;  
    var clockRunning = false;
    var timeLeft;
    

// Utility Functions:
  function gameTime() {gameOver();};
  
  function runClock() {
    if (!clockRunning){
      timeLeft = 10;
      intervalId = setInterval(countDown, 1000);
      clockRunning = true;
    };
  };

  function stopClock(){ 
    clearInterval(intervalId);
    timeLeft = 10;
  };

  function countDown() {
    timeLeft--;
    timerEL.innerHTML = `<h2>${timeLeft}</h2>`;
    if(timeLeft === 0) {
      clockRunning = false;
      stopClock();
      gameOver();
    ;}
  }
  

  // ----- ----- START THE GAME: ----- ----- //
  function startGame() { 
    console.log("START!")
   // Hide the Start Button:
      startButtonEL.style.display = "none";
      runClock();
      countDown();
  // Start the Game:
      displayQuestions();
  };



// ---------- ---------- START PAGE ---------- ---------- //
  function startPage() {
    // Displays Intro Text:
      mainTextEL.innerHTML = "Click to Start Game";
      questionChoices.style.display = "none";
    // START BUTTON STARTS THE GAME (calls the startGame function):
      startButtonEL.onclick = startGame;
    };


// ---------- ---------- DISPLAY QUESTIONS ---------- ---------- //
  function displayQuestions() {
    //Display Question:
      mainTextEL.innerHTML = "Here is the first question";
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
  };
    // function: executes after last question or when the timer is up
    // display sum of correct answers



// Time to start some shit:
  startPage();