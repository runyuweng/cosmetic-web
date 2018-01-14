import React from 'react'
import { Link } from 'react-router-dom'
import { Select, InputNumber } from 'antd'
import Form from 'ant-form'


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 }
    }

    this.formConfig = {
      formProps: {
        // layout: 'inline'
      },
      buttons: {
        items: [{
          key: 'addcart',
          props: {
            type: 'primary',
            htmlType: 'submit',
            style: { margin: '10px 0 0 10px', background: '#f10180', border: '1px solid #f10180' },
          },
          text: '加入购物车',
        },{
          key: 'bug',
          props: {
            type: 'primary',
            htmlType: 'submit',
            style: { marginLeft: '10px', background: '#f10180', border: '1px solid #f10180' },
          },
          text: '购买',
        }],
      },
      items: [{
        opts: {
          initialValue: [],
        },
        name: 'location',
        props: { ...formItemLayout, label: '地区' },
        component: (
          <Select>
            <Select.Option value="1">1</Select.Option>
          </Select>
        ),
      },{
        opts: {
          initialValue: [],
        },
        name: 'sale',
        props: { ...formItemLayout, label: '销量' },
        component: <span>---</span>,
      },{
        opts: {
          initialValue: [],
        },
        name: 'amount',
        props: { ...formItemLayout, label: '数量' },
        component: <InputNumber min={1} />,
      },]
    }
  }

  render() {
    return (
      <div className="product-header">
        <div className="product-title">
          <span>product title</span>
        </div>
        <div className="product-header-block">
          <div className="product-header-block-left">
          1
          </div>
          <div className="product-header-block-right">

            <div className="product-header-block-detail">
              <div className="product-price">
                <span>¥</span>
                <span>0.00</span>
              </div>
              <div className="product-discount">
                <span>优惠</span>
                <span>----</span>
              </div>
            </div>

            <div className="product-header-block-form">
              <Form
                formConfig={this.formConfig}
                onSubmit={(err, values) => { console.log(err || values) }}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }
}