import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6', accent: '#F97316', border: '#334155', success: '#22C55E' };

export default function HoursScreen() {
  const [driveTime, setDriveTime] = useState(405);
  const [breakTime, setBreakTime] = useState(45);

  const addDrive = (mins: number) => setDriveTime(driveTime + mins);
  const addBreak = (mins: number) => setBreakTime(breakTime + mins);

  const dailyTotal = Math.floor((driveTime + breakTime) / 60) + 'h ' + ((driveTime + breakTime) % 60) + 'm';
  const weeklyTotal = '38h 20m';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Today's Drive Time</Text>
        <Text style={styles.time}>{Math.floor(driveTime/60)}h {driveTime%60}m</Text>
        <View style={styles.btnRow}>
          {[15,30,60].map(m => (
            <TouchableOpacity key={m} style={styles.addBtn} onPress={() => addDrive(m)}>
              <Text style={styles.addText}>+{m}m</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Break Time</Text>
        <Text style={styles.time}>{Math.floor(breakTime/60)}h {breakTime%60}m</Text>
        <View style={styles.btnRow}>
          {[15,30,45].map(m => (
            <TouchableOpacity key={m} style={styles.addBtn} onPress={() => addBreak(m)}>
              <Text style={styles.addText}>+{m}m</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Daily Total</Text>
        <Text style={styles.total}>{dailyTotal}</Text>
        <Text style={styles.sub}>Weekly Total: {weeklyTotal}</Text>
      </View>

      <View style={styles.alertCard}>
        <Ionicons name="alert-circle" size={24} color={theme.accent} />
        <Text style={styles.alertText}>Take a 45min break before 14:30</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  card: { backgroundColor: theme.card, borderRadius: 16, padding: 20, marginBottom: 16 },
  label: { color: '#94A3B8', fontSize: 15 },
  time: { fontSize: 42, fontWeight: '700', color: theme.primary, marginVertical: 8 },
  total: { fontSize: 36, fontWeight: '700', color: theme.text },
  sub: { color: '#94A3B8', marginTop: 6 },
  btnRow: { flexDirection: 'row', gap: 12, marginTop: 16 },
  addBtn: { flex: 1, backgroundColor: '#334155', padding: 14, borderRadius: 12, alignItems: 'center' },
  addText: { color: theme.text, fontWeight: '600', fontSize: 16 },
  alertCard: { backgroundColor: '#451A03', padding: 20, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 14 },
  alertText: { color: theme.text, flex: 1, fontSize: 16 },
});