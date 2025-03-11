import { CheckBox, Radio } from "native-base";
import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "App/Theme/Colors";
import BlueButton from "App/Components/BlueButton";
import { connect } from "react-redux";
import { xorBy } from "lodash";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import SearchableDropdown from "App/Components/SearchableDropdown";
import GenericIcon from "App/Components/GenericIcon";
import { HelperService } from "App/Services/Utils/HelperService";
import NavigationService from "App/Services/NavigationService";
import MultipleImagePicker from "App/Components/ImagePicker/MultipleImagePicker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextArea from "App/Components/FormInput/TextArea";
import SelectDate from "App/Components/SelectDate";
import SelectBox from "react-native-multi-selectbox";
import MenuActions from "../../Stores/Menu/Actions";
import { Headerbar } from "../../Components/Headerbar";
const options1 = [
  { id: "Nukad Meet", name: "Nukad Meet" },
  { id: "Canopy campaign", name: "Canopy campaign" },
  { id: "Van Campaign", name: "Van Campaign" },
  { id: "Umbrella Campaign", name: "Umbrella Campaign" },
  { id: "Product campaign", name: "Product campaign" },
  {
    id: "Jodidars technical training program",
    name: "Jodidars technical training program",
  },
  { id: "Small Chai Meet", name: "Small Chai Meet" },
  { id: "Others", name: "Others" },
];

