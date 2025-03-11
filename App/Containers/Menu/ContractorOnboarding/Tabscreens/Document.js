import { CheckBox,Radio } from "native-base";
import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Colors from "App/Theme/Colors";
import BlueButton from "../../../../Components/BlueButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import { connect } from "react-redux";
import menuActions from "App/Stores/Menu/Actions";
import InputText from "App/Components/FormInput/InputText";
import ImagePicker from "App/Components/ImagePicker/ImagePick";
import MultipleImagePicker from "../../../../Components/ImagePicker/MultipleImagePicker";
import GenericIcon from "App/Components/GenericIcon/GenericIcon";
import UserActions from "App/Stores/User/Actions";
// import ImageSlider from "../../../../Components/ImageSlider"
import CommonActions from "App/Stores/Common/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "../../../../Services/Utils/HelperService";
import GenericDisplayCardStrip from "App/Components/GenericDisplayCard/GenericDisplayCardStrip";

import InputNumber from "App/Components/FormInput/InputNumber";
class Document extends Component {
  render() {
    const {
      form,
      changeForm,
      selectlist,
      image,
      openModal,
      imageform,
    } = this.props;

    let show = this.props.shows;
    console.log(form.Nationality_Proof_Voter_id_Aadhar__c, "kk");
    return (
      <ScrollView style={{ marginBottom: "25%", flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            top: "2%",
            marginBottom: "10%",
            left:wp("5%")
          }}
        >
          <View style={{ marginTop: 10 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Account Type</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Contractor</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Account_Type__c",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Account_Type__c == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Painter</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Account_Type__c",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Account_Type__c == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Business Category 1?</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Yes</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Business_Category1",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Business_Category1 == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>No</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Business_Category1",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Business_Category1 == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Business Category 2?</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Yes</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Business_Category2",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Business_Category2 == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>No</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Business_Category2",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Business_Category2 == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Spray GUN</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Own</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Spray_GUN",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Spray_GUN == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Rental</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Spray_GUN",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Spray_GUN == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Compressor</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Own</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Compressor",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Compressor == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Rental</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Compressor",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Compressor == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Buffing Machine</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Own</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Buffing_Machine",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Buffing_Machine == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Rental</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Buffing_Machine",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Buffing_Machine == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Sanding Machine</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Own</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Sanding_Machine",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Sanding_Machine == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Rental</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Sanding_Machine",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Sanding_Machine == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>Own Workshop</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("1%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Yes</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Own_Workshop",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Own_Workshop == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>No</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Own_Workshop",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Own_Workshop == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
          <View style={{ marginTop: hp("3%") }}>
            <Text style={{...Styles.text,fontWeight:"bold"}}>No. of Partner in Team</Text>
            <View style={{ width: wp("85") }}>
              <InputNumber
                style={Styles.inputtext}
                placeholder={"Enter No. of Partner in Team"}
                value={form.Partner_in_Team}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Partner_in_Team",
                    edited_value: value,
                  })
                }
                // maxLength={10}
                // error={
                //   validation.invalid &&
                //   validation.invalid_field == "Firm_Name__c"
                // }
              />
            </View>
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={Styles.text}>Partner Training Required?</Text>
            <View
              style={{ flexDirection: "row", marginTop: 10, left: wp("3%") }}
            >
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Yes</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Partner_Training_Required",
                      edited_value: "Yes",
                    })
                  }
                  // selected={false}
                  selected={form.Partner_Training_Required == "Yes"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>No</Text>

                <Radio
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    changeForm({
                      edited_field: "Partner_Training_Required",
                      edited_value: "No",
                    })
                  }
                  // selected={false}
                  selected={form.Partner_Training_Required == "No"}
                  selectedColor={Colors.primary}
                  color={Colors.primary}
                />
              </View>
            </View>
          </View>
        
          {/* {Id==false?<View style={{ width: "90%", marginLeft: 0,marginTop: hp("2%") }}>
              <Text style={{ ...Styles.text, left: wp("1.5%"),color:Colors.primary }}
              onPress={()=>NavigationService.navigate('CampaignAttachmentScreen',{type:'Doc',ID:form})}
              >
                Attachment
              </Text>
            </View>:[]} */}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.user.onboardingList,
  loading: state.user.getOnboardingLoading,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  image: state.user.getonboardingImage,
  form: state.menu.createOnboardinglist,
  imageform: state.menu.imageform,
  territorylist: state.common.TerritoryAllList,
  selectlist: state.menu.selectlist,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),
  // changeForm: (params) => dispatch(menuActions.changeImageForm(params)),
  createonboarding: (params) => dispatch(menuActions.createOnboarding(params)),
  GetImage: (params) => dispatch(UserActions.getImageOnboarding(params)),
  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModal(params)),
  UploadImage: (params) => dispatch(menuActions.UploadImage(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Document);
const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },

  Card: {
    marginTop: "10%",
    elevation: 5,
    borderColor: "white",
    borderRadius: 5,
  },
  recurringActionButton: {
    borderColor: Colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: "center",
    backgroundColor: Colors.white,
    height: hp("5"),
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: wp("4%"),
    paddingRight: wp("4%"),
    marginRight: wp("6%"),
  },
  recurringActionButtonText: {
    color: Colors.primary,
    fontSize: wp("4%"),
    textTransform: "capitalize",
  },
  recurringActionButtonIcon: {
    color: Colors.primary,
    fontSize: wp("10%"),
  },
});
