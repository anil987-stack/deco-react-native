import { ApplicationStyles, Colors } from "App/Theme";
import { Tab, Tabs, Container, ScrollableTab } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { HelperService } from "../../Services/Utils/HelperService";
import _ from "lodash";
import LocalActions from "App/Stores/LocalExpense/Actions";
import SearchBar from "App/Components/SearchBar";
import { ImageBackground } from "react-native";
import { HeaderNew } from "App/Components/Headerbar/HeaderNew";
import FilterNew from "App/Components/Filters/FilterNew";
import PendingCard from "./Pending";
import RejectCard from "./Reject";
import CommonActions from "App/Stores/Common/Actions";
import ProductActions from "App/Stores/Products/Actions";
import InfluencerManagementHeader from "./InfluencerManagementHeader";
import DraftCard from "./Draft";
import Approved from "./Approved";
class InfluencerManagement extends Component {
  componentDidMount() {
    const { InfluencerTabFilter } = this.props;
    InfluencerTabFilter("approved");
  }
  getCardNode() {
    const {
      showCard,
      hideCard,
      cardValue,
      cardStatus,
      dealerVisitList,
      loader1,
      infoForm,
      serviceInfo,
    } = this.props;

    let visibleNode = [];

    // if (serviceInfo && serviceInfo.length) {

    //     let filteredList = serviceInfo;
    //     if (filteredList.length) {
    //         console.log("filteredList",filteredList)
    visibleNode = (
      <FlatList
        // data={filteredList}
        // style={{backgroundColor:"black",}}
        contentContainerStyle={{ paddingBottom: hp("8%"), paddingTop: 10 }}
        // onRefresh={() => this.fetchCall()}
        showsVerticalScrollIndicator={false}
        // keyExtractor={item => (item.sfid)}
        // refreshing={loader1}
        //  onRefresh={() => this.fetchCall()}
        renderItem={({ item }) => <DraftCard />}
      />
    );

    return visibleNode;
  }

  render() {
    const { openModal, closeModal, influencerTab } = this.props;
    let retailers = true;
    let data = this.props.data;

    return (
      <>
        <ImageBackground
          style={Styles.imgBackground}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          {/* <View style={{ flex: 1, marginBottom: hp("30%") }}> */}
          <HeaderNew
            title={"INFLUENCER "}
            textStyle={{
              //   top: hp("-1.8%"),
              marginLeft: wp("2%"),
              //   fontSize: wp("5.6%"),
            }}
            onPress={() => {
              NavigationService.navigate("InfluencerKYCForm");
            }}
            buttonTitle={"ADD"}
            gradientStyle={{ width: wp("20%"), top: "-1%", }}
            iconname={"text-box-plus-outline"}
            iconStyle={{ padding: 4, fontSize: wp("5.5%"),marginLeft:wp("16%") }}
            onpressContainerStyle={{ marginLeft: wp("8%") }}
          />
          <FilterNew
            searchContainer={Styles.searchBar}
            outerStyle={{ marginTop: hp("1%") }}
            searchbarStyle={{ width: wp("86%") }}
          />

          <InfluencerManagementHeader />

          {influencerTab === "approved" ? <Approved /> : null}
          {influencerTab === "draft" ? <DraftCard /> : null}
          {influencerTab === "pending" ? <PendingCard /> : null}
          {influencerTab === "reject" ? <RejectCard /> : null}
        </ImageBackground>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  influencerTab: state.products.InfluencerTabFilter,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),

  InfluencerTabFilter: (params) =>
    dispatch(ProductActions.InfluencerTabFilter(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfluencerManagement);

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("0%"),
  },
  cardstyle: {
    backgroundColor: Colors.darkRedPink,
    width: wp("100%"),
    top: hp("-1%"),
    height: hp("18%"),
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  backarrow: {
    color: Colors.background,
    fontSize: 34,
    paddingRight: 360,
    paddingTop: 15,
  },
  title: {
    fontFamily: "Rubik",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    bottom: hp("1%"),
  },
  titleText: {
    color: Colors.black,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 28,
    fontWeight: "bold",
  },

  date: {
    fontSize: 28,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("2%"),
    top: hp("2%"),
  },
  month: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("-0.5%"),
    top: hp("1.5%"),
  },
  head: {
    fontSize: 15,
    fontFamily: "Rubik",
    // left: hp("1%"),
    fontWeight: "bold",
    color: Colors.background,
    top: hp("-1%"),
    // width:wp("15%"),
    position: "absolute",
  },

  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  searchBar: {
    opacity: 0.2,
  },
});
