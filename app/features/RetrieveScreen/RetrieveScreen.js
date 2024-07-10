import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Clipboard, ToastAndroid } from 'react-native';
import COLORS from '../../Styles/COLORS';
import { useFocusEffect } from '@react-navigation/native';
import { getAllUsers } from '../../controllers/controllers';
import { FontAwesome5 } from '@expo/vector-icons';

export default function RetrieveScreen() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const usersFromRealm = await getAllUsers(); 
      setUsers(usersFromRealm);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  useFocusEffect(
    React.useCallback(() => {
      fetchUsers();
    }, [])
  );

  const copyUUID = (uuid) => {
    Clipboard.setString(uuid); 
    ToastAndroid.show('UUID copied to clipboard', ToastAndroid.SHORT); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stored Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => copyUUID(item.id)} style={styles.copyButton}>
            <FontAwesome5 name="copy" size={14} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>UUID: {item.id}</Text>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Age: {item.age}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
            <Text style={styles.text}>Address: {item.address}</Text>
          </View>
        )}
      />
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
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
  },
  copyButton: {
    alignSelf: 'flex-end',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#6495ED',
  },
  copyButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
