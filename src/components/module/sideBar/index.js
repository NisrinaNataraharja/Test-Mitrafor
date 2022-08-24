import React from 'react';
import style from './sideBar.module.css';
import SideItem from '../../base/sideItem';
import {
  HomeOutlined,
  UserOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const SideBar = ({children}) => {
  
    return (
        <Layout>
          <Sider
            style={{ backgroundColor: "##1C7FDB" }}
            className={style.container}
          >
            <div style={{ minHeight: "5vh" }}></div>
            <SideItem
              link="/"
              title="Home"
              icon={<HomeOutlined />}
            />
            <div style={{ minHeight: "5vh" }}></div>
            <SideItem
              link="/about"
              title="About"
              icon={<UserOutlined />}
            />
            <div style={{ minHeight: "5vh" }}></div>
            <SideItem
              link="/contact"
              title="Contact"
              icon={<ContactsOutlined />}
            />
          </Sider>
          <Layout>
            <Content className={style.content}>{children}</Content>
          </Layout>
        </Layout>
      )
}

export default SideBar

