let str=prompt("nhap vao chuoi");
function check(str){
    // let check=true;
    let n=str.length;
    for(let i=0;i<n;i++){
        if(str[i]!=str[n-i-1]){
            return false;
        }
    }
    return true;
}
if(check(str)){
    alert('chuoi nhap vao doi xung');
}
else{
    alert('chuoi nhap vao khong doi xung!');
}