import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>
        Tamanho da grade: 
        {`${params.getRowsAmmount()}x${params.getColumnsAmount()}`}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
      <Field opened nearMines={7} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
