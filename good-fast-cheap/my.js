let good = document.getElementById("good");
let fast = document.getElementById("fast");
let cheap = document.getElementById("cheap");
function de_cheap(){
    if(cheap.checked == true && fast.checked == true){
        document.getElementById("cheap").checked=false;
    }
}
function de_fast(){
    if(good.checked == true && fast.checked == true){
        document.getElementById("fast").checked=false;
    }
}
function de_good(){
    if(good.checked == true && cheap.checked == true){
        document.getElementById("good").checked=false;
    }
}