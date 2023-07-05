import React, { Component } from 'react'
import Header from './components/Header'
import { View } from 'react-native'
import Post from './components/Post'
import Feed from './screens/Feed'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena Silva',
      comment: 'Excelente Foto'
    }, {
      nickname: 'Rafael Gustavo Pereira',
      comment: 'Muito Ruim!'
    }]

    return (
      <View style={{ flex: 1 }}>
        <Feed />
      </View>
    )
  }
}