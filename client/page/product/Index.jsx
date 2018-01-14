import React, { Component } from 'react';
import { Breadcrumb, Card, Checkbox, Radio, Pagination } from 'antd'
import api from '@client/utils/api'
import Form from 'ant-form'
import Header from './Header.jsx'
import Body from './Body.jsx'
import './product.css'

class ProductIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="product">
        <div className="ant-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>类型</Breadcrumb.Item>
            <Breadcrumb.Item>商品</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card style={{ margin: '20px' }}>
          <div className="ant-container">
            <Header />
          </div>
          <div className="ant-container">
            <Body />
          </div>
        </Card>
      </div>
    );
  }
}

export default ProductIndex;
