import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./VisitsDisplayScreenStyles";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
//import VisitCard from 'App/Containers/Visits/VisitCard'
import VisitAction from "./VisitAction";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors, ApplicationStyles } from "App/Theme";
// import Visit from "../../../Containers/Visits/VisitCard/VisitCardNew";
import _ from "lodash";
import ObjectiveModal from "App/Containers/Visits/ObjectiveModal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EndVisitModal from "./EndVisitModal";
import { Card } from "react-native-paper";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "App/Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SelectUserModal from "./SelectUserModal";
import VisitMainCard from "../VisitCard/VisitMainCard";
import VisitCardNew from "../../../Containers/Visits/VisitCard/VisitCardNew";
import VisitModal from "./VisitModal";
import VisitReasonModal from "./VisitReasonModel";
import MappedInfluencers from "../VisitCard/MappedInfluencers";
import { HeaderNew } from "App/Components/Headerbar/HeaderNewTwo";
import Modal from "../VisitCard/Modal";
import DistanceModal from "./DistanceModal";
class VisitsDisplayScreen extends React.Component {
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
    this.getVisitsDisplayListCall();
  }

  // fetchVisitsDisplayListCall() {
  // 	const {
  // 		token,
  // 		agentid,
  // 		searchFilters,
  // 		fetchVisitsDisplayList
  // 	} = this.props;

  // 	fetchVisitsDisplayList({
  // 		token: token,

  // 	});
  // }

  getVisitsDisplayListCall() {
    const {
      token,
      agentid,
      userid,
      searchFilters,
      getVisitsDisplayList,
      changeSearchFilters,
    } = this.props;
    // console.log("userid",userid);
    changeSearchFilters({ edited_field: "psm__c", edited_value: userid });

    getVisitsDisplayList({
      token: token,

      agentid: searchFilters["psm__c"],
      startDate: searchFilters["startDate"],
      endDate: searchFilters["endDate"],
    });
  }

  refresh() {
    this.getVisitsDisplayListCall();
  }

  filterResults(list) {
    let searchFilters = this.props.searchFilters;
    let filteredList = HelperService.searchTextListFilter(
      list,
      "visit",
      searchFilters["psm__c"],
      "psm__c"
    );
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "Area__c",
      searchFilters["beat"]
    );

    return filteredList;
  }

  isStartVisitLoading(data) {
    const { startVisitLoader, startVisitLoadingId } = this.props;

    let loading = false;
    loading = !!startVisitLoader && startVisitLoadingId == data.Id;
    return loading;
  }

  isEndVisitLoading(data) {
    const { endVisitLoader, endVisitLoadingId } = this.props;

    let loading = false;
    loading = !!endVisitLoader && endVisitLoadingId == data.Id;
    return loading;
  }

  isActionVisible(data) {
    //if status is completed, cancelled and visit is not of current day then start and end visit actions are not visible.
    const { searchFilters, agentid } = this.props;
    // console.log("jjjjjjjj",!HelperService.isToday(searchFilters["startDate"]));
    //console.log(data)
    const status = data.Status__c;
    if (
      status == "Completed" ||
      status == "Cancelled" ||
      status == "Unexecuted" ||
      !HelperService.isToday(searchFilters["startDate"])
    ) {
      return false;
    }
    if (agentid !== searchFilters["psm__c"]) {
      return false;
    }

    return true;
  }

  isActionDisabled() {
    const { endVisitLoader, startVisitLoader } = this.props;

    return startVisitLoader || endVisitLoader;
  }

  getStartVisitText(data) {
    const { executeVisitData } = this.props;

    return data.Status__c == "Started" ||
      (!_.isEmpty(executeVisitData) &&
        data.pg_id__c == executeVisitData.pg_id__c)
      ? "Resume"
      : "Start Visit";
  }

  getPsmAssigned(data) {
    const { agentid, psmList } = this.props;

    return agentid == data.psm__c
      ? "Self"
      : HelperService.findMatchingKeyValueInList(
          psmList,
          "id",
          data.psm__c,
          "name"
        ) || "Self";
  }

  show(data) {
    const { showObjectiveModal } = this.props;
    showObjectiveModal({ visit: data });
  }

  // openOrderModal() {
  //   // const { leadScreen, id1,  data1,  visits, executeVisitData, form, lead, } = this.props;

  //   return this.props.openModalTwo({
  //     content2: (
  //       <AddExpOrder
  //         onClose={() => {
  //           this.props.closeModalTwo();
  //         }}
  //         data={visits ? id1 : this.getSupplyQtyValue()}
  //         visits={visits}

  //       />
  //     ),
  //     heading2: "Expected Order",
  //     bodyFlexHeight2: 1,
  //   });
  // }

  getCardNode(data) {
    const {
      isASM,
      psmList,
      agentid,
      openModal,
      pressEndVisit,
      pressEditVisit,
      pressStartVisit,

      pressCancelVisit,
      executeVisitData,
      categoryRatingMapping,
      startVisitLoader,
      endVisitLoader,
    } = this.props;
    console.log("data", data);
    return (
      <VisitCardNew
        visitData={data}
        orderData={data}
        onPressMenu={() => {
          this.props.openModal({
            content3: (
              <VisitReasonModal
                onClose={() => {
                  closeModal();
                }}
              />
            ),
            heading3: "END DISCUSISON",
            bodyFlexHeight3: 0.8,
          });
        }}
        onPressMenu1={() => {
          this.props.openModal({
            content3: (
              <MappedInfluencers
                onClose={() => {
                  closeModal();
                }}
              />
            ),
            heading3: "MAPPED INFLUENCERS",
            bodyFlexHeight3: 0.8,
          });
        }}
        onPressMenu2={() => {
          this.props.openModal({
            content3: (
              <Modal
                onClose={() => {
                  closeModal();
                }}
              />
            ),
            heading3: "RETAILER 360",
            bodyFlexHeight3: 0.8,
          });
        }}
      />
    );
  }

  filterResults(list) {
    let searchFilters = this.props.searchFilters;

    let filteredList = HelperService.sortListFilter(
      list,
      "customer_name__c",
      "ASC"
    );
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "Area__c",
      searchFilters["beat"]
    );

    // filteredList =HelperService.searchTextListFilter(filteredList, 'Id', 'a01O000000uaIVHIA2', );
    // filteredList =HelperService.searchTextListFilter(filteredList, 'Beat__c', searchFilters['psm__c'], );
    return filteredList;
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: -10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
    );
  };

  render() {
    const {
      token,
      agentid,
      visitsDisplayList,
      visitsStorageList,
      visitsAction,
      fetchVisitsDisplayListLoader,
      searchFilters,
      openVisitsAction,
      closeVisitsAction,
      filteredDisplayData,
      isObjModalVisible,
      hideObjectiveModal,
    } = this.props;

    let visibleNode = [];

    if (visitsDisplayList && visitsDisplayList.length) {
      let searchedFilteredList = this.filterResults(visitsDisplayList);
      console.log("searchedFilteredList",searchedFilteredList);
      if (searchedFilteredList.length) {
        visibleNode = (
          <FlatList
            data={searchedFilteredList}
            style={{ minHeight: hp("70%") , }}
            // contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
            // ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item }) => this.getCardNode(item)}
            // onRefresh={() => this.getVisitsDisplayListCall()}
            // refreshing={fetchVisitsDisplayListLoader}
            // keyExtractor={(item) => item.pg_id__c}
          />
        );
      } else {
        visibleNode = (
          <NoDataFound text={"No Visits for selected filter."}></NoDataFound>
        );
      }
    } else if (fetchVisitsDisplayListLoader) {
      visibleNode = <Loading />;
    } else if (
      filteredDisplayData &&
      !filteredDisplayData.length &&
      !fetchVisitsDisplayListLoader
    ) {
      visibleNode = (
        <NoDataFound text={"No Visits for this date."}>
          <GenericIcon
            name={"refresh"}
            show={true}
            onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: Colors.button,
              fontSize: 35,
              alignSelf: "center",
              padding: 10,
            }}
          />
        </NoDataFound>
      );
    }

    return (
      <>
        <ImageBackground
          style={Style.imgBackground}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          <HeaderNew
            title={"VISIT EXECUTION"}
            buttonTitle={"SELECT USER"}
            buttonTitleTwo={"ADD VISIT"}
            iconTwoName={"text-box-plus-outline"}
            onPress={() => {
              this.props.openModal({
                content3: (
                  <SelectUserModal
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "SELECT USER",
                bodyFlexHeight3: 0.8,
              });
            }}
            onPressTwo={() => {
              NavigationService.navigate("AddPlannedVisitsScreen");
            }}
            fontAwesome={true}
          />

          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ left: "14%", marginTop: "4%" }}>
                <GenericIcon
                  name={"chevron-left-circle-outline"}
                  style={{
                    fontSize: wp("6.9%"),
                    color: "grey",
                    alignSelf: "center",
                    paddingTop: "0.5%",
                    elevation: 25,
                  }}
                  show={true}
                  onPress={() => NavigationService.goback()}
                  // onPress={() => this.setState({ mount7: this.state.mount7 == false })}
                />
              </View>

              <View
                style={{
                  borderColor: "grey",
                  borderWidth: 1,
                  width: wp("74%"),
                  borderRadius: 8,
                  marginLeft: "3.5%",
                  height: "64%",
                  marginTop: "4%",
                }}
              >
                <SearchBar ContainerStyles={Style.searchContainer} />
              </View>
            </View>

            <TouchableOpacity
              style={{ ...Style.button }}

              //  this.props.clear();
              // onPress={() => this.submit()}
            >
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
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 3,
                    fontSize: 30,
                    paddingRight: 8,
                  }}
                >
                  {"07"}
                </Text>
              </LinearGradient>
              {/* <Text style={{ fontSize: 15, color:"white",fontFamily: "HelveticaNeue_CondensedBold" }}>
                {" "}
                Forgot Password ?
              </Text> */}
            </TouchableOpacity>
          </View>
          {/* <View 
                  style={{
                  width:"40%",
                  height:"4%",
                  backgroundColor:"white"
                    
                    // borderRightColor: "transparent",
                    // borderStyle: "solid",
    }}>
<Text style={{fontFamily: "HelveticaNeue_CondensedBold",fontSize:13,left:"12%",fontWeight:"bold"}}>{"VISIT EXECUTION"}</Text>
                  {/* </Card> */}
          {/* </View> */}
          {/* {visibleNode} */}
          {/* <ScrollView style={{backgroundColor:"transparent",opacity:0}}> */}

          {/* <Card style={{elevation:10,backgroundColor:"#9B1C26",width:"93%",alignSelf:"center",marginTop:"5%",borderRadius:10}}> */}
          <VisitMainCard 
          onExpansion={() => {!this.props.showDescription ? this.props.getShowDescription(): this.props.getHideDescription()}} 
          showButton={this.props.showDescription}
          // {this.state.mount ? showButton :[]}
          />

