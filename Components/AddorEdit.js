import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity,  Text, TextInput, Image, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddorEdit = ({onSubmit, Name, setName, date, setDate, Storage, setStorage, dText, setText, Details, setDetails}) => {
    const [show, setShow] = useState(false);

    const onChange = (e, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = currentDate;
        let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        setText(fDate);
        setShow(false);
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
                    <Image style={Storage === "Fridge" ? styles.selectedIcon : styles.icon} source={require("../assets/fridge.png")} />
                 </TouchableOpacity>
                <TouchableOpacity onPress={() => setStorage("Freezer")}> 
                    <Image style={Storage === "Freezer" ? styles.selectedIcon : styles.icon} source={require("../assets/freezer.png")} />
                 </TouchableOpacity>
                <TouchableOpacity onPress={() => setStorage("Pantry")}>
                    <Image style={Storage === "Pantry" ? styles.selectedIcon : styles.icon} source={require("../assets/pantry.png")} />
                </TouchableOpacity>
            </View>
            <View>
                <Text>Current expiration date picked: {dText}</Text>
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
                <TouchableOpacity onPress={() => onSubmit()}>
                    <Text> Submit </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddorEdit;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50
    },
    selectedIcon: {
        width: 50,
        height: 50,
        tintColor: '#FF5733'
    }
})