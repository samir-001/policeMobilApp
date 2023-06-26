import { StyleSheet,View,Text, Button} from "react-native"
import React, { useRef, useState } from 'react';
import MapView from 'react-native-maps';
import {Marker,Callout,Polyline} from 'react-native-maps';
import { Dropdown } from 'react-native-element-dropdown';
import { fontSizes,colors } from "../globalSetting/styles"
import AntDesign from '@expo/vector-icons/AntDesign';


const Map = ({title,children})=>{

    const [userLocation,setUserLocation] = useState({
        latitude: 21.418276997926352,
        longitude: 39.81672282898905,
    }
        
    )
   const markers = [
    {
        title:" قسم شرطة جدة",
        lnglet:{
            latitude:21.418068232732757
            ,
            longitude:39.81596380815897,},
    },
    {
        title:" قسم شرطةالرياض",
        lnglet:{
            latitude: 21.418276997926352,
            longitude: 39.81672282898905,},
        
    },
    {
        title:" قسم شرطة نيوم",
        lnglet:{
            latitude: 21.420055813302834,
            longitude:  39.81462270369946},
        
    },
    {
        title:"قسم شرطة نجد",
        lnglet:{
            latitude:21.416580026559,
            longitude: 39.81086761121283,},
        
    },
   ] 
    
    return(
        <View style={styles.container}>
           
                       <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={markers}
        search
        maxHeight={300}
        labelField="title"
        valueField="lnglet"
        placeholder="اختر اسم الفرع"
        searchPlaceholder="بحث حسب الاسم"
        value={userLocation}
        onChange={item => {
            setUserLocation(item.value);
            // _mapView.animationToreigion({

            // },1000)
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />
                
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

                        return <Marker coordinate={dest.lnglet}  key ={index}>
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
        flex:1,
        marginTop:10,
        padding:10
    },
    map:{
        width:"100%",
        height:300 
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


