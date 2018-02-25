var randomNumber;
var winsNumber = 0;
var lossesNumber = 0;
var crystalTotal = 0;
var winMessage = "You Win!  Great Job!  Press any key to start a new game";
var lostMessage = "You Lost.  Better luck next time.  Press any key to start a new game.";
var gameCounter = 0
var crystal1Value = Math.floor((Math.random()*12)+1);
var crystal2Value = Math.floor((Math.random()*12)+1);
var crystal3Value = Math.floor((Math.random()*12)+1);
var crystal4Value = Math.floor((Math.random()*12)+1);


function clear() {
    if(crystalTotal === 0 && gameCounter > 0) {
        $("#totalguesses").text("The total of your guesses go here.")
        $("#winlossmessage").text("");
        randomNumber = document.getElementById("#randomnumber");
        // returns a number between 25-75
        randomNumber = (Math.floor(Math.random()*101)+19);
        // binds the random number to the text
        $("#randomnumber").text(randomNumber);
        crystal1Value = Math.floor((Math.random()*12)+1);
        crystal2Value = Math.floor((Math.random()*12)+1);
        crystal3Value = Math.floor((Math.random()*12)+1);
        crystal4Value = Math.floor((Math.random()*12)+1);
    }
}

function winLoss() {
    if (crystalTotal === randomNumber){
        // winMessage = document.getElementById("#winlossmessage");
        $("#winlossmessage").text(winMessage);
        winsNumber = winsNumber + 1;
        // document.getElementById("#totalscore")
        $("#totalscore").text(winsNumber);
        crystalTotal = 0;
        gameCounter = gameCounter + 1;
    }
    if (crystalTotal > randomNumber){
        $("#winlossmessage").text(lostMessage);
        crystalTotal = 0;
        gameCounter = gameCounter + 1;
    }
}


$(document).ready(function() {
    
    // clear();
    randomNumber = document.getElementById("#randomnumber");
    // returns a number between 25-75
    randomNumber = (Math.floor(Math.random()*101)+19);
    // binds the random number to the text
    $("#randomnumber").text(randomNumber);

    $("#crystal1").on("click", function() {
        clear();
        crystalTotal += crystal1Value;
        $("#totalguesses").text(crystalTotal);
        winLoss();
    })
    $("#crystal2").on("click", function() {
        clear()
        crystalTotal += crystal2Value;
        $("#totalguesses").text(crystalTotal);
        winLoss();
    })
    $("#crystal3").on("click", function() {
        clear()
        crystalTotal += crystal3Value;
        $("#totalguesses").text(crystalTotal);
        winLoss();
    })
    $("#crystal4").on("click", function() {
        clear();
        crystalTotal += crystal4Value;
        $("#totalguesses").text(crystalTotal);
        winLoss();
    })
})