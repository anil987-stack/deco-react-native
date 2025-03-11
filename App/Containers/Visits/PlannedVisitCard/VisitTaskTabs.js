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
import { HelperService } from "App/Services/Utils/HelperService";
import _ from "lodash";
import LocalActions from "App/Stores/LocalExpense/Actions";
// import Draft from "./Draft";
// import Pending from "./Pending";
// import Approved from "./Approved";
// import Complete from "./Complete";
import MenuActions from "App/Stores/Menu/Actions";
import LeadTask from "./TaskTabs.js/LeadTask";
import TeleCard from "./TaskTabs.js/TeleCard";
import AidpTask from "./TaskTabs.js/AidpTask";
import TicketTask from "./TaskTabs.js/TicketTask";

class VisitTaskTabs extends Component {
  // componentDidMount(){
  //   const { token} = this.props;

  //   this.props.getCampaignRecord({token})
  // }
  render() {
    const { token, changeType } = this.props;

    return (
      <Container style={{ marginHorizontal: 4 }}>
        {/* <View style={{ marginVertical: 10 }}>
          <BackArrowButton />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", paddingLeft: 10 }}>
            DOCUMENT
          </Text>
        </View> */}
        <Tabs
          tabBarUnderlineStyle={Styles.tabUnderLine}
          onChangeTab={({ i }) => changeType(i)}
          style={{ width: wp("99%"), alignSelf: "center",borderRadius:10 }}
        //   renderTabBar={() => (
        //     <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
        //   )}
        >
          <Tab
            heading="Lead"
            tabStyle={{...Styles.tabHeading,backgroundColor:"#C1F6CB",}}
            activeTabStyle={{ backgroundColor:"#C1F6CB" }}
            textStyle={{...Styles.tabText,color:'#019A5A'}}
            activeTextStyle={{...Styles.tabTextStyle,color:'#019A5A'}}
          >
              <LeadTask />
            {/* <Draft /> */}
          </Tab>
          <Tab
            heading="Tele"
            tabStyle={{...Styles.tabHeading,backgroundColor:"#C7E4FF"}}
            textStyle={{...Styles.tabText,color:'#046EC5'}}
            activeTabStyle={{ backgroundColor: "#C7E4FF" }}
            activeTextStyle={{...Styles.tabTextStyle,color:'#046EC5'}}
          >
          <TeleCard />
          </Tab>
          <Tab
            heading="AIDP"
            tabStyle={{...Styles.tabHeading,backgroundColor:"#ffdab9"}}
            textStyle={{...Styles.tabText,color:'#cb410b'}}
            activeTabStyle={{ backgroundColor:"#ffdab9"}}
            activeTextStyle={{...Styles.tabTextStyle,color:'#cb410b'}}
          >
            <AidpTask />
            {/* <Approved /> */}
          </Tab>
          <Tab
            heading="Ticket"
            tabStyle={{...Styles.tabHeading,backgroundColor:'#ecf6fd'}}
            textStyle={{...Styles.tabText,color:'#00bfff'}}
            activeTabStyle={{ backgroundColor: "#ecf6fd" }}
            activeTextStyle={{...Styles.tabTextStyle,color:'#00bfff'}}
          >
            <TicketTask />
            {/* <Complete /> */}
          </Tab>
        </Tabs>
        {/* <TouchableOpacity
          style={{
            borderRadius: 50,
            bottom: 45,
            position: "absolute",
            right: 25,
            borderRadius: 50,
            height: 45,
            width: 45,
            backgroundColor: Colors.primary,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            
          }}
          onPress={() => NavigationService.navigate("DocumentForm")}
        >
          <GenericIcon
            name={"add"}
            style={{
              color: Colors.white,
              fontSize: wp("12%"),
              alignSelf: "center",
            }}
          />
        </TouchableOpacity> */}
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
  getCampaignRecord: (params) => dispatch(MenuActions.getCampaignRecord(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitTaskTabs);

const Styles = StyleSheet.create({
  tabText: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    // fontSize: wp('4%')
  },
  tabHeading: {
    backgroundColor: "blue",
    // width: "20%",
    // paddingHorizontal: 0,
    // paddingHorizontal: 10
  },
  tabUnderLine: {
    backgroundColor: Colors.primary,
    width: wp('20'),
  marginHorizontal:10,
    marginBottom: 1,
    borderRadius: 5,
  },

  tabTextStyle: {
    color: Colors.white,
    fontWeight: "normal",
  },
});
