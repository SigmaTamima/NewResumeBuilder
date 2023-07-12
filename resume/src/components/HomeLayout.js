import React from 'react'
import "../resources/HomeLayout.css"
import { useNavigate } from 'react-router-dom'
function HomeLayout(props) {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/login')
  }
  const handleClicki =()=>{
    navigate('/register')
  }

  return (
    <div className='layout'>
    <div className='header'>
      <img src='/images/logoone.png' alt='' style={{height:'90px'}}/>
      </div> 
      <div>
            <ul id="navbar" >
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html">About Us</a>
              </li>
              <li>
                <a href="index.html">Contact Us</a>
              </li>
              <li>
                <button style={{background:" 	#800000"}} onClick={handleClicki}>Register</button>
              </li>
              <li>
                <button style={{background:" 	#800000"}}onClick={handleClick}>Sign In </button>
              </li>       
            </ul>
          </div>
      <div className='content'>
        {props.children}
      </div>
  </div>
  )
}

export default HomeLayout