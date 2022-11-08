/*Lets#1*/
let userScore = 0; /*Scores1*/
let computerScore = 0;

/*Const#1*/
const userScore_span = document.getElementById("user-score"); /*Scores2*/
const computerScore_span = document.getElementById("computer-score");

const userBoard = document.querySelector(".score-board"); /*uBr*/
const result = document.querySelector(".result > p");

const rock = document.getElementById("r"); /*The Iconic Trios*/
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

/*Functions#1*/
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function convertoWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    
    const smallUserWord = "user".fontsize(3).sup(); /*Const*/
    const smallCompWord = "AI".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    
    userScore++; /*Scores*/
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "Bravo! " + convertoWord(userChoice) + smallUserWord + " destroys " + convertoWord(computerChoice) + smallCompWord + "! You have won!"
    
    userChoice_div.classList.add('green-glow'); /*Glow*/
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice){
    
    const smallUserWord = "user".fontsize(3).sup(); /*Const*/
    const smallCompWord = "AI".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    
    computerScore++; /*Scores*/
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertoWord(userChoice) + smallUserWord + " loses by " + convertoWord(computerChoice) + smallCompWord + ", AI won, it's ok you can try again!"
    
    userChoice_div.classList.add('red-glow'); /*Glow*/
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice){
    
    const smallUserWord = "user".fontsize(3).sup(); /*Const*/
    const smallCompWord = "AI".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    
    result.innerHTML = "Tie! " + convertoWord(userChoice) + smallUserWord + " ties with " + convertoWord(computerChoice) + smallCompWord /*TXT*/
    
    userChoice_div.classList.add('gray-glow'); /*Glow*/
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("User clicked " + userChoice + ", AI chosed " + computerChoice)
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock.addEventListener('click', () => game("r"));
    paper.addEventListener('click', () => game("p"));
    scissor.addEventListener('click', () => game("s"));
}

main();