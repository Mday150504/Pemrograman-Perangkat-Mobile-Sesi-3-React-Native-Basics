import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const App = () => {
  const [sisi, setSisi] = useState('');
  const [luas, setLuas] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  const hitungLuas = () => {
    if (sisi) {
      const hasil = parseFloat(sisi) * parseFloat(sisi);
      setLuas(hasil);

      // Animasi fade in untuk hasil
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      setLuas(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hitung Luas Persegi</Text>
      <Text style={styles.author}>M.Dai Misbah</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan panjang sisi"
        keyboardType="numeric"
        value={sisi}
        onChangeText={setSisi}
      />

      <TouchableOpacity style={styles.button} onPress={hitungLuas}>
        <Text style={styles.buttonText}>Hitung</Text>
      </TouchableOpacity>

      {luas !== null && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.result}>Luas: {luas}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#DFF6FF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0077B6',
  },
  author: {
    fontSize: 16,
    marginBottom: 20,
    color: '#0077B6',
    fontStyle: 'italic',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#0077B6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00B4D8',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 22,
    marginTop: 30,
    color: '#03045E',
    fontWeight: '600',
  },
});

export default App;
