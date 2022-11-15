import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddItem = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [storage, setStorage] = useState("");
    const [show, setShow] = useState(false);

    const onChange = (e, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false);
    }

    return (
        <SafeAreaView >
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Product"
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
                <Button title="DatePicker" onPress={() => setShow(true)}/>
                {show && <DateTimePicker value={date} mode={'date'} minimumDate={new Date()} onChange={onChange}/>} 
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