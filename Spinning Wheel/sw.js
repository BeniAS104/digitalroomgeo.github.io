const wheel = document.getElementById('wheel');
const options = document.querySelectorAll('.option');

wheel.addEventListener('click', spinWheel);

function spinWheel() {
  const randomAngle = Math.floor(Math.random() * 360);
  wheel.style.transition = 'transform 10s cubic-bezier(0.19, 1, 0.22, 1)';
  wheel.style.transform = `rotate(${randomAngle}deg)`;

  setTimeout(() => {
    const selectedOption = getSelectedOption(randomAngle);
    alert(`You selected: ${selectedOption}`);
    window.location.href = 'https://www.yourredirectedsite.com';
  }, 10000);
}

function getSelectedOption(angle) {
  const sectorAngle = 360 / options.length;
  const selectedOptionIndex = Math.floor(angle / sectorAngle);
  return options[selectedOptionIndex].innerText;
}
