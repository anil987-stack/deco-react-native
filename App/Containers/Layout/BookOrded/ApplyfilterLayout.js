import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
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
  Badge,
  Spinner,
} from "native-base";
import NavigationService from "App/Services/NavigationService";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
import GenericIcon from "App/Components/GenericIcon";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _ from "lodash";
import Backbutton from "../../../Components/BackArrowButton";
import CommonActions from "App/Stores/Common/Actions";
import UserActions from "App/Stores/User/Actions";
import SearchBar from "App/Components/SearchBar";
import WhiteButton from "App/Components/WhiteButton";
import ProductActions from "App/Stores/Products/Actions";

class ApplyfilterLayout extends React.Component {
  componentDidMount() {
    const {} = this.props;
  }

  filterResults(list) {
    // console.log(list[0].PJP_Beats__r.records)
    let searchFilters = this.props.searchFilters;
    // console.log("jeje",searchFilters)
    let filteredList = HelperService.searchTextListVisitFilter(
      list,
      "Visit_Date__c",
      searchFilters["startDate"]
    );
    // filteredList = HelperService.searchTextListFilter(filteredList, 'visit', searchFilters['area'], 'area__c');
    // console.log(filteredList)
    return filteredList;
  }

  render() {
    const { changeSearchFilters, searchProductFilters } = this.props;

    return (
      <View style={Styles.header}>
        <View style={{ flexDirection: "row", marginRight: wp("0%") }}>
          <TouchableOpacity transparent>
            <GenericIcon
              name={"arrow-back"}
              onPress={NavigationService.goback}
              style={{
                color: Colors.white,
                fontSize: wp("8%"),
                marginLeft: hp("1"),
                marginTop: hp("1"),
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginHorizontal: wp("20%"),
              color: Colors.white,
              marginTop: hp("2"),
            }}
          >
            Apply Filter
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  visitsDisplayList: state.visits.visitsDisplayList,
  filteredDisplayData: state.visits.filteredDisplayData,
  token: state.user.token,
  agentid: state.user.id,
  // agentid: state.user.id,
  userid: state.user.loginDetails.userId,
  searchProductFilters: state.products.searchProductFilters,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(ProductActions.changeSearchProductFilters(params)),
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplyfilterLayout);

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    height: hp("10%"),
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },

  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.primary,
    fontSize: wp("4%"),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  countBadge: {
    backgroundColor: Colors.white,
    padding: 0,
    borderWidth: 0.5,
    borderColor: Colors.primary,
    height: wp("6%"),
    width: wp("6%"),
    top: "15%",
    position: "absolute",
    borderRadius: wp("10%"),
    left: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  countBadgeText: {
    color: Colors.primary,
    fontSize: wp("3%"),
  },
  heading: {
    alignSelf: "center",
    color: "white",
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.2%"),
    marginBottom: 0,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 15,
    // width: '83%',
    borderRadius: 10,
    // paddingHorizontal: 20,
    //elevation: 10,
    backgroundColor: "white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    color: Colors.blue,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
    //  marginTop:-20,
    width: wp("65"),
    height: wp("9%"),
  },
});
