import { StyleSheet,View,Text, Button} from "react-native"
import React, { useRef, useState } from 'react';
import MapView from 'react-native-maps';
import {Marker,Callout,Polyline} from 'react-native-maps';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

import { fontSizes,colors } from "../globalSetting/styles"
import DropDown from "./dropDown";


const Map = ({title,children})=>{
    

    const [userLocation,setUserLocation] = useState({
        latitude: 21.418276997926352,
        longitude: 39.81672282898905,
    }
        
    )
   const markers = [
    {
        title:" قسم شرطة جدة",
        value:{
            latitude:21.418068232732757
            ,
            longitude:39.81596380815897,},
    },
    {
        title:" قسم شرطةالرياض",
        value:{
            latitude: 21.418276997926352,
            longitude: 39.81672282898905,},
        
    },
    {
        title:" قسم شرطة نيوم",
        value:{
            latitude: 21.420055813302834,
            longitude:  39.81462270369946},
        
    },
    {
        title:"قسم شرطة نجد",
        value:{
            latitude:21.416580026559,
            longitude: 39.81086761121283,},
        
    },
   ] 
    
    return(
        <View style={styles.container}>
                    <DropDown title="مواقع مراكز الشرطه" data={markers} val={userLocation} setValue={setUserLocation}></DropDown>
                <MapView  style={styles.map} 
                    ref = {(mapView) => { _mapView = mapView; }}
                    
                    initialRegion={{
                        latitude: 21.418276997926352,
                        longitude: 39.81672282898905,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                  }}
                provider="google"
            
                >
                    
                
                    {markers.map((dest,index)=>{

                        return <Marker coordinate={dest.value}  key ={index}>
                            <Callout>
                                <Text>{dest.title}</Text>
                            </Callout>
                        </Marker>
                    })}
                </MapView>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:10,
    },
    map:{
        width:"100%",
        height:300 ,
        marginTop:10
    },
    dropdown:{
      height: 50,
      width: "100%",
      backgroundColor: '#EEEEEE',
      borderRadius: 22,
      paddingHorizontal: 8,

    },
    selectedTextStyle:{
        fontSize: 16,
        marginRight: 8,
      }

}) 
export default Map


