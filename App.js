import React, { Component } from 'react'
import Header from './components/Header'
import { View } from 'react-native'
import Post from './components/Post'

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
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
          comments={comments} />
      </View>
    )
  }
}