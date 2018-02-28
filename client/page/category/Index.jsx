import React, { Component } from 'react';
import { Breadcrumb, Card, Checkbox, Radio, Pagination } from 'antd'
import { Link } from 'react-router-dom';
import api from '@client/utils/api'
import Form from 'ant-form'

import './category.scss'

class CategoryIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryMapping: {},
      typeId: props.match.params.typeId,
      sortList: [],
      brandList: [],
      sortIds: [],
      brandIds: [],
      dataList: []
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      typeId: props.match.params.typeId
    }, () => {
      this.freshSortList()
      this.freshBrandList()
      this.fetchList()
      this.cleanForm()
    })
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

  cleanForm = () => {
    this.form.setFieldsValue({ 'sortIds': [] })
    this.form.setFieldsValue({ 'brandIds': [] })
  }

  freshSortList = () => {
    api.getSort({
      typeId: this.state.typeId
    }).then(({ data }) => {
      this.setState({
        sortList: data.data
      })
    })
  }

  freshBrandList = () => {
    api.getBrandList({
      typeId: this.state.typeId
    }).then(({ data }) => {
      this.setState({
        brandList: data.data
      })
    })
  }

  fetchList = () => {
    const {
      sortIds,
      brandIds,
      typeId
    } = this.state;
    api.getProductList({
      typeId: typeId,
      sortIds,
      brandIds
    }).then(({ data }) => {
      this.setState({
        dataList: data.data
      })
    })
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
        name: 'brandIds',
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
        name: 'sortIds',
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

  handleSubmit = (err, values) => {
    if (err) {
      return
    }
    const {
      sortIds = [],
      brandIds = []
    } = values
    if (sortIds.length === 0 && brandIds.length === 0) {
      return
    }
    this.setState({
      sortIds,
      brandIds
    }, () => {
      this.fetchList()
    })
  }

  render() {
    const { categoryMapping, typeId, dataList } = this.state
    this.freshFormConfig()

    return (
      <div className="category">
        <div className="ant-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>{categoryMapping[typeId] || '未知'}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card style={{ margin: '20px' }}>
          <Form
            ref={(form) => { this.form = form }}
            formConfig={this.formConfig}
            onSubmit={this.handleSubmit}
          />
          <div className="category-list">
            {dataList.map(d => (
              <Link to='/product/1' key={d.productId}>
                <div className="category-list-item">
                  <div className="category-list-item-img">
                    <img src={`/static/img/${d.img.imgUrl}`} alt="" />
                  </div>
                  <div className="category-list-item-info">
                    <div className="package-item-title">{d.productName}</div>
                    <div className="package-item-price">{`¥ ${d.productPrice}`}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
