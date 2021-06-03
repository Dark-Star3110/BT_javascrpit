function cost(){
    let fruits = document.getElementById("fruits").value;
switch(fruits){
    case "Ổi":
        document.getElementById("cost").innerHTML="20000 VNĐ/kg";
        break;
    case "Dưa Hấu":
        document.getElementById("cost").innerHTML="20000 VNĐ/kg";
        break;
    case "Táo":
        document.getElementById("cost").innerHTML="30000 VNĐ/kg";
        break;
    case "Xoài":
        document.getElementById("cost").innerHTML="30000 VNĐ/kg";
        break;
    case "Cam":
        document.getElementById("cost").innerHTML="40000 VNĐ/kg";
        break;
    case "Chôm Chôm":
        document.getElementById("cost").innerHTML="40000 VNĐ/kg";
        break;
    case "Măng Cụt":
        document.getElementById("cost").innerHTML="50000 VNĐ/kg";
        break;   
    default:
        document.getElementById("cost").innerHTML="Hoa quả bạn nhập hiện không có";
        break;
}
}