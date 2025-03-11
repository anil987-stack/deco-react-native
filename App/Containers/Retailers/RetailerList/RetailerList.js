import React, { Component } from "react";
import WhiteButton from "App/Components/WhiteButton";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon, Input, Button } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Style from "./RetailerListStyle";
import RetailerTuple from "App/Containers/Retailers/RetailerTuple";
import NavigationService from "App/Services/NavigationService";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import RetailersActions from "App/Stores/Retailers/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import CommonActions from "App/Stores/Common/Actions";
import _ from "lodash";

class RetailerListScreen extends Component {
  // componentDidMount() {
  //   const { retailersList, updateSearchFilters,accountType } = this.props;
  //   this.props.clearSelectRetailer();
  //   if (retailersList && !_.isEmpty(retailersList)) {
  //     updateSearchFilters({
  //       edited_field: "type",
  //       edited_value: accountType[0],
  //     });
  //   } else {
  //     // this.fetchRetailersCall();
  //   }
  // }

  // fetchRetailersCall() {
  //   const { token, agentid, fetchRetailers } = this.props;

  //   fetchRetailers({ token, agentid });
  // }

  filterResults(list) {
    let retailerSearchFilters = this.props.retailerSearchFilters;
    let filteredList = HelperService.sortListFilter(list, "Name", "ASC");
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "Name",
      retailerSearchFilters["searchValue"]
    );
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "Area_Master__c",
      retailerSearchFilters["beat"]
    );

    return filteredList;
  }

  onSelectRetailer(params) {
    this.onPressCardNavigate(params);
    // NavigationService.navigate("RetailerInfoScreen", params);
    this.props.selectRetailer(params);
  }

  onPressCardNavigate(params) {
    console.log("ppppp", params);
    if (
      params.data.Sub_Category__c !== "PROSPECT- PRIMARY" &&
      params.data.Sub_Category__c !== "PROSPECT- SECONDARY"
    ) {
      NavigationService.navigate("RetailerInfoScreen", params);
    }
    // switch (params.data.Sub_Category__c) {
    //   case "LAD":
    //     NavigationService.navigate("RetailerInfoScreen", params);
    //     break;
    //   case "Jodidars":
    //     NavigationService.navigate("RetailerInfoScreen", params);
    //     break;
    //     // case  'Site Visit':
    //     //   NavigationService.navigate('NewSites')
    //     //   break;
    //     // case 'Influencer Visit':
    //     //   NavigationService.navigate('NewInfluencers')
    //     //   break;

    //     break;
    // }
  }

  getRetailerCardNode(data) {
    const {
      retailersList,
      retailerSearchFilters,
      updateSearchFilters,
      searchByAreaFilters,
      accountType,
    } = this.props;

    let count = 0;
 
    let filteredPartiesList = this.filterResults(
      HelperService.filterTextListFilter(retailersList, "Sub_Category__c", data)
    );
    count = filteredPartiesList.length;
    // console.log(filteredPartiesList);
    return (
      <WhiteButton
        title={data.replace("_", " ") + "(" + count + ")"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue }}
        textStyle={Style.actionButtonText}
        onPress={() => {
          updateSearchFilters({ edited_field: "type", edited_value: data });
          updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        }}
        selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />
    );
  }

  getPartiesAccountType() {
    const { retailersList, fetchRetailersLoader, accountType } = this.props;

    let visibleNode = [];

    if (
      accountType &&
      accountType.length &&
      retailersList &&
      retailersList.length
    ) {
      let filteredRetailersList = accountType;
      if (filteredRetailersList.length) {
        //  console.log("filteredRetailersList",filteredRetailersList)
        visibleNode = (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            key={"Retailers"}
            data={filteredRetailersList}
            renderItem={({ item }) => this.getRetailerCardNode(item)}
            keyExtractor={(item) => item.toString()}
            onRefresh={() => this.fetchRetailersCall()}
            refreshing={fetchRetailersLoader}
            ListEmptyComponent={() => <NoDataFound text={"No Parties Found"} />}
          />
        );
      } else {
        visibleNode = (
          <NoDataFound text={"No Parties Found"}>
            <Icon
              name={"refresh"}
              onPress={() => this.fetchRetailersCall()}
              style={{
                color: Colors.button,
                fontSize: 20,
                alignSelf: "center",
                padding: 10,
              }}
              type={"FontAwesome"}
            />
          </NoDataFound>
        );
      }
    } else if (fetchRetailersLoader) {
      visibleNode = <Loading />;
    } else if (retailersList && !fetchRetailersLoader) {
      visibleNode = (
        <NoDataFound text={"No Parties found."}>
          <Icon
            name={"refresh"}
            onPress={() => this.fetchRetailersCall()}
            style={{
              color: Colors.button,
              fontSize: 25,
              alignSelf: "center",
              padding: 10,
            }}
            type={"FontAwesome"}
          />
        </NoDataFound>
      );
    }

    return visibleNode;
  }

  getPartiesAccountTypeData() {
    const {
      retailersList,
      searchByAreaFilters,
      fetchRetailersLoader,
      retailerSearchFilters,
    } = this.props;
    console.log(retailersList);

    let visibleNode = [];
    let filteredPartiesList =
      retailersList && retailersList.length
        ? this.filterResults(
            HelperService.filterTextListFilter(
              retailersList,
              "Sub_Category__c",
              retailerSearchFilters["type"]
            )
          )
        : [];
    if (filteredPartiesList.length) {
      visibleNode = (
        <FlatList
          key={"Retailers"}
          data={filteredPartiesList}
          renderItem={({ item }) => (
            <RetailerTuple
              item={item}
              id={item.sfid}
              onPress={() => this.onSelectRetailer({ id: item.Id, data: item })}
            />
          )}
          keyExtractor={(item) => item.sfid}
          onRefresh={() => this.fetchRetailersCall()}
          refreshing={fetchRetailersLoader}
          ListEmptyComponent={() => <NoDataFound text={"No Parties Found"} />}
        />
      );
    } else {
      visibleNode = <NoDataFound text={""} />;
    }
    return visibleNode;
  }

  onPressCard() {
    const { retailerSearchFilters } = this.props;

    switch (retailerSearchFilters["type"]) {
      case "Competitor Visit":
        NavigationService.navigate("NewRetailer", {
          type: retailerSearchFilters["type"],
        });
        break;
      // case  'Site Visit':
      //   NavigationService.navigate('NewSites')
      //   break;
      // case 'Influencer Visit':
      //   NavigationService.navigate('NewInfluencers')
      //   break;
      default:
        NavigationService.navigate("NewRetailer", {
          type: retailerSearchFilters["type"],
        });
        break;
    }
  }
  render() {
    return (
      <View style={Style.container}>
        <View style={{ height: "13%", backgroundColor: Colors.white }}>
          {this.getPartiesAccountType()}
        </View>

        {this.getPartiesAccountTypeData()}
        {/* <TouchableOpacity style={Style.plusIcon}>
          <GenericIcon
            name={'add'}
            onPress={() => this.onPressCard()}
            style={{ color: Colors.white, fontSize: 45, alignSelf: 'center' }}
          />
        </TouchableOpacity> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  accountType: state.retailers.accountlist,
  agentAreas: state.user.agentAreas,
  fetchRetailersLoader: state.retailers.fetchRetailersLoader,
  retailerSearchFilters: state.retailers.retailerSearchFilters,
  isConnected: state.network.isConnected,
  retailersList: state.retailers.retailersList,
});

const mapDispatchToProps = (dispatch) => ({
  selectRetailer: (params) => dispatch(RetailersActions.selectRetailer(params)),
  selectDealer: (params) => dispatch(RetailersActions.selectDealer(params)),
  fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  extractFormData: (params) =>
    dispatch(RetailersActions.extractFormData(params)),
  clearSelectRetailer: () => dispatch(RetailersActions.clearSelectRetailer()),
  updateSearchFilters: (params) =>
    dispatch(RetailersActions.updateSearchFilters(params)),
  fetchRetailerArea: (params) =>
    dispatch(CommonActions.fetchRetailerArea(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerListScreen);
