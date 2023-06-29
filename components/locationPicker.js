import {getCurrentPositionAsync ,PermissionStatus, useForegroundPermissions} from "expo-location"
import { Alert,View } from "react-native"
import {Text,Image, StyleSheet} from "react-native"
import { mapUri } from "../util/googleMapsImageUri"

import CustomButton from "./customButton"
import { useState } from "react"
const LocationPicker = ({formData,setLocation})=>{
    const [Picked,isPicked] = useState(false)


const [locationPermissionInformation , requestPermission] = useForegroundPermissions()

async function newLocationRequest(){
    const rquest = await requestPermission();
    return rquest.granted;

}

async function asKingForPermission(){
    if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
        newLocationRequest()

    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
            "Insufficient permissions",
            "please allow  to appliction to use location",
            [
                {
                    text:"طلب اذن",
                    onPress:()=>{
                        newLocationRequest()
                    },
                }
            ])
        return false;
    }
    return true;


}
async function getloction(){

    const hasPermission = await asKingForPermission()
    if (!hasPermission) {
        return;
    }
    
    const picker = await getCurrentPositionAsync()
        
    setLocation({
        lat:picker.coords.latitude,
        lng:picker.coords.longitude,
        
    },"location") 
    isPicked(true)
}


return(
    <View >

        <CustomButton  onPress={getloction}>
            اختيار الموقع الحالي
        </CustomButton>
        <View>
            {Picked ? <Image style={styles.image} source={{uri: mapUri(formData.location.lat,formData.location.lng)}}/>: <View style={styles.text}><Text >no image piccked</Text></View> }
        </View>
        
    </View>
)
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    },
    text:{
        marginVertical:10,
        borderRadius:22,
        width:"100%",
        height:300,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green"
    }
})

export default LocationPicker