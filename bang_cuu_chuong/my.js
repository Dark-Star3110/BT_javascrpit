let html="";
for(let i =1;i<10;i++){
    html+="<tr>";
    for(let j=2;j<10;j++){
        tich=i*j;
        html+="<td>"+j+"x"+i+"="+tich+"</td>"+"<br>";
    } 
    html+="</tr>";
}
document.getElementById("bang_cuu_chuong").innerHTML=html;

