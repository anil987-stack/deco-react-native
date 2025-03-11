import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Button, Textarea } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Style from './VisitBookOrderStyles'
import InputText from 'App/Components/FormInput/InputText'
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputNumber from 'App/Components/FormInput/InputNumber'
import BlueButton from 'App/Components/BlueButton'
import Select from 'App/Components/Select';
import CommonActions from 'App/Stores/Common/Actions';
import WhiteButton from 'App/Components/WhiteButton';
import Loading from 'App/Components/Loading';
import VisitsActions from 'App/Stores/Visits/Actions'

import SearchableDropdown from 'App/Components/SearchableDropdown';
import {
	NEW_RETAILER,
	RETAILER_NAME,
	AREA,
	DISTRIBUTOR,
	CATEGORY,
	CR_LIMIT,
	REMAINING_CR_LIMIT,
	OWNER_NAME,
	OWNER_NUMBER,
	SUBMIT
} from 'App/Constants'
import NavigationService from 'App/Services/NavigationService'
import RetailersActions from 'App/Stores/Retailers/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import _ from 'lodash'

class VisitBookOrderHeader extends Component {
	componentDidMount() {
        const{
            token, 
            fetchDistChannel,
            fetchAllPlant,
            fetchIncoTerm,
            fetchAllRoute,
            fetchAllInsurance,
            getBillParty,

            agentDistChannel,
            agentAllPlant,
            agentIncoTerm,
            agentAllRoute,
            agentAllInsurance,

        }=this.props

        fetchAllInsurance({token})
        fetchAllPlant({token})
        fetchAllRoute({token})
        fetchIncoTerm({token})
        fetchDistChannel({token})
        getBillParty({token})

	}

	componentWillUnmount() {
        this.props.clearOrderHeaderForm()
	}

	onSubmitClick = () => {
	

    }

	async submit() {
		if (this.props.orderHeaderForm.DC__c&&this.props.orderHeaderForm.plant__c) {
		 
		  
	NavigationService.navigate('VisitBookOrder')}
	
		else{  
			if(!this.props.orderHeaderForm.DC__c)
			HelperService.showToast({
			message: 'Distribution Channel not selected.',
			duration: 2000,
			buttonText: 'Okay'
		  });

		  if(!this.props.orderHeaderForm.plant__c)
			HelperService.showToast({
			message: 'Plant not selected.',
			duration: 2000,
			buttonText: 'Okay'
		  });
		}
		  return;
		}
	
	
	

	render() {
        const { orderHeaderForm, 
            validation, 
            dealerType, 
            loader, 
            user_details, 
            city, 
            beatLoader, 
            fetchBeat, 
            token,
            agentDistChannel,
            agentAllPlant,
            agentIncoTerm,
            agentAllRoute,
            agentAllInsurance,
            getBillPartyList,
            fetchAllInsuranceLoading,
            fetchAllRouteLoading,
            fetchIncoTermLoading ,
            fetchAllPlantLoading,
            fetchDistChannelLoading,
            getBillPartyLoading
        } = this.props;
		return (
			<View style={Style.container1}>

				<Text style={{ ...Style.heading, fontWeight: 'bold', marginBottom:'8%' }}>{'ORDER INFORMATION'}</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={Style.action}>
					
                    {fetchDistChannelLoading ?
						<Loading />

						:		
						<SearchableDropdown
							dataSource={agentDistChannel}
							placeHolderText={ 'Select Distribution Channel'}
							selectedValue={orderHeaderForm.DC__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'DC__c', edited_value: value })}
							placeholder={'Type or Select Distribution Channel' }
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'DC__c'}
							label={'Distribution Channel*' }
							style={Style.mb10}
							key={orderHeaderForm.DC__c + _.uniqueId()}
						/>
                        }
                      {fetchAllPlantLoading ?
					<Loading />

						:   
<SearchableDropdown
							dataSource={agentAllPlant}
							placeHolderText={ 'Select Plant'}
							selectedValue={orderHeaderForm.plant__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'plant__c', edited_value: value })}
							placeholder={'Type or Select Plant' }
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'plant__c'}
							label={'Plant*' }
							style={Style.mb10}
							key={orderHeaderForm.plant__c + _.uniqueId()}
						/>
                      }
                       { fetchAllRouteLoading ?
					<Loading />

						:    
                        <SearchableDropdown
							dataSource={agentAllRoute}
							placeHolderText={ 'Select Route'}
							selectedValue={orderHeaderForm.route__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'route__c', edited_value: value })}
							placeholder={ 'Type or Select  Route' }
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'route__c'}
							label={'Route*' }
							style={Style.mb10}
							key={orderHeaderForm.route__c + _.uniqueId()}
						/>
                       }
               {fetchIncoTermLoading ?
					<Loading />

						:              
                        <SearchableDropdown
							dataSource={ agentIncoTerm}
							placeHolderText={ 'Select Inco Terms'}
							selectedValue={orderHeaderForm.IncoT__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'IncoT__c', edited_value: value })}
							placeholder={'Type or Select Inco Terms'}
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'IncoT__c'}
							label={'Inco Terms*' }
							style={Style.mb10}
							key={orderHeaderForm.IncoT__c + _.uniqueId()}
						/>
               }
                        <SearchableDropdown
							dataSource={this.props.agentAreas}
							placeHolderText={ 'Select Payment Terms'}
							selectedValue={orderHeaderForm.payterms__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'payterms__c', edited_value: value })}
							placeholder={'Type or Select Payment Terms'}
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'payterms__c'}
							label={'Payment Terms*' }
							style={Style.mb10}
							key={orderHeaderForm.payterms__c + _.uniqueId()}
						/>

