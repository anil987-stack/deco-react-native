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
  TextInput,
} from "react-native";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Colors from "App/Theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SelectDate from "../../../Components/SelectDate";
import WhiteButton from "App/Components/WhiteButton";
import InventoryTable from "./InventoryTable";
import SearchBar from "App/Components/SearchBar";
import { connect } from "react-redux";
import GenericDisplayCardStrip from "App/Components/GenericDisplayCard/GenericDisplayCardStrip";
import CommonActions from "App/Stores/Common/Actions";
import { HelperService } from "../../../Services/Utils/HelperService";
export class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", branch: "", part: "" };
  }

  componentWillUnmount() {
    this.props.clearInventory();
  }
  fetchCall() {
    const { token, getPartNumber } = this.props;
    // console.log("userdetail",userdetail.Sales_Office__c)
    // this.props.clearSelectRetailer();

    getPartNumber({
      token,
      part_no: this.state.text,
    });
  }
  onCheck() {
    if (this.state.text) {
      if (this.state.text.length >= 4) {
        this.fetchCall();
      } else {
        HelperService.showToast({
          message: "Please Enter atleast 4 digits",
        });
      }
    } else {
      HelperService.showToast({
        message: "Please Enter Digits to get Part No.",
      });
    }
  }
  getList() {
    const { partNo } = this.props;
    let record = [];
    if (partNo && partNo.length) {
      partNo.map((obj) => {
        if (
          {
            id: obj.Id,
            name: obj.Name,
          }
        ) {
          record.push({
            id: obj.Id,
            name: obj.Name,
          });
        }
      });
    }
    return record;
  }
  onSubmit() {
    const { token, getInventory } = this.props;
    if (!this.state.branch) {
      HelperService.showToast({
        message: "Please Select Branch",
      });
    } else if (!this.state.part) {
      HelperService.showToast({
        message: "Please Select Part No.",
      });
    } else if (this.state.branch && this.state.part) {
      getInventory({
        token,
        part_no: this.state.part,
        branch_no: this.state.branch,
      });
    }
  }
  render() {
    const { branchlist, inventory } = this.props;
    return (
      <View>
        <Header style={{ justifyContent: "center" }} title={"Inventory"} />
        <Text
          style={{
            fontSize: 16,
            width: wp("90%"),
            left: wp("5%"),
            top: hp("2%"),
          }}
        >
          To Check The Inventory Please Select Depot,Product Group,Product
          Type,Product and Press submit
        </Text>
        <View
          style={{
            top: hp("4%"),
            height: hp("5%"),
          }}
        >
          <SearchableDropdown
            // dataSource={branchlist}
            placeHolderText={"Select Depot"}
            // selectedValue={this.state.branch}
            // onChange={(text) => this.setState({ branch: text })}
            placeholder={"Type or Select Depot"}
            customPickerStyles={{ ...Styles.picker }}
            // placeholder={{ color: "grey" }}
            labelStyles={{ ...Styles.pickerLabel }}
          />
        </View>
        <View
          style={{
            top: hp("6%"),
            height: hp("6%"),
          }}
        >
          <SearchableDropdown
            // dataSource={branchlist}
            placeHolderText={"Select Product Group"}
            // selectedValue={this.state.branch}
            // onChange={(text) => this.setState({ branch: text })}
            placeholder={"Type or Select Product Group"}
            customPickerStyles={{ ...Styles.picker }}
            // placeholder={{ color: "grey" }}
            labelStyles={{ ...Styles.pickerLabel }}
          />
        </View>
        <View
          style={{
            top: hp("4%"),
            height: hp("13%"),
          }}
        >
          <SearchableDropdown
            // dataSource={branchlist}
            placeHolderText={"Select Product Type"}
            // selectedValue={this.state.branch}
            // onChange={(text) => this.setState({ branch: text })}
            placeholder={"Type or Select Product Type"}
            customPickerStyles={{ ...Styles.picker }}
            // placeholder={{ color: "grey" }}
            labelStyles={{ ...Styles.pickerLabel }}
          />
        </View>
        <View
          style={{
            top: hp("4%"),
            height: hp("3%"),
          }}
        >
          <SearchableDropdown
            // dataSource={branchlist}
            placeHolderText={"Select Product"}
            // selectedValue={this.state.branch}
            // onChange={(text) => this.setState({ branch: text })}
            placeholder={"Type or Select Product"}
            customPickerStyles={{ ...Styles.picker }}
            // placeholder={{ color: "grey" }}
            labelStyles={{ ...Styles.pickerLabel }}
          />
        </View>
        {/* <View
          style={{
            top: hp("9%"),
            height: hp("5%"),
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: Colors.primary,
              borderWidth: 1,
              width: wp("45%"),
              borderRadius: 4,
            }}
            placeholder="Enter here!!"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <WhiteButton
            style={{
              height: hp("5.5%"),
              width: wp("40%"),
              // justifyContent: "center",
              // alignSelf: "center",
              // top: hp("10%"),
              borderRadius: 4,
              backgroundColor: Colors.primary,
            }}
            title={"Search"}
            onPress={() => this.onCheck()}
            textStyle={{ fontSize: hp("2"), color: "white" }}
          />
        </View>
        <Text
          style={{
            top: hp("10%"),
            width: wp("90%"),
            color: "red",
            left: wp("4.5%"),
          }}
        >
          To get Part No , Enter atleast 4 digits here and Press Search
        </Text>
        <View
          style={{
            top: hp("12%"),
            height: hp("5%"),
          }}
        >
          <SearchableDropdown
            dataSource={this.getList()}
            placeHolderText={"Select Part No."}
            selectedValue={this.state.part}
            onChange={(text) => this.setState({ part: text })}
            placeholder={"Type or Select Part No."}
            customPickerStyles={{ ...Styles.picker }}
            // placeholder={{ color: "grey" }}
            labelStyles={{ ...Styles.pickerLabel }}
          />
        </View> */}
        <WhiteButton
          style={{
            height: hp("6%"),
            width: wp("90%"),
            justifyContent: "center",
            alignSelf: "center",
            top: hp("12%"),
            borderRadius: 4,
            backgroundColor: Colors.primary,
          }}
          title={"SUBMIT"}
          onPress={() => this.onSubmit()}
          textStyle={{ fontSize: hp("2"), color: "white" }}
        />
        {/* {inventory && inventory.length ? ( */}
        <View
          style={{
            width: wp("90%"),
            // height: hp("20%"),
            backgroundColor: "#F0F0F0",
            justifyContent: "center",
            alignSelf: "center",
            top: hp("22%"),
            borderRadius: 10,
            padding: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                // top: hp("3%"),
                right: wp("1.5%"),
                resizeMode: "center",
              }}
              source={require("App/Assets/Images/ready-stock.png")}
            />
            <View
              style={{
                flexDirection: "column",
                right: wp("1%"),
                top: hp("2%"),
              }}
            >
              <GenericDisplayCardStrip
                // key={"Min. Order" + data.sfid + item.product_name}
                label={"Product description"}
                value={"Wall Finishes"}
                // value={inventory[0].Part_Number__r.Description__c}
                labelStyle={{ right: wp("5%"), fontSize: 13 }}
                valueStyle={{
                  color: "black",
                  width: wp("30%"),
                  textAlign: "right",
                }}
              />
              <GenericDisplayCardStrip
                // key={"Min. Order" + data.sfid + item.product_name}
                label={"Stock Available"}
                value={"18"}
                // value={inventory[0].Product_Quantity__c}
                labelStyle={{ right: wp("5%"), fontSize: 13 }}
                valueStyle={{ color: "black", fontSize: 13 }}
              />
              {/* <GenericDisplayCardStrip
                  // key={"Min. Order" + data.sfid + item.product_name}
                  label={"MRP"}
                  value={inventory[0].Price__c}
                  labelStyle={{ right: wp("5%"), fontSize: 13 }}
                  valueStyle={{ color: "black", fontSize: 13 }}
                />
                <GenericDisplayCardStrip
                  // key={"Min. Order" + data.sfid + item.product_name}
                  label={"Batch No."}
                  value={inventory[0].Battery_Batch_Number__c}
                  labelStyle={{ right: wp("5%"), fontSize: 13 }}
                  valueStyle={{ color: "black", fontSize: 13 }}
                />
                <GenericDisplayCardStrip
                  // key={"Min. Order" + data.sfid + item.product_name}
                  label={"Batch Date"}
                  value={inventory[0].Battery_Batch_Date__c?inventory[0].Battery_Batch_Date__c.split("-")
                    .reverse()
                    .join("-"):''}
                  labelStyle={{ right: wp("5%"), fontSize: 13 }}
                  valueStyle={{ color: "black", fontSize: 13 }}
                /> */}
            </View>
          </View>
        </View>
        {/* ) : null} */}
        {/* <InventoryTable /> */}
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  branchlist: state.user.branchMasterList,
  partNo: state.common.partNo,
  inventory: state.common.inventory,
});

const mapDispatchToProps = (dispatch) => ({
  getPartNumber: (params) => dispatch(CommonActions.getPartNumber(params)),
  getInventory: (params) => dispatch(CommonActions.getInventory(params)),
  clearInventory: (params) => dispatch(CommonActions.clearInventory(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

const Styles = StyleSheet.create({
  searchContainer: {
    width: Math.round(Dimensions.get("window").width - 20),
    borderWidth: 1,
    backgroundColor: "#E7F9D7",
    top: hp("1%"),
    width: wp("90%"),
    alignSelf: "center",
  },
  picker: {
    borderRadius: 4,
    borderColor: Colors.primary,
    width: wp("90%"),
    borderWidth: 0.8,
    elevation: 5,
    backgroundColor: "white",
    // height: hp('5.5%'),
    marginTop: 5,
    marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
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
});
