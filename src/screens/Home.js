import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Input, TextButton } from '../components'
// service
import {Auth} from '../services'

export default Home = ({navigation}) => {

    const [ email, setEmail ] = useState()

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>

            <Input 
                placeholder= "Email for Invitaion"
                value={email}
                onChangeText = { e => setEmail(e) }
            />

            <Button 
                buttonText= "Send Invitation"
                onPress= { () => Auth.inviteUser(email)}
            />

            <TextButton
                text="Add Products"
                onPress= { () => navigation.navigate('AddProduct')}
            />
            <TextButton
                text="View Products"
                onPress= { () => navigation.navigate('Products')}
            />

            <TouchableOpacity onPress={() => Auth.signOut()}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}