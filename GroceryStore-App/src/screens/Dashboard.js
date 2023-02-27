import {React, useState, useEffect} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Text } from 'react-native-paper'
import API from '../../api-service'
import { useCookies } from 'react-cookie'

export default function Dashboard({ navigation, route}) {
  const [token, deleteToken] = useCookies(['mr-token']);
  const {username} = route.params;
  console.log(JSON.stringify(username));
  //console.log(JSON.stringify(username))
  console.log(token);
    const [user,setUser] = useState([]);
    const logoutUser = () => {
      console.log("inside logoutUser");
      console.log(token);
      deleteToken(['mr-token']);
      console.log(token);
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
};
  return (
    <Background>
      <Logo />
      <Header>Dashboard</Header>
      <Text >Welcome Back {username}</Text>
      <Button
        mode="outlined"
        onPress={
          () => navigation.navigate('Orders', {username: username})
        }>
        Orders
      </Button>
      <Button mode="outlined"
        onPress={
          () => navigation.navigate('UserScreen', {username: username})
        }>
        Users</Button>
      <Button mode="outlined"
         onPress={
          () => navigation.navigate('Products', {username: username})
        }>
         Products</Button>
         <Button mode="outlined"
         onPress={
          () => navigation.navigate('Suppliers', {username: username})
        }> Suppliers</Button>
      <Button
        mode="outlined"
        onPress={(logoutUser)

        }
      >
        Logout
      </Button>
    </Background>
  )
}