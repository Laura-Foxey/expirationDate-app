import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ItemDetails({navigation, route}) {
    let { item } = route.params;

    const [data, setData] = useState({});

    useEffect(() => {
      fetch(`http://192.168.43.52:3000/products/${item._id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => setData(data))
      .catch((error) => console.log('fetchToken error: ', error))
    },[])

  return (
    <View style={styles.container}>
      <Text>Product name: {data.name}</Text>
      <Text>Product is stored in: {data.storage}</Text>
      <Text>It will expire: {data.expiration}</Text>
      <Text>Details: {data.details} </Text>
      <TouchableOpacity onPress={() => navigation.push("EditItem", { item })}>
        <Image source={require("../assets/edit.png")}/>
      </TouchableOpacity>
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