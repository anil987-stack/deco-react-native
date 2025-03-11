import userActions from "App/Stores/User/Actions";
import Colors from "App/Theme/Colors";
import {
  Tab,
  Tabs,
  Icon,
  Container,
  ScrollableTab,
  TabHeading,
  Content,
} from "native-base";
import React, { Component } from "react";
import { ApplicationStyles } from "App/Theme";
import { connect } from "react-redux";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
// import Styles from './onBoardingStyle';
// import { Icon, Input,  ScrollableTab,Container,TabHeading,Tab,Tabs, Content, } from "native-base";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import KYCForm from "./KYCForm";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GenericIcon from "App/Components/GenericIcon";
import { HelperService } from "App/Services/Utils/HelperService";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import OnboardingCard from "./onboardingCard";
import menuActions from "App/Stores/Menu/Actions";
import MyBoarding from "App/Containers/Menu/OnBoarding/Onboardingtab/MyBoarding";
import TeamBoarding from "App/Containers/Menu/OnBoarding/Onboardingtab/TeamBoarding";
class OnBoarding extends Component {
  render() {
    const {
      data,
      loading,
      searchFilters,
      fetchOnBoarding,
      psmList,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Tabs
          style={{ width: wp("99%"), alignSelf: "center" }}

          tabBarUnderlineStyle={Styles.tabBarUnderlineStyle}
          // renderTabBar={() => (
          //   <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
          // )}
        >
          <Tab
            heading="Draft"
            textStyle={{ color: Colors.white, fontFamily: ApplicationStyles.textMsgFont, }}

            tabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={{
              color: Colors.white,
              fontWeight: "normal",
            }}
            activeTabStyle={{ backgroundColor: Colors.primary }}
          >
            <MyBoarding id={"Draft"}/>
          </Tab>
          {/* {psmList&&psmList.length?<Tab heading="Pending for Approval"  */}
          {/* {
            <Tab
              heading="Pending for Approval"
              textStyle={{ color: Colors.black, fontSize: 15 }}
              tabStyle={{ backgroundColor: Colors.white }}
              activeTextStyle={{
                color: Colors.primary,
                fontSize: hp("2.3"),
                fontWeight: "bold",
              }}
              activeTabStyle={{ backgroundColor: Colors.white }}
            >
              {/* <TeamBoarding/> */}
              {/* <MyBoarding id={"Pending for Approval"}/>
            </Tab>
          } */} 
          <Tab
            heading="Approval Status"
            textStyle={{ color: Colors.white, fontFamily: ApplicationStyles.textMsgFont, }}

            tabStyle={{ backgroundColor: Colors.primary }}

            activeTextStyle={{
              color: Colors.white,
              fontWeight: "normal",
            }}
            activeTabStyle={{ backgroundColor: Colors.primary }}
          >
            <MyBoarding id={"Approved"}/>

            {/* <TeamBoarding/> */}
          </Tab>
          {/* <Tab
            heading="Rejected"
            textStyle={{ color: Colors.black, fontSize: 15 }}
            tabStyle={{ backgroundColor: Colors.white }}
            activeTextStyle={{
              color: Colors.primary,
              fontSize: hp("2.3"),
              fontWeight: "bold",
            }}
            activeTabStyle={{ backgroundColor: Colors.white }}
          >
            <MyBoarding id={"Rejected"}/>
          </Tab> */}
        </Tabs>

        {/* <TouchableOpacity
        style={Styles.plusIcon}
        onPress={() => NavigationService.navigate('KYCForm',{show:false})}
        >
        <GenericIcon
        name={'add'}
        style={{ color: Colors.white, fontSize: wp('11%'), alignSelf: 'center' }}
          />
          
        </TouchableOpacity>  */}
        {/* <TouchableOpacity
          style={{...Styles.plusIcon,}}
          onPress={() => NavigationService.navigate("RetailerKYCForm", { show: false })}
        >
          <GenericIcon
            name={"add"}
            style={{
              color: Colors.white,
              fontSize: wp("11%"),
              alignSelf: "center",
            }}
          />
        </TouchableOpacity> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.user.onboardingList,
  loading: state.user.getOnboardingLoading,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  psmList: state.user.psmList,
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
  fetchOnBoarding: (params) => dispatch(userActions.getOnboarding(params)),
  selectonBoarding: (params) =>
    dispatch(menuActions.SelectOnboardingList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding);

const Styles = StyleSheet.create({
  head: {
    height: hp("23%"),
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "column",
  },
  t1: {
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 50,
    color: "#FFFFFF",
  },
  t2: {
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#343434",
  },
  tt: {
    flexDirection: "row",
    height: hp("5%"),
    backgroundColor: "white",
    width: wp("85%"),
    borderRadius: 5,
    alignSelf: "center",
  },
  card: {
    height: hp("22%"),
    marginVertical: 20,
    width: wp("90%"),
    borderWidth: 0,
    elevation: 3,
    borderRadius: 3,
    alignSelf: "center",
    backgroundColor: "white",
  },
  plusIcon: {
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
  },
  tabBarUnderlineStyle: {
    backgroundColor: Colors.white,
    width: "22%",
    // marginHorizontal: 10,
    marginBottom: 0,
    borderRadius: 5,
    marginLeft:"10.5%"
  },
});
