function addition(){
    let first_number= +document.getElementById("first_number").value;
    let second_number= +document.getElementById("second_number").value;
    result=first_number + second_number;
    document.getElementById("result").innerHTML= "Result Addition:"+result;
}
function subtraction(){
    let first_number= +document.getElementById("first_number").value;
    let second_number= +document.getElementById("second_number").value;
    result=first_number - second_number;
    document.getElementById("result").innerHTML= "Result Subtraction:"+result;
}
function multiplication(){
    let first_number= +document.getElementById("first_number").value;
    let second_number= +document.getElementById("second_number").value;
    result=first_number * second_number;
    document.getElementById("result").innerHTML= "Result Multiplication:"+result;
}
function divition(){
    let first_number= +document.getElementById("first_number").value;
    let second_number= +document.getElementById("second_number").value;
    result=first_number / second_number;
    document.getElementById("result").innerHTML= "Result Divition: "+result;
}