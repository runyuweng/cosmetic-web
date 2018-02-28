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
        name: 'brandName',
        label: '品牌名称：',
        layout,
      },
      {
        name: 'brandCountry',
        label: '国家：',
        layout,
      },
      {
        name: 'brandIsVerified',
        label: '是否认证：',
        render: (d, data) => (data.brandIsVerified === 1 ? '否' : '是'),
        layout,
      },
      {
        name: 'brandIntro',
        label: '品牌介绍：',
        layout,
      },
      {
        name: 'brandUrl',
        label: '品牌官网：',
        layout,
      },
    ]
  }

  render() {
    return (
      <div className="tab1">
        <Card>
          <DetailPageCreate dataStrcut={this.dataStrcut} data={this.props.data || []} />
        </Card>
      </div>
    )
  }
}

export default Tab;