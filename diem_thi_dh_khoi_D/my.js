function check_score(){
    let math=+document.getElementById("math").value;
let liter=+document.getElementById("liter").value;
let english=+document.getElementById("english").value;
let bonus=document.getElementById("area").value;
score= math + liter + english;
switch(bonus){
    case "kv1":
        document.getElementById("result").innerHTML="Tổng điểm đại học khối D của bạn là:"+(score+0.75);
        break;
    case "kv2_nt":
        document.getElementById("result").innerHTML="Tổng điểm đại học khối D của bạn là:"+(score+0.5);
        break;
    case "kv2":
        document.getElementById("result").innerHTML="Tổng điểm đại học khối D của bạn là:"+(score+0.25);
        break;
    case "kv3":
        document.getElementById("result").innerHTML="Tổng điểm đại học khối D của bạn là:"+score;
        break;
}
}


