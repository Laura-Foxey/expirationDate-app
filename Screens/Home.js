import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, SafeAreaView, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from "../Components/FocusStatusBar.js"
import {listData} from "../data.js"
import ListItem from './ListItem.js';

const Home = ({navigation}) => {

    const renderItem = ({item}) => {
        return (<ListItem item={item} navigation={navigation}/>)
      }

    return (
        <SafeAreaView>
            <FocusStatusBar backgroundColor={"blue"} />
            <View>
                <Text>Produce: </Text>
                <View>
                    <FlatList
                        data={listData}
                        keyExtractor ={(item) => item.id}
                        renderItem={renderItem}
                    />
                </View>
                <Image style={styles.plusIcon} source={require("../img/3032220.png")} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plusIcon : {
      width: 40, 
      height: 40
    },
  });

export default Home;