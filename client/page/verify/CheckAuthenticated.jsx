import React from 'react'
import Cookies from 'js-cookie'
import { message } from 'antd'

export default function checkAuthenticated(Component) {
  class AuthenticatedRoute extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    componentWillMount() {
      message.info('请登录后再试')
      if (!Cookies.get('authorization')) {
        this.props.history.push('/login')
      }
    }

    render() {
      return React.createElement(
        Component,
        { ...this.props }
      )
    }
  }

  return AuthenticatedRoute
}