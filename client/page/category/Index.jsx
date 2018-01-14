import React, { Component } from 'react';
import { Breadcrumb, Card, Checkbox, Radio, Pagination } from 'antd'
import api from '@client/utils/api'
import Form from 'ant-form'
import List from './List.jsx'

import './category.scss'

class CategoryIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brandList: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
      ],
    }

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 }
    }

    this.formConfig = {
      formProps: {
        // layout: 'inline'
      },
      buttons: {
        props: {
          style: { marginLeft: '180px' },
        },
        items: [{
          key: 'search',
          props: {
            type: 'primary',
            htmlType: 'submit',
          },
          text: '搜一搜',
        }],
      },
      items: [{
        opts: {
          initialValue: [],
        },
        name: 'brand',
        props: { ...formItemLayout, label: '品牌' },
        component: <Checkbox.Group
          options={this.state.brandList}
        />,
      },{
        opts: {
          initialValue: [],
        },
        name: '类型',
        props: { ...formItemLayout, label: '类型' },
        component: <Checkbox.Group
          options={
            [
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' },
            ]
          }
        />,
      },{
        opts: {
          initialValue: '1',
        },
        name: '性别',
        props: { ...formItemLayout, label: '性别' },
        component: (
          <Radio.Group>
            <Radio value="1">不限</Radio>
            <Radio value="2">男</Radio>
            <Radio value="3">女</Radio>
          </Radio.Group>
        ),
      },]
    }
  }

  componentDidMount() {
 
  }

  render() {
    return (
      <div className="category">
        <div className="ant-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>类型</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card style={{ margin: '20px' }}>
          <Form
            formConfig={this.formConfig}
            onSubmit={(err, values) => { console.log(err || values) }}
          />
          <List />
          <div
            className="ant-container"
            style={{ textAlign: 'right', marginTop: '20px' }}
          >
            <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={() => {}} />
          </div>
        </Card>
      </div>
    );
  }
}

export default CategoryIndex;
