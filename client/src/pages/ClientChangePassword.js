import React,{useState}from 'react'
import { Link } from 'react-router-dom';

export default function ClientChangePassword() {

  const [currentPassword,setCurrentPassword]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  const handleInputChange=(e)=>{
    const{id,value}=e.target;
    if(id==='currentPassword'){
      setCurrentPassword(value);
    }else if(id==='newPassword'){
      setNewPassword(value);
    }else if(id==='confirmPassword'){
      setConfirmPassword(value);
    }
  };

  const handleSubmit =(e)=>{
   e.preventDefault();
  

if(newPassword !==confirmPassword){
  alert("New password and confirm password do not match!");
  return;
}else if(!newPassword || !confirmPassword || !currentPassword){
  alert("Please fill all fields")
}
  

console.log('Current password:',currentPassword);
console.log('New Password:',newPassword);
console.log('Confirm Password:',confirmPassword);



setCurrentPassword('');
setNewPassword('');
setConfirmPassword('');

  }
  return (
<div className="container custom-container change-password mt-5 " >
<nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
        Change password
          </li>
         
        </ol>
      </nav>
        
      <form class="mx-auto mt-5" onSubmit={handleSubmit}>
       
        <h1>Change Password</h1>
        <div class="col-xs-5">
    <label for="exampleInputPassword1" class="form-label">Current Password</label>
    <input 
        type="password" 
        class="form-control" 
        id="currentPassword"
        value={currentPassword}
        onChange={handleInputChange}
        />
  </div>
  <div class="col-xs-5">
    <label for="exampleInputPassword1" class="form-label">New Password</label>
    <input 
        type="password" 
        class="form-control" 
        id="newPassword"
        value={newPassword}
        onChange={handleInputChange}
        />
  </div>
  <div class="col-xs-5">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input 
        type="password" 
        class="form-control" 
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleInputChange}
        />
  </div>
  <div class="col-xs-5">

  <button type="submit" class="btn btn-primary  mt-3">Save</button>
  </div>
</form>
</div>


   
  )
 
  
  
}
