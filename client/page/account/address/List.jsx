import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table } from 'antd'
import Form from 'ant-form'
import api from '@client/utils/api'
import '../account.scss'

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.columns = [{
      title: '联系人',
      dataIndex: 'user.userName',
    }, {
      title: '联系方式',
      dataIndex: 'addressTel',
    }, {
      title: '省份',
      dataIndex: 'addressProvince',
    }, {
      title: '城市',
      dataIndex: 'addressCity',
    }, {
      title: '详细',
      dataIndex: 'addressDetail',
    }, {
      title: '操作',
      key: 'action',
      render: (text, r) => (
        <span>
          <Link to={`/account/address/edit/${r.addressId}`}>
            修改
          </Link>
        </span>
      ),
    }];
  }

  componentDidMount() {
    api.getAddressList({
      userId: this.props.userId
    }).then(({ data }) => {
      this.setState({
        data: data.data
      })
    })
  }

  render() {
    return (
      <div className="address">
        <Table
          pagination={false}
          columns={this.columns}
          dataSource={this.state.data}
          locale={{
            emptyText: '暂无数据'
          }}
        />
        <Link to={`/account/address/add/${this.props.userId}`}>
          <Button style={{marginTop: '20px'}}>新增</Button>
        </Link>
      </div>
    )
  }
}

export default Address;