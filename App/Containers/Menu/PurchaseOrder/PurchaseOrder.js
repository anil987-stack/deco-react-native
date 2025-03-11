import LocalActions from "App/Stores/LocalExpense/Actions";
// import Colors from 'App/Theme/Colors';
import { Tab, Tabs, Container, ScrollableTab } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import Style from "./PurchaseStyles";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Switch,
  ScrollView,
  Modal,
} from "react-native";
import CancelledCard from "./CancelledCard";
import RejectedCard from "./RejectedCard";
import OnHoldCard from "./OnHoldCard";
import ApprovedCard from "./ApprovedCard";
import NavigationService from "App/Services/NavigationService";
import BookOrder from "../BookOrder/BookOrder";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Select from "App/Components/Select";
import SelectDate from "../../../Components/SelectDate";
import TextArea from "App/Components/FormInput/TextArea";
import { Colors, ApplicationStyles } from "App/Theme";
import _ from "lodash";
import RetailersActions from "App/Stores/Retailers/Actions";
import ProductActions from "App/Stores/Products/Actions";
import GenericIcon from "App/Components/GenericIcon";
import { HelperService } from "App/Services/Utils/HelperService";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import SearchableDropdown from "../../../Components/SearchableDropdown";
import BrandComponent from "App/Components/BrandComponent";
import NotCreated from "./NotCreated";
import Blocked from "./Blocked";

const vertical = [
  { id: "Delphi-TVS", name: "Delphi-TVS" },
  { id: "INEL", name: "INEL" },
  { id: "Lispart", name: "Lispart" },
  { id: "Others", name: "Others" },
  { id: "L and O", name: "L and O" },
  { id: "Battery", name: "Battery" },
  { id: "Lubes", name: "Lubes" },
  { id: "Lucas-TVS", name: "Lucas-TVS" },
];
class PurchaseOrder extends Component {
  state = {
    isVisible: false,
    toggle: false,
    imageViewerModalVisible: false,
    productImagesToShowInModal: [],
    addressVisible: false,
    // open_modal:false,
  };

  componentDidMount() {
    // console.log("hellow world")

    const {
      retailersList,
      token,
      agentid,
      fetchRetailers,
      clearBookOrderForm,
      clearcart,
      fetchPlant,
    } = this.props;

    clearBookOrderForm();
    clearcart();
    if (retailersList && !_.isEmpty(retailersList)) {
      //  updateSearchFilters({ edited_field: 'type', 'edited_value': retailersList[1].Account_Type__c })
    } else {
      fetchRetailers({ token, agentid });
    }
    // fetchPlant({token, agentid})
  }

  displayModal(show) {
    this.setState({ isVisible: show });
  }
  closeModal(show) {
    this.setState({ isVisible: show });
  }
  // sortlist(list){
  //     let result='',

  //     result = list.filter((obj) => obj.Account_Type__c == 'DBA' && obj.Account_Type__c=='RBA' );
  //     return result
  // }
  searchKeyValueInList(list) {
    let result = "";
    // console.log(list,"list");
    result = list.filter(
      (obj) => obj.Account_Type__c == "DBA" || obj.Account_Type__c == "RBA"
    );
    // console.log("result",result);
    return result;
  }

  getDistributor() {
    const { retailersList } = this.props;
    let distributor = [];
    if (retailersList && retailersList.length) {
      retailersList.map((obj) => {
        if ( 
          obj.Sub_Category__c !== "RETAILER" &&
          obj.Sub_Category__c !== "2WH MECHANIC" &&
          obj.Sub_Category__c !== "2WH RETAILER" &&
          obj.Sub_Category__c !== "PROSPECT- SECONDARY" &&
          obj.Sub_Category__c !== "PROSPECT- PRIMARY" &&
          obj.Sub_Category__c !== "JODIDARS"
        ) {
          distributor.push({
            id: obj.Id,
            name: obj.SAP_Customer_No__c?obj.Name + " " + `(${obj.SAP_Customer_No__c})`:obj.Name,
          });
        }
      });
    }
    return distributor;
  }

