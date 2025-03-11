import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Spinner } from "native-base";
import NavigationService from "App/Services/NavigationService";

import SelectionButton from "App/Components/SelectionButton";
import { ApplicationStyles, Colors } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MenuInfoTuple from "./MenuInfoTuple";
import { TextInput } from "react-native-paper";

import { Tab, Tabs } from "native-base";
import { Divider } from 'react-native-paper';
import Separator from "../../Components/Separator/Separator";
import Info from "./Info";
import Personal from "./Personal";
class MenuDetailScreen extends Component {
  componentDidMount() { }

  fetchCall() { }

  render() {
    const { data, businessChannel, psmList } = this.props;
    // console.log("data",data);
    return (
      <View style={Styles.mainContainer}>
        <MenuInfoTuple data={data} Show={true} />
        <ScrollView style={{ ...Styles.box }}>
          <View style={{ ...Styles.tabs }}>

            <Tabs
              tabBarUnderlineStyle={{ width: '14%', marginLeft: '10%', backgroundColor: Colors.darkRedPink, marginBottom: "2%", height: -1 }}
            >


              <Tab heading="Info "
                textStyle={{ color: Colors.lightGrey, fontSize: 15, }}
                tabStyle={{ backgroundColor: Colors.white, flex: 1 }}
                activeTextStyle={{ color: Colors.darkRedPink, fontSize: 15 }}
                activeTabStyle={{ backgroundColor: Colors.white }}>
                <ScrollView>
                  <Info />
                </ScrollView>
              </Tab>
              <Tab heading="Personal"
                textStyle={{ color: Colors.lightGrey, fontSize: 15 }}
                tabStyle={{ backgroundColor: Colors.white, flex: 1 }}
                activeTextStyle={{ color: Colors.darkRedPink, fontSize: 15 }}
                activeTabStyle={{ backgroundColor: Colors.white }}>
                <ScrollView>
                  <Personal />
                </ScrollView>
              </Tab>
            </Tabs>

          </View>

          {/* <AgentInfo heading={"SFA Code"} value={"NA"} />
          <AgentInfo heading={"Designation"} value={"NA"} />
          <AgentInfo heading={"Manager"} value={"NA"} /> */}

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.user.user_details,
  businessChannel: state.user.user_details
    ? state.user.user_details.business_channel__c
    : "",
  psmList: state.user.psmList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuDetailScreen);

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("0%"),

  },
  tabs: {
    flex: 1,
    marginTop: hp('0'),
    width: 300,
    alignSelf: 'center',
    height: 380,
    borderWidth: 1,
    borderColor: Colors.tabBorder,

  },
  input: {
    marginVertical: 10,
    width: "80%",
    height: "7.5%",
    backgroundColor: Colors.white,
  },

  progressContainer: {
    width: wp("90%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: hp("14%"),
    backgroundColor: Colors.lightGrey,
    marginBottom: hp("8%"),
    borderRadius: wp("1.5%"),
    position: "relative",
  },
  value: {
    fontSize: wp("4%"),
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
  },
  box: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 30,
    // marginVertical: ,
    padding: 15,
    // borderRadius: 10,
    // position: "relative",
    // borderWidth:1,

  },
  textContainer: {
    width: "100%",
    backgroundColor: Colors.lightGrey,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 7,

    //marginBottom:"5%"
  },
  name: {
    color: Colors.darkGrey,
    fontSize: wp("3.8%"),
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: "capitalize",
    marginBottom: hp(".1%"),
  },

  info: {
    color: Colors.darkGrey,
    fontSize: wp("3.3%"),
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: "capitalize",
    marginBottom: hp(".1%"),
  },

  countText: {
    color: Colors.grey,
    fontSize: wp("3%"),
    marginBottom: hp(".5%"),
    marginTop: hp("1%"),
    fontFamily: ApplicationStyles.textMsgFont,
  },

  loadingIcon: {
    color: Colors.primary,
    fontSize: wp("4%"),
    alignSelf: "center",
    position: "absolute",
    right: wp("2.3%"),
    top: -hp("2.3%"),
    zIndex: 2,
  },
});
