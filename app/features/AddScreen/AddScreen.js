import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity ,ToastAndroid} from 'react-native';
import COLORS from '../../Styles/COLORS';

import { createUser } from '../../controllers/controllers';

export default function AddScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const addUser = () => {
    if (!name.trim()) {
      setError('Name cannot be empty');
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      setError('Enter a valid email address');
      return;
    }

    if (parseInt(age) < 18) {
      setError('Age must be 18 or older');
      return;
    }

    // Call createUser function to add user to Realm
    createUser(name, age, email, address);

    setName('');
    setAge('');
    setEmail('');
    setAddress('');
    setError('');
    ToastAndroid.show('User Added Successfully', ToastAndroid.SHORT); 
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User to Database</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        autoCapitalize="words"
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
        autoCapitalize="sentences"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={addUser} style={styles.btn}>
        <Text style={styles.text}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
    backgroundColor: COLORS.blue,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6495ED',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  btn: {
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#CCCCFF',
  },
});
