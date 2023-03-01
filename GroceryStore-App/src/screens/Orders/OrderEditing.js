import React, {useEffect, useState} from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import BackButton from '../../components/BackButton'
import {Alert, ScrollView, StyleSheet, View} from "react-native";
import {API} from "../../../api-service";
import TextInput from "../../components/TextInput";
import MultiSelect from "react-native-multiple-select";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";

export default function OrderEditing({ navigation , route}) {
    const {username,id} = route.params;


    console.log("order ID from OrderEditing",id)
    const [newdeliveryname, setnewDeliveryName] = useState('');
    const [newproductItems, setnewProductItems] = useState([]);
    const [newselectedProductItems, setnewSelectedProductItems] = useState([]);
    const [newtotalprice, setnewTotalPrice] = useState('');
    const [neworderdate, setnewOrderDate] = useState('');
    const [newdeliverydate, setnewDeliveryDate] = useState('');
    const [newaddress, setnewAddress] = useState('');
    const [newamount , setnewAmount] = useState('');
    const [newstatus , setnewStatus] = useState('');
    //const [newisChecked, setnewIsChecked] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/mainApp/Products/')
            .then((response) => response.json())
            .then((data) => setnewProductItems(data))
            .catch((error) => console.error(error));
    }, []);

    const onSelectedItemsChange = (selectedItems) => setnewSelectedProductItems(selectedItems);

    const onSubmit = () => {
        if (newdeliveryname === '' || newtotalprice === '' || newselectedProductItems.length === 0 || newaddress === ''
            || neworderdate === '' || newdeliverydate === '' || newamount === '' || newstatus === '') {
            Alert.alert('One of the fields is empty');
            return;
        }
        API.UpdateOrderDetails(id, newdeliveryname, newselectedProductItems, newtotalprice, neworderdate, newdeliverydate, newaddress, newamount, newstatus)
            .then(() => {
                Alert.alert('Updated order id ', id);
            })
            .catch((error) => console.log(error));

    };

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Edit Order Screen</Header>
            <ScrollView style={styles.scrollView}>
                <TextInput
                    label="Delivery Name"
                    returnKeyType="next"
                    value={newdeliveryname}
                    onChangeText={(value) => setnewDeliveryName(value)}
                    autoCapitalize="none"
                />
                <View style={{ flex: 1, height: 200, width: '100%' }}>
                    <MultiSelect
                        items={newproductItems}
                        searchInputPlaceholderText="Search Items..."
                        uniqueKey="id"
                        displayKey="name"
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={newselectedProductItems}
                        styleDropdownMenu={{ marginTop: 5 }}
                        styleDropdownMenuSubsection={{ backgroundColor: 'white' }}
                        styleTextDropdown={{ paddingHorizontal: 5}}
                        styleListContainer={{ backgroundColor: 'white' }}
                        styleItemContainer={{ paddingVertical: 5 }}
                        iconSearch={<MaterialCommunityIcons name="magnify" size={10} color="#999" />}
                        iconCancel={<MaterialCommunityIcons name="close" size={10} color="#999" />}
                    />
                </View>
                <Paragraph>Selected Products: {newselectedProductItems.join(', ')}</Paragraph>
                <TextInput
                    label="Total Price"
                    returnKeyType="next"
                    value={newtotalprice}
                    onChangeText={(value) => setnewTotalPrice(value)}
                    autoCapitalize="none"

                />
                <TextInput
                    label="Order Date (YYYY - MM - DD)"
                    returnKeyType="next"
                    value={neworderdate}
                    onChangeText={(value) => setnewOrderDate(value)}
                    autoCapitalize="none"


                />
                <TextInput
                    label="Delivery Date (YYYY - MM - DD) "
                    returnKeyType="next"
                    value={newdeliverydate}
                    onChangeText={(value) => setnewDeliveryDate(value)}
                    autoCapitalize="none"
                />
                <TextInput
                    label="Address"
                    returnKeyType="next"
                    value={newaddress}
                    onChangeText={(value) => setnewAddress(value)}
                    autoCapitalize="none"
                />
                <TextInput
                    label="Amount"
                    returnKeyType="next"
                    value={newamount}
                    onChangeText={(value) => setnewAmount(value)}
                    autoCapitalize="none"
                />
                <TextInput
                    label="Status"
                    returnKeyType="next"
                    value={newstatus}
                    onChangeText={(value) => setnewStatus(value)}
                    autoCapitalize="none"
                    keyboardType="numeric"
                />
            </ScrollView>
            {console.log(id, newdeliveryname, newselectedProductItems, newtotalprice, neworderdate, newdeliverydate, newaddress, newamount, newstatus)}
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
