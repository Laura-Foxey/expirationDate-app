import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from "../Components/FocusStatusBar.js"
import List from "../Components/List.js"

const SearchBar = ({searchPhrase, setSearchPhrase}) => {

    return (
        <View>
			<TextInput
          		placeholder="Search"
          		value={searchPhrase}
          		onChangeText={setSearchPhrase}
        	/>
        </View>
    )
}



export default SearchBar;