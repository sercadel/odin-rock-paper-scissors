function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();
        const computer = computerChoice;
        
        // Caso de empate
        if (human === computer) {
            console.log(`It's a tie! Both chose ${human}`);
            return "tie";
        }
        
        // Casos donde gana el humano
        if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${human} beats ${computer}`);
            return "human";
        }
        
        // Si no es empate ni gana humano, gana la computadora
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}`);
        return "computer";
    }
    
    // Jugar 5 rondas
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    // Anunciar el ganador final
    console.log("=== GAME OVER ===");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("You lose the game! 💻");
    } else {
        console.log("It's a tie game! 🤝");
    }
}

// Iniciar el juego
playGame();