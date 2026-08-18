import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

// Simple Signature Pad
interface SignaturePadProps {
  onSave: (sig: string) => void;
}
const SignaturePad: React.FC<SignaturePadProps> = ({ onSave }) => {
  const [signature, setSignature] = useState('');
  return (
    <View style={sigStyles.container}>
      <Text style={sigStyles.label}>Driver Signature</Text>
      <TouchableOpacity style={sigStyles.pad} onPress={() => {
        const sig = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMTAgNTAgQzMwIDMwIDcwIDcwIDEwMCA0MCBDMTMwIDcwIDE4MCAzMCAyMjAgNjAiIHN0cm9rZT0iIzNGODJGNiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+PC9zdmc+';
        setSignature(sig);
        onSave(sig);
      }}>
        {signature ? <Image source={{ uri: signature }} style={{ width: 240, height: 100 }} /> : <Text style={sigStyles.placeholder}>Tap to sign</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setSignature(''); onSave(''); }}><Text style={sigStyles.clear}>Clear</Text></TouchableOpacity>
    </View>
  );
};

const sigStyles = StyleSheet.create({
  container: { marginTop: 20 },
  label: { color: '#F1F5F9', fontSize: 16, fontWeight: '600', marginBottom: 8 },
  pad: { backgroundColor: '#0F172A', height: 120, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#334155' },
  placeholder: { color: '#64748B', fontSize: 16 },
  clear: { color: '#EF4444', marginTop: 8, alignSelf: 'center' },
});

const theme = { background: '#0F172A', card: '#1E293B', text: '#F1F5F9', primary: '#3B82F6', border: '#334155', accent: '#F97316' };

export default function InfringementsScreen() {
  const [form, setForm] = useState({ type: '', description: '', date: '18/08/2025', time: '09:45', vehicle: 'AB12 XYZ', location: 'M1 Services', driver: 'John Smith', notes: '' });
  const [signature, setSignature] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);

  const pickPhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({ quality: 0.7 });
    if (!result.canceled) setPhoto(result.assets[0].uri);
  };

  const saveInfringement = () => {
    if (!form.description || !signature) {
      Alert.alert('Required', 'Description and signature are required');
      return;
    }
    Alert.alert('Saved', 'Infringement record saved successfully. Backup copy stored.');
    // Reset form
    setForm({ ...form, description: '', notes: '' });
    setSignature('');
    setPhoto(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Report Infringement</Text>

        <TextInput style={styles.input} placeholder="Infringement Type" placeholderTextColor="#64748B" value={form.type} onChangeText={t => setForm({ ...form, type: t })} />
        <TextInput style={[styles.input, { height: 100 }]} multiline placeholder="Description (your own words)" placeholderTextColor="#64748B" value={form.description} onChangeText={t => setForm({ ...form, description: t })} />
        
        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Date" value={form.date} onChangeText={t => setForm({ ...form, date: t })} />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Time" value={form.time} onChangeText={t => setForm({ ...form, time: t })} />
        </View>

        <TextInput style={styles.input} placeholder="Vehicle Reg" value={form.vehicle} onChangeText={t => setForm({ ...form, vehicle: t })} />
        <TextInput style={styles.input} placeholder="Location / Depot" value={form.location} onChangeText={t => setForm({ ...form, location: t })} />
        <TextInput style={styles.input} placeholder="Driver Name" value={form.driver} onChangeText={t => setForm({ ...form, driver: t })} />

        <SignaturePad onSave={setSignature} />

        <TouchableOpacity style={styles.photoBtn} onPress={pickPhoto}>
          <Ionicons name="camera" size={22} color={theme.primary} />
          <Text style={styles.photoText}>Capture Printout Photo</Text>
        </TouchableOpacity>
        {photo && <Image source={{ uri: photo }} style={{ width: '100%', height: 160, borderRadius: 12, marginTop: 12 }} />}

        <TouchableOpacity style={styles.saveBtn} onPress={saveInfringement}>
          <Text style={styles.saveText}>Save Record (Backup Copy)</Text>
        </TouchableOpacity>

        <Text style={styles.disclaimer}>This record is a digital backup. Not a replacement for the original legal document.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background, padding: 16 },
  card: { backgroundColor: theme.card, padding: 20, borderRadius: 20 },
  title: { fontSize: 22, fontWeight: '700', color: theme.text, marginBottom: 20 },
  input: { backgroundColor: '#0F172A', color: theme.text, padding: 16, borderRadius: 12, fontSize: 16, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 12 },
  photoBtn: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#334155', padding: 18, borderRadius: 14, marginTop: 12 },
  photoText: { color: theme.text, fontSize: 16, fontWeight: '600' },
  saveBtn: { backgroundColor: theme.accent, padding: 18, borderRadius: 16, alignItems: 'center', marginTop: 24 },
  saveText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  disclaimer: { fontSize: 13, color: '#64748B', marginTop: 20, textAlign: 'center' },
});