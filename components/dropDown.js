import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';



const DropDown = ({data,value,setValue,title}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [header, setHeader] = useState(false);


  return (
    <View style={styles.container}>
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          {title}
        </Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="title"
        valueField="value"
        placeholder={ isFocus ? 'اختر موقع' : header}
        searchPlaceholder="Search..."
        value={value?.caseType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value,"caseType");
          setHeader(item.title)
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    marginTop:10
  },
  dropdown: {
    width:"100%",
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});