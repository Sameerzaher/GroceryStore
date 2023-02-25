import React, {Component} from 'react';
//import Icon from 'react-native-vector-icons/Foundation';
import {
  Button,
  Body,
  Input,
  Container,
  Content,
  Header,
  Right,
  Left,
  Item,
  Label,
  Card,
  CardItem,
  ActionSheet,
} from 'native-base';
import {
  Alert, FlatList, SafeAreaView,
  StyleSheet, ScrollView,
  View,Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,} from 'react-native';

export default class UserListItem extends React.Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }

  // this.props.onEditPressed(this.props.item.id))}
  render() {
    const {id , username} = this.props.item;
    return (
      <View style={listItemStyles.container}>
        <CardItem>
         

          <Text style={listItemStyles.username}>
            {username} 
          </Text>
          <Text style={listItemStyles.id}>
            {id}
          </Text>

        </CardItem>
      </View>
    );
  }
}

const listItemStyles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    borderColor: '#E0E0E0',
    borderWidth: 0.5,
    justifyContent: 'center',
    // backgroundColor:'red',
  },
  icon: {
    paddingRight: 12,
    flex: 0.10,
  },
  username: {
    textAlign: 'left',
    flex: 0.3,
    fontSize: 16,
    paddingHorizontal: 4,
  },
  id: {
    flex: 0.25,
    fontSize: 16,
    marginHorizontal: 4,

  },


  // backgroundColor: '#4796BD', blue
  // backgroundColor: '#E0E0E0', grey
});
