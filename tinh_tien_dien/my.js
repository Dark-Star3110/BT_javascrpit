function cal(){
    let electric=+document.getElementById("elec_num").value;
    money=2000*electric;
    document.getElementById("result").innerHTML=money+" VND"
}