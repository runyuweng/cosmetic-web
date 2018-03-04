import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash'
import { message, Col, Card, Checkbox, Button, Table, Input } from 'antd'
import Form from 'ant-form'
import api from '@client/utils/api'
import '../account.scss'

class AddressEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      addressId: props.match.params.addressId || '',
      userId: props.match.params.userId || ''
    }

    this.isEdit = props.location.pathname.indexOf('edit')>=0
  }

  componentDidMount() {
    if (this.isEdit) {
      api.getAddressItem({
        addressId: this.state.addressId
      }).then(({ data }) => {
        this.setState({
          data: data.data
        })
      })
    }
  }

  freshFrom = () => {
    const { data } = this.state
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
          rules: [{ required: true, message: '请输入联系人' }],
          initialValue: data.addressUserName
        },
        name: 'addressUserName',
        props: { ...formItemLayout, label: '联系人：' },
      },{
        opts: {
          rules: [{ required: true, message: '请输入联系人电话' }],
          initialValue: data.addressTel
        },
        name: 'addressTel',
        props: { ...formItemLayout, label: '联系人电话：' },
      },{
        opts: {
          rules: [{ required: true, message: '请输入省份' }],
          initialValue: data.addressProvince
        },
        name: 'addressProvince',
        props: { ...formItemLayout, label: '省份' },
      },{
        opts: {
          rules: [{ required: true, message: '请输入城市' }],
          initialValue: data.addressCity
        },
        name: 'addressCity',
        props: { ...formItemLayout, label: '城市：' },
      },{
        opts: {
          rules: [{ required: true, message: '请输入详细地址' }],
          initialValue: data.addressDetail
        },
        name: 'addressDetail',
        props: { ...formItemLayout, label: '详细地址：' },
      },{
        opts: {
          rules: [{ required: true, message: '请输入邮编' }],
          initialValue: data.addressCode
        },
        name: 'addressCode',
        props: { ...formItemLayout, label: '邮编：' },
      },]
    }
  }

  handleSubmit = (err, values) => {
    if (err) {
      return
    }
    if (this.isEdit) {
      const newData = _.cloneDeep(this.state.data)
      delete newData.userId
      delete newData.addressId
      const isEqual = _.isEqual(values, newData)
      console.log(values, newData)
      if (err) {
        return
      }
      if (isEqual) {
        message.info('未修改字段，请修改后提交')
        return
      }
      api.editAddress({
        ...values
      }).then(({ data }) => {
        if (data.code === 0) {
          message.success('修改成功')
          this.props.history.push("/account/2");
        }
      })
    } else {
      api.addAddress({
        userId: this.state.userId,
        ...values
      }).then(({ data }) => {
        if (data.code === 0) {
          message.success('创建成功')
          this.props.history.push("/account/2");
        }
      })
    }
  }

  render() {
    this.freshFrom()

    return (
      <div className="addressEdit">
        <Card>
          <h2>
            {this.isEdit ? '修改地址' : '新增地址'}
          </h2>
          <Form
            formConfig={this.formConfig}
            onSubmit={this.handleSubmit}
          />
        </Card>
      </div>
    )
  }
}

export default withRouter(AddressEdit);