import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";

export default function Suppliers({ navigation, route }) {
  const{username} = route.params
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Suppliers </Header>
      <Button mode="outlined"
              style={{width:300}}
          onPress={
            () => navigation.navigate('AllSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }><Ionicons name="person" size={24} color="black" />  All Suppliers</Button>
      <Button mode="outlined"
              style={{width:300}}
          onPress={
            () => navigation.navigate('AddSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }><AntDesign name="adduser" size={24} color="black" /> Add Supplier</Button>
    <Button mode="outlined"
            style={{width:300}}
          onPress={
            () => navigation.navigate('EditSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }><Feather name="edit" size={24} color="black" /> Edit Supplier</Button>
    <Button
            style={{width:300}}
          onPress={
            () => navigation.navigate('DeleteSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }><AntDesign name="delete" size={24} color="black" />  Supplier</Button>
    </Background>
  )
}
