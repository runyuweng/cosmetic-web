import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import api from '@client/utils/api'

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }
  componentWillReceiveProps(props) {
    this.fetchData(props)
  }

  fetchData = (props) => {
    const { data } = props || this.props
    data && data.typeId && api.getIndexProduct({
      typeId: data.typeId
    }).then(({ data }) => {
      this.setState({
        products: data.data
      })
    })
  }

  dataFormat = (product, attr) => ((product && product[attr]) || '----')

  render() {
    const { products } = this.state
    const { data = {} } = this.props
    return (
      <div className="section-portrait-list">
        <div className="section-portrait-title">
          <span>{data.typeName}</span>
        </div>
        <ul>
          <Link to={ products[0] ? `/product/${products[0].productId}` : '/'}>
            <li className="section-portrait-list-cell-1 section-portrait-list-cell">
              <img src={`/static/img/${products[0] && products[0].img.imgUrl}`} alt=""/>            1
            </li>
          </Link>
          <Link to={ products[1] ? `/product/${products[1].productId}` : '/'}>
            <li className="section-portrait-list-cell-2 section-portrait-list-cell">
              <div className="section-portrait-list-cell-img">
                <img src={`/static/img/${products[1] && products[1].img.imgUrl}`} alt=""/>
              </div>
            </li>
          </Link>
          <Link to={ products[2] ? `/product/${products[2].productId}` : '/'}>
            <li className="section-portrait-list-cell-3 section-portrait-list-cell">
              <div className="section-portrait-list-cell-img">
                <img src={`/static/img/${products[2] && products[2].img.imgUrl}`} alt=""/>
              </div>
            </li>
          </Link>
          <Link to={ products[3] ? `/product/${products[3].productId}` : '/'}>
            <li className="section-portrait-list-cell-4 section-portrait-list-cell">
              <div className="section-portrait-list-cell-img">
                <img src={`/static/img/${products[3] && products[3].img.imgUrl}`} alt=""/>              
              </div>
              <div className="section-portrait-list-cell-info">
                <div className="package-item-title">
                  <span>{this.dataFormat(products[3], 'productName')}</span>
                </div>
                <div className="package-item-price">
                  <span>{`¥ ${this.dataFormat(products[3], 'productPrice')}`}</span>
                </div>
              </div>
            </li>
          </Link>
          <Link to={ products[4] ? `/product/${products[4].productId}` : '/'}>
            <li className="section-portrait-list-cell-5 section-portrait-list-cell">
              <div className="section-portrait-list-cell-img">
                <img src={`/static/img/${products[4] && products[4].img.imgUrl}`} alt=""/>
              </div>
              <div className="section-portrait-list-cell-info">
                <div className="package-item-title">
                  <span>{this.dataFormat(products[4], 'productName')}</span>
                </div>
                <div className="package-item-price">
                  <span>{`¥ ${this.dataFormat(products[4], 'productPrice')}`}</span>
                </div>
              </div>
            </li>
          </Link>
          <Link to={ products[5] ? `/product/${products[5].productId}` : '/'}>
            <li className="section-portrait-list-cell-6 section-portrait-list-cell">
              <div className="section-portrait-list-cell-img">
                <img src={`/static/img/${products[5] && products[5].img.imgUrl}`} alt=""/>              
              </div>
              <div className="section-portrait-list-cell-info">
                <div className="package-item-title">
                  <span>{this.dataFormat(products[5], 'productName')}</span>
                </div>
                <div className="package-item-price">
                  <span>{`¥ ${this.dataFormat(products[5], 'productPrice')}`}</span>
                </div>
              </div>
            </li>
          </Link>
        </ul>
        <div className="section-portrait-more">
          <Link to={`/category/${data.typeId}`}>查看更多</Link>
        </div>
      </div>
    )
  }

}