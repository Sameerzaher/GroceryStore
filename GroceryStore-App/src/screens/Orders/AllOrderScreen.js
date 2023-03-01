import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { StyleSheet,Text, View,FlatList} from 'react-native';
import BackButton from '../../components/BackButton'
import Button from "../../components/Button";
import {AntDesign, Feather} from "@expo/vector-icons";
export default function AllOrderScreen({navigation, route}) {
  const {username} = route.params;
  const [orders,setOrders] = useState('');
  useEffect(()=>{
    fetchData()
  },[]);
  const fetchData = ()=>{
    fetch("http://127.0.0.1:8000/mainApp/Orders/")
        .then(response => response.json())
        //console.log(response.json())
        .then(jsonResponse => setOrders(jsonResponse))
        .catch(error => console.log(error))
  };
  const renderOrder = ({item}) => {
    return(
        <View style={{margin:10,borderWidth:0.5,padding:20}}>
            <View style={{flex:1,backgroundColor:"white" ,alignSelf:"center"}}>
                <View style={{ flexDirection: "row" }}>
                    <Button   onPress={
                        () => navigation.navigate('DeleteOrderScreen', {username: username})

                    }>
                        <AntDesign name="delete" size={24} color="black" />
                    </Button>
                    <Button
                        onPress={
                            () => navigation.navigate('EditOrderScreen', {username: username})

                        }>
                        <Feather name="edit" size={24} color="black" /></Button>
                </View>
            </View>
          <Text style={{margin:7, padding:7, color:"black",fontSize:20,fontWeight:"bold", alignSelf:'center'}}>
            OrderID: {item.id}
          </Text>
          <Text style={{color:"black", fontSize:20}}>delivery_name : {item.delivery_name}</Text>
          <Text style={{color:"black", fontSize:20}}>products : {item.products}</Text>
          <Text style={{color:"black", fontSize:20}}>total_price : {item.total_price}</Text>
          <Text style={{color:"black", fontSize:20}}>order_date : {item.order_date}</Text>
          <Text style={{color:"black", fontSize:20}}>delivery_date : {item.delivery_date}</Text>
          <Text style={{color:"black", fontSize:20}}>address : {item.address}</Text>
          <Text style={{color:"black", fontSize:20}}>amount : {item.amount}</Text>
          <Text style={{color:"black", fontSize:20}}>status : {item.status}</Text>
        </View>

    )
  }
  return (
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>All Orders </Header>
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
              data={orders}
              renderItem={renderOrder}
              keyExtractor={(item,index) => index.toString()}
          />
        </View>
      </Background>
  )
};



