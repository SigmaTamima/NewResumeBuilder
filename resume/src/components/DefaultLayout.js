import React from 'react'
import { Button, Dropdown, Menu } from "antd";
import { UserOutlined  } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "../resources/DefaultLayout.css"
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
  const navigate = useNavigate();
  const items = [
    {
      key: '1',
      label: (
        <a  href="/home">
         Home
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a  href="/profile">
          Profile
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a     onClick={() => {
          localStorage.removeItem("resumebuilder-user");
          navigate("/login");
        }}>
       Logout
        </a>
      ),
    },
  ];
      
  

  return (
    <div className='layout'>
      <div className='header' >
        <img  onClick={()=>navigate('/home')} src='/images/logoone.png' alt='' style={{height:'90px',cursor:'pointer'}}/>
        <div>
        <Dropdown menu={{ items }} placement="bottomLeft">
        <Button icon={<UserOutlined  />}>{user.username}</Button>
      </Dropdown>
        </div>
        </div> 
        <div className='content'>
          {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout