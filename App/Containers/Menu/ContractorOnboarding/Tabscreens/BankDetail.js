import { CheckBox, Radio } from "native-base";
import React, { Component } from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import Colors from "App/Theme/Colors";
import Styles from "./Style";
import BlueButton from "../../../../Components/BlueButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import { connect } from "react-redux";
import menuActions from "App/Stores/Menu/Actions";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import TextArea from "App/Components/FormInput/TextArea";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
class BankDetail extends Component {
  render() {
    const { form, changeForm, selectlist } = this.props;
    let show = this.props.shows;
    return (
      <View>
        <View style={{ marginTop: 10, marginLeft: "5%", fontSize: wp("3.9") }}>
          <Text style={{ fontSize: wp("3.9") }}>Own Primesis</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row", width: "35%" }}>
              <Text>Yes</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "own_primesis__c",
                    edited_value: "Yes",
                  })
                }
                // selected={false}
                selected={form.own_primesis__c == "Yes"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
            <View style={{ flexDirection: "row", width: "25%" }}>
              <Text>No</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "own_primesis__c",
                    edited_value: "No",
                  })
                }
                // selected={false}
                selected={form.own_primesis__c == "No"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
          </View>
        </View>

        {/* <View style={{ marginTop: 10, marginLeft: "5%", fontSize: wp("3.9") }}>
          <Text style={{ fontSize: wp("3.9") }}>Does he has own vehicle?</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row", width: "35%" }}>
              <Text>2WH</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "Does_he_has_own_vehicle_2WH_4WH__c",
                    edited_value: "2WH",
                  })
                }
                selected={false}
                selected={form.Does_he_has_own_vehicle_2WH_4WH__c == "2WH"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
            <View style={{ flexDirection: "row", width: "25%" }}>
              <Text>4WH</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "Does_he_has_own_vehicle_2WH_4WH__c",
                    edited_value: "4WH",
                  })
                }
                selected={false}
                selected={form.Does_he_has_own_vehicle_2WH_4WH__c == "4WH"}
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
          </View>
        </View> */}

        <View style={{ marginTop: 10, marginLeft: "5%", fontSize: wp("3.9") }}>
          <Text style={{ fontSize: wp("3.9") }}>
            Appx volume of business of other brands-monthly
          </Text>
          <View style={{ width: "90%" }}>
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter "}
              value={form.Are_you_dealing_with_other_brand__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Are_you_dealing_with_other_brand__c",
                  edited_value: value,
                })
              }
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "5%", fontSize: wp("3.9") }}>
            Are you dealing with other brand?
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10,left:wp("5%") }}>
            <View style={{ flexDirection: "row", width: "35%" }}>
              <Text>Yes</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "Approximate_volume_of_business_of_other__c",
                    edited_value: "true",
                  })
                }
                // selected={false}
                selected={
                  form.Approximate_volume_of_business_of_other__c == "true"
                }
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
            <View style={{ flexDirection: "row", width: "25%" }}>
              <Text>No</Text>
              <Radio
                style={{ marginLeft: 10 }}
                onPress={() =>
                  changeForm({
                    edited_field: "Approximate_volume_of_business_of_other__c",
                    edited_value: "false",
                  })
                }
                // selected={false}
                selected={
                  form.Approximate_volume_of_business_of_other__c == "false"
                }
                selectedColor={Colors.primary}
                color={Colors.primary}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "5%", fontSize: wp("3.9") }}>
            Years of operation in current location
          </Text>
          <View style={{ width: "90%", marginLeft: "4%" }}>
            <InputNumber
              style={Styles.inputtext}
              placeholder={"Enter "}
              value={form.Years_of_operation_in_current_location__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Years_of_operation_in_current_location__c",
                  edited_value: value,
                })
              }
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ marginLeft: "5%", fontSize: wp("3.9") }}>Remarks</Text>
          <View style={{ width: wp("90"), marginLeft: wp("2%") }}>
            <TextArea
              placeholder="Enter Remarks"
              numberOfLines={5}
              style={Styles.mb11}
              value={form.Remarks__c}
              //  error={validation.invalid && validation.invalid_field == 'Overall_Feedback_about_LIS_LAD_concept__c'}
              onChange={(value) =>
                this.props.changeForm({
                  edited_field: "Remarks__c",
                  edited_value: value,
                })
              }
            />
          </View>
        </View>
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
  form: state.menu.createOnboardinglist,
  territorylist: state.common.TerritoryAllList,
  selectlist: state.menu.selectlist,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),
  createonboarding: (params) => dispatch(menuActions.createOnboarding(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BankDetail);
