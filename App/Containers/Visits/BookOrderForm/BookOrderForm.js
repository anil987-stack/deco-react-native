import React, { Component } from 'react'
import { View, Alert, ScrollView,Switch, FlatList} from 'react-native'
import { Button, Text,Container } from 'native-base';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Style from './BookOrderFormStyle'
import BlueButton from 'App/Components/BlueButton'
import WhiteButton from 'App/Components/WhiteButton';
import NavigationService from 'App/Services/NavigationService'
import {HelperService} from 'App/Services/Utils/HelperService';
import PlannedVisitCard from 'App/Containers/Visits/PlannedVisitCard'
import Loading from 'App/Components/Loading'
import GenericIcon from 'App/Components/GenericIcon'
import NoDataFound from 'App/Components/NoDataFound'
import RetailersActions from 'App/Stores/Retailers/Actions'
import VisitsActions from 'App/Stores/Visits/Actions'
import CommonActions from 'App/Stores/Common/Actions'
import {Colors,ApplicationStyles } from 'App/Theme'
import TextArea from 'App/Components/FormInput/TextArea'
import DatePicker from 'App/Components/DatePicker'
import DatePickerStyles from 'App/Components/DatePicker/DatePickerStyles'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import _ from 'lodash'
import BrandComponent from 'App/Components/BrandComponent';
import InputText from 'App/Components/FormInput/InputText';
import BackArrowButton from 'App/Components/BackArrowButton'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SelectDate from '../../../Components/SelectDate'




class BookOrderForm extends React.Component {
	state = { 
        toggle: false, 
        imageViewerModalVisible: false, 
        productImagesToShowInModal: [],
        open_modal:false,
     };
	componentDidMount() {
		// const {
		// 	data,
		// 	updateVisitFormChange
		// } = this.props;
		// //console.log(data)
		// updateVisitFormChange({
		// 	edited_field: 'visitDate',
		// 	edited_value:	HelperService.dateReadableFormatWithHyphen(data.Visit_Date__c)
		// });
	}

	componentWillUnmount(){
		const {
			updateVisitFormChange
		} = this.props;

		// updateVisitFormChange({
		// 	edited_field: 'visitDate',
		// 	edited_value: null
		// });

		// updateVisitFormChange({
		// 	edited_field: 'psm',
		// 	edited_value: ''
		// });

		// updateVisitFormChange({
		// 	edited_field: 'summary',
		// 	edited_value: ''
		// });

		// updateVisitFormChange({
		// 	edited_field: 'cancelRemarks',
		// 	edited_value: ''
		// });
	}

	onSubmit() {
		const {
			data,
			token,
			agentid,
		} = this.props;
// );
let date=HelperService.dateReadableFormatWithHyphen()
		editVisit({
	         "token"		 : token,
		
			
"batchRequests" : [
    {
    "method" : "PATCH",
    "url" : "v34.0/sobjects/Visits__c/"+data.Id,
    "richInput" : {
                   "Visit_Date__c":HelperService.dateReadableFormatWithHyphen(editVisitData.visitDate),
                  }    
    },
    {
    "method" : "GET",
    "url" :"v34.0/sobjects/Visits__c/"+data.Id+"?"+"fields=id,Visit_Date__c",
    }]


		});
	}

	onCancelSubmit() {
		const {
			data,
			token,
			agentid,
			cancelVisit,
			editVisitData,
			editVisitValidationFailed
		} = this.props;

	
		if (!editVisitData.cancelRemarks) {
			HelperService.showToast({
		    	message		: 'Please enter remarks before submitting.', 
		    	duration	: 2000, 
		    	buttonText	: 'Okay',
		    	position    : 'top'
		    });

			editVisitValidationFailed({
				invalid_field: 'cancelRemarks'
			});
			return;
		}
		let	remark=editVisitData.cancelRemarks;
		cancelVisit({
		
			
		token,
				"batchRequests" : [
					{
					"method" : "PATCH",
					"url" : "v34.0/sobjects/Visits__c/"+data.Id,
					"richInput" : {"Status__c":"Cancelled",
								   "Cancelled_Reason__c":editVisitData.cancelRemarks 
								  }    
					},
					{
					"method" : "GET",
					"url" : "v34.0/sobjects/Visits__c/"+data.Id+"?"+"fields=id,Status__c",
					}]
				
				
		});
	}

