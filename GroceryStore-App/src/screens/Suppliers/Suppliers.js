import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'

export default function Suppliers({ navigation, route }) {
  const{username} = route.params
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Suppliers Screen</Header>
      <Button mode="outlined"
          onPress={
            () => navigation.navigate('AllSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }>All Suppliers</Button>
      <Button mode="outlined"
          onPress={
            () => navigation.navigate('AddSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }>Add Supplier</Button>
    <Button mode="outlined"
          onPress={
            () => navigation.navigate('EditSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }>Edit Supplier</Button>
    <Button mode="outlined"
          onPress={
            () => navigation.navigate('DeleteSupplierScreen', {username: username})
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Orders'}],
            // })
          }>Delete Supplier</Button>
    </Background>
  )
}
