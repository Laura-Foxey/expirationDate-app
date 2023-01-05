import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity,  Text, TextInput, Image, Button } from 'react-native';
import AddorEdit from '../Components/AddorEdit'

const AddBarcode = ({navigation}) => {
    // const [Name, setName] = useState("");
    // const [Preference, setPreference] = useState("");
    // const [Code, setCode] = useState('')
    // const [error, setError] = useState(false);

    // const onSubmit = () => {
    //     if (!Name || !Preference || !Code) {
    //         setError(true) 
    //         return ;
    //     }
    //     fetch("http://192.168.43.52:3000/barcodes", {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             name: Name,
    //             preference: Preference,
    //             code: Code,
    //         })
    //     })
    //     .then(res => res.json())
    //     //reset values on submit
    //     setName("");
    //     setCode(new Date());
    //     setPreference("");
    //     setError(false);

    //     navigation.push("BarcodesList", {})
    // }

    return (
        <View>
            <Text> Add barcode </Text>
        </View>
    )
}

export default AddBarcode;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50
    },
})