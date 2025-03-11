import React from "react";
import { connect } from "react-redux";
import GenericIcon from "App/Components/GenericIcon";

import { PropTypes } from "prop-types";
import { liveInEurope } from "App/Stores/Example/Selectors";
import NavigationService from "App/Services/NavigationService";
import SearchBar from "App/Components/SearchBar";
import SearchableDropdown from "App/Components/SearchableDropdown";
import WhiteButton from "App/Components/WhiteButton";
import BlueButton from "App/Components/BlueButton";
import DatePicker from "App/Components/DatePicker";
import DatesScrolling from "App/Components/DatesScrolling";
import { HelperService } from "App/Services/Utils/HelperService";
import { ImageBackground } from "react-native";

import VisitsActions from "App/Stores/Visits/Actions";
import BackArrowButton from "App/Components/BackArrowButton";
import CommonActions from "App/Stores/Common/Actions";
import UserActions from "App/Stores/User/Actions";
import LinearGradient from "react-native-linear-gradient";

import _ from "lodash";
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from "App/Theme";
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
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
import { Card } from "react-native-paper";

class AddPlannedVisitsLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: false,
      mount: false,
      count1: false,
      mount1: false,
      count2: false,
      mount2: false,
      count3: false,
      mount3: false,
      count4: false,
      mount4: false,
      count5: false,
      mount5: false,
      count6: false,
      mount6: false,
      count7: false,
      mount7: false,
    };
  }
  componentDidMount() {
    const {
      changeSearchFilters,
      agentid,
      getAreaPjp,
      token,
      agentAreaPjp,
      searchFilters,
      changePlannedSelectedPSM,
      selectedVisitPSM,
      selectedVisitDate,
      changeAddPlannedVisitsSearchFilters,
      userid,
      fetchPjp,
    } = this.props;

    // changePlannedSelectedPSM(agentid)
    getAreaPjp({
      token,
      userId: agentid,
      m: HelperService.getMonthFullName(selectedVisitDate).substring(0, 3),
    });

    if (this.filterdatabeat() && this.filterdatabeat().length) {
      changeAddPlannedVisitsSearchFilters({
        edited_field: "beat",
        edited_value: "",
      });
    }
  }

  filterResults(list) {
    let searchFilters = this.props.searchFilters;
    let filteredList = HelperService.searchTextListVisitFilter(
      list,
      "Visit_Date__c",
      searchFilters["selectedVisitDate"]
    );
    return filteredList;
  }

  pendingfliterList(list) {
    const { searchFilters, selectedVisitDate } = this.props;
    let result = "";
    result = list.filter(
      (obj) =>
        obj.Visit_Date__c ==
        HelperService.dateReadableFormatWithHyphen(selectedVisitDate)
    );

    return result;
  }

  filterdatabeat() {
    const {
      data,
      changeAddPlannedVisitsSearchFilters,
      filteredPjpDisplayData,
      beatList,
      filteredBeatPjpDisplayData,
    } = this.props;

    if (filteredBeatPjpDisplayData && filteredBeatPjpDisplayData.length) {
      let filteredSitesList = this.filterResults(filteredBeatPjpDisplayData);
      let pjpSearchableList = HelperService.convertToSearchablepjpBeatListFormat(
        {
          list: filteredSitesList,
          id_key: "Area_Master__c",
          label_key: "Area_Name__c",
        }
      );
      return pjpSearchableList;
    } else {
      return [];
    }
  }

  render() {
    const {
      isASM,
      psmList,
      agentAreas,
      searchFilters,
      selectedPlannedVisits,
      selectedVisitDate,
      selectedVisitPSM,
      changePlannedSelectedDate,
      changePlannedSelectedPSM,
      changeAddPlannedVisitsSearchFilters,
      token,
      getAreaPjp,
      searchFilter,
      agentAreaPjp,
      agentBeatPjp,
      startDate,
      loader,
      agentid,
      agentBeat,
      retailerSearchFilters,
      beatList,
      businessChannel,
      agentCity,
      userid,
      fetchPjp,
      fetchPjpLoading,
      filteredBeatPjpDisplayData,
    } = this.props;

    let psmListNode = [];
    // if (isASM.length) {
    psmListNode = (
      <SearchableDropdown
        dataSource={isASM}
        placeHolderText={"Select User"}
        selectedValue={selectedVisitPSM}
        onChange={(value) => {
          changePlannedSelectedPSM(value);

          getAreaPjp({
            token,
            team__c: value,
            date: selectedVisitDate,
          });
        }}
        dropstyle={{ left: -77, width: wp("3"), height: wp("3") }}
        placeholder={"Type or Select SO"}
        invalid={false}
        customPickerStyles={{
          ...Styles.psmPickerStyles,
          width: "64%",
          marginLeft: "25.5%",
        }}
      />
    );
    // }
    let startValue = this.filterdatabeat();

    return (
      //       <View>
      //         <Card
      //           style={
      //             isASM.length
      //               ? { ...Styles.header, ...{ height: hp("27%") } }
      //               : { ...Styles.header }
      //           }
      //         >
      //           <View style={{ paddingTop: hp("1%"), paddingBottom: hp("1%"), }}>
      //             <BackArrowButton />
      //           </View>

      //           <DatesScrolling
      //             startDate={HelperService.getNextNDayTimestamp(startDate)}
      //             endDate={HelperService.getNextNDayTimestamp(30, selectedVisitDate)}
      //             selectedStartDate={selectedVisitDate}
      //             selectedEndDate={selectedVisitDate}
      //             focusedDate={selectedVisitDate}
      //             allowRangeSelection={false}
      //             minDate={HelperService.getNextNDayTimestamp(1)}
      //             onDateChange={(params) => {
      //               changePlannedSelectedDate(params.selectedDate),
      //                 changeAddPlannedVisitsSearchFilters({
      //                   edited_field: "area",
      //                   edited_value: "",
      //                 });
      //               changeAddPlannedVisitsSearchFilters({
      //                 edited_field: "beat",
      //                 edited_value: "",
      //               });

      //               getAreaPjp({
      //                 token,
      //                 userId: selectedVisitPSM ? selectedVisitPSM : agentid,
      //                 m: HelperService.getMonthFullName(selectedVisitDate),
      //               });
      //             }}
      //           />

      //           {/* {psmListNode} */}

      //           <View style={Styles.searchableDropdown}>
      //           {psmListNode}

      //             {/* {loader || fetchPjpLoading ? (
      //               <Text style={Styles.heading}>{"Area list Loading .."}</Text>
      //             ) : (
      //               <View>
      //                 <SearchableDropdown
      //                   // dataSource={
      //                   //   this.filterdatabeat()
      //                   //     ? [{ id: "", name: "All" }].concat(this.filterdatabeat())
      //                   //     : []
      //                   // }
      //                   placeHolderText={"Select Area..."}
      //                   // selectedValue={searchFilters.searchFilters["beat"]}
      //                   // onChange={(beatCode) =>
      //                   //   changeAddPlannedVisitsSearchFilters({
      //                   //     edited_field: "beat",
      //                   //     edited_value: beatCode,
      //                   //   })
      //                   // }
      //                   placeholder={"Type or Select Area"}
      //                   invalid={false}
      //                   customPickerStyles={Styles.pickerStyles}
      //                   key={searchFilters["beat"] + _.uniqueId()}
      //                 />
      //               </View>
      //             )} */}
      //             <View >
      //               <WhiteButton
      //                 vertical
      //                 style={Styles.viewBtn}
      //                 textStyle={Styles.viewBtntext}
      //                 title={"Visits"}
      //                 onPress={() =>
      //                   NavigationService.navigate("SelectedPlannedVisitsScreen")
      //                 }
      //               >
      //                 <Badge style={Styles.countBadge}>
      //                   <Text style={{ color: Colors.primary }}>
      //                     {selectedPlannedVisits.length}
      //                   </Text>
      //                 </Badge>
      //               </WhiteButton>
      //             </View>
      //           </View>

      //           {/* <View style={Styles.searchFilterContainer}> </View> */}
      //           <View style={{marginLeft:"0%", flexDirection:"row"}}>
      //           <SearchBar
      //             placeholder={`Search by name`}
      //             onInputChange={(text) =>
      //               changeAddPlannedVisitsSearchFilters({
      //                 edited_field: "name",
      //                 edited_value: text,
      //               })
      //             }
      //             onInputSubmit={(text) =>
      //               changeAddPlannedVisitsSearchFilters({
      //                 edited_field: "name",
      //                 edited_value: text,
      //               })
      //             }
      //             onInputClear={(text) =>
      //               changeAddPlannedVisitsSearchFilters({
      //                 edited_field: "name",
      //                 edited_value: "",
      //               })
      //             }
      //             value={searchFilters["name"]}
      //             ContainerStyles={Styles.searchContainer}
      //           />

      // <View >
      //               <WhiteButton
      //                 vertical
      //                 style={Styles.viewBtn1}
      //                 textStyle={Styles.viewBtntext1}
      //                 title={"Add All"}
      //                 // onPress={() =>
      //                 //   NavigationService.navigate("SelectedPlannedVisitsScreen")
      //                 // }
      //               >

      //               </WhiteButton>
      //             </View>
      //             </View>

      //         </Card>
      //         {this.props.children}
      //       </View>
      <ImageBackground
        style={Styles.imgBackground}
        resizeMode="cover"
        source={require("App/Assets/Images/startDay.png")}
      >
        <View>
          <View style={Styles.container}>
            <View style={Styles.shape_container}>
              <View style={Styles.triangle} />
              <View style={Styles.triangle1} />
            </View>
          </View>
          <Text
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              top: "12%",
              left: "2%",
              fontWeight: "bold",
              zIndex: 10000,
              fontSize: hp("2.5%"),
            }}
          >
            {"VISIT PLANNING"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            left: "6.8%",
            top: "-6%",
          }}
        >
          <View
            style={{ flexDirection: "row", marginLeft: "-1%", elevation: 15 }}
          >
             <View
              style={{ flexDirection: "row", marginLeft: "-9%", elevation: 15 }}
            >
              <GenericIcon
                name={"cart-plus"}
                show={true}
                // onPress={() => this.getVisitsDisplayListCall()}
                style={{
                  color: "grey",
                  fontSize: wp("6.5%"),
                  alignSelf: "center",
                  padding: 10,
                  backgroundColor: "#FDFCFC",
                  borderRadius: 80,
                  width: "21%",
                  height: hp("3.75%"),
                  marginTop: hp("1%"),
                  padding: 1.7,
                  left: wp("7%"),
                }}
              />
              <LinearGradient
                colors={[Colors.white, Colors.white]}
                start={{ x: 0.1, y: 0.2 }}
                end={{ x: 0.7, y: 0.2 }}
                style={{
                  height: 23,
                  width: 87,
                  top: "7%",
                  left: "70%",
                  borderRadius: 5,
                  opacity: 0.2,
                }}
              >

              </LinearGradient>
              <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "#D3D3D3",
                    marginLeft: wp("-13%"),
                    marginTop: hp("2%"),
                    fontWeight: "bold",
                    zIndex: 10000,
                    fontSize: 10.5,
                  }}
                >
                  {"ADD TO PJP"}
                </Text>
              {/* <View style={{backgroundColor:"white",opacity:0.5,height:"36%",top:"6%"}}> */}
              {/* <Text style={{fontFamily: "HelveticaNeue_CondensedBold",top:"8%",left:"20%",fontWeight:"bold",zIndex:10000,color:"white",fontSize:11,}}>{"ADD VISIT"}</Text> */}
              {/* </View> */}
            </View>
          </View>
          
        </View>
        <TouchableOpacity
            style={{ ...Styles.button }}>
        <LinearGradient
              colors={[Colors.primary, Colors.darkRed]}
              start={{ x: 0.1, y: 0.2 }}
              end={{ x: 0.7, y: 0.2 }}
              style={{
                height: 52,
                width: 67,
                left: "0%",
                borderRadius: 10,
                opacity: 0.9,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "#D3D3D3",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 3,
                  fontSize: 30,
                  paddingRight: 8,
                }}
              >
                {"09"}
              </Text>
            </LinearGradient>
            </TouchableOpacity>
            <View
          //     style={{
          //       width: wp("100%"),
          // borderWidth:0.5,
          //       flexDirection: "row",
          //       height: hp("6%"),
          //       // backgroundColor: "white",
          //       alignSelf: "center",
          //       elevation: 12,
          //       padding: wp("1.5"),
          //       shadowOpacity: 0.25,
          //       shadowRadius: 3.84,
          //       shadowColor: "#000",
          //       // shadowOffset: {
          //       //   width: 0,
          //       //   height: 2,
          //       // },
          //     }}
          >
            {this.state.mount7 ? (
              <View style={{ flexDirection: "row" ,}}>
                <View style={{ left: "15%", marginTop:hp("-4%")}}>
                  <GenericIcon
                    name={"chevron-left-circle-outline"}
                    style={{
                      fontSize: wp("6.8%"),
                      color: "white",
                      alignSelf: "center",
                      paddingTop: "0.5%",
                      elevation: 25,
                     

                    }}
                    show={true}
                    onPress={() => this.setState({ mount7: this.state.mount7 == false })}
                  />
                </View>
                <SearchBar
                  //  placeholder={`Search by name`}
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
            ) : this.state.mount7 == false ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  {/* <View>
            <GenericIcon
              name={"arrow-back"}
              style={{
                fontSize: wp("6.8%"),
                color: Colors.backarrow,
                alignSelf: "center",
              }}
              onPress={() => NavigationService.goback()}
            />
          </View> */}

                  <View>
                    <GenericIcon
                      name={"search"}
                      style={{
                        fontSize: wp("9%"),
                        color: "grey",
                        alignSelf: "center",
                        backgroundColor: "transparent",
                        marginLeft: "79%",
                        elevation: 20,
                        marginTop: hp("-4.5%"),
                      }}
                      // onPress={() =>
                      //   this.setState({ mount7: !this.state.mount7 })
                      // }
                    />
                  </View>
                </View>
              </>
            ) : (
              []
            )}
          </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.loginDetails.userId,
  agentAreas: state.user.agentCity
    ? [{ id: "", name: "All" }].concat(state.user.agentCity)
    : [],
  searchFilters: state.visits.planVisit,
  userid: state.user.loginDetails.userId,
  categoryRatingMapping: state.common.categoryRatingMapping,
  selectedVisitDate: state.visits.planVisit.selectedVisitDate,
  selectedVisitDate: state.visits.planVisit.selectedVisitDate,
  startDate: state.visits.planVisit.startDate,
  selectedPlannedVisits: state.visits.planVisit.selectedPlannedVisits,
  isASM: state.user.psmList
    ? [{ id: state.user.loginDetails.userId, name: "Self" }].concat(
        state.user.psmList
      )
    : [],
  psmList: state.user.psmList
    ? [
        {
          id:
            state.user.psmList[0] && state.user.psmList[0].id
              ? state.user.psmList[0].id
              : "",
          name: "So",
        },
      ].concat([{ id: state.user.loginDetails.userId, name: "Self" }])
    : [],
  agentAreaPjp: state.common.agentAreaPjp,
  agentBeatPjp: state.common.agentBeatPjp,
  filteredPjpDisplayData: state.user.filteredPjpDisplayData,
  loader: state.common.fetchAllAreaPjpLoading,
  agentBeat: state.common.agentBeat,
  retailerSearchFilters: state.retailers.retailerSearchFilters,
  beatList: state.retailers.retailersBeatSearchList,
  businessChannel: state.user.user_details
    ? state.user.user_details.business_channel__c
    : "",
  agentCity: [{ id: "", name: "All" }].concat(state.user.agentCity),
  cityAllList: [{ id: "", name: "All" }].concat(state.common.cityAllList),
  filteredBeatPjpDisplayData: state.user.filteredBeatPjpDisplayData,
  // searchFiltersBeat: state.visits.searchFilters,
  fetchPjpLoading: state.user.fetchPjpLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changePlannedSelectedDate: (params) =>
    dispatch(VisitsActions.changePlannedSelectedDate(params)),
  changePlannedSelectedPSM: (params) =>
    dispatch(VisitsActions.changePlannedSelectedPSM(params)),
  changeAddPlannedVisitsSearchFilters: (params) =>
    dispatch(VisitsActions.changeAddPlannedVisitsSearchFilters(params)),
  getAreaPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlannedVisitsLayout);

