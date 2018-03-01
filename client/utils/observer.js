import React from 'react'
import Cookies from 'js-cookie'
import cartStore from '@client/utils/store'

export default function observer(Component) {
  class ObserverComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      // 重写update方法
      cartStore.update = () => {
        this.forceUpdate()
      }
    }

    componentWillReceiveProps(props) {
      console.log('observer:', props)
    }

    render() {
      console.log(this.props)
      return React.createElement(
        Component,
        {
          ...this.props,
          cartStore
        }
      )
    }
  }

  return ObserverComponent
}