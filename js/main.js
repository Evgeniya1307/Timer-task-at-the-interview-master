// timer fields

const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const millisecondElement = document.querySelector(".millisecond");

//получим кнопки
// Bottons--------------------------------------------------
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const newButton = document.querySelector(".new");

//Listeners------------------------------------------------
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
// Pause button--------------------------------------------------
pauseButton.addEventListener("click", () => {
  clearInterval(interval);
  disabledBtn()
});
//stopButton--------------------------------------------------
stopButton.addEventListener("click", () => {
  clearInterval(interval);
  clearFields();
  disabledBtn()
});

// new button--------------------------------------------
newButton.addEventListener("click", () => {
  clearInterval(interval);
  counter++;
  const results = document.querySelector(".results");
  const block = document.createElement("div");
  block.classList.add("results__info");
  block.innerText = `Results:${counter}:${hour}:${minute}:${second}:${millisecond}`;
  results.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10); // функция старта
});

//Variables----------------------------------------------
let hour = 00,
  minute = 00,
  second = 00,
  millisecond = 00,
  interval,
  counter = 0,
  disabled = true;
//создаю функцию отвечающую за наш таймер
function startTimer() {
  millisecond++;

  //Millisecond------------------------------------------
  if (millisecond < 9) {
    millisecondElement.innerText = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecondElement.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    millisecond = 0;
    millisecondElement.innerText = "0" + millisecond;
  }

  //Second-------------------------------------------------
  if (second < 9) {
    secondElement.innerText = "0" + second;
  }
  if (secondElement > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }
  // Minute------------------------------------
  if (minute < 9) {
    minuteElement.innerText = "0" + minute;
  }
  if (minuteElement > 9 ) {
      minuteElement.innerText = minute
  }
  if (minute > 60 ) {
      hour++
      hourElement.innerText = '0' + hour
      minute = 0
      minuteElement.innerText = '0' + minute
  }

  //Hour------------------------------------------------
  if (hour < 9) {
    hourElement.innerText = "0" + hour;
  }
newButton.disabled = false
}
function clearFields() {
  (hour = 00),
    (minute = 00),
    (second = 00),
    (millisecond = 00),
    (hourElement.textContent = "00");
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  millisecondElement.textContent = "00";
}
function disabledBtn () {
    if (disabled) {
        newButton.disabled = true
    }
}
disabledBtn()