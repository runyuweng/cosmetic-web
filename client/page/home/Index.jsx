import React, { Component } from 'react';
import { Breadcrumb, Card, Carousel } from 'antd'
import api from '@client/utils/api'
import Section from './Section.jsx'

import './home.scss'

class HomeIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
 
  }

  onChange = (a, b, c) => {
    console.log(a, b, c);
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="home">
        <Carousel afterChange={this.onChange}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <Card style={{ margin: '20px' }}>
          <Section />
        </Card>
        <Card style={{ margin: '20px' }}>
          <Section />
        </Card>
        <Card style={{ margin: '20px' }}>
          <Section />
        </Card>
      </div>
    );
  }
}

export default HomeIndex;
