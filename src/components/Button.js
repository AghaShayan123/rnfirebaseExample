import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants';

export default Button = ({buttonText, onPress}) => {
    return(
        <TouchableOpacity onPress= {onPress} style={styles.button}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 10
    },
    text:{
        color: colors.white,
        fontSize: 16
    }
})