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
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../Components/Loading";
import Card from "./Card";
import MenuActions from "App/Stores/Menu/Actions";
class Complete extends Component {
  fetchCall() {
    const { token } = this.props;
    this.props.getCampaignRecord({ token });
  }
  filterResults(list) {
    const { token, userid } = this.props;
    let result = "";
    result = list.filter((obj) => obj.Campaign_Status__c == "Completed");
    result = HelperService.sortDesc(result, "Name");
    // console.log(result)
    return result;
  }
  getCardNode(data) {
    return <Card data={data} id={data.Id} status={data.Campaign_Status__c} />;
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,

      loader,
    } = this.props;

    if (data && data.length) {
      let searchedFilteredList = this.filterResults(data);

      if (searchedFilteredList.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchedFilteredList}
            renderItem={({ item }) => this.getCardNode(item)}
            keyExtractor={(item) => item.Id}
            refreshing={loading}
            onRefresh={() => this.fetchCall()}
          />
        );
      } else {
        visibleNode = <NoDataFound text={"No Data Found"} />;
      }
    } else if (loading) {
      visibleNode = <Loading />;
    } else if (!data || (data && !data.length && !loading)) {
      visibleNode = <NoDataFound text={"No Data Found"} />;
    }

    return visibleNode;
  }

  render() {
    return <View>{this.getDataNode()}</View>;
  }
}

const mapStateToProps = (state) => ({
  data: state.menu.campaignRecord,
  token: state.user.token,
  loading: state.menu.getCampaignRecordLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCampaignRecord: (params) =>
    dispatch(MenuActions.getCampaignRecord(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Complete);
