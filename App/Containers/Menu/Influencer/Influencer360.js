import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ApplicationStyles, Colors } from "App/Theme";
import { Card } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "App/Services/Utils/HelperService";
import GenericIcon from "App/Components/GenericIcon";
import { Tab, Tabs, Icon } from "native-base";
import NavigationService from "App/Services/NavigationService";
import { connect } from "react-redux";
import RetailersActions from "App/Stores/Retailers/Actions";
import VisitsActions from "App/Stores/Visits/Actions";
import LeadCard from "App/Components/Leads/LeadCard";
import { Headerbar } from "../../../Components/Headerbar";
import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
import { ImageBackground } from "react-native";
import FilterNew from "../../../Components/Filters/FilterNew";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";
import Filter from "App/Containers/Filter/FilterNew";
import Card360 from "./Card360";
import Modal from "./Modal";

class Influencer360 extends Component {
  getSupplyNode() {
    const {
      showCard,
      hideCard,
      cardValue,
      cardStatus,
      dealerVisitList,
      loader1,
      infoForm,
      serviceInfo,
    } = this.props;

    let visibleNode = [];

    // if (serviceInfo && serviceInfo.length) {

    //     let filteredList = serviceInfo;
    //     if (filteredList.length) {
    //         console.log("filteredList",filteredList)
    visibleNode = (
      <FlatList
        // data={filteredList}
        // style={{backgroundColor:"black",}}
        contentContainerStyle={{ paddingBottom: hp("8%"), paddingTop: 10 }}
        // onRefresh={() => this.fetchCall()}
        showsVerticalScrollIndicator={false}
        // keyExtractor={item => (item.sfid)}
        // refreshing={loader1}
        //  onRefresh={() => this.fetchCall()}
        renderItem={({ item }) => <LeadCard />}
      />
    );

    return visibleNode;
  }

  getCombineData() {
    const { teamData, town, territory, taskStatus, leadStatus } = this.props;
    let team = [];
    let Town = [];
    let Territory = [];
    let taskStat = [];
    let status = [];
    let leadQuality = [];
    let site_Fir = [];
    let lead_Type = [];

    const quality = [
      { id: "Premium", name: "Premium", parent: "LEAD STAGE" },
      { id: "Semi Premium", name: "Semi Premium", parent: "LEAD STAGE" },
      { id: "Normal", name: "Normal", parent: "LEAD STAGE" },
      { id: "Not Century", name: "Not Century", parent: "LEAD STAGE" },
    ];
    const fir = [
      { id: "Site Visit", name: "Site Visit", parent: "LEAD STAGE" },
      { id: "Lead", name: "Lead", parent: "LEAD STAGE" },
      { id: "Cold Lead", name: "Cold Lead", parent: "LEAD STAGE" },
      { id: "Drop", name: "Drop", parent: "LEAD STAGE" },
      {
        id: "Lost but future Scope",
        name: "Lost but future Scope",
        parent: "LEAD STAGE",
      },
    ];
    const source = [
      { id: "RLD", name: "RLD", parent: "LEAD STAGE" },
      { id: "PLD", name: "PLD", parent: "LEAD STAGE" },
      { id: "NLD", name: "NLD", parent: "LEAD STAGE" },
    ];
    const type = [
      { id: "Residential", name: "Residential", parent: "LEAD STAGE" },
      { id: "Commercial", name: "Commercial", parent: "LEAD STAGE" },
    ];
    const valList = [
      { id: "true", name: "true", parent: "LEAD STAGE" },
      { id: "false", name: "false", parent: "LEAD STAGE" },
    ];
    const avlList = [
      { id: "Available", name: "Available", parent: "LEAD STAGE" },
      { id: "Non Available", name: "Non Available", parent: "LEAD STAGE" },
    ];
    const leadstage = [
      { id: "DISCUSSION", name: "DISCUSSION", parent: "LEAD STAGE" },
      { id: "ONGOING", name: "ONGOING", parent: "LEAD STAGE" },
      { id: "WON", name: "WON", parent: "LEAD STAGE" },
      { id: "DOEMANT", name: "DOEMANT", parent: "LEAD STAGE" },
      { id: "INACTIVE", name: "INACTIVE", parent: "LEAD STAGE" },
      { id: "LOST", name: "LOST", parent: "LEAD STAGE" },
    ];

    const leadstatus = [
      { id: "DISCUSSION", name: "DISCUSSION", parent: "LEAD STATUS" },
    ];

    const sourceoflead = [
      { id: "DISCUSSION", name: "DISCUSSION", parent: "SOURCE OF LEAD" },
    ];

    const task = [{ id: "DISCUSSION", name: "DISCUSSION", parent: "TASK" }];

    const teams = [{ id: "DISCUSSION", name: "DISCUSSION", parent: "TEAM" }];

    const types = [{ id: "DISCUSSION", name: "DISCUSSION", parent: "TYPE" }];

    let combineData = [];
    combineData = combineData.concat(
      leadstage,
      leadstatus,
      sourceoflead,
      task,
      teams,
      types
    );

    return combineData;
  }

