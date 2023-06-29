import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import { createMinedBoard, cloneBoard, openField, hasExplosion, wonGame, showMines, invertFlag, flagsUsed } from './src/functions';
import { Component } from 'react';
import Header from './src/components/Header';
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }
  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false

    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Peeeerdeu!')
    }

    if (won) {
      Alert.alert('Parabens!')
    }

    this.setState({ board, lost, won })
  }
  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabens!')
    }

    this.setState({ board, won })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })} />
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
