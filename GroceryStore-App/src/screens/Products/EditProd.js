import {React , useState }from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { API } from '../../../api-service'
import { Alert } from 'react-native'
export default function EditProd({ navigation , route}) {
  const {username,id} = route.params;
    console.log("Edit Prod",JSON.stringify(username))
 
  console.log("PRODUCT ID from EditProd",id)
  
  const [NewProductname,NewsetProductname] = useState('');
  const [Newsuppliername,Newsetsuppliername] = useState('');
  const [Newamount,NewsetAmount] = useState('');
  const [Newprice,NewsetPrice] = useState('');
  const onSubmit = () => {
    API.updateProductDetails(id,NewProductname,Newsuppliername,Newamount,Newprice)
    .catch( error => console.log(error)) 
        if (NewProductname == "" || Newsuppliername == "" || Newamount == ""|| Newprice == "") {
          alert("one of the Felids is empty");
          return;
        } 
    Alert.alert(
        'Updated Product ID ' ,id
         
       );

  }
  return (
    <Background>
    <BackButton goBack={navigation.goBack} />
  <Logo />
  <Header>Edit ---  Product Screen</Header>
  <TextInput
   label="Product Name "
   returnKeyType="next"
   value={NewProductname}
   onChangeText={(value) => NewsetProductname(value)}
   
   autoCapitalize="none"
  />

 <TextInput
   label="Supplier Name "
   returnKeyType="next"
   value={Newsuppliername}
   onChangeText={(value) => Newsetsuppliername(value)}
   autoCapitalize="none"
  />
  <TextInput
   label="Amount "
   returnKeyType="next"
   value={Newamount}
   onChangeText={(value) => NewsetAmount(value)}
   autoCapitalize="none"
  />
  <TextInput
   label="Price"
   returnKeyType="next"
   value={Newprice}
   onChangeText={(value) => NewsetPrice(value)}
   autoCapitalize="none"
  />
     <Button mode="outlined"  onPress={onSubmit}>Update</Button>
     
    </Background>
  )
}