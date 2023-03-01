import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Products,
  AddUserScreen,
  NewOrderScreen,
  Orders,
  EditOrderScreen,
  Suppliers,
  AddSupplierScreen,
  EditSupplierScreen,
  UserScreen,
  DeleteUserScreen,
  AddProductScreen,
  DeleteProductScreen,
  EditProductScreen,
  AllUsersScreen,
  AllProductScreen,
  EditProd,
  AllSupplierScreen,
  DeleteSupplierScreen,
  DeleteOrderScreen,
  AllOrderScreen,
  Dashboard2,
  EmployeeOrders,
  ProductsEmployee,
  EmployeeSuppliers,
  SupplierEditing,
  OrderEditing,

} from './src/screens'


const Stack = createStackNavigator()

export default function App() {
  return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                headerShown: false,
              }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
            <Stack.Screen name='NewOrderScreen' component={NewOrderScreen} />
            <Stack.Screen name='Orders' component={Orders} />
            <Stack.Screen name='EditOrderScreen' component={EditOrderScreen} />
            <Stack.Screen name='Suppliers' component={Suppliers}/>
            <Stack.Screen name='AddSupplierScreen' component={AddSupplierScreen}/>
            <Stack.Screen name='EditSupplierScreen' component={EditSupplierScreen}/>
            <Stack.Screen name='UserScreen' component={UserScreen}/>
            <Stack.Screen name='DeleteUserScreen' component={DeleteUserScreen}/>
            <Stack.Screen name='AddProductScreen' component={AddProductScreen}/>
            <Stack.Screen name='EditProductScreen' component={EditProductScreen}/>
            <Stack.Screen name='EditProd' component={EditProd}/>
            <Stack.Screen name='DeleteProductScreen' component={DeleteProductScreen}/>
            <Stack.Screen name='AllUsersScreen' component={AllUsersScreen}/>
            <Stack.Screen name='AllProductScreen' component={AllProductScreen}/>
            <Stack.Screen name='AllSupplierScreen' component={AllSupplierScreen}/>
            <Stack.Screen name='DeleteSupplierScreen' component={DeleteSupplierScreen}/>
            <Stack.Screen name='DeleteOrderScreen' component={DeleteOrderScreen}/>
            <Stack.Screen name='AllOrderScreen' component={AllOrderScreen}/>
            <Stack.Screen name='Dashboard2' component={Dashboard2}/>
            <Stack.Screen name='EmployeeOrders' component={EmployeeOrders}/>
            <Stack.Screen name='ProductsEmployee' component={ProductsEmployee}/>
            <Stack.Screen name='EmployeeSuppliers' component={EmployeeSuppliers}/>
            <Stack.Screen name='SupplierEditing' component={SupplierEditing}/>
            <Stack.Screen name='OrderEditing' component={OrderEditing}/>
            <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  )
}