const Styles = StyleSheet.create({
  header: {
    height: hp("32%"),
    alignItems: "flex-start",

    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 15,
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  searchableDropdown: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
    marginTop: "-17%",
  },
  pickerStyles: {
    marginTop: -10,
    backgroundColor: "white",
    paddingVertical: 10,

    paddingHorizontal: "8%",
    // width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
    elevation: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
  pickerStyles1: {
    marginTop: -5,
    backgroundColor: "white",
    paddingVertical: 8,
    minHeight: hp("4.7%"),
    paddingHorizontal: "9%",
    width: "83%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
    elevation: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
  psmPickerStyles: {
    marginTop: -7,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: "8%",
    width: "79%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    elevation: 5,
    marginLeft: "10%",
    borderColor: "grey",
    borderWidth: 1,
  },
  viewBtn: {
    height: hp("4.8%"),
    width: wp("24%"),
    paddingLeft: 0,
    paddingRight: 5,
    marginLeft: wp("0%"),
    overflow: "visible",
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginRight: "4%",
    marginTop: "-8%",
  },
  viewBtntext: {
    fontSize: wp("3.8%"),
    fontWeight: "bold",
    color: Colors.primary,
    paddingTop: 3,
  },
  countBadge: {
    position: "absolute",
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
    right: -10,
    top: -10,
  },
  searchContainer: {
    paddingVertical: 21,
    width: "65%",
    borderRadius: 24,
    paddingHorizontal: 1,
    elevation: 10,
    backgroundColor: "white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    color: Colors.blue,
    alignSelf: "center",
    marginBottom: "2%",
    marginTop: "-10%",
    // height: hp("6%"),
    borderColor: "grey",
    borderWidth: 3,
    marginLeft: "4%",
    // padding
  },
  searchFilterContainer: {
    marginTop: hp(".5%"),
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchFilterTypeBox: {
    marginHorizontal: wp("1%"),
    marginBottom: hp("1%"),
    borderWidth: 1.5,
    width: wp("42%"),
  },
  searchFilterTypeText: {
    fontSize: wp("3.8%"),
    fontFamily: ApplicationStyles.textMediumFont,
  },
  heading: {
    alignSelf: "center",
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.2%"),
    marginBottom: 0,
    fontWeight: "bold",
    marginRight: "5%",
  },

  viewBtn1: {
    height: hp("5%"),
    width: wp("24%"),
    paddingLeft: 0,
    paddingRight: 5,
    marginLeft: wp("3%"),
    overflow: "visible",
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginRight: "4%",
    marginTop: "-30%",
  },
  viewBtntext1: {
    fontSize: wp("3.8%"),
    fontWeight: "bold",
    color: Colors.primary,
    paddingTop: 34,
    paddingLeft: 7,
  },
  imgBackground: {
    width: "100%",
    height: "60%",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  shape_container: {
    // height: 120,
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 38.5,
    borderLeftWidth: 164,
    borderRightWidth: 30,
    // borderBottomWidth: 50,
    borderLeftColor: "#5c5c5c",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "#5c5c5c",
    marginTop: "0%",
    // transform: [{ rotate: '180deg' }]
  },
  triangle1: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 32,
    borderLeftWidth: 160,
    borderRightWidth: 25,
    // borderBottomWidth: 50,
    borderLeftColor: "white",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "white",
    marginTop: "-9.5%",
    elevation: 20,

    // transform: [{ rotate: '180deg' }]
  },
  button: {
  ...ApplicationStyles.formButton,
 
  marginTop: hp('-2.25%'),
  maxHeight: hp('8%'),
  width:wp('28%'),
  elevation:18,
  borderRadius:10,
  paddingBottom:13,
  marginLeft:wp("100%")
  // borderColor:"grey",

  // opacity:0.8

  // borderWidth:1
},
searchContainer: {
  // paddingVertical: 21,
  width: "77%",
  borderRadius: 7,
  // paddingHorizontal: 1,
  elevation: 0,
  backgroundColor:"transparent",
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
  borderWidth:1,
  borderColor:"white"
  // padding
},
});
