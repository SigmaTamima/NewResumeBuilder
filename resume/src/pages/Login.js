import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import HomeLayout from "../components/HomeLayout";
import axios from "axios";
import {
  Card,
  Col,
  Row,
  Form,
  Input,
  Button,
  Checkbox,
  message,
  Spin,
} from "antd";
function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user =await axios.post("api/user/login", values);
      message.success("Logged in");
      localStorage.setItem("resumebuilder-user", JSON.stringify(user.data))
      setLoading(false);
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Log In Unsuccessfull");
      
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('resumebuilder-user'))
    {
      navigate('/home')
    }
  })
  return (
    <HomeLayout>
      <Card className="card">
        <Row>
          <Col span={12}>
            <h1>Sign In</h1>
            <hr />
            <div className="auth-parent">
            {loading && <Spin size="large"/>}
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="username" label="Username">
                  <Input />
                </Form.Item>
                <Form.Item name="password" label="Password">
                  <Input type="password" />
                </Form.Item>
                <div className="d-flex align-items-center justify-content-between">
                  <Link to="/register">Click Here to Register</Link>
                  <Button type="primary" htmlType="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col span={12}>
            <img src="/images/logo.png" alt="" />
          </Col>
        </Row>
      </Card>
    </HomeLayout>
  );
}

export default Login;
