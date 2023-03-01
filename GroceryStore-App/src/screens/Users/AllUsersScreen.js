import React, {useState, useEffect} from 'react';
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import {StyleSheet, Text, View, FlatList, Alert, ActivityIndicator} from 'react-native';
import BackButton from '../../components/BackButton'
import { AntDesign,  Feather} from '@expo/vector-icons';
import Button from '../../components/Button';
import {API} from "../../../api-service";
import {Flex} from "native-base";
export default function AllProductScreen({navigation, route}) {
    const {username} = route.params;
    const [userProfile, setUserProfile] = useState([]);
    //const [show,setshow] =useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch("http://127.0.0.1:8000/mainApp/userProfile/")
            .then(response => response.json())
            .then(jsonResponse => setUserProfile(jsonResponse))
            .catch(error => console.log(error));
    };


    const renderUserProfile = ({item}) => {
        return (
            <View style={{margin: 10, borderWidth: 0.5, padding: 20}}>
                <View style={{flex:1,backgroundColor:"white"}}>
                <Button  onPress={
                () => navigation.navigate('DeleteUserScreen', {username: username})

                }>
                    <AntDesign name="delete" size={24} color="black" />
                </Button>

                </View>
                <Text style={{margin: 7, padding: 7, color: "black", fontSize: 20, fontWeight: "bold", alignSelf: 'center'}}>
                    UserId: {item.id}
                </Text>
                <Text style={{color: "black", fontSize: 20}}>username : {item.username}</Text>
                <Text style={{color: "black", fontSize: 20}}>email : {item.email}</Text>
                <Text style={{color: "black", fontSize: 20}}>firstName : {item.firstName}</Text>
                <Text style={{color: "black", fontSize: 20}}>lastName : {item.lastName}</Text>
                <Text style={{color: "black", fontSize: 20}}>Type : {item.userType}</Text>
            </View>
        );
    };
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>All Users Screen</Header>

            <View style={{flex:1,backgroundColor:"white"}}>
                <FlatList
                    data={userProfile}
                    style={{
                        flex: 1,
                        padding: 20,
                        width: 400,

                    }}
                    dark={{
                        borderColor: "muted.50"
                    }}
                    renderItem={renderUserProfile}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
        </Background>
    )
};



