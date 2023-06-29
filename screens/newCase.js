import {View,Text, ScrollView,StyleSheet} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useState ,useMemo} from "react";
import { fontSizes } from "../globalSetting/styles"
import CustomButton from "../components/customButton";
import { validator } from "../util/validator";
import Footer from "../components/footer"
import InputGroup from "../components/inputGroup";
import CameraPicker from "../components/cameraPicker";
import LocationPicker from "../components/locationPicker";
import CustomModal from "../components/customModal.js";

import DropDown from "../components/dropDown";
const NewCase = ()=>{
  
  const Tab = createMaterialTopTabNavigator();
  const services = [
    {value:"تحرير شكوي",title:"تحرير شكوي"},
    {value:"متابعه شكوي",title:"متابعه شكوي"},
    {value:"الحصول علي تاشيرة",title:"الحصول علي تاشيرة"},
    {value:"تجديد إقامة",title:"تجديد إقامة"},
    {value:"خدمات اخري",title:"خدمات اخري"},
    {value:"فرصة عمل",title:"فرصة عمل"},
]
  const [errors, setErrors] = useState({})
  const [showError,errorToggler] = useState(false);
  const [formData,setFormData] = useState({
    phone:null,
    describtion:null,
    caseType:null,
    location:null,
    image:null,

  })

// function  to updata form  state 

  function updateForm(value,title){
    const dataField={}
    dataField[title] = value;
    setFormData((data)=>{
      return Object.assign(data,dataField);
    })}

// function  to updata error state 

  function checkError(rules,value,title){
    const validationerror = validator(rules,value) 
    let errorList = {}
    errorList[title] = validationerror
      setErrors((error)=>{
        return Object.assign(error,errorList)
      })
  }

// function resposible for auto hiding  modal

  function toggler(){
    setTimeout(()=>{
      errorToggler(false)
    },5000)
  }

// submit and save data 
function submit(){

//setting validation rules

  const valid ={
    phone:['required',"validphone"],
    describtion:['required',"validDescribtion"],
    caseType:['required'],
    location:['required'],
    image:[],
  }

//get field names validat and set error message 

  const keys = Object.keys(formData)
  for(i=0; i < keys.length;i++ ){
    const value = keys[i]
    checkError(valid[value],formData[value],value)

// check if error any error message and open modal if any error and end the loop

    if(errors[value].length > 0 ){
      console.log(errors)
      errorToggler(true)
      toggler()
      return
    }}

  }
  let err = Object.keys(errors).map((item)=>{
      return(<View>
        {errors[item].length>0? <Text>{item}</Text>:null}
        {errors[item].map((nested)=>{
          return(
            <Text>{nested}</Text>
          )
        })}
      </View>)
    })
  

    return( 
      <View style={{flex:1,position:"relative"}}>

        <ScrollView >
          <View  style= {styles.container}>
            {showError? <CustomModal errors={errors.errorList}>{err}</CustomModal> : null}
            <Text style={styles.title}  >بيانات الشكوي</Text>
            <DropDown title="نوع الخدمة" value={formData.caseType} setValue={updateForm} data={services}/>
            <InputGroup textarea={true} inputLang ={"ar"} inputValue={formData} updateValue={updateForm}  title="describtion"/>
            <InputGroup textarea={false} inputLang ={"ar"} inputValue={formData} updateValue={updateForm}  title="phone"/>
            <LocationPicker formData={formData} setLocation={updateForm} ></LocationPicker>
            <CameraPicker formData = {formData} setImage={updateForm}></CameraPicker>
          </View>

          <Footer></Footer>
        </ScrollView>

        <View style={styles.submitContainer}>
          <CustomButton  style={{backgroundColor:"gray"}} onPress={submit}> تاكيد</CustomButton>
        </View>
  
      </View>
        
    )
}
const styles = StyleSheet.create({
  title:{
    
    fontSize:fontSizes.title,
    fontWeight:"600",
    textAlign:"center"
  },
  map:{
    width:"100%",
    height:300 
},
container:{
  alignSelf:"center",
  width:"90%",
  marginTop:20,
},
submitContainer:{
  backgroundColor:"white",
  paddingHorizontal:5,
  paddingVertical:10,

}
})

export default NewCase