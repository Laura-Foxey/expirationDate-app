import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity,  Text, TextInput, Image, Button } from 'react-native';
import AddorEdit from '../Components/AddorEdit'

const EditItem = ({navigation, route}) => {
    let { item } = route.params;
    const [Name, setName] = useState(item.name);
    const [date, setDate] = useState(new Date(item.expiration));
    const [Storage, setStorage] = useState(item.storage);
    const [dText, setText] = useState(item.expiration)
    const [Details, setDetails] = useState(item.details);

    const onSubmit = () => {
        fetch(`http://192.168.43.52:3000/products/${item._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: Name,
                storage: Storage,
                expiration: dText,
                details: Details,
            })
        })
        .then(res => res.json())

        navigation.push("ItemDetails", {item})
    }

    return (
        <View>
            <AddorEdit onSubmit={onSubmit} Name={Name} setName={setName} date={date} setDate={setDate} setStorage={setStorage} dText={dText} setText={setText} Details={Details} setDetails={setDetails}/>
        </View>
    )
}

export default EditItem;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50
    },
})