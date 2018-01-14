import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import HomeIndex from '@client/page/home/Index.jsx';
import './Main.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menuDataStruct = [
  {
    id: 1,
    name: '首页',
    pathName: '/',
  },
  {
    id: 2,
    name: '女士护肤',
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    }
  }

  render() {
    const menuContent = menuDataStruct.map(d =>
      <SubMenu
        key={d.id} 
        title={
          <span>
            { d.type ? <Icon type={d.type || 'user'} /> : null }
            { d.name }
          </span>
        }
      >
        {d.child ? d.child.map(t => (
          <Menu.Item key={t.id}>
            <Link to={t.pathName || '/'}>
              {t.name}
            </Link>
          </Menu.Item>
        )) : null}
      </SubMenu>)

    return (
      <Layout className="layout">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
        >
          {menuContent}
        </Menu>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
          </Switch>
        </Layout>
      </Layout>
    )
  }
}

export default App;