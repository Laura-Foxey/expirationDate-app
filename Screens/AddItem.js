import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity,  Text, TextInput, Image, Button } from 'react-native';
import AddorEdit from '../Components/AddorEdit'

const AddItem = ({navigation}) => {
    const [Name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [Storage, setStorage] = useState("");
    const [dText, setText] = useState('')
    const [Details, setDetails] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = () => {
        if (!Name || !dText || !Storage) {
            setError(true) 
            return ;
        }
        fetch("http://192.168.43.52:3000/products", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: Name,
                storage: Storage,
                expiration: dText,
                details: Details,
            })
        })
        .then(res => res.json())
        //reset values on submit
        setName("");
        setDate(new Date());
        setStorage("");
        setText("");
        setDetails("");
        setError(false);

        navigation.push("ProductsList", {})
    }

    return (
        <View>
            <AddorEdit onSubmit={onSubmit} Name={Name} setName={setName} date={date} setDate={setDate} Storage={Storage} setStorage={setStorage} dText={dText} setText={setText} Details={Details} setDetails={setDetails}/>
            {error && <Text>Please fill all information!</Text>}
        </View>
    )
}

export default AddItem;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50
    },
})