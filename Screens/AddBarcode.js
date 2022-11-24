import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity,  Text, TextInput, Image, Button } from 'react-native';
import AddorEdit from '../Components/AddorEdit'

const AddBarcode = ({navigation}) => {
    // const [Name, setName] = useState("");
    // const [date, setDate] = useState(new Date());
    // const [Storage, setStorage] = useState("");
    // const [dText, setText] = useState('')
    // const [Details, setDetails] = useState('');
    // const [error, setError] = useState(false);

    // const onSubmit = () => {
    //     if (!Name || !dText || !Storage) {
    //         setError(true) 
    //         return ;
    //     }
    //     fetch("http://192.168.43.52:3000/products", {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             name: Name,
    //             storage: Storage,
    //             expiration: dText,
    //             details: Details,
    //         })
    //     })
    //     .then(res => res.json())
    //     //reset values on submit
    //     setName("");
    //     setDate(new Date());
    //     setStorage("");
    //     setText("");
    //     setDetails("");
    //     setError(false);

    //     navigation.push("Home", {})
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