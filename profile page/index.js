var DummyData = {
  users: [],
  current_user: 0
}

var arrList=[];
if(localStorage.getItem('data_2')==null){
  arrList=[];
}else{
  arrList=JSON.parse(localStorage.getItem('data_2'));
}

let trs = ``;
let trs3=``;
var data = JSON.parse(localStorage.getItem('data')) || DummyData;
var man= document.querySelector('.man')
var length = data.users.length
console.log(length);
var user_id = data.users.find((user) => user.id === data.current_user)

// Start the part of profile page 
let Profile_Page = document.getElementById('Profile_Page');
let container = document.getElementById('container')
var trs2=`  <img src="../Assets/man.png" alt="Profile Image" />
<p>${user_id.fullName}</p>

<div class="interests">
  <div class="title">
    <label id="Int_Label">Interests</label>
  </div>
  <p>Web Developoment</p>
  <p>Graphic Designer</p>
  <p>Degital Markiting</p>
  <p>Finance</p>
  <p>UI / UX</p>
</div>
<div class="title">
  <label id="Int_Label">Badges</label>
</div>
<div class="badges">
  <div class="first">
    <i id="trophy3" class="fa-solid trophy fa-dragon"></i>
    <i id="trophy4" class="fa-solid trophy fa-handshake-simple"></i>
    <i id="trophy3" class="fa-solid trophy fa-dragon"></i>
    <i id="trophy4" class="fa-solid trophy fa-handshake-simple"></i>
    <i id="trophy3" class="fa-solid trophy fa-dragon"></i>
  </div>

  <div>
    <i id="trophy1" class="fa-solid trophy fa-dragon"></i>
    <i id="trophy2" class="fa-solid trophy fa-handshake-simple"></i>
    <i id="trophy1" class="fa-solid trophy fa-dragon"></i>
    <i id="trophy2" class="fa-solid trophy fa-handshake-simple"></i>
    <i id="trophy1" class="fa-solid trophy fa-dragon"></i>
  </div>
</div>`;
trs3=`<label for="phone" id="phone1"  style="display:none">Phone Number</label>
<input type="number" id="phone" name="phone" style="display:none" placeholder="Enter your Phone Number"   />
<br/>
<label for="edu" id="edu1" style="display:none">Faculty</label>
<input type="text" id="edu" name="edu" style="display:none" placeholder="enter your faculty"  />`;
  console.log('hi form  qwe');
  console.log(arrList);

  if (data.current_user != 0) {
    if(arrList.phoneNumber !=null){
      phoneNumber.style.display="block";
      education.style.display="block";
      phoneNumber.setAttribute(disabled)
      education.setAttribute(disabled)
    }
man.innerHTML=trs2
    console.log(data);
    console.log('authorized')
    trs = `
  <form action="" method="post">
  <label for="fname">First Name</label>
  <input type="text" id="fname" name="fname" disabled  value= '${user_id.fullName}'/>
  <br />
  <label for="email">E-mail</label>
  <input type="email" id="email" name="email" disabled value= '${user_id.email}'/>
  <br />
  <label for="id">Id</label>
  <input type="number" id="id" name="id" disabled value='${user_id.id}' />
  <br />
  <label for="pass">Password</label>
  <input type="password" id="pass" name="pass" disabled value='${user_id.password}' />

  <br/> 

 ${trs3}

  <br />
</form>
<div class="bton">
<button id="btn1">Save</button>
<button id="btn2">Update</button>
</div>`;
    console.log('hi from end profile');
    container.innerHTML=trs;

  var save=document.getElementById('btn1')  
  var update=document.getElementById('btn2');
  var phoneNumber=document.getElementById('phone');
  var phoneNumber1=document.getElementById('phone1');
  console.log(phoneNumber.value);
  var education=document.getElementById('edu');
  var education1=document.getElementById('edu1');

  update.addEventListener('click',function(){
      arrList=JSON.parse(localStorage.getItem('data_2'))
      console.log('nuqweqweqwul');
      phoneNumber.style.display="block";
      phoneNumber1.style.display="block";
      education.style.display="block";
      education1.style.display="block";
    console.log(arrList[0].phoneNumber);
      phoneNumber.value=arrList[0].phoneNumber;
      education.value=arrList[0].education;
    
  })

  save.addEventListener('click',function(){
    arrList=[]
    var data_2={
      phoneNumber:phoneNumber.value,
      education:education.value,
    }
    console.log(data_2);
    console.log(arrList);
  arrList.push(data_2);
  localStorage.setItem('data_2',JSON.stringify(arrList))
    phoneNumber.value=""
    education.value=""
    phoneNumber.style.display='none'
    phoneNumber1.style.display='none'
    education.style.display='none'
    education1.style.display='none'

  })
  }

// end the part of profile page


// log in and out 
var data = JSON.parse(localStorage.getItem("data"))
var isloggedIn = data.current_user || 0 
var register = document.getElementById('Profile_Page')
var log = document.getElementById('log')
if (isloggedIn === 0 ){
    register.innerHTML = `<i  class="fa-solid fa-circle-user"></i> Register`
    register.setAttribute('href','../singup/index.html')
    log.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Login`
    log.setAttribute('href','../login/login.html')
} else {
  register.innerHTML = `<i  class="fa-solid fa-circle-user"></i> Profile`
  register.setAttribute('href','./index.html')
  log.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Logout`
  log.setAttribute('href','../login/login.html')
}