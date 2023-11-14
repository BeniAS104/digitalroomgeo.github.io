
let soundCounter = 0;

function playsound() {
    const sounds = ['SUIII.mp3', 'jixaw-metal-pipe-falling-sound.mp3', 'minecraft-train-whistle-cave-sound.mp3', 'bruh.mp3'];
    const audioElement = new Audio(sounds[soundCounter]);
    audioElement.play();
    soundCounter = (soundCounter + 1) % sounds.length;

    const now = new Date();

    const timestamp = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;

    

    // Display the timestamp in the designated container
    const timestampContainer = document.getElementById('timestamp-container2');
    timestampContainer.innerHTML = `${timestamp}`;
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