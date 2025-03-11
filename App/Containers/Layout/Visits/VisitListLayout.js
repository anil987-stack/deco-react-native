import React from 'react'
import {View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, Button, Icon, Left, Body, Text, Input, Item, Right, Badge} from 'native-base';
import NavigationService from 'App/Services/NavigationService'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {HelperService} from 'App/Services/Utils/HelperService';
import VisitsActions from 'App/Stores/Visits/Actions'
import GenericIcon from 'App/Components/GenericIcon';
import DatePicker from 'App/Components/DatePicker'
import DatePickerStyles from 'App/Components/DatePicker/DatePickerStyles'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import _ from 'lodash';
import BrandComponent from 'App/Components/BrandComponent'
import CommonActions from 'App/Stores/Common/Actions';
import { Card } from "react-native-paper";
import BlueButton from '../../../Components/BlueButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import SearchBar from "App/Components/SearchBar";
import SearchBars from "../../Visits/VisitsDisplayScreen/SearchBar";
import { ImageBackground } from 'react-native';
class VisitListLayout extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
		  count: false,
		mount: false,
		count1: false,
		mount1: false,
          markedObj:{},
          masterObj:{},
          data:{call_count:0,visit_count:0}
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
	componentDidMount() {
		const {
			changeSearchFilters,
			  agentid,
			  getAreaPjp,
			  token,
			  searchFilters,
	  	} = this.props;

		this.onDateChange({
			selectedStartDate: HelperService.getCurrentTimestamp()
		});

		//changeSearchFilters({edited_field: 'psm__c', edited_value: agentid})
		
	}

	onDateChange(params) {
		const {
			changeSearchFilters,
	  		getVisitsDisplayList,
	  		token,
			  agentid,
			  searchFilters,
			  getAreaPjp,
			  businessChannel,
	  	} = this.props;

		changeSearchFilters({
			edited_field: 'startDate',
			edited_value: params.selectedStartDate
		});

		changeSearchFilters({
			edited_field: 'endDate',
			edited_value: params.selectedStartDate
		});

		getVisitsDisplayList({
			token: token,
	  		agentid: searchFilters['psm__c'],
	  		startDate: params.selectedStartDate,
	  		endDate: params.selectedStartDate
		});
	 
	}

	onFilterChange(value)
{
	const {
		changeSearchFilters,
		  getVisitsDisplayList,
		  searchFilters,
		  token,
		  getAreaPjp,
		  businessChannel,
		  
	  } = this.props;

	  changeSearchFilters({
		edited_field: 'psm__c',
		edited_value: value
	});

	  getVisitsDisplayList({
		token: token,
		startDate: searchFilters['startDate'],
		  endDate: searchFilters['endDate'],
		 agentid: value,
	});
		

}

	render() {
	  	const {
	  		changeSearchFilters,
	  		visitsDisplayList,
	  		filteredDisplayData,
	  		searchFilters,
	  		visitCount,
	  		agentAreas,
	  		children,
	  		psmList,
			  isASM,
			 
			  loader,
			 
			  isManager	,
			
	  	} = this.props;

	  	let datePickerNode = (
		  		<View 
		  			style={Styles.datePicker}>
	    			<Text style={Styles.dateText}>{HelperService.getVisitsDisplayDate(searchFilters['startDate'])}
	    			</Text>
	    			<GenericIcon 
						name={'calendar'} 
						show={true}
	    				style={{...DatePickerStyles.icon, ...DatePickerStyles.iconActive, ...Styles.dateIcon}} 
	    			/>
	    		</View>
	  	);

	  	


	  	let psmListNode = [];
	    // if (isASM.length||isManager=='ASM'|| isManager== "GM") {
	      psmListNode = (
	        <View style={{height: hp('10%')}}>
              	<SearchableDropdown
              		key={'psm' + searchFilters['psm__c']} 
	              	dataSource={HelperService.sortListFilter(psmList, 'name', 'ASC')} 
	              	placeHolderText={'Select SO'}
	              	// selectedValue={searchFilters['psm__c']} 
	              	// onChange={(value) => this.onFilterChange(value)}
	              	placeholder={'Type or Select SO'}
	              	invalid={false} 
	              	customPickerStyles={Styles.psmPickerStyles}
	            />
	        </View>
	      );
	    // }

	    return ( 
	    	<View>
	{/* // 			<ImageBackground style={{width: '100%',
    // height: '100%',
    // flex: 1,zIndex:1000 }} */}
    {/* //              resizeMode='cover' 
    //              source={require("App/Assets/Images/startDay.png")}> */}
				 {/* <View
          style={{
            width: wp("100%"),
			borderWidth:0.5,
            flexDirection: "row",
            height: hp("6%"),
            backgroundColor: "white",
            alignSelf: "center",
            elevation: 12,
            padding: wp("1.5"),
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
          }}
        >
          
		  { this.state.mount ? (
			 <View style={{ flexDirection:"row"}}>
				<View>
            <GenericIcon
              name={"arrow-back"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
              }}
			  onPress={() => this.setState({mount: this.state.mount == false })}
            />
          </View> */}
			 {/* <SearchBar
			   placeholder={`Search by name`}
			//    onInputChange={(text) =>
			// 	 changeAddPlannedVisitsSearchFilters({
			// 	   edited_field: "name",
			// 	   edited_value: text,
			// 	 })
			//    }
			//    onInputSubmit={(text) =>
			// 	 changeAddPlannedVisitsSearchFilters({
			// 	   edited_field: "name",
			// 	   edited_value: text,
			// 	 })
			//    }
			//    onInputClear={(text) =>
			// 	 changeAddPlannedVisitsSearchFilters({
			// 	   edited_field: "name",
			// 	   edited_value: "",
			// 	 })
			//    }
			//    value={searchFilters["name"]}
			   ContainerStyles={Styles.searchContainer}
			 />
			 </View>
		): */}
		
		 {/* this.state.mount == false ? (
			<>
		<View>
            <GenericIcon
              name={"arrow-back"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
              }}
              onPress={() => NavigationService.goback()}
            />
          </View>
          <View style={{ alignSelf: "center", width: "80%" }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                textAlign: "center",
                fontSize: hp("2.5"),
              }}
            >
              {"Visit Execution"}
            </Text>
          </View>
		  <View>
            <GenericIcon
              name={"search"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
              }}
			  onPress={() => this.setState({mount: !this.state.mount })}
            />
          </View>
		   </>
		   ):([])} */}
		 
		  
       
	
		
       
        {/* </View> */}
		{/* { this.state.mount1 ? (
			 <View
			 style={{
			   width: wp("100%"),
			   borderWidth:0.5,
			   flexDirection: "row",
			   height: hp("6%"),
			   backgroundColor: "white",
			   alignSelf: "center",
			   elevation: 12,
			   padding: wp("1.5"),
			   shadowOpacity: 0.25,
			   shadowRadius: 3.84,
			   shadowColor: "#000",
			   // shadowOffset: {
			   //   width: 0,
			   //   height: 2,
			   // },
			 }}
		   >
		
		<View>
            <GenericIcon
              name={"arrow-back"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
              }}
              onPress={() => NavigationService.goback()}
            />
          </View>
          <View style={{ alignSelf: "center", width: "80%" }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                textAlign: "center",
                fontSize: hp("2.5"),
              }}
            >
              {"Visit Execution"}
            </Text>
          </View>
		  <View>
            <GenericIcon
              name={"search"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
              }}
			  onPress={() => this.setState({mount: !this.state.mount })}
            />
          </View>
		  
		   </View>

		):([])} */}

		

		{/* <View style={{marginTop:"2%",flexDirection:"row", }}> */}
              {/* <BlueButton
                title={"Select User"}
                textStyle={{ fontSize: wp("4") }}
                style={{
                  borderRadius: 10,
                  alignSelf: "center",
                  justifyContent: "center",
                  width: wp("31%"),
                  height: hp("5%"),
				  elevation:15,
				  marginLeft:"7.5%",
				  backgroundColor:Colors.subtitle
                }}
                // disabled={this.props.loading}
                // loading={this.props.loading}
                // onPress={() =>
                //   NavigationService.navigate("AddPlannedVisitsScreen")
                // }
           
              /> */}

{/* <BlueButton
                title={"ADD Visit"}
                textStyle={{ fontSize: wp("4") }}
                style={{
                  borderRadius: 10,
                  alignSelf: "center",
                  justifyContent: "center",
                  width: wp("31%"),
                  height: hp("5%"),
				  elevation:15,
				  marginLeft:"31%",
				  backgroundColor:"orange"
                }}
                // disabled={this.props.loading}
                // loading={this.props.loading}
                onPress={() =>
                  NavigationService.navigate("AddPlannedVisitsScreen")
                }
           
              /> */}
            {/* </View> */}
	    		{/* <Card style={isASM.length|| isManager=='ASM'|| isManager== "GM" ? {...Styles.header, ...{height: hp('27%%')}} : {...Styles.header}}>
	    			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: hp('10%'), position: 'relative', marginTop:'0.5%'}}>
		    			<TouchableOpacity transparent onPress={() => this.onDateChange({selectedStartDate: HelperService.getPreviousDayTimestamp(searchFilters['startDate'])})}>
						<Icon
                name={"caret-left"}
                ios={"caret-left"}
                android={"caret-left"}
                style={Styles.dateChangeIcon}
                type={"FontAwesome5"}
              /> */}
							{/* <Icon
			                	name={'ios-arrow-back'}
			                	ios={'ios-arrow-back'}
			                	android={'md-arrow-dropleft'}
			                	style={Styles.dateChangeIcon}
			              	/> */}
		              	{/* </TouchableOpacity>
		              	<View>
		              		<DatePicker
								allowRangeSelection={false}
								selectedStartDate={searchFilters['startDate']} 
								selectedEndDate={searchFilters['endDate']} 
								onDateChange={(params) => this.onDateChange(params)}>
								{datePickerNode}
							</DatePicker>
						</View>
						<TouchableOpacity transparent onPress={() => this.onDateChange({selectedStartDate: HelperService.getNextDayTimestamp(searchFilters['startDate'])})}>
						<Icon
                name={"caret-right"}
                ios={"caret-right"}
                android={"caret-right"}
                style={Styles.dateChangeIcon}
                type={"FontAwesome5"}
              /> */}
							{/* <Icon
				                name={'ios-arrow-forward'}
				                ios={'ios-arrow-forward'}
				                android={'md-arrow-dropright'}
				                style={Styles.dateChangeIcon}
		              		/> */}
		              	{/* </TouchableOpacity>
		              	 <Badge style={Styles.countBadge}>
                    		<Text style={Styles.countBadgeText}>{visitCount}</Text>
              			</Badge>
	              	</View>
					 <View style={{ width:'98%'}}>
	              	{psmListNode}
					  <View style={{height: hp('5.5%')}}>
					  <SearchableDropdown
                dataSource={[{id: '', name: 'All'}].concat(HelperService.sortListFilter(agentAreas, 'name', 'ASC'))}
                placeHolderText={'Select Area...'}
                // selectedValue={searchFilters['area']}
                // onChange={(areaCode) => changeSearchFilters({ edited_field: 'area', edited_value: areaCode })}
                placeholder={'Type or Select Area'}
                invalid={false}
                customPickerStyles={Styles.pickerStyles}
                key={searchFilters['area'] + _.uniqueId()}
              />
				</View>
		</View>
	
	         	</Card> */}
	    		{children}
				{/* // </ImageBackground> */}
	    	</View>
	    )
	}
}

