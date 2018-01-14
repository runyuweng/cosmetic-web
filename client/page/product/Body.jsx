import React from 'react';
import { Tabs } from 'antd'
import { Link } from 'react-router-dom';

export default (props) => {
  const { data } = props
  return (
    <Tabs defaultActiveKey="1" onChange={() => {}}>
      <Tabs.TabPane tab="商品参数" key="1">
        
      </Tabs.TabPane>
      <Tabs.TabPane tab="商品详情" key="2">Content of Tab Pane 2</Tabs.TabPane>
      <Tabs.TabPane tab="品牌详情" key="3">Content of Tab Pane 3</Tabs.TabPane>
    </Tabs>
  )
}