import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from "../Components/FocusStatusBar.js"
import ProductsList from "./ProductsList.js"

const Home = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusStatusBar backgroundColor={"blue"} />
            <TouchableOpacity onPress={() => navigation.navigate("ProductsList", {})}> 
                <Text>Product List</Text> 
            </TouchableOpacity>
            <TouchableOpacity> 
                <Text>Barcode List</Text> 
            </TouchableOpacity>
        </SafeAreaView>
    )
}



export default Home;
