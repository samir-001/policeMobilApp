import { View,StyleSheet } from "react-native"
import InputGroup from "../components/inputGroup"
import { useState } from "react"
const Login = ()=>{
    const [userName,setUserName]= useState()
    const [password,setpassword]= useState()

    return(
        <View style={styles.container}> 
            <InputGroup inputValue={userName} updateValue={setUserName} title="userName"/>
            <InputGroup inputValue={password}  updateValue={setpassword} title="password"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default Login