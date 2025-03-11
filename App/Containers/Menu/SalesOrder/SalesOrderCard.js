import { View,Text,Image,TouchableOpacity } from "react-native";
import React from 'react'
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlueButton from 'App/Components/BlueButton'
import WhiteButton from 'App/Components/WhiteButton'
import GenericIcon from 'App/Components/GenericIcon';
import { TextInput } from "react-native";
import DisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { Fonts } from "App/Theme";
import InputNumber from 'App/Components/FormInput/InputNumber'
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "../../../Services/Utils/HelperService";

const SalesOrderCard =({item,id,select,form,productdata,changeForm,isAddedInCart,onRemoveClick,more,onclick,declick})=>{
     console.log('item',item)
    return(
        <View style={{
            alignSelf: 'center',marginBottom:"2%",marginTop:'1%',
             width: wp('93%'),paddingHorizontal:10,paddingVertical:5,
            elevation: 5, backgroundColor: 'white', borderColor: 'white', borderWidth: 0,
            borderRadius: 5
        }}>

            <View style={{flexDirection:'row',marginLeft:wp('48%'),width:'100%'}}>
            <Text style={{width:wp('8'),borderWidth:1,padding:5,height:30,alignSelf:'center',textAlign:'center',marginBottom:5}}>{item.Item_Quantity__c}</Text>
            {/* <Text style={{width:wp('10'),borderWidth:1,padding:12,height:hp('0')}}>{item.quantity__c.value}</Text> */}
 <TouchableOpacity style={{flexDirection:'row',width:'10%',alignSelf:'flex-end',marginLeft:wp('22')}}
        onPress={onRemoveClick}
        >
           </TouchableOpacity>
           </View>
           <Text style={{width:wp('88'),fontWeight:'bold'}}>{HelperService.getNameFromSFID( productdata ,item.Material__c)}</Text>

        <View style={{flexDirection:'row',width:'100%'}}>

        <View style={{marginLeft:0,width:wp('36')}}>
        {/* <DisplayCardStrip      /> */}
        <DisplayCardStrip  label={'Ex-Factory:'} value={item.Ex_Fac_Val__c}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
        <DisplayCardStrip  label={'100% Disc.:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
        <DisplayCardStrip  label={'Promotional Disc.:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
    {more?<DisplayCardStrip  label={'Central GST:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
    {more?<DisplayCardStrip  label={'UNION TERRI GST:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
    {more?<DisplayCardStrip  label={'Freight Value:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
    {more?<DisplayCardStrip  label={'Total:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
    {more?<DisplayCardStrip  label={'Weight:'} value={item.Primary_Weight__c}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:5}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
   </View>
        <View style={{marginLeft:wp('15'),width:wp('36')}}>
        <DisplayCardStrip  label={'SAP Disc.:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
        <DisplayCardStrip  label={'Total Cash Disc.:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
        <DisplayCardStrip  label={'State GST:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
       
        {more?<DisplayCardStrip  label={'Integrated GST:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
        {more?<DisplayCardStrip  label={'TCS:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
        {more?<DisplayCardStrip  label={'Rounding Off:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
        {more?<DisplayCardStrip  label={'Value:'} value={""}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:10}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />:[]}
        
        <TouchableOpacity style={{flexDirection:'row',width:'60%',borderWidth:1,alignSelf:'flex-end'}}
       onPress={more?declick:onclick}
        >
           <Text style={{marginLeft:wp('4')}}>{more?"Less":"More"}</Text>
           <GenericIcon
        name={more?'arrow-drop-up':'arrow-drop-down'}
        style={{width:'20%',fontWeight:'bold',fontSize:25,marginTop:-2}}
        />
           </TouchableOpacity>
       
      


        </View>


        </View>
       


   
           
            </View>
)

}
export default SalesOrderCard