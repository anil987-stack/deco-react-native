import React from "react";
import {View,Text,StyleSheet} from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Colors,ApplicationStyles,Fonts } from '../../../Theme';
import NavigationService from 'App/Services/NavigationService'
import GenericIcon from "App/Components/GenericIcon";
import DisplayCardStrip from '../../../Components/GenericDisplayCard/GenericDisplayCardStrip';
import { HelperService } from "../../../Services/Utils/HelperService";
// import DisplayCardStrip from '/GenericDisplayCard/GenericDisplayCardStrip';
import moment from "moment";
const ActivityScreenCard =({item})=>{

    

return(
<View style={Styles.card}>
<View style={{ justifyContent:'space-between',width:wp('40'),marginTop:hp('3'),marginLeft:wp('5')}}>
                    <DisplayCardStrip  label={'Subject'} value={item.Subject}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',textAlign:'left'}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
                    <DisplayCardStrip  label={'Description'} value={item.Description}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:25,}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
                    <DisplayCardStrip  label={'Activity Date'} value={moment(item.CreatedDate).format('YYYY-MM-DD')}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',marginLeft:25,}} labelStyle={{...Fonts.Medium,fontWeight:'700'}} />
                   </View>

    
</View>



)


}
export default ActivityScreenCard
const Styles = StyleSheet.create({
    head: {
        height: hp('23%'),
        backgroundColor: Colors.primary, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
        flexDirection: 'column'
    }, t1: {
        fontSize: 23, fontWeight: 'bold', marginLeft: 50, color: '#FFFFFF'
    },
    t2: {
        fontSize: 15, fontWeight: 'bold', marginLeft: 15, color: '#343434'
    }, tt: {
        flexDirection: 'row'
        , height: hp('5%'), backgroundColor: 'white', width: wp('85%'), borderRadius: 5, alignSelf: 'center'
    }, card: {
         marginTop:10,marginBottom: 10, width: wp('80%'),
        borderWidth: 0, elevation: 3, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white',paddingBottom:10
    },
    plusIcon: {
      backgroundColor:Colors.primary,
      width:45,
      borderRadius:50,
    marginLeft:'80%'
      },
});