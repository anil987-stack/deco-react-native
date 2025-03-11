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
import MenuActions from "App/Stores/Menu/Actions";
import InputText2 from "App/Components/FormInput/InputText2";
import { Headerbar } from "App/Components/Headerbar";
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

class ScoutingVisitInfo extends Component {
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
          title={"Visit info"}
          name={"play"}
          onPress={() => NavigationService.goback()}/>
      
        
          <View
            style={{ flexDirection: "column", flexWrap: "wrap", top: hp("2%") }}
          >

<View style={{ width: "90%", marginLeft: 10, top: hp("2.5%"),marginBottom:"8%" }}>
              <Text style={{ ...Styles.text, left: wp("1.5%") }}>
              Mode Of Closure
              </Text>
              <View style={{ flexDirection: "row", top: hp("1%") }}>
                <View
                  style={{ flexDirection: "row", width: "35%", left: wp("2%") }}
                >
                  <Text>Call</Text>

                  <Radio
                    style={{ marginLeft: 10 }}
                    //   onPress={() =>
                    //     changeForm({
                    //       edited_field: "Dealing_With_Competitive_Product__c",
                    //       edited_value: true,
                    //     })
                    //   }
                    // selected={id.id.id.Snacks_Planned__c == "Yes"}
                    //   selected={form.Dealing_With_Competitive_Product__c == true}
                    selectedColor={Colors.primary}
                    disabled={true}
                    color={Colors.primary}
                  />
                </View>
                <View style={{ flexDirection: "row", width: "35%" }}>
                  <Text>Visit</Text>

                  <Radio
                    style={{ marginLeft: 10 }}
                    // onPress={() =>
                    //   changeForm({
                    //     edited_field: "Dealing_With_Competitive_Product__c",
                    //     edited_value: false,
                    //   })
                    // }
                    // selected={id.id.id.Snacks_Planned__c == "No"}
                    // selected={form.Dealing_With_Competitive_Product__c == false}
                    selectedColor={Colors.primary}
                    color={Colors.primary}
                    disabled={true}
                  />
                </View>
              </View>
            </View>



       


{/* 
            <View style={{ marginTop: hp("1.5%"), width: wp("90%"), }}>
            <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Mode Of Closure</Text>
            <SearchableDropdown
            //   dataSource={options1}
              placeHolderText={"Select Mode Of Closure"}
            //   selectedValue={form.Secondary_No_Whatsapp}
            //   onChange={(value) =>
            //     this.props.changeForm({
            //       edited_field: "Secondary_No_Whatsapp",
            //       edited_value: value,
            //     })
            //   }
              
              invalid={false}
              dropstyle={{marginTop:"3.5%",
                width: wp("3"),
                height: wp("3"),}}
              customPickerStyles={{ ...Styles.picker,left:"25%" }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View> */}

          <View style={{ marginTop: hp("2.5%"), width: wp("90%"), }}>
            <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Purpose Of Visit</Text>
            <SearchableDropdown
            //   dataSource={options1}
              placeHolderText={"Select Purpose Of Visit"}
            //   selectedValue={form.Secondary_No_Whatsapp}
            //   onChange={(value) =>
            //     this.props.changeForm({
            //       edited_field: "Secondary_No_Whatsapp",
            //       edited_value: value,
            //     })
            //   }
              
