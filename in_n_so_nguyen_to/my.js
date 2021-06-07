function check_prime(number){
    if(number<2){
        return false;
    }
    let check = 1;
    for(let i =2;i<=Math.sqrt(number);i++){
        if(number%i==0){
            check=0;
        }
    }
    if(check==1) {
        return true;
    }
    else {
        return false;
    }
}
let n = +prompt("nhap vao n:");
let count=0;
let i=2;
document.write(n+" so nguyen to dau tien la:"+"<br>");
while(count<n){
    if(check_prime(i)){
        document.write(i+"<br>");
        count++;
    }
    i++;
}