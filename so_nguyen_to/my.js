let x = + prompt("nhap vao so muon kiem tra:");
let check = true;
if(x<2){
    check=false;
}
else{
    for(let i=2;i< Math.sqrt(x); i++){
        if(x%i==0) check=false;
    }
}
if(check) alert(x+ " la so nguyen to");
else alert(x+ " khong la so nguyen to");