import React from 'react'
import Ava from "../../assets/images/levi1.jpg"
import { Col, Image, Row, Typography } from "antd";
import {
    LinkedinOutlined,
    GithubOutlined,
    MailOutlined
  } from '@ant-design/icons';

const { Title } = Typography;

const Contact = () => {
  return (
    <div>
    <Title style={{ textAlign: "center", marginBottom: "25px" }} level={3}>
      Contact me
    </Title>
    <Row justify="center">
      <Col span={6} style={{ textAlign: "center" }}>
        <Image
          width={200}
          src={Ava}
          style={{ height:"200px", width: "200px", borderRadius: "100%" }}
        />
      </Col>
    </Row>
    <Title style={{ textAlign: "center", marginTop: "10px" }} level={5}>
      Nisrina Hasna N
    </Title>
    <Title style={{ textAlign: "center", marginTop: "10px" }} level={5}>
    <LinkedinOutlined />
    <GithubOutlined />
    <MailOutlined />
    </Title>
    
  </div>
  )
}

export default Contact