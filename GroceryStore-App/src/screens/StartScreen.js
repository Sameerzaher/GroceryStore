import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Grocery Store</Header>

      <Button

          style={{  width:300, justifyContent: 'center'}}
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button
         >
      <Button
          style={{  width:300, justifyContent: 'center'}}
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
