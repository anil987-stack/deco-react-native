import { View, Text } from "native-base";
import React, { Component } from "react";
import SearchableDropdown from "App/Components/SearchableDropdown";
import CircularProgressBar from "App/Components/CircularProgressBar";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import SearchBar from "App/Components/SearchBar";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";
import { HeaderNew } from "App/Components/Headerbar/HeaderNew";
import FormBackground from "App/Components/FormInput/FormBackground";
import ProjectInfo from "App/Containers/Menu/Leads/LeadTabs/ProjectInfo";
import ContactInfo from "App/Containers/Menu/Leads/LeadTabs/ContactInfo";
// import LinkCard from "App/Containers/Menu/Leads/LeadTabs/LinkCard";
// import LinkMainCard from "App/Containers/Menu/Leads/LeadTabs/LinkMainCard";

import CommonActions from "App/Stores/Common/Actions";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ApprovedCard from "../EventCards/ApprovedCard";
import Draft from "../EventCards/Draft";
import Pending from "../EventCards/PendingCard";
import Rejected from "../EventCards/Reject";
// import SelectUserModal from "../Visits/VisitsDisplayScreen/SelectUserModal";
class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "APPROVED" };
  }

 

  render() {
    const { data, openModal, closeModal } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <>
        <ImageBackground
          style={{ width: "100%", height: "100%", flex: 1 }}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          <HeaderNew
            title={"EVENT"}
            textStyle={{
              top: hp("-1.8%"),
              marginLeft: wp("-10%"),
              fontSize: wp("4.6%"),
            }}
            onPress={() =>{NavigationService.navigate("NewEvent")}
              // this.props.openModal({
              //   content3: (
              //     <AddDocs
              //       onClose={() => {
              //         closeModal();
              //       }}
              //     />
              //   ),
              //   heading3: "ADD DOCUMENT",
              //   bodyFlexHeight3: 0.8,
              // })
            }
            buttonTitle={"ADD"}
            buttonTitleStyle={{ fontSize: wp("2.75%"), marginTop: hp(".50%"), marginLeft: wp("-8%") }}
            gradientStyle={{ width: 140, marginRight: "2%", top: "-1%" }}
            iconname={"text-box-plus-outline"}
            iconStyle={{ padding: 4, fontSize: wp("6%"),color:"grey"}}
            onpressContainerStyle={{marginLeft:wp("15%")}}

          />



          <View style={{ flexDirection: "row" }}>
            <View style={{ left: wp("3.5%"), marginTop: hp("2.40%") }}>
              <GenericIcon
                name={"chevron-left-circle-outline"}
                style={{
                  fontSize: wp("6.9%"),
                  color: "#bfbfbf",
                  alignSelf: "center",
                  paddingTop: hp(".5%"),
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
                borderWidth: wp(".20%"),
                width: wp("74%"),
                borderRadius: 8,
                marginLeft: wp("4.70%"),
                height: hp("4.25%"),
                marginTop: hp("2.5%"),
              }}
            >
              <SearchBar ContainerStyles={Styles.searchContainer} />
            </View>
          
          </View>
          <View style={{ width: wp("100%"), justifyContent: "center" }}>
            <LinearGradient
              colors={["transparent", Colors.darkRed]}
              start={{ x: 0, y: 0.8 }}
              end={{ x: 0.6, y: 0.7 }}
              style={{
                height: hp("2%"),
                width: wp("15%"),

                // opacity: 0.156,
                marginTop: hp(".5%"),
                alignSelf: "flex-end",
                zIndex: 15,
              }}
            >
              {/* <GenericIcon
                // show={true}
                style={{
                  fontSize: wp("13%"),
                  fontWeight: "bold",
                  marginTop: hp("2%"),
                  color: "white",
                  opacity: 0.3,
                  marginLeft: wp("1%"),
                }}
                name={"arrow-right"}
              /> */}
            </LinearGradient>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                margin: "0%",
                flexDirection: "row",
                // marginTop: hp("-5.7%"),
                width: wp("100%"),
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor:
                      this.state.selectedButton === "APPROVED"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    // NavigationService.navigate("ItemDetail");
                    this.setState({ selectedButton: "APPROVED" });
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "APPROVED"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "APPROVED" ? 0.9 : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    APPROVED
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor:
                      this.state.selectedButton === "DRAFT"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    // NavigationService.navigate("ProjectInfo");
                    this.setState({ selectedButton: "DRAFT" });
                  }}
                >
                  {/* onPress={() => {NavigationService.navigate('StartVisitForm'); this.scrollToIndex(0)}} */}
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "DRAFT"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "DRAFT" ? 0.9 : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    DRAFT
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor: "white",
                    borderTopWidth: 1.8,
                    borderTopColor:
                      this.state.selectedButton === "PENDING"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    <FormBackground />;
                    // NavigationService.navigate("ItemDetail");
                    this.setState({ selectedButton: "PENDING" });
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "PENDING"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "PENDING" ? 0.9 : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    PENDING
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.9,
                    borderColor: "grey",
                    alignItems: "center",
                    justifyContent: "center",
                    width: wp("27%"),
                    height: hp("5.8%"),
                    backgroundColor: "#5d0000",
                    borderRadius: 11,
                    margin: wp("1%"),
                    borderTopColor:
                      this.state.selectedButton === "REJECTED"
                        ? "white"
                        : "#b06060",
                    borderTopWidth: 1.8,
                  }}
                  onPress={() => {
                    // NavigationService.navigate("ItemDetail");
                    this.setState({ selectedButton: "REJECTED" });
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.selectedButton === "REJECTED"
                          ? "white"
                          : "#bf7f7f",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: '"HelveticaNeue_CondensedBold"',
                      opacity:
                        this.state.selectedButton === "REJECTED" ? 0.9 : 0.6,
                      fontSize: wp("2.9%"),
                    }}
                  >
                    REJECT
                  </Text>
                </TouchableOpacity>
              </View>

              
            </ScrollView>
          </View>

          <ScrollView>
            {this.state.selectedButton === "DRAFT" ? (
              <Draft />
            ) : this.state.selectedButton === "PENDING" ? (
              <Pending />
            ) : this.state.selectedButton === "REJECTED" ? (
              <Rejected /> 
            ) : this.state.selectedButton === "APPROVED" ? ( 
              <ApprovedCard />
            ) : (
              []
            )}
          </ScrollView>
        </ImageBackground>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  pjpFilters: state.menu.leadFilters,

  leadlist: state.menu.leadlist,
});
const mapDispatchToProps = (dispatch) => ({
  getlead: (params) => dispatch(MenuActions.GetLead(params)),
  openModal: (params) => dispatch(CommonActions.openModalTwo(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalTwo(params)),
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EventList);

const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("1%"),
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  triangle: {
    width: wp("62.25%"),
    height: hp("0%"),
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: hp("5%"),
    borderLeftWidth: wp("45.5%"),
    borderRightWidth: wp("8.5%"),
    // borderBottomWidth: hp("1%"),
    borderLeftColor: "#5c5c5c",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "#5c5c5c",
    marginTop: hp(" -.10%"),
    // transform: [{ rotate: '180deg' }]
  },
  triangle1: {
    width: wp("60%"),
    height: hp("0%"),
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: hp("4.5%"),
    borderLeftWidth: wp("10%"),
    borderRightWidth: wp("7%"),
    // borderBottomWidth: 50,
    borderLeftColor: "white",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "white",
    marginTop: wp("-9.25%"),
    elevation: 20,
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
});
