import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Button,TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import TextArea from "App/Components/FormInput/TextArea";

import BlueButton from "App/Components/BlueButton/BlueButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import CommonActions from "App/Stores/Common/Actions";
import VisitsActions from "App/Stores/Visits/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import SearchableDropdown from 'App/Components/SearchableDropdown';
import Loading from "App/Components/Loading";
import InputText from 'App/Components/FormInput/InputText';
import GenericIcon from 'App/Components/GenericIcon'
import menuActions from 'App/Stores/Menu/Actions';


class ModalOnboarding extends Component  {

submit(){
const{createActivity,token,Activityform}=this.props;
let item=this.props.data;

createActivity({
token,
id:item.Id,
form:{
    "records" :[{
     "attributes" : {"type" : "Task", "referenceId" : "ref1"},
     
        "Subject":Activityform.Subject,
        "Description":Activityform.Comment,
        "WhatId":item.Id  ///Onboarding Record ID
     
    }]}
    


})

}


	render() {
		const { 
			isVisible, 
			pressStartVisit,
			onCloseModal, 
			selectedObjective,
			addVisitData,
            addVisitToPlan,
            changePlannedSelectedObjective,
            changePlannedSelectedOtherObjective,
            objectListLoader,
            objectList,
            selectedOtherObjective,
            hideObjectiveModal,
            ObjmodalList,
            Activityform,
            changeForm,
            loader
		} =  this.props;
        let item=this.props.data; 
        //  console.log("abcde",item)

	    let body = (
	    	<View style={{width:300}} >
         <View>
              <InputText style={Style.inputtext}
        placeholder={'Enter Subject'}
        label={'Subject'}
         value={Activityform.Subject}
         onChange={(value) => changeForm({ edited_field: 'Subject', edited_value: value })}
        // error={validation.invalid && validation.invalid_field == 'firmName'}
        />
        </View>
        <View>
          <InputText style={{...Style.inputtext,marginTop:0}}
        placeholder={'Enter Remark'}
        label={'Remarks'}
         value={Activityform.Comment}
         onChange={(value) => changeForm({ edited_field: 'Comment', edited_value: value })}
        // error={validation.invalid && validation.invalid_field == 'firmName'}
        />
         </View>
         <View style={{alignSelf:'center'}}>
         <BlueButton
         title='submit'
         loading={loader}
         style={{marginTop:hp('10'),width:wp('30'),height:40}}
         onPress={()=>this.submit()}
         />
         </View>
        
	        </View>
	    );

    
	 
	    return (
           
	       <View style={Style.container}>
              {body}
           </View>
            
	    );
	}	
}

const mapStateToProps = (state) => ({
	searchFilters : state.visits.planVisit.searchFilters,
    objectList : state.common.objectiveList,
    selectedObjective: state.visits.planVisit.selectedObjective,
    selectedOtherObjective: state.visits.planVisit.selectedOtherObjective,
    addVisitData: state.visits.addVisitData,
    ObjmodalList:state.common.isObjModalList,
    Activityform:state.menu.createOnboardinglist,
    token: state.user.token,
    loader:state.menu.CreateAgainstVisitLoading,
    // objectListLoader: state.visits. objectListLoader,
	
});

const mapDispatchToProps = (dispatch) => ({
createActivity:(params)=>dispatch(menuActions.CreateAgainstVisit(params)),
changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),


  });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalOnboarding)

const Style = StyleSheet.create({
	modalContainer: {
		// justifyContent: 'center', 
		// alignItems: 'center', 
		width: '100%',
		backgroundColor: "transparent"
	},
    modalHeading: {
        color: Colors.primary,
        fontSize: wp('4.5%'),
        fontFamily: ApplicationStyles.textMsgFont,
        marginBottom: 10,
        textTransform: 'uppercase' 
    },
    questionHeading: {
    	color: Colors.primary,
    	fontSize: wp('4.8%'),
        textAlign:'center',
    	fontFamily: ApplicationStyles.textMsgFont,
        marginBottom:hp("2%"),
        borderWidth:2,
        borderBottomColor:Colors.grey,
        borderRightColor:"transparent",
        borderLeftColor:"transparent",
        borderTopColor:"transparent",
        
    },
    actionButtonTextStyle: {
        fontSize: wp('4%')
    },
    actionButton: {
        width: wp('30%'),
        height: hp('5%'),
        borderRadius: hp('1%')
    },
    yesActionButton: {
    	backgroundColor: Colors.background
    },
    noActionButton: {
    	backgroundColor: '#D71E22'
    },
    actionContainer: {
        flexDirection: 'row',
        marginTop: hp('2.5%'),
        width: '100%',
        justifyContent: 'space-around'
    },
    container: {
        
            padding: 20, 
            alignSelf: 'center', 
            backgroundColor: Colors.white, 
            flex: 1, 
            
            // justifyContent:'center'
    
    },

    picker: {
        borderRadius: 8,
        width: wp('80%'),
        height: hp('5.7%'),
        marginBottom: hp('20%'),
        paddingHorizontal: wp("2%"), 
        marginLeft:wp('60%')
      },
      pickerLabel: {
        color: Colors.grey,
        fontFamily: ApplicationStyles.textFont,
        textAlign: "left",
        width: "99%",
        padding: 10,
        flexDirection: "row"
      },
      inputtext:{height:40,borderColor:'white',borderWidth:1,alignSelf:'center',backgroundColor:'white',borderBottomColor:'lightgrey',color:'black',width:150},
});