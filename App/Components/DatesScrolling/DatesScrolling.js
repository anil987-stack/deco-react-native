import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import NavigationService from 'App/Services/NavigationService'
import SearchBar from 'App/Components/SearchBar';
import SearchableDropdown from 'App/Components/SearchableDropdown';
import WhiteButton from 'App/Components/WhiteButton';
import BlueButton from 'App/Components/BlueButton';
import RetailersActions from 'App/Stores/Retailers/Actions'
import DatePicker from 'App/Components/DatePicker'
import {HelperService} from 'App/Services/Utils/HelperService'
import { 
	ApplicationStyles, 
	Helpers, 
	Images, 
	Metrics, 
	Colors 
} from 'App/Theme'
import { 
	Platform, 
	View, 
	ActivityIndicator, 
	Image, 
	Dimensions, 
	TouchableWithoutFeedback,
	ScrollView,
	FlatList,
	StyleSheet
} from 'react-native'
import { 
	Container, 
	Header, 
	Title, 
	Content, 
	Button, 
	Icon, 
	Left, 
	Body, 
	Text, 
	Input, 
	Item, 
	Right, 
	Segment,
	Badge
} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class DatesScrolling extends Component {
	constructor(props) {
		super(props);
		this.selectedIndex = 0;
	}

	getItemLayout(data, index){
		let itemWidth = (Dimensions.get('window').width*.20) + 10
		return (
    		{ length: itemWidth, offset: itemWidth * index, index }
 	 	)
	}

	componentDidMount() {
    		this.scrollToIndex();
	}

	componentDidUpdate() {
    		this.scrollToIndex();
	}

	scrollToIndex(){
		if (this.flatListRef){
    		this.flatListRef.scrollToIndex({animated: true, index: this.selectedIndex});
    	}
  	}

	//   getDate(){
	// 	var date = new Date();
	// 	var nextDate = date.setDate(date.getDate() + 7);
	// 	var items = [];
	// 	for(let i = date; i <= nextDate; i++ ){
	// 		let j = date + 1;

	// 		items.push(
	// 		<View style={Styles.countBadge}>
	// 		<Text style={{ color: Colors.primary,fontSize:10,left:"4%" }}>
	// 		  {"12"}
	// 		</Text>
	// 		</View>)
	// 		console.log("peerrr",items)
	// 		return items;
	// 	}
	
	// 	}
  

	
	 
  	cardNode(item) {
  		const {
			focusedDate,
			onDateChange
		} = this.props;
  		return (
  			<WhiteButton 
  				key={item.currentDate} 
  				vertical 
  				style={{...Styles.dateButton,}} 
  				textStyle={Styles.dateText} 
  				title={HelperService.getDisplayDate(item.currentDate)} 
  				selected={HelperService.datesAreOnSameDay(item.currentDate, focusedDate)} 
  				onPress={() => onDateChange({selectedDate: item.currentDate})}>
					{/* {this.getDate()} */}
					 <View style={Styles.countBadge}>
                  <Text style={{ color: Colors.primary,fontSize:10,left:"4%" }}>
                    {"12"}
                  </Text>
				  </View>
					
					
  			</WhiteButton>
			
  		)
  	}

	render() {
		const {
			startDate,
			endDate,
			onDateChange,
			selectedStartDate,
			selectedEndDate,
			focusedDate,
			allowRangeSelection,
			minDate
		} = this.props;
		let currentDate = startDate;
		let datesNode = [];
		let scrollview_ref = '';
		var date = new Date();
        var nextDate = date.setDate(date.getDate() + 7);
// console.log("reastttt",this.getDate())
		while(currentDate <=endDate) {
			datesNode.push({currentDate: currentDate})
			currentDate = HelperService.getNextDayTimestamp(currentDate);
			if (HelperService.datesAreOnSameDay(currentDate, focusedDate)){
				this.selectedIndex = datesNode.length - 1
			}
		}

		if (HelperService.datesAreOnSameDay(currentDate, endDate)) {
			datesNode.push({currentDate: currentDate})
			if (HelperService.datesAreOnSameDay(currentDate, focusedDate)){
				this.selectedIndex = datesNode.length - 1
			}
		}

		return (
			<View style={Styles.headerContainer}>
				
			    <FlatList
			    	data={datesNode}
					 showsHorizontalScrollIndicator={false}
            		renderItem={({ item }) => this.cardNode(item)}
            		getItemLayout={this.getItemLayout}
			    	ref={ref => {this.flatListRef = ref}}
			    	horizontal={true} 
			    	style={Styles.scrollViewContainer}>
			    </FlatList>
			
	            <View style={Styles.datePickerContainer}>
	            	<DatePicker 
					  	allowRangeSelection={allowRangeSelection}
					  	selectedStartDate={selectedStartDate} 
					  	selectedEndDate={selectedEndDate}
					  	minDate={minDate} 
					  	onDateChange={(params) => onDateChange({selectedDate: params.selectedStartDate})}
					  	iconStyle={Styles.datePickerIcon}
					/>
	            </View>
		    </View>
		)
	}
}


const Styles = StyleSheet.create({
	headerContainer: {
	 	flex: 1, 
		 position: 'relative',
	
		 
		
	},
	dateButton: {
		height: hp('5.5%'), 
		width: wp('20%'), 
		paddingLeft: 0, 
		paddingRight: 0, 
		marginHorizontal: 5,
		marginVertical:'1.5%'
	},
	dateText: {
		fontSize: wp('3%'), 
	},
	scrollViewContainer: {
		marginRight: (Dimensions.get('window').width*.12), 
		flex: 1, 
		width: (Dimensions.get('window').width) -  (Dimensions.get('window').width*.17),
		
			
		
		
	},
	datePickerContainer: {
		position: 'absolute', 
		width: 59, 
		height: hp('6%'), 
		backgroundColor: Colors.primary, 
		right: -10, 
		zIndex: 2, 
		borderRadius: 10, 
		top: -hp('.75%'), 
		paddingLeft: 0, 
		paddingRight: 0, 
		borderBottomRightRadius: 0, 
		borderTopRightRadius: 0,
		alignItems: 'center', 
		justifyContent: 'center'
	},
	datePickerIcon: {
		color: Colors.white, 
		backgroundColor:Colors.primary,
		fontSize: wp('8%'), 
		marginLeft: 0, 
		marginRight: 0, 
		zIndex: 8
	},
	countBadge: {
		position: "absolute",
		backgroundColor: Colors.white,
		borderWidth: 2,
		borderColor: Colors.primary,
		right: wp('0%'),
		top: hp('0'),
		borderRadius:70,
		height:hp("2.5%"),
		width:"23%",
		elevation:25
		
	  },
});
