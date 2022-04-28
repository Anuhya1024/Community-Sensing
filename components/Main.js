/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View } from 'react-native';
import {Button, Card} from 'react-native-paper';
import React, { useEffect, useState } from 'react';

//
// <Survey/>


export default function Main(props) {
  return ( 
    <View style={style.container}>
        <Text style = {{fontSize:20}}> This survey is anonymus</Text>
      <Button 
           style = {{margin:20}}
           icon  = "pencil"
           mode  = "contained"
           onPress = {() => props.navigation.navigate('Home') }
       > Fill the survey </Button> 
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  con: {
    flex: 1,
    backgroundColor: '#eddfdf',
  }
}); 
