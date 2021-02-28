import React, {useState, useEffect} from 'react'
import { View, ScrollView, Alert, ActivityIndicator, Text } from "react-native";
import { colors } from '../constants';
import { Product } from '../services'

export default Products = () => {

    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Product.getProduct()
        .then( prod => 
            setProducts(prod),
            setLoading(false)
        )
        .catch( err => Alert.alert(err.code, err.message))
    })

    if(loading){
        return <ActivityIndicator 
                    color= {colors.primary}
                    size= 'large'
                />
    }

    return(
        <ScrollView 
            style={{flex: 1}} 
        >
            {
                products && products.map((data, index) => (
                    <View 
                        key={index}
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
                    >
                        <Text>{data.productName}</Text>
                        <Text>{data.price}</Text>
                    </View>
                ))
            }
            
        </ScrollView>
    )
}