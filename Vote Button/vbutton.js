//nonoverlapping sounds
// function playsound() {
//     const funnysound = document.getElementById('funnysound');
//     funnysound.play();
//   }

// randomsounds
// function playsound() {
//     const randomSound = Math.random() < 0.5 ? 'Images/SUIII.mp3' : 'path/to/second-sound.mp3';
//     const audioElement = new Audio(randomSound);
//     audioElement.play();
// }

// random sounds with flashing border
let soundCounter = 0;
let originalBorderStyle; // Variable to store the original border style

function playsound() {
    const sounds = ['Images/SUIII.mp3', '../Images/jixaw-metal-pipe-falling-sound.mp3', '../Images/minecraft-train-whistle-cave-sound.mp3', '../Images/bruh.mp3'];
    const audioElement = new Audio(sounds[soundCounter]);
    audioElement.play();

    // Set an initial border style, color, and width if not already set
    document.body.style.border = document.body.style.border || '1px solid';
    document.body.style.borderColor = document.body.style.borderColor || getRandomColor();
    originalBorderStyle = document.body.style.border;

    // Change the border color
    document.body.style.border = '30px solid ' + getRandomColor();

    // Reset the border style and color after 0.5 seconds
    setTimeout(() => {
        document.body.style.border = document.body.style.border = '30px solid #0c1022';
        ;
    }, 500);

    // Increment the counter for the next button press
    soundCounter = (soundCounter + 1) % sounds.length;
}

// Helper function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}