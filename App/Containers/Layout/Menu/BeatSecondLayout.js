import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
import UsersActions from "App/Stores/User/Actions";
import GenericIcon from "App/Components/GenericIcon";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _ from "lodash";
import moment from "moment";
import CommonActions from "App/Stores/Common/Actions";
import BackArrowButton from "App/Components/BackArrowButton";

class VisitListLayout extends React.Component {
  componentDidMount() {}

  render() {
    const {
      searchFilters,
      monthNumber,
      type,
      fetchLocalExpenseLoader,
    } = this.props;

    return (
      <View style={Styles.header}>
        <View style={{ flexDirection: "row" }}>
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
              marginLeft: "28%",
              marginTop: 20,
              color: Colors.white,
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            Beat Plan
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
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  monthname: state.user.monthNumber,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(UsersActions.updateSearchFilters(params)),
  // getVisitsDisplayList:(params)     => dispatch(VisitsActions.getVisitsDisplayList(params)),
  // getAllPjp: (params)   => dispatch(UserActions.getAllPjp(params)),
  fetchPjp: (params) => dispatch(UsersActions.fetchPjp(params)),
  updateMonthNumber: (params) =>
    dispatch(UsersActions.updateMonthNumber(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitListLayout);

const Styles = StyleSheet.create({
  header: {
    height: hp("12%"),
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },

  datePicker: {
    alignSelf: "center",
    backgroundColor: Colors.button,
    borderRadius: 100,
    flexDirection: "row",
    width: wp("43%"),
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  monthPicker: {
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: wp("55%"),
  },

  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.primary,
    fontSize: wp("4%"),
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  dateIcon: {
    color: Colors.primary,
    fontSize: wp("7%"),
    marginLeft: 0,
    marginRight: 0,
    zIndex: 2,
    paddingLeft: wp("3%"),
  },

  dateChangeIcon: {
    color: Colors.white,
    fontSize: 60,
    alignSelf: "center",
    paddingHorizontal: 20,
  },

  actionButton: {
    borderWidth: 1.5,
    width: wp("20%"),
    height: 35,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: Colors.clrF1F9FF,
    marginHorizontal: wp("1.2%"),
  },

  arrowContainer: {
    width: wp("10%"),
  },
  backArrow: {
    color: Colors.button,
    paddingLeft: 1,
    fontSize: wp("8%"),
  },
  actionButtonText: {
    fontSize: wp("3%"),
    fontFamily: ApplicationStyles.textMediumFont,
  },
  selectedActionButton: {
    borderWidth: 1.5,
    width: wp("20%"),
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: Colors.clrF1F9FF,
    marginHorizontal: wp("1.2%"),
    height: 35,
  },
  button: {
    marginHorizontal: wp("1.5%"),
    width: wp("40%"),
    alignSelf: "flex-start",
  },
});
