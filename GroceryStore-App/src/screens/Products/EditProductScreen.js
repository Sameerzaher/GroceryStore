import React, { useState } from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { API } from '../../../api-service'
import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform, SafeAreaView, TouchableOpacity } from "react-native";

export default function EditProductScreen({navigation, route}) {
  const {username} = route.params;
const [ProductID,setProductID] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [product,setProduct] = useState('');
  const onSubmit = () => {
    API.getProdctByID(ProductID)
    //setModalVisible(true)
   console.log("Sameer",ProductID)
   const id = ProductID
   console.log(id);
   
   navigation.navigate('EditProd',{username: username , id: id  });
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <TextInput
       label="Product ID "
       returnKeyType="next"
       value={ProductID}
       onChangeText={(value) => setProductID(value)}
       autoCapitalize="none"
      />
      <View>
    </View>
      <Button mode="outlined" onPress={onSubmit } >Submit</Button>
      
    </Background>
  )
  
}

