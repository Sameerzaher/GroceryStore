import React, { useState, useEffect } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import TextInput from '../../components/TextInput';
import { SelectList } from 'react-native-dropdown-select-list';
import { View, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API } from '../../../api-service';

export default function AddUserScreen({ navigation, route }) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const userTypes = [
        { key: '1', value: 'Store Manager' },
        { key: '2', value: 'Store Employee' },
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/mainApp/users/`);
                const users = response.data.map((user) => ({ key: user.username, value: user.username }));
                setUsers(users);
            } catch (error) {
                console.log(error);
                Alert.alert('Error fetching data from server');
            }
        };
        fetchUsers();
    }, []);

    const handleSelectUser = (selected) => {
        setSelectedUser(selected);
    };

    const handleSubmit = async () => {
        console.log(selectedUser, firstName, lastName, email, userType);
        if (!selectedUser || !firstName || !lastName || !email || !userType) {
            console.log(selectedUser, firstName, lastName, email, userType);
            Alert.alert('Please fill in all fields');
            return;
        }

        try {
            //const token = await getToken();
            await API.createUserProfile( selectedUser, firstName, lastName, email,userType);

            Alert.alert('User created successfully');
        } catch (error) {
            console.log(error);
            Alert.alert('Error creating user');
        }
    };

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Add User Screen</Header>

            <SelectList
                setSelected={handleSelectUser}
                data={users}
                label="Select a User"
            />

            <TextInput
                label="First Name"
                returnKeyType="next"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="none"
            />
            <TextInput
                label="Last Name"
                returnKeyType="next"
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="none"
            />
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />

            <View style={styles.dropdownContainer}>
                <SelectList
                    setSelected={setUserType}
                    data={userTypes}
                    label="Select a User Type"
                />
            </View>

            <Button mode="outlined" onPress={handleSubmit}>
                Submit
            </Button>
        </Background>
    );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dropdownContainer: {
    height: 40,
    width: '80%',
    marginTop: 20,
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#000',
  },
});
