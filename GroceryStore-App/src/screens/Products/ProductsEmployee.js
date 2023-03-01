import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
export default function ProductsEmployee({ navigation, route  }) {
    const{username} = route.params
    return (
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <Logo />
            <Header>Products Screen</Header>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('AllProductScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>
                All Products</Button>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('AddProductScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>Add Product</Button>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('EditProductScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>Edit Product</Button>
            <Button mode="outlined"
                    onPress={
                        () => navigation.navigate('DeleteProductScreen', {username: username})
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [{name: 'Orders'}],
                        // })
                    }>Delete Product</Button>

        </Background>
    )
}
