import React, {useState} from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Input } from "../components";
import { Product } from '../services'

export default AddProduct = () => {
    const [ productName, setProductName ] = useState();
    const [ price, setPrice ] = useState();

    const _add = () => {
        Product.addProduct(productName, price)
        .then(
            Alert.alert('Success', 'Product added')
        )
        .catch(
            err => Alert.alert(err.code, err.message)
        )
    }

    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Input 
                placeholder="Product Name"
                value= {productName}
                onChangeText={ e => setProductName(e) }
            />
            <Input
                placeholder="Price"
                value= {price}
                onChangeText= { e => setPrice(e) }
            />

            <Button 
                buttonText= "Add Product"
                onPress={_add}
            />
        </View>
    )
}