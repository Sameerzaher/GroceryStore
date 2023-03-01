import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { StyleSheet,Text, View,FlatList} from 'react-native';
import BackButton from '../../components/BackButton'
export default function AllProductScreen({navigation, route}) {
  const {username} = route.params;
  const [products,setProducts] = useState('');
  useEffect(()=>{
    fetchData()
},[]);
    const fetchData = ()=>{
       fetch("https://e343-2a06-c701-41fe-f800-7de3-4699-caf7-40a1.eu.ngrok.io/mainApp/Products/")
       .then(response => response.json())
      .then(jsonResponse => setProducts(jsonResponse))
      .catch(error => console.log(error))
    };
const renderProduct = ({item}) => {
  return(
    <View style={{margin:10, borderWidth:1,padding:20}}>
    <Text style={{margin:7, padding:7, color:"black",fontSize:20,fontWeight:"bold", alignSelf:'center'}}>
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
              padding: 20,
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



