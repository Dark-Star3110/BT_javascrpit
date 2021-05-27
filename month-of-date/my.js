function number_days(){
    let month = document.getElementById("month").value;
    let today= new Date();
    current_year= today.getFullYear;
    console.log(current_year);
        if(current_year % 4 ==0 && month ==2){
                document.getElementById("result").innerHTML="Current year of month "+month+" have:"+" 29 days";
        }
        else if(current_year % 4 !=0 && month == 2){
                document.getElementById("result").innerHTML="Current year of month "+month+" have:"+" 28 days";
        }
        if(month==1 || month==3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            document.getElementById("result").innerHTML="Current year of month "+month+" have:"+" 31 days";
        }
        else if(month == 2){
            document.getElementById("result").innerHTML="Current year of month "+month+" have:"+" 29 days";
        }
        else if(month== 4 || month== 6 || month == 9 || month == 11){
            document.getElementById("result").innerHTML="Current year of month "+month+" have:"+" 30 days";
        }
        else{
            document.getElementById("result").innerHTML="month is notfall!!";
        }
    }