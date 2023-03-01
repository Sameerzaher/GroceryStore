import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Text } from 'react-native-paper'
import BackButton from '../../components/BackButton'
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
export default function Orders({ navigation, route }) {
  const{username} = route.params
   return(
    <Background>
    <BackButton goBack={navigation.goBack}/>

    <Logo />
    <Header>Orders</Header>
    <Text>{username}</Text>
    <Button mode="outlined"
            style={{width:300}}
        onPress={
          () => navigation.navigate('AllOrderScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }>AllOrder</Button>
    <Button mode="outlined"
            style={{width:300}}
        onPress={
          () => navigation.navigate('NewOrderScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }><Ionicons name="md-add-circle-outline" size={24} color="black" /> AddOrder</Button>
        <Button mode="outlined"
                style={{width:300}}
       onPress={
        () => navigation.navigate('EditOrderScreen', {username: username})
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'Orders'}],
        // })
      }><Feather name="edit" size={24} color="black" />  EditOrder</Button>
      <Button mode="outlined"
              style={{width:300}}
       onPress={
        () => navigation.navigate('DeleteOrderScreen', {username: username})
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'Orders'}],
        // })
      }><AntDesign name="delete" size={24} color="black" /> DeleteOrder</Button>
        </Background>
   )
} 