import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
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
  Tab,
  Tabs,
  ScrollableTab,
} from "native-base";
import OrderCard from "App/Components/OrderCard";
import RetailersActions from "App/Stores/Retailers/Actions";
import LocalActions from "App/Stores/LocalExpense/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import _ from "lodash";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import NavigationService from "App/Services/NavigationService";
import OrdersActions from "App/Stores/Orders/Actions";
import GenericIcon from "App/Components/GenericIcon";
import { ApplicationStyles, Colors } from "App/Theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PendingCard from "./PendingCard";
import moment from "moment";
import PartialCard from "./PartialCard";
import FullCard from "./FullCard";
import CreatedCard from "./CreatedCard";
import NotCreated from "./NotCreated";
import Blocked from "./Blocked";
// import { Tab, Tabs } from 'native-base';

class DealerOrdersListScreen extends Component {
  componentDidMount() {
    this.getOrders();
  }
  scrollToIndex(index) {
    let distanceToBeScrolled = index * wp("10%");
    if (this.flatListRef) {
      this.flatListRef.scrollTo({
        x: distanceToBeScrolled,
        y: 0,
        animated: true,
      });
    }
  }

  onMonthChange(month) {
    const {
      token,
      selectedRetailer,
      searchFilters,
      changeSearchFilters,
      fetchDealerOrders,
    } = this.props;

    changeSearchFilters({
      edited_field: "selectedMonth",
      edited_value: month,
    });
    let sfid = selectedRetailer.id;
    let monthIndex = moment().format("M") - 1;
    let requestParams = {
      token,
      m: month + 1,
      partyId: selectedRetailer.id,
    };

    fetchDealerOrders(requestParams);
  }

  onYearChange(month) {
    const {
      token,
      selectedRetailer,
      searchFilters,
      changeSearchFilters,
      fetchDealerOrders,
    } = this.props;

    changeSearchFilters({
      edited_field: "selectedYear",
      edited_value: month,
    });

    let sfid = selectedRetailer.id;
    let monthIndex = moment().format("M") - 1;
    let requestParams = {
      token,
      m: searchFilters.selectedMonth
        ? searchFilters.selectedMonth
        : HelperService.getMonthindex(monthIndex),
      partyId: selectedRetailer.id,
    };

    fetchDealerOrders(requestParams);
  }

  getOrders() {
    const {
      selectedRetailer,
      offset,
      limit,
      fetchDealerOrders,
      agentid,
      token,
      searchFilters,
    } = this.props;
    //let type = "SFA";
    let monthIndex = moment().format("M") - 1;
    fetchDealerOrders({
      token,
      m: HelperService.getMonthindex(monthIndex),
      partyId: selectedRetailer.id,
    });
  }

  getCustomerName(id) {
    const { selectedRetailer, retailersList, dealersList } = this.props;

    let type = selectedRetailer.type;
    let list = type == "Retailers" ? retailersList : dealersList;
    let customerName = "";
    list.map((obj) => {
      if (obj.seller.sfid == id) {
        customerName = obj.seller.name;
      }
    });
    return customerName;
  }

  handleOrderPress(item) {
    NavigationService.navigate("OrderInfoScreen", {
      id: item.pg_id__c || item.sfid,
      data: item,
    });
  }

  getCardNode(item) {
    const { token, agentid, repeatOrder, repeatOrderLoader } = this.props;
    //console.log(HelperService.convertStringToDate(item.order_date__c))
    //console.log(HelperService.getCurrentTimestamp()<HelperService.convertStringToDate(item.order_date__c)+3*60*1000 * 60)
    return (
      <OrderCard
        data={item}
        customerName={item.name}
        orderDate={HelperService.dateReadableFormat(item.order_date__c)}
        orderValue={
          HelperService.currencyValue(item.total_payable_amount__c) || " "
        }
        orderNumber={item.name}
        //totalTax={item.total_tax__c}
        show={
          HelperService.getCurrentTimestamp() <
          HelperService.convertStringToDate(item.order_date__c) +
            3 * 60 * 1000 * 60
        }
        dark={false}
        onPress={() => this.handleOrderPress(item)}
        //showReorder={true}
        //repeatOrderLoading={repeatOrderLoader == item.sfid}
        //onClickRepeatOrder={() => repeatOrder({order__c: item.sfid, order_date__c: Date.now(), token, agentid, data: item})}
      />
    );
  }

