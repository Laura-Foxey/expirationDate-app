import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ItemDetails({navigation, route}) {
    let { item } = route.params;
    const [Name, setName] = useState(item.name);
    const [date, setDate] = useState(item.date);
    const [Storage, setStorage] = useState(item.storage);
    const [show, setShow] = useState(false);
    const [dText, setText] = useState(item.date)
    const [Details, setDetails] = useState(item.details);

  return (
    <View style={styles.container}>
      <Text>Produce name: {Details}</Text>
      <Text>Product is stored in: {Storage}</Text>
      <Text>It will expire: {dText}</Text>
      <Text>Details: {Details} </Text>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});