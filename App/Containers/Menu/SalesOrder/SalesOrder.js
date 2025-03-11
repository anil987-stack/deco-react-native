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
} from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "../../../Services/Utils/HelperService";
import _ from "lodash";
import LocalActions from "App/Stores/LocalExpense/Actions";
import SalesOrderTrack from "./SalesOrderTrack";
import LineOrder from "./LineOrder";

class SalesOrder extends Component {
  render() {
    const { token, changeType } = this.props;
    const { detail } = this.props.navigation.state.params;
    console.log("dataaaaaaasss", detail);
    return (
      <Container style={{ marginHorizontal: 5 }}>
        <View style={{ marginVertical: 10 }}>
          <BackArrowButton />
        </View>

        <Tabs
          tabBarUnderlineStyle={Styles.tabUnderLine}
          // onChangeTab={({ i }) => changeType(i)}
          style={{ width: wp("90%"), alignSelf: "center" }}
        >
          <Tab
            heading="Info"
            tabStyle={Styles.tabHeading}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            textStyle={Styles.tabText}
            activeTextStyle={Styles.tabTextStyle}
          >
            <SalesOrderTrack order={detail} />
          </Tab>
          <Tab
            heading="Order Lines"
            tabStyle={Styles.tabHeading}
            textStyle={Styles.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Styles.tabTextStyle}
          >
            <LineOrder order={detail}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.loginDetails.userId,
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesOrder);

const Styles = StyleSheet.create({
  tabText: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    // fontSize: wp('4%')
  },
  tabHeading: {
    backgroundColor: Colors.primary,
    // width: "20%",
    // paddingHorizontal: 0,
    // paddingHorizontal: 10
  },
  tabUnderLine: {
    backgroundColor: Colors.white,
    // width: "18%",
    // marginHorizontal: 10,
    marginBottom: 4,
    borderRadius: 5,
  },

  tabTextStyle: {
    color: Colors.white,
    fontWeight: "normal",
  },
});
