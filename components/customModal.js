import {View,StyleSheet} from "react-native"
const CustomModal = ({children})=>{
    return(
        <View style={styles.conntainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    conntainer:{
        width:"100%",
        zIndex:1000,
        textAlign:"right",
        backgroundColor:"white",
        position:"absolute",
        left:0
    }
})
export default CustomModal