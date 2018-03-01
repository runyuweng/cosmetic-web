import React, { Component, PropTypes } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table, InputNumber, Icon } from 'antd'
import DetailPageCreate from 'detail-page-create'
import cartStore from '@client/utils/store'
import './product.scss';

class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.match.params.src,
      data: []
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
          defaultValue={t}
          onChange={() => {

          }}
        />
      )
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          删除
        </span>
      ),
    }];
  }

  componentDidMount() {
    const { src } = this.state
    console.log(this.state.src)
    if (src === 'cart') {
      this.setState({
        data: cartStore.products.filter(d => d.checked)
      })
    }
  }

  render() {
    return (
      <div className="confirm">
        <h1>确认订单</h1>
        <Card>
          <h2>选择收货地址</h2>
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Col className="address-list" span={6}>
              <div className="address-item address-list-active">
                <div>湖北武汉 （翁润雨 收）</div>
                <div>洪山区。。。。</div>
                <span className="select-icon">
                  <Icon type="check-circle" />
                </span>
              </div>
            </Col>
            <Col className="address-list" span={6}>
              <div className="address-item">
                <div>湖北武汉 （翁润雨 收）</div>
                <div>洪山区。。。。</div>
              </div>
            </Col>
            <Col className="address-list" span={6}>
              <div className="address-item">
                <div>湖北武汉 （翁润雨 收）</div>
                <div>洪山区。。。。</div>
              </div>
            </Col>
            <Col className="address-list" span={6}>
              <div className="address-item">
                <div>湖北武汉 （翁润雨 收）</div>
                <div>洪山区。。。。</div>
              </div>
            </Col>
          </Row>
          <h2>确认订单信息</h2>
          <Table
            locale={{
              emptyText: '暂无选中商品'
            }}
            bordered
            columns={this.columns}
            dataSource={this.state.data}
            rowKey="productId"
            pagination={false}
          />
          <div className="confirm-footer">
            <span className="count">总价： <span>222</span></span>
            <Button style={{ float: 'right' }} onClick={() => {
              this.props.history.push("/pay");
            }}>购买</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default withRouter(Confirm);