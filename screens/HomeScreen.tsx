import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6', accent: '#F97316', border: '#334155' };

export default function HomeScreen() {
  const todayDrive = '6h 45m';
  const breakStatus = 'Next break in 1h 20m';
  const nextWarning = 'Weekly limit approaching (42h)';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Good morning, John</Text>
        <Text style={styles.subtitle}>Wednesday, 18 August • HGV Driver</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Driving</Text>
        <Text style={styles.bigNumber}>{todayDrive}</Text>
        <Text style={styles.status}>{breakStatus}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Next Warning</Text>
        <View style={styles.warningBox}>
          <Ionicons name="warning" size={24} color={theme.accent} />
          <Text style={styles.warningText}>{nextWarning}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recent Infringements</Text>
        <Text style={styles.emptyText}>No recent infringements</Text>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.cardTitle}>Quick Actions</Text>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="camera" size={28} color={theme.primary} />
            <Text style={styles.actionText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="create" size={28} color={theme.primary} />
            <Text style={styles.actionText}>Note</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="warning" size={28} color={theme.accent} />
            <Text style={styles.actionText}>Infringement</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: '700', color: theme.text },
  subtitle: { fontSize: 16, color: '#94A3B8', marginTop: 4 },
  card: { backgroundColor: theme.card, borderRadius: 16, padding: 20, marginBottom: 16 },
  cardTitle: { fontSize: 18, fontWeight: '600', color: theme.text, marginBottom: 12 },
  bigNumber: { fontSize: 48, fontWeight: '700', color: theme.primary },
  status: { fontSize: 16, color: '#94A3B8', marginTop: 8 },
  warningBox: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  warningText: { flex: 1, fontSize: 16, color: theme.text },
  emptyText: { color: '#64748B', fontSize: 15 },
  quickActions: { marginTop: 8 },
  actionRow: { flexDirection: 'row', gap: 12 },
  actionBtn: { flex: 1, backgroundColor: theme.card, padding: 20, borderRadius: 16, alignItems: 'center' },
  actionText: { color: theme.text, marginTop: 8, fontSize: 14, fontWeight: '500' },
});