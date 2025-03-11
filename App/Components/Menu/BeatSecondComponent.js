import React from "react";
import { View,Text ,StyleSheet, Dimensions,Image } from "react-native";
import { Badge} from 'native-base';
import { Colors, ApplicationStyles, Metrics,Fonts } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon';
import DisplayCardVerticalStrip from '../GenericDisplayCard/GenericDisplayCardVerticalStrip';
import DisplayCardStripVertical from "../GenericDisplayCard/GenericDisplayCardVerticalStrip";
const BeatSecondComponent = ({item,list})=>{
//console.log("data",item);

return(

    <View  style={styles.Screen1} >

    <View style={{flexDirection:'row',width:'90%',marginHorizontal:25}}>
    
    <View style={{width:'15%'}} >
        <Text style={{marginTop:-5,...Fonts.h3,color:Colors.primary,fontWeight:'700',fontFamily:ApplicationStyles.textMediumFont}}>{"50"}</Text>
    </View>
    
    <View style={{ width: "8%", alignItems: "center" }}>
  
               
                <View
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    borderWidth: 3,
                    borderColor:  "#0C9307" 
                  }}
                />
               
                  <View
                    style={{
                     
                        borderWidth: 0.5,
                        width: 0.5,
                        borderColor: "#9A9A9A",
                        height: 70,
                    }}
                  />
               
              </View>
            <View style={{width:'70%',justifyContent:'space-between',marginHorizontal:20,marginTop:20,borderWidth:1,borderColor:Colors.cardborder,height:hp('7%')}}>
             <View style={{flexDirection:'row', marginTop:10,justifyContent:'space-between',marginHorizontal:10}}>
                <DisplayCardStripVertical 
                label={'Beat Name'} 
                value={item.Beat__r.Name} 
                labelStyle={{color:Colors.primary,textAlign:'center',fontFamily:ApplicationStyles.textFont,...Fonts.Small}}  
                valueStyle={{...Fonts.Small,justifyContent:'center',alignself:'center',textAlign:'center',fontFamily:ApplicationStyles.textFont}}
                />

                <DisplayCardStripVertical 
                label={'Beat Code'} 
                value={item.Beat__r.Beat_Code__c} 
                labelStyle={{color:Colors.primary,textAlign:'center',fontFamily:ApplicationStyles.textFont,...Fonts.Small}}  
                valueStyle={{...Fonts.Small,justifyContent:'center',alignself:'center',textAlign:'center',fontFamily:ApplicationStyles.textFont}}
                />
                
                <DisplayCardStripVertical 
                label={'Total Outlet'} 
                value={'50'} 
                labelStyle={{color:Colors.primary,textAlign:'center',fontFamily:ApplicationStyles.textFont,...Fonts.Small}} 
                valueStyle={{...Fonts.Small,justifyContent:'center',alignself:'center',textAlign:'center',fontFamily:ApplicationStyles.textFont}}
                />
              </View>
           </View>
      </View>




    </View>





);



}

export default BeatSecondComponent
const styles = StyleSheet.create({

    Screen1:{
        width:wp('100'),
       
        backgroundColor:'#fff',
       
},
// Screen2:{
//   width:'70%',
//   height:hp('7%'),
//   backgroundColor:'#fff',
//   marginTop:20,
//   justifyContent:'space-between',
//   marginHorizontal:20,

//   shadowOffset: {
//           width: 0,
//           height: 2,
//       },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.84,
//   shadowColor: "#000",
//   elevation:6,borderRadius:2,borderWidth:1,borderColor:'#fff'
// }



});