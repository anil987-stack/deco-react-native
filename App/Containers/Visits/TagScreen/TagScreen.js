import React, { Component } from 'react'
import { View, Alert, ScrollView, FlatList} from 'react-native'
import { Button, Text } from 'native-base';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Style from '../../Menu/ManagerTagging/ManagerTaggingStyles'
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
import Manager from 'App/Components/Manager/VisitMnager';
import { heightPercentageToDP } from 'react-native-responsive-screen';


class TagScreen extends React.Component {
  
	componentDidMount() {
		const {
			data,
			updateVisitFormChange,
			token,
			managerList,userid
		} = this.props;

		this.fetchCall();

	}
fetchCall(){
    const {
        data,
        updateVisitFormChange,
        token,
        managerList,userid
    } = this.props;
    managerList({token,userId:userid})
}

	componentWillUnmount(){
		const {
			updateVisitFormChange,
      cleanTagList
		} = this.props;
    cleanTagList();
	}


    onSubmit() {
        const {
          tagmanagerList,
            submitSelectedPlannedVisits,
            token,
            agentid
        } = this.props
         submitSelectedPlannedVisits({form: tagmanagerList, token: token});
    }
    onAddClick(params) {
        const {
          agentid,
          selectedVisitPSM,
          selectedVisitDate,
          setTagList,
          searchFilters,
          user_details,
          agentAreaPjp,
          managerid,
          retailerSearchFilters,
          planvisitmodal,setaddVisitdata,
          selectedObjective,
          tagmanager
          
    
        } = this.props;
    
   
    const{
        data,
    }=this.props.navigation.state.params;


        let data1 = {
            "attributes" : {"type" : "Visits__c", "referenceId" : ""},
               
               "ownerId":params.sfid,
               "Customer_Name__c":data.Customer_Name__c,
               "Visit_Date__c":HelperService.dateReadableFormatWithHyphen(data.Visit_Date__c),
               "Type__c":data.Type__c,
               "Assigned_By__c":"Tagged",
               "Manager__c":params.ManagerSfid,
               "Visit_Type__c":data.Visit_Type__c,
               "PJP_Beats__c":null,
               "Beat__c": null,
               "Objective__c":data.Objective__c?data.Objective__c:'Meeting',
               "Tagged_On_Visit__c": data.Id, 
                "Employee__c": tagmanager.Employees__r.records[0].Id,
                "Employee_Manager__c":tagmanager.Employees__r.records[0].Reporting_Manager__c 
              
        }
      
        
        
    
      
        data1 = HelperService.decorateWithLocalId(data1);
       
     
        setTagList(data1)

      }
      filterResult(list) {
		
        let searchFilters = this.props.searchFilters;
        
        let filteredList = HelperService.sortListFilter(list, 'name', 'ASC');
       
        return filteredList;
      }
    
      onRemoveClick(item) {
        const {
          agentid,
          selectedVisitPSM,
          selectedVisitDate,
          removeTagList,
          tagmanagerList
        } = this.props;
        const{
            data,
        }=this.props.navigation.state.params;
      
 
        _.map(tagmanagerList, (obj) => {
           
            
          if (obj.ownerId==item.sfid  && HelperService.datesAreOnSameDay1(obj.Visit_Date__c, selectedVisitDate)) {
            id = obj.local_id
          }
        });
  
  
        removeTagList({id})
    }

    filterResult(list) {
		
        let searchFilters = this.props.searchFilters;
        
        let filteredList = HelperService.sortListFilter(list, 'Name', 'ASC');
         filteredList =HelperService.searchTextListFilter(list, 'Name', searchFilters['name'] );
        return filteredList;
      }
      isManagerAdded(item) {
      
        const {
          tagmanagerList,
          selectedVisitDate,
          selectedVisitPSM
        } = this.props;
        
        let isAdded = false;
        _.map(tagmanagerList, (obj) => {
    
          if (obj.ownerId == item.sfid ) {
            isAdded = true
          }
        });
    
        return isAdded;
      }



	getDataNode(){

        let visibleNode=[];
        
        const{
            managerListData,
			managerListLoader,
            added,
			selectManager}=this.props;
            const{
                data,
            }=this.props.navigation.state.params;


        if(managerListData && managerListData.length){
            let searchedList = this.filterResult(managerListData)
     
        
          
          
            if(searchedList){


                visibleNode=(
                        <FlatList
                       
                        showsVerticalScrollIndicator={false}
                        data={searchedList}
                        renderItem={({item})=>
							<Manager item={item}
							onAddClick={() => this.onAddClick(item)}
                            onRemoveClick={() => this.onRemoveClick(item,data)}
                            added={this.isManagerAdded(item)}

					
						/>
						}
                    keyExtractor={item => item.Id}
                    refreshing={managerListLoader}
                 //  onRefresh={() => this.fetchCall()} 
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
			  createPjpLoading,
        submitPlannedVisitsLoader
	  	} = this.props;

  		
		    return (
		      	<View 
		      		style={{
		      			 
		      			
		      			flex: 1, 
		      			justifyContent:'center'
		      		}}>
		      		<ScrollView>
					  <View >
						  {this.getDataNode()}
					  </View>
		          </ScrollView>
                  <View
           style={{...ApplicationStyles.plusIcon,width:'70%',height:'6%',borderWidth:0,backgroundColor:"transparent",marginBottom:15,alignSelf:'center'}}
         >
          <BlueButton title={'Submit'}
          style={{height:heightPercentageToDP('6')}} 
          loading={submitPlannedVisitsLoader} disabled={submitPlannedVisitsLoader}
          onPress={()=>this.onSubmit()}
          
          />
         </View>
		        </View>
		    );
	
	
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
  searchFilters: state.visits.searchFilters,
  managerid:state.startday.userDetailList.ManagerId,
  added:state.visits.addmanager,
  user_details         : state.user.loginDetails.userId,
  tagmanager: state.startday.userDetailList,
  tagmanagerList: state.visits.tagmanagerList,
  selectedVisitDate: state.visits.planVisit.selectedVisitDate,
  submitPlannedVisitsLoader : state.visits.planVisit.submitPlannedVisitsLoader,


});

const mapDispatchToProps = (dispatch) => ({
  fetchRetailers:(params)    		=> dispatch(RetailersActions.fetchRetailers(params)),
  setTagList:(params) 	 		=> dispatch(VisitsActions.setTagList(params)),
  openModal     :(params)    		=> dispatch(CommonActions.openModal(params)),
  cancelVisit   :(params)    		=> dispatch(VisitsActions.cancelVisit(params)),
  editVisit   	:(params)    		=> dispatch(VisitsActions.editVisit(params)),
  cancelVisitLoadingStop:()  		=> dispatch(VisitsActions.cancelVisitLoadingStop()),
  editVisitLoadingStop:()    		=> dispatch(VisitsActions.editVisitLoadingStop()),
  updateVisitFormChange:(params)	=> dispatch(VisitsActions.updateVisitFormChange(params)),
  managerList			:(params)	=> dispatch(UserActions.managerList(params)),
  selectManager		:(params)		=>dispatch(UserActions.selectManager(params)),
  submitbeat:(params)=> dispatch(UserActions.createPjp(params)),
  removeTagList:(params)=>dispatch(VisitsActions.removeTagList(params)),
  submitSelectedPlannedVisits:(params) 		  => dispatch(VisitsActions.submitSelectedPlannedVisits(params)),
  cleanTagList:()=>dispatch(VisitsActions.cleanTagList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagScreen)