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
  const [Productname,setProductname] = useState('');
  //const [modalVisible, setModalVisible] = useState(false);
  
  const onSubmit = () => {
    API.DeleteProdctByID(Productname)
    console.log("product",Productname , "Deleted")
    //setModalVisible(true)
   //console.log()
   Alert.alert(
    'Deleted Product' ,Productname
     
   );
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Delete Product </Header>
      <TextInput
       label="Product ID "
       returnKeyType="next"
       value={Productname}
       onChangeText={(value) => setProductname(value)}
       autoCapitalize="none"
      />
      <Button mode="outlined" onPress={onSubmit } >Delete</Button>
    </Background>
  )
}