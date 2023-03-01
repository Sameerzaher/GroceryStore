import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'

export default function EmployeeSuppliers({ navigation, route }) {
    const{username} = route.params
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Suppliers Screen</Header>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('AllSupplierScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>All Suppliers</Button>
        </Background>
    )
}
