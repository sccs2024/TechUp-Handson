document.addEventListener('DOMContentLoaded', () => {
  const images = [
    {src:'images/Treble-Clef-A.jpg', title:'A'},
    {src:'images/Treble-Clef-B.jpg', title:'B'},
    {src:'images/Treble-Clef-C.jpg', title:'C'},
    {src:'images/Treble-Clef-E.jpg', title:'E'},
    {src:'images/Treble-Clef-F.jpg', title:'F'},
    {src:'images/Treble-Clef-G.jpg', title:'G'}
  ]; // List of all images in the folder
  const randomImage = document.getElementById('randomImage');
  const refreshButton = document.getElementById('refreshButton');
  const titleInput = document.getElementById('titleInput');
  const checkButton = document.getElementById('checkButton');
  const resultMessage = document.getElementById('resultMessage');

  function showRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      randomImage.src = images[randomIndex].src;
      randomImage.dataset.title = images[randomIndex].title;
      titleInput.value = '';
      resultMessage.textContent = '';
  }

  checkButton.addEventListener('click', () => {
    const userInput = imageNameInput.value.trim().toLowerCase();
    const imageTitle = randomImage.dataset.title.toLowerCase();
    const lastAlphabet = imageTitle.slice(-1);
    if (userInput === lastAlphabet) {
      resultMessage.textContent = 'that is right!';
      resultMessage.style.color = 'green';
  } else {
      resultMessage.textContent = 'try again?';
      resultMessage.style.color = 'red';
  }
});

  refreshButton.addEventListener('click', showRandomImage);

  // Show a random image on initial load
  showRandomImage();

});

let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./audio/";
window.onload = () => {
  //24keys
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    div.classList.add("key", index <= 10 ? "black-key" : "white-key");
    //For playing audio on click
    const number = index <= 9 ? "0" + index : index;
    div.addEventListener("click", () => {
      new Audio(`${base}key${number}.mp3`).play();
    });
    pianoContainer[0].appendChild(div);
  }
};