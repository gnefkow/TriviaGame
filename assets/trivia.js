// VARIABLES

//DOM ELEMENTS
    var mainTextEL = document.getElementById(`mainText`);
    var startButtonEL = document.getElementById(`startButton`);
    var questionChoices = document.getElementById(`questionChoices`);

// Utility Functions:
function gameTime() {gameOver();};



// ---------- ---------- START PAGE ---------- ---------- //
  function startGame() {
    // Displays Intro Text:
      mainTextEL.innerHTML = "Click to Start Game";
      questionChoices.style.display = "none";


    // START BUTTON STARTS THE GAME:
    startButtonEL.onclick = function() { 
      console.log("START!")
     
     // Hide the Start Button:
      startButtonEL.style.display = "none";

    //Start the Timer:
      setTimeout(gameTime, 2000); 

    // Start the Game:
      displayQuestions();
      
    };
};

// ---------- ---------- DISPLAY QUESTIONS ---------- ---------- //
  function displayQuestions() {
    //Display Question:
      mainTextEL.innerHTML = "Here is the first question";
    // Display answer choices:
      questionChoices.style.display = "block";
  }

    
    
    




  
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
  }
    // function: executes after last question or when the timer is up
    // display sum of correct answers



// Time to start some shit:
  startGame();