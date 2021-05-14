let namsinh = +prompt("nhap vao nam sinh cua ban:");
let today = new Date();
year=today.getFullYear();
tuoi=year-namsinh;
alert("Tuoi hien tai cua ban la: "+tuoi +" tuoi");