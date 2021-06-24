// let a=[1,2,3,4,5,6];
// let b=[1,6,7,8,9,10,1,6];
// let visited=[false];
// let count=0;
// function sum(arr1,arr2){
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr2[j]==arr1[i] && !visited[arr1[i]] ){
//                 visited[arr1[i]]=true;
//                 count++;
//                 // document.write(arr1[i]+' ');
//             }
//         }
//     }
//     return count;
// }
// // sum(a,b);
// document.write(sum(a,b));

let a=[1,2,3,4,5];
function demo(arr){
    arr[0]=5;
}
demo(a);
console.log(a);
