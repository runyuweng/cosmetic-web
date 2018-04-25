import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Modal } from 'antd';
// 主页
import HomeIndex from '@client/page/home/Index.jsx';
// 商品类别列表
import CategoryList from '@client/page/category/Index.jsx';
// 商品详情页面
import ProductIndex from '@client/page/product/index/Index.jsx';
// 登录页面
import Login from '@client/page/verify/Login.jsx';
// 用户详情页面
import Account from '@client/page/account/Index.jsx';
// 购物车页面
import Cart from '@client/page/product/Cart.jsx';
// 订单确认页面
import Confirm from '@client/page/product/Confirm.jsx';
// 支付页面
import Pay from '@client/page/product/Pay.jsx';
// 完成购买页面
import Finish from '@client/page/product/Finish.jsx';
// 样式表
import './main.scss';
// 请求集合
import api from '@client/utils/api'
// 操作cookie的库
import Cookies from 'js-cookie'

// 前端主要路由配置
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
    // 获取商品分类
    api.getType().then(({ data }) => {
      this.setState({
        menuDataStruct: data.data
      })
    })
  }

  // 选中某一分类
  handleClick = (value) => {
    this.setState({
      current: value.key,
    })
  }

  // 关闭弹窗
  handleOff = () => {
    this.modal.handleCancel()
  }

  // 登出
  handleLogout = () => {
    this.props.history.push('/')
    window.localStorage.setItem('userId', '')
    Cookies.remove('authorization');
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
            {Cookies.get('authorization') ? (
              <span>
                <Link to="/account/1">
                  个人中心&nbsp;
                </Link>
                <a onClick={this.handleLogout}>
                  退出&nbsp;
                </a>
              </span>
            ) : (
              <Link to="/login">
                登录
              </Link>
            )}
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
            <Route path="/account/:activeKey" component={Account} />
            <Route path="/category/:typeId" component={CategoryList} />
            <Route path="/product/:productId" component={ProductIndex} />
            <Route path="/confirm/product/:productId/:productNum" component={Confirm} />
            <Route path="/confirm/cart" component={Confirm} />
            <Route path="/pay" component={Pay} />
            <Route path="/finish" component={Finish} />
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

export default withRouter(App);