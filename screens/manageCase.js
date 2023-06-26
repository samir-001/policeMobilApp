import {View,Text,FlatList, ScrollView,Image,StyleSheet,TextInput, Dimensions} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { fontSizes } from "../globalSetting/styles"

import OldCases from "./oldCases"
import NewCase from "./newCase"
import Footer from "../components/footer"
const ManageCase = ()=>{

    const Tab = createMaterialTopTabNavigator();
    return( 
        <Tab.Navigator initialRouteName={NewCase}>
          <Tab.Screen name="متابعة الشكاوي" component={OldCases} />
          <Tab.Screen name="تقديم شكوي" component={NewCase} />
      </Tab.Navigator>
  
        
    )
}
const styles = StyleSheet.create({

})

export default ManageCase