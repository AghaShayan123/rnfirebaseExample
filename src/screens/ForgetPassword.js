import React, {useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants';
import { Button, Input, TextButton } from '../components';
// services
import {Auth} from '../services'

const {width, height} = Dimensions.get('window');

export default Login = ({navigation}) => {

    const [email, setEmail] = useState()

    return(
        <View style={styles.container}>
            <Input 
                placeholder= "Email"
                value= {email}
                onChangeText={ e => setEmail(e)}
            />
            
            <Button  
                buttonText= "Forget Password"
                onPress= {() => Auth.forgetPassword(email)}
            />

            <TextButton 
                text="Back to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height,
        width,
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    }
})