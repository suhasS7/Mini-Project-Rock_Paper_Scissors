
//8:26 explanation
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score")

const btn = document.querySelector("#btn");




const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game draw!";
    msg.style.backgroundColor = "yellow";
    msg.style.marginLeft = '44%';
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;

        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice.toUpperCase()} beats Comp's ${compChoice.toUpperCase()}`;
        msg.style.marginLeft = '30%';
        msg.style.backgroundColor = "green";
    } else {
        compScore++;

        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lost! Comp's ${compChoice.toUpperCase()} beats Your ${userChoice.toUpperCase()}`;
        msg.style.marginLeft = '30%';
        msg.style.backgroundColor = "red";
    }
};


//generate Compute Choice
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const compChoice = getComputerChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}




choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});

btn.addEventListener("click",() => {
    
    alert("Both score Will become 0")
    userScore=0;
    compScore=0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;


});
