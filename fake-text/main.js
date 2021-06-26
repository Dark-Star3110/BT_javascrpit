let message=['T','O','I',' ','Y','E','U',' ','V','I','E','T',' ','N','A','M'];
let count=0;
 
function change_text(){
    document.getElementById('content').value='';
    for(let i=0;i<=count;i++){
        document.getElementById('content').value+=message[i];
    }
    count++;
    if(count > message.length){
        count=0;
        document.getElementById('content').value='';
    }
}