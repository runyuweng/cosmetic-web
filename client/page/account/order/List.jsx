import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Input, Table } from 'antd'
import Form from 'ant-form'
import '../account.scss'

class Order extends Component {
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
      title: '订单编号',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '时间',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '物品',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Link to="/account/order">查看详情</Link>
      ),
    }];
  }

  render() {
    return (
      <div className="order">
        <Table
          columns={this.columns}
          dataSource={this.state.data}
        />
      </div>
    )
  }
}

export default Order;