  render() {
    const { loader, dealerOrders, selectedRetailer, changeType } = this.props;

    const { searchFilters } = this.props;

    let data = selectedRetailer.data;
    let id = selectedRetailer.id;
    let type = selectedRetailer.type;
    let visibleNode = [];
    let orders = [];

    _.map(dealerOrders, (value, key) => {
      if (key == id) {
        orders = dealerOrders[key];
      }
    });

    //_.map(dealerOrders, (value, key) => {
    //if (key == id) {
    //	orders = dealerOrders[key];
    //}
    //});

    if (orders && orders.length) {
      //console.log('orders', orders)
      visibleNode = (
        <FlatList
          data={orders}
          renderItem={({ item }) => this.getCardNode(item)}
          keyExtractor={(item) => item.sfid + item.name}
          onRefresh={() => this.getOrders()}
          refreshing={loader}
        />
      );
    } else if (loader) {
      visibleNode = <Loading />;
    } else if (orders && !orders.length && !loader) {
      visibleNode = <NoDataFound text={"No Orders Found"} />;
    }

    let monthPickerNode = (
      <View style={Styles.monthPicker}>
        <Text style={Styles.dateText}>
          {HelperService.getMonthMappingName(searchFilters["selectedMonth"])}
        </Text>
      </View>
    );

    let yearPickerNode = (
      <View style={Styles.monthPicker}>
        <Text style={Styles.dateText}>{searchFilters["selectedYear"]}</Text>
      </View>
    );

    let visiblePickerNode = [];

    visiblePickerNode = (
      <View
        style={{ flexDirection: "row", width: wp("43%"), marginLeft: "4%" }}
      >
        <TouchableOpacity
          transparent
          onPress={() =>
            this.onMonthChange(
              HelperService.getPreviousMonth(searchFilters["selectedMonth"])
            )
          }
        >
          <GenericIcon
            name={"keyboard-arrow-left"}
            //show={true}
            style={Styles.dateChangeIcon}
          />
        </TouchableOpacity>
        {monthPickerNode}
        <TouchableOpacity
          transparent
          onPress={() =>
            this.onMonthChange(
              HelperService.getNextMonth(searchFilters["selectedMonth"])
            )
          }
        >
          <GenericIcon
            name={"keyboard-arrow-right"}
            //show={true}

            style={Styles.dateChangeIcon}
          />
        </TouchableOpacity>
      </View>
    );

    let visiblePickerNode1 = [];

    visiblePickerNode1 = (
      <View
        style={{ flexDirection: "row", width: wp("43%"), marginLeft: "9%" }}
      >
        <TouchableOpacity
          transparent
          onPress={() => this.onYearChange(searchFilters["selectedYear"] - 1)}
        >
          <GenericIcon
            name={"keyboard-arrow-left"}
            //show={true}
            style={Styles.dateChangeIcon}
          />
        </TouchableOpacity>
        {yearPickerNode}
        <TouchableOpacity
          transparent
          onPress={() => this.onYearChange(searchFilters["selectedYear"] + 1)}
        >
          <GenericIcon
            name={"keyboard-arrow-right"}
            //show={true}
            style={Styles.dateChangeIcon}
          />
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{ flex: 1, marginTop: "-90%" }}>
        {/* <View
          style={{ justifyContent: "space-between", marginBottom: hp("0%") }}
        >
          {visiblePickerNode} */}

          {/* {visiblePickerNode1} */}
        {/* </View> */}
        {/* {visibleNode} */}
        {/* <View style={{height:100,width:200}}> */}
        <Container style={{ borderRadius: 50, padding: 10 }}>
          <Tabs
            locked
            tabBarUnderlineStyle={{
              backgroundColor: Colors.white,
              // width:'20%',
              // marginHorizontal:10,
              marginBottom: 4,
              borderRadius: 5,
            }}
            onChangeTab={({ i }) => changeType(i)}
            style={{ width: wp("100%"), alignSelf: "center" }}
            renderTabBar={() => (
              <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
            )}
          >
            <Tab
              heading="Open"
              tabStyle={Styles.tabHeading}
              activeTabStyle={{ backgroundColor: Colors.primary }}
              textStyle={Styles.tabText}
              activeTextStyle={Styles.tabTextStyle}
            >
              <PendingCard />
            </Tab>
            <Tab
              heading="Delivered"
              tabStyle={Styles.tabHeading}
              textStyle={Styles.tabText}
              activeTabStyle={{ backgroundColor: Colors.primary }}
              activeTextStyle={Styles.tabTextStyle}
            >
              {/* <PartialCard/> */}
            </Tab>
            <Tab
              heading="Pending For Approval"
              tabStyle={Styles.tabHeading}
              textStyle={Styles.tabText}
              activeTabStyle={{ backgroundColor: Colors.primary }}
              activeTextStyle={Styles.tabTextStyle}
            >
              {/* <FullCard/> */}
            </Tab>
            <Tab
              heading="Rejected"
              tabStyle={Styles.tabHeading}
              textStyle={Styles.tabText}
              activeTabStyle={{ backgroundColor: Colors.primary }}
              activeTextStyle={Styles.tabTextStyle}
            >
              {/* <CreatedCard/> */}
            </Tab>
            {/* <Tab
              heading="Not Created"
              tabStyle={Styles.tabHeading}
              textStyle={Styles.tabText}
              activeTabStyle={{ backgroundColor: Colors.primary }}
              activeTextStyle={Styles.tabTextStyle}
            >
             <NotCreated/>
            </Tab> */}
            {/* <Tab
              heading="Blocked"
              tabStyle={Styles.tabHeading}
              textStyle={Styles.tabText}
              activeTabStyle={{ backgroundColor: Colors.primary }}
              activeTextStyle={Styles.tabTextStyle}
            >
              <Blocked/>
            </Tab> */}
          </Tabs>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  dealerOrders: state.retailers.dealerOrders,
  retailersList: state.retailers.retailersList,
  dealersList: state.retailers.dealersList,
  loader: state.retailers.fetchDealerOrdersLoader,
  offset: state.retailers.retailerOrdersOffset,
  limit: state.retailers.retailerOrdersLimit,
  selectedRetailer: state.retailers.selectedRetailer,
  repeatOrderLoader: state.orders.repeatOrderLoader,
  searchFilters: state.retailers.OrderSearchFilters,
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
  updateRetailerLocation: (params) =>
    dispatch(RetailersActions.updateRetailerLocation(params)),
  fetchDealerOrders: (params) =>
    dispatch(OrdersActions.getCustomerPrimaryOrder(params)),
  repeatOrder: (params) => dispatch(OrdersActions.repeatOrder(params)),
  changeSearchFilters: (params) =>
    dispatch(RetailersActions.updateOrderSearchFilters(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealerOrdersListScreen);

const Styles = StyleSheet.create({
  tabUnderLine: {
    backgroundColor: Colors.white,
    width: "28%",
    marginHorizontal: 10,
    marginBottom: 4,
    borderRadius: 5,
  },
  tabHeading: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 0,
  },
  tabText: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4%"),
  },
  tabTextStyle: {
    color: Colors.white,
    fontWeight: "normal",
  },
  container: {
    flexDirection: "row",
  },
  box: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 30,
    marginVertical: 2,
    padding: 15,
    borderRadius: 10,
    position: "relative",
  },
  heading: {
    alignSelf: "center",
    color: Colors.black,
    fontFamily: Platform.OS === "ios" ? "Montserrat-Bold" : "Roboto_bold",
    fontSize: wp("5.5%"),

    marginTop: hp("0%"),
    textTransform: "uppercase",
    marginBottom: hp("1%"),
  },
  header: {
    // alignItems: 'flex-start',
    height: hp("50%"),
    //flexDirection: 'column',
    // justifyContent: 'center',
    //backgroundColor: Colors.white,
    //marginTop: hp('5%')
  },
  arrowContainer: {
    width: wp("20%"),
    paddingTop: hp("1%"),
  },
  backArrow: {
    color: Colors.primary,
    padding: 5,
  },
  actionButton: {
    overflow: "visible",
    paddingLeft: wp("4%"),
    paddingRight: wp("4%"),
    marginBottom: hp("1%"),
    marginTop: hp("1%"),
    marginRight: wp("2%"),
    marginLeft: wp("1%"),
    height: hp("5%"),
    minWidth: wp("25%"),
  },
  actionButtonText: {
    fontSize: wp("2.9%"),
    fontFamily: ApplicationStyles.textMsgFont,
  },
  countBadge: {
    position: "absolute",
    backgroundColor: Colors.button,
    right: 0,
    top: -10,
  },
  monthPicker: {
    alignSelf: "center",
    backgroundColor: Colors.primary,
    borderRadius: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: wp("20%"),
  },
  dateChangeIcon: {
    color: Colors.primary,
    alignSelf: "center",
    paddingHorizontal: wp("1%"),
    fontSize: wp("8.5%"),
  },

  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.white,
    fontSize: wp("2.8%"),
    textTransform: "capitalize",
  },

  actionButton1: {
    overflow: "visible",
    paddingLeft: wp("4%"),
    paddingRight: wp("4%"),
    marginBottom: hp("1%"),
    marginTop: hp("2.5%"),
    marginRight: wp("2%"),
    marginLeft: wp("1%"),
    height: hp("5%"),
    elevation: 0,
    width: wp("43%"),
  },
  actionButtonText1: {
    fontSize: wp("2.9%"),
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.headingBlack,
  },
  actionButtonTextHeading: {
    fontSize: wp("4.9%"),
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.headingBlack,
  },
  countBadge: {
    position: "absolute",
    backgroundColor: Colors.button,
    right: 0,
    top: -10,
  },
});
