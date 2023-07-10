import React, { useState } from "react";
import {  Button,Tabs, Form ,message, Spin} from "antd";
import DefaultLayout from "../components/DefaultLayout";
import PersonalInformal from "../components/PersonalInformal";
import SkillsandEducation from "../components/SkillsandEducation";
import Experience from "../components/Experience";
import axios from 'axios'
const { TabPane } = Tabs;
function Profile() {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("resumebuilder-user"));
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("resumebuilder-user", JSON.stringify(result.data));
      setLoading(false);
      message.success("Profile updated successfully");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };
  return (
    <DefaultLayout>
         {loading && <Spin size="large" />}
    <div className="update-profile" >
      <h4><b>Update Profile</b></h4>
      <hr />
      <Form layout="vertical " onFinish={onFinish} initialValues={user}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Information" key="1">  
          <PersonalInformal />
          </TabPane>
          <TabPane tab="Skills and Education" key="2">   
          <SkillsandEducation/>     
          </TabPane>
          <TabPane tab="Experience and Projects" key="3"> 
          <Experience/>        
          </TabPane>
        </Tabs>
        <hr/>
        <Button htmlType="submit">UPDATE</Button>
        </Form>
    </div>
  </DefaultLayout>
  );
}

export default Profile;
