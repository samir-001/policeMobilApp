import { StyleSheet,TextInput,View,Text, Animated} from "react-native"

import { fontSizes,colors } from "../globalSetting/styles"

const InputGroup = ({title,inputValue,updateValue})=>{

    const place= new Animated.Value(-30);
    function movePlaceholder(){
        if(!inputValue){
            Animated.timing(place,{
                toValue:0,
                duration:100,
                useNativeDriver:false
    
            }).start()
        }
    }
    function resetPlaceHolder(){
        if(inputValue === undefined|| inputValue === null || inputValue == '' ){

            Animated.timing(place,{
                toValue:-30,
                duration:300,
                useNativeDriver:false
    
            }).start()
        }
    }
    return(
        <View style={styles.container}>
            <Animated.View style={{bottom:place, transform:[
            {
                scale:place.interpolate({
                    inputRange:[-30,0],
                    outputRange:[1,.8]
                })
                
            },
            {
                translateX:place.interpolate({
                    inputRange:[-30,0],
                    outputRange:[0,-40]
                })
            }

        ]
        }}>
                 <Text style={styles.text}>{title}</Text>
            </Animated.View>
            <TextInput style={styles.input} 
            onChangeText={(text)=>{ updateValue(text)} }
            onFocus={()=>{movePlaceholder()}}
            onBlur={()=>{resetPlaceHolder() }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"80%",
        
    },
    input:{
        padding:4,
        borderColor:colors.extraDark,
        borderWidth:2,
        borderRadius:8,
        width:'100%',
        fontSize:18,
        color:colors.dark,
        marginBottom:10
    },
    text:{
        paddingLeft:8,
        position:"relative",
        fontSize:17,
        color:colors.extraDark,
       
    }
}) 
export default InputGroup