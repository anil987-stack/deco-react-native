import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./FormKycStyle";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import Colors from "App/Theme/Colors";
import { HelperService } from "App/Services/Utils/HelperService";
import { connect } from "react-redux";
import menuActions from "App/Stores/Menu/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Icon,
  Input,
  ScrollableTab,
  Container,
  TabHeading,
  Tab,
  Tabs,
  Content,
} from "native-base";
import WHRetailerInfoKyc from "./WHRetailerInfoKyc";
import WHRetailerOtherKyc from "./WHRetailerOthreKyc";
import WhiteButton from "App/Components/WhiteButton";
import RetailerActions from "App/Stores/Retailers/Actions";
class WHRetailerKyc extends Component {
  componentDidMount() {
    const { getDealerInfo, token, selectedRetailer } = this.props;
    // let monthIndex = moment().format("M") - 1;
    getDealerInfo({
      token,
      //   m: HelperService.getMonthindex(monthIndex),
      dealer_id: selectedRetailer.id,
    });
  }
  submit(params) {
    console.log("params", params);
    const { token, userid, managerId, submitForApproval } = this.props;

    let requestData = {
      requests: [
        {
          actionType: "Submit",
          contextId: "0010p0000148waNAAQ", //Account record id here
          nextApproverIds: [""],
          comments: "this is a test",
          contextActorId: userid, //Current User
          processDefinitionNameOrId: "Approval_Process2",
          skipEntryCriteria: "true",
        },
      ],
    };

    submitForApproval({ payload: requestData, token });
  }

  render() {
    const { data } = this.props;
    return (
      <View style={Styles.tabs}>
        {/* <Container   >
        <Content  theme={{backgroundColor:"red"}} > */}
        <Tabs
          tabBarUnderlineStyle={{
            backgroundColor: Colors.white,
            marginBottom: 1,
            borderRadius: 5,
          }}
          style={{ width: wp("95%"), alignSelf: "center" }}
        >
          <Tab
            heading="INFO"
            textStyle={{ color: "#fff", fontSize: 15 }}
            tabStyle={{ backgroundColor: Colors.primary, flex: 1 }}
            activeTextStyle={{ color: "#fff", fontSize: 15 }}
            activeTabStyle={{ backgroundColor: Colors.primary }}
          >
            <WHRetailerInfoKyc item={data}/>
          </Tab>
          <Tab
            heading="OTHER DETAILS"
            textStyle={{ color: "#fff", fontSize: 15, textAlign: "center" }}
            tabStyle={{ backgroundColor: Colors.primary, flex: 1 }}
            activeTextStyle={{
              color: "#fff",
              fontSize: 15,
              textAlign: "center",
            }}
            activeTabStyle={{ backgroundColor: Colors.primary }}
          >
            <WHRetailerOtherKyc item={data}/>
          </Tab>
        </Tabs>
        {/* </Content></Container> */}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.retailers.dealerInfo,
  token: state.user.token,
  loading: state.retailers.dealerInfoLoader,
  selectedRetailer: state.retailers.selectedRetailer,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerInfo: (params) => dispatch(RetailerActions.getDealerInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WHRetailerKyc);
