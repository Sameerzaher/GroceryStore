import React, { useEffect, useState } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import TextInput from '../../components/TextInput';
import { API } from '../../../api-service';
import { Alert } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

import { View } from 'react-native';

export default function AddSupplierScreen({ navigation, route }) {
  const { username } = route.params;
  const [supplierName, setSupplierName] = useState('');
  const [productItems, setProductItems] = useState([]);
  const [selectedProductItems, setSelectedProductItems] = useState([]);
  const [supplierEmail, setSupplierEmail] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/mainApp/Products/')
      .then((response) => response.json())
      .then((data) => setProductItems(data))
      .catch((error) => console.error(error));
  }, []);

  const onSelectedItemsChange = (selectedItems) => setSelectedProductItems(selectedItems);

  const onSubmit = () => {
    if (supplierName === '' || supplierEmail === '' || selectedProductItems.length === 0 || address === '') {
      Alert.alert('One of the fields is empty');
      return;
    }
    API.AddNewSupplier(supplierName, supplierEmail, selectedProductItems, address)
      .then(() => {
        Alert.alert('New supplier added successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Add Supplier Screen</Header>
      <TextInput
        label="Supplier Name"
        returnKeyType="next"
        value={supplierName}
        onChangeText={(value) => setSupplierName(value)}
        autoCapitalize="none"
      />
      <TextInput
        label="Supplier Email"
        returnKeyType="next"
        value={supplierEmail}
        onChangeText={(value) => setSupplierEmail(value)}
        autoCapitalize="none"
      />
      <View style={{ flex: 1 }}>
      <MultiSelect
  items={productItems}
  searchInputPlaceholderText="Search Items..."
  uniqueKey="id"
  displayKey="name"
  onSelectedItemsChange={onSelectedItemsChange}
  selectedItems={selectedProductItems}
  styleDropdownMenu={{ marginTop: 20 }}
  styleDropdownMenuSubsection={{ backgroundColor: 'white' }}
  styleTextDropdown={{ paddingHorizontal: 20, fontFamily: 'sans-serif' }}
  styleListContainer={{ backgroundColor: 'white' }}
  styleItemContainer={{ paddingVertical: 20 }}
  iconSearch={<MaterialCommunityIcons name="magnify" size={10} color="#999" />}
  iconCancel={<MaterialCommunityIcons name="close" size={10} color="#999" />}
/>


</View>
      <Paragraph>Selected Products: {selectedProductItems.join(', ')}</Paragraph>
      <TextInput
        label="Address"
        returnKeyType="next"
        value={address}
        onChangeText={(value) => setAddress(value)}
        autoCapitalize="none"
      />
      <Button mode="outlined" onPress={onSubmit}>
        Submit
      </Button>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
