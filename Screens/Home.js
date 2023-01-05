import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from "../Components/FocusStatusBar.js"
import ProductsList from "./ProductsList.js"

const Home = ({navigation}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusStatusBar backgroundColor={"blue"} />
            <View style={styles.circleContainer}>
                <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("ProductsList", {})}>
                    <Text style={styles.circleText}>Product List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle}>
                    <Text style={styles.circleText}>Barcode List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("CodeScanner", {})}>
                    <Text style={styles.circleText}>Scan</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default Home;

const styles = StyleSheet.create({
    circleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleText: {
        textAlign: 'center',
        color: 'white',
    }
})
