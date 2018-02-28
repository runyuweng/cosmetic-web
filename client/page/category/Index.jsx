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
      categoryMapping: {},
      categoryId: props.location.pathname.split('/')[2],
      sortList: [],
      brandList: [],
    }
  }

  componentWillReceiveProps(props) {
    console.log(1111)
    this.setState({
      categoryId: props.location.pathname.split('/')[2],
    })
    this.freshSortList()
    this.freshBrandList()
  }

  componentDidMount() {
    api.getType().then(({ data }) => {
      const categoryMapping = {}
      data.data.forEach((d) => {
        categoryMapping[String(d.typeId)] = d.typeName
      })
      this.setState({
        categoryMapping
      })
    })
    this.freshSortList()
    this.freshBrandList()
    this.fetchList()
  }

  freshSortList = () => {
    api.getSort({
      typeId: this.state.categoryId
    }).then(({ data }) => {
      this.setState({
        sortList: data.data
      })
    })
  }

  freshBrandList = () => {
    api.getBrandList({
      typeId: this.state.categoryId
    }).then(({ data }) => {
      this.setState({
        brandList: data.data
      })
    })
  }

  fetchList = () => {

  }

  freshFormConfig = () => {
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
          options={
            this.state.brandList.map(d => ({
              label: d.brandName,
              value: d.brandId
            }))
          }
        />,
      },{
        opts: {
          initialValue: [],
        },
        name: '类型',
        props: { ...formItemLayout, label: '类型' },
        component: <Checkbox.Group
          options={
            this.state.sortList.map(d => ({
              label: d.sortName,
              value: d.sortId
            }))
          }
        />,
      }]
    }
  }

  render() {
    const { categoryMapping, categoryId } = this.state
    this.freshFormConfig()

    return (
      <div className="category">
        <div className="ant-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>{categoryMapping[categoryId] || '未知'}</Breadcrumb.Item>
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
