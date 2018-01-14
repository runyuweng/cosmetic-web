import React, { Component } from 'react';
import { Breadcrumb, Card, Carousel } from 'antd'
import api from '@client/utils/api'
import './home.css'

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
    console.log(a, b);
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
        <Card>
          <div className="section-portrait-list">
            <ul>
              <li className="section-portrait-list-cell-1">
                1
              </li>
              <li className="section-portrait-list-cell-1">
                2
              </li>
              <li className="section-portrait-list-cell-1">
                3
              </li>
              <li className="section-portrait-list-cell-1">
                4
              </li>
              <li className="section-portrait-list-cell-1">
                5
              </li>
              <li className="section-portrait-list-cell-1">
                6
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }
}

export default HomeIndex;
