import React from "react";
import { Button, Checkbox, Form, Input, Card, Col, Row } from "antd";

const { TextArea } = Input;
function PersonalInformal() {
  return (
    <div>
      <Card title="Give Your Personal Information" className="card"  >
        <Row>
          <Col span={10} style={{marginLeft:"0rem"}}>
          {""}
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true }]}
              
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
           {""}
            <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
          
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            
            <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
          
          <Form.Item
            name="portfolio"
            label="Portfolio"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          </Col>
          
        <Col span={10}>
          <Form.Item
            name="carrierObjective"
            label="Carrier Objective"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </Col>
        </Row>
        <Row  style={{}}>
        <Col span={10}>
        <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default PersonalInformal;
