 //Create array with letters
 var letters = ["a" ,"b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z" ,
];
var wins = 0;
var losses = 0;
var lives = 5;

//Have the stats show up
// var winsElement = document.getElementById("wins");
// document.getElementById("wins").textContent = "Wins:";
// var lossesElement = document.getElementById("losses");
// document.getElementById("losses").textContent = ("Losses:");



var compGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(compGuess);
//onkeyup
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    if(lives > 0){
    if(userGuess === compGuess) {
        wins ++;
        // winsElement.textContent = wins;
        alert("Even a Blind Squirrel Finds a Nut!");
    } else {
        losses ++;
        lives -= 1;
        alert("Terrible Choice");
    }
    }
    }
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("lives").textContent = lives;




}