const mapStateToProps = (state) => ({
	visitsDisplayList  			: state.visits.visitsDisplayList,
	filteredDisplayData 		: state.visits.filteredDisplayData,
  	token						: state.user.token,
  	agentid						: state.user.id,
 	searchFilters				: state.visits.searchFilters,
 	isASM                 		: state.user.psmList,
  	psmList               		: state.user.psmList,
	agentAreas 					: (state.user.agentAreas),
	loader						:state.common.fetchAllAreaPjpLoading,
	visitCount         			: state.visits.filteredDisplayData && state.visits.filteredDisplayData.length ? state.visits.filteredDisplayData.length : 0,
	 isManager					: state.user.user_details && state.user.user_details.designation__c ? state.user.user_details.designation__c:''
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters:(params)   	=> dispatch(VisitsActions.changeSearchFilters(params)),
  getVisitsDisplayList:(params)     => dispatch(VisitsActions.getVisitsDisplayList(params)),
  getAreaPjp:(params)				=> dispatch(CommonActions.fetchAllAreaPjp(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitListLayout)



const Styles = StyleSheet.create({
	header: {
		backgroundColor: Colors.white, 
		borderBottomWidth: 0,
		height: hp('22%'), 
		alignItems: 'center', 
		justifyContent: 'flex-start',
		flexDirection: 'column',
		elevation:15,
		borderBottomLeftRadius:50,
		borderBottomRightRadius:50,
		color:"white",
		borderColor: Colors.primary,
		borderBottomWidth:1,
		borderLeftWidth:1,
		borderRightWidth:1

		 
		
		

	},
	datePicker:{
		alignSelf: 'center', 
		backgroundColor: Colors.primary, 
		borderRadius: 10, 
		width: wp('55%'),
		flexDirection:'row', 
		alignItems: 'center', 
		justifyContent: 'center',
		padding: 4,
	},
	dateText: {
		fontFamily: ApplicationStyles.textMediumFont, 
		color: Colors.white, 
		fontSize: wp('4%'),
		textTransform: 'capitalize'
	},
	dateIcon: {
		color: Colors.white, 
		fontSize: wp('7%'),
		marginLeft: 0, 
		marginRight: 0,
		zIndex: 2,
		paddingLeft: wp('3%')
	},
	pickerStyles: {
		marginTop: -65,
		backgroundColor: 'white',
    paddingVertical: 8,
 
		paddingHorizontal: '8%',
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'center',
		borderRadius: 25,
		elevation: 5,
		marginLeft:'0%',
		borderColor:"grey",
		borderWidth:1
			
	  },
	dateChangeIcon: {
	 	color: Colors.primary, 
	 	fontSize: 60, 
	 	alignSelf: 'center', 
	 	paddingHorizontal: 20
	},
	psmPickerStyles: {
	marginTop: -55,
		backgroundColor: 'white',
		paddingVertical: 8,
		paddingHorizontal: '8%',
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 20,
		elevation: 5,
		marginLeft:'5%',
		borderColor:"grey",
		borderWidth:1

  	},
  	countBadge: {
    backgroundColor: Colors.white,
    padding: 0,
    borderWidth: .5,
    borderColor: Colors.primary,
    height: wp('9.3%'),
    width: wp('10%'),
    position: 'absolute',
    borderRadius: wp('10%'),
    left: '64%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countBadgeText: {
     color: Colors.primary,
     fontSize: wp('3.7%')
  },
  heading: {
    alignSelf: 'center',
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4.2%'),
	marginBottom: 0, 
	fontWeight:'bold'
  },
  searchContainer: {
    // paddingVertical: 21,
    width: "91.5%",
    borderRadius: 7,
    // paddingHorizontal: 1,
    elevation: 0,
    backgroundColor:"white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    color: Colors.blue,
    alignSelf: "center",
    // marginBottom: "2%",
    marginTop: "0.5%",
    // height: hp("6%"),
    borderColor:"grey",
    borderWidth:3,
    marginLeft:"2%",
    // padding
  },
});