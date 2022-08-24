import React from "react";
import { Link, useParams } from "react-router-dom";
import { RollbackOutlined } from '@ant-design/icons';
import { Space, Typography, Image, Button } from "antd";
import Products from "../../data/product.json";
import style from "./detail.module.css"

const { Title, Text } = Typography;

export default function Detail() {
    const urlParams = useParams();
    const productDetail = Products.filter((product) => {
        return parseInt(product.id) === parseInt(urlParams.id);
    })[0];

    if (!productDetail) {
        return (
            <div>
                <Link to="/">
                    <Button type="danger" style={{ marginBottom: "20px" }}>
                        <RollbackOutlined />
                    </Button>
                </Link>
                <Title level={3}>Detail is empty</Title>
            </div>
        );
    } else {
        return (
            <div className={style.container}>
                <Link to="/">
                    <Button type="danger" style={{ marginBottom: "20px" }}>
                        <RollbackOutlined />
                    </Button>
                </Link>
                <Title level={2}>{productDetail.title}</Title>
                <Space direction="vertical">
                    <Text>Brand : {productDetail.brand}</Text>
                    <hr />
                    <Text>Stock : {productDetail.stock}</Text>
                    <hr />
                    <Text>Price : {productDetail.price}</Text>
                    <hr />
                    <Text>Rating : {productDetail.rating}</Text>
                    <hr />
                    <Text>Description : {productDetail.description}</Text>
                    <hr />
                    <Text>Images</Text>
                    <Image.PreviewGroup>
                        {productDetail.images.map((image, index) => (
                            <Image
                                key={index}
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover"
                                }}
                                src={image}
                                alt="Image Product"
                            />
                        ))}
                    </Image.PreviewGroup>
                </Space>
            </div>
        );
    }
}
