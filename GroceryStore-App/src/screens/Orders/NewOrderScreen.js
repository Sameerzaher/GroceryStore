import React, { useEffect, useState } from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import TextInput from '../../components/TextInput';
import { Text } from 'react-native-paper';
import { API } from '../../../api-service';
import { Alert ,ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

import { View } from 'react-native';

export default function NewOrderScreen({ navigation, route }) {
  const { username } = route.params;
  const [deliveryname, setDeliveryName] = useState('');
  const [productItems, setProductItems] = useState([]);
  const [selectedProductItems, setSelectedProductItems] = useState([]);
  const [totalprice, setTotalPrice] = useState('');
  const [orderdate, setOrderDate] = useState('');
  const [deliverydate, setDeliveryDate] = useState('');
  const [address, setAddress] = useState('');
  const [amount , setAmount] = useState('');
  const [status , setStatus] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/mainApp/Products/')
      .then((response) => response.json())
      .then((data) => setProductItems(data))
      .catch((error) => console.error(error));
  }, []);

  const onSelectedItemsChange = (selectedItems) => setSelectedProductItems(selectedItems);

  const onSubmit = () => {
    if (deliveryname === '' || totalprice === '' || selectedProductItems.length === 0 || address === ''
    || orderdate === '' || deliverydate === '' || amount === '' || status === '') {
      Alert.alert('One of the fields is empty');
      return;
    }
    API.AddNewOrder(deliveryname, selectedProductItems,totalprice ,orderdate, deliverydate, address, amount, status)
      .then(() => {
        Alert.alert('New Order added successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Add Order Screen</Header>
      <ScrollView style={styles.scrollView}>
      <TextInput
        label="Delivery Name"
        returnKeyType="next"
        value={deliveryname}
        onChangeText={(value) => setDeliveryName(value)}
        autoCapitalize="none"
      />
       <View style={{ flex: 1, height: 200, width: '250' }}>
  <MultiSelect
    items={productItems}
    searchInputPlaceholderText="Search Items..."
    uniqueKey="id"
    displayKey="name"
    onSelectedItemsChange={onSelectedItemsChange}
    selectedItems={selectedProductItems}
    styleDropdownMenu={{ marginTop: 5 }}
    styleDropdownMenuSubsection={{ backgroundColor: 'white' }}
    styleTextDropdown={{ paddingHorizontal: 5}}
    styleListContainer={{ backgroundColor: 'white' }}
    styleItemContainer={{ paddingVertical: 5 }}
    iconSearch={<MaterialCommunityIcons name="magnify" size={10} color="#999" />}
    iconCancel={<MaterialCommunityIcons name="close" size={10} color="#999" />}
  />
</View>
      <Paragraph>Selected Products: {selectedProductItems.join(', ')}</Paragraph>
      <TextInput
        label="Total Price"
        returnKeyType="next"
        value={totalprice}
        onChangeText={(value) => setTotalPrice(value)}
        autoCapitalize="none"
      />
      <TextInput
        label="Order Date (YYYY - MM - DD)"
        returnKeyType="next"
        value={orderdate}
        onChangeText={(value) => setOrderDate(value)}
        autoCapitalize="none"
        Pl

      />
      <TextInput
        label="Delivery Date (YYYY - MM - DD) "
        returnKeyType="next"
        value={deliverydate}
        onChangeText={(value) => setDeliveryDate(value)}
        autoCapitalize="none"
      />
      <TextInput
        label="Address"
        returnKeyType="next"
        value={address}
        onChangeText={(value) => setAddress(value)}
        autoCapitalize="none"
      />
      <TextInput
        label="Amount"
        returnKeyType="next"
        value={amount}
        onChangeText={(value) => setAmount(value)}
        autoCapitalize="none"
      />
          <TextInput
              label="Status"
              returnKeyType="next"
              value={status}
              onChangeText={(value) => setStatus(value)}
              autoCapitalize="none"
              keyboardType="numeric"
          />
      </ScrollView>
    
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
