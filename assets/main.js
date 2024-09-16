const bubbles = document.getElementsByClassName('bubbles');
document.addEventListener('DOMContentLoaded', () => {
  const lightModeButton = document.querySelector('.lightMode__button');
  const currentMode = localStorage.getItem('theme') || 'dark';

  // Apply the saved theme
  document.body.classList.add(`${currentMode}-mode`);
  updateButtonText(currentMode);

  lightModeButton.addEventListener('click', () => {
      if (document.body.classList.contains('dark-mode')) {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
          updateButtonText('light');
      } else {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
          updateButtonText('dark');
      }
  });

  function updateButtonText(mode) {
      if (mode === 'dark') {
          lightModeButton.textContent = 'Light mode'; // Dark mode active, show Light mode
      } else {
          lightModeButton.textContent = 'Dark mode'; // Light mode active, show Dark mode
      }
  }
});





for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].innerHTML = 
        '<span style="--i:24;"></span>' +
        '<span style="--i:14;"></span>' +
        '<span style="--i:23;"></span>' +
        '<span style="--i:18;"></span>' +
        '<span style="--i:16;"></span>' +
        '<span style="--i:19;"></span>' +
        '<span style="--i:20;"></span>' +
        '<span style="--i:22;"></span>' +
        '<span style="--i:25;"></span>' +
        '<span style="--i:18;"></span>' +
        '<span style="--i:21;"></span>' +
        '<span style="--i:15;"></span>' +
        '<span style="--i:13;"></span>' +
        '<span style="--i:26;"></span>' +
        '<span style="--i:17;"></span>' +
        '<span style="--i:13;"></span>' +
        '<span style="--i:28;"></span>';
}



