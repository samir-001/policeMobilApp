import {View,Text,FlatList, ScrollView,Image,StyleSheet,TextInput, Dimensions} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { fontSizes } from "../globalSetting/styles"


import Footer from "../components/footer"
import InputGroup from "../components/inputGroup";
import CameraPicker from "../components/cameraPicker";
import LocationPicker from "../components/locationPicker";
import { useState } from "react";
const NewCase = ()=>{
  const [caseType,setType] = useState()
  const [describtion,setdedescribtion] = useState()

    const Tab = createMaterialTopTabNavigator();
    return( 
      <View>
        <InputGroup  inputValue={caseType} updateValue={setType}  title="case type" />
        <InputGroup  inputValue={describtion} updateValue={setdedescribtion}  title="describtion"/>
        <LocationPicker></LocationPicker>
        <CameraPicker></CameraPicker>
      </View>
  
        
    )
}
const styles = StyleSheet.create({

})

export default NewCase