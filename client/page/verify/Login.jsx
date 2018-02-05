import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Input } from 'antd'
import Form from 'ant-form'
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    }

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
        name: '邮件地址',
        props: { ...formItemLayout, label: '邮件地址：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '密码',
        props: { ...formItemLayout, label: '密码：' },
        component: <Input type="password"/>
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
        name: '邮件地址',
        props: { ...formItemLayout, label: '邮件地址：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '密码',
        props: { ...formItemLayout, label: '密码：' },
        component: <Input type="password"/>
      },{
        opts: {
          initialValue: [],
        },
        name: '确认密码',
        props: { ...formItemLayout, label: '确认密码：' },
        component: <Input type="password"/>
      },]
    }
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
                onSubmit={(err, values) => { console.log(err || values) }}
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={12}>
            <Card>
              <h2>新用户</h2>              
              <Form
                formConfig={this.formConfig2}
                onSubmit={(err, values) => { console.log(err || values) }}
              />
            </Card>
          </Col>
      </Row>
        
      </div>
    )
  }
}

export default Login;