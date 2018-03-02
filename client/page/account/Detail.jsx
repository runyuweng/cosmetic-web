import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash'
import { message } from 'antd'
import Form from 'ant-form'
import DetailPageCreate from 'detail-page-create'
import api from '@client/utils/api'
import './account.scss'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      data: {
        name: 'wry',
        mail: '11@11.com',
        tel: '111111',
        birth: '1995.12.1',
      },
    }
  }

  componentDidMount() {
    api.getUserDetail({
      userId: this.props.userId
    }).then(({ data }) => {
      this.setState({
        data: data.data
      })
    })
  }

  freshForm = () => {
    const { data } = this.state

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 10 }
    }

    this.formConfig = {
      buttons: {
        props: {
          style: {
            marginLeft: '220px'
          },
        },
        items: [{
          key: 'search',
          props: {
            type: 'primary',
            size: 'large',
            htmlType: 'submit',
          },
          text: '修改',
        }],
      },
      items: [{
        opts: {
          initialValue: data.userName,
        },
        name: 'userName',
        props: { ...formItemLayout, label: '用户名：' },
      },{
        opts: {
          initialValue: data.userMail
        },
        name: 'userMail',
        props: { ...formItemLayout, label: '邮件地址：' },
      },{
        opts: {
          initialValue: data.userTel
        },
        name: 'userTel',
        props: { ...formItemLayout, label: '电话：' },
      },{
        opts: {
          initialValue: data.userBirth
        },
        name: 'userBirth',
        props: { ...formItemLayout, label: '生日' },
      },]
    }
  }

  freshData = () => {
    const layout = {
      labelCol: 1,
      contentCol: 23,
    }
    this.dataStrcut = [
      {
        name: 'userName',
        label: '姓名：',
        layout,
      },
      {
        name: 'userMail',
        label: '邮箱：',
        layout,
      },
      {
        name: 'userTel',
        label: '电话：',
        layout,
      },
      {
        name: 'userBirth',
        label: '生日：',
        layout,
      },
    ]
  }

  handleSubmit = (err, values) => {
    console.log(err || values)
    const isEqual = _.isEqual(values, this.state.data)
    if (err) {
      return
    }
    if (isEqual) {
      message.info('未修改字段，请修改后提交')
      return
    }
    api.editUserDetail({
      userId: this.props.userId,
      ...values
    }).then(({ data }) => {
      if (data.code === 0) {
        this.setState({
          data: data.data
        })
        message.success('修改成功')
      }
    })
  }

  render() {
    this.freshForm()
    this.freshData()
    const {showForm} = this.state;
    return (
      <div className="detail">
        {this.state.showForm ? (
          <Form
            formConfig={this.formConfig}
            onSubmit={this.handleSubmit}
          />
        ) : (
          <DetailPageCreate dataStrcut={this.dataStrcut} data={this.state.data} />
        )}
        <span
          className="modify"
          onClick={()=>{
            this.setState({
              showForm: !showForm
            })
          }}
        >{showForm ? '返回' : '修改'}</span>        
      </div>
    )
  }
}

export default Detail;