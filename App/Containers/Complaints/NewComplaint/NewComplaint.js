import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Style from "./NewComplaintStyle";
import InputText from "App/Components/FormInput/InputText";
import TextArea from "App/Components/FormInput/TextArea";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchableDropdown from "App/Components/SearchableDropdown";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import BlueButton from "App/Components/BlueButton";
import MultipleImagePicker from "App/Components/ImagePicker/MultipleImagePicker";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import { HelperService } from "../../../Services/Utils/HelperService";
const type = [
  { id: "Availability of parts", name: "Availability of parts" },
  {
    id: "Any delay in his settlement",
    name: "Any delay in his settlement",
  },
  { id: "Price related problems", name: "Price related problems" },
  {
    id: "Customer feedback/ complaints",
    name: "Customer feedback/ complaints",
  },
  { id: "Product related inputs", name: "Product related inputs" },
  { id: "New product ideas", name: "New product ideas" },
  { id: "Competitor details", name: "Competitor details" },

  { id: "Marketing ideas", name: "Marketing ideas" },

  {
    id: "Service-related feedback",
    name: "Service-related feedback",
  },

  {
    id: "Delay Jodidar gifts (Duplicate validations)",
    name: "Delay Jodidar gifts (Duplicate validations)",
  },

  { id: "Delay in Retailer Gifts", name: "Delay in Retailer Gifts" },

  {
    id: "Accountant statement not received by Dealer",
    name: "Accountant statement not received by Dealer",
  },

  {
    id: "Reconciliation of statement of accounts",
    name: "Reconciliation of statement of accounts",
  },

  {
    id: "Price diff. credit note not given",
    name: "Price diff. credit note not given",
  },

  { id: "Wrong Packaging", name: "Wrong Packaging" },

  {
    id: "Transit Insurance not settled",
    name: "Transit Insurance not settled",
  },

  { id: "TOD /Credit note issues", name: "TOD /Credit note issues" },

  {
    id: "MLP/RLP stickers are not received",
    name: "MLP/RLP stickers are not received",
  },

  { id: "Battery warranty Problem", name: "Battery warranty Problem" },

  {
    id: "Wrong/ Short/ Excess dispatch material from LIS to Dealers",
    name: "Wrong/ Short/ Excess dispatch material from LIS to Dealers",
  },

  { id: "Others", name: "Others" },
  { id: "Technical Issue", name: "Technical Issue" },
];
const type1 = [
  { id: "Technical Issue", name: "Technical Issue" },

  { id: "Others", name: "Others" },
];
class NewComplaintScreen extends Component {
  submit() {
    const {
      form,
      changeform,
      retailersList,
      createTicket,
      token,
      userid,
      userdetail,
    } = this.props;
    let id = this.props.navigation.state.params;
    createTicket({
      token,
      form: {
        records: [
          {
            attributes: { type: "Ticket__c", referenceId: "ref1" },
            Complaint_Open_Date__c: HelperService.dateReadableFormatWithHyphen(),
            Ticket_Category__c: id.id,
            Dealer__c: form.Dealer__c,
            Ticket_Type__c: form.Ticket_Type__c,
            Other_Ticket_Type__c: form.Other_Ticket_Type__c,
            Field_Team_Remarks__c: form.Field_Team_Remarks__c,
            Complaint_Status__c: "Open",
            Complaint_Description__c: "Test",
            FSO__c: userid,
            Branch_Head__c: userdetail.Branch_Head__c,
            President__c: userdetail.President__c,
            Vertical_Head__c: userdetail.Vertical_Head__c,
          },
        ],
      },
    });
  }

