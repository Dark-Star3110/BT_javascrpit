function convert_money(){
    let amount = document.getElementById("amount").value;
    let from_curent= document.getElementById("from_current").value;
    let to_current= document.getElementById("to_current").value;
    //Math.floor lam tron so
    result = (to_current/from_curent)*amount;
    //thay doi noi dung html by innerHTML
    document.getElementById("result").innerHTML = "Result:"+result;
}