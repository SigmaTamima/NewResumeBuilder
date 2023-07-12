import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";
import "../resources/authentication.css";
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
import axios from "axios";
function Register() {
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("api/user/register", values);
      setLoading(false);
     message.success("Registration successfull");
     navigate('/login')
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
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
            <h1>Sign Up</h1>
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
                <Form.Item name="cpassword" label=" Confirm Password">
                  <Input type="password" />
                </Form.Item>
                <div className="d-flex align-items-center justify-content-between">
                  <Link to="/login">Click Here to Sign In</Link>
                  <Button type="primary" htmlType="submit">
                    Register
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

export default Register;
