

// console.log('hi');

var dropDown=document.getElementById('selectOP');
// console.log(document.getElementById('selectOP'));
var flag=true;
function disp(){
if(flag){
dropDown.style.display='block';
flag=false;
}else{
dropDown.style.display='none';

    flag=true;
}
}
