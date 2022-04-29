/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Home  from './components/Home';
import Submit from './components/Submit';
import Main from './components/Main';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { showNotification } from './src/notification.ios';
import { Button } from 'react-native-paper';
//import { showNotification, handleScheduleNotification } from './src/notification.ios';




//
// <Survey/>

const Stack = createStackNavigator();

export function App() {
  return (
    <View style={style.con}>
      <Stack.Navigator>
        <Stack.Screen name = "Main" component = {Main} />
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Submit" component = {Submit} />
      </Stack.Navigator>
      <Button 
      style = {{margin:20}}
      icon  = "pencil"
      mode  = "contained"
      onPress={()=> showNotification('hello','message')}>
      click me to get notification
      </Button>
    </View>
  );
}

export default () => {

  return (
     <NavigationContainer>
       <App/>
     </NavigationContainer>

  );

};

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
  },
  button:{
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 24,
  },
});
