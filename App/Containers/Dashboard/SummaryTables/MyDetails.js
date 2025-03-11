import React, { Component } from "react";
import { View, Alert, ScrollView } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./SummaryTablesStyles";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import { START, ABSENT, GOOD, MORNING } from "App/Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import SingleInfo from "App/Components/SingleInfo";
import Separator from "App/Components/Separator";
import DashboardHeading from "App/Components/DashboardHeading";
import Table from "App/Components/Table";
import CircularProgressBar from "App/Components/CircularProgressBar";
import SearchableDropdown from "App/Components/SearchableDropdown";

import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import DashboardActions from "App/Stores/Dashboard/Actions";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import _ from "lodash";
import Card from "../../../Components/Card/Card";
import { ApplicationStyles, Colors } from "App/Theme";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
class MyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pie1: [
        {
          name: "Draft",
          population: this.props.data.Draft ? this.props.data.Draft : 0,
          color: "#ffff99",
          // legendFontColor: "#7F7F7F",
          // legendFontSize: 15,
        },
        {
          name: "Pending for Approval",
          population: this.props.data.PendingForApproval
            ? this.props.data.PendingForApproval
            : 0,
          color: "#b3ffb3",
          // legendFontColor: "#7F7F7F",
          // legendFontSize: 15,
        },
        {
          name: "Approved",
          population: this.props.data.Approved ? this.props.data.Approved : 0,
          color: "#ff9999",
          // legendFontColor: "#7F7F7F",
          // legendFontSize: 15,
        },
        {
          name: "Completed",
          population: this.props.data.Completed ? this.props.data.Completed : 0,
          color: "#D4F1F4",
          // legendFontColor: "#7F7F7F",
          // legendFontSize: 15,
        },
      ],
    };
  }
  // componentDidMount() {
  //   const { token, agentid } = this.props;
  //   this.props.getDashboardCampaign({
  //     token,
  //     user_id: agentid,
  //   });
  // }

  render() {
    return (
      <View
        style={{
          borderColor: Colors.lightPink,
          borderWidth: 1.5,
          height: hp("25%"),
          marginLeft: wp("6.5%"),
          width: wp(88),
          marginTop: hp(1),
          marginBottom: hp(2),
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            top: hp("2%"),
            left: wp("5%"),
          }}
        >
          Event Analysis
        </Text>
        <View
          style={{
            flexDirection: "row",
            top: hp("1%"),
            position: "absolute",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              top: hp("9%"),
              left: wp("3%"),
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <GenericIcon
                name={"circle"}
                style={{ fontSize: 16, color: "#ffff99", top: hp("0.3%") }}
                show={true}
              />
              <Text style={{ fontSize: 15 }}>
                Draft:{this.props.data.Draft ? this.props.data.Draft : "0"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <GenericIcon
                name={"circle"}
                style={{ fontSize: 16, color: "#ff9999", top: hp("0.3%") }}
                show={true}
              />
              <Text style={{ fontSize: 15 }}>
                Pending for Approval:{" "}
                {this.props.data.PendingForApproval
                  ? this.props.data.PendingForApproval
                  : "0"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <GenericIcon
                name={"circle"}
                style={{ fontSize: 16, color: "#b3ffb3", top: hp("0.3%") }}
                show={true}
              />
              <Text style={{ fontSize: 15 }}>
                Approved:{" "}
                {this.props.data.Approved ? this.props.data.Approved : "0"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <GenericIcon
                name={"circle"}
                style={{ fontSize: 16, color: "#D4F1F4", top: hp("0.3%") }}
                show={true}
              />
              <Text style={{ fontSize: 15 }}>
                Completed:{" "}
                {this.props.data.Completed ? this.props.data.Completed : "0"}
              </Text>
            </View>
          </View>
          <View
            style={{ position: "absolute", left: wp("41.5%"), top: hp("3%") }}
          >
            <PieChart
              data={[
                {
                  name: "Draft",
                  population: this.props.data.Draft ? this.props.data.Draft : 0,
                  color: "#ffff99",
                  // legendFontColor: "#7F7F7F",
                  // legendFontSize: 15,
                },
                {
                  name: "Pending for Approval",
                  population: this.props.data.PendingForApproval
                    ? this.props.data.PendingForApproval
                    : 0,
                  color: "#ff9999",
                  // legendFontColor: "#7F7F7F",
                  // legendFontSize: 15,
                },
                {
                  name: "Approved",
                  population: this.props.data.Approved
                    ? this.props.data.Approved
                    : 0,
                  color: "#b3ffb3",
                  // legendFontColor: "#7F7F7F",
                  // legendFontSize: 15,
                },
                {
                  name: "Completed",
                  population: this.props.data.Completed
                    ? this.props.data.Completed
                    : 0,
                  color: "#D4F1F4",
                  // legendFontColor: "#7F7F7F",
                  // legendFontSize: 15,
                },
              ]}
              width={200}
              height={150}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"45"}
              center={[5, 5]}
              hasLegend={false}
              avoidFalseZero={true}
              // absolute
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.loginDetails.userId,

  data: state.dashboard.data.campaign,
  loaders: state.dashboard.loaders,
});

const mapDispatchToProps = (dispatch) => ({
  getDashboardCampaign: (params) =>
    dispatch(DashboardActions.getDashboardCampaign(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDetails);
