const display = document.getElementById("display");

function MunculkanKeDisplay(input){
  display.value += input;
}
  
function hapus(){
  display.value = "";
}
  
function hitung(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}