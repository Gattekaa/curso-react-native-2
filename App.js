import { StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';
import Header from './components/Header';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Post image={require('./assets/imgs/fence.jpg')} />
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
