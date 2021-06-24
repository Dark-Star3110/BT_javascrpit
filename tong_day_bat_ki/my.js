let m = +prompt("nhap vao so dau tien:");
let n = +prompt("nhap vao so cuoi cung:");
let sum=0;
if(m<n){
    for(let i=m;i<=n;i++){
        // document.write(i);
        sum+=i;
    }
    document.write("Tong la:"+sum);
}
else{
    alert("loi!!");
}

