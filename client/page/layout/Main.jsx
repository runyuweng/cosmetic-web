import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Modal } from 'antd';
import HomeIndex from '@client/page/home/Index.jsx';
import 
CategoryList from '@client/page/category/Index.jsx';
import ProductIndex from '@client/page/product/index/Index.jsx';
import Login from '@client/page/verify/Login.jsx';
import Account from '@client/page/account/Index.jsx';
import Cart from '@client/page/product/Cart.jsx';
import Confirm from '@client/page/product/Confirm.jsx';
import Pay from '@client/page/product/Pay.jsx';
import './main.scss';
import api from '@client/utils/api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      menuDataStruct: [],
      current: props.location.pathname.split('/')[2] || '0',
    }
  }

  componentDidMount() {
    api.getType().then(({ data }) => {
      this.setState({
        menuDataStruct: data.data
      })
    })
  }

  handleClick = (value) => {
    this.setState({
      current: value.key,
    })
  }

  handleOff = () => {
    this.modal.handleCancel()
  }

  render() {
    const menuContent = this.state.menuDataStruct.map(d =>
      <Menu.Item
        key={d.typeId}
      >
        <Link
          to={`/category/${d.typeId}`}
          className={this.state.current === d.typeId ? 'active' : null}
        >
          {d.typeName}
        </Link>
      </Menu.Item>
    )

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
            <Menu.Item
              key={0}
            >
              <Link
                to='/'
                className={this.state.current === '0' ? 'active' : null}
              >
                首页
              </Link>
            </Menu.Item>
            {menuContent}
          </Menu>
        </Layout.Header>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/category/:typeId" component={CategoryList} />
            <Route path="/product/:productId" component={ProductIndex} />
            <Route path="/confirm/product/:productId/:productNum" component={Confirm} />
            <Route path="/confirm/cart" component={Confirm} />
            <Route path="/pay" component={Pay} />
          </Switch>
        </Layout>
        <Modal
          ref={(modal) => { this.modal = modal }}
          title="购物车"
          visible={this.state.showCart}
          footer={null}
          onCancel={() => {
            this.setState({
              showCart: false
            })
          }}
        >
          <Cart handleOff={this.handleOff}/>
        </Modal>
      </Layout>
    )
  }
}

export default App;