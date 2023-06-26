import { StyleSheet,View,Text} from "react-native"

import { fontSizes,colors } from "../globalSetting/styles"

const Footer = ({title,children})=>{

   
    
    return(
        <View style={styles.container}>
            <View style={styles.shared}>
                <Text style={styles.title}>وسائل الاتصال</Text>
                <Text style={styles.text}>وسائل الاتصال</Text>
                <Text style={styles.text}>وسائل الاتصال</Text>
                <Text style={styles.text}>وسائل الاتصال</Text>
                <Text style={styles.text}>وسائل الاتصال</Text>
                <Text style={styles.text}>وسائل الاتصال</Text>
                

            </View>
            <View style={styles.shared}>
            <Text style={styles.title}>مواقع خاصة بالهيئة</Text>
            <Text style={styles.text} >مواقع خاصة بالهيئة</Text>
            <Text style={styles.text} >مواقع خاصة بالهيئة</Text>
            <Text style={styles.text} >مواقع خاصة بالهيئة</Text>
            <Text style={styles.text} >مواقع خاصة بالهيئة</Text>
            <Text style={styles.text} >مواقع خاصة بالهيئة</Text>
            <Text style={styles.text} >مواقع خاصة بالهيئة</Text>
            <Text style={styles.text} >مواقع خاصة بالهيئة</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginTop:10,
        padding:10,
        backgroundColor:"black"
    },
    title:{
        marginVertical:10,
        fontSize:fontSizes.subTitle,
        color:"white"
    },
    shared:{
        flex:1
    },
    text:{
        color:"white"
    }
 

}) 
export default Footer