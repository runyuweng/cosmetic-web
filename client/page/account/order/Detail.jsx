import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table } from 'antd'
import DetailPageCreate from 'detail-page-create'
import api from '@client/utils/api'
import '../account.scss'

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: props.match.params.orderId,
      data: {},
    }
  }

  componentDidMount() {
    const { orderId } = this.state
    api.getOrderDetail({
      orderId
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
        data: records[0]
      })
    })
  }

  freshData = () => {
    const layout = {
      labelCol: 2,
      contentCol: 22,
    }
    this.dataStrcut = [
      {
        name: 'orderId',
        label: '订单编号：',
        layout,
      },
      {
        name: 'orderCreateTime',
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