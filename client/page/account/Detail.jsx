import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Input, Collapse, Button } from 'antd'
import Form from 'ant-form'
import DetailPageCreate from 'detail-page-create'
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
          initialValue: [],
        },
        name: '用户名',
        props: { ...formItemLayout, label: '用户名：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '邮件地址',
        props: { ...formItemLayout, label: '邮件地址：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '电话',
        props: { ...formItemLayout, label: '电话：' },
      },{
        opts: {
          initialValue: [],
        },
        name: '密码',
        props: { ...formItemLayout, label: '密码：' },
        component: <Input type="password"/>
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
        name: 'name',
        label: '姓名：',
        layout,
      },
      {
        name: 'mail',
        label: '邮箱：',
        layout,
      },
      {
        name: 'tel',
        label: '电话：',
        layout,
      },
      {
        name: 'birth',
        label: '生日：',
        layout,
      },
    ]
  }

  render() {
    this.freshData()
    const {showForm} = this.state;
    return (
      <div className="detail">
        {this.state.showForm ? (
          <Form
            formConfig={this.formConfig}
            onSubmit={(err, values) => { console.log(err || values) }}
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