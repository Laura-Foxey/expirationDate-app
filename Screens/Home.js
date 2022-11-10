import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from "../Components/FocusStatusBar.js"

const Home = () => {

    return (
        <SafeAreaView>
            <FocusStatusBar backgroundColor={"blue"} />
        </SafeAreaView>
    )
}

export default Home;