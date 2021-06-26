function sum(number1,number2,number3,number4){
    return number1+number2+number3+number4;
}

function find_max(array){
    let max=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
function find_min(array){
    let min=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i] < min){
            min=array[i];
        }
    }
    return min; 
}
// let array=[1,2,3,4,5];
let array=[];
for(let i=0;i<5;i++){
    let a=Math.floor(Math.random()*10+1);
    array[i]=a;
}
document.write("mang khoi tao la:");
for(let i=0;i<array.length;i++){
    document.write(array[i]+" ");
}
document.write("<br>");
let subarray=[];
subarray.push(sum(array[0],array[1],array[2],array[3]));
subarray.push(sum(array[0],array[1],array[2],array[4]));
subarray.push(sum(array[0],array[1],array[3],array[4]));
subarray.push(sum(array[0],array[2],array[3],array[4]));
subarray.push(sum(array[1],array[2],array[3],array[4]));
document.write("output:");
document.write(find_min(subarray)+" "+find_max(subarray));
