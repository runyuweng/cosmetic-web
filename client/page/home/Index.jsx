import React, { Component } from 'react';
import { Breadcrumb, Card, Carousel } from 'antd'
import { Link } from 'react-router-dom'
import api from '@client/utils/api'
import Section from './Section.jsx'

import './home.scss'

class HomeIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      data: {},
    }
  }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = () => {
    api.getType().then(({ data }) => {
      this.setState({
        types: data.data
      })
    })
  }

  onChange = (a, b, c) => {
    console.log(a, b, c);
  }

  render() {
    const { types } = this.state
    return (
      <div className="home">
        <Carousel afterChange={this.onChange}>
          <div className="banner">
            <img src="/static/img/banner1.jpg" alt="" />
            <div className="banner-right">
              <h1>SK-II 明星产品</h1>
              <h1>开启晶莹剔透第一步</h1>
              <Link to="/product/33">
                <div className="banner-btn">
                  立即购买
                </div>
              </Link>
            </div>
          </div>
          <div className="banner">
            <img src="/static/img/banner2.jpg" alt="" />
            <div className="banner-right">
              <h1>光蕴肌因美白系列</h1>
              <h1>重透净白光蕴</h1>
              <Link to="/product/32">
                <div className="banner-btn">
                  立即购买
                </div>
              </Link>
            </div>
          </div>
        </Carousel>
        {types.map(d => (
          <Card key={d.typeId} style={{ margin: '20px' }}>
            <Section data={d} />
          </Card>
        ))}
      </div>
    );
  }
}

export default HomeIndex;
