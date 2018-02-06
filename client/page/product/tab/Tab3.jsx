import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Button, Table } from 'antd'
import DetailPageCreate from 'detail-page-create'

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: 'wry',
        mail: '11@11.com',
        tel: '111111',
        birth: '1995.12.1',
      },
    }
  }

  freshData = () => {
    const layout = {
      labelCol: 2,
      contentCol: 22,
    }
    this.dataStrcut = [
      {
        name: 'name',
        label: '品牌名称：',
        layout,
      },
      {
        name: 'mail',
        label: '国家：',
        layout,
      },
      {
        name: 'tel',
        label: '是否认证：',
        layout,
      },
      {
        name: 'birth',
        label: '品牌介绍：',
        layout,
      },
      {
        name: 'length',
        label: '品牌官网：',
        layout,
      },
    ]
  }

  render() {
    this.freshData()
    return (
      <div className="tab1">
        <Card>
          <DetailPageCreate dataStrcut={this.dataStrcut} data={this.state.data} />
        </Card>
      </div>
    )
  }
}

export default Tab;