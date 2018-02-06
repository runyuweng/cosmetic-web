import React from 'react';
import { Tabs } from 'antd'
import { Link } from 'react-router-dom';
import Tab1 from './tab/Tab1.jsx'
import Tab2 from './tab/Tab2.jsx'
import Tab3 from './tab/Tab3.jsx'

export default (props) => {
  const { data } = props
  return (
    <Tabs defaultActiveKey="1" onChange={() => {}}>
      <Tabs.TabPane tab="商品参数" key="1">
        <Tab1/>
      </Tabs.TabPane>
      <Tabs.TabPane tab="商品详情" key="2">
        <Tab2/>
      </Tabs.TabPane>
      <Tabs.TabPane tab="品牌详情" key="3">
        <Tab3/>
      </Tabs.TabPane>
    </Tabs>
  )
}