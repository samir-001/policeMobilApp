import {View,Text,FlatList, ScrollView,Image,StyleSheet,TextInput, Dimensions} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { fontSizes } from "../globalSetting/styles"
import CustomButton from "../components/customButton";


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
      <ScrollView >
        <View  style= {styles.container}>
            <Text style={styles.title}  >بيانات الشكوي</Text>
          <InputGroup inputLang ={"ar"}  inputValue={caseType} updateValue={setType}  title="نوع الشكوي" />
          <InputGroup  inputLang ={"ar"} inputValue={describtion} updateValue={setdedescribtion}  title="الوصف"/>
          <LocationPicker></LocationPicker>
          <CameraPicker></CameraPicker>
          <CustomButton onPress={()=>{}}> تاكديد</CustomButton>
        </View>
      </ScrollView>
  
        
    )
}
const styles = StyleSheet.create({
  title:{
    fontSize:fontSizes.title,
    fontWeight:"600",
    textAlign:"center"
  },
container:{
  alignSelf:"center",
  width:"90%",
  marginTop:20,
}
})

export default NewCase