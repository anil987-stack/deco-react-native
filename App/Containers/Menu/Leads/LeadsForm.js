import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Style from "./LeadStyle";
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
import { connect } from "react-redux";
// import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import MenuActions from "App/Stores/Menu/Actions";
const type = [
  { id: "Individual", name: "Individual" },
  {
    id: "Apartments",
    name: "Apartments",
  },
];
const type2 = [
  { id: "Within a day", name: "Within a day" },
  {
    id: "Within a month",
    name: "Within a month",
  },
];
const type3 = [
  { id: "Interior ", name: "Interior " },
  {
    id: "Exterior",
    name: "Exterior",
  },
  { id: "Both", name: "Both" },
];
const type1 = [
  { id: "Technical", name: "Technical" },

  { id: "Others", name: "Others" },
];
class LeadsForm extends Component {
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
      const{form}=this.props;
    let id = this.props.navigation.state.params;
    console.log("jjjjjjjjj", id);
    return (
      <ScrollView style={Style.container}>
        <TouchableOpacity onPress={NavigationService.goback}>
          <GenericIcon name={"arrow-back"} style={Style.backIcon} />
        </TouchableOpacity>
        <View style={{ alignSelf: "center", marginBottom: hp("4%") }}>
          <ScrollView style={Style.action} showsVerticalScrollIndicator={false}>
            <Text style={Style.heading}>NEW LEADS</Text>
            <View style={{ top: hp("3%") }}>
              <InputNumber
                placeholder="Enter Lead No "
                // numberOfLines={5}
                style={Style.mb11}
                label={"Lead No"}
                  value={form.Open}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeform({ edited_field: 'Open', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              <InputText
                placeholder="Enter Lead Name "
                // numberOfLines={5}
                style={{ ...Style.mb11, fontSize: wp("4%") }}
                label={"Lead Name"}
                 value={form.Dealer__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                 onChange={(value) => this.props.changeform({ edited_field: 'Dealer__c', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>

              <InputText
                placeholder="Enter Lead Source "
                // numberOfLines={5}
                style={{ ...Style.mb11, fontSize: wp("4%") }}
                label={"Lead Source"}
                  value={form.Field_Team_Remarks__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeform({ edited_field: 'Field_Team_Remarks__c', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              <InputNumber
                placeholder="Enter Mobile No. "
                // numberOfLines={5}
                style={Style.mb11}
                label={"Mobile No."}
                  value={form.Other_Ticket_Type__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeform({ edited_field: 'Other_Ticket_Type__c', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              <InputText
                placeholder="Enter E-mail ID. "
                // numberOfLines={5}
                style={{ ...Style.mb11, fontSize: wp("4%") }}
                label={"E-mail ID"}
                value={form.Test}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeForm({ edited_field: 'Test', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              <InputText
                placeholder="Enter Region "
                // numberOfLines={5}
                style={{ ...Style.mb11, fontSize: wp("4%") }}
                label={"Region"}
                  value={form.venue_details__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeform({ edited_field: 'venue_details__c', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              <InputText
                placeholder="Enter Address "
                // numberOfLines={5}
                style={{ ...Style.mb11, fontSize: wp("4%") }}
                label={"Address"}
                  value={form.Ticket_Type__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeform({ edited_field: 'Ticket_Type__c', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              <InputText
                placeholder="Enter City/Town "
                // numberOfLines={5}
                style={{ ...Style.mb11, fontSize: wp("4%") }}
                label={"City/Town"}
                  value={form.Ticket_Type__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeform({ edited_field: 'Ticket_Type__c', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              <InputNumber
                placeholder="Enter Pincode"
                // numberOfLines={5}
                style={Style.mb11}
                label={"Pincode"}
                  value={form.Ticket_Type__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                 onChange={(value) => this.props.changeform({ edited_field: 'Ticket_Type__c', edited_value: value })}
              />

              <View
                style={{
                  width: "25%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>

              <SearchableDropdown
                dataSource={id.id == "Self" ? type1 : type}
                placeHolderText={"Select Lead Type"}
                    selectedValue={form.Dealer__c}
                  onChange={(value) => this.props.changeform({ edited_field: 'Dealer__c', edited_value: value })}
                // placeholder={'Type or Select Area'}
                //invalid={false}
                customPickerStyles={{ ...Style.picker }}
                labelStyles={{ ...Style.pickerLabel }}
                //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                label={"Lead Type*"}
              />
              <View
                style={{
                  width: "95%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 20,
                }}
              ></View>
              <SearchableDropdown
                dataSource={id.id == "Self" ? type1 : type3}
                 placeHolderText={"Select One"}
                      selectedValue={form.Dealer__c}
                    onChange={(value) => this.props.changeform({ edited_field: 'Dealer__c', edited_value: value })}
                //  placeholder={'Type or Select Area'}
                //invalid={false}
                customPickerStyles={{ ...Style.picker }}
                labelStyles={{ ...Style.pickerLabel }}
                //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                label={"Select One"}
              />
              <View
                style={{
                  width: "95%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 20,
                }}
              ></View>
              <SearchableDropdown
                dataSource={id.id == "Self" ? type1 : type2}
                placeHolderText={"Expected Planning Date"}
                     selectedValue={form.Ticket_Type__c}
                   onChange={(value) => this.props.changeform({ edited_field: 'Ticket_Type__c', edited_value: value })}
                // placeholder={'Type or Select Area'}
                //invalid={false}
                customPickerStyles={{ ...Style.picker }}
                labelStyles={{ ...Style.pickerLabel }}
                //invalid={validation.invalid && validation.invalid_field == 'area__c'}
                label={"Expected Planning Date"}
              />
              <View
                style={{
                  width: "95%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              ></View>
              {/* <InputText
                style={Style.mb10}
                placeholder={"Enter Remarks"}
                // value={form.name}
                //onChange={(value) => this.props.changeform({ edited_field: 'name', edited_value: value })}
                //error={validation.invalid && validation.invalid_field == 'name'}
                label={"Remarks*"}
              />
              <InputText
                style={Style.mb10}
                placeholder={"Enter Invoice No."}
                // value={form.name}
                //onChange={(value) => this.props.changeform({ edited_field: 'name', edited_value: value })}
                //error={validation.invalid && validation.invalid_field == 'name'}
                label={"Invoice NO"}
              /> */}
              <InputText
                placeholder="Enter Remarks "
                numberOfLines={5}
                style={{ ...Style.mb11, fontSize: wp("4%") }}
                label={"Remarks*"}
                 value={form.Ticket_Type__c}
                //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                  onChange={(value) => this.props.changeform({ edited_field: 'Ticket_Type__c', edited_value: value })}
              />

              <View
                style={{
                  width: "95%",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: 15,
                }}
              >
                <InputText
                  placeholder="Enter Response"
                  // numberOfLines={5}
                  style={{ ...Style.mb11, fontSize: wp("4%") }}
                  label={"Response"}
                   value={form.Ticket_Type__c}
                  //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                    onChange={(value) => this.props.changeform({ edited_field: 'Ticket_Type__c', edited_value: value })}
                />

                <View
                  style={{
                    width: "95%",
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 15,
                  }}
                ></View>
                <InputNumber
                  placeholder="Amount/ Approximate Value"
                  // numberOfLines={5}
                  style={Style.mb11}
                  label={"Amount/ Approximate Value"}
                   value={form.Ticket_Type__c}
                  //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                    onChange={(value) => this.props.changeform({ edited_field: 'Ticket_Type__c', edited_value: value })}
                />

                <View
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 15,
                  }}
                ></View>
                <InputText
                  placeholder="Enter Stage/Status"
                  // numberOfLines={5}
                  style={{ ...Style.mb11, fontSize: wp("4%") }}
                  label={"Stage/Status"}
                   value={form.Field_Team_Remarks__c}
                  //  error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                   onChange={(value) => this.props.changeform({ edited_field: 'Field_Team_Remarks__c', edited_value: value })}
                />

                <View
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: 15,
                  }}
                ></View>

                <View style={Style.buttonContainer}>
                  <BlueButton
                    style={Style.button}
                    rounded
                    large
                    title={"SUBMIT"}
                    // disabled={this.props.createEventLoader}
                    // loading={this.props.createEventLoader}
                    // onPress={() => {
                    //     this.submit()
                    // }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
    //data    : state.orderlist.ComplaintData,
    form: state.menu.Createticket,

    //loading   : state.orderlist.loaders.getComplaintLoader,
  });

  const mapDispatchToProps = (dispatch) => ({
   // fetchData:  (params)    => dispatch(OrderListActions.getComplaint(params)),
    changeform: (params) => dispatch(MenuActions.changeTicketForm(params)),

  });

export default connect(mapStateToProps, mapDispatchToProps)(LeadsForm);
