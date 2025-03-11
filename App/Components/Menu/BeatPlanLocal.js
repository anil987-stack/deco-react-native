import React from "react";
import { View,Text ,StyleSheet, Dimensions,Image, TouchableOpacity } from "react-native";
import { Badge} from 'native-base';
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon';
import DisplayCardStrip from '../GenericDisplayCard/GenericDisplayCardStrip';
import { Fonts } from "../../Theme";
import NavigationService from "App/Services/NavigationService";


const BeatPlanLocal = ({loading,datechange,pjplist,totalpjp,fetch,data,total_outlet,onClick,userId,onApprove,onReject})=>{

return(

    <View  style={styles.Screen1} >
    <TouchableOpacity  onPress={()=>NavigationService.navigate('BeatForthScreen', {Pjpdata:pjplist, status: data.Approval_Status__c}, )}>

        <View style={{flexDirection:'row'}}>
       <View style={{width:wp('21%')}}>
        <Image
            style={{ height:65, width: 65, margin: 20 }}
            source={require("../../Assets/Images/party.png")}
          />
          </View>
          <View style={{width:wp('56.2%'),marginLeft:30}}>
                <View style={{alignSelf:'flex-end',backgroundColor:Colors.green,marginTop:hp('1%'),height:hp('3'),elevation:4,
                 shadowOffset: {
                width: 0,
                height: 2,
            },
            
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: "#E825835E",}}>
                    <Text style={{...Fonts.Medium,marginHorizontal:12,textAlign:'right',justifyContent:"flex-end"}}>{data.Approval_Status__c}</Text>
                    </View>
                    <View style={{ justifyContent:'space-between',width:wp('40'),marginTop:hp('4')}}>
                    <DisplayCardStrip  label={'Number of Beat'} value={data.Total_Number_Of_Beats__c}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700'}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
                    <DisplayCardStrip  label={'Total Outlets'} value={total_outlet} valueStyle={{...Fonts.Medium,fontWeight:'700'}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
                    {/* <DisplayCardStrip  label={'hello'} value={'Anmol'}  labelStyle={{marginLeft:20}} />
                    <DisplayCardStrip label={'Quantity(MT)'} value={'hiii'}  labelStyle={{marginLeft:20}}/> */}
</View>
          </View>

         

        </View>
       
        { data.Approval_Status__c=='Pending For Approval' &&<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<TouchableOpacity onPress={()=>onApprove()} >
        <BlueButton style={{width:100,height:hp('4'),alignSelf:'center',marginTop:hp('4'),elevation:10}}
        textStyle={{...Fonts.Medium}}
        title={'Approval'}
        />          
    
    </TouchableOpacity>
<TouchableOpacity onPress={()=>onReject()} >
        <BlueButton style={{width:100,height:hp('4'),alignSelf:'center',marginTop:hp('4'),elevation:10}}
        textStyle={{...Fonts.Medium}}
        title={'Reject'}
        />          
    
    </TouchableOpacity>

    </View>}
    </TouchableOpacity>

    </View>




);



}

export default BeatPlanLocal
const styles = StyleSheet.create({

    Screen1:{
        width:'85%',
        
        paddingBottom:20,
        backgroundColor:'#fff',
        marginTop:'10%',
        marginBottom:10,
        marginHorizontal:30,
        shadowOffset: {
                width: 0,
                height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: "#000",
        elevation:6,borderRadius:2,borderWidth:1,borderColor:'#fff'
},




});