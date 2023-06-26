import {getCurrentPositionAsync ,PermissionStatus, useForegroundPermissions} from "expo-location"
import { Alert,View } from "react-native"
import {useState} from "react"
import { Button ,Text,Image, StyleSheet} from "react-native"
import { mapUri } from "../util/googleMapsImageUri"
const LocationPicker = ()=>{

const [locationPermissionInformation , requestPermission] = useForegroundPermissions()
const [pickedLocation, setPickedLocation] = useState();

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
        
    setPickedLocation({
        lat:picker.coords.latitude,
        lng:picker.coords.longitude
    }) 
}


return(
    <View>

        <Button title="demo" onPress={getloction}/>
        <View>
            {pickedLocation ? <Image style={styles.image} source={{uri: mapUri(pickedLocation.lat,pickedLocation.lng)}}/>: <Text>no location piccked</Text> }
        </View>
        
    </View>
)
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    }
})

export default LocationPicker