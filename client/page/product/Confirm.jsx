import React, { Component, PropTypes } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col, Card, message, Button, Table, InputNumber, Icon } from 'antd'
import DetailPageCreate from 'detail-page-create'
import cartStore from '@client/utils/store'
import api from '@client/utils/api'
import './product.scss';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.src = location.href.indexOf('cart') > 0 ? 'cart' : 'product'
    this.state = {
      userId: window.localStorage.getItem('userId'),
      products: [],
      addressList: [],
      selectItem: ''
    }

    this.columns = [{
      title: '商品名',
      dataIndex: 'productName',
      render: (t, r) => <Link to={`/product/${r.productId}`}>{t}</Link>,
    }, {
      title: '价格',
      dataIndex: 'productPrice',
    }, {
      title: '件数',
      dataIndex: 'productNum',
      render: (t, r) => (
        <InputNumber
          min={1}
          value={t}
          onChange={(e) => {
            this.setState({
              products: this.state.products.map((d) => {
                if (d.productId === r.productId) {
                  d.productNum = e
                }
                return d                
              })
            })
          }}
        />
      )
    }, {
      title: '操作',
      key: 'action',
      render: (text, r) => (
        <a
          onClick={() => {
            this.setState({
              products: this.state.products.filter(d => d.productId !== r.productId)
            })
          }}
        >
          删除
        </a>
      ),
    }];
  }

  componentDidMount() {
    if (this.src === 'cart') {
      this.setState({
        products: cartStore.products.filter(d => d.checked)
      })
    } else {
      this.fetchProductDetail()
    }
    this.fetchAddress()
  }

  componentWillReceiveProps(props) {
    this.src = location.href.indexOf('cart') > 0 ? 'cart' : 'product'
    if (this.src === 'cart') {
      this.setState({
        products: cartStore.products.filter(d => d.checked)
      })
    }
  }

  fetchProductDetail = () => {
    api.getProductDetail({
      productId: this.props.match.params.productId
    }).then(({ data }) => {
      data.data.productNum = this.props.match.params.productNum
      this.setState({
        products: [data.data]
      })
    })
  }

  fetchAddress = () => {
    api.getAddressList({
      userId: this.state.userId
    }).then(({ data }) => {
      this.setState({
        selectItem: data.data[0].addressId,
        addressList: data.data
      })
    })
  }

  handleBuy = () => {
    const { products } = this.state;
    if (products.length === 0) {
      message.info('未选中任何商品')
      return
    }
    this.props.history.push('/pay')
  }

  render() {
    const { addressList, selectItem, products } = this.state
    let total = 0
    products.forEach((d) => {
      total += (d.productNum * d.productPrice)
    })
    const addressComponent = addressList.map((d) => {
      if (d.addressId === selectItem) {
        return (
          <Col key={d.addressId} className="address-list" span={6} onClick={() => { this.setState({ selectItem: d.addressId }) }}>
            <div className="address-item address-list-active">
              <div>{`${d.addressProvince}${d.addressProvince} (${d.addressUserName} 收)`}</div>
              <div>{d.addressDetail}</div>
              <span className="select-icon">
                <Icon type="check-circle" />
              </span>
            </div>
          </Col>
        )
      }
      return (
        <Col key={d.addressId} className="address-list" span={6} onClick={() => { this.setState({ selectItem: d.addressId }) }}>
          <div className="address-item">
            <div>{`${d.addressProvince}${d.addressProvince} (${d.addressUserName} 收)`}</div>
            <div>{d.addressDetail}</div>
          </div>
        </Col>
      )
    })
    return (
      <div className="confirm">
        <h1>确认订单</h1>
        <Card>
          <h2>选择收货地址</h2>
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            {addressComponent}
          </Row>
          <h2>确认订单信息</h2>
          <Table
            locale={{
              emptyText: '暂无选中商品'
            }}
            bordered
            columns={this.columns}
            dataSource={products}
            rowKey="productId"
            pagination={false}
          />
          <div className="confirm-footer">
            <span className="count">总价： <span>{total}</span></span>
            <Button style={{ float: 'right' }} onClick={this.handleBuy}>购买</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default withRouter(Confirm);