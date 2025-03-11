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
// import KYCForm from './KYCForm';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GenericIcon from "App/Components/GenericIcon";
import { HelperService } from "App/Services/Utils/HelperService";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import OnboardingCard from "../onboardingCard";
import menuActions from "App/Stores/Menu/Actions";
class MyBoarding extends Component {
  componentDidMount() {
    // this.fetchcall();
  }
componentWillUnmount(){
  const { token, userid, fetchOnBoarding,changeSearchFilters } = this.props;
  changeSearchFilters({ edited_field: 'name', 'edited_value': '' })
}
  fetchcall() {
    const { token, userid, fetchOnBoarding,changeSearchFilters } = this.props;
    
    fetchOnBoarding({
      token,
      
    });
  }

  // onboarding(params){

  //     NavigationService.navigate("KYCForm");
  // }

  filterResults(list) {
   
    let searchFilters = this.props.searchFilters;
    const { token, userid } = this.props;
    const { id } = this.props;
    let result = "";
    result = list.filter((obj) => obj.Overall_Status__c== id);
    // console.log(result,"result1");
    // result = HelperService.sortListFilter(result, "SFDC_Customer_Code__c", "DSC")
    return result;
  }
  filterResult(list) {
    
    
    let searchFilters = this.props.searchFilters;

    let filteredList = HelperService.sortDesc(list, "CreatedDate");
    // console.log(filteredList,"result2");
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "Name",
      searchFilters["name"]
    );
    console.log("filteredList",filteredList);
    return filteredList;
  }
  ss(params) {
    
   this.props.selectonBoarding(params);
   NavigationService.navigate("KYCForm", { show: true });
  }
  submit(params) {
    // console.log("params", params);
    const { token, userid, managerId, submitForApproval } = this.props;

    let requestData = {
      requests: [
        {
          "actionType": "Submit",
          "contextId":params.Id, 
          "nextApproverIds": [""], 
          "comments":"this is a test",
          "contextActorId":userid,
          "processDefinitionNameOrId" : "Onboarding_Approval_Process",
          "skipEntryCriteria": "true"


        },
      ],
    };

    submitForApproval({ payload: requestData, token });
  }

  getDataNode(item) {
    const {
      data,
      loading,
      searchFilters,
      fetchOnBoarding,
      selectonBoarding,
      loader,
    } = this.props;
    const { id } = this.props;
    return (
      <OnboardingCard
        onboardingdata={item}
        loader={loader}
        status={id}
        onclickable={() => this.ss(item)}
        // submitForApproval={() => this.submit(item)}
      />
    );
  }

  render() {
    const {
      data,
      loading,
      searchFilters,
      fetchOnBoarding,
      loader,
    } = this.props;
    const { id } = this.props;
    // console.log("kkkkkkkkkkk", id);
    let visibleNode = [];

    if (data && data.length) {
      let searchedFilteredList = this.filterResults(data);
      console.log(searchedFilteredList,"hhhssdd");
      let searchedList = this.filterResult(searchedFilteredList);
      if (searchedList.length) {
        visibleNode = (
          <FlatList
            data={searchedList}
            renderItem={({ item }) => this.getDataNode(item)}
            onRefresh={() => this.fetchcall()}
            refreshing={loading}
            keyExtractor={(item) => item.Id}
          />
        );
      } else {
        visibleNode = (
          <NoDataFound
            text={"No Record found for selected filter."}
            style={{marginTop:hp('20')}}
          >
           
          </NoDataFound>
        );
      }
    } else if (loading) {
      visibleNode = <Loading />;
    } else if (data && !data.length && !loading) {
      visibleNode = (
        <NoDataFound text={"No Record found for this date."} >
          <GenericIcon
            name={"refresh"}
            show={true}
            onPress={() => this.fetchcall()}
            style={{
              color: Colors.primary,
              fontSize: 35,
              alignSelf: "center",
              padding: 10,
            }}
          />
        </NoDataFound>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View>
          {visibleNode}
         
        </View>

        {/* <TouchableOpacity
          style={Styles.plusIcon}
         onPress={() => NavigationService.navigate('KYCForm',{show:false})}
          >
               <GenericIcon
            name={'add'}
            style={{ color: Colors.white, fontSize: wp('12%'), alignSelf: 'center' }}
          /> */}
        {/* <Image
                        style={{ width: 40, height: 40, borderRadius: 3, tintColor: Colors.white, }}
                        source={require('App/Assets/Images/plus.png')}
                    /> */}
        {/* </TouchableOpacity>  */}
        {/*             
                <TouchableOpacity
                onPress={() => NavigationService.navigate('KYCForm')}
                style={{left:hp('40%'), top:hp('30%')}}>
                    <Image
                        style={{ width: 45, height: 45, borderRadius: 3, tintColor: Colors.primary, }}
                        source={require('App/Assets/Images/plus.png')}
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
  managerId: state.startday.userDetailList.ManagerId,
  loader: state.menu.submitForApprovalLoader,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) => dispatch(userActions.updateSearchFilters(params)),
  changeType: (params) => dispatch(LocalActions.changeType(params)),
  fetchOnBoarding: (params) => dispatch(userActions.getOnboarding(params)),
  selectonBoarding: (params) =>
    dispatch(menuActions.SelectOnboardingList(params)),
  submitForApproval: (params) =>
    dispatch(menuActions.submitForApproval(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBoarding);

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
    bottom: 15,
    position: "absolute",
    // right: 25,
    alignSelf: "flex-end",
    borderRadius: 50,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "12%",
    height: "9%",
    borderWidth: 0,
    right: "10%",
  },
});
