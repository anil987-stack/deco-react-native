import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Input,
  Item,
  Right,
  Badge,
  Spinner,
} from "native-base";
import NavigationService from "App/Services/NavigationService";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
import GenericIcon from "App/Components/GenericIcon";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _ from "lodash";
import Backbutton from "../../../Components/BackArrowButton";
import CommonActions from "App/Stores/Common/Actions";
import UserActions from "App/Stores/User/Actions";
import SearchBar from "App/Components/SearchBar";
import WhiteButton from "App/Components/WhiteButton";
import ProductActions from "App/Stores/Products/Actions";

class SecondaryBookOrderLayout extends React.Component {
  componentDidMount() {
    const {} = this.props;
  }
  componentWillUnmount() {
    // this.props.clearcart();
    this.props.changeForm({
      edited_field: "quantity__c",
      edited_field1: "id",
      edited_value: "",
    });
  }

  fetchCall() {
    const {
      token,
      getAllPartMaster,
      productList,
      userdetail,
      bookorder,
      searchProductFilters,
    } = this.props;
    getAllPartMaster({
      token,
      vertical: bookorder.vertical,
      branch: userdetail.Branch_Master__c,
      search: searchProductFilters["name"],
    });
  }

  onFilterChange(value) {
    const {
      changeSearchFilters,
      getVisitsDisplayList,
      searchFilters,
      token,
      getAreaPjp,
      beatList,
      businessChannel,
      userid,
      agentid,
    } = this.props;
  }
  filterResults(list) {
    // console.log(list[0].PJP_Beats__r.records)
    let searchFilters = this.props.searchFilters;
    // console.log("jeje",searchFilters)
    let filteredList = HelperService.searchTextListVisitFilter(
      list,
      "Visit_Date__c",
      searchFilters["startDate"]
    );
    // filteredList = HelperService.searchTextListFilter(filteredList, 'visit', searchFilters['area'], 'area__c');
    // console.log(filteredList)
    return filteredList;
  }
  // backpress(){
  //   NavigationService.goback,
  //   this.props.clearcart();

  // }

