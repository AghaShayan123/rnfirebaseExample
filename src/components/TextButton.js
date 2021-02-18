import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants';

export default TextButton = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 20
    }
})