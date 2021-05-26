function check_bmi(){
    let weight=+document.getElementById("weight").value;
    let height=+document.getElementById("height").value;
    bmi=weight/height;
    document.getElementById("bmi").innerHTML="BMI của bạn là:"+bmi;
    if(bmi<18){
        document.getElementById("conclude").innerHTML="Kết luận:Bạn gầy!";
    }
    else if(bmi>=18 && bmi<=25){
        document.getElementById("conclude").innerHTML="Kết luận:Bạn bình thường!";
    }
    else if(bmi>25){
        document.getElementById("conclude").innerHTML="Kết luận:Bạn bình thường!";
    }
    else{
        document.getElementById("conclude").innerHTML="không kết luận được! Kiểm tra lại cân nặng chiều cao";
    }
}