import { StyleSheet,View,Text} from "react-native"

import { fontSizes,colors } from "../globalSetting/styles"

const ServiceLabel = ({data,children})=>{

   
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:20
    },
    title:{
        textAlign:"center",
        width:300,
        fontSize:fontSizes.subTitle,
        fontWeight:600
    }


}) 
export default ServiceLabel