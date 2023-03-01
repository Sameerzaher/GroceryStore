import React, { useState , useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, Switch,ActivityIndicator,Alert} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { API } from '../../api-service';
import { useCookies } from 'react-cookie';
// import {red} from "react-native-reanimated/lib/types/lib";

export default function LoginScreen({ navigation }) {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const[ token, setToken] = useCookies(['mr-token']);
    const [show,setshow] =useState(false);
    //const [success, setSuccesss] = useState(false);

    useEffect( () =>{
        console.log(token);
        if(token['mr-token'] )
            if(token['mr-token'] === 'undefined' )
                setErrorMessage('שם משתמש או סיסמא לא נכונים');


    }, [token])
    const loginClicked = () =>  {
        //const passwordError = passwordValidator(password.value)
        setshow(true);
        console.log('inside login user')
        console.log(username, password)
        API.loginUser({username, password})
            //.then( resp => console.log(resp.username))
            .then( resp => setToken('mr-token', resp.token))
            .catch( error => console.log(error))
        if (username == "" || password == "") {
            alert("username or password is empty");
            return;
        }
        if( username == "kuku" && password == "admin" )
        {
            navigation.navigate('Dashboard2', {username: username});
            return;
        }
        else
        {
            setTimeout(()=>{
                setshow(false);
                Alert.alert("Welcome","Welcome to our app");
                console.log(username);


                navigation.navigate('Dashboard', {username: username});
            },2000)
        }
//navigation.navigate('Dashboard', {username: username});



    }
    return (

        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Welcome back.</Header>

            <TextInput
                label="User Name"
                returnKeyType="next"
                value={username}
                onChangeText={(value) => setUsername(value)}
                autoCapitalize="none"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry
            />
            <ActivityIndicator size="large" color={"#560CCE"} animating={show}  />
                <Button
                    style={{  width:200, justifyContent: 'center'}}
                    mode="contained" onPress={loginClicked}>
                    Login
                </Button>
                <View style={styles.row}>

                    <Text>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                        <Text style={styles.link}>Sign up</Text>
                    </TouchableOpacity>
                </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
