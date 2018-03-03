import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Input, Collapse } from 'antd'
import Form from 'ant-form'
import './account.scss'
import Detail from './Detail.jsx'
import Address from './address/List.jsx'
import AddressEdit from './address/Edit.jsx'
import Order from './order/List.jsx'
import OrderDetail from './order/Detail.jsx'
import CheckAuthenticated from '../verify/CheckAuthenticated.jsx';
import store from '@client/utils/store'

@CheckAuthenticated
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.match.params.activeKey,
      userId: store.userId
    }
  }

  render() {
    const { userId, activeKey } = this.state
    const Index = () => (
      <Collapse accordion bordered={false} defaultActiveKey={[activeKey]}>
        <Collapse.Panel header="个人信息" key="1" className="customPanel">
          <Detail userId={userId} />
        </Collapse.Panel>
        <Collapse.Panel header="地址薄" key="2" className="customPanel">
          <Address userId={userId} />
        </Collapse.Panel>
        <Collapse.Panel header="订单" key="3" className="customPanel">
          <Order userId={userId} />
        </Collapse.Panel>
      </Collapse>
    )

    return (
      <div className="account">
        <h1>我的账户</h1>
        <Switch>
          <Route exact path="/account/:activeKey" component={Index} />
          <Route path="/account/address/add/:userId" component={AddressEdit} />
          <Route path="/account/address/edit/:addressId" component={AddressEdit} />
          <Route path="/account/order/:orderId" component={OrderDetail} />
        </Switch>

      </div>
    )
  }
}

export default Account;