class DocumentForm extends Component {
  componentDidMount() {
    this.props.clearCampaignForm();
  }
  constructor(props) {
    super(props);
    this.state = { text: "", selectedLine: [] };
  }
  onMultiChangeLine() {
    return (item) =>
      this.setState({
        selectedLine: xorBy(this.state.selectedLine, [item], "id"),
      });
  }
  getLine() {
    let data = [];
    if (this.state.selectedLine.length) {
      this.state.selectedLine.map((obj, index) => {
        data.push(obj.item);
      });
    }
    return data;
  }
  onCheck() {
    const { form, changeCampaignForm, userdetail, userid, token } = this.props;
    let data = {
      records: [
        {
          attributes: { type: "Campaign_Requisition__c", referenceId: "ref1" },

          Branch__c: userdetail.Branch_Master__c,
          BTL_activity_type__c: form.BTL_activity_type__c,
          Other_BTL_activity__c: form.OtherBTLactivity
            ? form.Other_BTL_activity__c
            : "",
          Outcome_of_the_Campaign__c: form.Outcome_of_the_Campaign__c,
          Number_Planned__c: form.Number_Planned__c,
          Budget_Planned__c: form.Budget_Planned__c,
          Number_Actual__c: "0",
          Budget_Actual__c: "0",
          Campaign_Status__c: "Draft",
          Budget_allocated__c: "0",
          Remarks__c: form.Remarks__c,
          Give_aways_required__c: this.getLine()
            .map((item) => item)
            .join(";"),
          Snacks_Planned__c: form.Snacks_Planned__c,

          Campaign_created_date__c: HelperService.dateReadableFormatWithHyphen(),
          Campaign_on__c: form.Campaign_on__c,
          Complaint_raised__c: form.Complaint_raised__c,
          Campaign_Requisition_raised_by__c: userid,
        },
      ],
    };
    if (!form.Campaign_on__c) {
      HelperService.showToast({
        message: "Campaign On Field is empty",
      });
    } else if (!form.BTL_activity_type__c) {
      HelperService.showToast({
        message: "BTL Activity Type Field is empty",
      });
    } else if (!form.Number_Planned__c) {
      HelperService.showToast({
        message: "Planned Number Field is empty",
      });
    } else if (!form.Budget_Planned__c) {
      HelperService.showToast({
        message: "Planned Budget Field is empty",
      });
    } else if (!form.Remarks__c) {
      HelperService.showToast({
        message: "Remarks Field is empty",
      });
    } else if (!form.Outcome_of_the_Campaign__c) {
      HelperService.showToast({
        message: "Outcome of Campaign Field is empty",
      });
    } else if (!form.Complaint_raised__c) {
      HelperService.showToast({
        message: "Complaint Raised Field is empty",
      });
    } else if (!this.getLine().length) {
      HelperService.showToast({
        message: "Select Giveways",
      });
    } else if (!form.Snacks_Planned__c) {
      HelperService.showToast({
        message: "Select Snack Planned",
      });
    } else {
      this.props.createCampaign({
        form: data,
        token,
      });
    }
  }
  snack() {
    return HelperService.showToast({
      message: "Select Snack Planned",
    });
  }
  render() {
    const { form, changeForm, userdetail, userid } = this.props;
    // console.log("kkkkkkkkkk", this.getLine());

    return (
      <ScrollView>
        <View style={{ flex: 1, marginBottom: wp("50") }}>
        <Headerbar
            title={"Document Form"
            //   defaultSource
            //     ? `${
            //         defaultSource?.lead_id__c
            //           ? `${defaultSource.lead_id__c} ${defaultSource.lead_source_type_name}`
            //           : "Lead Info"
            //       }`
            //     : "Add Leads"
            }
            //  show={true}
            name={"play"}
            onPress={() => NavigationService.goback()}
          />
          {/* <View style={Styles.head}>
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
            <View style={{ justifyContent: "center", alignSelf: "center" }}>
              <Text style={Styles.t1}>
                {"Event "}
                <Text style={Styles.t3}>Form</Text>{" "}
              </Text>
            </View>
          </View> */}
          <View
            style={{ flexDirection: "column", flexWrap: "wrap", top: hp("2%") }}
          >

<View style={{ width: "90%", margin: 10 }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                Document Title
              </Text>

              <TextInput
                style={{
                  height: 38,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: Colors.primary,
                  width: wp("90%"),
                  left: wp("1%"),
                  top: hp("1%"),
                }}
                placeholder={"Enter Title"}
                // onChangeText={(text) =>
                //   changeForm({
                //     edited_field: "Number_Planned__c",
                //     edited_value: text,
                //   })
                // }
                // keyboardType="numeric"
                // value={form.Number_Planned__c}
              />
            </View>

            <View style={{ width: "90%", margin: 10 }}>
              <Text style={{ ...Styles.text, left: wp("1.5%") }}>
                Document Type
              </Text>
              <SearchableDropdown
                // dataSource={[
                //   { id: "Dealer", name: "Dealer" },
                //   { id: "Contractor", name: "Contractor" },
                //   { id: "Team", name: "Team" },
                // ]}
                placeHolderText={"Select Document Type"}
                dropstyle={{left:"3%",
                width: wp("3"),
                height: wp("3"),
              marginTop:"4%"}}
                // selectedValue={form.BTL_activity_type__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "BTL_activity_type__c",
                //     edited_value: value,
                //   })
                // }
                placeholder={"Type or Select Participaint Type"}
                customPickerStyles={{ ...Styles.picker }}
                // placeholder={{ color: "grey" }}
                labelStyles={{ ...Styles.pickerLabel }}
                // key={form.BTL_activity_type__c}
              />
            </View>

            <View style={{ width: "90%", marginLeft: 10, top: hp("-0.8%") }}>
              <Text style={{ ...Styles.text, left: wp("1.5%") }}>Document Description</Text>

              <TextArea
                placeholder="Enter Document Description "
                numberOfLines={5}
                style={{...Styles.mb11,marginTop:"-3%"}}
                // label={"Remarks*"}
                // value={form.Remarks__c}
                //  error={validation.invalid && validation.invalid_field == 'Remarks__c'}
                // onChange={(value) =>
                //   this.props.changeForm({
                //     edited_field: "Remarks__c",
                //     edited_value: value,
                //   })
                // }
              />
            </View>

           
            
            {/* <View style={{ width: "90%", margin: 10 }}>
              <Text style={{ ...Styles.text, left: wp("1.5%") }}>
                Event Type*
              </Text>
              <SearchableDropdown
                dataSource={options1}
                placeHolderText={"Select Event Type"}
                selectedValue={form.BTL_activity_type__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "BTL_activity_type__c",
                    edited_value: value,
                  })
                }
                placeholder={"Type or Select Event Type"}
                customPickerStyles={{ ...Styles.picker }}
                // placeholder={{ color: "grey" }}
                labelStyles={{ ...Styles.pickerLabel }}
                key={form.BTL_activity_type__c}
              />
            </View> */}

            {/* {form.BTL_activity_type__c == "Others" ? (
              <View style={{ width: wp("90"), marginLeft: wp("4") }}>
                <TextInput
                  style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: Colors.primary,
                  }}
                  placeholder="Enter BTL Activity Type"
                  onChangeText={(text) =>
                    changeForm({
                      edited_field: "Other_BTL_activity__c",
                      edited_value: text,
                    })
                  }
                  value={form.Other_BTL_activity__c}
                />
              </View>
            ) : (
              []
            )} */}

            <View style={{ width: "90%", margin: 10 }}>
              <Text
                style={{
                  ...Styles.text,
                  left: wp("1.5%"),
                }}
              >
                Upload Document
              </Text>

             
            </View>

            
            
            {/* <View
              style={{
                width: wp("95%"),
                marginTop: hp("6%"),
                marginLeft: wp("4.5%"),
              }}
            >
              <SelectBox
                label="Give aways required"
                labelStyle={{
                  color: Colors.black,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
                width="90%"
                viewMargin="25px"
                containerStyle={{
                  // elevation: 10,
                  // backgroundColor:"#F9F6EE",
                  // borderRadius: 2,
                  justifyContent: "center",
                  padding: 10,
                  borderColor: "grey",
                }}
                options={[
                  { id: "Key chain", item: "Key chain" },
                  { id: "Pens", item: "Pens" },
                  { id: "Writing pads", item: "Writing pads" },
                  {
                    id: "Laminated boards (A3 size) for fixing in garages",
                    item: "Laminated boards (A3 size) for fixing in garages",
                  },
                  { id: "Cap", item: "Cap" },
                ]}
                selectedValues={this.state.selectedLine}
                onMultiSelect={this.onMultiChangeLine()}
                onTapClose={this.onMultiChangeLine()}
                listOptionProps={{ nestedScrollEnabled: true }}
                isMulti
              />
            </View> */}

            {/* <View style={{ width: "90%", marginLeft: 10, top: hp("4%") }}>
              <Text style={{ ...Styles.text, left: wp("1.5%") }}>
                Snacks Planned*
              </Text>
              <View style={{ flexDirection: "row", top: hp("2%") }}>
                <View
                  style={{ flexDirection: "row", width: "35%", left: wp("2%") }}
                >
                  <Text>Yes</Text>

                  <Radio
                    style={{ marginLeft: 10 }}
                    onPress={() =>
                      changeForm({
                        edited_field: "Snacks_Planned__c",
                        edited_value: "Yes",
                      })
                    }
                    // selected={false}
                    selected={form.Snacks_Planned__c == "Yes"}
                    selectedColor={Colors.primary}
                    color={Colors.primary}
                  />
                </View>
                <View style={{ flexDirection: "row", width: "35%" }}>
                  <Text>No</Text>

                  <Radio
                    style={{ marginLeft: 10 }}
                    onPress={() =>
                      changeForm({
                        edited_field: "Snacks_Planned__c",
                        edited_value: "No",
                      })
                    }
                    // selected={false}
                    selected={form.Snacks_Planned__c == "No"}
                    selectedColor={Colors.primary}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </View> */}
            {/* <View
              style={{
                width: "90%",
                marginLeft: wp("4%"),
                top: hp("9%"),
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Attach Image
              </Text>
              <View style={{ ...Styles.bottomMargin }}>
                <MultipleImagePicker title={"Upload image"} images={[]}>
                  <View style={Styles.recurringActionButton}>
                    <Text style={Styles.recurringActionButtonText}>
                      <GenericIcon
                        name="camera"
                        style={StyleSheet.recurringActionButtonIcon}
                      />
                      {"Take Image*"}
                    </Text>
                  </View>
                </MultipleImagePicker>
              </View>
            </View> */}
            <View style={{ width: wp("93%"), padding: 5, top: hp("12%") }}>
              <BlueButton
                title={"SUBMIT"}
                textStyle={{ fontSize: wp("4") }}
                style={{
                  borderRadius: 10,
                  alignSelf: "center",
                  justifyContent: "center",
                  width: wp("25%"),
                  height: hp("5%"),
                }}
                // disabled={this.props.loading}
                // loading={this.props.loading}
                onPress={() =>
                  NavigationService.navigate("Document")
                }
                // onPress={() => this.onCheck()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  form: state.menu.createCampaignlist,
  // userdetail: state.startday.userDetailList.Employees__r.records[0],
  loading: state.menu.createCampaignLoading,
});

const mapDispatchToProps = (dispatch) => ({
  createCampaign: (params) => dispatch(MenuActions.createCampaign(params)),
  changeForm: (params) => dispatch(MenuActions.changeCampaignForm(params)),
  clearCampaignForm: (params) =>
    dispatch(MenuActions.clearCampaignForm(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DocumentForm);
const Styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: wp("3.9"),
    fontWeight: "bold",
  },
  inputtext: {
    height: hp("5"),
    borderColor: "white",
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    color: "black",
    borderRadius: 4,
  },
  picker: {
    borderRadius: 4,
    borderColor: Colors.primary,
    width: wp("88%"),
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
  t1: {
    fontSize: hp("3"),
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  t3: {
    fontSize: hp("3"),
    fontWeight: "bold",
    color: "black",
  },
  head: {
    height: hp("14%"),
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "column",
  },
  bottomMargin: {
    marginBottom: hp("2%"),
    width: "100%",
  },
  recurringActionButtonText: {
    color: Colors.button,
    fontSize: wp("4%"),
    textTransform: "capitalize",
  },
  recurringActionButtonIcon: {
    color: Colors.primary,
    fontSize: wp("4%"),
  },
  mb11: {
    marginBottom: hp("2%"),
    height: hp("14.5%"),
    width: wp("87%"),
    fontSize: wp("3.5%"),
    borderWidth: 1,
    marginHorizontal: 2,
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 4,
    top: hp("1.5%"),
    borderColor: Colors.primary,
  },
});
