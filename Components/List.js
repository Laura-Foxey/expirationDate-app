import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList} from 'react-native';
import {listData} from "../data.js"
import ListItem from './ListItem.js';

export default function List({navigation}) {

  console.log(listData)

  const renderItem = ({item}) => {
    return (<ListItem item={item} navigation={navigation}/>)
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text>Produce: </Text>
        <View style={styles.header}>
          <Text>Name</Text>
          <Text>Storage</Text>
          <Text>Expires in:</Text>
        </View>
        <View>
          <FlatList
            data={listData}
            keyExtractor ={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Image style={styles.plusIcon} source={require("../assets/3032220.png")} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    height: "95%",
  },
  header: {
    backgroundColor: 'orange',
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
    plusIcon : {
      width: 40, 
      height: 40
    },

});