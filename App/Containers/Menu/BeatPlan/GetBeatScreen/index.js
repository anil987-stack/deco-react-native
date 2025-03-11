import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import Style from "./style";
import { ApplicationStyles, Colors, Fonts } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../";
import { HelperService } from "App/Services/Utils/HelperService";
import DisplayCard from "App/Components/GenericDisplayCard/GenericDisplayCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BeatThird from "../../../../Components/Menu/BeatThirdComponent";
import BlueButton from "../../../../Components/BlueButton";
import { connect } from "react-redux";
import UserActions from "App/Stores/User/Actions";
import _ from "lodash";
class GetBeatScreen extends Component {
  componentDidMount() {
    this.props.fetchBeat();
  }

  onAddClick(params) {
    // console.log("params",params);
    const {
      selectedBeat,
      addBeatToPlan,
      userid,
      managerid,
      data,
      searchFilters,
    } = this.props;

    const { user } = this.props.navigation.state.params;
    let Beatdata = {};
    if (_.isEmpty(selectedBeat)) {
      Beatdata = {
        "line": [{ Area: params.Area__c }],
        "visit_date": HelperService.dateReadableFormatWithHyphen(
          searchFilters["startDate"]
        ),
        "owner":user ? user : userid,
        "Name":"Pjp Testing"
        
        };
        
    } else {
      let line = selectedBeat.line;
      line.push({ Area: params.Area__c });
      Beatdata = {
        "line":line,
        "visit_date":HelperService.dateReadableFormatWithHyphen(
          searchFilters["startDate"]
        ),
        "owner":user ? user : userid,
        "Name":"Pjp Testing"
           
        }
        
    }

    Beatdata = HelperService.decorateWithLocalId(Beatdata);
    // console.log("beatdata",Beatdata);
    addBeatToPlan(Beatdata);
  }

  onRemoveClick(params) {
    const { selectedBeat, addBeatToPlan, userid, managerid, data } = this.props;
    const { user } = this.props.navigation.state.params;
    if (!_.isEmpty(selectedBeat)) {
      let lineArray = selectedBeat.line.filter(function(obj) {
        return obj.Area != params.Area__c;
      });
      let Beatdata = {};
      if (lineArray.length) {
        Beatdata = {
          "line": lineArray,
          "visit_date": HelperService.dateReadableFormatWithHyphen(
            selectedBeat.date
          ),
          "owner":user ? user : userid,
          "Name":"Pjp Testing",
             
          }
          
      }
      addBeatToPlan(Beatdata);
    }

    // console.log(selectedBeat)
  }

  onSubmit() {
    const { submitbeat, selectedBeat, token, agentid } = this.props;

    Alert.alert(
      "Submit  Beat Plan",
      "Do you want to submit your Beat plan?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => submitbeat({ form: selectedBeat, token: token }),
        },
      ],
      { cancelable: false }
    );
  }

  isBeatAdded(item) {
    const { selectedBeat, selectedVisitDate, selectedVisitPSM } = this.props;

    let isAdded = false;

    //  console.log("selected beat",selectedBeat);
    if (!_.isEmpty(selectedBeat)) {
      selectedBeat.line.map((obj) => {
        if (obj.Area == item.Area__c) {
          isAdded = true;
        }
      });
    }

    return isAdded;
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,
      Approved,
      loader,
      searchFilters,
      filteredPjpDisplayData,
    } = this.props;

    if (data && data.length) {
      let filteredSitesList = data;

      //  console.log("data",data)

      if (filteredSitesList.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredSitesList}
            renderItem={({ item }) => (
              <BeatThird
                item={item}
                addbeat={() =>
                  this.isBeatAdded(item)
                    ? this.onRemoveClick(item)
                    : this.onAddClick(item)
                }
                added={this.isBeatAdded(item)}
              />
            )}
            keyExtractor={(item) => item.Id}
            refreshing={loading}
            //onRefresh={() => this.fetchcal()}
          />
        );
      } else {
        visibleNode = <NoDataFound text={"Not  Found"} />;
      }
    } else if (loading) {
      visibleNode = <Loading />;
    } else if (!data || (data && !data.length && !loading)) {
      visibleNode = <NoDataFound text={"Not Found"} />;
    }

    return visibleNode;
  }

  render() {
    const { data, beatlistadded } = this.props;

    //  console.log("?false:true",_.isEmpty(beatlistadded))

    return (
      <View style={{ flex: 1 }}>
        <View>{this.getDataNode()}</View>
        <View
          style={{
            ...ApplicationStyles.plusIcon,
            width: "30%",
            height: "6%",
            borderWidth: 0,
            backgroundColor: "transparent",
            marginBottom: 5,
          }}
          onPress={() => NavigationService.navigate("BeatSecondScreen")}
        >
          <BlueButton
            title={"Submit"}
            disabled={_.isEmpty(beatlistadded) ? true : false}
            onPress={() => this.onSubmit()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  userid: state.user.loginDetails.userId,
  data: state.common.TerritoryAllList,
  searchFilters: state.user.searchFilters,
  loading: state.user.fetchPjpLoading,
  month: state.user.monthNumber,
  filteredPjpDisplayData: state.user.filteredPjpDisplayData,
  selectedBeat: state.user.beatlistadded,
  managerid: state.startday.userDetailList.managerid,
  beatlistadded: state.user.beatlistadded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  fetchBeat: (params) => dispatch(UserActions.fetchAllAreas(params)),
  addBeatToPlan: (params) => dispatch(UserActions.addBeatList(params)),
  submitbeat: (params) => dispatch(UserActions.createPjp(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetBeatScreen);
