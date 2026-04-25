function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Variables globales
let humanScore = 0;
let computerScore = 0;
let gameActive = true;

// Función playRound modificada
function playRound(humanChoice) {
    if (!gameActive) return;
    
    const computerChoice = getComputerChoice();
    
    // Determinar ganador
    let result;
    if (humanChoice === computerChoice) {
        result = "tie";
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "human";
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        result = "computer";
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    
    // Mostrar resultados en DOM (Por hacer)
    // Por ahora solo console.logs, luego añadir DOM
    console.log("You: " + humanScore);
    console.log("PC: " + computerScore);
    // Verificar si alguien llegó a 5 puntos
    if (humanScore >= 5) {
        console.log("🎉 You win the game! 🎉");
        gameActive = false;
    } else if (computerScore >= 5) {
        console.log("💻 Computer wins the game! 💻");
        gameActive = false;
    }
}

// Resetear juego
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameActive = true;
    console.log("Game reset!");
}

// Botones de elección y reset
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
resetBtn.addEventListener('click', resetGame);