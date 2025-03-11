import React from 'react'
import {View, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { Container, Header, Title, Content, Button, Icon, Left, Body, Text, Input, Item, Right} from 'native-base';
import NavigationService from 'App/Services/NavigationService'
import WhiteButton from 'App/Components/WhiteButton'
import BackArrowButton from 'App/Components/BackArrowButton'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import {Colors } from 'App/Theme'
import VisitsActions from 'App/Stores/Visits/Actions'
import GenericIcon from 'App/Components/GenericIcon';
import SearchBar from 'App/Components/SearchBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash'
import { HelperService } from '../../../Services/Utils/HelperService'
import UserActions from 'App/Stores/User/Actions';


class SearchByAreaLayout extends React.Component {
	componentDidMount() {
		const {
			changeSearchFilters,
			  agentid,
			  getAreaPjp,
        token,
        agentAreaPjp,
        searchByAreaFilters,
  
        selectedVisitPSM,
        selectedVisitDate,
       
		changeSearchByAreaFilters,
        userid,
        fetchPjp
        
	  	} = this.props;

     // changePlannedSelectedPSM(agentid)
   
      fetchPjp({
        userId:userid,
        m: HelperService.getMonthFullName(HelperService.getCurrentTimestamp()).substring(0,3),
        token,
        agentid: searchByAreaFilters['psm__c']?searchByAreaFilters['psm__c']:agentid,
        startDate: HelperService.getCurrentTimestamp(),
        endDate: HelperService.getCurrentTimestamp()
        });

		// console.log("hello hehehh")
   
	}

	filterResults(list) {
		// console.log(list[0].PJP_Beats__r.records)
		let searchFilters = this.props.searchFilters;
		// console.log("jeje",searchFilters)
		let filteredList = HelperService.searchTextListVisitFilter(list, 'Visit_Date__c', searchFilters["startDate"]);
		// filteredList = HelperService.searchTextListFilter(filteredList, 'visit', searchFilters['area'], 'area__c');
		console.log(filteredList,"dfghj")
		return filteredList;
	  
	  }

	pendingfliterList(list) {
		const{
	   
		  searchFilters,
      selectedVisitDate
	  }=this.props;
		let result = '';
		result = list.filter((obj) => obj.Visit_Date__c ==HelperService.dateReadableFormatWithHyphen(selectedVisitDate)   );
	  
		return result
	
	  }
	
	  filterdatabeat(){
		const{
			data,
		  	filteredPjpDisplayData,
		  	beatList,
			  filteredBeatPjpDisplayData
	  }=this.props;

	
	if(filteredBeatPjpDisplayData&&filteredBeatPjpDisplayData.length){
	  let filteredSitesList = this.filterResults(filteredBeatPjpDisplayData);
		console.log("hhhh",filteredSitesList)
	
	//    let filteredList=this.pendingfliterList(filteredSitesList.map((obj) => obj));

	//    let filtered=filteredSitesList[0]&&filteredSitesList[0].PJP_Beats__r&&filteredSitesList[0].PJP_Beats__r.records&&filteredSitesList[0].PJP_Beats__r.records.length?filteredSitesList[0].PJP_Beats__r.records:'';
	//    console.log("filtered",filtered)
	 
	    let pjpSearchableList = HelperService.convertToSearchablepjpBeatListFormat({ list:filteredSitesList, id_key: 'Area_Master__c',label_key:"Area_Name__c"});
	    // let pjpSearchableList = HelperService.convertToSearchablepjpBeatListFormat({ list: filtered?filtered:filteredSitesList, id_key: 'Beat__c',label_key:"Name"});
		console.log("filtereddddddd",pjpSearchableList)

	   return pjpSearchableList
	}else{
	
	  return "hello";
	
	}
	  }


  	render() {
  		const {
  			agentAreas,
  			searchByAreaFilters,
			  children,
			  agentCity,
			  changeSearchByAreaFilters,
			 
			  user_details
  		} = this.props;

	    return ( 
			<View style={Styles.screen}>
				<TouchableOpacity transparent>
		<GenericIcon
	  		name={'arrow-back'}
	  		onPress={NavigationService.goback}
	    	style={{ color:Colors.primary,fontSize: wp('8%'),marginLeft:hp('1'),marginTop:hp('1')}}
		/>
	</TouchableOpacity>
	    	<View style={Styles.header} >
	    	
	    			<SearchBar
				            placeholder={`Search Name`}
				            onInputChange={(text) => changeSearchByAreaFilters({ edited_field: 'name', 'edited_value': text })}
				            onInputSubmit={(text) => changeSearchByAreaFilters({ edited_field: 'name', 'edited_value': text })}
				            onInputClear={(text) =>  changeSearchByAreaFilters({ edited_field: 'name', 'edited_value': '' })}
				            value={searchByAreaFilters['searchValue']}
				            ContainerStyles={Styles.searchContainer}
				          />

		                {/* <SearchableDropdown 
		                  dataSource={agentAreas} 
		                  placeHolderText={'Select By Area'} 
		                  selectedValue={searchByAreaFilters['beat']} 
		                  onChange={(beatCode) => changeSearchByAreaFilters({edited_field: 'beat', edited_value: beatCode})} 
		                  placeholder={'Type or Select Area'} 
		                  invalid={false}
		                  customPickerStyles={Styles.pickerStyles} 
		                /> */}
						<SearchableDropdown
							dataSource={this.filterdatabeat()?[{ id: '', name: 'All' }].concat(this.filterdatabeat()):[]}
							placeHolderText={'Select Area...'}
							selectedValue={searchByAreaFilters['beat']}
							onChange={(beatCode) => changeSearchByAreaFilters({ edited_field: 'beat', edited_value: beatCode })}
							placeholder={'Type or Select Area'}
							invalid={false}
							customPickerStyles={Styles.pickerStyles}
							key={searchByAreaFilters['beat'] + _.uniqueId()}
						/>
		              </View>

		               
	         	{/* </Header> */}
	    		{children}
	    	</View>
	    )
  	}
}


const mapStateToProps = (state) => ({
	agentAreas: state.user.agentCity?[{ id: '', name: 'All' }].concat(state.user.agentCity):[],
  searchByAreaFilters: state.visits.unplannedVisit.searchByAreaFilters,
  agentCity: [{ id: '', name: 'All' }].concat(state.user.agentCity),
  cityAllList : [{ id: '', name: 'All' }].concat(state.common.cityAllList),
	user_details: state.user.user_details,
	filteredPjpDisplayData:state.user.filteredPjpDisplayData,
	userid:state.user.loginDetails.userId,
	agentid	: state.user.loginDetails.userId,
	token: state.user.token,
	selectedVisitDate: state.visits.planVisit.selectedVisitDate,
	filteredBeatPjpDisplayData:state.user.filteredBeatPjpDisplayData,
	searchFilters: state.visits.searchFilters,


	
});

const mapDispatchToProps = (dispatch) => ({
	changeSearchByAreaFilters:(params) => dispatch(VisitsActions.changeSearchByAreaFilters(params)),
	fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByAreaLayout)

const Styles = StyleSheet.create({
	
	screen:{backgroundColor:Colors.white,
		borderBottomLeftRadius:50,
		borderBottomRightRadius:50,
				height:'18%',
				borderColor:Colors.primary,
				borderBottomWidth:1,
				borderLeftWidth:1,
				borderRightWidth:1
	},
	
	header: {
		height:hp('16'),
		paddingTop: hp('2%'),
		paddingHorizontal: wp('1%'),
		flexDirection: 'column',
		alignItems: 'center',
		borderBottomLeftRadius:50,
		backgroundColor:'transparent',
		justifyContent: 'center'
	},
	searchParamContainer: {
		//flexDirection: 'row', 
		//marginBottom: '4%'
	},
	pickerStyles: {
		top:-12,
		backgroundColor: 'white',
    paddingVertical: 0,
 
		paddingHorizontal: '8%',
		width: '91%',
		flexDirection: 'row',
		justifyContent: 'center',
   
    alignSelf:'center',
		borderRadius: 25,
		elevation: 5,
		marginLeft:'0%',
		borderWidth:1,
		borderColor:"grey"
	},
	searchContainer: {
		//paddingVertical: 0,
		width: '83%',
		borderRadius: 25,
		paddingHorizontal: 5,
		elevation: 10,
		backgroundColor: 'white',
		fontSize: wp('3.8%'),
		fontWeight:'700',
		color: Colors.blue,
		alignSelf:'center',
		
		justifyContent:"center",
		marginBottom:10,
		 marginTop:-20,
		height:'38%'
	},
	searchFilterContainer: {
    marginTop: hp('.5%'),
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchFilterTypeBox: {
    marginHorizontal: wp('1%'),
    marginBottom: hp('1%'),
    borderWidth: 1.5,
    width: wp('42%')
  },
  searchFilterTypeText: {
    fontSize: wp('3.8%'),
    fontFamily: ApplicationStyles.textMediumFont
  },
});
