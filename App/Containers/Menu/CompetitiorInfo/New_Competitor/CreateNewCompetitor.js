import { CheckBox, Radio } from "native-base";
import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
  Switch,
  TouchableOpacity,
} from "react-native";
import BlueButton from "App/Components/BlueButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Colors from "App/Theme/Colors";
import Styles from "./NewCompetitorScreenStyle";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";
import { HelperService } from "App/Services/Utils/HelperService";
import WhiteButton from "App/Components/WhiteButton";
import MultipleImagePicker from "../../../../Components/ImagePicker/MultipleImagePicker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import ImagePic from "../../../../Components/ImagePicker/Imageinbutton";
import GenericIcon from "App/Components/GenericIcon";
import MenuActions from "App/Stores/Menu/Actions";
const segmentList = [
  { id: "Car", name: "Car" },
  { id: "2 Wheeler", name: "2 Wheeler" },
  { id: "LCV", name: "LCV" },
  { id: "Others", name: "Others" },
];

const scheme = [
  { id: "Monthly slab", name: "Monthly slab" },
  { id: "Quarterly slab", name: "Quarterly slab" },
];

class CreateNewCompetitor extends Component {
  constructor(props) {
    super(props);
    this.state = { count: false, mount: false };
  }
  componentDidMount() {
    this.props.clearCompetitorSchemeForm();
  }
  onCheck() {
    const { form, changeCampaignForm, userdetail, userid, token } = this.props;
    let data = {
      records: [
        {
          attributes: {
            type: "Competition_Information__c",
            referenceId: "ref1",
          },

          Brand_name__c: form.Brand_name__c,
          Part_No__c: form.Part_No__c,
          Segment__c: form.Segment__c,
          Application__c: form.Application__c,
          OE_Status__c: form.OE_Status__c == true ? "Yes" : "No",
          MRP__c: form.MRP__c,
          Landing_Price__c: form.Landing_Price__c?form.Landing_Price__c:"",
          GST_Rate__c: form.GST_Rate__c?form.GST_Rate__c:"",
          Scheme__c: form.Scheme__c?form.Scheme__c:"",
          Remarks__c: form.Remarks__c?form.Remarks__c:"",
          Tentative_Quantity__c: form.Tentative_Quantity__c?form.Tentative_Quantity__c:"",
          Tentative_Value__c: form.Tentative_Value__c?form.Tentative_Value__c:"",
          Growing_Degrowing_Product__c: form.Growing_Degrowing_Product__c?form.Growing_Degrowing_Product__c:"",
          Competition_Type__c: "New Product",
        },
      ],
    };
    if (!form.Brand_name__c) {
      HelperService.showToast({
        message: "Brand Name Field is empty",
      });
    } else if (!form.Part_No__c) {
      HelperService.showToast({
        message: "Part No. Field is empty",
      });
    } else if (!form.Segment__c) {
      HelperService.showToast({
        message: "Segment Field is empty",
      });
    } else if (!form.Application__c) {
      HelperService.showToast({
        message: "Application Field is empty",
      });
    } else if (!form.MRP__c) {
      HelperService.showToast({
        message: "MRP Field is empty",
      });
    // } else if (!form.Landing_Price__c) {
    //   HelperService.showToast({
    //     message: "Landing Price Field is empty",
    //   });
    // } else if (!form.GST_Rate__c) {
    //   HelperService.showToast({
    //     message: "GST Price Field is empty",
    //   });
    // } else if (!form.Scheme__c) {
    //   HelperService.showToast({
    //     message: "Scheme Type Field is empty",
    //   });
    // } else if (!form.Tentative_Quantity__c) {
    //   HelperService.showToast({
    //     message: "Monthly Consumption Quantity Field is empty",
    //   });
    // } else if (!form.Tentative_Value__c) {
    //   HelperService.showToast({
    //     message: "Monthly Consumption Value Field is empty",
    //   });
    // } else if (!form.Growing_Degrowing_Product__c) {
    //   HelperService.showToast({
    //     message: "Growing/Degrowing Product Field is empty",
    //   });
    // } else if (!form.Remarks__c) {
    //   HelperService.showToast({
    //     message: "Reamrks Field is empty",
    //   });
    } else {
      this.props.createCompetitorScheme({
        form: data,
        token,
      });
    }
  }

