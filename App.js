import { Provider } from 'react-redux'
import React, { Component } from 'react'
import MenuNavigator from './Navigator'
import storeConfig from './store/storeConfig'

const store = storeConfig()
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MenuNavigator />
      </Provider >
    )
  }
}