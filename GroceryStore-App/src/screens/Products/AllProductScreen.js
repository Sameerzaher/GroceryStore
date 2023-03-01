import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import BackButton from '../../components/BackButton'
import Button from "../../components/Button";
import {AntDesign, Feather, FontAwesome5} from "@expo/vector-icons";
import {API} from "../../../api-service";
export default function AllProductScreen({navigation, route}) {
    const {username} = route.params;
    // const [show, setshow] = useState(true);
    const [products,setProducts] = useState('');

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = ()=>{
        fetch("http://127.0.0.1:8000/mainApp/Products/")
            .then(response => response.json())
             .then(jsonResponse => setProducts(jsonResponse))
            .catch(error => console.log(error))
    };
    const renderProduct = ({item}) => {
        return(
            <View style={{margin:5, borderWidth:1,padding:15}}>
                <View style={{flex:1,backgroundColor:"white" ,alignSelf:"center"}}>
                    <View style={{ flexDirection: "row" }}>
                    <Button   onPress={
                        () => navigation.navigate('DeleteProductScreen', {username: username})

                    }>
                        <AntDesign name="delete" size={24} color="black" />
                    </Button>
                    <Button
                        onPress={
                            () => navigation.navigate('EditProductScreen', {username: username})

                        }>
                        <Feather name="edit" size={24} color="black" /></Button>
                    </View>
                </View>
                <Text style={{margin:3, padding:3, color:"black",fontSize:20,fontWeight:"bold", alignSelf:'center'}}>
                    product: {item.id}
                </Text>
                <Text style={{color:"black", fontSize:20}}>name : {item.name}</Text>
                <Text style={{color:"black", fontSize:20}}>amount : {item.amount}</Text>
                <Text style={{color:"black", fontSize:20}}>price : {item.price}</Text>
            </View>

        )
    }
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>All Product Screen</Header>
            <View style={{flex:2,backgroundColor:"white"}}>
                <FlatList
                    style={{
                        flex: 1,
                        padding: 15,
                        width: 400,
                    }}
                    dark={{
                        borderColor: "muted.50"
                    }}
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
        </Background>
    )
};



