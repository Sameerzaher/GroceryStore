import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { StyleSheet,Text, View,FlatList} from 'react-native';
import BackButton from '../../components/BackButton'
import Button from "../../components/Button";
import {AntDesign, Feather} from "@expo/vector-icons";
export default function AllSupplierScreen({navigation, route}) {
    const {username} = route.params;
    const [Suppliers,setSuppliers] = useState('');
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData = ()=>{
        fetch("http://127.0.0.1:8000/mainApp/Suppliers/")
            .then(response => response.json())
            //console.log(response.json())
            .then(jsonResponse => setSuppliers(jsonResponse))
            .catch(error => console.log(error))
    };
    const renderSupplier = ({item}) => {
        return(
            <View style={{margin:5,borderWidth:0.5,padding:15}}>
                <View style={{flex:1,backgroundColor:"white" ,alignSelf:"center"}}>
                    <View style={{ flexDirection: "row" }}>
                        <Button   onPress={
                            () => navigation.navigate('DeleteSupplierScreen', {username: username})

                        }>
                            <AntDesign name="delete" size={24} color="black" />
                        </Button>
                        <Button
                            onPress={
                                () => navigation.navigate('EditSupplierScreen', {username: username})

                            }>
                            <Feather name="edit" size={24} color="black" /></Button>
                    </View>
                </View>
                <Text style={{margin:3, padding:3, color:"black",fontSize:20,fontWeight:"bold", alignSelf:'center'}}>
                    SupplierId: {item.id}
                </Text>
                <Text style={{color:"black", fontSize:20}}>name : {item.name}</Text>
                <Text style={{color:"black", fontSize:20}}>Supplier_email : {item.SupplierEmail}</Text>
                <Text style={{color:"black", fontSize:20}}>Products : {item.Products}</Text>
                <Text style={{color:"black", fontSize:20}}>address : {item.address}</Text>
            </View>

        )
    }
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>All Suppliers Screen</Header>
            <View style={{flex:1,backgroundColor:"white"}}>
                <FlatList
                    style={{
                        flex: 1,
                        padding: 20,
                        width: 400,
                    }}
                    dark={{
                        borderColor: "muted.50"
                    }}
                    data={Suppliers}
                    renderItem={renderSupplier}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
        </Background>
    )
};