  render() {
    const { form, changeform, retailersList, loading } = this.props;
    let id = this.props.navigation.state.params;
    // console.log("jjjjjjjjj", id);
    return (
      <ScrollView style={Style.container}>
        <TouchableOpacity onPress={NavigationService.goback}>
          <GenericIcon name={"arrow-back"} style={Style.backIcon} />
        </TouchableOpacity>
        <View style={{ alignSelf: "center", marginBottom: hp("4%") }}>
          <ScrollView style={Style.action} showsVerticalScrollIndicator={false}>
            <Text style={Style.heading}>New Ticket</Text>
            <View style={{ top: hp("3%") }}>
              {id.id == "Sales Team" ? (
                []
              ) : (
                <SearchableDropdown
                  dataSource={HelperService.convertToSearchableListFormat({
                    list: retailersList,
                    id_key: "Id",
                    label_key: "Name",
                  })}
                  placeHolderText={"Select Customer*"}
                  selectedValue={form.Dealer__c}
                  onChange={(value) =>
                    this.props.changeform({
                      edited_field: "Dealer__c",
                      edited_value: value,
                    })
                  }
                  // placeholder={'Type or Select Area'}
                  //invalid={false}
                  customPickerStyles={{ ...Style.picker }}
                  labelStyles={{ ...Style.pickerLabel }}
                  //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                  label={"Customer*"}
                  key={form.Dealer__c}
                />
              )}
              <SearchableDropdown
                dataSource={id.id == "Sales Team" ? type1 : type}
                placeHolderText={"Select Ticket Type*"}
                selectedValue={form.Ticket_Type__c}
                onChange={(value) =>
                  this.props.changeform({
                    edited_field: "Ticket_Type__c",
                    edited_value: value,
                  })
                }
                // placeholder={'Type or Select Area'}
                //invalid={false}
                customPickerStyles={{ ...Style.picker }}
                labelStyles={{ ...Style.pickerLabel }}
                //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                label={"Ticket Type*"}
                key={form.Ticket_Type__c}
              />
              {/* <InputText
                style={Style.mb10}
                placeholder={"Enter Remarks"}
                // value={eventForm.name}
                //onChange={(value) => this.props.changeEventForm({ edited_field: 'name', edited_value: value })}
                //error={validation.invalid && validation.invalid_field == 'name'}
                label={"Remarks*"}
              />
              <InputText
                style={Style.mb10}
                placeholder={"Enter Invoice No."}
                // value={eventForm.name}
                //onChange={(value) => this.props.changeEventForm({ edited_field: 'name', edited_value: value })}
                //error={validation.invalid && validation.invalid_field == 'name'}
                label={"Invoice NO"}
              /> */}
              {form.Ticket_Type__c == "Others" ? (
                <View>
                  <InputText
                    style={Style.mb10}
                    placeholder={"Enter Ticket Type"}
                    value={form.Other_Ticket_Type__c}
                    onChange={(value) =>
                      this.props.changeform({
                        edited_field: "Other_Ticket_Type__c",
                        edited_value: value,
                      })
                    }
                    //error={validation.invalid && validation.invalid_field == 'name'}
                    label={"Others"}
                  />
                </View>
              ) : (
                []
              )}

              <TextArea
                placeholder="Enter Remarks "
                numberOfLines={5}
                style={Style.mb11}
                label={"Remarks*"}
                value={form.Field_Team_Remarks__c}
                // error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                onChange={(value) =>
                  this.props.changeform({
                    edited_field: "Field_Team_Remarks__c",
                    edited_value: value,
                  })
                }
              />

              <View
                style={{
                  width: "95%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 20,
                }}
              >
                {/* <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  Attach Image
                </Text> */}
                {/* <View style={{ ...Style.bottomMargin }}>
                  <MultipleImagePicker title={"Upload image"} images={[]}>
                    <View style={Style.recurringActionButton}>
                      <Text style={Style.recurringActionButtonText}>
                        <GenericIcon
                          name="camera"
                          style={Style.recurringActionButtonIcon}
                        />
                        {"Take Image*"}
                      </Text>
                    </View>
                  </MultipleImagePicker>
                </View> */}
              </View>

              <View style={Style.buttonContainer}>
                {id.id == "Sales Team" ? (
                  <BlueButton
                    style={Style.button}
                    rounded
                    large
                    title={"SUBMIT"}
                    // disabled={this.props.createEventLoader}
                    loading={loading}
                    onPress={() => {
                      if (!form.Ticket_Type__c) {
                        HelperService.showToast({
                          message: "please Enter Ticket Type",
                          duration: 2000,
                          buttonText: "Okay",
                        });
                      } else if (
                        form.Ticket_Type__c == "Others" &&
                        !form.Other_Ticket_Type__c
                      ) {
                        HelperService.showToast({
                          message: "please Enter Other Ticket Type",
                          duration: 2000,
                          buttonText: "Okay",
                        });
                      } else if (!form.Field_Team_Remarks__c) {
                        HelperService.showToast({
                          message: "please Enter Remarks",
                          duration: 2000,
                          buttonText: "Okay",
                        });
                      } else {
                        this.submit();
                      }
                    }}
                  />
                ) : (
                  <BlueButton
                    style={Style.button}
                    rounded
                    large
                    title={"SUBMIT"}
                    // disabled={this.props.createEventLoader}
                    loading={loading}
                    onPress={() => {
                      NavigationService.navigate('ComplaintScreen')
                      // if (!form.Dealer__c) {
                      //   HelperService.showToast({
                      //     message: "please enter Customer",
                      //     duration: 2000,
                      //     buttonText: "Okay",
                      //   });
                      // } else if (!form.Ticket_Type__c) {
                      //   HelperService.showToast({
                      //     message: "please Enter Ticket Type",
                      //     duration: 2000,
                      //     buttonText: "Okay",
                      //   });
                      // } else if (
                      //   form.Ticket_Type__c == "Others" &&
                      //   !form.Other_Ticket_Type__c
                      // ) {
                      //   HelperService.showToast({
                      //     message: "please Enter Other Ticket Type",
                      //     duration: 2000,
                      //     buttonText: "Okay",
                      //   });
                      // } else if (!form.Field_Team_Remarks__c) {
                      //   HelperService.showToast({
                      //     message: "please Enter Remarks",
                      //     duration: 2000,
                      //     buttonText: "Okay",
                      //   });
                      // } else {
                      //   // this.submit();
                      // }
                    }}
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state.menu.Createticket,
  retailersList: state.retailers.retailersList,
  token: state.user.token,
  userid: state.user.loginDetails.userId,
  loading: state.menu.CreateTicketLoading,
  // userdetail: state.startday.userDetailList.Employees__r.records[0],
});

const mapDispatchToProps = (dispatch) => ({
  // fetchData:  (params)    => dispatch(OrderListActions.getComplaint(params)),
  changeform: (params) => dispatch(MenuActions.changeTicketForm(params)),
  createTicket: (params) => dispatch(MenuActions.CreateTicket(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewComplaintScreen);
