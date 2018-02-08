import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table, InputNumber, Icon } from 'antd'
import DetailPageCreate from 'detail-page-create'
import './product.scss';

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="confirm">
        <h1>请付款</h1>
        <Card>
          <h2>选择付款方式</h2>
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
        </Card>
      </div>
    )
  }
}

export default Pay;