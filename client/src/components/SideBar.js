import React from 'react'
import { NavLink } from 'react-router-dom'


export default function SideBar() {
  return (
    <div  className='side_bar'>
 <ul>
		 

        <li className="list-group-item ">  
		    <img class= 'sideBarImage' src =  './logo.png' alt="icon"/> </li>
        {/* <li className="list-group-item">  
		    <img class= 'profile' src =  './user.png' alt="icon"/> </li>
  
       
            <td>
              <button className="btn btn-primary"><img class= 'icon_button' src =  './profile.png' alt="icon"/></button>
            </td>
            <td>
              <button className="btn btn-primary"><img class= 'icon_button' src =  './setting.png' alt="icon"/></button>
            </td>
            <td>
              <button className="btn btn-primary"><img class= 'icon_button' src =  './logout.png' alt="icon"/></button>
            </td>
           */}

              <li className="user_profile" style={{ position: 'relative' }}>  
                <img className='profile' src='./user.png' alt="icon" />
                
                <button className="btn  icon-button" style={{ top: '10%', left: '10%' }}>
                  <img className='icon_button' src='./profile.png' alt="icon" />
                </button>

                <NavLink to="/changePassword">
                <button className="btn  icon-button" style={{ top: '10%', left: '50%' }}>
                  <img className='icon_button' src='./setting.png' alt="icon" />
                </button>
                </NavLink>
                
                <button className="btn  icon-button" style={{ top: '10%', left: '80%' }}>
                  <img className='icon_button' src='./logout.png' alt="icon" />
                </button>
              </li>

        <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/Dashboard"  activeClassName="active">Dashboard</NavLink></li>
			 <li  className="list-group-item" >   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/Task"  activeClassName="active">Tasks</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/Invoices"  activeClassName="active">Invoices</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/payment"  activeClassName="active">Payment</NavLink></li>
			 <li  className="list-group-item ">   <NavLink  className="nav-link  text-white" aria-current="page" exact to="/Contact"  activeClassName="active">Contact</NavLink></li>

	
			</ul>	
    </div>
  )
}
