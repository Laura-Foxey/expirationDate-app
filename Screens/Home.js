import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from "../Components/FocusStatusBar.js"
import List from "../Components/List.js"

const Home = ({navigation}) => {

    return (
        <SafeAreaView>
            <FocusStatusBar backgroundColor={"blue"} />
            <List navigation={navigation}/>
        </SafeAreaView>
    )
}

export default Home;