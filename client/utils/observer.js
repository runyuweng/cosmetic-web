import React from 'react'
import Cookies from 'js-cookie'
import store from '@client/utils/store'

export default function observer(Component) {
  class ObserverComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      // 重写update方法
      store.update = () => {
        this.forceUpdate()
      }
    }

    render() {
      console.log(this.props)
      return React.createElement(
        Component,
        {
          ...this.props,
          store
        }
      )
    }
  }

  return ObserverComponent
}