              invalid={false}
              dropstyle={{marginTop:"3.5%",
              width: wp("3"),
              height: wp("3"),}}
              customPickerStyles={{ ...Styles.picker,left:"25%" }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>

          <View style={{ marginTop: hp("2.5%"), width: wp("90%"),marginBottom:"4%" }}>
            <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Remarks</Text>

            <TextInput
                style={{
                  height: 38,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: Colors.primary,
                  width: wp("90%"),
                  left: wp("4.5%"),
                  top: hp("1.3%"),
                }}
                placeholderTextColor="#f5b8c0"
                placeholder={"Enter details if others is selected in purpose of visit"}
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

          <View style={{ marginTop: hp("2.5%"), width: wp("90%"), }}>
            <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Outcome</Text>
            <SearchableDropdown
            //   dataSource={options1}
              placeHolderText={"Select Outcome"}
            //   selectedValue={form.Secondary_No_Whatsapp}
            //   onChange={(value) =>
            //     this.props.changeForm({
            //       edited_field: "Secondary_No_Whatsapp",
            //       edited_value: value,
            //     })
            //   }
              
              invalid={false}
              dropstyle={{marginTop:"3.5%",
              width: wp("3"),
              height: wp("3"),}}
              customPickerStyles={{ ...Styles.picker,left:"25%" }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View>
          {/* <View style={{ marginTop: hp("2.5%"), width: wp("90%"), }}>
            <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>Whom</Text>
            <SearchableDropdown
            //   dataSource={options1}
              placeHolderText={"Select Whom"}
            //   selectedValue={form.Secondary_No_Whatsapp}
            //   onChange={(value) =>
            //     this.props.changeForm({
            //       edited_field: "Secondary_No_Whatsapp",
            //       edited_value: value,
            //     })
            //   }
              
              invalid={false}
              dropstyle={{marginTop:"3.5%",
              width: wp("3"),
              height: wp("3"),}}
              customPickerStyles={{ ...Styles.picker,left:"25%" }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View> */}

          {/* <View style={{ marginTop: hp("2.5%"), width: wp("90%"), }}>
            <Text style={{...Styles.text,left:"5%",marginTop:"-5%"}}>To Be Discussed</Text>
            <SearchableDropdown
            //   dataSource={options1}
              placeHolderText={"Select"}
            //   selectedValue={form.Secondary_No_Whatsapp}
            //   onChange={(value) =>
            //     this.props.changeForm({
            //       edited_field: "Secondary_No_Whatsapp",
            //       edited_value: value,
            //     })
            //   }
              
              invalid={false}
              dropstyle={{marginTop:"3.5%",
              width: wp("3"),
              height: wp("3"),}}
              customPickerStyles={{ ...Styles.picker,left:"25%" }}
              labelStyles={{ ...Styles.pickerLabel }}
              //invalid={validation.invalid && validation.invalid_field == 'area__c'}
            />
          </View> */}
         
           
           
          </View>

          <View style={{flexDirection:"row",marginTop:"8%",marginLeft:"3%"}}>
          {/* <View style={{ marginTop: hp("5.5%") }}> */}
                        <BlueButton
                            style={{alignSelf:"center",height:"29%",borderRadius:5,backgroundColor:"#5f88c1"}}
                            rounded
                            textStyle={{fontSize:12}}
                            // large
                            title={'Follow Up Visit'}
                            // disabled={this.props.createEventLoader}
                            // loading={this.props.createEventLoader}
                            onPress={() => NavigationService.goback()}
                        />

<BlueButton
                            style={{alignSelf:"center",height:"29%",borderRadius:5,marginLeft:"1%",backgroundColor:"#264d7e"}}
                            rounded
                            textStyle={{fontSize:12}}
                            // large
                            title={'Merchendiser'}
                            // disabled={this.props.createEventLoader}
                            // loading={this.props.createEventLoader}
                            onPress={() => NavigationService.goback()}
                        />

<BlueButton
                            style={{alignSelf:"center",height:"29%",borderRadius:5,marginLeft:"0.5%",backgroundColor:"#5b9291"}}
                            rounded
                            textStyle={{fontSize:12}}
                            // large
                            title={'Add Lead'}
                            // disabled={this.props.createEventLoader}
                            // loading={this.props.createEventLoader}
                            onPress={() => NavigationService.goback()}
                        />

<BlueButton
                            style={{alignSelf:"center",height:"29%",borderRadius:5,marginLeft:"0.5%",backgroundColor:"#3a73a9"}}
                            rounded
                            textStyle={{fontSize:12}}
                            // large
                            title={'Task'}
                            // disabled={this.props.createEventLoader}
                            // loading={this.props.createEventLoader}
                            onPress={() => NavigationService.goback()}
                        />
                    {/* </View> */}
                    {/* <View style={{ marginTop: hp("5.5%") }}> */}
                  
                    {/* </View> */}
           
          </View>

         

        

          

        
                        <BlueButton
                            style={{alignSelf:"center",height:"29%",borderRadius:5,marginTop:"-3%"}}
                            rounded
                            large
                            title={'Submit'}
                            textStyle={{fontSize:20,paddingTop:4}}
                            // disabled={this.props.createEventLoader}
                            // loading={this.props.createEventLoader}
                            onPress={() => NavigationService.goback()}
                        />
                   
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
export default connect(mapStateToProps, mapDispatchToProps)(ScoutingVisitInfo);
const Styles = StyleSheet.create({
  text: {
    color: Colors.subtitle,
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
    color: Colors.fadeRed,
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    padding: 10,
    marginLeft: 15,
    flexDirection: "row",
    fontWeight:"100"
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
