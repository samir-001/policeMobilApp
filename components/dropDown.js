import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';

import { StyleSheet } from "react-native";
const DropDown = ({data,value})=>{

return (
    <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={data}
    search
    maxHeight={300}
    labelField="title"
    valueField="value"
    placeholder="اختر اسم الفرع"
    searchPlaceholder="بحث حسب الاسم"
    value={value}
    onChange={item => {
        setUserLocation(item.value);
        // _mapView.animationToreigion({

        // },1000)
    }}
    renderLeftIcon={() => (
      <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
    )}
  />
)
}
const styles = StyleSheet.create({

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
export default DropDown