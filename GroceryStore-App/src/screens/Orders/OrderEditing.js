import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'

export default function OrderEditing({ navigation , route}) {
    const {username} = route.params;

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Order Screen</Header>

        </Background>
    )
}