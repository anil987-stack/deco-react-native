import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "../VisitsDisplayScreen/VisitsDisplayScreenStyles";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
//import VisitCard from 'App/Containers/Visits/VisitCard'
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors, ApplicationStyles } from "App/Theme";
import _ from "lodash";
import ObjectiveModal from "App/Containers/Visits/ObjectiveModal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "react-native-paper";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "App/Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
import Scouting1 from "./Scouting1";
import ScoutingCard from "./ScoutingCard";
import SelectUserModal from "App/Containers/Visits/VisitsDisplayScreen/SelectUserModal";
import AddScouting from "./AddScouting";

// const Scouting = ({ onPress,props,openModal ,closeModal}) => {
    class Scouting extends React.Component {
        render(
            openModal ,
            closeModal
        ) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: wp("60%"),
          elevation: 15,
          marginTop: wp("2%"),
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", marginLeft: "3%", elevation: 15 }}
          onPress={() => {
            this.props.openModal({
              content3: (
                <AddScouting
                  onClose={() => {
                    closeModal();
                  }}
                />
              ),
              heading3: "ADD SCOUTING",
              bodyFlexHeight3: 0.8,
            });
          }}
        >
          <GenericIcon
            name={"bike"}
            show={true}
            // onPress={() => this.getVisitsDisplayListCall()}
            style={{
              color: "black",
              fontSize: wp("5.7%"),
              alignSelf: "center",
              padding: 13,
              backgroundColor: "#FDFCFC",
              borderRadius: 18,
              width: "22%",
              height: hp("4.05%"),
              marginTop: hp("0.5%"),
              padding: 1.7,
              left: wp("6%"),
              paddingLeft: wp(".85%"),
              paddingTop: wp("1%"),
            }}
          />
          <LinearGradient
            colors={[Colors.white, "transparent"]}
            start={{ x: 0.2, y: 0.2 }}
            end={{ x: 0.7, y: 0.2 }}
            style={{
              height: hp("3%"),
              width: wp("22%"),
              top: "7%",
              left: "40%",
              // borderRadius: 5,
              opacity: 0.3,
            }}
          ></LinearGradient>
          <Text
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              color: "#D3D3D3",
              marginLeft: wp("-15%"),
              marginTop: hp("1.5%"),
              fontWeight: "bold",
              zIndex: 1000,
              fontSize: 10.5,
            }}
          >
            {"ADD SCOUTING"}
          </Text>
          {/* <View style={{backgroundColor:"white",opacity:0.5,height:"36%",top:"6%"}}> */}
          {/* <Text style={{fontFamily: "HelveticaNeue_CondensedBold",top:"8%",left:"20%",fontWeight:"bold",zIndex:10000,color:"white",fontSize:11,}}>{"ADD VISIT"}</Text> */}
          {/* </View> */}
        </TouchableOpacity>
      </View>
      <View>
        <Scouting1 />
      </View>
      <View>
        <ScoutingCard />
      </View>
    </View>
  );
};
    }
const mapStateToProps = (state) => ({
  token: state.user.token,
  userid: state.user.loginDetails.userId,
  agentid: state.user.loginDetails.userId,
  visitsDisplayList: state.visits.visitsDisplayList,
  visitsStorageList: state.visits.visitsStorageList,
  visitsAction: state.visits.visitsAction,
  fetchVisitsDisplayListLoader: state.visits.fetchVisitsDisplayListLoader,
  searchFilters: state.visits.searchFilters,
  filteredDisplayData: state.visits.filteredDisplayData,
  categoryRatingMapping: state.common.categoryRatingMapping,
  startVisitLoader: state.visits.startVisitLoader,
  endVisitLoader: state.visits.endVisitLoader,
  isASM: state.user.isASM,
  psmList: state.user.psmList.concat([{ id: "", name: "All" }]),
  startedToday: state.user.startDayTime
    ? HelperService.isToday(state.user.startDayTime)
    : false,
  endedToday: state.user.endDayTime
    ? HelperService.isToday(state.user.endDayTime)
    : false,
  absentToday: state.user.absentDayTime
    ? HelperService.isToday(state.user.absentDayTime)
    : false,
  executeVisitData: state.visits.executeVisitData,
  startVisitLoadingId: state.visits.startVisitLoadingId,
  endVisitLoadingId: state.visits.endVisitLoadingId,
  isObjModalVisible: state.common.isObjModalVisible,
  businessChannel: state.user.user_details
    ? state.user.user_details.business_channel__c
    : "",
});
const mapDispatchToProps = (dispatch) => ({
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Scouting);
