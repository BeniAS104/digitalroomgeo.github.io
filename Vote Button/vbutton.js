
let soundCounter = 0;

function playsound() {
    const sounds = ['Sounds/familiada.mp3'];
    const audioElement = new Audio(sounds[soundCounter]);
    audioElement.play();
    soundCounter = (soundCounter + 1) % sounds.length;

    const now = new Date();

    const timestamp = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;

    

    // Display the timestamp in the designated container
    const timestampContainer = document.getElementById('timestamp-container2');
    timestampContainer.innerHTML = `${timestamp}`;
}
