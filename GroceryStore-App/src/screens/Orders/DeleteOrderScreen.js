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
  const [OrderID,setOrderID] = useState('');
  //const [modalVisible, setModalVisible] = useState(false);
  
  const onSubmit = () => {
    API.DeleteOrderByID(OrderID)
    console.log("Order",OrderID , "Deleted")
    4
    //setModalVisible(true)
   //console.log()
   Alert.alert(
    'Deleted Order' ,OrderID
     
   );
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Delete Order Screen</Header>
      <TextInput
       label="Order ID "
       returnKeyType="next"
       value={OrderID}
       onChangeText={(value) => setOrderID(value)}
       autoCapitalize="none"
      />
      <Button mode="outlined" onPress={onSubmit } >Delete</Button>
    </Background>
  )
}