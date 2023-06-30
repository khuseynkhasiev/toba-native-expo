import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import MainStack from './navigate';

export default function App() {

  return (
      <MainStack/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
