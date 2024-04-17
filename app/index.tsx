import * as React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import {PaperProvider} from "react-native-paper"
import Interests from "./interests/index"
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <PaperProvider>
      <Interests/>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
