import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
export default function UserScreen({ navigation, route }) {
  const{username} = route.params;
  return (
    <Background>
  <BackButton goBack={navigation.goBack} />

      <Logo />
      <Header>User Screen</Header>
      <Button mode="outlined"
     onPress={
      () => navigation.navigate('AddUserScreen', {username: username})
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'Orders'}],
      // })
    }>Add User</Button>
    <Button mode="outlined"
        onPress={
          () => navigation.navigate('DeleteUserScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }>Delete User</Button>
     <Button mode="outlined"
        onPress={
          () => navigation.navigate('AllUsersScreen', {username: username})
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'Orders'}],
          // })
        }>All Users</Button>
    </Background>
  )
}
