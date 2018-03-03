import React, { Component } from 'react';
import { Breadcrumb, Card, Carousel } from 'antd'
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
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
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
