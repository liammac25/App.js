import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6', success: '#22C55E' };

const stops = [
  { id: '1', name: 'M1 Services North', type: 'Secure', rating: 4.5, features: 'Showers • Fuel • Food' },
  { id: '2', name: 'A1 Truckstop Leeds', type: 'Truck', rating: 4.2, features: 'Showers • Toilets • CCTV' },
  { id: '3', name: 'M25 Services Dartford', type: 'Secure', rating: 4.8, features: 'Showers • Fuel • Booking' },
];

export default function ParkingScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={stops}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
              <TouchableOpacity><Ionicons name="heart-outline" size={24} color={theme.primary} /></TouchableOpacity>
            </View>
            <Text style={styles.type}>{item.type} Parking • {item.rating}★</Text>
            <Text style={styles.features}>{item.features}</Text>
            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>View Details</Text></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  card: { backgroundColor: theme.card, padding: 20, borderRadius: 16, marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { color: theme.text, fontSize: 18, fontWeight: '700' },
  type: { color: theme.primary, marginTop: 4 },
  features: { color: '#94A3B8', marginTop: 8 },
  btn: { backgroundColor: '#334155', marginTop: 16, padding: 12, borderRadius: 10, alignItems: 'center' },
  btnText: { color: theme.text, fontWeight: '600' },
});