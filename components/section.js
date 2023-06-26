import { StyleSheet,View,Text} from "react-native"

import { fontSizes,colors } from "../globalSetting/styles"

const Section = ({title,children})=>{

   
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View>
                
              {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:10
    },
    title:{
        fontSize:fontSizes.title,
        paddingRight:10,
        textAlign:"right",
        fontWeight:"bold",
        borderRightColor:"blue",
        borderRightWidth:4
    },
    pargraph:{
        textAlign:"right",
        marginTop:10,
        fontSize:fontSizes.text
    }

}) 
export default Section