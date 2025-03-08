import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// View -> ios:UIView   android:androidview
export default function App() {
  
  console.log('hi lol'); 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Open up App.js to start working on your app</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseText: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: '#0a0f30',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 