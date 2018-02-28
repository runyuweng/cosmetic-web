import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table } from 'antd'
import DetailPageCreate from 'detail-page-create'

class Tab extends Component {
  constructor(props) {
    super(props);
    const layout = {
      labelCol: 2,
      contentCol: 10,
    }
    this.dataStrcut = [
      {
        name: 'productId',
        label: '商品编号：',
        layout,
      },
      {
        name: 'productName',
        label: '商品名称：',
        layout,
      },
      {
        name: 'productSeason',
        label: '适用季节：',
        layout,
      },
      {
        name: 'productApplicant',
        label: '适用人群：',
        layout,
      },
    ]
  }

  render() {
    return (
      <div className="tab1">
        <Card>
          <DetailPageCreate dataStrcut={this.dataStrcut} data={this.props.data || {}} />
        </Card>
      </div>
    )
  }
}

export default Tab;