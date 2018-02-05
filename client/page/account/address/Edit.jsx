import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table, Input } from 'antd'
import Form from 'ant-form'
import '../account.scss'

class AddressEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.isEdit = props.location.pathname.indexOf('edit')>=0

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 }
    }

    this.formConfig = {
      buttons: {
        props: {
          style: {
            marginLeft: '180px'
          },
        },
        items: [{
          key: 'search',
          props: {
            type: 'primary',
            size: 'large',
            htmlType: 'submit',
          },
          text: this.isEdit ? '修改' : '新增',
        }],
      },
      items: [{
        opts: {
          initialValue: [],
        },
        name: '联系人',
        props: { ...formItemLayout, label: '联系人：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '联系人电话',
        props: { ...formItemLayout, label: '联系人电话：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '城市',
        props: { ...formItemLayout, label: '城市：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '详细地址',
        props: { ...formItemLayout, label: '详细地址：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '邮编',
        props: { ...formItemLayout, label: '邮编：' },
      },]
    }
  }

  render() {
    return (
      <div className="addressEdit">
        <Card>
          <h2>
            {this.isEdit ? '修改地址' : '新增地址'}
          </h2>
          <Form
            formConfig={this.formConfig}
            onSubmit={(err, values) => { console.log(err || values) }}
          />
        </Card>
      </div>
    )
  }
}

export default AddressEdit;