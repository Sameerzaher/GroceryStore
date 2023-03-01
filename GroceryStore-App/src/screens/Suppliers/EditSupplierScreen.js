import React, {useState} from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import TextInput from "../../components/TextInput";
import {View} from "react-native";
import Button from "../../components/Button";
import {API} from "../../../api-service";

export default function EditSupplierScreen({ navigation , route}) {
  const {username} = route.params;
    const [SupplierID,setSupplierID] = useState('');
    //const [Supplier,setSupplier] = useState('');
    const onSubmit = () => {
        API.getSupplierByID(SupplierID)
        //setModalVisible(true)
        console.log("Sameer",SupplierID)
        const id = SupplierID
        console.log(id);

        navigation.navigate('SupplierEditing',{username: username , id: id  });
    }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Edit Supplier Screen</Header>
        <TextInput
            label="Product ID "
            returnKeyType="next"
            value={SupplierID}
            onChangeText={(value) => setSupplierID(value)}
            autoCapitalize="none"
        />
        <View>
        </View>
        <Button mode="outlined" onPress={onSubmit } >Submit</Button>
     
    </Background>
  )
}