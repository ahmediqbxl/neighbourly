import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to Neighbourly!</Text>
    <Text style={styles.subtitle}>
      List your garage, parking pad, or storage space for rent.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#555' },
});

export default HomeScreen;