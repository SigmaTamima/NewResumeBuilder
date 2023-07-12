import React from "react";
import { Button } from 'antd';
import { useState } from 'react';
import Carousel from "react-elastic-carousel";
import { Col, Row } from "antd";
import HomeLayout from "../components/HomeLayout";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Public() {

  const [size] = useState('default');
  return (
    <HomeLayout>
      <div className="container-fluid">
        <Row style={{ textAlign: "center" }}>
          <Col span={12}>
            <p style={{ marginTop: "05rem" }}>
              Online CV and Professional Resume Maker
            </p>
            <h2>
              Create a Job-ready <br /> resume in minutes.
            </h2>
            <p>
              The #1 resume & CV builder, trusted by 4+ <br />
              million people to land their dream Job
            </p>
            <Button type="primary" shape="round"  size={size}>
            Sign Up
          </Button>
          </Col>
          <Col span={12}>
            {" "}
            <img
              src="\images\logo.png "
              alt=""
              style={{ height: "300px", marginTop: "00rem" }}
            />
          </Col>
        </Row>
      </div>
      <div className="container" style={{ marginTop: "05rem" }}>
        <Carousel breakPoints={breakPoints}>
          <img src="\images\temp1.jpg" alt=""></img>
          <img src="\images\temp2.jpg" alt=""></img>
          <img src="\images\temp3.jpg" alt=""></img>
          <img src="\images\temp4.jpg" alt=""></img>
          <img src="\images\temp1.jpg" alt=""></img>
          <img src="\images\temp4.jpg" alt=""></img>
        </Carousel>
      </div>
      <div className="container-fluid" style={{padding:"70px"}}>
        <Row style={{ textAlign: "center" }}>
          <Col span={12}>
            <div className="about">
              <img
                class="about"
                src="\images\temp2.jpg"
                alt=""
                style={{ transform: "rotate(-20deg)" }}
              />
              <img
                class="about"
                src="\images\temp4.jpg"
                alt=""
                style={{ transform: "rotate(5deg)" }}
              />
              <img
                class="about"
                src="\images\temp2.jpg"
                alt=""
                style={{ transform: "rotate(30deg)" }}
              />
            </div>
          </Col>
          <Col span={12}>
            <div  style={{textAlign:"center"}}>
            <h2 >About Us</h2>
            <p >
              Welcome to our CV Builder website,
              <br />
              where we simplify the process of creating professional resumes.
              <br /> With our user-friendly platform and meticulously designed
              templates,
              <br /> you can showcase your skills and experience effortlessly.
              <br /> Whether you're a recent graduate or a seasoned
              professional, our customization options cater to your unique
              needs. <br/>Save time and eliminate the hassle of formatting with our
              intuitive interface. <br/>Join us on our journey to redefine resume
              creation and unlock new opportunities on your career path. Start
              building your CV today and present yourself confidently to
              potential employers.
            </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container" style={{padding:"70px"}}>
      <h2>Contact Us</h2>
    < p> ..............................................<br/>,....................................</p>
  </div>
    </HomeLayout>
  );
}

export default Public;
