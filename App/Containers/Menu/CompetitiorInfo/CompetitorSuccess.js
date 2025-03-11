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
class CompetitorSuccess extends Component {
  fetchCall() {
    const { getCompetitorScheme, token, sfid } = this.props;
    getCompetitorScheme({
      token,
      Id: sfid,
    });
  }
  render() {
    return (
      <View>
        <View style={{ alignItems: "center", top: hp("20%") }}>
          <Image
            style={{ width: 150, height: 150 }}
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
            Record Created Successfully!
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
            NavigationService.navigate("NewCompetitorScreen"), this.fetchCall();
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
  token: state.user.access_token,
  agentid: state.user.id,
  sfid: state.user.loginDetails.userId,
  data: state.menu.competitorList,
  loading: state.menu.getCompetitorSchemeLoader,
});
const mapDispatchToProps = (dispatch) => ({
  getCompetitorScheme: (params) =>
    dispatch(MenuActions.getCompetitorScheme(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompetitorSuccess);
