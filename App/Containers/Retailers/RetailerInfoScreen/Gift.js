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
import GiftCard from "./GiftCard";
import RetailerActions from "App/Stores/Retailers/Actions";

class Tickets extends Component {
  componentDidMount() {
    const { getDealerGift, token, selectedRetailer } = this.props;
    // let monthIndex = moment().format("M") - 1;
    getDealerGift({
      token,
      //   m: HelperService.getMonthindex(monthIndex),
      OwnerId: selectedRetailer.id,
      // OwnerId: "0010p000014SR2RAAW",

    });
  }

  fetchCall() {
    const { getDealerGift, token, selectedRetailer } = this.props;
    // let monthIndex = moment().format("M") - 1;
    getDealerGift({
      token,
      //   m: HelperService.getMonthindex(monthIndex),
      OwnerId: selectedRetailer.id,
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
    return <GiftCard data={data} id={data.Id} />;
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,

      loader,
    } = this.props;
   console.log(data, "jkjkjkjkjkj");

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
    return <View>{this.getDataNode()}</View>;
  }
}

const mapStateToProps = (state) => ({
  data: state.retailers.dealerGift,
  token: state.user.token,
  loading: state.retailers.dealerGiftLoader,
  selectedRetailer: state.retailers.selectedRetailer,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerGift: (params) => dispatch(RetailerActions.getDealerGift(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
