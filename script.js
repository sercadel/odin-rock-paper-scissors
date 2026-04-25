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
    let roundMessage;

    if (humanChoice === computerChoice) {
        result = "tie";
        roundMessage = `🤝 Tie! Both chose ${humanChoice}`;
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "human";
        humanScore++;
        roundMessage = `✅ You win! ${humanChoice} beats ${computerChoice}`;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        result = "computer";
        computerScore++;
        roundMessage = `❌ You lose! ${computerChoice} beats ${humanChoice}`;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    // === ACTUALIZAR DOM PARA CADA RONDA ===
    // Mostrar resultado de la ronda actual
    document.getElementById('round-result').textContent = roundMessage;
    
    // Actualizar puntuación en el DOM
    document.getElementById('score').textContent = `${humanScore} - ${computerScore}`;
    

    console.log("You: " + humanScore);
    console.log("PC: " + computerScore);

    // Verificar si alguien llegó a 5 puntos
    if (humanScore >= 5) {
        document.getElementById('winner').textContent = "🎉 You win the game! 🎉";
        gameActive = false;
    } else if (computerScore >= 5) {
        document.getElementById('winner').textContent = "💻 Computer wins the game! 💻";
        gameActive = false;
    } else {
    // Limpiar mensaje de winner si el juego sigue activo
    document.getElementById('winner').textContent = "";
    }
}

// Resetear juego
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameActive = true;
    document.getElementById('round-result').textContent = "";
    document.getElementById('score').textContent = "0 - 0";
    document.getElementById('winner').textContent = "";
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