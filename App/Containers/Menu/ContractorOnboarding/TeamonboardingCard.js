import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Image} from 'react-native';
import BlueButton from '../../../Components/BlueButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Colors,ApplicationStyles,Fonts } from '../../../Theme';
import NavigationService from 'App/Services/NavigationService'
import GenericIcon from "App/Components/GenericIcon";
// import { Fonts } from "../../Theme";
const TeamOnboardingCard =({onboardingdata,onclickable,submitForApproval,submitForReject})=>{
// console.log("onboardingdata",onboardingdata)
return(
<TouchableOpacity onPress={() => onclickable()}>
           <View style={Styles.card}>
                        <View style={{ margin: 4, flexDirection: 'row', marginTop: 10 }}>
                            <Text style={Styles.t2}>{onboardingdata?onboardingdata.Name:''}</Text>
                            <BlueButton style={{ height: hp('3%'), margin: 5, marginLeft: 10, width: wp('35%') }}
                                title={onboardingdata?onboardingdata.Status__c:'null'}
                                textStyle={{ color: 'white', fontSize: wp('2.4') }}
                            ></BlueButton>
                          
                            <TouchableOpacity onPress={()=>NavigationService.navigate("ActivityScreen",{data:onboardingdata})} >
                            <BlueButton style={{ height: hp('3%'), margin: 5, marginLeft: 10, width: wp('23%') }}
                                title={'Activity'}
                                textStyle={{ color: 'white', fontSize: wp('2.4') }}
                            ></BlueButton>
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'column', marginHorizontal: 50, }}>
                                <Text style={Styles.keytext}>Proprieter Name</Text>
                                <Text style={Styles.keytext}>Phone Number</Text>
                                <Text style={Styles.keytext}>Category Type</Text>
                                <Text style={Styles.keytext}>Gross Turnover</Text>
                                <Text style={Styles.keytext}>ASM Approval Status</Text>

                            </View>
                            <View style={{ flexDirection: 'column',width:'30%' }}>
                                <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Proprietor_name__c:''}</Text>
                                <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Mobile__c:''}</Text>
                                <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Category_Type__c:''}</Text>
                                <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Sales_Turnover__c:''}</Text>
                                <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.ASM_Approval_Status__c:''}</Text>
                            </View>
                        </View>
                        
                      {onboardingdata.ASM_Approval_Status__c=="Pending For Approval"?<View style={{ flexDirection: 'row', marginVertical: 0,justifyContent:'space-around' }}>
                            <TouchableOpacity
                                        style={{}}
                                         onPress={() => submitForReject()}
                                        >
                                        <BlueButton style={{width:wp('25'),height:hp('4'),alignSelf:'center',marginTop:hp('.8'),elevation:10}}
                                   textStyle={{fontSize:wp('3.3')}}
                                    // loading={loading}
                                    title={'Reject'}
                                    />   
                                    </TouchableOpacity> 
                            <TouchableOpacity
                                        style={{}}
                                        onPress={() => submitForApproval()}
                                        >
                                        <BlueButton style={{width:wp('25'),height:hp('4'),alignSelf:'center',marginTop:hp('.8'),elevation:10}}
                                  textStyle={{fontSize:wp('3.3')}}
                                    // loading={loading}
                                    title={'Approve'}
                                    />   
                                    </TouchableOpacity> 
                            </View>:[]}
                        
 {/* <TouchableOpacity style={Styles.plusIcon} >
          <GenericIcon
            name={'add'}
            //onPress={() => this.onPressCard()}
            style={{ color: Colors.white, fontSize: 45, alignSelf: 'center' }}
          />
        </TouchableOpacity> */}

                        


                    </View> 

</TouchableOpacity>



);

}
export default TeamOnboardingCard
const Styles = StyleSheet.create({
    head: {
        height: hp('23%'),
        backgroundColor: Colors.primary, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
        flexDirection: 'column'
    }, t1: {
        fontSize: 23, fontWeight: 'bold', marginLeft: 50, color: '#FFFFFF'
    },
    t2: {
        fontSize: wp('4'), fontWeight: 'bold', marginLeft: 15, color: '#343434'
    }, tt: {
        flexDirection: 'row'
        , height: hp('5%'), backgroundColor: 'white', width: wp('85%'), borderRadius: 5, alignSelf: 'center'
    }, card: {
         marginTop:10,marginBottom: 10, width: wp('90%'),
        borderWidth: 0, elevation: 3, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white',paddingBottom:10
    },
    plusIcon: {
      backgroundColor:Colors.primary,
      width:wp('20'),
      borderRadius:50,
    marginLeft:'80%'
      },
      keytext:{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right',fontSize:wp('3.4') },
      valuetext:{ color: '#343434', marginVertical: 2, fontWeight: 'bold',fontSize:wp('3.4') },
});