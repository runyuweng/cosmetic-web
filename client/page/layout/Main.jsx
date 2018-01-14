import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import HomeIndex from '@client/page/home/Index.jsx';
import CategoryList from '@client/page/category/Index.jsx';
import ProductIndex from '@client/page/product/Index.jsx';
import './Main.css';

const menuDataStruct = [
  {
    id: 1,
    name: '首页',
    pathName: '/',
  },
  {
    id: 2,
    name: '女士护肤',
    pathName: '/category/1',
  },
  {
    id: 3,
    name: '彩妆',
  },
  {
    id: 4,
    name: '男士护肤',
  },
  {
    id: 5,
    name: '个人护理',
  },
  {
    id: 6,
    name: '美容工具',
  },
]

const pathMapping = {
  '/': '1',
  '/category/1': '2',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: pathMapping[props.location.pathname] || '1',
    }
  }

  handleClick = (value) => {
    this.setState({
      current: value.key,
    })
  }

  render() {
    const menuContent = menuDataStruct.map(d =>
      <Menu.Item
        key={d.id}
      >
        <Link to={d.pathName || '/'}>{d.name}</Link>
      </Menu.Item>)

    return (
      <Layout className="layout">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {menuContent}
        </Menu>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
            <Route path="/category/:id" component={CategoryList} />
            <Route path="/product/:id" component={ProductIndex} />
          </Switch>
        </Layout>
      </Layout>
    )
  }
}

export default App;