import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import NavigationService from "App/Services/NavigationService";
import SearchBar from "App/Components/SearchBar";
import SearchableDropdown from "App/Components/SearchableDropdown";
import WhiteButton from "App/Components/WhiteButton";
import WhiteButton_calendar from "App/Components/WhiteButton_calendar";
import BlueButton from "App/Components/BlueButton";
import RetailersActions from "App/Stores/Retailers/Actions";
import DatePicker from "App/Components/DatePicker";
import { HelperService } from "App/Services/Utils/HelperService";
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from "App/Theme";
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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
  Badge,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import GenericIcon from "App/Components/GenericIcon";

export default class DatesScrolling_gradient extends Component {
  constructor(props) {
    super(props);
    this.selectedIndex = 0;
  }

  getItemLayout(data, index) {
    let itemWidth = Dimensions.get("window").width * 0.2 + 10;
    return { length: itemWidth, offset: itemWidth * index, index };
  }

  componentDidMount() {
    this.scrollToIndex();
  }

  componentDidUpdate() {
    this.scrollToIndex();
  }

  scrollToIndex() {
    if (this.flatListRef) {
      this.flatListRef.scrollToIndex({
        animated: true,
        index: this.selectedIndex,
      });
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
    const { focusedDate, onDateChange } = this.props;
    return (
      <View>
        <View
          // colors={["#ffffff", "transparent"]}
          // start={{ x: 0, y: -0.4 }}
          // end={{ x: 0, y: 1 }}
          style={{
            // borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRadius: 70,
            height: wp("7.5%"),
            width: wp("7.5%"),
            alignSelf: "center",
            padding: wp("0.5%"),
            borderColor: "white",
            transform: [{ rotate: "90deg" }],
          }}
        >
          <View
            style={{
              // position: "absolute",
              // backgroundColor: '#bfbfbf',
              backgroundColor: Colors.white,
              borderWidth: 2,
              // borderColor: Colors.white,
              borderColor: "#bfbfbf",
              // right: wp('0%'),
              // top: hp('0'),
              borderRadius: 70,
              height: wp("6.5%"),
              width: wp("6.5%"),
              // elevation: 25,
              justifyContent: "center",
              alignSelf: "center",
              // marginLeft: wp('2%'),
              // marginTop: wp('-2%'),
            }}
          >
            <Text
              style={{
                fontSize: wp("3"),
                justifyContent: "center",
                color: Colors.primary,
                textAlign: "center",
                alignSelf: "center",
                transform: [{ rotate: "-90deg" }],
              }}
            >
              {"12"}
            </Text>
          </View>
        </View>
        <WhiteButton_calendar
          style={{
            // width: wp("25%"),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            marginTop: wp("1%"),
          }}
          key={item.currentDate}
          vertical
          textStyle={{
            // color: Colors.white,
            fontFamily: "HelveticaNeue_CondensedBold",
            fontWeight: "bold",
            // fontSize: wp("4%"),
          }}
          title={HelperService.getDisplayDate(item.currentDate)}
          selected={HelperService.datesAreOnSameDay(
            item.currentDate,
            focusedDate
          )}
          onPress={() => onDateChange({ selectedDate: item.currentDate })}
        >
          {/* <Text
						style={{
							color: Colors.white,
							fontFamily: "HelveticaNeue_CondensedBold",
							fontWeight: "bold",
							fontSize: wp('4.5%'),
						}}
					>19 JUN</Text> */}
        </WhiteButton_calendar>
      </View>

      // <>
      // 	<View style={{...Styles.countBadge}}>
      // 		<Text style={{ color: Colors.primary, fontSize: 10, left: "4%" }}>
      // 			{"12"}
      // 		</Text>
      // 		</View>
      // 	<WhiteButton
      // 		key={item.currentDate}
      // 		vertical
      // 		style={{ ...Styles.dateButton, }}
      // 		textStyle={Styles.dateText}
      // 		title={HelperService.getDisplayDate(item.currentDate)}
      // 		selected={HelperService.datesAreOnSameDay(item.currentDate, focusedDate)}
      // 		onPress={() => onDateChange({ selectedDate: item.currentDate })}>
      // 		{/* {this.getDate()} */}
      // 	</WhiteButton>

      // </>
    );
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
      minDate,
    } = this.props;
    let currentDate = startDate;
    let datesNode = [];
    let scrollview_ref = "";
    var date = new Date();
    var nextDate = date.setDate(date.getDate() + 7);
    // console.log("reastttt",this.getDate())
    while (currentDate <= endDate) {
      datesNode.push({ currentDate: currentDate });
      currentDate = HelperService.getNextDayTimestamp(currentDate);
      if (HelperService.datesAreOnSameDay(currentDate, focusedDate)) {
        this.selectedIndex = datesNode.length - 1;
      }
    }

    if (HelperService.datesAreOnSameDay(currentDate, endDate)) {
      datesNode.push({ currentDate: currentDate });
      if (HelperService.datesAreOnSameDay(currentDate, focusedDate)) {
        this.selectedIndex = datesNode.length - 1;
      }
    }

    return (
      <View style={Styles.headerContainer}>
        <LinearGradient
          colors={["#bfbfbf", "transparent"]}
          start={{ x: 0, y: -0.4 }}
          end={{ x: 0, y: 1 }}
          style={{
            flexDirection: "row",
            width: "97%",
            // height: hp("6%"),
            // justifyContent: "center",
            // alignItems: "center",
            alignSelf: "center",
            borderRadius: 8,
          }}
        >
          {/* <View
						style={{
							flexDirection: 'row',
							height: hp('10%'),
							zIndex: 2,
						}}
					>
						<FlatList
							data={datesNode}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => this.cardNode(item)}
							getItemLayout={this.getItemLayout}
							ref={ref => { this.flatListRef = ref }}
							horizontal={true}
							style={Styles.scrollViewContainer}
						/>
					</View> */}

          {/* <View style={Styles.TriangleShapeCSS}>
							{/* <LinearGradient
								colors={["#bfbfbf", "transparent"]}
								start={{ x: 0, y: -0.4 }}
								end={{ x: 0, y: 1 }}
								style={{
									// flexDirection: "row",
									// width: "92%",
									// height: hp("6%"),
									// justifyContent: "center",
									// alignItems: "center",
									// alignSelf: "center",
									// borderRadius: 8,
								}}
							></LinearGradient> *
						</View> */}

          <View style={{ ...Styles.datePickerContainer, marginTop: -10 }}>
            <View
              style={{
                height: hp("10%"),
                width: wp("83%"),
                // marginRight: (Dimensions.get('window').width * .12),
                // flex: 1,
                // width: (Dimensions.get('window').width) - (Dimensions.get('window').width * .17),
              }}
            >
              <FlatList
                data={datesNode}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => this.cardNode(item)}
                getItemLayout={this.getItemLayout}
                ref={(ref) => {
                  this.flatListRef = ref;
                }}
                horizontal={true}
                style={Styles.scrollViewContainer}
              />
            </View>
            <View style={{ marginLeft: wp("3%"), marginTop: wp('9.25%') , paddingLeft:wp('2%')}}>
              {/* <DatePicker
								allowRangeSelection={allowRangeSelection}
								selectedStartDate={selectedStartDate}
								selectedEndDate={selectedEndDate}
								minDate={minDate}
								onDateChange={(params) => onDateChange({ selectedDate: params.selectedStartDate })}
								iconStyle={Styles.datePickerIcon}
							/> */}
              {/* <LinearGradient
								colors={["#bfbfbf", "transparent"]}
								start={{ x: 0, y: -0.4 }}
								end={{ x: 0, y: 1 }}
								style={{
									// borderLeftWidth: 60 / 7,
									// borderRightWidth: 60 / 7,
									// borderBottomWidth: 120 / 7,
									// borderStyle: 'solid',
									backgroundColor: 'transparent',
									// borderColor: 'transparent',
									// borderLeftColor: 'transparent',
									// borderRightColor: 'transparent',
									// borderBottomColor: 'transparent',
									transform: [{ rotate: "90deg" }],
									height: hp('10%'),
									width: wp('10%'),
								}}
							/> */}
           
              {/* <View style={{ ...Styles.TriangleShapeCSS }} /> */}
              {/* <Image
								source={require('App/Assets/Images/triangle-gradient-black.png')}
								style={{
									width: wp('10%'),
									height: hp('4%'),
									transform: [{ rotate: "-90deg" }],
									opacity: 0.4,
								}}
							/> */}
            </View>
            <View style={{ marginLeft: wp("0"), marginTop: 26 }}>
              <DatePicker
                allowRangeSelection={allowRangeSelection}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                minDate={minDate}
                onDateChange={(params) =>
                  onDateChange({ selectedDate: params.selectedStartDate })
                }
                iconStyle={Styles.datePickerIcon}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    position: "relative",
  },
  dateButton: {
    height: hp("5.5%"),
    width: wp("20%"),
    paddingLeft: 0,
    paddingRight: 0,
    marginHorizontal: 5,
    marginVertical: "1.5%",
  },
  dateText: {
    fontSize: wp("3%"),
  },
  scrollViewContainer: {
    // marginRight: (Dimensions.get('window').width * .12),
    flex: 1,
    // width: (Dimensions.get('window').width) - (Dimensions.get('window').width * .17),
    backgroundColor: "transparent",

    // paddingTop: hp('2%'),
  },
  datePickerContainer: {
    // position: 'absolute',
    width: wp("100"),
    height: hp("6%"),
    // backgroundColor: Colors.primary,
    // backgroundColor: 'transparent',
    // right: -10,
    // zIndex: 2,
    borderRadius: 10,
    // top: -hp('.75%'),
    paddingTop: 0,
    paddingRight: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    zIndex: 10,
    marginTop: "1%",
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "row",
  },
  datePickerIcon: {
    color: Colors.white,
    // backgroundColor: Colors.primary,
    fontSize: wp("10%"),
    marginLeft: hp("-1.5%"),
    marginTop:hp("-1.5%"),
    marginRight: 0,
    
    // zIndex: 8
  },
  countBadge: {
    position: "absolute",
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
    // right: wp('0%'),
    // top: hp('0'),
    borderRadius: 70,
    height: hp("2.5%"),
    width: "23%",
    elevation: 25,
    alignSelf: "center",
    marginLeft: wp("2%"),
    top: hp("-1%"),
  },
  // TriangleShapeCSS: {
  //   borderLeftWidth: 60 / 7,
  //   borderRightWidth: 60 / 7,
  //   borderBottomWidth: 120 / 7,
  //   borderStyle: "solid",
  //   // backgroundColor: 'transparent',
  //   borderLeftColor: "transparent",
  //   borderRightColor: "transparent",
  //   // borderBottomColor: 'transparent',
  //   transform: [{ rotate: "90deg" }],
  // },
});
