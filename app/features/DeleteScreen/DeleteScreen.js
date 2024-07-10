// screens/DeleteScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import realm from '../../../realm';

export default function DeleteScreen() {
  const [id, setId] = useState('');

  const deleteUser = () => {
    const user = realm.objectForPrimaryKey('User', parseInt(id));
    realm.write(() => {
      realm.delete(user);
    });
    setId('');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="User ID" value={id} onChangeText={setId} style={styles.input} keyboardType="numeric" />
      <Button title="Delete User" onPress={deleteUser} />
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
