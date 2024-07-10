import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import COLORS from '../../Styles/COLORS';
import { updateUser,getUserById } from '../../controllers/controllers';

export default function UpdateScreen() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const fetchUser = () => {
    const user = getUserById(id);
    if (user) {
      setName(user.name);
      setAge(user.age.toString());
      setEmail(user.email);
      setAddress(user.address);
      setError('');
    } else {
      setError('User not found');
      setName('');
      setAge('');
      setEmail('');
      setAddress('');
    }
  };

  const handleUpdate = () => {
    const updates = {
      name,
      age: parseInt(age),
      email,
      address
    };

    updateUser(id, updates); // Call updateUser function with id and updates

    setId('');
    setName('');
    setAge('');
    setEmail('');
    setAddress('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update User</Text>
      <TextInput
        placeholder="User ID"
        value={id}
        onChangeText={setId}
        style={styles.input}
        autoCapitalize="words"
      />
      <TouchableOpacity onPress={fetchUser} style={styles.btn}>
        <Text style={styles.text}>Fetch User</Text>
      </TouchableOpacity>
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
      <TouchableOpacity onPress={handleUpdate} style={styles.btn}>
        <Text style={styles.text}>Update User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
