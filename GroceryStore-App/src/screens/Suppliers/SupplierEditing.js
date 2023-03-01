import {React, useEffect, useState} from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { API } from '../../../api-service'
import {Alert, View} from 'react-native'
import MultiSelect from "react-native-multiple-select";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Paragraph from "../../components/Paragraph";
export default function SupplierEditing({ navigation , route}) {
    const {username,id} = route.params;


    console.log("Supplier ID from SupplierEditing",id)

    const [NewsupplierName, setNewsupplierName] = useState('');
    const [NewproductItems, setNewProductItems] = useState([]);
    const [NewselectedProductItems, setNewSelectedProductItems] = useState([]);
    const [NewsupplierEmail, setNewSupplierEmail] = useState('');
    const [Newaddress, setNewAddress] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/mainApp/Products/')
            .then((response) => response.json())
            .then((data) => setNewProductItems(data))
            .catch((error) => console.error(error));
    }, []);

    const onSelectedItemsChange = (selectedItems) => setNewSelectedProductItems(selectedItems);

    const onSubmit = () => {
        if (NewsupplierName === '' || NewsupplierEmail === '' || NewselectedProductItems.length === 0 || Newaddress === '') {
            Alert.alert('One of the fields is empty');
            return;
        }
        API.UpdateSupplier(id,NewsupplierName, NewsupplierEmail, NewselectedProductItems, Newaddress)
            .then(() => {
                Alert.alert('Updated supplier ID ',id );
            })
            .catch((error) => console.log(error));
    };

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Edit Supplier Screen</Header>
            <TextInput
                label="Supplier Name"
                returnKeyType="next"
                value={NewsupplierName}
                onChangeText={(value) => setNewsupplierName(value)}
                autoCapitalize="none"
            />
            <TextInput
                label="Supplier Email"
                returnKeyType="next"
                value={NewsupplierEmail}
                onChangeText={(value) => setNewSupplierEmail(value)}
                autoCapitalize="none"
            />
            <View style={{ flex: 1 }}>
                <MultiSelect
                    items={NewproductItems}
                    searchInputPlaceholderText="Search Items..."
                    uniqueKey="id"
                    displayKey="name"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={NewselectedProductItems}
                    styleDropdownMenu={{ marginTop: 50 }}
                    styleDropdownMenuSubsection={{ backgroundColor: 'white' }}
                    styleTextDropdown={{ paddingHorizontal: 50}}
                    styleListContainer={{ backgroundColor: 'white' }}
                    styleItemContainer={{ paddingVertical: 50 }}
                    iconSearch={<MaterialCommunityIcons name="magnify" size={10} color="#999" />}
                    iconCancel={<MaterialCommunityIcons name="close" size={10} color="#999" />}
                />
            </View>
            <Paragraph>Selected Products: {NewselectedProductItems.join(', ')}</Paragraph>
            <TextInput
                label="Address"
                returnKeyType="next"
                value={Newaddress}
                onChangeText={(value) => setNewAddress(value)}
                autoCapitalize="none"
            />
            <Button mode="outlined" onPress={onSubmit}>
                Submit
            </Button>
        </Background>
    );
}