import React, { Component } from 'react';
import { Breadcrumb, Tabs, Card, Checkbox, Radio, Pagination } from 'antd'
import api from '@client/utils/api'
import Form from 'ant-form'
import Header from './Header.jsx'
import Body from './Body.jsx'
import '../product.scss'
import Tab1 from '../tab/Tab1.jsx'
import Tab2 from '../tab/Tab2.jsx'
import Tab3 from '../tab/Tab3.jsx'

class ProductIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productId: props.match.params.productId,
      data: {}
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const {
      productId
    } = this.state
    api.getProductDetail({
      productId
    }).then(({ data }) => {
      this.setState({
        data: data.data
      })
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div className="product">
        <Card style={{ margin: '20px' }}>
          <div className="ant-container">
            <Header data={data} />
          </div>
          <div className="ant-container">
            <Tabs defaultActiveKey="1" onChange={() => {}}>
              <Tabs.TabPane tab="商品参数" key="1">
                <Tab1 data={data} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="商品详情" key="2">
                <Tab2 data={data.productRelatedImg} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="品牌详情" key="3">
                <Tab3 data={data.brand} />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Card>
      </div>
    );
  }
}

export default ProductIndex;
