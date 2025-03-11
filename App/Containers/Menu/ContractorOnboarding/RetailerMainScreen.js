import { ApplicationStyles, Colors } from "App/Theme";
import { Tab, Tabs, Container, ScrollableTab } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "App/Services/Utils/HelperService";
import _ from "lodash";
import LocalActions from "App/Stores/LocalExpense/Actions";
// import Draft from "./Draft";
// import Pending from "./Pending";
// import Approved from "./Approved";
// import Complete from "./Complete";
import SearchBar from "App/Components/SearchBar";
import { ImageBackground } from "react-native";
import { HeaderNew } from "App/Components/Headerbar/HeaderNew";
import FilterNew from "App/Components/Filters/FilterNew";
import MerchandiserHeader from "../../Merchandiser/MerchandiserHeader";
import DraftCard from "./RetailerTabs/DraftCard";
import PendingCard from "./RetailerTabs/PendingCard";
import ApprovedCard from "./RetailerTabs/ApprovedCard";
import RejectCard from "./RetailerTabs/RejectCard";
// import ApprovalCard from "./Approval";
// import MenuActions from "App/Stores/Menu/Actions";
// import MenuModal from "./MenuModal";
import CommonActions from "App/Stores/Common/Actions";
import ProductActions from "App/Stores/Products/Actions";
import RetailerTabsNew from "./RetailerTabsNew";

class RetailerMainScreen extends Component {
  componentDidMount() {
    const { merchandiseTabFilter } = this.props;
    merchandiseTabFilter("approved");
  }
  getCardNode() {
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
        renderItem={({ item }) => <DraftCard />}
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

  render() {
    const { openModal, closeModal, merchandiseTab } = this.props;
    // let id = this.props.item.id;
    // console.log("kkkkkkkkkkkk",supply)
    let retailers = true;
    let data = this.props.data;
    // console.log("merchandiseTab", merchandiseTab);
    return (
      <>
        <ImageBackground
          style={Styles.imgBackground}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          {/* <View style={{ flex: 1, marginBottom: hp("30%") }}> */}
          <HeaderNew
            title={"RETAILER"}
            buttonTitle={"ADD RETAILER"}
            gradientStyle={{ width: 140, marginRight: "-2%", top: "-1%" }}
            iconname={"text-box-plus-outline"}
            iconStyle={{ padding: 4, fontSize: wp("6%")}}
            onpressContainerStyle={{marginLeft:wp("9%")}}
            onPress={() => NavigationService.navigate("RetailerForm")}
          />
          <FilterNew
            // icon={"filter-alt"}
            // onPressSort={() => {
            //   return openModal({
            //     content: (
            //       <Filter
            //         onClose={() => {
            //           closeModal();
            //         }}
            //         // listMain={this.getCombineData()}
            //         // onChange={(value) => changeFilters(value)}
            //         // setApply={(value) => {
            //         //   changeFilters({
            //         //     edited_field: "setApply",
            //         //     edited_value: value,
            //         //   });
            //         // }}
            //         // getData={(value) => {
            //         //   getlead({
            //         //     token: this.props.token,
            //         //     id: HelperService.getSFIDFromName(
            //         //       HelperService.convertToSearchableListFormat({
            //         //         list: teamData,
            //         //         id_key: "sfid",
            //         //         label_key: "team_member_name__c",
            //         //       }),
            //         //       value[0],
            //         //       "id"
            //         //     ),
            //         //   });
            //         //   console.log("val", value);
            //         // }}
            //         value={"Team"}
            //         // onreset={() => this.resetPress()}
            //       />
            //     ),
            //     heading: "Filter",
            //     bodyFlexHeight: 0.95,
            //   });
            // }}
            // icon1={"sort-ascending"}
            // icon2={"calendar-month"}
            searchContainer={Styles.searchBar}
            outerStyle={{ marginTop: hp("1%") }}
            searchbarStyle={{ width: wp("86%") }}
          />

          {/* <MerchandiserHeader />
           */}
          <RetailerTabsNew />

          {/* <DraftCard
            onPressMenu={() => {
              this.props.openModal({
                content3: (
                  <MenuModal
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "LEAD MENU",
                bodyFlexHeight3: 0.8,
              });
            }}
          /> */}

          {merchandiseTab === "approved" ? <ApprovedCard /> : null}

          {merchandiseTab === "draft" ? <DraftCard /> : null}
          {merchandiseTab === "pending" ? <PendingCard /> : null}
          {/* {merchandiseTab === "approved" ? <ApprovedCard /> : null} */}
          {merchandiseTab === "reject" ? <RejectCard /> : null}
          {/*   {merchandiseTab === "approval" ? (
            <ApprovalCard
              onPressMenu={() => {
                this.props.openModal({
                  content3: (
                    <MenuModal
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "APPROVAL",
                  bodyFlexHeight3: 0.8,
                });
              }}
            />
          ) : null} */}

          {/* {merchandiseTab === "draft" ? <DraftCard /> : null}
          {merchandiseTab === "pending" ? <PendingCard /> : null}
          {merchandiseTab === "approved" ? <ApprovedCard /> : null}
          {merchandiseTab === "reject" ? <RejectCard /> : null}
          {merchandiseTab === "approval" ? (
            <ApprovalCard
              onPressMenu={() => {
                this.props.openModal({
                  content3: (
                    <MenuModal
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "APPROVAL",
                  bodyFlexHeight3: 0.8,
                });
              }}
            />
          ) : null} */}

          {/* 
          <GenericIcon
            name={"refresh"}
            show={true}
            onPress={() => NavigationService.navigate("LeadScreen")}
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
  merchandiseTab: state.products.merchandiseTabFilter,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerVisit: (params) => dispatch(RetailersActions.getDealerVisit(params)),
  getInfo: (params) => dispatch(VisitsActions.getInfo(params)),
  getRelatedLead: (params) => dispatch(RetailersActions.getRelatedLead(params)),
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
  merchandiseTabFilter: (params) =>
    dispatch(ProductActions.merchandiseTabFilter(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerMainScreen);

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
