import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table } from 'antd'
import DetailPageCreate from 'detail-page-create'

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
      },
    }
  }

  render() {
    return (
      <div className="tab2">
        <Card>
          <div className="img-block"></div>
          <div className="img-block"></div>
          <div className="img-block"></div>
        </Card>
      </div>
    )
  }
}

export default Tab;