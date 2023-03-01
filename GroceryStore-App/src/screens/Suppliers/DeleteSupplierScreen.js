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
  const [SupplierID,setSupplierID] = useState('');
  //const [modalVisible, setModalVisible] = useState(false);
  
  const onSubmit = () => {
    API.DeleteSupplierByID(SupplierID)
    console.log("supplier",SupplierID , "Deleted")

    //setModalVisible(true)
   //console.log()
   Alert.alert(
    'Deleted Supplier' ,SupplierID
     
   );
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Delete Supplier Screen</Header>
      <TextInput
       label="Supplier ID "
       returnKeyType="next"
       value={SupplierID}
       onChangeText={(value) => setSupplierID(value)}
       autoCapitalize="none"
      />
      <Button mode="outlined" onPress={onSubmit } >Delete</Button>
    </Background>
  )
}