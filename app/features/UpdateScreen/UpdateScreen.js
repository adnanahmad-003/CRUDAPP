// screens/UpdateScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import realm from '../../../realm';
export default function UpdateScreen() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const updateUser = () => {
    const user = realm.objectForPrimaryKey('User', parseInt(id));
    realm.write(() => {
      user.name = name;
      user.age = parseInt(age);
      user.email = email;
      user.address = address;
    });
    setId('');
    setName('');
    setAge('');
    setEmail('');
    setAddress('');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="User ID" value={id} onChangeText={setId} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Age" value={age} onChangeText={setAge} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
      <Button title="Update User" onPress={updateUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
