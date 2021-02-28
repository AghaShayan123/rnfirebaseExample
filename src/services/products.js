import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

const addProduct = (productName, price) => {
    if(!productName || !price){
        Alert.alert('Error', 'Please enter all fields')
    }
    
    return firestore()
    .collection('products')
    .doc()
    .set({
        productName,
        price
    })
    .catch(err => err)
}

const getProduct = () => {
    return firestore()
    .collection('products')
    .get()
    .then( snap => {
        const products = []
        snap.forEach( product => products.push(product.data()))
        return products;
    })
    .catch( err => err)
}

export default Product = {
    addProduct,
    getProduct
}