var DummyData = {
    users:[],
    current_user:0
}
var data = JSON.parse(localStorage.getItem('data')) || DummyData;

var user = data.users.find((user) => user.id === data.current_user)


// Start the part of profile page 
// let Profile_Page=document.getElementById('Profile_Page');
let container=document.getElementById('container')
console.log(container);
let list_Obj=[];
let trs=``;
Profile_Page.addEventListener('load',function(){
  if(localStorage.getItem('data')===null){
    list_Obj=[];
    
  }else{
    list_Obj=JSON.parse(localStorage.getItem('data'));
  }

  if(list_Obj.current_user !=0 ){
    
    console.log('hiii');
    list_Obj.useres
  // list_Obj./current_user = user.id
    console.log('authorized')
    trs+=`
    <form action="" method="post">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="fname" disabled vlaue='${user.name}'/>
    <br />
    <label for="Lname">Last Name</label>
    <input type="text" id="Lname" name="lname" value= '${user.name}'/>
    <br />
    <label for="age">Age</label>
    <input type="number" id="age" name="age" value="25" />
    <br />
    <label for="edu">Education</label>
    <input type="text" id="edu" name="edu" value='Backlory of medicine' />
    <br />
    <label for="university">University</label>
    <input type="text" id="university" name="university" value='Suhaj' />
    <br />
  </form>`;
  console.log('hi from end profile');
container.innerHTML=trs;
}
})


// end the part of profile page

