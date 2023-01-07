window.onload = function () {
  let seconds = 0;
  let tens = 0;
  const appendTens = document.getElementById('tens');
  const appendSeconds = document.getElementById('seconds');
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  let Interval;

  buttonStop.onclick = function () { clearInterval(Interval); };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens += 1;
    if (tens <= 9) { appendTens.innerHTML = `0${tens}`; }
    if (tens > 9) { appendTens.innerHTML = tens; }
    if (tens > 99) {
      seconds += 1;
      appendSeconds.innerHTML = `0${seconds}`;
      tens = 0;
      appendTens.innerHTML = `0${0}`;
    }
    if (seconds > 9) { appendSeconds.innerHTML = seconds; }
  }
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
};
