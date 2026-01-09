
const display = document.getElementById("display");
let prev = 0;
let mul = 0;

function appendToDisplay(chr){
  display.value = display.value + chr
}

function clearDisplay(){
  display.value = ""
}

function calculate(){
  
  /*let expr = display.value;
  const ops = ["+","-","/","*"];
  for (let i = 0; i < expr.length; i++) {
    if (ops.includes(expr[i])){
      prev = prev + Number(expr.slice()
    }

  }*/
 try {
  display.value = eval(display.value);
 }
 catch(error){
  display.value = "Error";
 }
}

