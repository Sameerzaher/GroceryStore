import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import {Ionicons} from "@expo/vector-icons";

export default function EmployeeSuppliers({ navigation, route }) {
    const{username} = route.params
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Suppliers Screen</Header>
            <Button mode="outlined"
                    style={{width:300}}
                    onPress={
                        () => navigation.navigate('AllSupplierScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }><Ionicons name="person" size={24} color="black" />  All Suppliers</Button>
        </Background>
    )
}
