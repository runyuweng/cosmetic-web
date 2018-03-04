import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card, message, Input } from 'antd'
import Form from 'ant-form'
import api from '@client/utils/api'
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props);

    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 }
    }

    this.formConfig1 = {
      buttons: {
        props: {
          style: {
            float: 'right',
            marginTop: '50px',
          },
        },
        items: [{
          key: 'search',
          props: {
            type: 'primary',
            size: 'large',
            htmlType: 'submit',
          },
          text: '登录',
        }],
      },
      items: [{
        opts: {
          initialValue: [],
        },
        name: 'userMail',
        props: { ...formItemLayout, label: '邮件地址：' },
      },{
        opts: {
          initialValue: [],
        },
        name: 'userPwd',
        props: { ...formItemLayout, label: '密码：' },
        component: <Input type="password" />
      },]
    }

    this.formConfig2 = {
      buttons: {
        props: {
          style: {
            float: 'right',
            marginTop: '50px'
          },
        },
        items: [{
          key: 'search',
          props: {
            size: 'large',
            type: 'primary',
            htmlType: 'submit',
          },
          text: '注册',
        }],
      },
      items: [{
        opts: {
          initialValue: [],
        },
        name: 'userMail',
        props: { ...formItemLayout, label: '邮件地址：' },
      },{
        opts: {
          initialValue: [],
        },
        name: 'userPwd',
        props: { ...formItemLayout, label: '密码：' },
        component: <Input type="password" />
      },{
        opts: {
          initialValue: [],
        },
        name: 'userPwdConfirm',
        props: { ...formItemLayout, label: '确认密码：' },
        component: <Input type="password" />
      },]
    }
  }

  handleLogin = (err, values) => {
    if (err) {
      return
    }
    api.login(values).then(({ data }) => {
      if (data.code === 0) {
        message.success(data.msg)
        window.localStorage.setItem('userId', data.data.userId)
        this.props.history.push("/");
      } else {
        message.error(data.msg)
      }
    })
  }

  handleRegister = (err, values) => {
    if (values.userPwd !== values.userPwdConfirm) {
      message.error('两次密码输入不一致')
      return
    }
    if (err) {
      return
    }
    console.log(values)
    api.register(values).then(({ data }) => {
      if (data.code === 0) {
        message.success(data.msg)
      } else {
        message.error(data.msg)
      }
    })
  }

  render() {
    return (
      <div className="login">
        <h1>登录</h1>
        <Row gutter={48}>
          <Col className="gutter-row" span={12}>
            <Card>
              <h2>已注册用户</h2>
              <Form
                formConfig={this.formConfig1}
                onSubmit={this.handleLogin}
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={12}>
            <Card>
              <h2>新用户</h2>
              <Form
                formConfig={this.formConfig2}
                onSubmit={this.handleRegister}
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(Login);