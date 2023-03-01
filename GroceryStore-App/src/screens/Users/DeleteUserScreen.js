import React, { useState } from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import { API } from '../../../api-service'
import TextInput from '../../components/TextInput'
import { Alert } from 'react-native'
export default function DeleteProductScreen( {navigation, route }) {
  const {username} = route.params;
  const [UserID,setUserID] = useState('');
  //const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = () => {
    API.DeleteUserProfilerByID(UserID)
    console.log("User",UserID , "Deleted")
    //setModalVisible(true)
   //console.log()
   Alert.alert(
    'Deleted User' ,UserID

   );
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Delete User Screen</Header>
      <TextInput
       label="User ID "
       returnKeyType="next"
       value={UserID}
       onChangeText={(value) => setUserID(value)}
       autoCapitalize="none"
      />
      <Button mode="outlined" onPress={onSubmit } >Delete</Button>
    </Background>
  )
}
