import React from 'react';

export class API extends React.Component{
    
    static loginUser(body){ 
        console.log(body)
        
        return fetch(`http://127.0.0.1:8000/auth/`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify( body )
            }).then( resp => resp.json())
        }
    static registerUser(body){ 
         console.log(body)
         return fetch(`http://127.0.0.1:8000/mainApp/users/`, {
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json',
                     //'Authorization': `Token ${token}`
                },
                 body: JSON.stringify( body )
                 }).then( resp => resp.json())
             }
             static displayUsers(){ 
                console.log("inside displayUsers fun")
                return fetch(`http://127.0.0.1:8000/mainApp/users/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                     },
                    //body: JSON.stringify( body )
                }).then( resp => resp.json())
                // .then( resp => console.log(resp))
                }      
        static getUserDetails(token){

                return fetch(`http://127.0.0.1:8000/mainApp/userProfile/getUserDetails/`,{
                    method: 'POST',
                    headers: {  
                        'Content-Type':'application/json',
                        'Authorization': `Token ${token}` 
                    }
                })
            }
            static createUserProfile(username, firstName, lastName, email, userType, token) {
                console.log(username, firstName, lastName, email, userType);
                console.log("inside createUserProfile function");
                
                const url = "http://127.0.0.1:8000/mainApp/userProfile/";
                const data = {
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    userType: userType
                };
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    },
                    body: JSON.stringify(data)
                };
                
                return fetch(url, options)
                    .then(response => response.json())
                    .catch(error => console.error(error));
            }
            
    static getAllProducts(){
        console.log("inside getAllProducts fun")
        return fetch(`http://127.0.0.1:8000/mainApp/Products/`, {
            
                method: 'GET',
                headers: {
                
                  'Content-Type': 'application/json',
                  //'Authorization': `Token ${token}` 
                     },
                    // body: JSON.stringify({'username' : username, 'firstName' : firstName,'lastName' : lastName} )  
                        
                })
                  .then( resp => resp.json())
    }
    static AddNewProduct(productname,suppliername,amount,price){
        console.log("sameer",productname,suppliername,amount,price)
        console.log("inside AddNewProduct fun")
        return fetch(`http://127.0.0.1:8000/mainApp/Products/`, {
                method: 'POST',
                headers: {
                
                  'Content-Type': 'application/json',
                  //'Authorization': `Token ${token}` 
                     },
                     body: JSON.stringify({'name' : productname, 'supplier_name' : suppliername,'amount' : amount,'price' : price} )  
                        
                })
                .then(resp => {
                    if(resp.status === 201){
                        // Product added successfully
                        console.log("New Product Added")
                    }else{
                       // console.log(resp)
                    }
                })
                .catch(error => {
                    // handle error
                });
    }
    static getProdctByID(id){
        console.log("inside getProdctByID fun")
        return fetch (`http://127.0.0.1:8000/mainApp/Products/${id}/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            
            .then( resp => resp.json() )
            
      
    }
    static DeleteProdctByID(id){
        console.log("inside DeleteProdctByID fun")
        return fetch (`http://127.0.0.1:8000/mainApp/Products/${id}/`,{
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then( resp => resp.json())
            console.log("Deleted")
    } 
    static updateProductDetails(id, name, suppliername, amount, price ){ 
        console.log("inside updateProductDetails fun")
        console.log(id, name, suppliername, amount, price)
        return fetch(`http://127.0.0.1:8000/mainApp/Products/${id}/UpdateProductDetails/`, {
           method: 'POST',
           headers: {
           
             'Content-Type': 'application/json',
             //'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'name' : name, 'supplier_name' : suppliername,'amount' : amount,
                'price' : price,
            })  
            
                   
           })
           console.log(body);
               
        }
        static AddNewSupplier(SupplierName,SupplierEmail,Prods,Address){
            console.log("sameer",SupplierName,SupplierEmail,Prods,Address)
            console.log("inside AddNewSupplier fun")
            return fetch(`http://127.0.0.1:8000/mainApp/Suppliers/`, {
                    method: 'POST',
                    headers: {
                    
                      'Content-Type': 'application/json',
                      //'Authorization': `Token ${token}` 
                         },
                         body: JSON.stringify({'name' : SupplierName, 'SupplierEmail' : SupplierEmail,'Products' : Prods,'address' : Address} )  
                            
                    })
                    .then(resp => {
                        if(resp.status === 201){
                            // Product added successfully
                            console.log("New Supplier Added")
                        }else{
                           // console.log(resp)
                        }
                    })
                    .catch(error => {
                        // handle error
                    });
        } 
        static AddNewOrder(DeliveryName,Prods,TotalPrice,OrderDate,Delivery_Date,Address,Amount,Status){
            console.log("sameer",DeliveryName,Prods,TotalPrice,OrderDate,Delivery_Date,Address,Amount,Status)
            console.log("inside AddNewOrder fun")
            return fetch(`http://127.0.0.1:8000/mainApp/Orders/`, {
                    method: 'POST',
                    headers: {
                    
                      'Content-Type': 'application/json',
                      //'Authorization': `Token ${token}` 
                         },
                         body: JSON.stringify({'delivery_name': DeliveryName, 'products' : Prods, 'total_price' : TotalPrice,
                         'order_date' : OrderDate, 'delivery_date' : Delivery_Date, 'address' : Address, 'amount' : Amount, 'status' : Status} )  
                            
                    })
                    .then(resp => {
                        if(resp.status === 201){
                            // Product added successfully
                            console.log("New Order Added")
                        }else{
                           // console.log(resp)
                        }
                    })
                    .catch(error => {
                        // handle error
                    });
        } 
        static DeleteSupplierByID(id){
            console.log("inside DeleteSupplierByID fun")
            return fetch (`http://127.0.0.1:8000/mainApp/Suppliers/${id}/`,{
                method: 'Delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                })
                .then( resp => resp.json())
                console.log("Deleted")
        }   
        static DeleteOrderByID(id){
            console.log("inside DeleteOrderByID fun")
            return fetch (`http://127.0.0.1:8000/mainApp/Orders/${id}/`,{
                method: 'Delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                })
                .then( resp => resp.json())
                console.log("Deleted")
        } 
        static DeleteUserProfilerByID(id){
            console.log("inside DeleteUserProfileByID fun")
            return fetch (`http://127.0.0.1:8000/mainApp/userProfile/${id}/`,{
                method: 'Delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                })
                .then( resp => resp.json())
                console.log("Deleted")
        }     
}