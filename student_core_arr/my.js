let student_score=[
    [ 34, 56],
    [23, 24],
    [45, 51],
    [45, 46],
    [40,44]
];
let student_score1=[
    [ 34, 56],
    [23, 24],
    [45, 51],
    [45, 67],
    [40,68]
];



function core_cal(arr){
    let score=[];
    for(let i=0;i<arr.length;i++){
        if(iscore_false(arr[i][0],arr[i][1])){
            score[i]=0;
        }
        else{
            let mi=arr[i][1]-arr[i][0];
            if(mi<3){
                score[i]=arr[i][0];
            }
            else if(mi>=3 && mi <=5){
                score[i]=(arr[i][0]+arr[i][1])/2;
            }
            else{
                score[i]=arr[i][1];
            }
        }
    }
    return score;
}

function iscore_false(score1,score2){
    return score1<40 || score2<40;
}
console.log(core_cal(student_score));
console.log(core_cal(student_score1));

