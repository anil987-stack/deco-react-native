import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "App/Containers/Visits/VisitsDisplayScreen/VisitsDisplayScreenStyles";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
//import VisitCard from 'App/Containers/Visits/VisitCard'
import VisitAction from "App/Containers/Visits/VisitsDisplayScreen/VisitAction";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import Visit from "../../../Containers/Visits/VisitCard/VisitCardNew";
import _ from "lodash";
import ObjectiveModal from "App/Containers/Visits/ObjectiveModal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import EndVisitModal from "./EndVisitModal";
import { Card } from "react-native-paper";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "App/Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
class SelectedPlannedVisitsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  headerDropdown() {
    return (
      <View style={{ marginTop: hp("4%") }}>
        <View
          style={{
           
            flexDirection: "row",
            alignSelf: "center",
          
          }}
        >
          <Text
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderBottomWidth: wp("8.2%"),
              borderLeftWidth: wp("37%"),
              borderRightWidth: wp("6%"),
              // borderBottomWidth: 50,
              borderLeftColor: "black",
              borderRightColor: "transparent",
              // borderBottomColor: '#e76f51',
              borderBottomColor: "black",
              // marginTop: hp("-4.6%"),
              elevation: 20,
              zIndex: 15,
              opacity: 1,
              color: "white",
              textAlignVertical: "center",
              textAlign: "center",
              fontFamily: "HelveticaNeue_CondensedBold",
              fontWeight: "bold",
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            {"DEALER"}
          </Text>
          {/* <View style={Style.cropCard}>
                  </View>
                <View style={Style.cropCard1}>
                  </View> */}

          <Text
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderBottomWidth: wp("6.5%"),
              borderLeftWidth: wp("19%"),
              borderRightWidth: wp("7%"),
              // borderBottomWidth: 50,
              borderLeftColor: "yellow",
              borderRightColor: "transparent",
              // borderBottomColor: '#e76f51',
              borderBottomColor: "yellow",
              marginTop: hp("0.9%"),
              elevation: 20,
              marginLeft: "-8%",
              opacity: 0.6,
              textAlignVertical:"center",
              textAlign: "center",
              fontWeight:"bold"
            }}
          >
            {"030"}
          </Text>

          <View
            style={{
              height:hp("0.3%"),
              width: wp("21%"),
              backgroundColor: "white",
              alignSelf: "center",
              marginTop:hp("2.3%")
              // marginTop:hp("-9%"),
              // marginLeft:"8%"
            }}
          />

          <View>
            <GenericIcon
              name={"chevron-down"}
              style={{
                color: Colors.primary,
                marginTop: hp("1.2%"),
                fontSize: hp("4.5%"),

                //   marginLeft: wp("70%"),
                backgroundColor: "white",
                borderRadius: 50,
                // marginRight: wp("3%"),
                //   width: "9%",
                //   paddingLeft: 1,
                //   height: "5%",
                //   paddingTop: 0,
              }}
              show={true}
            />
          </View>
        </View>
      </View>
    );
  }

  cardTile() {
    return (
      <View>
        <View style={{ alignSelf: "center",marginTop: hp("3%") }}>
          <LinearGradient
            colors={["#2d2d2d", "#575757", "#a3a3a3"]}
            style={{
              borderRadius: 13,
            height: hp("10%"),
            width:wp("74%"),
            opacity: 0.9,
            // left: "10%",
            borderBottomRightRadius: 0,
            borderTopRightRadius: 35,
            borderTopLeftRadius: 55,
            borderWidth: 1,
            borderBottomColor: "transparent",
            alignSelf:'flex-end',
              //        shadowColor: 'black',
              //  shadowOffset: { width: 7, height: 7 },
              //  shadowOpacity: 0.2,
              //  shadowRadius: 1,elevation:5
            }}
            start={{ x: 0.4, y: 1 }}
            end={{ x: 1.5, y: 0 }}
          >
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: "3%",
                  fontWeight: "bold",
                  color: "#f8622d",
                  top: "3.5%",
                  fontSize: wp("2.3%"),
                }}
              >
                {"PJP RETAILER"}
              </Text>

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: "3%",
                  fontWeight: "bold",
                  color: "white",
                  top: "3.5%",
                  fontSize: wp("2.3%"),
                }}
              >
                {"|"}
              </Text>

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: "3%",
                  fontWeight: "bold",
                  color: "#f8622d",
                  top: "3.5%",
                  fontSize: wp("2.3%"),
                }}
              >
                {"PRIME PARTNER"}
              </Text>

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: "3%",
                  fontWeight: "bold",
                  color: "white",
                  top: "3.5%",
                  fontSize: wp("2.3%"),
                }}
              >
                {"|"}
              </Text>

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: "3%",
                  fontWeight: "bold",
                  color: "white",
                  top: "3.5%",
                  fontSize: wp("2.3%"),
                }}
              >
                {"TELESALES"}
              </Text>
            </View>
          </LinearGradient>

            <LinearGradient
              colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
              style={{
                borderRadius: 16,
                height: hp("27%"),
                width: wp("90%"),
                opacity: 0.9,
                // right: wp("19.7%"),
                marginTop: hp("-6%"),
                elevation: 25,
                borderWidth: 1,
                shadowColor: "black",
                alignSelf:"center"
              }}
              // style={{borderRadius:16,height:199,width:370,opacity:0.9,right:"40%",marginTop:"11%",borderTopWidth:5,borderTopColor:"#3b3b3b",borderLeftWidth:5,borderRightWidth:5,borderColor:"#3b3b3b",elevation:45}}
              start={{ x: 0.4, y: 0.4 }}
              end={{ x: 0.9, y: 1.7 }}
            >
              <LinearGradient
                colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
                //  colors={["#1e1e1e","#434343","#505050"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1.5 }}
                //          start={{ x: 0.7, y: 2.9 }}
                // end={{ x: 1.8, y: 0 }}

                style={{
                  height: hp("21%"),
                  width: wp("88%"),
                  opacity: 0.8,
                  alignSelf: "center",
                  marginTop: "1%",
                  borderRadius: 8,
                  borderBottomWidth: 0.6,
                  borderBottomColor: "lightgrey",
                  borderBottomLeftRadius: 7,
                  borderBottomRightRadius: 7,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  borderWidth: 0.6,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <GenericIcon
                    name={"circle"}
                    style={{
                      color: "#BFFF00",
                      // color: "#48d30a",
                      marginTop: hp("1.5%"),
                      fontSize: hp("3%"),
  
                      marginLeft: wp("2.5%"),
                      backgroundColor: "",
                      borderRadius: 60,
                      elevation: 0.6,
                      // right:"2%",
                      width: wp("6%"),
                      // paddingLeft:1,
                      height: hp("3%"),
                      // paddingTop:0,
                    }}
                    show={true}
                  />

                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("2%"),
                    fontWeight: "bold",
                    color: "#f8622d",
                    marginTop: hp("1.4%"),
                    width: wp("65%"),
                    }}
                  >
                    {"SHAHID ALI HASMULLAH KHAN"}
                  </Text>
                  <GenericIcon
                    name={"auto-delete"}
                    style={{
                      color: "#cccccc",
                      marginTop: hp("1.5%"),
                      fontSize: hp("4%"),

                      marginLeft: wp("3%"),
                      // backgroundColor:"white",
                      borderRadius: 60,
                      elevation: 0.6,
                      // right:"2%",
                      // width:"5.5%",
                      // paddingLeft:1,
                      // height:"5%",
                      // paddingTop:0,
                    }}
                    // show={true}
                  />
                </View>

                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("10.5%"),
                    color: "white",
                    marginTop: hp("-1.2%"),
                    fontSize: 12,
                  }}
                >
                  {"5101/00001"}
                </Text>

                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("10.5%"),
                    color: "white",
                    marginTop: hp("0.1%"),
                    fontSize: 12,
                  }}
                >
                  {"20/4 Taratala Road, Kolkata"}
                </Text>

                <View
                  style={{
                    ...Style.Screen,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: 0,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0,
                    shadowRadius: 0,
                    shadowColor: "#000",
                    marginTop: hp("2.5%"),
                    marginBottom: 0,
                    elevation: 0,
                  }}
                >
                  <TouchableOpacity
                    // onPress={() => {
                    //   item.Task_data_count != 0 ? getTaskData() : [];
                    // }}
                    style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("9%"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <GenericIcon
                      show={true}
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginTop: hp("1%"),
                        color: "white",
                      }}
                      name={"phone-in-talk"}
                    />
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("-1%"),
                          marginTop: hp("1"),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            width: wp("12%"),
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          CALL {"\n"} CONTACT
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => {
                    //   contactinfo();
                    // }}
                    style={{ flexDirection: "row",height: hp("5%"), flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("9%"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <GenericIcon
                      name={"location-on"}
                      style={{
                        color: "white",
                        fontSize: hp("3%"),
                        fontWeight: "bold",
                        marginTop: 10,
                      }}
                    />

<View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: wp("-2%"),
                        marginTop: hp("1"),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 8,
                          width: wp("14%"),
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        VIEW {"\n"} LOCATION
                      </Text>
                    </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => {
                    //   dmiModal();
                    // }}
                    style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("9"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                     <FontAwesome5
                      style={{
                        fontSize: 23,
                        fontWeight: "bold",
                        marginTop: hp("1%"),
                        color: "white",
                      }}
                      name={"people-arrows"}
                    />
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("-2%"),
                          marginTop: hp("1"),
                        }}
                      >
                      <Text
                        style={{
                          fontSize: 8,
                          width: wp("14%"),
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        {"MAPPED INFLUENCERS"}
                      </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() => {
                    //   if (item.expected_order_count > 0)
                    //     NavigationService.navigate("ExpOrdersListScreen", {
                    //       data: item,
                    //     });
                    //   else {
                    //     console.log("8");
                    //   }
                    // }}
                    style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("9"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 23,
                          // fontWeight: "bold",
                          marginTop: hp("0%"),
                          color: "white",
                        }}
                      >
                        {"20"}
                      </Text>

                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("-2.5%"),
                          marginTop: hp("0.5"),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            width: wp("9%"),
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          {"OPEN LEADS"}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => {
                    //   if (item.expected_order_count > 0)
                    //     NavigationService.navigate("ExpOrdersListScreen", {
                    //       data: item,
                    //     });
                    //   else {
                    //     console.log("8");
                    //   }
                    // }}
                    style={{ flexDirection: "row",  height: hp("5%"), flex: 1 }}
                  >
                    <View
                      style={{
                        // width: wp("17%"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 23,
                        // fontWeight: "bold",
                        marginTop: hp("0.1%"),
                        color: "white",
                        }}
                      >
                        {"02|05"}
                      </Text>
                      <View
                        style={{
                          justifyContent: "center",
                        alignItems: "center",
                        marginLeft: wp("-2.5%"),
                        marginTop: hp("0.7"),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                          width: wp("12%"),
                          textAlign: "center",
                          color: "white",
                          }}
                        >
                          {"MTD|YTD VISIT"}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              
              </LinearGradient>

             
            </LinearGradient>
         
        </View>
      </View>
    );
  }

  render() {
    const { submitPlannedVisitsLoader } = this.props;

    return (
      <>
        <ImageBackground
          style={Style.imgBackground}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >

<HeaderNew
            title={"ADD TO PJP"}
            textStyle={{
              top: hp("-1.8%"),
              marginLeft: wp("-10%"),
              fontSize: wp("4.6%"),
            }}
            onPress={() => NavigationService.goback()}
          />
          {/* <View>
            <View style={Style.container}>
              <View style={Style.shape_container}>
                <View style={Style.triangle} />
                <View style={Style.triangle1} />
              </View>
            </View>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                top: hp("-2%"),
                left: "2%",
                fontWeight: "bold",
                zIndex: 10000,
              }}
            >
              {"ADD TO PJP"}
            </Text>
          </View> */}

         

          {this.headerDropdown()}
          {this.cardTile()}

          {/* <BlueButton title={'Submit'} style={{width: '60%', alignSelf: 'center', marginTop: 10, height: 45}} textStyle={{fontSize: 20, fontFamily: ApplicationStyles.textMediumFont}} loading={submitPlannedVisitsLoader} disabled={submitPlannedVisitsLoader} onPress={() => this.onSubmit()}/> */}

          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: hp("80%"),
              position:"absolute"
            }}
            // style={{...Style.buttons,...Style.mt30,marginTop:30}}
            // onPress={() =>{this.props.openModal({
            //   content2: (
            //     <StartDaySelectionScreen
            //       onClose={() => {
            //         closeModal();
            //       }}
            //     />
            //   ),
            //   heading2: "Submit",
            //   bodyFlexHeight2: 0.35,
            // });}}
          >
            <LinearGradient
              colors={[Colors.primary, Colors.darkRed]}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.7 }}
              style={{ height: 50, width: 180, left: "0%", borderRadius: 10 }}
            >
              <Text
                style={{
                  ...Style.buttontextStyle,
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 10,
                  fontSize: 19,
                }}
              >
                {"SUBMIT"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  userid: state.user.loginDetails.userId,
  agentid: state.user.loginDetails.userId,
  visitsDisplayList: state.visits.visitsDisplayList,
  visitsStorageList: state.visits.visitsStorageList,
  visitsAction: state.visits.visitsAction,
  fetchVisitsDisplayListLoader: state.visits.fetchVisitsDisplayListLoader,
  searchFilters: state.visits.searchFilters,
  filteredDisplayData: state.visits.filteredDisplayData,
  categoryRatingMapping: state.common.categoryRatingMapping,
  startVisitLoader: state.visits.startVisitLoader,
  endVisitLoader: state.visits.endVisitLoader,
  isASM: state.user.isASM,
  psmList: state.user.psmList.concat([{ id: "", name: "All" }]),
  startedToday: state.user.startDayTime
    ? HelperService.isToday(state.user.startDayTime)
    : false,
  endedToday: state.user.endDayTime
    ? HelperService.isToday(state.user.endDayTime)
    : false,
  absentToday: state.user.absentDayTime
    ? HelperService.isToday(state.user.absentDayTime)
    : false,
  executeVisitData: state.visits.executeVisitData,
  startVisitLoadingId: state.visits.startVisitLoadingId,
  endVisitLoadingId: state.visits.endVisitLoadingId,
  isObjModalVisible: state.common.isObjModalVisible,
  businessChannel: state.user.user_details
    ? state.user.user_details.business_channel__c
    : "",
  submitPlannedVisitsLoader: state.visits.planVisit.submitPlannedVisitsLoader,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVisitsStorageList: (params) =>
    dispatch(VisitsActions.fetchVisitsStorageList(params)),
  fetchVisitsDisplayList: (params) =>
    dispatch(VisitsActions.fetchVisitsDisplayList(params)),
  changeSearchFilters: (params) =>
    dispatch(VisitsActions.changeSearchFilters(params)),
  openVisitsAction: () => dispatch(VisitsActions.openVisitsAction()),
  closeVisitsAction: () => dispatch(VisitsActions.closeVisitsAction()),
  getVisitsDisplayList: (params) =>
    dispatch(VisitsActions.getVisitsDisplayList(params)),
  executeVisit: (params) => dispatch(VisitsActions.executeVisit(params)),
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  disableModal: (params) => dispatch(CommonActions.disableModal(params)),
  showObjectiveModal: (params) =>
    dispatch(CommonActions.showObjectiveModal(params)),
  hideObjectiveModal: () => dispatch(CommonActions.hideObjectiveModal()),
  startVisit: (params) => dispatch(VisitsActions.startVisit(params)),
  endVisit: (params) => dispatch(VisitsActions.endVisit(params)),
  startVisitLoading: (params) =>
    dispatch(VisitsActions.startVisitLoading(params)),
  endVisitLoading: (params) => dispatch(VisitsActions.endVisitLoading(params)),
  startVisitLoadingStop: (params) =>
    dispatch(VisitsActions.startVisitLoadingStop(params)),
  endVisitLoadingStop: (params) =>
    dispatch(VisitsActions.endVisitLoadingStop(params)),
  pressStartVisit: (params) => dispatch(VisitsActions.pressStartVisit(params)),
  pressEndVisit: (params) => dispatch(VisitsActions.pressEndVisit(params)),
  pressEditVisit: (params) => dispatch(VisitsActions.pressEditVisit(params)),
  pressCancelVisit: (params) =>
    dispatch(VisitsActions.pressCancelVisit(params)),
  openModalTwo: (params) => dispatch(CommonActions.openModalTwo(params)),
  closeModalTwo: () => dispatch(CommonActions.closeModalTwo()),

  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedPlannedVisitsScreen);

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  plusIcon: {
    borderRadius: 50,
    bottom: 75,
    position: "absolute",
    right: 25,
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon1: {
    borderRadius: 50,
    bottom: 75,
    position: "absolute",
    right: 25,
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: Colors.mustard,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    alignItems: "center",
    backgroundColor: Colors.white,
    color: Colors.error,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: Metrics.tiny,
    textAlign: "center",
    fontFamily: ApplicationStyles.textMsgFont,
  },
  buttons: {
    marginHorizontal: 60,
    marginTop: 30,
  },
  input: {
    backgroundColor: Colors.error,
    borderRadius: 5,
    color: Colors.error,
    padding: 10,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  mb10: {
    marginBottom: 10,
  },
  ml52: {
    marginLeft: 52,
  },
  mt30: {
    marginTop: 30,
  },
  title: {
    // margin: 'auto',
    ...Fonts.regular,
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  wish: {
    alignSelf: "center",
    color: Colors.label,
    fontSize: 34,
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: "uppercase",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom: 75,
    position: "absolute",
    right: 90,
  },
  iconMessage: {
    fontSize: 14,
    padding: 2,
  },
  firstView: {
    width: "90%",
    // height:'auto',
    elevation: 15,
    borderWidth: 0,
    alignSelf: "center",
    backgroundColor: "red",
    // flexDirection:'row',
    // padding:10,
    marginBottom: 0,
    marginTop: 13,
    borderRadius: 13,
  },
  firstView1: {
    width: "90%",
    //height:'auto',
    elevation: 3,
    borderWidth: 0,
    alignSelf: "center",
    backgroundColor: "white",
    // flexDirection:'row',
    // padding:10,
    marginBottom: 0,
    marginTop: 30,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  container: {
    // flex: 1,
    // backgroundColor: 'transparent',
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
  cropCard: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderBottomWidth: 34,
    borderLeftWidth: 130,
    borderRightWidth: 25,
    // borderBottomWidth: 50,
    borderLeftColor: "black",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderBottomColor: "black",
    marginTop: "-9.5%",
    elevation: 20,
    zIndex: 1000,
    opacity: 1,

    // transform: [{ rotate: '180deg' }]
  },
  cropCard1: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderBottomWidth: 26,
    borderLeftWidth: 90,
    borderRightWidth: 25,
    // borderBottomWidth: 50,
    borderLeftColor: "yellow",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderBottomColor: "yellow",
    marginTop: "-7.5%",
    elevation: 20,
    marginLeft: "-8%",
    opacity: 0.5,

    // transform: [{ rotate: '180deg' }]
  },
  button: {
    ...ApplicationStyles.formButton,

    marginTop: hp("-5.8%"),
    maxHeight: hp("8%"),
    width: wp("28%"),
    elevation: 18,
    borderRadius: 10,
    paddingBottom: 13,
    marginLeft: wp("100%"),
    // borderColor:"grey",

    // opacity:0.8

    // borderWidth:1
  },

  searchContainer: {
    // paddingVertical: 21,
    width: "100%",
    borderRadius: 7,
    // paddingHorizontal: 1,
    elevation: 0,
    backgroundColor: "white",
    fontSize: wp("3.8%"),
    fontWeight: "700",

    alignSelf: "center",
    // marginBottom: "2%",
    marginTop: "-0.5%",
    height: hp("4.5%"),

    borderWidth: 1,
    marginLeft: "-0.5%",

    borderColor: "white",
    opacity: 0.3,

    // padding
  },

  Screen: {
    width: "95%",
    // paddingBottom:30,
    // backgroundColor:'#fff',
    marginTop: hp("1.5"),
    marginBottom: 5,
    marginHorizontal: 12,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 6,
  },
});

// import React, { Component } from 'react'
// import { View, Alert, ScrollView, FlatList} from 'react-native'
// import { Button, Text } from 'native-base';
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import Style from './PlannedVisitStyles'
// import BlueButton from 'App/Components/BlueButton'
// import WhiteButton from 'App/Components/WhiteButton';
// import NavigationService from 'App/Services/NavigationService'
// import {HelperService} from 'App/Services/Utils/HelperService';
// import SelectedVisitCard from 'App/Containers/Visits/SelectedVisitCard'
// import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
// import Loading from 'App/Components/Loading'
// import NoDataFound from 'App/Components/NoDataFound'
// import RetailersActions from 'App/Stores/Retailers/Actions'
// import VisitsActions from 'App/Stores/Visits/Actions'
// import _ from 'lodash'
// import GenericIcon from 'App/Components/GenericIcon'
// import DatePicker from 'App/Components/DatePicker'
// import ActionModal from 'App/Components/ActionModal'
// import DatePickerStyles from 'App/Components/DatePicker/DatePickerStyles'
// import RecurrenceSelection from 'App/Containers/Visits/RecurrenceSelection'

// class SelectedPlannedVisitsScreen extends React.Component {
// 	componentDidMount() {
//     	this.fetchRetailersCall();
//   	}

//   	onRemoveClick(id) {
//   		const {
// 	      removeVisitFromPlan
//     	} = this.props;

//   		Alert.alert(
// 		  	'Remove Planned Visit',
// 		  	'Do you want to delete this planned visit?',
// 		  [
// 		    {
// 		      text: 'Cancel',
// 		      onPress: () => console.log('Cancel Pressed'),
// 		      style: 'cancel',
// 		    },
// 		    {text: 'Confirm', onPress: () => removeVisitFromPlan({id: id})},
// 		  ],
// 		  {cancelable: false},
// 		);

//   	}

//   	fetchRetailersCall() {
//   		const {
//   			fetchRetailers,
//   			retailersOffset,
//   			retailersLimit,
//   			agentid,
//   			token
//   		} = this.props
// 	    fetchRetailers({
// 	      token: token,
// 	      agentid: agentid,
// 	      offset: retailersOffset,
// 	      limit: retailersLimit
// 	    });
//   	}

//   	fetchDataFromList(sfid) {
//       const {
//         dealersList,
//         retailersList
//       } = this.props;

//   		let data = {};
//   		retailersList.map((obj) => {
//   			if(obj.seller.sfid == sfid) {
//   				data = obj.seller
//   			}
//   		});

//       if (_.isEmpty(data)) {
//         dealersList.map((obj) => {
//           if(obj.seller.sfid == sfid) {
//             data = obj.seller
//           }
//         });
//       }

//   		return data;
//   	}

//   	cardNode(item) {
//   		const {
//   			psmList,
//   			agentid,
// 	      	categoryRatingMapping,
// 	      	recurringMapping,
// 	      	retailersList,
// 			  dealersList,
// 	      	editSelectedVisits,
// 			  site
//     	} = this.props;
// 	console.log("retailerlist",retailersList);
// 	console.log("dealersList",item);
//   		return (
//   			<SelectedVisitCard
//   				// name={HelperService.findMatchingKeyValueInList(retailersList,'Id',item.Customer_Name__c, 'Name')||HelperService.findMatchingKeyValueInList(dealersList,'Id',item.Customer__c , 'Name') || HelperService.findMatchingKeyValueInList(site,'Id',item.Site__c , 'Site_Name__c')||HelperService.findMatchingKeyValueInList(influencer,'Id',item.Influencer__c, 'Name')}
//   				name={HelperService.findMatchingKeyValueInList(retailersList,'Id',item.Customer_Name__c, 'Name')||HelperService.findMatchingKeyValueInList(dealersList,'Id',item.Customer__c , 'Name') }
// 				 data={item}
//           type={item.Type__c}
//   				id={item.local_id}
//           sfid={item.Customer_Name__c}
//   				categoryRatingMapping={categoryRatingMapping}
//   				onRemoveClick={() => this.onRemoveClick(item.local_id)}
//   				plannedVisitData={item}
//   				recurringMapping={recurringMapping}
//   				psmList={psmList}
//   				agentid={agentid}
//   				editSelectedVisits={(params) => editSelectedVisits(params)}

//   			/>
//   		)
//   	}

//   	onSubmit() {
//   		const {
//   			selectedPlannedVisits,
//   			submitSelectedPlannedVisits,
//   			token,
//   		    agentid
//   		} = this.props

//   		Alert.alert(
// 		  	'Submit Planned Visits',
// 		  	'Do you want to submit your planned visits?',
// 		  [
// 		    {
// 		      text: 'Cancel',
// 		      onPress: () => console.log('Cancel Pressed'),
// 		      style: 'cancel',
// 		    },
// 		    {text: 'Confirm', onPress: () => submitSelectedPlannedVisits({form: selectedPlannedVisits, token: token})},
// 		  ],
// 		  {cancelable: false},
// 		);
//   	}

//     editRepeatBeat(params) {
//       const {
//         selectedPlannedVisits,
//         editSelectedVisits
//       } = this.props;

//       selectedPlannedVisits.map((obj) => {
//         editSelectedVisits({
//           ...params,
//           id: obj.local_id
//         });
//       })
//     }

//     clearRepeatBeat(params) {
//       const {
//         selectedPlannedVisits,
//         editSelectedVisits
//       } = this.props;

//       selectedPlannedVisits.map((obj) => {
//         editSelectedVisits({
//           id: obj.local_id,
//           edited_field: 'till_date',
//           edited_value: ''
//         });

//         editSelectedVisits({
//           id: obj.local_id,
//           edited_field: 'recurring_on',
//           edited_value: ''
//         });
//       })
//     }

//   	render() {
//   		const {
//         recurringMapping,
// 	      retailersList,
// 	      searchFilters,
// 	      fetchRetailersLoader,
// 	      categoryRatingMapping,
// 	      selectedPlannedVisits,
// 	      editSelectedVisits,
// 	      submitPlannedVisitsLoader,
// 	      token,
//   		  agentid
//     	} = this.props;

//     	let visibleNode = [];

//     	let noDataNode= (
// 	    	<NoDataFound text={'No Planned Visits'}></NoDataFound>
//     	);

//       visibleNode = (
//           <FlatList
//             data={HelperService.sortListFilter(selectedPlannedVisits, 'date', 'ASC')}
//             renderItem={({ item }) => this.cardNode(item)}
//             keyExtractor={item => item.local_id}
//             ListEmptyComponent={() => noDataNode}
//           />
//       );

// // editSelectedVisits({ id: id, edited_field: 'recurring_on', edited_value: '' }); editSelectedVisits({ id: id, edited_field: 'till_date', edited_value: '' })
// 	    return (
// 	    	<View style={{flex: 1}}>
// 		        <View style={{flex: .95}}>

// 		          	{visibleNode}
// 		        </View>
// 		        <BlueButton title={'Submit'} style={{width: '60%', alignSelf: 'center', marginTop: 10, height: 45}} textStyle={{fontSize: 20, fontFamily: ApplicationStyles.textMediumFont}} loading={submitPlannedVisitsLoader} disabled={submitPlannedVisitsLoader} onPress={() => this.onSubmit()}/>
// 	        </View>
// 	    )
//   	}
// }

// const mapStateToProps = (state) => ({
//   token						: state.user.token,
//   agentid	: state.user.id,
//   agentAreas				: [{id: '', name: 'All'}].concat(state.user.agentAreas),
//   retailersOffset			: state.retailers.retailersOffset,
//   retailersLimit			: state.retailers.retailersLimit,
//   retailersList				: state.retailers.retailersList,
//   dealersList         : state.retailers.dealersList,
//   fetchRetailersLoader		: state.retailers.fetchRetailersLoader,
//   searchFilters				: state.visits.planVisit.searchFilters,
//   categoryRatingMapping		: state.common.categoryRatingMapping,
//   recurringMapping			: state.common.recurringMapping,
//   selectedVisitDate			: state.visits.planVisit.selectedVisitDate,
//   selectedPlannedVisits		: state.visits.planVisit.selectedPlannedVisits,
//   submitPlannedVisitsLoader : state.visits.planVisit.submitPlannedVisitsLoader,
//   isASM                 	: state.user.isASM,
//   psmList               	: state.user.psmList
// });

// const mapDispatchToProps = (dispatch) => ({
// 	fetchRetailers:(params)    					  => dispatch(RetailersActions.fetchRetailers(params)),
// 	editSelectedVisits:(params) 				  => dispatch(VisitsActions.editSelectedVisits(params)),
// 	removeVisitFromPlan:(params) 				  => dispatch(VisitsActions.removeVisitFromPlan(params)),
// 	changePlannedSelectedDate:(params) 			  => dispatch(VisitsActions.changePlannedSelectedDate(params)),
// 	submitSelectedPlannedVisits:(params) 		  => dispatch(VisitsActions.submitSelectedPlannedVisits(params)),
// 	changeAddPlannedVisitsSearchFilters: (params) => dispatch(VisitsActions.changeAddPlannedVisitsSearchFilters(params))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SelectedPlannedVisitsScreen)
