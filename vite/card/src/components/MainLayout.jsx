import React from 'react'
import "./MainLayout.css"
import { Link,Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div><h2>Welcome to Home Page</h2>
        <nav>
            <ul className='aa'>
                <li><Link to="/Login">LOGIN</Link></li>
                <li><Link to="/Registration">REGISTRATION</Link></li>

            </ul>
        </nav>
        <Outlet />
    </div>
  )
}


export default MainLayout