  render() {
    const { openModal, closeModal , openModal1, closeModal1} = this.props;

    let retailers = true;
    let data = this.props.data;
    return (
      <>
        <ImageBackground
          style={Styles.imgBackground}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          <HeaderNew
            title={"INFLUENCER 360°"}
            textStyle={{ top: hp("-1.8%") }}
            // outerStyle={{ borderLeftWidth: 170 }}
            // boxStyle={{ borderLeftWidth: 165, marginTop:hp("-5.35%") }}
            onPress={() => NavigationService.goback()}
            onpressContainerStyle={{
              marginLeft: wp("15%"),
            }}
          />
          <FilterNew
            icon={"filter-alt"}
            onPressSort={() => {
              return openModal1({
                content: (
                  <>
                    <Filter
                      onClose={() => {
                        closeModal1();
                      }}
                      listMain={this.getCombineData()}
                      onChange={(value) => changeFilters(value)}
                      setApply={(value) => {
                        changeFilters({
                          edited_field: "setApply",
                          edited_value: value,
                        });
                      }}
                      // getData={(value) => {
                      //   getlead({
                      //     token: this.props.token,
                      //     id: HelperService.getSFIDFromName(
                      //       HelperService.convertToSearchableListFormat({
                      //         list: teamData,
                      //         id_key: "sfid",
                      //         label_key: "team_member_name__c",
                      //       }),
                      //       value[0],
                      //       "id"
                      //     ),
                      //   });
                      // console.log("val", value);
                      // }}
                      value={"Team"}
                      onreset={() => this.resetPress()}
                    />

                    {/* <View
                      style={{
                        alignSelf: "center",
                        marginBottom: wp("4%"),
                        // marginTop: hp("12%"),
                        // position: 'absolute',
                      }}
                    >
                      <TouchableOpacity
                        style={{ ...Styles.buttons, zIndex: 10 }}
                      >
                        <LinearGradient
                          colors={[Colors.primary, Colors.darkRed]}
                          start={{ x: 0, y: 0.2 }}
                          end={{ x: 0, y: 0.7 }}
                          style={{
                            height: 50,
                            width: 200,
                            borderRadius: 10,
                            alignSelf: "center",
                            marginTop: hp("0.5%"),
                          }}
                        >
                          <Text
                            style={{
                              ...Styles.buttontextStyle,
                              fontFamily: "HelveticaNeue_CondensedBold",
                              color: "white",
                              fontWeight: "bold",
                              alignSelf: "center",
                              paddingVertical: 10,
                              fontSize: 19,
                            }}
                          >
                            {"APPLY"}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View> */}
                  </>
                ),
                heading: "Filter",
                bodyFlexHeight: 0.9,
              });
            }}
            icon1={"sort-ascending"}
            icon2={"calendar-month"}
            searchContainer={Styles.searchBar}
            outerStyle={{ marginTop: hp("1%") }}
          />

          <Card360
            onPressMenu={() => {
              this.props.openModal({
                content3: (
                  <Modal
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "INFLUENCER 360°",
                bodyFlexHeight3: 0.8,
              });
            }}
          />

          {/* <GenericIcon
            name={"refresh"}
            show={true}
            // onPress={() => NavigationService.navigate("LeadScreen")}
            style={{
              color: Colors.button,
              fontSize: 35,
              alignSelf: "center",
              padding: 10,
            }}
          /> */}
        </ImageBackground>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  agentid: state.user.id,
  token: state.user.token,
  orders: state.orders.allOrders,
  supply: state.orders.allSupply,
  serviceInfo: state.retailers.relatedLeadList,
  loader1: state.visits.relatedLeadListLoading,
  infoForm: state.visits.infoForm,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerVisit: (params) => dispatch(RetailersActions.getDealerVisit(params)),
  getInfo: (params) => dispatch(VisitsActions.getInfo(params)),
  getRelatedLead: (params) => dispatch(RetailersActions.getRelatedLead(params)),
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
  openModal1: (params) => dispatch(CommonActions.openModal(params)),
  closeModal1: (params) => dispatch(CommonActions.closeModal(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Influencer360);
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("0%"),
  },
  cardstyle: {
    backgroundColor: Colors.darkRedPink,
    width: wp("100%"),
    top: hp("-1%"),
    height: hp("18%"),
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  title: {
    fontFamily: "Rubik",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    bottom: hp("1%"),
  },
  titleText: {
    color: Colors.black,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 28,
    fontWeight: "bold",
  },

  date: {
    fontSize: 28,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("2%"),
    top: hp("2%"),
  },
  month: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("-0.5%"),
    top: hp("1.5%"),
  },
  head: {
    fontSize: 15,
    fontFamily: "Rubik",
    // left: hp("1%"),
    fontWeight: "bold",
    color: Colors.background,
    top: hp("-1%"),
    // width:wp("15%"),
    position: "absolute",
  },
  head1: {
    fontSize: 14,
    fontFamily: "Rubik",
    left: hp("0%"),
    top: hp("0%"),
  },
  head2: {
    fontSize: 14,
    fontFamily: "Rubik",
    left: hp("-0.4%"),
    top: hp("1.5%"),
    color: Colors.lightGrey,
  },

  ttl: {
    color: Colors.lightGrey,
    fontSize: wp("2.5%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    top: hp("3%"),
    // right: wp("32%"),
    position: "relative",
    // width:wp("20%")
  },
  detail: {
    color: Colors.black,
    fontSize: wp("2.5%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    left: wp("10%"),
    top: hp("3%"),
    position: "relative",
    width: wp("30%"),
    textAlign: "right",
  },
  plusIcon: {
    borderRadius: 50,
    // bottom: 40,
    position: "absolute",
    // left: 10,
    top: hp("75%"),
    left: wp("80%"),
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  searchBar: {
    opacity: 0.2,
  },
});
