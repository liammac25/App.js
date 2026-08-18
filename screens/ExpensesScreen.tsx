import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6' };
export default function ExpensesScreen() {
  const [amount, setAmount] = useState('');
  const expenses = [
    { id: '1', category: 'Fuel', amount: '£87.50', date: '17 Aug' },
    { id: '2', category: 'Meal', amount: '£12.40', date: '16 Aug' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Amount (£)" placeholderTextColor="#64748B" keyboardType="numeric" value={amount} onChangeText={setAmount} />
        <TouchableOpacity style={styles.addBtn}><Text style={styles.addText}>Add Expense</Text></TouchableOpacity>
      </View>
      <FlatList data={expenses} keyExtractor={i => i.id} renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cat}>{item.category}</Text>
          <Text style={styles.amt}>{item.amount}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      )} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  card: { backgroundColor: theme.card, padding: 20, borderRadius: 16 },
  input: { backgroundColor: '#0F172A', color: theme.text, padding: 16, borderRadius: 12, fontSize: 18 },
  addBtn: { backgroundColor: theme.primary, marginTop: 14, padding: 16, borderRadius: 14, alignItems: 'center' },
  addText: { color: '#fff', fontWeight: '700', fontSize: 17 },
  row: { backgroundColor: theme.card, padding: 18, borderRadius: 14, flexDirection: 'row', marginBottom: 10 },
  cat: { color: theme.text, flex: 1, fontSize: 17 },
  amt: { color: theme.primary, fontWeight: '700', fontSize: 17 },
  date: { color: '#94A3B8' },
});