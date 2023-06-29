
import { useState } from "react"
import { Alert, Button, View ,Text,Image,StyleSheet} from "react-native"
import { PermissionStatus, useCameraPermissions, launchCameraAsync } from "expo-image-picker"
import CustomButton from "./customButton"
const CameraPicker = ({})=>{
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
                quality:.5,
                
            })
            setImageData(image.assets[0].uri,'image')
        

    }
    return(
        <View style={styles.container}>

                <CustomButton  onPress={pickImage}> 
                    التقاط صوره
                </CustomButton>
            <View>
              
            {capturedImage ? <Image style={styles.image} source={{uri: capturedImage}}/>:<View style={styles.text}><Text >no image piccked</Text></View>  }
        </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        width:"100%"
    },  
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

export default CameraPicker