import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Input, Table } from 'antd'
import Form from 'ant-form'
import api from '@client/utils/api'
import '../account.scss'

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: window.localStorage.getItem('userId'),
      orders: []
    }

    this.columns = [{
      title: '订单编号',
      dataIndex: 'orderId',
      width: '20%',
      render: (t, r) => <Link to={`/account/order/${r.orderId}`}>{t}</Link>
    }, {
      title: '时间',
      dataIndex: 'orderCreateTime',
      width: '20%',
    }, {
      title: '物品',
      dataIndex: 'products',
      width: '40%',
      render: t => t.map(d => d.op.productName).join('、')
    }, {
      title: '操作',
      key: 'action',
      width: '20%',
      render: (t, r) => (
        <Link to={`/account/order/${r.orderId}`}>查看详情</Link>
      ),
    }];
  }

  componentDidMount() {
    const { userId } = this.state
    api.getOrderList({
      userId
    }).then(({ data }) => {
      const recordsMapping = {}
      data.data.forEach((d) => {
        if (recordsMapping[d.orderId]) {
          recordsMapping[d.orderId].products.push(d)
        } else {
          recordsMapping[d.orderId] = {
            orderId: d.orderId,
            orderCreateTime: d.orderCreateTime,
            products: [d]
          }
        }
      })
      const records = Object.keys(recordsMapping).map(d => recordsMapping[d])
      console.log(records)
      this.setState({
        orders: records
      })
    })
  }

  render() {
    return (
      <div className="order">
        <Table
          pagination={false}
          columns={this.columns}
          dataSource={this.state.orders}
        />
      </div>
    )
  }
}

export default Order;