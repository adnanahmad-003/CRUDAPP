import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert,TouchableOpacity } from 'react-native';
import COLORS from '../../Styles/COLORS';
import { deleteUser,getUserById } from '../../controllers/controllers';

export default function DeleteScreen() {
  const [id, setId] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleDeleteUser = () => {
    if (!id.trim()) {
      setError('Please enter a valid User ID');
      return;
    }

    try {
      deleteUser(id);
      setId('');
      setUser(null);
      setError('');
      Alert.alert('User Deleted', 'The user has been successfully deleted.');
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error deleting user. Please try again.');
    }
  };

  const handleFetchUser = async () => {
    if (!id.trim()) {
      setError('Please enter a valid User ID');
      return;
    }

    try {
      const fetchedUser = await getUserById(id);
      if (fetchedUser) {
        setUser(fetchedUser);
        setError('');
      } else {
        setUser(null);
        setError('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Error fetching user. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Delete User</Text>
      <TextInput
        placeholder="User ID"
        value={id}
        onChangeText={setId}
        style={styles.input}
         autoCapitalize="words"
      />
      <TouchableOpacity onPress={handleFetchUser} style={styles.btn}>
        <Text style={styles.text}>Fetch User</Text>
      </TouchableOpacity>
      {user && (
        <View style={styles.userContainer}>
          <Text style={styles.detailText}>User Details:</Text>
          <View style={styles.userDetails}>
            <Text style={styles.detailText}>Name: {user.name}</Text>
            <Text style={styles.detailText}>Age: {user.age}</Text>
            <Text style={styles.detailText}>Email: {user.email}</Text>
            <Text style={styles.detailText}>Address: {user.address}</Text>
          </View>
          <Button title="Delete User" onPress={handleDeleteUser} color="red" />
        </View>
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  userContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  userDetails: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
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
