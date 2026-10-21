const display = document.getElementById('display');
const calculatorContainer = document.getElementById('calculator-container');
const gameContainer = document.getElementById('game-container');

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    const currentInput = display.value.trim();

    // SECRET TRIGGER CHECK: If user types exactly '1357' and hits '='
    if (currentInput === '1357') {
        unlockGame();
        return;
    }

    // Normal calculation routine if secret code isn't typed
    try {
        // Simple safety replacement for square roots prior to execution
        let sanitizedInput = currentInput.replace(/sqrt\(/g, 'Math.sqrt(');
        sanitizedInput = sanitizedInput.replace(/\^/g, '**'); 
        
        if (sanitizedInput) {
            display.value = eval(sanitizedInput);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to pull back the curtain and open the game layout
function unlockGame() {
    clearDisplay();
    calculatorContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    
    // NOTE: This is where you will initialize your 3D canvas or game engine loop
    console.log("Game mode activated.");
}

// Function to immediately hide the game and restore the safe calculator view
function lockGame() {
    gameContainer.classList.add('hidden');
    calculatorContainer.classList.remove('hidden');
}
