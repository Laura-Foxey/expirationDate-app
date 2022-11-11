import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from "../Components/FocusStatusBar.js"
import List from "../Components/List.js"

const DisplayBy = ({displayBy, setDisplayBy}) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => setDisplayBy(displayBy==="Fridge" ? "" : "Fridge")}>
            <Text>Fridge</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDisplayBy(displayBy==="Freezer" ? "" : "Freezer")}>
            <Text>Freezer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDisplayBy(displayBy==="Pantry" ? "" : "Pantry")}>
            <Text>Pantry</Text>
            </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: 'row',
      width: 300,
      justifyContent: "space-around"
    },
})

export default DisplayBy;