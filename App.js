import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, Alert } from 'react-native';
import { Provider,useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { store } from './store/store';
import {fontSizes,colors} from "./globalSetting/styles"

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/loginForm';
import Home from './screens/home'
import ManageCase from './screens/manageCase'

export default function App() {
  const [islogedIn,changeLoginStatus] = useState(true)
  const stack = createNativeStackNavigator()
  return (

    <Provider store={store}> 
  <StatusBar style='light'/>
          <LinearGradient style={{flex:1}}  colors={[colors.extraLight,colors.light]}>
          <NavigationContainer>
            <stack.Navigator initialRouteName='home' 
            screenOptions={({navigation})=>({

              headerRight:()=>(<Pressable onPress={()=> !islogedIn ? navigation.navigate('log-in') :  navigation.navigate('manage-cases') }>
                                  <Text>{!islogedIn ?"login" : "manage cases" }</Text>
                                </Pressable>)   
            })} >
              <stack.Screen  name="log-in" component={Login}/>
              <stack.Screen  name="home" component={Home}/>
              <stack.Screen  name="manage-cases" component={ManageCase}/>

            </stack.Navigator>
          </NavigationContainer>
          </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
