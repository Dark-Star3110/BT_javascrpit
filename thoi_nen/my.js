let array=[1,3,4,1,2,4,3];
function count_nen(){
    let count=0;
    let max=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    for(let i=0;i<array.length;i++){
        if(array[i]==max){
            count++;
        }
    }
    return count;
}
let number=count_nen();
console.log(number);