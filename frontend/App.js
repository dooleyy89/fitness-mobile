import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Appearance} from 'react-native'; // to detect if device is using light/dark mode

// View -> ios:UIView   android:androidview
export default function App() {
  const colorScheme = Appearance.getColorScheme();

  const styles = StyleSheet.create({
    title: {
      color: colorScheme === 'dark' ? '#fff' : '#000', // based on app preference
      fontWeight: "bold",
    },
    baseText: {
      color: colorScheme === 'dark' ? '#fff' : '#000', // based on app preference
    },
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#222' : '#fff', // based on app preference
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText} id='title'>FitApp</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

