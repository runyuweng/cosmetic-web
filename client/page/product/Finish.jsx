import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Checkbox, Button, Table, InputNumber, Icon } from 'antd'
import DetailPageCreate from 'detail-page-create'
import './product.scss';

class Finish extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="finish">
        <h1>交易完成</h1>
        <Card>
          <div className="finish-img">
            <img src="/static/img/success.png" alt="" />
          </div>
          <div className="finish-btn">
            <Link to='/account/3'><Button type="primary">查看订单</Button></Link>
            <Link to='/'><Button type="primary">继续购买</Button></Link>
          </div>
        </Card>
      </div>
    )
  }
}

export default Finish;