  render() {
    const {
      plantList,
      changeType,
      retailersList,
      fetchRetailersLoader,
      changeBookOrderForm,
      BookOrderForm,
      type,
      fetchPlant,
      token,
    } = this.props;
    // console.log(BookOrderForm)

    let dbaSearchableList = HelperService.convertToDropDownListRetailerFormatLabel(
      {
        list: !_.isEmpty(retailersList) ? retailersList : [],
        id_key: "Id",
        label_key: "Name",
      }
    );
    let dbaSearchable = HelperService.convertToSearchableListFormat({
      list: !_.isEmpty(retailersList)
        ? this.searchKeyValueInList(retailersList)
        : [],
      id_key: "Id",
      label_key: "Name",
    });

    const options = [
      { id: "", name: "Select Distributor..." },
      { id: "chocolate", name: "Chocolate" },
      { id: "strawberry", name: "Strawberry" },
      { id: "vanilla", name: "Vanilla" },
    ];
    const options1 = [
      { value: "", label: "Select Plant..." },
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    if (!fetchRetailersLoader) {
    }
    return (
      <Container style={{ marginHorizontal: 5 }}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isVisible}
        >
          <View style={Styles.modal}>
            <View
              style={{
                backgroundColor: "white",
                margin: 30,
                top: hp("25%"),
                height: hp("40%"),
                borderRadius: 5,
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <GenericIcon
                  name={"cancel"}
                  onPress={() => this.closeModal(false)}
                  style={{
                    color: Colors.primary,
                    margin: 1,
                    fontSize: wp("9%"),
                  }}
                />
              </View>

              <View style={{ height: hp("9"), alignSelf: "center" }}>
                <SearchableDropdown
                  dataSource={this.getDistributor()}
                  // dataSource={HelperService.convertToSearchableListFormatWithCode(
                  //   {
                  //     list: retailersList,
                  //     id_key: "Id",
                  //     label_key: "Name",
                  //     name_key: "SAP_Customer_No__c",
                  //   }
                  // )}
                  placeHolderText={"Select Party"}
                  //  selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                  selectedValue={BookOrderForm.Customer}
                  onChange={(value) => {
                    changeBookOrderForm({
                      edited_field: "Customer",
                      edited_value: value,
                    });
                    if (value) {
                      // console.log("value",value)
                      let address = retailersList.filter((obj) => {
                        return obj.Id == value;
                      });
                      console.log("address", address);
                      address = address[0];
                      changeBookOrderForm({
                        edited_field: "AvailableCreditLimit",
                        edited_value: address.Available_Credit_Limit__c
                          ? address.Available_Credit_Limit__c
                          : "",
                      });
                      changeBookOrderForm({
                        edited_field: "CustomerStatus",
                        edited_value: address.Customer_Status__c
                          ? address.Customer_Status__c
                          : "",
                      });
                      changeBookOrderForm({
                        edited_field: "OverdueAmount",
                        edited_value: address.Overdue_Amount__c
                          ? address.Overdue_Amount__c
                          : "",
                      });
                    }
                  }}
                  label={"Ship To Party"}
                  customPickerStyles={{ ...Styles.picker }}
                  labelStyles={{ ...Styles.pickerLabel }}
                  stylelabel={{
                    fontSize: hp("2"),
                    marginLeft: wp("4.5"),
                    color: "#515C6F",
                  }}
                />
              </View>

              <View style={{ alignSelf: "center" }}>
                <View style={{ height: hp("9"), alignSelf: "center" }}>
                  <SearchableDropdown
                    //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
                    dataSource={this.getDistributor()}
                    placeHolderText={"Select party"}
                    // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                    selectedValue={BookOrderForm.ordertype}
                    onChange={(value) => {
                      changeBookOrderForm({
                        edited_field: "ordertype",
                        edited_value: value,
                      });
                    }}
                    label={"Bill To Party"}
                    customPickerStyles={{ ...Styles.picker }}
                    labelStyles={{ ...Styles.pickerLabel }}
                    stylelabel={{
                      fontSize: hp("2"),
                      marginLeft: wp("4.5"),
                      color: "#515C6F",
                    }}
                  />
                </View>
                <View style={{ height: hp("9"), alignSelf: "center" }}>
                  <SearchableDropdown
                    //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
                    // dataSource={vertical}
                    placeHolderText={"Select Order Type"}
                    // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
                    selectedValue={BookOrderForm.vertical}
                    onChange={(value) => {
                      changeBookOrderForm({
                        edited_field: "vertical",
                        edited_value: value,
                      });
                    }}
                    label={"Order Type"}
                    customPickerStyles={{ ...Styles.picker }}
                    labelStyles={{ ...Styles.pickerLabel }}
                    stylelabel={{
                      fontSize: hp("2"),
                      marginLeft: wp("4.5"),
                      color: "#515C6F",
                    }}
                  />
                </View>

                {/* <View style={{ width:wp('74'),alignSelf:'center' }}> 
                            <Text style={{marginTop:hp('2%'),marginLeft:wp('1'),color:'#515C6F',fontFamily: ApplicationStyles.textMsgFont,
                                fontSize: 14}}>Cash Discount Applicable</Text>
                        <Switch
                            style={{marginLeft:wp('0%'),alignItems:'flex-end',marginTop:wp('-4%')}}
                            trackColor={{ false: '',true: Colors.primary }}
                            thumbColor="white"
                            ios_backgroundColor="gray"
                            onValueChange={(value) => {
                                this.setState({ toggle: value })
                                value?value="Yes":value="No";
                                changeBookOrderForm({ edited_field: 'cash_discount_available', edited_value: value })
                            }}
                            value={this.state.toggle}
                        />
                            </View> */}

                <TouchableOpacity style={Styles.btn}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      textAlign: "center",
                      marginTop: 4.5,
                      fontWeight: "bold",
                    }}
                    onPress={() => {
                      
                         this.displayModal(!this.state.isVisible);
                        NavigationService.navigate("BookOrder");
                      
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </View>
        </Modal>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.addressVisible}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: hp("100%"),
              elevation: 10,
            }}
          >
            <View
              style={{
                width: wp("90%"),
                backgroundColor: "white",
                height: hp("40%"),
                elevation: 10,
              }}
            >
              <GenericIcon
                name={"cancel"}
                onPress={() => {
                  this.setState({ addressVisible: false });
                }}
                style={{
                  color: Colors.primary,
                  margin: 1,
                  alignSelf: "flex-end",
                  fontSize: wp("9%"),
                }}
              />
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: wp("45%") }}>
                  <Text
                    style={{
                      marginTop: hp("2%"),
                      marginLeft: wp("1"),
                      color: "#515C6F",
                      fontFamily: ApplicationStyles.textMsgFont,
                      fontSize: 14,
                    }}
                  >
                    City
                  </Text>
                  <InputText
                    placeholder={"City "}
                    style={{
                      marginLeft: wp("2%"),
                      marginTop: hp("1%"),
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                    onChange={(value) =>
                      changeBookOrderForm({
                        edited_field: "new_city",
                        edited_value: value,
                      })
                    }
                    value={BookOrderForm.new_city}
                  />
                </View>
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      marginTop: hp("2%"),
                      marginLeft: wp("1"),
                      color: "#515C6F",
                      fontFamily: ApplicationStyles.textMsgFont,
                      fontSize: 14,
                    }}
                  >
                    Postal Code
                  </Text>
                  <InputNumber
                    placeholder={"Postal Code"}
                    styles={{
                      marginLeft: wp("2%"),
                      marginTop: hp("1%"),
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                    value={BookOrderForm.new_postalcode}
                    onChange={(value) =>
                      changeBookOrderForm({
                        edited_field: "new_postalcode",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: wp("45%") }}>
                  <Text
                    style={{
                      marginTop: hp("2%"),
                      marginLeft: wp("1"),
                      color: "#515C6F",
                      fontFamily: ApplicationStyles.textMsgFont,
                      fontSize: 14,
                    }}
                  >
                    Region
                  </Text>
                  <InputNumber
                    placeholder={"Region "}
                    styles={{
                      marginLeft: wp("2%"),
                      marginTop: hp("1%"),
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                    value={BookOrderForm.new_region}
                    onChange={(value) =>
                      changeBookOrderForm({
                        edited_field: "new_region",
                        edited_value: value,
                      })
                    }
                  />
                </View>
                <View style={{ width: wp("40%") }}>
                  <Text
                    style={{
                      marginTop: hp("2%"),
                      marginLeft: wp("1"),
                      color: "#515C6F",
                      fontFamily: ApplicationStyles.textMsgFont,
                      fontSize: 14,
                    }}
                  >
                    Street
                  </Text>
                  <InputText
                    placeholder={"Street"}
                    style={{
                      marginLeft: wp("2%"),
                      marginTop: hp("1%"),
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                    value={BookOrderForm.new_street}
                    onChange={(value) =>
                      changeBookOrderForm({
                        edited_field: "new_street",
                        edited_value: value,
                      })
                    }
                  />
                </View>
              </View>
              {/* <View style={{width:wp('40%')}}>
                    <Text style={{marginTop:hp('2%'),marginLeft:wp('1'),color:'#515C6F',fontFamily: ApplicationStyles.textMsgFont,
                                fontSize: 14}}>Country</Text>
                                <TextInput  placeholder={"Country"}  style={{marginLeft:wp('2%'),marginTop:hp('1%'),borderWidth:1,borderColor:'black'}} value={BookOrderForm.Shipping_country} />
                                </View> */}
            </View>
          </View>
        </Modal>
        <View style={{ marginVertical: 10 }}>
          <BackArrowButton />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", paddingLeft: 10 }}>
            Primary Order
          </Text>
          <BlueButton
            style={Style.button}
            rounded
            //  onPress={() => NavigationService.navigate('BookOrderForm')}
            onPress={() => {
              this.displayModal(true);
            }}
            large
            title={"BOOK ORDER"}
            textStyle={{ fontSize: wp("2.8") }}
          />
        </View>

        <Tabs
          locked
          tabBarUnderlineStyle={Style.tabUnderLine}
          onChangeTab={({ i }) => changeType(i)}
          style={{ width: wp("90%"), alignSelf: "center" }}
          renderTabBar={() => (
            <ScrollableTab tabStyle={{ backgroundColor: "white" }} />
          )}
        >
          <Tab
            heading="Open"
            tabStyle={Style.tabHeading}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            textStyle={Style.tabText}
            activeTextStyle={Style.tabTextStyle}
          >
            <ApprovedCard />
          </Tab>
          <Tab
            heading="Delivered"
            tabStyle={Style.tabHeading}
            textStyle={Style.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Style.tabTextStyle}
          >
            {/* <OnHoldCard /> */}
            <ApprovedCard />
          </Tab>
          <Tab
            heading="Pending For Approval"
            tabStyle={Style.tabHeading}
            textStyle={Style.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Style.tabTextStyle}
          >
            {/* <RejectedCard /> */}
            <ApprovedCard />
          </Tab>
          <Tab
            heading="Rejected"
            tabStyle={Style.tabHeading}
            textStyle={Style.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Style.tabTextStyle}
          >
            {/* <CancelledCard /> */}
            <ApprovedCard />
          </Tab>
          {/* <Tab
            heading="Not Created"
            tabStyle={Style.tabHeading}
            textStyle={Style.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Style.tabTextStyle}
          >
            <NotCreated />
          </Tab> */}
          {/* <Tab
            heading="Blocked"
            tabStyle={Style.tabHeading}
            textStyle={Style.tabText}
            activeTabStyle={{ backgroundColor: Colors.primary }}
            activeTextStyle={Style.tabTextStyle}
          >
            <Blocked />
          </Tab> */}
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  // type: state.local.type
  token: state.user.token,
  fetchRetailersLoader: state.retailers.fetchRetailersLoader,
  agentid: state.user.loginDetails.userId,
  retailersList: state.retailers.retailersList,
  BookOrderForm: state.products.BookOrderForm,
  plantList: state.products.plantList,
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
  fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  changeBookOrderForm: (params) =>
    dispatch(ProductActions.changeBookOrderForm(params)),
  clearBookOrderForm: (params) =>
    dispatch(ProductActions.clearBookOrderForm(params)),
  fetchPlant: (params) => dispatch(ProductActions.fetchPlant(params)),
  clearcart: () => dispatch(ProductActions.ClearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder);

const Styles = StyleSheet.create({
  button: {
    width: wp("30%"),
    height: hp("4%"),
    borderRadius: 2,
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 5,
    alignSelf: "flex-end",
  },
  card: {
    height: hp("24%"),
    marginVertical: 20,
    width: wp("93%"),
    borderWidth: 0,
    elevation: 5,
    borderRadius: 3,
    alignSelf: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
  t1: {
    color: "#343434",
    marginVertical: 2,
    fontWeight: "bold",
  },
  t2: {
    marginVertical: 2,
    color: "#9A9A9A",
    textAlign: "right",
  },

  mb10: {
    marginBottom: hp("2%"),
    height: hp("5.5%"),
    fontSize: wp("3.5%"),
    borderWidth: 0,
    elevation: 4,
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button2: {
    width: wp("25%"),
    backgroundColor: "#D71E48",
    height: hp("3.5%"),
    borderRadius: 2,
    elevation: 5,
    marginLeft: hp("19%"),
  },
  modal: {
    backgroundColor: "lightgrey",
    height: hp("90%"),
    width: wp("100%"),
    alignSelf: "center",
    flex: 1,
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: hp("1%"),
    height: hp("5%"),
    width: wp("30%"),
  },
  dropdown: {
    height: hp("6%"),
    width: "100%",
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "#70707063",
    borderWidth: 0,
    elevation: 5,
    marginTop: 5,
  },
  brandInput: {
    fontSize: wp("3.2%"),
    // height: hp('6.7%'),
    padding: 0,
    // marginLeft:20,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    elevation: 5,
    width: wp("80%"),
  },
  picker: {
    borderRadius: 0,
    width: "92%",
    height: hp("4.5%"),
    elevation: 5,
    alignSelf: "center",
    //  marginBottom: hp('5%'),
    paddingHorizontal: 0,
    marginLeft: 0,
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  pickerLabel: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    fontSize: 13,
    fontWeight: "bold",
    flexDirection: "row",
  },
});
