import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table, InputNumber, Icon } from 'antd'
import DetailPageCreate from 'detail-page-create'
import './product.scss';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }]
    }

    this.columns = [{
      title: '选中',
      dataIndex: 'select',
      key: 'select',
      render: () => <Checkbox />
    },{
      title: '商品名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '价格',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '件数',
      dataIndex: 'age',
      key: 'age',
      render: () => (
        <InputNumber min={1} max={10} defaultValue={3} onChange={()=>{}} />
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
          <Table bordered columns={this.columns} dataSource={this.state.data} pagination={false} />
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