import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ListItem({item, navigation}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.storage}</Text>
            <Text>{item.expiration}</Text>
            {expanded &&
                <Text>{item.details}</Text> 
            }
            <View style={styles.Icons}>
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate("ItemDetails", { item })} >
                <Image style={styles.editIcon} source={require("../assets/95637.png")}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.deleteIcon} source={require("../assets/3096687.png")} 
                  />
              </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    box: {
      display: 'flex',
      flexDirection: 'column',
    },
    item: {
        backgroundColor: '#f9c2ff',
        width: 200,
        height: 120,
        padding: 10,
        marginVertical: 5,
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