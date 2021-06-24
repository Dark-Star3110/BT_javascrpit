let height=4;
let width=6;

for(let i=0;i<height;i++){
    for(let j=0;j<width;j++ ){
        if(i==0 || i == height-1 || j==0 || j == width-1){
            document.write("*");
        }
        else{
            document.write("&");
        }
    }
    document.write("<br>");
}