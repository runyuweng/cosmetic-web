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

    this.columns = [{
      title: '商品名',
      dataIndex: 'op.productName',
      render: (t, r) => t && <Link to={`/product/${r.op.productId}`}>{t}</Link>
    }, {
      title: '数量',
      dataIndex: 'op.productNum',
    }, {
      title: '单价',
      dataIndex: 'op.productPrice',
    }]
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
            address: d.address,
            orderId: d.orderId,
            orderCreateTime: d.orderCreateTime,
            orderDispatchTime: d.orderDispatchTime,
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
      contentCol: 8,
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
        name: 'orderDispatchTime',
        label: '派单时间：',
        layout,
        render: t => t || '暂未派单'
      },
      {
        name: 'address',
        label: '派单地址：',
        layout,
        render: t => t &&`${t.addressProvince}-${t.addressCity}-${t.addressDetail}`
      },
      {
        name: 'addressUserName',
        label: '联系人：',
        layout,
        render: (t, r) => r.address && r.address.addressUserName
      },
      {
        name: 'addressTel',
        label: '联系电话：',
        layout,
        render: (t, r) => r.address && r.address.addressTel
      },
      {
        name: 'products',
        label: '商品：',
        layout,
        render: (t, r) => {
          console.log('tr', t, r)
          return (
            <Table
              pagination={false}
              columns={this.columns}
              dataSource={r.products}
              locale={{
                emptyText: '暂无数据'
              }}
            />
          )
        }
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