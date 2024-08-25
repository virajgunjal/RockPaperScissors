let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");


const genComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const ind = Math.floor(Math.random()*3);
    return options[ind];
}


const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText = "Game was draw. Go again."
    msg.style.backgroundColor="";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    };  
}
const playGame =(userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice===compChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }
        else{
            userWin = compChoice ==="rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);

        }
    
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})


