import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6', border: '#334155' };

export default function TachoScreen() {
  const [note, setNote] = useState('');
  const [records] = useState([
    { id: '1', date: '17 Aug', vehicle: 'AB12 XYZ', note: 'Tacho calibration check' },
    { id: '2', date: '15 Aug', vehicle: 'CD34 ABC', note: 'Weekly printout taken' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Add Manual Note</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter tacho note..."
          placeholderTextColor="#64748B"
          value={note}
          onChangeText={setNote}
          multiline
        />
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save Record</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.section}>Past Records</Text>
      <FlatList
        data={records}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text style={styles.recordDate}>{item.date} • {item.vehicle}</Text>
            <Text style={styles.recordNote}>{item.note}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  card: { backgroundColor: theme.card, padding: 20, borderRadius: 16 },
  label: { color: theme.text, fontSize: 17, fontWeight: '600', marginBottom: 12 },
  input: { backgroundColor: '#0F172A', color: theme.text, padding: 16, borderRadius: 12, fontSize: 16, minHeight: 100, textAlignVertical: 'top' },
  saveBtn: { backgroundColor: theme.primary, marginTop: 16, padding: 16, borderRadius: 14, alignItems: 'center' },
  saveText: { color: '#fff', fontWeight: '700', fontSize: 17 },
  section: { color: theme.text, fontSize: 18, fontWeight: '600', marginVertical: 16 },
  record: { backgroundColor: theme.card, padding: 18, borderRadius: 14, marginBottom: 12 },
  recordDate: { color: '#94A3B8', fontSize: 14 },
  recordNote: { color: theme.text, fontSize: 16, marginTop: 4 },
});