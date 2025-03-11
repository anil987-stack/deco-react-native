import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  CheckBox,
  ImageBackground,
  TextInput,
  Alert,
  FlatList,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import MenuActions from "App/Stores/Menu/Actions";
import VisitsActions from "App/Stores/Visits/Actions";

class VisitSuccess extends Component {
  fetchCall() {
    const {
      token,

      fetchVisitInfo,

      executeVisitData,
    } = this.props;
    fetchVisitInfo({ token, visit_id: executeVisitData.Id });
  }
  render() {
    return (
      <View>
        <View style={{ alignItems: "center", top: hp("18%") }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("App/Assets/Images/check.png")}
          />
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              padding: 10,
              textAlign: "center",
              top: hp("5%"),
            }}
          >
            Visit Info Created Successfully!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            top: hp("30%"),
            backgroundColor: "#2eb82e",
            width: wp("20%"),
            height: hp("5%"),
            alignSelf: "center",
          }}
          onPress={() => {
            NavigationService.navigate("StartVisitForm"), this.fetchCall();
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              textAlignVertical: "center",
              fontSize: 20,
              color: "white",
              top: hp("0.5%"),
            }}
          >
            OK
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.loginDetails.userId,
  executeVisitData: state.visits.executeVisitData,
});
const mapDispatchToProps = (dispatch) => ({
  fetchVisitInfo: (params) => dispatch(VisitsActions.fetchVisitInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitSuccess);