{fetchAllInsuranceLoading ?
						<Loading />

						:          
                        <SearchableDropdown
							dataSource={ agentAllInsurance}
							placeHolderText={ 'Select Insurance Type'}
							selectedValue={orderHeaderForm.Insutype__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'Insutype__c', edited_value: value })}
							placeholder={ 'Type or Select Insurance Type'}
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'Insutype__c'}
							label={'Insurance Type*' }
							style={Style.mb10}
							key={orderHeaderForm.Insutype__c + _.uniqueId()}
						/>
}
{ getBillPartyLoading?
						<Loading />
						:  
           
                        <SearchableDropdown
							dataSource={ getBillPartyList}
							placeHolderText={ 'Select Bill to Party*'}
							selectedValue={orderHeaderForm.billtoParty__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'billtoParty__c', edited_value: value })}
							placeholder={ 'Type or Select Bill to Party'}
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'billtoParty__c'}
							label={'Bill to Party*' }
							style={Style.mb10}
							key={orderHeaderForm.__c + _.uniqueId()}
						/>
}

{ getBillPartyLoading?
						<Loading />

						:  
           

                  <SearchableDropdown
							dataSource={getBillPartyList}
							placeHolderText={ 'Select Ship to Party*'}
							selectedValue={orderHeaderForm.shiptoparty__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'shiptoparty__c', edited_value: value })}
							placeholder={ 'Type or Select Ship to Party'}
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'shiptoparty__c'}
							label={'Ship to Party*' }
							style={Style.mb10}
							key={orderHeaderForm.shiptoparty + _.uniqueId()}
						/>}

<SearchableDropdown
							dataSource={this.props.divisionList}
							placeHolderText={ 'Division*'}
							selectedValue={orderHeaderForm.division__c}
							onChange={(value) => this.props.changeOrderHeaderForm({ edited_field: 'division__c', edited_value: value })}
							placeholder={'Type or Select Division'}
							invalid={false}
							customPickerStyles={{ ...Style.picker }}
							labelStyles={{ ...Style.pickerLabel }}
							invalid={validation.invalid && validation.invalid_field == 'division__c'}
							label={'Division*' }
							style={Style.mb10}
							key={orderHeaderForm.division__c + _.uniqueId()}
						/>

				

					
<View style={{...Style.action1, }}>
            <WhiteButton style={Style.button1} rounded title={'Cancel'} onPress={() => { NavigationService.goback() }} />
            <BlueButton  style={Style.button1} rounded large title={'Save'} onPress={() => this.submit()} />
          </View>
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.user.token,
		agentid: state.user.id,
		retailersOffset: state.retailers.retailersOffset,
		retailersLimit: state.retailers.retailersLimit,
		orderHeaderForm: state.visits.orderHeaderForm,
		validation: state.retailers.retailerFormValidation,
		createRetailerLoader: state.retailers.createRetailerLoader,
		retailerCompetitors: state.retailers.retailerCompetitors,
		categories: state.retailers.categories,
		retailerCompetitors: state.retailers.retailerCompetitors,
		dealersSearchList: state.retailers.dealersSearchList,
		agentAreas: state.common.retailerArea,
		loader: state.common.fetchRetailerAreaLoading,
		beatList: state.common.agentBeat,
		dealersList: state.retailers.dealersSearchList,
		dealerType: state.common.dealerType,
		user_details: state.user.user_details,
		city: state.user.agentAreas,
        beatLoader: state.common.fetchBeatLoading,
        divisionList: state.common.divisionList,
        fetchAllInsuranceLoading : state.common.fetchAllInsuranceLoading,
        fetchAllRouteLoading : state.common.fetchAllRouteLoading,
        fetchIncoTermLoading : state.common.fetchIncoTermLoading,
        fetchAllPlantLoading : state.common.fetchAllPlantLoading,
        fetchDistChannelLoading : state.common.fetchDistChannelLoading,
        getBillPartyLoading : state.common.getBillPartyLoading,

        agentDistChannel : state.common.searchDistChannel,
        agentAllPlant:   state.common.searchAllPlant,
        agentIncoTerm:   state.common.agentIncoTerm,
        agentAllRoute :  state.common.agentAllRoute,
        agentAllInsurance : state.common.agentAllInsurance,
        getBillPartyList: state.common.getBillPartyList,

	}
}

const mapDispatchToProps = (dispatch) => ({
    changeOrderHeaderForm: (params) => dispatch(VisitsActions.changeOrderHeaderForm(params)),
    clearOrderHeaderForm: ()=> dispatch(VisitsActions.clearOrderHeaderForm()),
    
    fetchDistChannel: (params) => dispatch(CommonActions.fetchDistChannel(params)),
    fetchAllPlant: (params) => dispatch(CommonActions.fetchAllPlant(params)),
    fetchIncoTerm: (params) => dispatch(CommonActions.fetchIncoTerm(params)),
    fetchAllRoute: (params) => dispatch(CommonActions.fetchAllRoute(params)),
    fetchAllInsurance: (params) => dispatch(CommonActions.fetchAllInsurance(params)),
    getBillParty: (params) => dispatch(CommonActions.getBillParty(params)),

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VisitBookOrderHeader)
