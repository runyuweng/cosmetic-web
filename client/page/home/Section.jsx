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
          <li className="section-portrait-list-cell-1 section-portrait-list-cell">
            <img src={`/static/img/${products[0] && products[0].img.imgUrl}`} alt=""/>            1
          </li>
          <li className="section-portrait-list-cell-2 section-portrait-list-cell">
            <div className="section-portrait-list-cell-img">
              <img src={`/static/img/${products[1] && products[1].img.imgUrl}`} alt=""/>
            </div>
            <div className="section-portrait-list-cell-info">
              <div className="package-item-title">
                <span>{this.dataFormat(products[1], 'productName')}</span>
              </div>
              <div className="package-item-price">
                <span>{`¥ ${this.dataFormat(products[1], 'productPrice')}`}</span>
              </div>
            </div>
          </li>
          <li className="section-portrait-list-cell-3 section-portrait-list-cell">
            <div className="section-portrait-list-cell-img">3</div>
            <div className="section-portrait-list-cell-info">
              <div className="package-item-title">
                <span>----</span>
              </div>
              <div className="package-item-price">
                <span>----</span>
              </div>
            </div>
          </li>
          <li className="section-portrait-list-cell-4 section-portrait-list-cell">
            <div className="section-portrait-list-cell-img">4</div>
            <div className="section-portrait-list-cell-info">
              <div className="package-item-title">
                <span>----</span>
              </div>
              <div className="package-item-price">
                <span>----</span>
              </div>
            </div>
          </li>
          <li className="section-portrait-list-cell-5 section-portrait-list-cell">
            <div className="section-portrait-list-cell-img">5</div>
            <div className="section-portrait-list-cell-info">
              <div className="package-item-title">
                <span>----</span>
              </div>
              <div className="package-item-price">
                <span>----</span>
              </div>
            </div>
          </li>
          <li className="section-portrait-list-cell-6 section-portrait-list-cell">
            <div className="section-portrait-list-cell-img">6</div>
            <div className="section-portrait-list-cell-info">
              <div className="package-item-title">
                <span>----</span>
              </div>
              <div className="package-item-price">
                <span>----</span>
              </div>
            </div>
          </li>
        </ul>
        <div className="section-portrait-more">
          <Link to={`/category/${data.typeId}`}>查看更多</Link>
        </div>
      </div>
    )
  }

}