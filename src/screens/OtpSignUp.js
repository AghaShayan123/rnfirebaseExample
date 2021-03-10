import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants';
import { Button, TextButton, OtpInput, Input } from '../components';
// service
import {Auth} from '../services'

export default OtpSignUp = ({navigation}) => {

    const [ codeArr, setCodeArr ]= useState([])
    const [ number, setNumber ] = useState()
    const code = codeArr.join("")
    const [ confirm, setConfirm ] = useState(null) //if null means no otp message send
    
    handleCode = (e, index) => {
        const codeArray = [...code]
        codeArray[index] = e
        setCodeArr(codeArray)
    }

    const _sendOtp = () => {
        Auth.sendOtp(number)
        .then(confirmation => setConfirm(confirmation))
    }

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Signup with OTP</Text>

            <Input
                placeholder= "Enter Number"
                value={number}
                onChangeText={e => setNumber(e)}
            />

            <Button
                buttonText= "Send OTP"
                onPress={() => _sendOtp(number)}
            />

            <OtpInput 
                onChangeText={ (e, index) => handleCode(e, index)}
                value= {codeArr}
                noOfInput = {6}
            />

            <Button
                buttonText= "Verify"
                onPress={() => Auth.confirmCode(confirm, code)}
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
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    code:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'   
    }
})