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
let body = document.querySelector("body");
const rockSelection = document.querySelector("#rock");
const paperSelection = document.querySelector("#paper");
const scissorSelection = document.querySelector("#scissor");

function playRound(playerSelection, computerSelection){
    if((playerPoints + computerPoints) <= 5){
    let result = document.createElement('div');

    if(playerSelection === "rock" ){
       if(computerSelection === "paper") {
            computerPoints +=1;
            result.textContent = " "
            result.textContent = "You lose! Paper Beats Rock!!";
            body.appendChild(result);
            return result ;
       } else if(computerSelection === "scissor")
       {
            playerPoints +=1;
            result.textContent = "You win! Rock Beats Scissor!!";
            body.appendChild(result);
            return result;
       } else {
            result.textContent = "It's a tie!!";
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
    } else if((playerPoints + computerPoints) == 6) {
           finalResult(playerPoints, computerPoints);
           computerPoints++;
    } 
}

function game() {
     
    {   
        let computerSelection = 0;
        let playerSelection = " ";
        let points = document.createElement('div');
        rockSelection.addEventListener('click', e => 
        {   
            computerSelection = 0;
            computerSelection = computerPlay(random);
            playerSelection = e.target.id;
            playRound(playerSelection, computerSelection);
            points.innerHTML = `Player Points: ${playerPoints} Computer Points: ${computerPoints}` 
            body.appendChild(points);
            return ;
            }
            );
        paperSelection.addEventListener('click', e => 
            {
            computerSelection = 0;
            computerSelection = (computerPlay(random));
            playerSelection = e.target.id;
            playRound(playerSelection, computerSelection)
            points.innerHTML = `Player Points: ${playerPoints} Computer Points: ${computerPoints}` 
            body.appendChild(points)
            return ;}
            );  
        scissorSelection.addEventListener('click', e => 
            {
            computerSelection = 0;
            computerSelection = (computerPlay(random));
            playerSelection = e.target.id;
            playRound(playerSelection, computerSelection)
            points.innerHTML = `Player Points: ${playerPoints} Computer Points: ${computerPoints}` 
            body.appendChild(points);
            return ;}
            );  
           }
    }

function finalResult(playerPoints, computerPoints){
    let finalRes = document.createElement('div');
    if(playerPoints>computerPoints){
        finalRes.innerText = "Yipeeeeeeeee!! You Won"; 
            body.appendChild(finalRes);
            return;
    } else {
        finalRes.innerText = "Sorry to say!! You lost"; 
        body.appendChild(finalRes);
        return;
    }
}

game()