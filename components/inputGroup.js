import { StyleSheet,TextInput,View,Text, Animated} from "react-native"

import { fontSizes,colors } from "../globalSetting/styles"

const InputGroup = ({textarea,title,inputValue,updateValue,inputLang})=>{

    const place= new Animated.Value(-30);
    function movePlaceholder(){
        if(!inputValue[title]){
            Animated.timing(place,{
                toValue:0,
                duration:100,
                useNativeDriver:false
    
            }).start()
        }
    }
    function resetPlaceHolder(){
        if(inputValue[title] === undefined|| inputValue[title] === null || inputValue[title] == '' ){
            console.log(inputValue)
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
                    inputRange:[inputLang == "en"?-30:0,0],
                    outputRange:[1,.8]
                })
                
            },
            {
                translateX:place.interpolate({
                    inputRange:[inputLang == "en"?-30:0,0],
                    outputRange:[0,inputLang == "en"?-40:0]
                })
            }

        ]
        }}>
                 <Text style={styles.text}>{title}</Text>
            </Animated.View>
            <TextInput style={styles.input} 
            multiline={textarea ? true:false }
            numberOfLines={textarea ? 4: 1}
            onChangeText={(text)=>{
                 updateValue(text,title)
                }
                 }
            onFocus={()=>{movePlaceholder()}}
            onBlur={()=>{resetPlaceHolder() }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%"
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
        paddingHorizontal:8,
        position:"relative",
        fontSize:17,
        color:colors.extraDark,
       
    }
}) 
export default InputGroup