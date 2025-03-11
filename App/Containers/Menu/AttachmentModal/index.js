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
import Attachment from '../Attachment/AttachmentShow';

class AttachmentModal extends Component  {

   startvisit(data){
const{
    ObjmodalList,
    hideObjectiveModal,
    pressStartVisit,
    onCloseModal, 
}=this.props;

    pressStartVisit({visit:data.visit,"Activity_c":"Start Visit"})
    {onCloseModal();}
   }

   makecall(data){
    const{
        ObjmodalList,
        hideObjectiveModal,
        pressStartVisit,
        onCloseModal,
    }=this.props;
    pressStartVisit({visit:data.visit,"Activity_c":"Make Call"})
    {onCloseModal();}
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
            ObjmodalList	
		} =  this.props;
         // console.log("abcde",ObjmodalList)

	    let body = (
	    	<View style={Style.container}>
                <View>
                     <GenericIcon        
                    show={true} 
                     name={'close'} 
                    style={{marginTop:-10,width:30,height:30,fontSize:25,color:Colors.red,fontWeight:'bold',marginLeft:wp(80)}} 
                    onPress={()=>hideObjectiveModal()}
                    />
                </View>
       
  
		        <View style={Style.modalContainer}>
		        <View style={{width:'100%',alignSelf:'center'}}>
                <Text style={Style.questionHeading}>Select Activity</Text>
                <View style={{alignItems:'center'}}>

                <TouchableOpacity onPress={()=> this.makecall(ObjmodalList)} >
                <View style={{width:150,backgroundColor:Colors.primary,height:40,marginTop:10,borderRadius:10,elevation:5}}>
                <Text style={{width:'100%',textAlign:'center',alignSelf:'center',marginTop:7,color:"white",fontWeight:'bold',fontSize:18}}>Make Call</Text>
                </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=> this.startvisit(ObjmodalList)} >
                <View style={{width:150,backgroundColor:Colors.primary,height:40,marginTop:10,borderRadius:10,elevation:5}}>
                <Text style={{width:'100%',textAlign:'center',alignSelf:'center',marginTop:7,color:"white",fontWeight:'bold',fontSize:18}}>Start Visit</Text>
                </View>
                </TouchableOpacity>


                </View>
                </View>
		        </View>
	        </View>
	    );

    
	 
	    return (
	        <Modal
	            isVisible={isVisible}
	            onBackdropPress={() => {onCloseModal();}}
	            animationIn={"slideInUp"}
                style={{backgroundColor:'white',flex:1,marginTop:hp('40')}}
	        >
                  <View>
                     <GenericIcon        
                    show={true} 
                     name={'close'} 
                    style={{width:30,height:30,fontSize:30,color:Colors.red,fontWeight:'bold',marginLeft:wp(80)}} 
                    onPress={()=>hideObjectiveModal()}
                    />
                </View>
	            <Attachment item={ObjmodalList}/>
	        </Modal>
	    );
	}	
}

const mapStateToProps = (state) => ({
	searchFilters : state.visits.planVisit.searchFilters,
    objectList : state.common.objectiveList,
    selectedObjective: state.visits.planVisit.selectedObjective,
    selectedOtherObjective: state.visits.planVisit.selectedOtherObjective,
    addVisitData: state.visits.addVisitData,
    ObjmodalList:state.common.isAttachmentList,
    // objectListLoader: state.visits. objectListLoader,
	
});

const mapDispatchToProps = (dispatch) => ({
    addVisitToPlan: (params) => dispatch(VisitsActions.addVisitToPlan(params)),
    changePlannedSelectedObjective: (params) => dispatch(VisitsActions.changePlannedSelectedObjective(params)),
    changePlannedSelectedOtherObjective: (params) => dispatch(VisitsActions.changePlannedSelectedOtherObjective(params)),
    pressStartVisit: (params) => dispatch(VisitsActions.pressStartVisit(params)),
    hideObjectiveModal: () =>dispatch(CommonActions.hideAttachmentModal()),
    


  });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AttachmentModal)

const Style = StyleSheet.create({
	modalContainer: {
		justifyContent: 'center', 
		alignItems: 'center', 
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
        borderBottomColor:Colors.black,
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
        margin: 0,
        backgroundColor: "#E7F9D7",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
        height: hp('30%')
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
});