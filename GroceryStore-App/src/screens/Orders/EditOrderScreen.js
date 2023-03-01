import React, { useState } from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { API } from '../../../api-service'
import { Alert, Modal, StyleSheet, Text, Pressable, View, Platform, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../../components/Header";

export default function EditOrderScreen({navigation, route}) {
    const {username} = route.params;
    const [OrderID,setOrderID] = useState('');
   // const [modalVisible, setModalVisible] = useState(false);
    const [order,setorder] = useState('');
    const onSubmit = () => {
        API.getOrderByID(OrderID)
        //setModalVisible(true)
        console.log("Sameer",OrderID)
        const id = OrderID
        console.log(id);

        navigation.navigate('OrderEditing',{username: username , id: id  });
    }
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Order Screen</Header>
            <TextInput
                label="Order ID "
                returnKeyType="next"
                value={OrderID}
                onChangeText={(value) => setOrderID(value)}
                autoCapitalize="none"
            />
            <View>
            </View>
            <Button mode="outlined" onPress={onSubmit } >Submit</Button>

        </Background>
    )

}

