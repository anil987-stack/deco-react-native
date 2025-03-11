import React, { Component } from "react";
import Header from "App/Components/Header/index";
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
} from "react-native";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Colors from "App/Theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SelectDate from "../../../Components/SelectDate";
import BlueButton from "App/Components/BlueButton";
import { connect } from "react-redux";
import CommonActions from "App/Stores/Common/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import NavigationService from "App/Services/NavigationService";

export class AccountStatement extends Component {
  componentDidMount() {
    this.props.clearAccountReport();
  }
  getDistributor() {
    const { retailersList } = this.props;
    // console.log("listttt", list);
    let distributor = [];
    if (retailersList && retailersList.length) {
      retailersList.map((obj) => {
        if (
          {
            id: obj.Id,
            name: obj.Name,
          }
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
  // obj.Name + " " + `(${obj.accountnumber})`

  submitdraft() {
    const { reportForm, accountReport, token } = this.props;

    accountReport({
      form: {
        records: [
          {
            attributes: { type: "Account_statement__c", referenceId: "ref1" },
            From_Date__c: reportForm.From_Date__c,
            To_Date__c: reportForm.To_Date__c,
            Customer__c: reportForm.Customer__c,
            Status__c: "Open",
          },
        ],
      },
      token,
    });
  }
  render() {
    const { reportForm } = this.props;
    return (
      <View>
        {/* <Header
          style={{ justifyContent: "center" }}
          title={"Account Statement Report"}
        />
        <Text
          style={{
            fontSize: 16,
            width: wp("95%"),
            left: wp("5%"),
            top: hp("1%"),
          }}
        >
          Account Statement will be received on registered email of the customer
          within 30-60 mins,Please select Customer,date and Press submit
        </Text> */}
        <View
          style={{
            marginTop: hp("1.5%"),
            width: wp("90%"),
            left: wp("3%"),
            top: hp("2%"),
            height: hp("5%"),
          }}
        >
          <Text style={Styles.text1}>Customer</Text>
          <SearchableDropdown
            // dataSource={this.getDistributor()}
            placeHolderText={"Select Customer"}
            selectedValue={reportForm.Customer__c}
            onChange={(value) =>
              this.props.changeAccountReport({
                edited_field: "Customer__c",
                edited_value: value,
              })
            }
            // placeholder={'Type or Select Area'}
            //invalid={false}
            customPickerStyles={{ ...Styles.picker }}
            labelStyles={{ ...Styles.pickerLabel }}
            key={reportForm.Customer__c}
            //invalid={validation.invalid && validation.invalid_field == 'area__c'}
          />
        </View>
        <View
          style={{
            marginTop: hp("10%"),
            width: wp("88%"),
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: Colors.primary,
            borderWidth: 1,
            alignSelf: "center",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              ...Styles.text,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            From date
          </Text>
          <SelectDate
            style={{ margin: 1 }}
            date={reportForm.From_Date__c}
            minDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
            onDateChange={(date) =>
              this.props.changeAccountReport({
                edited_field: "From_Date__c",
                edited_value: date,
              })
            }
          />
        </View>
        <View
          style={{
            marginTop: hp("3.5%"),
            width: wp("88%"),
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: Colors.primary,
            borderWidth: 1,
            borderRadius: 8,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              ...Styles.text,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            To date
          </Text>
          <SelectDate
            style={{ margin: 1 }}
            date={reportForm.To_Date__c}
            minDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
            onDateChange={(date) =>
              this.props.changeAccountReport({
                edited_field: "To_Date__c",
                edited_value: date,
              })
            }
          />
        </View>
        <View
          style={{
            height: hp("6%"),
            width: wp("90%"),
            justifyContent: "center",
            alignSelf: "center",
            top: hp("3%"),
          }}
        >
          <BlueButton
            style={{
              height: hp("6%"),
              width: wp("90%"),
              justifyContent: "center",
              alignSelf: "center",
              // top: hp("3%"),
              backgroundColor: Colors.primary,
            }}
            title={"SUBMIT"}
            loading={this.props.loader}
            disable={this.props.loader}
            textStyle={{ fontSize: hp("2"), color: "white" }}
            onPress={() => {
              NavigationService.navigate("AccountSuccess");
              // this.submitdraft()
              // if (!reportForm.Customer__c) {
              //   HelperService.showToast({
              //     message: "Please Select Customer",
              //     duration: 500,
              //     buttonText: "",
              //   });
              // } else if (!reportForm.From_Date__c) {
              //   HelperService.showToast({
              //     message: "Please Select From Date",
              //     duration: 500,
              //     buttonText: "",
              //   });
              // } else if (!reportForm.To_Date__c) {
              //   HelperService.showToast({
              //     message: "Please Select To Date",
              //     duration: 500,
              //     buttonText: "",
              //   });
              // } else {
              //   // this.submitdraft();
              // }
            }}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  fetchRetailersLoader: state.retailers.fetchRetailersLoader,
  agentid: state.user.loginDetails.userId,
  retailersList: state.retailers.retailersList,
  reportForm: state.common.reportForm,
  loader: state.common.accountReportLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeAccountReport: (params) =>
    dispatch(CommonActions.changeAccountReport(params)),
  accountReport: (params) => dispatch(CommonActions.accountReport(params)),
  clearAccountReport: (params) =>
    dispatch(CommonActions.clearAccountReport(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountStatement);
const Styles = StyleSheet.create({
  picker: {
    // borderRadius: 100,
    borderColor: Colors.primary,
    width: wp("88%"),
    borderWidth: 0.8,
    elevation: 5,
    backgroundColor: "white",
    // height: hp('5.5%'),
    marginTop: 50,
    // marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    left: wp("2%"),
  },

  pickerLabel: {
    color: Colors.placeHolder,
    fontSize: 16,
    textAlign: "left",
    width: "97%",
    padding: 10,
    marginLeft: 15,
    flexDirection: "row",
  },
  text1: {
    marginLeft: "3%",
    color: "black",
    top: hp("0.5%"),
    fontSize: wp("3.9"),
    fontWeight: "bold",
  },
  text: {
    marginLeft: "3%",
    color: "black",
    fontSize: wp("3.9"),
    fontWeight: "bold",
  },
});
