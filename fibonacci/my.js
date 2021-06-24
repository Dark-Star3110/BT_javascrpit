function fibonacci(number){
    let a=0;
    let b=1;
    let c=1;
    if(number<0){
        c=-1;
        return c;
    }
    else if(number==0 || number ==1){
        return number;
    }
    else{
        for(i=2;i<number;i++){
            a=b;
            b=c;
            c=a+b;
        }
    }
    return c;
}
let n=+prompt('nhap vao so:');
for(let i=0;i<n;i++){
    document.write(fibonacci(i)+"<br>");
}
