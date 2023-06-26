import AntDesign from '@expo/vector-icons/AntDesign';

import { StyleSheet ,View, Pressable,Text    } from "react-native";
const CustomButton = ({onPress,children,style})=>{

return (

    <Pressable  onPress={onPress}>
        <View style={[styles.container,style]}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    </Pressable>
)
}
const styles = StyleSheet.create({
container:{
    backgroundColor:"black",
    padding:12,
    borderRadius:12,

},
text:{
    color:"white",
    textAlign:"center"
}

   
}) 
export default CustomButton