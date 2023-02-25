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
import { API, getToken } from '../../../api-service';

export default function AddUserScreen({ navigation, route }) {
  const { username } = route.params || {};
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Get values from database
    axios
      .get('http://127.0.0.1:8000/mainApp/users/')
      .then((response) => {
        // Store values in temporary array
        let newArray = response.data.map((item) => {
          return { key: item.username, value: item.username };
        });
        // Set data variable
        setData(newArray);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onSubmit = async () => {
    try {
      const token = await getToken();
      await API.createUserProfile(usernameInput, firstName, lastName, email, userType);
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
      <View style={styles.container}>
      <SelectList
  setSelected={(selected) => setUsernameInput(selected[0]?.value)}
  data={data}
  onSelect={() => {}}
/>
      </View>
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstName}
        onChangeText={(value) => setFirstName(value)}
        autoCapitalize="none"
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastName}
        onChangeText={(value) => setLastName(value)}
        autoCapitalize="none"
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
      />
      <View style={styles.dropdownContainer}>
        <SelectList
          data={[
            { key: '1', value: 'Store Manager' },
            { key: '2', value: 'Store Employee' },
          ]}
          setSelected={setUserType}
          onSelect={(selectedItem) => setUserType(selectedItem)}
          defaultValue={userType}
          style={styles.dropdownStyle}
          itemStyle={styles.dropdownItem}
          labelStyle={styles.dropdownLabel}
        />
      </View>
      <Button mode="outlined" onPress={onSubmit}>
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
