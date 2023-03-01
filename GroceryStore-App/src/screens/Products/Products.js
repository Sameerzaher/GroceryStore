import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
export default function Products({ navigation, route  }) {
  const{username} = route.params
  return (
    <Background>
      <BackButton goBack={navigation.goBack}/>
      <Logo />
      <Header>Products </Header>
      <Button mode="outlined"
              style={{width:300}}
         onPress={
          () => navigation.navigate('AllProductScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }>
         All Products</Button>
      <Button mode="outlined"
              style={{width:300}}
       onPress={
        () => navigation.navigate('AddProductScreen', {username: username})
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'Orders'}],
        // })
      }><Ionicons name="md-add-circle-outline" size={24} color="black" /> Add Product</Button>
      <Button mode="outlined"
              style={{width:300}}
        onPress={
          () => navigation.navigate('EditProductScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }><Feather name="edit" size={24} color="black" />  Edit Product</Button>
        <Button mode="outlined"
                style={{width:300}}
        onPress={
          () => navigation.navigate('DeleteProductScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }><AntDesign name="delete" size={24} color="black" />  Delete Product</Button>
    
    </Background>
  )
}
