import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Text } from 'react-native-paper'
import BackButton from '../../components/BackButton'
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
export default function EmployeeOrders({ navigation, route }) {
    const{username} = route.params
    return(
        <Background>
            <BackButton goBack={navigation.goBack}/>

            <Logo />
            <Header>Orders</Header>

            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('AllOrderScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>AllOrderScreen</Button>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('NewOrderScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>NewOrderScreen</Button>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('EditOrderScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>EditOrderScreen</Button>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('DeleteOrderScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>DeleteOrderScreen</Button>
        </Background>
    )
}