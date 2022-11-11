import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ExpirationDate from './ExpirationDate';

export default function ListItem({item, navigateToItem}) {

  return (
    <View style={styles.display}>
        <View style={styles.text}>
            <Text>{item.name}</Text>
            <Text>{item.storage}</Text>
            <ExpirationDate expirationDate={item.expiration}/>
        </View>
        <View>
        {item.clicked &&
            <Text>{item.details}</Text> 
        }
        </View>
        <View style={styles.Icons}>
            <TouchableOpacity key={item.id} onPress={() => navigateToItem(item)} >
                <Image style={styles.editIcon} source={require("../assets/95637.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.deleteIcon} source={require("../assets/3096687.png")} 
                />
            </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        width: 300,
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    display: {
        flexDirection: "column",
        alignItems: 'center',
    },
      editIcon: {
        width: 40, 
        height: 40,
        margin: 5
    },
      deleteIcon: {
        width: 40, 
        height: 40,
        margin: 5
    },
      Icons: {
        display: 'flex',
        flexDirection: 'row'
    }
});