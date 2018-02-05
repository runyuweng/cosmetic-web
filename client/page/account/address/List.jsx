import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table } from 'antd'
import Form from 'ant-form'
import '../account.scss'

class Address extends Component {
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
      title: '联系人',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '联系方式',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to="/account/address/edit">
            修改
          </Link>
        </span>
      ),
    }];
  }

  render() {
    return (
      <div className="address">
        <Table
          pagination={false}
          columns={this.columns}
          dataSource={this.state.data}
        />
        <Link to="/account/address/add">
          <Button style={{marginTop: '20px'}}>新增</Button>
        </Link>
      </div>
    )
  }
}

export default Address;