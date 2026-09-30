import {StyleSheet, Text, View} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.title}>Välkommen till vår restaurang!</Text>
      </View>

      <View style={styles.footer}>
        <Text>Storagatan 123, 123 45 Stad</Text>
        <Text>Tel: 012-345 6789</Text>
      </View>

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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#eee',
  }
});