{this.props.showDescription ?  
<View style={{marginTop:hp("-5%")}}>
   
          <VisitCardNew
          onPressStart={()=>{
            this.props.openModal({
              content3: (
                <DistanceModal
                  onClose={() => {
                    closeModal();
                  }}
                />
              ),
              heading3: "LOCATION CHECK",
              bodyFlexHeight3: 0.8,
            });
          }}
            onPressMenu={() => {
              this.props.openModal({
                content3: (
                  <VisitReasonModal
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "END DISCUSISON",
                bodyFlexHeight3: 0.8,
              });
            }}
            onPressMenu1={() => {
              this.props.openModal({
                content3: (
                  <MappedInfluencers
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "MAPPED INFLUENCERS",
                bodyFlexHeight3: 0.8,
              });
            }}
            onPressMenu2={() => {
              this.props.openModal({
                content3: (
                  <Modal
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "RETAILER 360",
                bodyFlexHeight3: 0.8,
              });
            }}
          />
          </View>
          : []}
          {/* <View style={{ ...Style.container, marginTop: "15%" }}>
            <View style={{ ...Style.shape_container, flexDirection: "row", marginLeft: "5%" }}>

              <View style={Style.cropCard}>

              </View>
              <View style={Style.cropCard1} />


            </View>


            <View
              style={{
                borderWidth: 1,
                borderColor: "white",
                marginTop: "-1.5%",
                width: "26%",
                marginLeft: "63%"
              }} />


          </View>
          <GenericIcon
            name={"chevron-down"}
            style={{
              color:
                Colors.primary,
              marginTop: hp("-3%"),
              fontSize: hp("4.5%"),

              marginLeft: wp("90%"),
              backgroundColor: "white",
              borderRadius: 60,
              right: "2%",
              width: "9%",
              paddingLeft: 1,
              height: "5%",
              paddingTop: 0,


            }}
            show={true}
          />
          <Text style={{ fontFamily: "HelveticaNeue_CondensedBold", top: "-6%", left: "14%", fontWeight: "bold", zIndex: 10000, color: "white" }}>{"DEALER"}</Text>
          <Text style={{ fontFamily: "HelveticaNeue_CondensedBold", top: "-9%", left: "47%", fontWeight: "bold", zIndex: 10000 }}>{"03"}</Text> */}

          {/* <View style={{ alignSelf: "center",marginTop:"13%" }}>
            <LinearGradient colors={["#2d2d2d", "#575757", "#a3a3a3"]} style={{
              borderRadius: 13, height: 43, width: 290, opacity: 0.9, left: "10%", borderBottomRightRadius: 0, borderTopRightRadius: 35, borderTopLeftRadius: 80, borderWidth: 1, borderBottomColor: "transparent",
             
            }}
              start={{ x: 0.2, y: 2.9 }}
              end={{ x: 1, y: 0 }} >
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text
                  numberOfLines={1}
                  style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "3%", fontWeight: "bold", color: "#f8622d", top: "3.5%", fontSize: wp("2.3%") }}>{"PJP RETAILER"}</Text>

                <Text
                  numberOfLines={1}
                  style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "3%", fontWeight: "bold", color: "white", top: "3.5%", fontSize: wp("2.3%") }}>{"|"}</Text>

                <Text
                  numberOfLines={1}
                  style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "3%", fontWeight: "bold", color: "#f8622d", top: "3.5%", fontSize: wp("2.3%") }}>{"PRIME PARTNER"}</Text>

                <Text
                  numberOfLines={1}
                  style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "3%", fontWeight: "bold", color: "white", top: "3.5%", fontSize: wp("2.3%") }}>{"|"}</Text>

                <Text
                  numberOfLines={1}
                  style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "3%", fontWeight: "bold", color: "white", top: "3.5%", fontSize: wp("2.3%") }}>{"TELESALES"}</Text>

              </View>
              <LinearGradient colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
                style={{ borderRadius: 16, height: 205, width: 370, opacity: 0.9, right: "28%", marginTop: "4.7%", elevation: 25, borderWidth: 1, shadowColor: "black", shadowOffset: { width: 20, height: 20 } }}

                start={{ x: 0.4, y: 0.4 }}
                end={{ x: 0.9, y: 1.7 }} >
                <LinearGradient
                  colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1.5 }}
                  

                  style={{ height: 152, width: 360, opacity: 0.8, alignSelf: "center", marginTop: "1%", borderRadius: 8, borderBottomWidth: 0.6, borderBottomColor: "lightgrey", borderBottomLeftRadius: 7, borderBottomRightRadius: 7, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderWidth: 0.6, borderColor: "lightgrey" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <GenericIcon
                      name={"circle"}
                      style={{
                        color: "#48d30a",
                        marginTop: hp("1.5%"),
                        fontSize: hp("3%"),

                        marginLeft: wp("2.5%"),
                        borderRadius: 60,
                        elevation: 0.6,
                        width: "6%",
                        height:"52%",


                      }}
                      show={true}
                    />

                    <Text
                      numberOfLines={1}
                      style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "3%", fontWeight: "bold", color: "#f8622d", top: "3.5%" }}>{"SHAHID ALI HASMULLAH KHAN"}</Text>
                    <GenericIcon
                      name={"auto-delete"}
                      style={{
                        color: "#cccccc",
                        marginTop: hp("1.5%"),
                        fontSize: hp("4%"),

                        marginLeft: wp("3%"),
                        borderRadius: 60,
                        elevation: 0.6,
                      


                      }}
                  
                    />




                  </View>

                  <Text
                    numberOfLines={1}
                    style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "12%", color: "white", marginTop: "-2.5%", fontSize: 12 }}>{"5101/00001"}</Text>

                  <Text
                    numberOfLines={1}
                    style={{ fontFamily: "HelveticaNeue_CondensedBold", marginLeft: "12%", color: "white", marginTop: "0.2%", fontSize: 12, }}>{"20/4 Taratala Road, Kolkata"}</Text>

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
                      marginTop: "6%",
                      marginBottom: 0,
                      elevation: 0,

                    }}
                  >
                    <TouchableOpacity
                     
                      style={{ flexDirection: "row", height: 40, flex: 1 }}
                    >
                      <View
                        style={{
                          width: wp("9"),
                          alignSelf: "center",
                          
                        }}
                      >
                        <GenericIcon
                          show={true}
                          style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            marginTop: 10,
                            color: "white",
                          }}
                          name={"ballot-outline"}
                        />
                        <View
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: wp("-1%"),
                            marginTop: hp("1"),
                          }}
                        >
                          <Text style={{ fontSize: 8, width: 45, textAlign: "center", color: "white" }}>CALL {'\n'} CONTACT</Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    
                      style={{ flexDirection: "row", height: 40, flex: 1 }}
                    >
                      <View
                        style={{
                          width: wp("9"),
                          alignSelf: "center",
                        
                        }}
                      >
                        <FontAwesome5
                          name={"user-friends"}
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
                          <Text style={{ fontSize: 8, width: 90, textAlign: "center", color: "white" }}>VIEW {'\n'} LOCATION</Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    
                      style={{ flexDirection: "row", height: 40, flex: 1 }}
                    >
                      <View
                        style={{
                          width: wp("9"),
                          alignSelf: "center",
                         
                        }}
                      >
                        <FontAwesome5
                          style={{
                            fontSize: 23,
                            fontWeight: "bold",
                            marginTop: 9,
                            color: "white"

                          }}
                          name={"users"}
                        />
                        <View
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: wp("-2%"),
                            marginTop: hp("1"),
                          }}
                        >
                          <Text style={{ fontSize: 8, width: 90, textAlign: "center", color: "white" }}>
                            {"MAPPED INFLUENCERS"}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                     
                      style={{ flexDirection: "row", height: 40, flex: 1 }}
                    >
                      <View
                        style={{
                          width: wp("9"),
                          alignSelf: "center",
                         
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 23,
                        
                            marginTop: 5,
                            color: "white",
                          }}>
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
                          <Text style={{ fontSize: 8, width: "70%", textAlign: "center", color: "white" }}>
                            {"OPEN LEADS"}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                     
                      style={{ flexDirection: "row", height: 40, flex: 1 }}
                    >
                      <View
                        style={{
                        
                          alignSelf: "center",
                        
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 23,
                          
                            marginTop: 5,
                            color: "white",
                          }}>
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
                          <Text style={{ fontSize: 8, width: "70%", textAlign: "center", color: "white" }}>
                            {"MTD|YTD VISIT"}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                  </View>
                 
                </LinearGradient>

                <View style={{flexDirection:"row",zIndex:30,marginTop:"1.8%",left:"6%"}}>
<TouchableOpacity
           style={{ ...ApplicationStyles.formButton,
            alignSelf: 'center',
            marginTop: hp('0%'),
            height: hp('4%'),
            width:wp('35.5%'),
            elevation:18,
            borderRadius:11,
            paddingBottom:13,zIndex:50,
          borderWidth:2}}
           
    
      onPress={() => this.submit()}

           
             
            >
                <LinearGradient colors={["#333333","#333333"]} 
                 start={{ x: 0, y: 0.2 }}
        end={{ x: 0., y: 0.7 }}
      
        style={{height:28,width:142,left:"0%",borderRadius:10,opacity:0.8}}>
            <Text style={{fontFamily: "HelveticaNeue_CondensedBold",color:"white",fontWeight:"bold",alignSelf:"center",paddingVertical:4,fontSize:13}}>{"START DISCUSSION"}</Text>
        </LinearGradient>
            
            </TouchableOpacity>

                  <TouchableOpacity

style={{ ...ApplicationStyles.formButton,
  alignSelf: 'center',
  marginTop: hp('0%'),
  height: hp('4%'),
  width:wp('35.5%'),
  elevation:18,
  borderRadius:11,
  paddingBottom:13,zIndex:50,
borderWidth:2,
marginLeft:"14%"}}
           
     
      onPress={() => this.submit()}

           
             
            >
                <LinearGradient colors={["#333333","#333333"]} 
                 start={{ x: 0, y: 0.2 }}
        end={{ x: 0., y: 0.7 }}
      
        style={{height:28,width:142,left:"0%",borderRadius:10,opacity:0.8}}>
            <Text style={{fontFamily: "HelveticaNeue_CondensedBold",color:"white",fontWeight:"bold",alignSelf:"center",paddingVertical:4,fontSize:13}}>{"END DISCUSSION"}</Text>
        </LinearGradient>
           
            </TouchableOpacity>

                </View>

              </LinearGradient>

            </LinearGradient>

          </View> */}

          {/* </View> */}

          {/* <View style={{...Style.firstView,marginTop:"20%"}}>

       
        <View
              style={{
                backgroundColor:  "#b7c8db",
                width: "100%",
                height:  hp("8%"),
                flexDirection: "row",
                borderWidth:1,
                borderColor:Colors.primary,
                borderRadius:10,
              
                
              }}
            >
             */}

          {/* <View
                  ref={this.accordian}
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: hp("0"),
                    }}
                  >
                    <GenericIcon
                      name={"person"}
                      style={{
                       
                         color:  Colors.primary,
                        fontSize: hp("4%"),
                        fontWeight: "bold",
                        marginLeft: wp("2%"),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: wp("4.5%"),
                        marginLeft: wp("3%"),
                        fontFamily: ApplicationStyles.textMsgFont,
                        color: 
                           Colors.subtitle,
                      }}
                    >
                        {"Dealer"} */}
          {/* {`* (${
                      form && form.Contact_data
                        ? JSON.stringify(form?.Contact_data?.length)
                        : form?.contact_value?.length
                    })`} */}
          {/* </Text>
                  </View>
                  <TouchableOpacity
                  onPress={() => this.setState({mount: !this.state.mount })} */}
          {/* //   onPress={() => {
                   
                   
                //     return openModal({
                //       content: <AddContactModal id={"Add Contact"} />,
                //       heading: "Add Contact",
                //       // close:this.clearData(),
                //       bodyFlexHeight: 0.7,
                //     });
                // }}
                  style={{
                    width: wp("20%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >

{ this.state.mount ? (
            <GenericIcon
            name={"chevron-up"}
            style={{
              color: 
                Colors.white,
              marginTop: hp("0%"),
              fontSize: hp("3.4%"),
              fontWeight: "bold",
              marginLeft: wp("3"),
              backgroundColor:  Colors.primary,
              borderRadius: 400,
            }}
            show={true}
          />
           
          ) : (
            <GenericIcon
            name={"chevron-down"}
            style={{
              color: 
                Colors.white,
              marginTop: hp("0%"),
              fontSize: hp("3.4%"),
              fontWeight: "bold",
              marginLeft: wp("3"),
              backgroundColor:  Colors.primary,
              borderRadius: 400,
            }}
            show={true}
          />
            
          )} */}
          {/* <GenericIcon
                    name={"arrow-drop-down"}
                    style={{
                      color: 
                        Colors.white,
                      marginTop: hp("0%"),
                      fontSize: hp("3.4%"),
                      fontWeight: "bold",
                      marginLeft: wp("3"),
                      backgroundColor:  Colors.primary,
                      borderRadius: 400,
                    }} */}
          {/* /> */}
          {/* </TouchableOpacity>
                </View>
              </View>

        </View> */}
          {/* { this.state.mount  ? visibleNode:([])} */}
          <View style={{ ...Style.firstView, marginTop: "180%" }}>
            <View
              style={{
                backgroundColor: "#e0e6e2",
                width: "100%",
                height: hp("8%"),
                flexDirection: "row",
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 10,
              }}
            >
              {/* <View
                style={{...Style.firstView1,backgroundColor:"white"}
                 
                }
              ></View> */}

              <View
                ref={this.accordian}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: hp("0"),
                  }}
                >
                  <GenericIcon
                    name={"person"}
                    style={{
                      color: Colors.primary,
                      fontSize: hp("4%"),
                      fontWeight: "bold",
                      marginLeft: wp("2%"),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: wp("4.5%"),
                      marginLeft: wp("3%"),
                      fontFamily: ApplicationStyles.textMsgFont,
                      color: Colors.subtitle,
                    }}
                  >
                    {"Retailer"}
                    {/* {`* (${
                      form && form.Contact_data
                        ? JSON.stringify(form?.Contact_data?.length)
                        : form?.contact_value?.length
                    })`} */}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({ mount1: !this.state.mount1 })}
                  //   onPress={() => {

                  //     return openModal({
                  //       content: <AddContactModal id={"Add Contact"} />,
                  //       heading: "Add Contact",
                  //       // close:this.clearData(),
                  //       bodyFlexHeight: 0.7,
                  //     });
                  // }}
                  style={{
                    width: wp("20%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {this.state.mount1 ? (
                    <GenericIcon
                      name={"chevron-up"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  ) : (
                    <GenericIcon
                      name={"chevron-down"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  )}
                  {/* <GenericIcon
                    name={"arrow-drop-down"}
                    style={{
                      color: 
                        Colors.white,
                      marginTop: hp("0%"),
                      fontSize: hp("3.4%"),
                      fontWeight: "bold",
                      marginLeft: wp("3"),
                      backgroundColor:  Colors.primary,
                      borderRadius: 400,
                    }} */}
                  {/* /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {this.state.mount1 ? visibleNode : []}
          <View style={Style.firstView}>
            <View
              style={{
                backgroundColor: "#cde4e2",
                width: "100%",
                height: hp("8%"),
                flexDirection: "row",
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 10,
              }}
            >
              {/* <View
                style={{...Style.firstView1,backgroundColor:"white"}
                 
                }
              ></View> */}

              <View
                ref={this.accordian}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: hp("0"),
                  }}
                >
                  <GenericIcon
                    name={"person"}
                    style={{
                      color: Colors.primary,
                      fontSize: hp("4%"),
                      fontWeight: "bold",
                      marginLeft: wp("2%"),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: wp("4.5%"),
                      marginLeft: wp("3%"),
                      fontFamily: ApplicationStyles.textMsgFont,
                      color: Colors.subtitle,
                    }}
                  >
                    {"Influencer"}
                    {/* {`* (${
                      form && form.Contact_data
                        ? JSON.stringify(form?.Contact_data?.length)
                        : form?.contact_value?.length
                    })`} */}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({ mount2: !this.state.mount2 })}
                  //   onPress={() => {

                  //     return openModal({
                  //       content: <AddContactModal id={"Add Contact"} />,
                  //       heading: "Add Contact",
                  //       // close:this.clearData(),
                  //       bodyFlexHeight: 0.7,
                  //     });
                  // }}
                  style={{
                    width: wp("20%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {this.state.mount2 ? (
                    <GenericIcon
                      name={"chevron-up"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  ) : (
                    <GenericIcon
                      name={"chevron-down"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  )}
                  {/* <GenericIcon
                    name={"arrow-drop-down"}
                    style={{
                      color: 
                        Colors.white,
                      marginTop: hp("0%"),
                      fontSize: hp("3.4%"),
                      fontWeight: "bold",
                      marginLeft: wp("3"),
                      backgroundColor:  Colors.primary,
                      borderRadius: 400,
                    }} */}
                  {/* /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {this.state.mount2 ? visibleNode : []}
          <View style={{ ...Style.firstView, marginBottom: "0%" }}>
            <View
              style={{
                backgroundColor: "#c0c0c1",
                width: "100%",
                height: hp("8%"),
                flexDirection: "row",
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 10,
              }}
            >
              {/* <View
                style={{...Style.firstView1,backgroundColor:"white"}
                 
                }
              ></View> */}

              <View
                ref={this.accordian}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: hp("0"),
                  }}
                >
                  <GenericIcon
                    name={"person"}
                    style={{
                      color: Colors.primary,
                      fontSize: hp("4%"),
                      fontWeight: "bold",
                      marginLeft: wp("2%"),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: wp("4.5%"),
                      marginLeft: wp("3%"),
                      fontFamily: ApplicationStyles.textMsgFont,
                      color: Colors.subtitle,
                    }}
                  >
                    {"Scouting"}
                    {/* {`* (${
                      form && form.Contact_data
                        ? JSON.stringify(form?.Contact_data?.length)
                        : form?.contact_value?.length
                    })`} */}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({ mount3: !this.state.mount3 })}
                  //   onPress={() => {

                  //     return openModal({
                  //       content: <AddContactModal id={"Add Contact"} />,
                  //       heading: "Add Contact",
                  //       // close:this.clearData(),
                  //       bodyFlexHeight: 0.7,
                  //     });
                  // }}
                  style={{
                    width: wp("20%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {this.state.mount3 ? (
                    <GenericIcon
                      name={"chevron-up"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  ) : (
                    <GenericIcon
                      name={"chevron-down"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  )}
                  {/* <GenericIcon
                    name={"arrow-drop-down"}
                    style={{
                      color: 
                        Colors.white,
                      marginTop: hp("0%"),
                      fontSize: hp("3.4%"),
                      fontWeight: "bold",
                      marginLeft: wp("3"),
                      backgroundColor:  Colors.primary,
                      borderRadius: 400,
                    }} */}
                  {/* /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {this.state.mount3 ? visibleNode : []}

          <View style={{ ...Style.firstView, marginBottom: "0%" }}>
            <View
              style={{
                backgroundColor: "#c0c0c1",
                width: "100%",
                height: hp("8%"),
                flexDirection: "row",
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 10,
              }}
            >
              {/* <View
                style={{...Style.firstView1,backgroundColor:"white"}
                 
                }
              ></View> */}

              <View
                ref={this.accordian}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: hp("0"),
                  }}
                >
                  <GenericIcon
                    name={"person"}
                    style={{
                      color: Colors.primary,
                      fontSize: hp("4%"),
                      fontWeight: "bold",
                      marginLeft: wp("2%"),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: wp("4.5%"),
                      marginLeft: wp("3%"),
                      fontFamily: ApplicationStyles.textMsgFont,
                      color: Colors.subtitle,
                    }}
                  >
                    {"Distributor"}
                    {/* {`* (${
                      form && form.Contact_data
                        ? JSON.stringify(form?.Contact_data?.length)
                        : form?.contact_value?.length
                    })`} */}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({ mount4: !this.state.mount4 })}
                  //   onPress={() => {

                  //     return openModal({
                  //       content: <AddContactModal id={"Add Contact"} />,
                  //       heading: "Add Contact",
                  //       // close:this.clearData(),
                  //       bodyFlexHeight: 0.7,
                  //     });
                  // }}
                  style={{
                    width: wp("20%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {this.state.mount4 ? (
                    <GenericIcon
                      name={"chevron-up"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  ) : (
                    <GenericIcon
                      name={"chevron-down"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  )}
                  {/* <GenericIcon
                    name={"arrow-drop-down"}
                    style={{
                      color: 
                        Colors.white,
                      marginTop: hp("0%"),
                      fontSize: hp("3.4%"),
                      fontWeight: "bold",
                      marginLeft: wp("3"),
                      backgroundColor:  Colors.primary,
                      borderRadius: 400,
                    }} */}
                  {/* /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* { this.state.mount4  ? visibleNode:([])} */}

          <View style={{ ...Style.firstView, marginBottom: "0%" }}>
            <View
              style={{
                backgroundColor: "#c0c0c1",
                width: "100%",
                height: hp("8%"),
                flexDirection: "row",
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 10,
              }}
            >
              {/* <View
                style={{...Style.firstView1,backgroundColor:"white"}
                 
                }
              ></View> */}

              <View
                ref={this.accordian}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: hp("0"),
                  }}
                >
                  <GenericIcon
                    name={"person"}
                    style={{
                      color: Colors.primary,
                      fontSize: hp("4%"),
                      fontWeight: "bold",
                      marginLeft: wp("2%"),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: wp("4.5%"),
                      marginLeft: wp("3%"),
                      fontFamily: ApplicationStyles.textMsgFont,
                      color: Colors.subtitle,
                    }}
                  >
                    {"Task"}
                    {/* {`* (${
                      form && form.Contact_data
                        ? JSON.stringify(form?.Contact_data?.length)
                        : form?.contact_value?.length
                    })`} */}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({ mount5: !this.state.mount5 })}
                  //   onPress={() => {

                  //     return openModal({
                  //       content: <AddContactModal id={"Add Contact"} />,
                  //       heading: "Add Contact",
                  //       // close:this.clearData(),
                  //       bodyFlexHeight: 0.7,
                  //     });
                  // }}
                  style={{
                    width: wp("20%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {this.state.mount5 ? (
                    <GenericIcon
                      name={"chevron-up"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  ) : (
                    <GenericIcon
                      name={"chevron-down"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  )}
                  {/* <GenericIcon
                    name={"arrow-drop-down"}
                    style={{
                      color: 
                        Colors.white,
                      marginTop: hp("0%"),
                      fontSize: hp("3.4%"),
                      fontWeight: "bold",
                      marginLeft: wp("3"),
                      backgroundColor:  Colors.primary,
                      borderRadius: 400,
                    }} */}
                  {/* /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* { this.state.mount5  ? visibleNode:([])} */}

          <View style={{ ...Style.firstView, marginBottom: "5%" }}>
            <View
              style={{
                backgroundColor: "#c0c0c1",
                width: "100%",
                height: hp("8%"),
                flexDirection: "row",
                borderWidth: 1,
                borderColor: Colors.primary,
                borderRadius: 10,
              }}
            >
              {/* <View
                style={{...Style.firstView1,backgroundColor:"white"}
                 
                }
              ></View> */}

              <View
                ref={this.accordian}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: hp("0"),
                  }}
                >
                  <GenericIcon
                    name={"person"}
                    style={{
                      color: Colors.primary,
                      fontSize: hp("4%"),
                      fontWeight: "bold",
                      marginLeft: wp("2%"),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: wp("4.5%"),
                      marginLeft: wp("3%"),
                      fontFamily: ApplicationStyles.textMsgFont,
                      color: Colors.subtitle,
                    }}
                  >
                    {"Enrollment"}
                    {/* {`* (${
                      form && form.Contact_data
                        ? JSON.stringify(form?.Contact_data?.length)
                        : form?.contact_value?.length
                    })`} */}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({ mount6: !this.state.mount6 })}
                  //   onPress={() => {

                  //     return openModal({
                  //       content: <AddContactModal id={"Add Contact"} />,
                  //       heading: "Add Contact",
                  //       // close:this.clearData(),
                  //       bodyFlexHeight: 0.7,
                  //     });
                  // }}
                  style={{
                    width: wp("20%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {this.state.mount6 ? (
                    <GenericIcon
                      name={"chevron-up"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        marginLeft: wp("3"),
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  ) : (
                    <GenericIcon
                      name={"chevron-down"}
                      style={{
                        color: Colors.white,
                        marginTop: hp("0%"),
                        fontSize: hp("3.4%"),
                        fontWeight: "bold",
                        backgroundColor: Colors.primary,
                        borderRadius: 400,
                      }}
                      show={true}
                    />
                  )}
                  {/* <GenericIcon
                    name={"arrow-drop-down"}
                    style={{
                      color: 
                        Colors.white,
                      marginTop: hp("0%"),
                      fontSize: hp("3.4%"),
                      fontWeight: "bold",
                      marginLeft: wp("3"),
                      backgroundColor:  Colors.primary,
                      borderRadius: 400,
                    }} */}
                  {/* /> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* { this.state.mount6  ? visibleNode:([])} */}
          {/* </ScrollView> */}

          {/* <Visit
          onPressStartVisit={() => {
         
            Alert.alert(
              '',
              'Do you want to create a lead?',
            [
              {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Yes', onPress: () => 
             { 
                 NavigationService.navigate('ScoutingVisitInfo')
             } 
            },
            ],
            {cancelable: false},
          );
          }}/> */}

          {visitsAction ? (
            <VisitAction
              closeVisitsAction={closeVisitsAction}
              openVisitsAction={openVisitsAction}
            />
          ) : (
            []
          )}

          <ObjectiveModal
            isVisible={isObjModalVisible}
            onCloseModal={() => hideObjectiveModal()}
          />

          {/* <TouchableOpacity
          style={visitsAction ? Style.plusIcon : Style.plusIcon}
          onPress={() => {
            visitsAction ? closeVisitsAction() : openVisitsAction();
          }}
        >
          <GenericIcon
            name={visitsAction ? "remove" : "add"}
            style={
              visitsAction
                ? { color: Colors.white, fontSize: 45, alignSelf: "center" }
                : { color: Colors.white, fontSize: 45, alignSelf: "center" }
            }
          />
        </TouchableOpacity> */}
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
    showDescription: state.visits.showDescription,
    hideDescription: state.visits.hideDescription,
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
  // openModal: (params) => dispatch(CommonActions.openModal(params)),
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

  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),

  getShowDescription: (params) => dispatch(VisitsActions.getShowDescription(params)),
  getHideDescription: (params) => dispatch(VisitsActions.getHideDescription(params)),

  // closeModal: (params) => dispatch(CommonActions.closeModal(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitsDisplayScreen);