  render() {
    // const [count, setCount] =useState(false);
    const { form, changeForm, userdetail, userid } = this.props;
    return (
      <ScrollView>
        <View style={{ flex: 1, marginBottom: wp("10%"), marginTop: wp("5%") }}>
          {/* <InputText 
    // style={Styles.inputtext}
        placeholder={'Enter Firm Name'}
        label={''}
        // value={form.firmName}
        // onChange={(value) => changeForm({ edited_field: 'firmName', edited_value: value })}
      //  error={validation.invalid && validation.invalid_field == 'firmName'}
        /> */}
          {/* <SearchableDropdown
            //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
            dataSource={[]}
            placeHolderText={"Select Brand"}
            // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
            // selectedValue={BookOrderForm.plant}
            onChange={(value) => {
              changeBookOrderForm({
                edited_field: "DBA",
                edited_value: value,
              });
            }}
            label={"Brand Name"}
            customPickerStyles={{ ...Styles.picker }}
            labelStyles={{ ...Styles.pickerLabel }}
            stylelabel={{
              fontSize: hp("2"),
              marginLeft: wp("4.5"),
              color: "#515C6F",
            }}
          /> */}
          <InputText
            style={Styles.inputtext}
            placeholder={"Enter Brand Name"}
            label={"Brand Name*"}
            labelstyle={{ fontSize: 15, marginLeft: wp("3"), color: "#515C6F" }}
            value={form.Brand_name__c}
            onChange={(value) =>
              changeForm({ edited_field: "Brand_name__c", edited_value: value })
            }
            //  error={validation.invalid && validation.invalid_field == 'firmName'}
          />
          {/* <SearchableDropdown
            //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
            dataSource={[]}
            placeHolderText={"Select Part No."}
            // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
            // selectedValue={BookOrderForm.plant}
            onChange={(value) => {
              changeBookOrderForm({
                edited_field: "DBA",
                edited_value: value,
              });
            }}
            label={"Part No."}
            customPickerStyles={{ ...Styles.picker }}
            labelStyles={{ ...Styles.pickerLabel }}
            stylelabel={{
              fontSize: hp("2"),
              marginLeft: wp("4.5"),
              color: "#515C6F",
            }}
          /> */}
          <InputText
            style={Styles.inputtext}
            placeholder={"Enter Part No. "}
            label={"Part No.*"}
            labelstyle={{ fontSize: 15, marginLeft: wp("3"), color: "#515C6F" }}
            value={form.Part_No__c}
            onChange={(value) =>
              changeForm({ edited_field: "Part_No__c", edited_value: value })
            }
            //  error={validation.invalid && validation.invalid_field == 'firmName'}
          />
          {/* <View style={{ flexDirection: "row", top: wp("1") }}>
            <Text style={Styles.addPart}>Add New Part No</Text>
            <TouchableOpacity
              onPress={() => this.setState({ count: !this.state.count })}
            >
              <GenericIcon
                name={this.state.count ? "remove-circle" : "add-circle"}
                // onPress={NavigationService.goback}
                style={{
                  color: Colors.primary,
                  fontSize: wp("6%"),
                  marginLeft: hp("1"),
                  top: hp("0"),
                }}
              />
            </TouchableOpacity>
          </View> */}
          {/* {this.state.count ? (
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter Part No. "}
              // label={'Application'}
              labelstyle={Styles.labelStyle}
              // value={form.firmName}
              // onChange={(value) => changeForm({ edited_field: 'firmName', edited_value: value })}
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
          ) : (
            []
          )} */}

          <SearchableDropdown
            //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
            dataSource={segmentList}
            placeHolderText={"Select Segment"}
            // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
            selectedValue={form.Segment__c}
            onChange={(value) => {
              changeForm({
                edited_field: "Segment__c",
                edited_value: value,
              });
            }}
            label={"Segment*"}
            customPickerStyles={{ ...Styles.picker }}
            labelStyles={{ ...Styles.pickerLabel }}
            stylelabel={{
              fontSize: hp("2"),
              marginLeft: wp("4.5"),
              color: "#515C6F",
            }}
            key={form.Segment__c}
          />
          <InputText
            style={Styles.inputtext}
            placeholder={"Enter Application"}
            label={"Application*"}
            labelstyle={{ fontSize: 15, marginLeft: wp("3"), color: "#515C6F" }}
            value={form.Application__c}
            onChange={(value) =>
              changeForm({
                edited_field: "Application__c",
                edited_value: value,
              })
            }
            //  error={validation.invalid && validation.invalid_field == 'firmName'}
          />
          <View style={{ margin: 5 }}>
            <Text
              style={{
                marginLeft: wp("3%"),
                marginTop: hp("0%"),
                color: "#515C6F",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              OE Status
            </Text>
            <Switch
              style={{
                marginRight: wp("5%"),
                alignItems: "flex-end",
                marginTop: wp("-5%"),
              }}
              trackColor={{ false: "", true: Colors.primary }}
              thumbColor="white"
              ios_backgroundColor="gray"
              onValueChange={(value) =>
                changeForm({
                  edited_field: "OE_Status__c",
                  edited_value: value,
                })
              }
              value={form.OE_Status__c}
            />
          </View>

          <InputNumber
            styles={Styles.inputtext}
            placeholder={"Enter MRP"}
            label={"MRP*"}
            labelStyles={{
              fontSize: 15,
              marginLeft: wp("3"),
              color: "#515C6F",
            }}
            value={form.MRP__c}
            onChange={(value) =>
              changeForm({ edited_field: "MRP__c", edited_value: value })
            }
            //  error={validation.invalid && validation.invalid_field == 'firmName'}
          />
          
          <View style={{ top: hp("3%") }}>
            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter Price"}
              label={"Landing Price (Without GST)"}
              labelStyles={{
                fontSize: 15,
                marginLeft: wp("3"),
                color: "#515C6F",
              }}
              value={form.Landing_Price__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Landing_Price__c",
                  edited_value: value,
                })
              }
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter GST Price"}
              label={"GST Price"}
              labelStyles={{
                fontSize: 15,
                marginLeft: wp("3"),
                color: "#515C6F",
              }}
              value={form.GST_Rate__c}
              onChange={(value) =>
                changeForm({ edited_field: "GST_Rate__c", edited_value: value })
              }
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
            <SearchableDropdown
              //  dataSource={plantList.length?[{value:'', label:'Select Plant...'}].concat(plantList):[{value:'', label:'No Plant found...'}]}
              dataSource={scheme}
              placeHolderText={"Select Scheme Type"}
              // selectedValue={BookOrderForm.DBA?BookOrderForm.DBA:'Select Distributor'}
              selectedValue={form.Scheme__c}
              onChange={(value) => {
                changeForm({
                  edited_field: "Scheme__c",
                  edited_value: value,
                });
              }}
              label={"Scheme Type"}
              customPickerStyles={{ ...Styles.picker }}
              labelStyles={{ ...Styles.pickerLabel }}
              stylelabel={{
                fontSize: hp("2"),
                marginLeft: wp("4.5"),
                color: "#515C6F",
              }}
              key={form.Scheme__c}
            />

            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter Monthly Consumption Quantity"}
              label={"Monthly Consumption Quantity"}
              labelStyles={{
                fontSize: 15,
                marginLeft: wp("3"),
                color: "#515C6F",
              }}
              value={form.Tentative_Quantity__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Tentative_Quantity__c",
                  edited_value: value,
                })
              }
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
            <InputNumber
              styles={Styles.inputtext}
              placeholder={"Enter Monthly Consumption Value"}
              label={"Monthly Consumption Value"}
              labelStyles={{
                fontSize: 15,
                marginLeft: wp("3"),
                color: "#515C6F",
              }}
              value={form.Tentative_Value__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Tentative_Value__c",
                  edited_value: value,
                })
              }
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter Growing/Degrowing Product"}
              label={"Growing/Degrowing Product"}
              labelstyle={{
                fontSize: 15,
                marginLeft: wp("3"),
                color: "#515C6F",
              }}
              value={form.Growing_Degrowing_Product__c}
              onChange={(value) =>
                changeForm({
                  edited_field: "Growing_Degrowing_Product__c",
                  edited_value: value,
                })
              }
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
            <InputText
              style={Styles.inputtext}
              placeholder={"Enter Remark"}
              label={"Remarks"}
              labelstyle={{
                fontSize: 15,
                marginLeft: wp("3"),
                color: "#515C6F",
              }}
              value={form.Remarks__c}
              onChange={(value) =>
                changeForm({ edited_field: "Remarks__c", edited_value: value })
              }
              //  error={validation.invalid && validation.invalid_field == 'firmName'}
            />
            {/* <InputText
            style={Styles.inputtext}
            placeholder={"Comparison with LIS Product"}
            label={"Comparison with LIS Product"}
            labelstyle={{ fontSize: 15, marginLeft: wp("3"), color: "#515C6F" }}
            // value={form.firmName}
            // onChange={(value) => changeForm({ edited_field: 'firmName', edited_value: value })}
            //  error={validation.invalid && validation.invalid_field == 'firmName'}
          /> */}

            {/* <View style={{marginLeft:10}} >
<ImagePic 
        // image={form.Photo__c} 
        // onImageSuccess={({image}) => changeForm({ edited_field: 'Photo__c', edited_value: "<img src=data:image/jpeg;base64,"+image+"/>" })}
        >
        </ImagePic>
        </View>
        <View style={{width:'100%',}}>
          <Text style={{alignSelf:'center'}}> Partner Photo </Text> */}
            {/* <Text>(Partner/Director) </Text> */}
            
            <BlueButton
              disabled={this.props.loading}
              loading={this.props.loading}
              style={Styles.buttons1}
              textStyle={{ ...Styles.buttontextStyle }}
              title={"Submit"}
              onPress={() => this.onCheck()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  form: state.menu.createCompetitorSchemelist,
  userdetail: state.startday.userDetailList.Employees__r.records[0],
  loading: state.menu.createCompetitorSchemeLoading,
});

const mapDispatchToProps = (dispatch) => ({
  createCompetitorScheme: (params) =>
    dispatch(MenuActions.createCompetitorScheme(params)),
  changeForm: (params) =>
    dispatch(MenuActions.changeCompetitorSchemeForm(params)),
  clearCompetitorSchemeForm: (params) =>
    dispatch(MenuActions.clearCompetitorSchemeForm(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewCompetitor);
