import Colors from "App/Theme/Colors";
import { Tab, Tabs, ScrollableTab } from "native-base";
import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import OrderActions from "../../../Stores/Orders/Actions";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../../Components/Loading";
// import PrimaryOrderCard from './PrimaryOrderCard';
import moment from "moment";
import TicketCard from "./TicketCard";
import RetailerActions from "App/Stores/Retailers/Actions";

class Tickets extends Component {
  // componentDidMount() {
  //   const { getDealerTicket, token, selectedRetailer } = this.props;
  //   // let monthIndex = moment().format("M") - 1;
  //   getDealerTicket({
  //     token,
  //     //   m: HelperService.getMonthindex(monthIndex),
  //     dealer_id: selectedRetailer.id,
  //   });
  // }

  fetchCall() {
    const { getDealerTicket, token, selectedRetailer } = this.props;
    // let monthIndex = moment().format("M") - 1;
    getDealerTicket({
      token,
      //   m: HelperService.getMonthindex(monthIndex),
      dealer_id: selectedRetailer.id,
    });
  }
  filterResults(list) {
    const { token, userid } = this.props;
    let result = "";
    result = HelperService.sortDesc(list, "Name");
    result = result.filter((obj) => obj);

    console.log(result);
    return result;
  }
  getCardNode(data) {
    return <TicketCard data={data} id={data.Id} />;
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,

      loader,
    } = this.props;
    // console.log(data, "jkjkjkjkjkj");

    if (data && data.length) {
      let searchedList = this.filterResults(data);
      // let searchedFilteredList = this.filterResults(data);
      // let filteredSitesList = this. searchKeyValueInList(data.map((obj) => obj));

      if (searchedList && searchedList.length) {
        visibleNode = (
          <FlatList
            style={{ height: hp("52%") }}
            contentContainerStyle={{ padding: 10 }}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => this.getCardNode(item)}
            keyExtractor={(item) => item.Id}
            refreshing={loading}
            onRefresh={() => this.fetchCall()}
          />
        );
      } else {
        visibleNode = (
          <View style={{ top: hp("-25%") }}>
            <NoDataFound text={"Data Not Found"} />
          </View>
        );
      }
    } else if (loading) {
      visibleNode = <Loading />;
    } else if (!data || (data && !data.length && !loading)) {
      visibleNode = (
        <View style={{ top: hp("-25%") }}>
          <NoDataFound text={"Data Not Found"} />
        </View>
      );
    }

    return visibleNode;
  }

  render() {
    return <View style={{marginTop:-10}}>{this.getDataNode()}</View>;
  }
}

const mapStateToProps = (state) => ({
  data: state.retailers.dealerTicket,
  token: state.user.token,
  loading: state.retailers.dealerTicketLoader,
  selectedRetailer: state.retailers.selectedRetailer,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerTicket: (params) =>
    dispatch(RetailerActions.getDealerTicket(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
