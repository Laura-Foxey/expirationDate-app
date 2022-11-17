import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity,  Text, TextInput, Image, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddItem = ({navigation}) => {
    const [Name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [Storage, setStorage] = useState("");
    const [show, setShow] = useState(false);
    const [dText, setText] = useState('')
    const [Details, setDetails] = useState('');

    const onChange = (e, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = currentDate;
        let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        setText(fDate);
        setShow(false);
    }

    const submit = () => {
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

        navigation.push("Home", {})
    }

    return (
        <SafeAreaView >
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={Name}
                placeholder="Product name"
            />
            <View>
                <TouchableOpacity onPress={() => setStorage("Fridge")}> 
                    <Image style={styles.icon} source={require("../assets/fridge.png")} />
                 </TouchableOpacity>
                <TouchableOpacity onPress={() => setStorage("Freezer")}> 
                    <Image style={styles.icon} source={require("../assets/freezer.png")} />
                 </TouchableOpacity>
                <TouchableOpacity onPress={() => setStorage("Pantry")}>
                    <Image style={styles.icon} source={require("../assets/pantry.png")} />
                </TouchableOpacity>
            </View>
            <View>
                {dText && <Text>Current expiration date picked: {dText}</Text>}
                <Button title="Expiration Date" onPress={() => setShow(true)}/>
                {show && <DateTimePicker value={date} mode='date' display='default' minimumDate={new Date()} onChange={onChange}/>} 
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setDetails}
                    value={Details}
                    placeholder="Extra information about product"
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => submit()}>
                    <Text> Submit </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddItem;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50
    },
})