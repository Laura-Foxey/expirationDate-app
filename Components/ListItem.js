import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ListItem({item, navigateToItem, onDelete}) {

  const assignColor = () => {
    const countdown = calcCountdown(exp);
    if (countdown <= 0) {
      return {backgroundColor: "#453851"}
    } else if (countdown < 4) {
      return {backgroundColor: "#ffafb9"}
    } else if (countdown < 7) {
      return {backgroundColor: "#ffdeb5"}
    } else if (countdown < 10) {
      return {backgroundColor: "#feffb1"};
    } else {
      return {backgroundColor: "#a5ffc4"};
    }
  };

  const today = Date.parse(new Date());
  const exp = new Date(item.expiration).getTime();

  const calcCountdown = (exp) => {
      return Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
    };

  return (
    <View style={item.selected ? [styles.display, styles.selected] : [styles.display, assignColor()]}>
        <View style={styles.text}>
            <Text>{item.name}</Text>
            <Text>{item.storage}</Text>
            <Text>{calcCountdown(exp)}</Text>
        </View>
        <View>
        {item.clicked &&
            <Text>{item.details}</Text> 
        }
        </View>
        <View style={styles.Icons}>
            <TouchableOpacity key={item.id} onPress={() => navigateToItem(item)} >
                <Image style={styles.editIcon} source={require("../assets/edit.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(item.name, item._id)}>
                <Image style={styles.deleteIcon} source={require("../assets/delete.png")} 
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
        alignItems: 'center',
        marginVertical: 5,
        width: 300,
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
    },
    selected: {
      backgroundColor: "#dbbff2"
    }
});