import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// service
import {Auth} from '../services'

export default Home = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>

            <TouchableOpacity onPress={() => Auth.signOut()}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}