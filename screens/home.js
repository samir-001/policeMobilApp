import {View,Text,FlatList, ScrollView,Image,StyleSheet,TextInput, Dimensions} from "react-native"
const width = Dimensions.get("window").width
import Section from "../components/section"
import ServiceLabel from "../components/serviceLabel"
import { fontSizes } from "../globalSetting/styles"
import Map from "../components/map"
import { useState } from "react"
import Footer from "../components/footer"
const Home = ()=>{
    const [usermessage,setusermessage] = useState()
    const services = [
        {id:1,title:"تحرير شكوي"},
        {id:2,title:"متابعه شكوي"},
        {id:3,title:"الحصول علي تاشيرة"},
        {id:4,title:"تجديد إقامة"},
        {id:5,title:"خدمات اخري"},
        {id:6,title:"فرصة عمل"},
    ]
    return( 
        <View>
                <ScrollView>
                    <ScrollView snapToInterval={width} showsHorizontalScrollIndicator={false}  horizontal={true}>
                        <Image style={styles.image} source={require('../assets/1.jpg')}></Image>
                        <Image style={styles.image} source={require('../assets/2.jpg')}></Image>
                        <Image style={styles.image} source={require('../assets/3.jpg')}></Image>
                    </ScrollView>
                    <Section title={"عن الهيئة"}>
                        <Text style={{fontSize:fontSizes.text,marginTop:10}}>
                            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت"
                        </Text>
                    </Section>
                    <Section title={"خدماتنا"}>
                         <FlatList  horizontal nestedScrollEnabled={true} data={services} renderItem={(item)=> <ServiceLabel data ={item.item}/>} keyExtractor={(item)=>item.id} />
                    </Section>
                    <Section title={"مراكز الهيئة"}>
                            <Map ></Map>
                    </Section>
                    <Section title={" اترك رسالة"}>
                        <Text style ={{marginVertical:15,marginRight:10}}>قدم اقتراح او شكوي تخص الموقع</Text>
                        <TextInput style= {styles.message} multiline={true} numberOfLines={3}/>
                    </Section>
                    <Footer/>
                    
                </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:width,
        height:300,

    }
    ,
    message:{borderColor:"black",
    borderRadius:22,
    borderWidth:2,
    padding:10,
}
})

export default Home