  	render() {
	  	const {
	  		cancelVisitLoader,
	  		updateVisitFormChange,
	  	} = this.props;

  		// if (cancel) {
		    return (
				<Container style={{ marginHorizontal: 5 }}>
 					<View style={{ marginVertical: 5 }}>
                    	<BackArrowButton />
                	</View>
		      	<View 
		      		style={{
		      			padding: 20, 
		      			alignSelf: 'center', 
		      			backgroundColor: Colors.white, 
		      			flex: 1, 
		      			justifyContent:'center'
		      		}}>
						 
                {/* <View style={{ flexDirection: 'row', alignSelf: 'center', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}>Primary Order</Text>
                </View> */}
		      		<ScrollView style={{height:hp('200%'),marginBottom:"0%"}}>
					  <BrandComponent 
						list={[{id: 'a0FO000000TD0HoMAL', name: 'Hello world'}]} 
						label={'Select Distributor'} 
						value={'form.Competitor_Product__c'} 
						styles={Style.pickerStyles}
						changeForm={(value) => changeForm({ edited_field: 'Competitor_Product__c', edited_value: value })}
						disabled={false}
					/>
    				<View style={{borderColor:'white',borderWidth:1,borderBottomColor:'lightgrey'}}>
					<Text style={Style.title}>
		            	{'Select Delivery Date'}
		          	</Text>
					<SelectDate
						// style={{backgroundColor:'red'}}
						date={"2021-10-04"}
						// maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
						onDateChange={(date) =>changeForm({
						edited_field: "Date_of_birth",
						edited_value: date,
						})}/>
						</View>
		          	<Text style={Style.title}>
		            	{'Delivery Address'}
		          	</Text>
		          	<TextArea 
		          		placeholder={'Delivery Address'} 
		          		numberOfLines={3}
		          		value={"Delivery Address"}
		          		// error={validation.invalid && validation.invalid_field == 'cancelRemarks'}
		          		onChange={(text) => 
                            updateVisitFormChange({edited_field: 'deliveryAddress', edited_value: text})} 
		          	/>
					<Text style={Style.title}>
		            	{'New Delivery Address'}
		          	</Text>
		          	<TextArea 
		          		placeholder={'New Delivery Address'} 
		          		numberOfLines={3}
		          		value={"New Delivery Address"}
		          		// error={validation.invalid && validation.invalid_field == 'cancelRemarks'}
		          		onChange={(text) => 
                            updateVisitFormChange({edited_field: 'newDeliveryAddress', edited_value: text})} 
		          	/>
					  <BrandComponent 
						list={[{id: 'a0FO000000TD0HoMAL', name: 'Hello world'}]} 
						label={'Plant Depot'} 
						value={'form.Competitor_Product__c'} 
						styles={Style.pickerStyles}
						changeForm={(value) => changeForm({ edited_field: 'Competitor_Product__c', edited_value: value })}
						disabled={false}
					/>
					<Text style={{marginTop:hp('10%'),color: Colors.button,fontFamily: ApplicationStyles.textMsgFont,
    fontSize: 14}}>Cash Discount Applicable</Text>
                        <Switch
                            style={{marginLeft:wp('0%'),alignItems:'flex-end',marginTop:wp('-5.5%')}}
                            trackColor={{ false: '', true: Colors.primary }}
                            thumbColor="white"
                            ios_backgroundColor="gray"
                            onValueChange={(value) => {
                                this.setState({ toggle: value })
                                // value?value="Yes":value="No";
                                // this.props.changeSearchFilters({ edited_field: 'new_product__c', edited_value: value })
                                // if(value=="Yes"){
                                    
                                //     this.props.changeSearchFilters({ edited_field: 'category_name', edited_value: 'A' })
                                //     this.props.changeSearchFilters({ edited_field: 'category__c', edited_value: 'A' })
                                //     this.setState({ category_name: searchFilters['category_name'] })
                                // }else{
                                //     this.props.clearProductFilter();
                                //     this.setState({ category_name: searchFilters['category_name'] })
                                // }
                                

                            }}
                            value={this.state.toggle}
                        />
		          	
		          </ScrollView>
				  <BlueButton 
		          		title={'Save'} 
		          		style={{
							marginTop: 20,
							// backgroundColor:'red',
							bottom:1, 
							width: '60%',
							height: 50,
							alignSelf:"center"
						}} 
						textStyle={{
							fontSize: 20, 
							fontFamily: ApplicationStyles.textMsgFont
						}} 
		          		loading={cancelVisitLoader}
		          		onPress={() => NavigationService.navigate('BookOrder')}
		          	/>
		        </View>
				</Container>

		    );
		// }

  	}
}

const mapStateToProps = (state) => ({
  token						: state.user.token,
  agentid : state.user.id,
  editVisitData				: state.visits.editVisit.formData,
  cancelVisitLoader			: state.visits.editVisit.cancelVisitLoader,
  editVisitLoader			: state.visits.editVisit.editVisitLoader,
  validation 				: state.visits.editVisit.editVisitValidation,
  isASM                 	: state.user.isASM,
  psmList               	: state.user.psmList
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
  editVisitValidationFailed:(params)=> dispatch(VisitsActions.editVisitValidationFailed(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookOrderForm)