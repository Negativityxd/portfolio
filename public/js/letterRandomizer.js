export const randomLetterFX = function (element) {
  const duration = 200; // ms per character of string
  const increment = 50; // ms per randomized filler character
  const text = element.innerText;
  let str = "";
  let i = 0;

  function randomChar() {
    const filler =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%&";
    const randomNum = Math.round(Math.random() * filler.length);

    return filler.charAt(randomNum);
  }

  function delayedLoop() {
    // iterated code goes here

    let randomCharInterval = setInterval(function () {
      element.innerText = `${str}${randomChar()}`;
    }, increment);

    setTimeout(function () {
      function nextLetter() {
        clearInterval(randomCharInterval);

        str += text[i];

        element.innerText = str;
      }

      nextLetter();

      // delayed loop code
      i++;
      if (i < text.length) {
        delayedLoop();
      }
    }, duration);
  }

  delayedLoop();
};
