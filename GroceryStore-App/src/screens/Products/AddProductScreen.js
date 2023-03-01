import React, { useState } from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { API } from '../../../api-service'
import {Alert} from 'react-native'
export default function AddProductScreen({ navigation, route }) {
  const {username} = route.params;
  const [Productname,setProductname] = useState('');
  const [suppliername,setsuppliername] = useState('');
  const [amount,setAmount] = useState('');
  const [price,setPrice] = useState('');
//const [newProduct,setNewProduct] = useState('');
  const onSubmit = () => {
    API.AddNewProduct(Productname,suppliername,amount,price)
    //.then( resp => setNewProduct('newProduct', resp.newProduct))
        .catch( error => console.log(error)) 
        if (Productname == "" || suppliername == "" || amount == ""|| price == "") {
          alert("one of the Felids is empty");
          return;
        } 
      Alert.alert('added Product');
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Add Product Screen</Header>
      <TextInput
       label="Product Name "
       returnKeyType="next"
       value={Productname}
       onChangeText={(value) => setProductname(value)}
       autoCapitalize="none"
      />

     <TextInput
       label="Supplier Name "
       returnKeyType="next"
       value={suppliername}
       onChangeText={(value) => setsuppliername(value)}
       autoCapitalize="none"
      />
      <TextInput
       label="Amount "
       returnKeyType="next"
       value={amount}
       onChangeText={(value) => setAmount(value)}
       autoCapitalize="none"
      />
      <TextInput
       label="Price"
       returnKeyType="next"
       value={price}
       onChangeText={(value) => setPrice(value)}
       autoCapitalize="none"
      />
      {console.log(Productname,suppliername,amount,price)}
      <Button mode="outlined" onPress={onSubmit}>Submit</Button>
     
    </Background>
  )
}
