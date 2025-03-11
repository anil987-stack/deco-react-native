import React,{ useState } from "react";
import { View,Text ,StyleSheet, Dimensions,Image, TouchableOpacity } from "react-native";
import { CheckBox,Badge} from 'native-base';
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon';
import DisplayCardStrip from '../GenericDisplayCard/GenericDisplayCardStrip';
import { Fonts } from "../../Theme";
import UserActions from 'App/Stores/User/Actions'

import { connect } from 'react-redux';

import NavigationService from "App/Services/NavigationService";
// import { Item } from "react-native-paper/lib/typescript/components/List/List";
 const Manager = ({loading,datechange,pjplist,totalpjp,fetch,data,item,added,visit_date,onAddClick,onRemoveClick})=>{



return(
    
    <View  style={styles.Screen1} >
        <View style={{flexDirection:'row',width:wp('100%')}}>
           <View style={{width:wp('60'),marginLeft:10}}>
<Text style={{fontWeight:'700',marginLeft:12,fontSize:15}}>{item.name}</Text>
<DisplayCardStrip  label={"Emp Code:"} value={''}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',color:'red',fontSize: 13,justifyContent:'flex-start',}} labelStyle={{marginRight:wp('9%'),fontWeight:'700',fontSize: 13,color:Colors.primary,width:70}} style={{justifyContent:'space-around',width:'50%',marginLeft:10}} />
<DisplayCardStrip  label={"mobile:"} value={''}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',color:'red',fontSize: 13,justifyContent:'flex-start',}} labelStyle={{marginRight:wp('9%'),fontWeight:'700',fontSize: 13,color:Colors.primary,width:70}} style={{justifyContent:'space-around',width:'50%',marginLeft:10,marginTop:-5}} />

           </View>
           <View style={{width:'30%',marginTop:10}}>
          <TouchableOpacity
         
          onPress={() => {added  ? onRemoveClick() : onAddClick()}}
          >
            {added ? <GenericIcon name="check" style={{fontSize:22 ,backgroundColor:Colors.primary,width:21,color:"white"}}  /> : <GenericIcon name="crop-square" style={{fontSize:22}} />}
          </TouchableOpacity>

           </View>

          </View>
         
               
        </View>

    
   
);


}
const mapStateToProps = (state) => ({
    token						: state.user.token,
    userid					    :state.user.loginDetails.userId,
    agentid 					: state.user.id,
    editVisitData				: state.visits.editVisit.formData,
    cancelVisitLoader			: state.visits.editVisit.cancelVisitLoader,
    editVisitLoader			    : state.visits.editVisit.editVisitLoader,
    validation 				    : state.visits.editVisit.editVisitValidation,
    isASM                 	    : state.user.isASM,
    psmList               	    : state.user.psmList,
    managerListData			    : state.user.managerListData,
    managerListLoader           :state.user.managerListLoader,
    selectManagerForm           :state.user.selectManagerForm,
    searchFilters				: state.user.searchFilters,
    pjpList:state.user.pjpList
  
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchRetailers:(params)    		=> dispatch(RetailersActions.fetchRetailers(params)),
    addVisitToPlan:(params) 	 		=> dispatch(VisitsActions.addVisitToPlan(params)),
    openModal     :(params)    		=> dispatch(CommonActions.openModal(params)),
    cancelVisit   :(params)    		=> dispatch(VisitsActions.cancelVisit(params)),
    editVisit   	:(params)    		=> dispatch(VisitsActions.editVisit(params)),
    cancelVisitLoadingStop:()  		=> dispatch(VisitsActions.cancelVisitLoadingStop()),
    editVisitLoadingStop:()    		=> dispatch(VisitsActions.editVisitLoadingStop()),
    updateVisitFormChange:(params)	=> dispatch(VisitsActions.updateVisitFormChange(params)),
    managerList			:(params)	=> dispatch(UserActions.managerList(params)),
    selectManager		:(params)		=>dispatch(UserActions.selectManager(params))
  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Manager)
const styles = StyleSheet.create({
    Screen1:{
        width:'80%',
        paddingBottom:10,
        backgroundColor:'#fff',
        marginTop:'5%',
        padding:20,
        alignSelf:'center',
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
checkboxContainer: {
    // flexDirection: "row",
    marginLeft: hp('10%'),
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    justifyContent:'space-evenly'
  },
  addActionButton: {
    borderWidth: 1.5, 
    alignSelf: 'center',
    width: 30,
    backgroundColor:Colors.white,
    height: 20
    
  },




});