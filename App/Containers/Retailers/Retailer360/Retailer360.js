import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BackArrowButton from "App/Components/BackArrowButton";
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
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import MenuActions from "App/Stores/Menu/Actions";
import OrdersActions from "App/Stores/Orders/Actions";
// import RelatedLeadCard from "App/Components/VisitExecuteCard/RelatedLeadCard";
import VisitsActions from "App/Stores/Visits/Actions";
import LeadCard from "App/Components/Leads/LeadCard";
import { Headerbar } from "../../../Components/Headerbar";
import { HeaderNew } from "../../../Components/Headerbar/HeaderNew";
import { ImageBackground } from "react-native";
import FilterNew from "../../../Components/Filters/FilterNew";
// import LeadCardNew from "../../../Components/Leads/LeadCardNew";
import CardInfo from '../Retailer360/Card/CardInfo';
import CommonActions from "App/Stores/Common/Actions";
// import MenuModal from "./LeadTabs/MenuModal";
// import Filter from "../../Filter"
// import Style from "./LeadStyle"
import LinearGradient from "react-native-linear-gradient";
import Filter from "App/Containers/Filter/FilterNew";
import Modal from "./Modal";

class Retailer360 extends Component {
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

    //     } else {
    //         visibleNode = <NoDataFound text={'No Supply Found'} />
    //     }
    // } else if (loader1) {
    //     visibleNode = <Loading />
    // } else if (loader1 && !serviceInfo.length && !loader1) {
    //     visibleNode = <NoDataFound text={'No Supply Found'} />
    // }

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
    // team = HelperService.convertToParentListFormat({
    //   list: HelperService.convertToSearchableListFormat({
    //     list: teamData,
    //     id_key: "sfid",
    //     label_key: "team_member_name__c",
    //   }),
    //   parent_key: "Team",
    // });
    // Town = HelperService.convertToParentListFormat({
    //   list: town,
    //   parent_key: "Town",
    // });
    // Territory = HelperService.convertToParentListFormat({
    //   list: HelperService.convertToSearchableListFormat({
    //     list: territory,
    //     id_key: "territory_id",
    //     label_key: "name",
    //   }),
    //   parent_key: "Territory",
    // });
    // taskStat = HelperService.convertToParentListFormat({
    //   list: taskStatus.concat([{ id: "No Task", name: "No Task" }]),
    //   parent_key: "Task",
    // });
    // status = HelperService.convertToParentListFormat({
    //   list: leadStatus,
    //   parent_key: "Status",
    // });
    // leadQuality = HelperService.convertToParentListFormat({
    //   list: quality,
    //   parent_key: "Quality",
    // });
    // site_Fir = HelperService.convertToParentListFormat({
    //   list: fir,
    //   parent_key: "Site_Fir",
    // });
    // lead_Type = HelperService.convertToParentListFormat({
    //   list: type,
    //   parent_key: "Lead_Type",
    // });
    // let dmi = HelperService.convertToParentListFormat({
    //   list: valList,
    //   parent_key: "DMI_Attachment",
    // });
    // let owner = HelperService.convertToParentListFormat({
    //   list: avlList,
    //   parent_key: "Owner_Number",
    // });
    // let leadSource = HelperService.convertToParentListFormat({
    //   list: source,
    //   parent_key: "Source_Type",
    // });
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
      // team,
      // Town,
      // Territory,
      // status,
      // taskStat,
      // leadQuality,
      // site_Fir,
      // lead_Type,
      // dmi,
      // owner,
      // leadSource
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
    const { openModal, closeModal } = this.props;

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
            title={"RETAILER 360°"}
            textStyle={{ top: hp("-1.8%") }}
            onPress={() => NavigationService.goback()}
          />
          <FilterNew
            icon={"filter-alt"}
            onPressSort={() => {
              return openModal({
                content: (
                  <Filter
                    onClose={() => {
                      closeModal();
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
                ),
                heading: "Filter",
                bodyFlexHeight: hp("100%"),
              });
            }}
            icon1={"sort-ascending"}
            icon2={"calendar-month"}
            searchContainer={Styles.searchBar}
            outerStyle={{ marginTop: hp("1%") }}
          />

          <CardInfo
            onPressModal={() => {
              this.props.openModalThree({
                content3: (
                  <Modal
                    onClose={() => {
                      closeModalThree();
                    }}
                  />
                ),
                heading3: "Retailer 360°",
                bodyFlexHeight3: 0.9,
                  headingStyle3:hp("37%")
              });
            }}
          />

          <GenericIcon
            name={"refresh"}
            show={true}
            // onPress={() => NavigationService.navigate("LeadScreen")}
            style={{
              color: Colors.button,
              fontSize: 35,
              alignSelf: "center",
              padding: 10,
            }}
          />
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
  openModalThree: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModalThree: (params) => dispatch(CommonActions.closeModalThree(params)),
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Retailer360);
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
  backarrow: {
    color: Colors.background,
    fontSize: 34,
    paddingRight: 360,
    paddingTop: 15,
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
