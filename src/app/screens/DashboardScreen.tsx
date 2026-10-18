
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🏋️</Text>

      <Text style={styles.title}>Welcome to FitProGym!</Text>

      <Text style={styles.subtitle}>
        Navigation is working successfully.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Overview</Text>
        <Text style={styles.cardText}>Total Members: 120</Text>
        <Text style={styles.cardText}>Today's Attendance: 85</Text>
        <Text style={styles.cardText}>Pending Fees: 12</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 24,
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 52,
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#172033',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#172033',
  },
  cardText: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
