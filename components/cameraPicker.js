
import { useState } from "react"
import { Alert, Button, View ,Text,Image,StyleSheet} from "react-native"
import { PermissionStatus, useCameraPermissions, launchCameraAsync } from "expo-image-picker"
const CameraPicker = ()=>{
    const [capturedImage, setImageData] = useState();
    const [cameraPermissionInformation ,requestPermission] = useCameraPermissions();
    
    async function newCameraRequest(){
        const sendRequest = await requestPermission();
        return sendRequest.granted
    } 
    async function verifyPermission(){
        if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
            newCameraRequest()
        }
        if(cameraPermissionInformation.status === PermissionStatus.DENIED ){
            Alert.alert(
                'تصاريح غير كافيه!',
                'يلزم السماح بالوصول للكاميرا',
                [{
                    text:"طلب اذن",
                    onPress:()=>{newCameraRequest()}
                }]);
            return false;
        }

        return true;
    }
    async function pickImage(){
        const isVerified = await verifyPermission()
        if(!isVerified){
            return;
        }
        

            const image = await launchCameraAsync({
                allowsEditing:true,
                aspect:[16,9],
                quality:.5
            })
            console.log(image.assets[0].uri)
            setImageData(image.assets[0].uri)
        

    }
    return(
        <View>
            <Button title={"camera"}onPress={pickImage}/>
            <View>
                {console.log(capturedImage)}
            {capturedImage ? <Image style={styles.image} source={{uri: capturedImage}}/>: <Text>no image piccked</Text> }
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

export default CameraPicker