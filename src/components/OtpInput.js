import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { colors } from '../constants';

export default OtpInput = ({  onChangeText, value = [], noOfInput=4, backgroundColor }) => {

    const pins = []

    for ( let i = 0; i < noOfInput; i++){
        pins[i] = i;
    }

    const nextInput = (e, index) => {

        if (e == "" && index > 0 ) {
            pins[index-1].focus()
            return
        }

        if (e != "" && index < noOfInput-1 ){
            pins[index+1].focus()
        }
    }

    return(
        <View style={styles.input}>
            {
                pins.map( ( blank , index) => (
                    <View
                        key= {index} 
                        style={[styles.box, {backgroundColor : backgroundColor || colors.lightBg}] } 
                    >
                        <TextInput 
                            style={styles.inputBox}
                            onChangeText={e => {
                                    onChangeText(e, index)
                                    nextInput(e, index)
                                }  
                            }
                            value= {value[index]}
                            keyboardType= "number-pad"
                            maxLength= {1}
                            ref= { e =>  pins[index]=e }
                            disableFullscreenUI= {true}
                        />   
                    </View>
                ))
            }
        </View>
    
)}

const styles = StyleSheet.create({


    input:{
        alignItems: "center",
        marginVertical: 20,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        padding:10,    
    },
    box:{
        height: 45,
        width: 45,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center", 
        marginHorizontal: 5,
        borderColor: colors.primary,
        borderWidth: 1
    },

    inputBox:{   
        fontSize: 20,
        paddingHorizontal: 10,
        flex: 1,
        fontSize:20,
        fontFamily: 'Gill-Sans-MT',
        color: colors.black,
        textAlign: "center"
    },
})