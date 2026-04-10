function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors");
    return choice.toLowerCase();
}

// Pruebas
console.log("Computadora elige:", getComputerChoice());
console.log("Humano elige:", getHumanChoice());
