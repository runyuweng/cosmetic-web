import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Modal } from 'antd';
import HomeIndex from '@client/page/home/Index.jsx';
import CategoryList from '@client/page/category/Index.jsx';
import ProductIndex from '@client/page/product/Index.jsx';
import Login from '@client/page/verify/Login.jsx';
import Account from '@client/page/account/Index.jsx';
import Cart from '@client/page/product/Cart.jsx';
import './main.scss';

const menuDataStruct = [
  {
    id: '1',
    name: '首页',
    pathName: '/',
  },
  {
    id: '2',
    name: '女士护肤',
    pathName: '/category/1',
  },
  {
    id: '3',
    name: '彩妆',
    pathName: '/category/2',
  },
  {
    id: '4',
    name: '男士护肤',
    pathName: '/category/3',
  },
  {
    id: '5',
    name: '个人护理',
    pathName: '/category/4',    
  },
  {
    id: '6',
    name: '美容工具',
    pathName: '/category/5',    
  }
]

const pathMapping = {
  '/': '1',
  '/category/1': '2',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
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
        <Link
          to={d.pathName || '/'}
          className={this.state.current === d.id ? 'active' : null}
        >
          {d.name}
        </Link>
      </Menu.Item>)

    return (
      <Layout className="ant-layout">
        <Layout.Header>
          <div className="ant-login">
            <Link to="/account">
              个人中心&nbsp;
            </Link>
            <Link to="/login">
              登录
            </Link>
            <span onClick={() => {this.setState({showCart: true})}}>
              <Icon type="shopping-cart" /> 购物车
            </span>
          </div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            {menuContent}
          </Menu>
        </Layout.Header>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/category/:id" component={CategoryList} />
            <Route path="/product/:id" component={ProductIndex} />
          </Switch>
        </Layout>
        <Modal
          title="购物车"
          visible={this.state.showCart}
          footer={null}
          onCancel={() => {
            this.setState({
              showCart: false
            })
          }}
        >
          <Cart/>
        </Modal>
      </Layout>
    )
  }
}

export default App;