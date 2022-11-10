import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function ItemDetails({navigation, route}) {
    let { item } = route.params;
  return (
    <View style={styles.container}>
      <Text>Produce name: {item.name}</Text>
      <Text>Product is stored in: {item.storage}</Text>
      <Text>It will expire: {item.expiration}</Text>
      <Text>Details: {item.details} </Text>
      <Text></Text>
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