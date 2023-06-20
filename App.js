import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SeriesTitle from "./pages/SeriesTitle";
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
