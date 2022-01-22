let random = Math.floor(Math.random()*3)+1

function computerPlay(random) {  
    if(random === 1){   
        return "rock";
    } else if(random === 2){
        return  "paper";
    }
    else  {
        return  "scissor";
}
}
let playerPoints = 0
let computerPoints = 0

let computerSelection = (computerPlay(random))
let playerSelection = ""
function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" ){
       if(computerSelection === "paper") {
        computerPoints +=1
           return "You lose! Paper Beats Rock!!"
       } else 
       {
        playerPoints +=1
           return "You win! Rock Beats Scissor!!"
       }
    } else  if(playerSelection === "paper" ){
        if(computerSelection === "scissor") {
            computerPoints +=1
            return "You lose! Scissor Beats Paper!!"
        } else 
        {
            playerPoints +=1
            return "You win! Paper Beats Rock!!"
        }
     } else  if(playerSelection === "scissor" ) {
            if(computerSelection === "paper") {
                playerPoints +=1
                return "You win! Scissor Beats Paper!!"
            } else 
            {
                computerPoints +=1
                return "You lose! Rock Beats Scissor!!"
            }       
        } else return "Please Enter Rock , Paper Or Scissor Only!!"
}

function game() {
    for(let i =0; i<5 ;i++) {
         playerSelection = prompt("rock, paper, scissor")
        playerSelection = playerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection))
        console.log("Player Points:",playerPoints, "Computer Points:", computerPoints)  
    } 
    if(playerPoints>computerPoints) {
    console.log("Player Won")
}       else console.log("Computer Won")      
}
game()