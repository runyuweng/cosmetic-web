import React from 'react'
import { withRouter } from 'react-router-dom'
import { message, InputNumber } from 'antd'
import Form from 'ant-form'
import cartStore from '@client/utils/store'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  freshForm = () => {
    const { data } = this.props

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
            onClick: this.handleAddCart,
            type: 'primary',
            style: { margin: '10px 0 0 10px', background: '#f10180', border: '1px solid #f10180' },
          },
          text: '加入购物车',
        },{
          key: 'buy',
          props: {
            type: 'primary',
            htmlType: 'submit',
            style: { marginLeft: '10px', background: '#f10180', border: '1px solid #f10180' },
          },
          text: '购买',
        }],
      },
      items: [{
        name: 'productAmount',
        props: { ...formItemLayout, label: '销量' },
        component: <span>{data.productAmount || 0}</span>,
      },{
        name: 'productAbundance',
        props: { ...formItemLayout, label: '库存' },
        component: <span>{data.productAbundance || 0}</span>,
      },{
        opts: {
          initialValue: 1
        },
        name: 'productNum',
        props: { ...formItemLayout, label: '数量' },
        component: <InputNumber min={1} />,
      },]
    }
  }

  handleAddCart = () => {
    const { data } = this.props
    const productNum = this.form.getFieldValue('productNum')
    const item = {
      checked: false,
      productId: data.productId,
      productName: data.productName,
      productPrice: data.productPrice,
      productNum,
    }
    cartStore.addProduct(item)
    message.success('添加购物车成功')
  }

  handleSubmit = (err, values) => {
    if (err) {
      return
    }
    const { data } = this.props
    this.props.history.push(`/confirm/product/${data.productId}/${values.productNum}`);
  }

  render() {
    this.freshForm()
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
                <span>{data.productDiscount || '暂无'}</span>
              </div>
            </div>

            <div className="product-header-block-form">
              <Form
                ref={(form) => { this.form = form }}
                formConfig={this.formConfig}
                onSubmit={this.handleSubmit}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);