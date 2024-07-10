// screens/RetrieveScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import realm from '../../../realm';

export default function RetrieveScreen() {
  const users = realm.objects('User');

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Address: {item.address}</Text>
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
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
