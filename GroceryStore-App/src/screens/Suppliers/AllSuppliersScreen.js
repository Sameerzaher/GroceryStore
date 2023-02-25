import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { StyleSheet,Text, View,FlatList} from 'react-native';
import BackButton from '../../components/BackButton'
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
    <View style={{margin:20,borderWidth:0.5,padding:40}}>
    <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>
      Supplier {item.id}
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
        data={Suppliers}
        renderItem={renderSupplier}
        keyExtractor={(item,index) => index.toString()}
        />
    </View>
    </Background>
  )
};
            


