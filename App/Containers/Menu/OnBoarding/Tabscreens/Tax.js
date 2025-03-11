import { CheckBox } from "native-base";
import React,{Component} from "react";
import {  Text,TextInput,View,ScrollView} from "react-native";
import Colors from 'App/Theme/Colors';
import Styles from'./Style';
import BlueButton from "../../../../Components/BlueButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import { connect } from 'react-redux';
import menuActions from 'App/Stores/Menu/Actions';
import InputText from 'App/Components/FormInput/InputText';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import InputNumber from 'App/Components/FormInput/InputNumber';
class Tax extends Component{


	gstValidation = (value) => {
      let show=this.props.shows;
		if (value.length <= 15) {
			this.setState({
				GstNo: value,
				GstNoError: ""
			})
			this.props.changeForm({ edited_field: show==false?'gstIn':'GST_IN__c', edited_value: value })
		}
		else {
			this.setState({
				GstNo: value,
				GstNoError: "GST no must have 15 digit"
			})
		}
	}
   
	panValidation = (value) => {
      let show=this.props.shows;
		if (value.length <= 10) {
			this.setState({
				PanNo: value,
				PanNoError: ""
			})
			this.props.changeForm({ edited_field: show==false?'panNumber':'PAN_Number__c', edited_value: value })
		} else {
			this.setState({
				PanNo: value,
				PanNoError: "Pan no must have 10 digit"
			})
		}
	}
	AadharValidation = (value) => {
      let show=this.props.shows;
		if (value.length <= 12) {
			this.setState({
				PanNo: value,
				PanNoError: ""
			})
			this.props.changeForm({ edited_field: show==false?'aadhar':'Aadhar_Number__c', edited_value: value })
		} else {
			this.setState({
				PanNo: value,
				PanNoError: "Pan no must have 10 digit"
			})
		}
	}

   validateGstNumber(value) {
      // console.log("vaueeee",value);
      let error;
      if (!value) {
        error = "";
  
      } else if (
        !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(value)
      ) {
        error = "Invalid GST Number";
      }
      else{
        // console.log("gggggg",error);
        return error
      }
      return error
    }
  
    validateAadhaar(value) {
      let error;
      if (!value) {
        error = "";
      } else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(value)) {
        error = "Invalid Aadhaar Number";
      }
      return error;
    }
    validatePan(value) {
      let error;
      if (!value) {
        error = "";
      } else if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
        error = "Invalid PAN Number";
      }
      return error;
    }


render(){

   const{form,changeForm,selectlist}=this.props;
   let show=this.props.shows;
return(
<View>
<View style={{marginTop:30}}>
            <Text style={{marginLeft:'6%',fontSize:wp('3.9')}}>PAN No.</Text>
            <View style={{width:'90%',marginLeft:'4%'}}>
            {show==false?
            <View>
            <InputText
            style={Styles.inputtext}
            placeholder={'Enter PAN No.'}
              value={form.panNumber}
            //   maxlength={4}
             onChange={(value) => changeForm({ edited_field: show==false?'panNumber':'PAN_Number__c', edited_value: value })}
            />
            <Text style={{color:'red'}}>{this.validatePan(form.panNumber)}</Text>
            </View>
            :
            <View>
            <InputText
            style={Styles.inputtext}
            placeholder={'Enter PAN No.'}
              value={form.PAN_Number__c}
            //   maxlength={4}
             onChange={(value) => this.panValidation(value.toUpperCase())}
            />
           <Text style={{color:'red'}}>{this.validatePan(form.PAN_Number__c)}</Text>
            </View>
            }
         </View>
         </View>
<View style={{marginTop:10}}>
            <Text style={{marginLeft:'6%',fontSize:wp('3.9')}}>AADHAR No.</Text>
            <View style={{width:'90%',marginLeft:'4%'}}>
            {show==false?
            <View>
            <InputNumber
            styles={Styles.inputtext}
            placeholder={'Enter AADHAR No.'}
             value={form.aadhar}
             onChange={(value) => this.AadharValidation(value)}
            />
            <Text style={{color:'red'}}>{this.validateAadhaar(form.aadhar)}</Text>
            </View>:
            <View>
            <InputNumber
            styles={Styles.inputtext}
            placeholder={'Enter AADHAR No.'}
             value={form.Aadhar_Number__c}
             onChange={(value) => this.AadharValidation(value)}
            />
            <Text style={{color:'red'}}>{this.validateAadhaar(form.Aadhar_Number__c)}</Text>
            </View>
            }
         </View>
         </View>
<View style={{marginTop:10,width:'90%'}}>
            <Text style={{marginLeft:'6%',fontSize:wp('3.9')}}>GST No.*</Text>
            <View style={{width:'90%',marginLeft:'4%'}}>
            {show==false?
            
            <View>
            <InputText
            style={Styles.inputtext}
            placeholder={'Enter GST No.'}
             value={form.gstIn}
             onChange={(value) => this.gstValidation(value)}
            />
            <Text style={{color:'red'}}>{this.validateGstNumber(form.gstIn)}</Text>
            </View>
            :
            <View>
            <InputText
            style={Styles.inputtext}
            placeholder={'Enter GST No.'}
             value={form.GST_IN__c}
             onChange={(value) => this.gstValidation(value)}
            />
            <Text style={{color:'red'}}>{this.validateGstNumber(form.GST_IN__c)}</Text>
            </View>
            }
         </View>
         </View>
         <View >
   {/* <BlueButton
title={'Save'}
style={{marginTop:20,marginBottom:0,width:'25%',alignSelf:'center',height:40}}
/> */}

   </View>
         
</View>




)
}
}
const mapStateToProps = (state) => ({
   data:state.user.onboardingList,
   loading:state.user.getOnboardingLoading,
   searchFilters: state.user.searchFilters,
   userid:state.user.loginDetails.userId,
   token: state.user.token,
   form:state.menu.createOnboardinglist,
   territorylist:state.common.TerritoryAllList,
   selectlist:state.menu.selectlist,
 });
 
 const mapDispatchToProps = (dispatch) => ({
   changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),
   createonboarding:(params)=>dispatch(menuActions.createOnboarding(params))
 });
export default connect(mapStateToProps,mapDispatchToProps) (Tax)