import React, { Component } from 'react'
import Header from './components/Header'
import { View } from 'react-native'
import Post from './components/Post'
import Feed from './screens/Feed'
import MenuNavigator from './Navigator'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuNavigator />
      </View>
    )
  }
}