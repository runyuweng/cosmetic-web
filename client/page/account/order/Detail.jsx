import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table } from 'antd'
import DetailPageCreate from 'detail-page-create'
import '../account.scss'

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: 'wry',
        mail: '11@11.com',
        tel: '111111',
        birth: '1995.12.1',
      },
    }
  }

  freshData = () => {
    const layout = {
      labelCol: 2,
      contentCol: 22,
    }
    this.dataStrcut = [
      {
        name: 'name',
        label: '订单编号：',
        layout,
      },
      {
        name: 'mail',
        label: '下单时间：',
        layout,
      },
      {
        name: 'tel',
        label: '卖家：',
        layout,
      },
      {
        name: 'birth',
        label: '卖家联系方式：',
        layout,
      },
      {
        name: 'birth',
        label: '商品：',
        layout,
      },
    ]
  }

  render() {
    this.freshData()
    return (
      <div className="orderDetail">
        <Card>
          <h2>订单详情</h2>
          <DetailPageCreate dataStrcut={this.dataStrcut} data={this.state.data} />
        </Card>
      </div>
    )
  }
}

export default OrderDetail;