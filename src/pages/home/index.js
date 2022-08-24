import React, { useState, useRef, useEffect } from "react";
import { Col, Row, Form, Input, Button, Table } from "antd";
import { Link } from "react-router-dom";
import Products from "../../data/product.json";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "No",
    key: "index",
    render: (text, record, index) => index + 1,
    width: "4%",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "20%",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    width: "15%",
    filterMode: "tree",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Photo",
    dataIndex: "thumbnail",
    width: "30%",
    render: (imgs, record) => (
      <div>
        <img
          src={record.thumbnail}
          alt="product"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />
      </div>
    ),
  },
  {
    title: "Action",
    dataIndex: "id",
    render: (id) => (
      <Link to={`/detail/${id}`}>
        <Button type="primary">Detail</Button>
      </Link>
    ),
  },
];

const Home = () => {
  const [product, setProduct] = useState(Products);
  const searchInput = useRef(null);
  const [search, setSearch] = useState(localStorage.getItem("search"));

  const handleSearch = () => {
    localStorage.setItem("search", search);
    searchProduct(search);
  };

  const searchProduct = (search) => {
    const productFiltered = Products.filter((Products) => {
      return Products.title
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    });

    setProduct(productFiltered);
  };

  useEffect(() => {
    if (localStorage.getItem("search")) {
      searchProduct(localStorage.getItem("search"));
    }
  }, []);

  return (
    <div>
      <Row justify="center">
        <Col span={22}>
          <h1 style={{ fontSize: "30px", textAlign: "center" }}>Home Page (List Products)</h1>
          <Form
            wrapperCol={{ span: 24 }}
            onFinish={handleSearch}
            autoComplete="off"
          >
            <Form.Item name="search" style={{ marginBottom: "15px" }}>
              <Row justify="center">
                <Col span={16}>
                  <Input
                    ref={searchInput}
                    style={{
                      marginBottom: 8,
                      display: "block",
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>
                <Col span={2} style={{ backgroundColor: "primary" }}>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                    icon={<SearchOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
          <Table columns={columns} dataSource={product} rowKey="id" />
        </Col>
      </Row>
    </div>
  )
}

export default Home