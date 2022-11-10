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
        <View>
          <FlatList
            data={listData}
            keyExtractor ={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
        <Image style={styles.plusIcon} source={require("../assets/3032220.png")} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  plusIcon : {
    width: 40, 
    height: 40
  },
});