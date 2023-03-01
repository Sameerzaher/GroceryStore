import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import { StyleSheet,Text, View,FlatList} from 'react-native';
import BackButton from '../../components/BackButton'
export default function AllProductScreen({navigation, route}) {
  const {username} = route.params;
  const [userProfile,setuserProfile] = useState('');
  useEffect(()=>{
    fetchData()
},[]);
    const fetchData = ()=>{
       fetch("http:///127.0.0.1:8000/mainApp/userProfile/")
       .then(response => response.json())
      .then(jsonResponse => setuserProfile(jsonResponse))
      .catch(error => console.log(error))    
    };
const renderUserProfile = ({item}) => {
  return(  
    <View style={{margin:20,borderWidth:0.5,padding:40}}>
    <Text style={{color:"black",fontSize:30,fontWeight:"bold"}}>
      UserProfile {item.id}
    </Text>
    <Text style={{color:"black", fontSize:20}}>username : {item.username}</Text>
    <Text style={{color:"black", fontSize:20}}>email : {item.email}</Text>
    <Text style={{color:"black", fontSize:20}}>firstName : {item.firstName}</Text>
    <Text style={{color:"black", fontSize:20}}>lastName : {item.lastName}</Text>
        <Text style={{color:"black", fontSize:20}}>Type : {item.userType}</Text>

  </View>

  )
  }
  return (
    <Background>
        <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>All Users Screen</Header>
    <View style={{flex:1,backgroundColor:"white"}}>
      <FlatList
        data={userProfile}
        renderItem={renderUserProfile}
        keyExtractor={(item,index) => index.toString()}
        />
    </View>
    </Background>
  )
};
            


