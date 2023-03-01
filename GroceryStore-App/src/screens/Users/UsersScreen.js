import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import { AntDesign,Ionicons } from '@expo/vector-icons';
export default function UserScreen({ navigation, route }) {
  const{username} = route.params;
  return (
    <Background>
  <BackButton goBack={navigation.goBack} />

      <Logo />
      <Header>Users</Header>
        <Button mode="outlined"
                style={{width:250}}
                onPress={
                    () => navigation.navigate('AllUsersScreen', {username: username})
                    // navigation.reset({
                    //   index: 0,
                    //   routes: [{name: 'Orders'}],
                    // })
                }><Ionicons name="person" size={24} color="black" />  All Users</Button>
      <Button mode="outlined"
              style={{width:250}}
     onPress={
      () => navigation.navigate('AddUserScreen', {username: username})
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'Orders'}],
      // })
    }>
          <AntDesign name="adduser" size={24} color="black" /> Add User</Button>
    <Button mode="outlined"
            style={{width:250}}
        onPress={
          () => navigation.navigate('DeleteUserScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }><AntDesign name="delete" size={24} color="black" /> Delete User</Button>
    </Background>
  )
}
