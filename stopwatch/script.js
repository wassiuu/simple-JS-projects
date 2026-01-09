

const display = document.getElementById("display")
let timer = null;
let startT = 0;
let elapsed = 0;
let isRunning = false;

function start(){
  if(!isRunning){
    startT = Date.now() - elapsed
    timer = setInterval(update,10)
    isRunning=true;
  }
}

function stop(){
  if (isRunning){
    clearInterval(timer);
    elapsed = Date.now() - startT;
    isRunning = false;
  }
}

function reset(){
  clearInterval(timer);
  startT = 0;
  elapsed = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
  
}

function update(){
  const current = Date.now();
  elapsed = current - startT
  
  let hours = Math.floor(elapsed/(1000 * 60 * 60));
  let mins = Math.floor(elapsed/(1000 * 60) % 60);
  let seconds = Math.floor(elapsed/1000%60);
  let millisec = Math.floor(elapsed % 1000 / 10);

  hours = hours.toString().padStart(2,"0");
  mins = mins.toString().padStart(2,"0");
  seconds = seconds.toString().padStart(2,"0");
  millisec = millisec.toString().padStart(2,"0");

  display.textContent = `${hours}:${mins}:${seconds}:${millisec}`
}
