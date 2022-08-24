import React from 'react'
import Ava from "../../assets/images/levi1.jpg"
import { Col, Image, Row, Typography } from "antd";

const { Title } = Typography;

const About = () => {
    return (
        <div>
        <Title style={{ textAlign: "center", marginBottom: "25px" }} level={3}>
          About
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
          Mitrafor test 
        </Title>
        
      </div>
      )
}

export default About