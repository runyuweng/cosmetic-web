import React from 'react'
import { withRouter } from 'react-router-dom'
import { Select, InputNumber } from 'antd'
import Form from 'ant-form'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    const formItemLayout = {
      labelCol: { span: 4 },
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
        name: 'sale',
        props: { ...formItemLayout, label: '销量' },
        component: <span>---</span>,
      },{
        opts: {
          initialValue: 1
        },
        name: 'amount',
        props: { ...formItemLayout, label: '数量' },
        component: <InputNumber min={1} />,
      },]
    }
  }

  render() {
    const { data = {} } = this.props
    return (
      <div className="product-header">
        <div className="product-title">
          <span>{data.productName}</span>
        </div>
        <div className="product-header-block">
          <div className="product-header-block-left">
            { data.img && <img src={`/static/img/${data.img.imgUrl}`} alt="" /> }
          </div>
          <div className="product-header-block-right">

            <div className="product-header-block-detail">
              <div className="product-price">
                <span>¥</span>
                <span>{data.productPrice}</span>
              </div>
              <div className="product-discount">
                <span>优惠</span>
                <span>----</span>
              </div>
            </div>

            <div className="product-header-block-form">
              <Form
                formConfig={this.formConfig}
                onSubmit={(err, values) => {
                  this.props.history.push("/confirm");
                }}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);