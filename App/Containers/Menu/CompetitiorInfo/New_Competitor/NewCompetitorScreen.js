import React, { Component } from "react";
import { View, Text, Alert, TouchableOpacity, FlatList } from "react-native";
import { Picker, Card } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WhiteButton from "App/Components/WhiteButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Styles from "./NewCompetitorScreenStyle";
import BlueButton from "App/Components/BlueButton";
import GenericIcon from "App/Components/GenericIcon";
// import { CANCEL, SUBMIT, LEAVE, WEEK_OFF } from 'App/Constants'
import { smallBottomMargin } from "App/Theme/Metrics";
import NavigationService from "App/Services/NavigationService";
// import LayoutScreen from 'App/Layout/LayoutScreen';
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Wave from "App/Components/WaveCurls/Wave";
import Colors from "App/Theme/Colors";
import CompetitorCard from "./CompetitorCard";
import MenuActions from "App/Stores/Menu/Actions";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
// import ImagePic from '../../../../Components/ImagePicker/Imageinbutton'
class NewCompetitorScreen extends Component {
  componentDidMount() {
    const { getCompetitorScheme, token, sfid } = this.props;
    getCompetitorScheme({
      token,
      Id: sfid,
    });
  }
  fetchCall() {
    const { getCompetitorScheme, token, sfid } = this.props;
    getCompetitorScheme({
      token,
      Id: sfid,
    });
  }
  filterResults(list) {
    const { token, userid,searchFilters } = this.props;
    let result = "";
    result = HelperService.sortDesc(list, "Name");
    result = HelperService.searchTextListFilter(
      result,
      "Name",
      searchFilters["competitor"]
    );
    // result = result.filter((obj) => obj);

    // console.log(result);
    return result;
  }
  getCardNode(data) {
    return <CompetitorCard item={data} id={data.Id} />;
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
            // style={{ height: hp("52%") }}
            contentContainerStyle={{ padding: 10 }}
            showsVerticalScrollIndicator={false}
            data={searchedList}
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
    const { area, agentid, token, sfid, data } = this.props;
    // console.log("jjjjjjjjjjdddd", data);
    return (
      <View style={Styles.box1}>
        <View style={{ alignSelf: "center", width: "90%" }}>
          {this.getDataNode()}
        </View>

        <TouchableOpacity
          style={Styles.plusIcon}
          onPress={() => NavigationService.navigate("CompetitorInfoScreen")}
        >
          <GenericIcon
            name={"add"}
            style={{
              color: Colors.white,
              fontSize: wp("11%"),
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.access_token,
  agentid: state.user.id,
  sfid: state.user.loginDetails.userId,
  data: state.menu.competitorList,
  loading: state.menu.getCompetitorSchemeLoader,
  searchFilters: state.menu.selectedBeatFilter,
});

const mapDispatchToProps = (dispatch) => ({
  getCompetitorScheme: (params) =>
    dispatch(MenuActions.getCompetitorScheme(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCompetitorScreen);