  render() {
    const {
      changeSearchFilters,
      searchProductFilters,
      cartProduct,
    } = this.props;

    return (
      <View style={Styles.header}>
        <View style={{ flexDirection: "row", marginRight: wp("0%") }}>
          <TouchableOpacity transparent>
            <GenericIcon
              name={"arrow-back"}
              onPress={NavigationService.goback}
              style={{
                color: Colors.white,
                fontSize: wp("8%"),
                marginLeft: hp("1"),
                marginTop: hp("1"),
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginHorizontal: wp("20%"),
              color: Colors.white,
              marginTop: hp("1.5"),
            }}
          >
            Book Order
          </Text>
          <View style={{ flexDirection: "row", right: wp("10%") }}>
            <TouchableOpacity
              style={{
                marginRight: wp("2%"),
                height: hp("6"),
                marginTop: hp("0.5%"),
              }}
              onPress={() =>
                NavigationService.navigate("PurchaseOrderfilter", {
                  show: "secondary",
                })
              }
            >
              <GenericIcon
                name={"filter-list"}
                style={{
                  color: Colors.white,
                  fontSize: wp("9%"),
                  marginTop: hp("1"),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              transparent
              style={{ marginRight: wp("-1%"), marginTop: hp("1") }}
              onPress={() => NavigationService.navigate("SecondarycartScreen")}
            >
              <GenericIcon
                name={"shopping-cart"}
                style={{
                  color: Colors.white,
                  fontSize: wp("8%"),
                  marginTop: hp("1"),
                }}
              />
            </TouchableOpacity>
            <Badge style={Styles.countBadge}>
              <Text style={Styles.countBadgeText}>
                {cartProduct ? cartProduct.length : "0"}
              </Text>
            </Badge>
          </View>
        </View>
        {/* <WhiteButton 
                 title={`Cart `} 
                 style={{...Styles.actionButton, ...Styles.customSelectedStyleCorpBlue,marginLeft:wp('29%') }}
                 textStyle={{...Styles.actionButtonText,color:Colors.primary }}
                //  onPress={() => {NavigationService.navigate('VisitOrderCart'); this.scrollToIndex(1)}} 

                 onPress={() => {NavigationService.navigate('VisitCart'); this.scrollToIndex(1)}} 
                 
                //   selected={currentScreen == 'VisitOrderCart'}
                  customSelectedStyle={{...Styles.customSelectedStyleCorpBlue, ...Styles.selected}}
                  customSelectedTextStyle={Styles.customSelectedTextStyle}
               >
            </WhiteButton> */}

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            backgroundColor: "white",
            borderRadius: 10,
            height: hp("6"),
            // paddingRight: 10,
            marginTop: hp("2"),
          }}
        >
          <SearchBar
            placeholder={`Search`}
            onInputChange={(text) =>
              changeSearchFilters({ edited_field: "name", edited_value: text })
            }
            onInputSubmit={(text) =>
              changeSearchFilters({ edited_field: "name", edited_value: text })
            }
            onInputClear={(text) =>
              changeSearchFilters({ edited_field: "name", edited_value: "" })
            }
            value={searchProductFilters["name"]}
            ContainerStyles={Styles.searchContainer}
          />
          {/* <Text style={{fontSize:13,marginTop:hp('1.5'),color:Colors.grey}}>filter</Text> */}
          <TouchableOpacity
            style={{
              marginLeft: wp("2%"),
              height: hp("6"),
              marginTop: hp("0"),
              justifyContent: "center",
              backgroundColor: "#C1E1C1",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              width: wp("20%"),
            }}
            onPress={() => this.fetchCall()}
          >
            <Text style={{ textAlign: "center" }}>Search</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity transparent style={{marginRight:wp('-1%'),marginTop:hp('0'),backgroundColor:'black'}}
                            >
                         <GenericIcon
                        name={'equalizer'}
                    
                        style={{ color:Colors.grey,fontSize: wp('5%'),marginTop:hp('1')}}
                    /> */}
        {/* <Image
              style={{ height: 20, width: 25, margin: 10 }}
        
              source={require("App/Assets/Images/filter.png")}
            /> */}
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  visitsDisplayList: state.visits.visitsDisplayList,
  filteredDisplayData: state.visits.filteredDisplayData,
  token: state.user.token,
  agentid: state.user.id,
  // agentid: state.user.id,
  userid: state.user.loginDetails.userId,
  searchProductFilters: state.products.searchFilters,
  cartProduct: state.products.addtocart,
  userdetail: state.startday.userDetailList.Employees__r.records[0],
  bookorder: state.products.BookOrderForm,
});

const mapDispatchToProps = (dispatch) => ({
  //	changeSearchFilters: (params) => dispatch(ProductActions.changeSearchProductFilters(params)),
  changeSearchFilters: (params) =>
    dispatch(ProductActions.changeSearchFilters(params)),
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  clearcart: () => dispatch(ProductActions.ClearCart()),
  changeForm: (params) => dispatch(ProductActions.changeBookOrderForm(params)),
  getAllPartMaster: (params) => dispatch(UserActions.getAllPartMaster(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryBookOrderLayout);

const Styles = StyleSheet.create({
  header: {
    height: hp("20%"),
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },

  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.primary,
    fontSize: wp("4%"),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  countBadge: {
    backgroundColor: Colors.white,
    padding: 0,
    borderWidth: 0.5,
    borderColor: Colors.primary,
    height: wp("6%"),
    width: wp("6%"),
    top: "15%",
    position: "absolute",
    borderRadius: wp("10%"),
    left: "85%",
    alignItems: "center",
    justifyContent: "center",
  },
  countBadgeText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight:"bold"
  },
  heading: {
    alignSelf: "center",
    color: "white",
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.2%"),
    marginBottom: 0,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 15,
    // width: '83%',
    borderRadius: 10,
    // paddingHorizontal: 20,
    //elevation: 10,
    backgroundColor: "white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    color: Colors.blue,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 10,
    //  marginTop:-20,
    width: wp("65"),
    height: wp("9%"),
  },
});
