import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6' };
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>John Smith</Text>
        <Text style={styles.sub}>HGV Licence • 12 years</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Vehicle: Scania R450 • AB12 XYZ</Text>
        <Text style={styles.label}>Company: Swift Logistics Ltd</Text>
      </View>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Export All Data (PDF)</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Notification Settings</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Privacy & Backup</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  card: { backgroundColor: theme.card, padding: 20, borderRadius: 16, marginBottom: 16 },
  name: { color: theme.text, fontSize: 24, fontWeight: '700' },
  sub: { color: '#94A3B8', marginTop: 4 },
  label: { color: theme.text, fontSize: 17, marginBottom: 8 },
  btn: { backgroundColor: theme.card, padding: 18, borderRadius: 14, marginBottom: 12 },
  btnText: { color: theme.text, fontSize: 17, fontWeight: '600' },
});