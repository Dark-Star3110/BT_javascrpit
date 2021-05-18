let money= +prompt("nhap so tien muon vay:");
let interest_rate = +prompt("nhap lai suat/nam:");
let time= +prompt("nhap thoi han:");
sum= money+money*(interest_rate/100)*time;
document.write("so tien phai tra sau "+time+" nam la:"+sum+" trieu VND");