import React, {useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants';
import { Button, Input, TextButton } from '../components';
// service
import {Auth} from '../services'

const {width, height} = Dimensions.get('window');

export default Login = ({navigation}) => {

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    return(
        <View style={styles.container}>
            <Input 
                placeholder= "Email"
                value={email}
                onChangeText={e => setEmail(e)}
            />
            <Input
                placeholder= "Password"
                secureTextEntry= {true}
                value={password}
                onChangeText={e => setPassword(e)}
            />

            <TextButton 
                text="Forget Password"
                onPress={() => navigation.navigate('ForgetPassword')}
            />

            <Button  
                buttonText= "Login"
                onPress={() => Auth.signIn(email, password)}
            />

            <TextButton 
                text="Have not an account? SignUp"
                onPress={() => navigation.navigate('SignUp')}
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