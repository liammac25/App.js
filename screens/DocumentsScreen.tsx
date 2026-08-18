import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6' };
const docs = [
  { id: '1', name: 'MOT Certificate', date: '12 Jun 2025' },
  { id: '2', name: 'Insurance Policy', date: '03 Mar 2025' },
  { id: '3', name: 'CPC Card Scan', date: '28 Jan 2025' },
];
export default function DocumentsScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadBtn}>
        <Ionicons name="cloud-upload" size={22} color="#fff" />
        <Text style={styles.uploadText}>Upload Document or Photo</Text>
      </TouchableOpacity>
      <FlatList
        data={docs}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name="document-text" size={24} color={theme.primary} />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <TouchableOpacity><Ionicons name="download" size={22} color="#94A3B8" /></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  uploadBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, backgroundColor: theme.primary, padding: 18, borderRadius: 16, marginBottom: 20 },
  uploadText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  card: { backgroundColor: theme.card, padding: 18, borderRadius: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  name: { color: theme.text, fontSize: 17, fontWeight: '600' },
  date: { color: '#94A3B8', marginTop: 4 },
});