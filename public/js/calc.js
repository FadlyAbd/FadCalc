const display = document.getElementById("display");

function MunculkanKeDisplay(input){
    display.value += input;
}

function hapus(){
    display.value = "";
}

function hitung(){
    display.value = eval(display.value);
}