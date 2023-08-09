var DummyData = {
  users: [],
  current_user: 0
}
let trs = ``;
var data = JSON.parse(localStorage.getItem('data')) || DummyData;
var man= document.getElementById('man')
var length = data.users.length
console.log(length);
var user_id = data.users.find((user) => user.id === data.current_user)
console.log(user_id.fullName);
console.log(data.current_user);

// Start the part of profile page 
let Profile_Page = document.getElementById('Profile_Page');
let container = document.getElementById('container')

  console.log('hi form  qwe');
  if (data.current_user != 0) {
// man.innerHTML=`<p>User Name</p>`
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
  <div class="bton">
              <button id="btn1">Save</button>
              <button id="btn2">Reset</button>
            </div>
  <br />
</form>`;
    console.log('hi from end profile');
    container.innerHTML = trs;
    // list_Obj./current_user = user.id

  }


// end the part of profile page

