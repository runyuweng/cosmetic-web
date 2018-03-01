import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table, InputNumber } from 'antd'
import DetailPageCreate from 'detail-page-create'
import observer from '@client/utils/observer'

@observer
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.columns = [{
      title: '选中',
      dataIndex: 'checked',
      key: 'checked',
      width: '10%',
      render: () => <Checkbox defaultChecked />
    },{
      title: '商品名',
      dataIndex: 'productName',
      key: 'productName',
      width: '30%',
      render: text => <a href="/product/1">{text}</a>,
    }, {
      title: '价格',
      dataIndex: 'productPrice',
      key: 'productPrice',
      width: '25%',
      render: text => `${text} 元`
    }, {
      title: '件数',
      dataIndex: 'productNum',
      key: 'productNum',
      width: '15%',
      render: (t,r) => (
        <InputNumber
          min={1}
          value={t}
          onChange={(productNum) => {
            console.log(r.productId, productNum)
            this.props.cartStore.changeNum(r.productId, productNum)
          }}
        />
      )
    }, {
      title: '操作',
      key: 'action',
      width: '20%',
      render: (text, record) => (
        <a onClick={() => {this.handleDelete(record)}}>
          删除
        </a>
      ),
    }];
  }

  componentDidMount() {
    console.log('componentDidMount:', this.props.cartStore)
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps:', props.cartStore)
  }

  handleDelete = (record) => {
    this.props.cartStore.deleteProduct(record.productId)
  }

  handleBuy = () => {
    this.props.handleOff()
    this.props.history.push("/confirm");
  }

  render() {
    const { products = [] } = this.props.cartStore || {}
    let total = 0
    products.forEach((d) => {
      total += (d.productNum * d.productPrice)
    })
    return (
      <div className="cart">
        <Table
          columns={this.columns}
          dataSource={products}
          pagination={false}
          locale={{
            emptyText: '暂无选中商品'
          }}
        />
        <div className="cart-footer">
          <span className="count">总价： <span>{total}</span></span>
          <Button
            style={{ float: 'right' }}
            onClick={this.handleBuy}  
          >
            购买
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Cart)
