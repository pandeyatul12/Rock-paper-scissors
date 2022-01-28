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
let body = document.querySelector("body")

function playRound(playerSelection, computerSelection){
    if((playerPoints + computerPoints) !== 5){
    let result = document.createElement('div');
    result.innerHTML = " "
    if(playerSelection === "rock" ){
       if(computerSelection === "paper") {
            computerPoints +=1;
            result.innerHTML = "You lose! Paper Beats Rock!!";
            body.appendChild(result);
            return result ;
       } else if(computerSelection === "scissor")
       {
            playerPoints +=1;
            result.innerHTML = "You win! Rock Beats Scissor!!";
            body.appendChild(result);
            return result;
       } else {
            result.innerHTML = "It's a tie!!";
            body.appendChild(result);
            return result;
       }
    } else  if(playerSelection === "paper" ){
        if(computerSelection === "scissor") {
            computerPoints +=1;
            result.textContent = "You lose! Scissor Beats Paper!!";
            body.appendChild(result);
            return result;
           
        } else if(computerSelection === "rock")
        {
            playerPoints +=1;
            result.textContent = "You win! Paper Beats Rock!!";
            body.appendChild(result);
            return result;
        } else {
            result.textContent = "It's a tie!!";
            body.appendChild(result);
           return result;
           }
     } else  if(playerSelection === "scissor" ) {
            if(computerSelection === "paper") {
                playerPoints +=1;
            result.textContent = "You win! Scissor Beats Paper!!";
            body.appendChild(result);
            return result;
            } else if(computerSelection === "rock")
            {
                computerPoints +=1;
                result.textContent = "You lose! Rock Beats Scissor!!";
            body.appendChild(result);
            return result;
            } else {
                result.textContent = "It's a tie!!";
                body.appendChild(result);
               return result;
               }       
        } 
    } 
}

function game() {
    {
        const rockSelection = document.querySelector("#rock");
        const paperSelection = document.querySelector("#paper");
        const scissorSelection = document.querySelector("#scissor");
        let computerSelection = 0;
        let playerSelection = " ";
        let points = document.createElement('div');
        rockSelection.addEventListener('click', e => 
        {   
            computerSelection = computerPlay(random);
            playerSelection = e.target.id;
            playRound(playerSelection, computerSelection);
            points.innerHTML = `Player Points: ${playerPoints} Computer Points: ${computerPoints}` 
            body.appendChild(points)
            return points;
            }
            );
        paperSelection.addEventListener('click', e => 
            {
            computerSelection = (computerPlay(random));
            playerSelection = e.target.id;
            playRound(playerSelection, computerSelection)
            points.innerHTML = `Player Points: ${playerPoints} Computer Points: ${computerPoints}` 
            body.appendChild(points)
            return points;}
            );  
        scissorSelection.addEventListener('click', e => 
            {
            computerSelection = (computerPlay(random));
            playerSelection = e.target.id;
            playRound(playerSelection, computerSelection)
            points.innerHTML = `Player Points: ${playerPoints} Computer Points: ${computerPoints}` 
            body.appendChild(points)
            return points;}
            );  
            
        } 
    }
game()