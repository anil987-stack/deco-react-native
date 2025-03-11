import React, { Component } from 'react'
import { View, Alert, ScrollView, FlatList} from 'react-native'
import { Button, Text } from 'native-base';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Style from './ManagerTaggingStyles'
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
import UserActions from 'App/Stores/User/Actions'
import CommonActions from 'App/Stores/Common/Actions'
import {Colors,ApplicationStyles } from 'App/Theme'
import TextArea from 'App/Components/FormInput/TextArea'
import DatePicker from 'App/Components/DatePicker'
import DatePickerStyles from 'App/Components/DatePicker/DatePickerStyles'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import _ from 'lodash'
import Manager from '../../../Components/Manager/Mnager';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class ManagerTagging extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        //   checked: false,
          data:this.props.data,
        //   onSelect:this.props.onSelect
        };
        // console.log("data",this.props.data)
      }
	componentDidMount() {
		const {
			data,
			updateVisitFormChange,
			token,
			managerList,userid
		} = this.props;

		// updateVisitFormChange({
		// 	edited_field: 'visitDate',
		// 	edited_value:	HelperService.dateReadableFormatWithHyphen(data.Visit_Date__c)
		// });
		managerList({token,userId:userid})

	}

	componentWillUnmount(){
		const {
			updateVisitFormChange
		} = this.props;
	}

	onSubmit() {
		const {
			data,
			token,
			selectManagerForm,
			submitbeat
			
		} = this.props;

		// console.log("selectManagerForm",data,selectManagerForm.owner)
		if(data.PJP_Beats__r!=null){
			HelperService.showToast({
				message: 'Manager is already Tagged.',
				duration: 1000,
				buttonText: ''
			});
		}else{
			let requestData = {
			
				"line":[{"beat":data.Beat__c}],
				"visit_date":HelperService.dateReadableFormatWithHyphen(selectManagerForm.Visit_date__c),
				"owner":selectManagerForm.owner,
				"taggedBeat":data.Id
		

		}
		// submitbeat('request data',requestData);
		console.log('submit data',requestData);
		Alert.alert(
			'Submit Manager Tag',
			'Do you want to submit your Beat plan Taagging?',
		  [
			{
			  text: 'Cancel',
			  onPress: () => console.log('Cancel Pressed'),
			  style: 'cancel',
			},
			{text: 'Confirm', onPress: () => submitbeat({form: requestData, token: token})},
		  ],
		  {cancelable: false},
		);
		}

	
		
		// cancelVisit({
		
		// 	"token"		 : token,
		// 	"recordID":data.Id,
		// 	"cancelReason":editVisitData.cancelRemarks
			
		// });
	}

	getDataNode(){

        let visibleNode=[];
        
        const{
            managerListData,
			managerListLoader,
			selectManager}=this.props;

        if(managerListData && managerListData.length){
       
          console.log("second",managerListData)
        //  let filteredList=this.pendingfliterList(filteredSitesList.map((obj) => obj));
        //  console.log("filteredList",filteredSitesList[0])
        
        //   console.log("second screen",managerListData)
          
            if(managerListData.length){
				let manager=[]
				 manager.push(managerListData[0]);

				console.log('manager item',manager);


                visibleNode=(
                        <FlatList
                       
                        showsVerticalScrollIndicator={false}
                        data={manager}
                        renderItem={({item})=>
						{
							console.log('items',item);
							return(<Manager item={item} beat={this.state.data} key={item.sfid}/>)
						}
						}
                    keyExtractor={item => item.sfid}
                    refreshing={managerListLoader}
                   // onRefresh={() => this.fetchCall()} 
                   />
                   
        
                )
            } else {
                visibleNode =<NoDataFound text={'Not  Found'} />
              }
            } else if (managerListLoader) {
              visibleNode = <Loading />
            }
        
            return visibleNode;
        }

  	render() {
	  	const {
	  		edit,
	  		data,
	  		isASM,
	  		cancel,
	  		psmList,
	  		editVisitLoader,
	  		cancelVisitLoader,
	  		updateVisitFormChange,
	  		editVisitData,
	  		editVisit,
	  		cancelVisit,
	  		validation,
			  managerListData,
			  searchFilters,
			  createPjpLoading
	  	} = this.props;
// console.log("cancel",cancel)
  		if (cancel) {
		    return (
		      	<View 
		      		style={{
		      			padding: 20, 
		      			alignSelf: 'center', 
		      			backgroundColor: Colors.white, 
		      			flex: .8, 
		      			justifyContent:'center'
		      		}}>
		      		<ScrollView>
					  <View >
						  {this.getDataNode()}
					  </View>
		          	{/* <TextArea 
		          		placeholder={'Cancellation Remarks...'} 
		          		numberOfLines={5}
		          		value={editVisitData.cancelRemarks}
		          		error={validation.invalid && validation.invalid_field == 'cancelRemarks'}
		          		onChange={(text) => updateVisitFormChange({edited_field: 'cancelRemarks', edited_value: text})} 
		          	/> */}
					</ScrollView>
		          	<BlueButton 
		          		title={'Submit'} 
		          		style={{
							// marginBottom: 20, 
							width: wp('25'),
							height: 50,
							alignSelf:"center",
							// backgroundColor:'red'
						}} 
						textStyle={{
							fontSize: 20, 
							fontFamily: ApplicationStyles.textMsgFont
						}} 
		          		loading={createPjpLoading}
						
		          		onPress={() => this.onSubmit()}
		          	/>
		          
		        </View>
		    );
		}

		return [];
  	}
}

const mapStateToProps = (state) => ({
  token						: state.user.token,
  userid					:state.user.loginDetails.userId,
  agentid 					: state.user.id,
  editVisitData				: state.visits.editVisit.formData,
  createPjpLoading			: state.user.createPjpLoading,
  editVisitLoader			: state.visits.editVisit.editVisitLoader,
  validation 				: state.visits.editVisit.editVisitValidation,
  isASM                 	: state.user.isASM,
  psmList               	: state.user.psmList,
  managerListData			: state.user.managerListData,
  managerListLoader        :state.user.managerListLoader,
  selectManagerForm        :state.user.selectManagerForm,
  searchFilters				: state.user.searchFilters,


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
  selectManager		:(params)		=>dispatch(UserActions.selectManager(params)),
  submitbeat:(params)=> dispatch(UserActions.createPjp(params)),


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerTagging)