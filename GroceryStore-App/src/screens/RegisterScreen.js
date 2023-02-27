import React, { useState , useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { API } from '../../api-service';

export default function RegisterScreen({ navigation }) {

  
  function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
    )}
    const[username, setUsername ] = useState('');
    const[password, setPassword ] = useState('');
    const[firstName, setFirstName ] = useState('');
    const[lastName, setLastName ] = useState('');
    const[errorMessage, setErrorMessage ] = useState('');
    const[userRegistered, setUserRegistered ] = useState(false);
   
    const registerUser = () =>  {
      console.log("REGISTER-USER")
      API.registerUser({username, password})
              .then( resp => resp)
             // .then(createUserProfile)
              .then( setUserRegistered(true))
              .catch( error => console.log(error))
             // setUserRegistered(true)     
  }
 // const createUserProfile =  () => {       
   // console.log("inside create user profile front ")
   // sleep(100).then(()=>{
   // API.registerUserProfile(username, firstName, lastName)
     //   .then( resp => resp)                
     //   .catch( error => console.log(error)) 
   // })
    // }
  const onSignUpPressed = () => {
    API.registerUser({username, password})
                .then( resp => console.log(resp))
            //    .then(createUserProfile)
                .then(setUsername(''))
                .then(setPassword(''))
                .then(setFirstName(''))
                .then(setLastName('')) 
                .then(setErrorMessage(` ${firstName} נרשם בהצלחה `))

               registerUser();
               if (username == "" || password == "" || firstName =="" || lastName =="") {
                alert("one or more of the fields is empty");
                return;
              }

      navigation.navigate('Dashboard', {username: username});
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="User Name"
        returnKeyType="next"
        autoCapitalize="none"
        value={username}
       // onChange={evt => setUsername(evt.target.value)}
        onChangeText={(value) => setUsername(value)}
      />
      
      <TextInput
        label="Password"
        autoCapitalize="none"
        returnKeyType="done"
        value={password}
        onChangeText={(value) => setPassword(value)}
        //onChange={evt => setPassword(evt.target.value)}
        secureTextEntry
      />
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstName}
        //onChange={evt => setFirstName(evt.target.value)}
        onChangeText={(value) => setFirstName(value)}

        autoCapitalize="none"
        autoCompleteType="firstName"
        textContentType="firstName"
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastName}
        //onChange={evt => setLastName(evt.target.value)}
        onChangeText={(value) => setLastName(value)}

        autoCapitalize="none"
        autoCompleteType="lastName"
        textContentType="lastName"
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
