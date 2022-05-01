export const singleLetterRandomizer = function (letters) {
  const duration = 500; // ms per character of string
  const increment = 60; // ms per randomized filler character

  function randomChar() {
    const filler =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%&";
    const randomNum = Math.round(Math.random() * filler.length);

    return filler.charAt(randomNum);
  }

  // create array of original text
  const lettersArr = letters.innerText.split("");

  // remove old element
  letters.innerHTML = "";

  // break element into spans
  lettersArr.forEach((e) => {
    letters.innerHTML += `<span class="letter">${e}</span>`;
  });

  // add event listeners to spans
  let letterList = document.querySelectorAll(".letter");

  letterList.forEach((e, i) => {
    e.addEventListener("mouseover", function () {
      const element = this;

      let randomCharInterval = setInterval(function () {
        element.innerText = randomChar();
      }, increment);

      e.addEventListener("mouseout", function () {
        setTimeout(() => {
          clearInterval(randomCharInterval);
          element.innerText = lettersArr[i];
        }, duration);
      });
    });
  });
};
