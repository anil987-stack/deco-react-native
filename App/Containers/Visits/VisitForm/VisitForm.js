import BlueButton from "App/Components/BlueButton";
import InputText from "App/Components/FormInput/InputText";
import InputNumber from "App/Components/FormInput/InputNumber";

import GenericIcon from "App/Components/GenericIcon";
import ImagePicker from "App/Components/ImagePicker";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Select from "App/Components/Select";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import { SUBMIT } from "App/Constants";
import VisitsActions from "App/Stores/Visits/Actions";
import { CheckBox, Label } from "native-base";
import React, { Component } from "react";
// import LocalActions from 'App/Stores/LocalExpense/Actions';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import EditQuantity from "App/Components/EditQuantity/EditQuantity";

import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Linking,
  TextInput,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import Style from "./VisitFormStyles";
import VisitInfoFormEntity from "./VisitInfoFormEntity";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import NavigationService from "App/Services/NavigationService";
import GenericDisplayCard from "App/Components/GenericDisplayCard";
import ProductActions from "App/Stores/Products/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GenericDisplayCardStrip from "App/Components/GenericDisplayCard/GenericDisplayCardStrip";

import MultipleImagePicker from "App/Components/ImagePicker/MultipleImagePicker";
import CommonActions from "App/Stores/Common/Actions";
import LocalActions from "App/Stores/LocalExpense/Actions";
import _ from "lodash";
import { Radio } from "native-base";
import TextArea from "App/Components/FormInput/TextArea";
import { ImageBackground } from "react-native";
import { HeaderNew } from "App/Components/Headerbar/HeaderNew";
import Form from "./Form";
import FormBackground from "App/Components/FormInput/FormBackgroundForVisit";
import LinearGradient from "react-native-linear-gradient";
import VisitFormHeader from "./VisitFormHeader";

const Type = [
  { id: "Parts Quality", name: "Parts Quality" },
  { id: "availability", name: "Availability" },
  { id: "Commerical issues", name: "Commercial issues" },
  { id: "Others", name: "Others" },
];
class VisitInfoForm extends Component {
  componentDidMount() {
    const {
      token,
      getCompetitor,
      getStock,
      fetchVisitInfo,
      fetchVisitImage,
      visitInfoMapping,
      pgid,
      fetchProductCategories,
      executeVisitData,
      changeVisitInfoForm,
      fetchLocalImage,
    } = this.props;
    // this.props.disabledForm();
    // let visit_Id = executeVisitData.Id;
    // changeVisitInfoForm({ edited_field: 'Concerned_Person_No__c', edited_value: executeVisitData.Concerned_Person_No__c })
    // changeVisitInfoForm({ edited_field: 'Manager_Remarks__c', edited_value: executeVisitData.Manager_Remarks__c })
    // changeVisitInfoForm({ edited_field: 'Concerned_Person_Name__c', edited_value: executeVisitData.Concerned_Person_Name__c })

    // console.log("data",executeVisitData);

    fetchVisitInfo({ token, visit_id: executeVisitData.Id });
    fetchLocalImage({
      token,
      id: executeVisitData.Id,
    });
    // yha pa uncomment krna hai

    // getCompetitor({ token, visitId: executeVisitData.Id });
    // fetchVisitImage({ token, id: executeVisitData.Id });

    // if(visitInfoMapping[executeVisitData.Id]){
    //   console.log("hello",visitInfoMapping[executeVisitData.Id])
    //   changeVisitInfoForm({ edited_field: 'Concerned_Person_No__c', edited_value: visitInfoMapping[executeVisitData.Id].Concerned_Person_No__c })
    //   changeVisitInfoForm({ edited_field: 'summary__c', edited_value: visitInfoMapping[executeVisitData.Id].Summary__c })
    //   changeVisitInfoForm({ edited_field: 'Concerned_Person_Name__c', edited_value: visitInfoMapping[executeVisitData.Id].Concerned_Person_Name__c })

    // }else{
    //   console.log("hello",visitInfoMapping[executeVisitData.Id])
    // }

    // getStock({token,  show: false})
    // fetchProductCategories({token ,
    // type: this.props.user_details.business_channel__c ,
    // party: executeVisitData.sfid
    // })
  }

  componentWillUnmount() {
    // const { token, clearAddInfoForm } = this.props;
    // clearAddInfoForm();
  }
  // viewFile(token, attachmentId, FileExtension) {
  //   const { fetchVisitImageAttach } = this.props;
  //   fetchVisitImageAttach({
  //     token,
  //     attachmentId: attachmentId,
  //     extension: FileExtension,
  //   });
  // }

  // getAttachmentInfoNode() {
  //   let visibleNode = [];
  //   const {
  //     fetchVisitInfoLoader,
  //     executeVisitData,
  //     visitInfoImage,
  //     token,
  //     fetchVisitImageAttach,
  //   } = this.props;
  //   // console.log("visitInfoImage[pgid]",vtoken);

  //   if (
  //     !_.isEmpty(visitInfoImage) &&
  //     visitInfoImage[executeVisitData.Id] &&
  //     visitInfoImage[executeVisitData.Id].length
  //   ) {
  //     visibleNode = (
  //       <ScrollView>
  //         {visitInfoImage[executeVisitData.Id] &&
  //           visitInfoImage[executeVisitData.Id].map((obj, index) => (
  //             <View>
  //               <View style={Style.box}>
  //                 <GenericDisplayCardStrip
  //                   key={"Attchament" + index}
  //                   label={`Attachament ${index + 1} `}
  //                   labelStyle={{ ...Style.label, fontSize: wp("3.8%") }}
  //                   value={
  //                     <Text
  //                       style={{
  //                         textDecorationLine: "underline",
  //                         color: "#1890ff",
  //                       }}
  //                       onPress={() =>
  //                         this.viewFile(
  //                           token,
  //                           obj.ContentDocumentId,
  //                           obj.ContentDocument.FileExtension
  //                         )
  //                       }
  //                     >{`View`}</Text>
  //                   }
  //                 />
  //               </View>
  //             </View>
  //           ))}
  //       </ScrollView>
  //     );
  //   } else if (fetchVisitInfoLoader) {
  //     visibleNode = <Loading />;
  //   } else {
  //     visibleNode = [];
  //   }

  //   return visibleNode;
  // }

  // addInfo(params) {
  //   const { add, executeVisitData, token, visitInfoMapping } = this.props;
  //   let request_data = {
  //     batchRequests: [
  //       {
  //         method: "PATCH",
  //         url: "v34.0/sobjects/Visits__c/" + executeVisitData.Id,
  //         richInput: {
  //           summary__c: params.summary__c
  //             ? params.summary__c
  //             : visitInfoMapping.Summary__c,
  //           Concerned_Person_Name__c: params.Concerned_Person_Name__c
  //             ? params.Concerned_Person_Name__c
  //             : visitInfoMapping.Concerned_Person_Name__c,
  //           Concerned_Person_No__c: params.Concerned_Person_No__c
  //             ? params.Concerned_Person_No__c
  //             : visitInfoMapping.Concerned_Person_No__c,
  //           //  "summary__c":"Distributor retailer"
  //         },
  //       },

  //       {
  //         method: "GET",
  //         url:
  //           "v34.0/sobjects/Visits__c/" +
  //           executeVisitData.Id +
  //           "?fields=id,Manager_Remarks__c,Concerned_Person_Name__c,Concerned_Person_No__c,summary__c",
  //       },
  //     ],
  //   };
  //   add({ token, request_data });
  // }

  onCheck() {
    const {
      form,
      changeCampaignForm,
      userdetail,
      userid,
      token,
      visitInfoForm,
      executeVisitData,
      userId,
    } = this.props;
    let data = {
      records: [
        {
          attributes: { type: "Visit_Info__c", referenceId: "ref1" },

          Any_issues_with_Jodidars__c: visitInfoForm.Any_issues_with_Jodidars__c
            ? visitInfoForm.Any_issues_with_Jodidars__c
            : "",
          Visit__c: executeVisitData.Id,
          Any_issues_with_retailers__c: visitInfoForm.Any_issues_with_retailers__c
            ? visitInfoForm.Any_issues_with_retailers__c
            : "",
          Collection_Amt__c: visitInfoForm.Collection_Amt__c
            ? visitInfoForm.Collection_Amt__c
            : "",
          Collection_Type__c: visitInfoForm.Collection_Type__c
            ? visitInfoForm.Collection_Type__c
            : "",
          Feedback__c: visitInfoForm.Feedback__c
            ? visitInfoForm.Feedback__c
            : "",
          Feedback_Type__c: visitInfoForm.Feedback_Type__c
            ? visitInfoForm.Feedback_Type__c
            : "",
          FSO__c: userId,
          How_is_the_payment_from_Jodidars__c: visitInfoForm.How_is_the_payment_from_Jodidars__c
            ? visitInfoForm.How_is_the_payment_from_Jodidars__c
            : "",
          How_is_the_payment_from_retailer__c: visitInfoForm.How_is_the_payment_from_retailer__c
            ? visitInfoForm.How_is_the_payment_from_retailer__c
            : "",
          New_Product_Introduction__c: "",
          Number_of_Mechanics_Under_this_DLR__c: visitInfoForm.Number_of_Mechanics_Under_this_DLR__c
            ? visitInfoForm.Number_of_Mechanics_Under_this_DLR__c
            : "",
          Number_of_Retailers_Under_this_DLR__c: visitInfoForm.Number_of_Retailers_Under_this_DLR__c
            ? visitInfoForm.Number_of_Retailers_Under_this_DLR__c
            : "",
          Parts_availability_at_LIS__c: visitInfoForm.Parts_availability_at_LIS__c
            ? visitInfoForm.Parts_availability_at_LIS__c
            : "",
          Visit_Date__c: HelperService.dateReadableFormatWithHyphen(),
          Assist_on_Part_no_s__c: visitInfoForm.Assist_on_Part_no_s__c
            ? visitInfoForm.Assist_on_Part_no_s__c
            : "",
          Assist_on_point_Validation__c: visitInfoForm.Assist_on_point_Validation__c
            ? visitInfoForm.Assist_on_point_Validation__c
            : "",
          Assist_on_pricing__c: visitInfoForm.Assist_on_pricing__c
            ? visitInfoForm.Assist_on_pricing__c
            : "",
          Assist_on_gift_redemption__c: visitInfoForm.Assist_on_gift_redemption__c
            ? visitInfoForm.Assist_on_gift_redemption__c
            : "",
          Marketing_New_Ranges_and_Sharing_Fitment__c: visitInfoForm.Marketing_New_Ranges_and_Sharing_Fitment__c
            ? visitInfoForm.Marketing_New_Ranges_and_Sharing_Fitment__c
            : "",
          Mapping_Prospect_Mechanics_with_LAD__c: visitInfoForm.Mapping_Prospect_Mechanics_with_LAD__c
            ? visitInfoForm.Mapping_Prospect_Mechanics_with_LAD__c
            : "",
          Investigation_on_Duplicate_Validation__c: visitInfoForm.Investigation_on_Duplicate_Validation__c
            ? visitInfoForm.Investigation_on_Duplicate_Validation__c
            : "",
          Update_on_Gift_status__c: visitInfoForm.Update_on_Gift_status__c
            ? visitInfoForm.Update_on_Gift_status__c
            : "",
          Selling_old_stock__c: visitInfoForm.Selling_old_stock__c
            ? visitInfoForm.Selling_old_stock__c
            : "",
          Sharing_Product_Catalogues__c: visitInfoForm.Sharing_Product_Catalogues__c
            ? visitInfoForm.Sharing_Product_Catalogues__c
            : "",
          Jodidars_Voice_Warranty_issue__c: visitInfoForm.Jodidars_Voice_Warranty_issue__c
            ? visitInfoForm.Jodidars_Voice_Warranty_issue__c
            : "",
          // Retailer_Voice_Warranty_issue__c: visitInfoForm.Retailer_Voice_Warranty_issue__c
          //   ? visitInfoForm.Retailer_Voice_Warranty_issue__c
          //   : "",
          Visit_Summary__c: visitInfoForm.Visit_Summary__c
            ? visitInfoForm.Visit_Summary__c
            : "",
        },
      ],
    };
    this.props.createVisitInfo({
      form: data,
      token,
    });
    // if (!form.Campaign_on__c) {
    //   HelperService.showToast({
    //     message: "Campaign On Field is empty",
    //   });
    // } else if (!form.BTL_activity_type__c) {
    //   HelperService.showToast({
    //     message: "BTL Activity Type Field is empty",
    //   });
    // } else if (!form.Number_Planned__c) {
    //   HelperService.showToast({
    //     message: "Planned Number Field is empty",
    //   });
    // } else if (!form.Budget_Planned__c) {
    //   HelperService.showToast({
    //     message: "Planned Budget Field is empty",
    //   });
    // } else if (!form.Remarks__c) {
    //   HelperService.showToast({
    //     message: "Remarks Field is empty",
    //   });
    // } else if (!form.Outcome_of_the_Campaign__c) {
    //   HelperService.showToast({
    //     message: "Outcome of Campaign Field is empty",
    //   });
    // } else if (!form.Complaint_raised__c) {
    //   HelperService.showToast({
    //     message: "Complaint Raised Field is empty",
    //   });
    // } else if (!this.getLine().length) {
    //   HelperService.showToast({
    //     message: "Select Giveways",
    //   });
    // } else if (!form.Snacks_Planned__c) {
    //   HelperService.showToast({
    //     message: "Select Snack Planned",
    //   });
    // } else {
    //   this.props.createCampaign({
    //     form: data,
    //     token,
    //   });
    // }
  }

  onUpdate(params) {
    const {
      form,
      changeCampaignForm,
      userdetail,
      userid,
      token,
      visitInfoForm,
      executeVisitData,
      userId,
    } = this.props;
    console.log("params", params);
    let data = {
      batchRequests: [
        {
          method: "PATCH",
          url: "v45.0/sobjects/Visit_Info__c/" + visitInfoForm.Id,
          richInput: {
            Any_issues_with_Jodidars__c: visitInfoForm.Any_issues_with_Jodidars__c
              ? visitInfoForm.Any_issues_with_Jodidars__c
              : "",
            Any_issues_with_retailers__c: visitInfoForm.Any_issues_with_retailers__c
              ? visitInfoForm.Any_issues_with_retailers__c
              : "",
            Collection_Amt__c: visitInfoForm.Collection_Amt__c
              ? visitInfoForm.Collection_Amt__c
              : "",
            Collection_Type__c: visitInfoForm.Collection_Type__c
              ? visitInfoForm.Collection_Type__c
              : "",
            Feedback__c: visitInfoForm.Feedback__c
              ? visitInfoForm.Feedback__c
              : "",
            Feedback_Type__c: visitInfoForm.Feedback_Type__c
              ? visitInfoForm.Feedback_Type__c
              : "",
            FSO__c: userId,
            How_is_the_payment_from_Jodidars__c: visitInfoForm.How_is_the_payment_from_Jodidars__c
              ? visitInfoForm.How_is_the_payment_from_Jodidars__c
              : "",
            How_is_the_payment_from_retailer__c: visitInfoForm.How_is_the_payment_from_retailer__c
              ? visitInfoForm.How_is_the_payment_from_retailer__c
              : "",
            New_Product_Introduction__c: "",
            Number_of_Mechanics_Under_this_DLR__c: visitInfoForm.Number_of_Mechanics_Under_this_DLR__c
              ? visitInfoForm.Number_of_Mechanics_Under_this_DLR__c
              : "",
            Number_of_Retailers_Under_this_DLR__c: visitInfoForm.Number_of_Retailers_Under_this_DLR__c
              ? visitInfoForm.Number_of_Retailers_Under_this_DLR__c
              : "",
            Parts_availability_at_LIS__c: visitInfoForm.Parts_availability_at_LIS__c
              ? visitInfoForm.Parts_availability_at_LIS__c
              : "",
            Visit_Date__c: HelperService.dateReadableFormatWithHyphen(),
            Assist_on_Part_no_s__c: visitInfoForm.Assist_on_Part_no_s__c
              ? visitInfoForm.Assist_on_Part_no_s__c
              : "",
            Assist_on_point_Validation__c: visitInfoForm.Assist_on_point_Validation__c
              ? visitInfoForm.Assist_on_point_Validation__c
              : "",
            Assist_on_pricing__c: visitInfoForm.Assist_on_pricing__c
              ? visitInfoForm.Assist_on_pricing__c
              : "",
            Assist_on_gift_redemption__c: visitInfoForm.Assist_on_gift_redemption__c
              ? visitInfoForm.Assist_on_gift_redemption__c
              : "",
            Marketing_New_Ranges_and_Sharing_Fitment__c: visitInfoForm.Marketing_New_Ranges_and_Sharing_Fitment__c
              ? visitInfoForm.Marketing_New_Ranges_and_Sharing_Fitment__c
              : "",
            Mapping_Prospect_Mechanics_with_LAD__c: visitInfoForm.Mapping_Prospect_Mechanics_with_LAD__c
              ? visitInfoForm.Mapping_Prospect_Mechanics_with_LAD__c
              : "",
            Investigation_on_Duplicate_Validation__c: visitInfoForm.Investigation_on_Duplicate_Validation__c
              ? visitInfoForm.Investigation_on_Duplicate_Validation__c
              : "",
            Update_on_Gift_status__c: visitInfoForm.Update_on_Gift_status__c
              ? visitInfoForm.Update_on_Gift_status__c
              : "",
            Selling_old_stock__c: visitInfoForm.Selling_old_stock__c
              ? visitInfoForm.Selling_old_stock__c
              : "",
            Sharing_Product_Catalogues__c: visitInfoForm.Sharing_Product_Catalogues__c
              ? visitInfoForm.Sharing_Product_Catalogues__c
              : "",
            Jodidars_Voice_Warranty_issue__c: visitInfoForm.Jodidars_Voice_Warranty_issue__c
              ? visitInfoForm.Jodidars_Voice_Warranty_issue__c
              : "",
            // Retailer_Voice_Warranty_issue__c: visitInfoForm.Retailer_Voice_Warranty_issue__c
            //   ? visitInfoForm.Retailer_Voice_Warranty_issue__c
            //   : "",
            Visit_Summary__c: visitInfoForm.Visit_Summary__c
              ? visitInfoForm.Visit_Summary__c
              : "",
          },
        },
        {
          method: "GET",
          url:
            "v45.0/sobjects/Visit_Info__c/" + visitInfoForm.Id + "?fields=id",
        },
      ],
    };

    this.props.updateVisitInfo({
      form: data,
      token,
    });
    // if (!form.Campaign_on__c) {
    //   HelperService.showToast({
    //     message: "Campaign On Field is empty",
    //   });
    // } else if (!form.BTL_activity_type__c) {
    //   HelperService.showToast({
    //     message: "BTL Activity Type Field is empty",
    //   });
    // } else if (!form.Number_Planned__c) {
    //   HelperService.showToast({
    //     message: "Planned Number Field is empty",
    //   });
    // } else if (!form.Budget_Planned__c) {
    //   HelperService.showToast({
    //     message: "Planned Budget Field is empty",
    //   });
    // } else if (!form.Remarks__c) {
    //   HelperService.showToast({
    //     message: "Remarks Field is empty",
    //   });
    // } else if (!form.Outcome_of_the_Campaign__c) {
    //   HelperService.showToast({
    //     message: "Outcome of Campaign Field is empty",
    //   });
    // } else if (!form.Complaint_raised__c) {
    //   HelperService.showToast({
    //     message: "Complaint Raised Field is empty",
    //   });
    // } else if (!this.getLine().length) {
    //   HelperService.showToast({
    //     message: "Select Giveways",
    //   });
    // } else if (!form.Snacks_Planned__c) {
    //   HelperService.showToast({
    //     message: "Select Snack Planned",
    //   });
    // } else {
    //   this.props.createCampaign({
    //     form: data,
    //     token,
    //   });
    // }
  }

  // getattchmentlist(){

  // }

  render() {
    const {
      add,
      form,
      token,
      loader,
      validation,
      changeForm,
      competitorData,
      uploadImageLoading,
      uploadImageField,
      uploadImage,
      stockData,
      submitUpdateStockForm,
      changeUpdateStockForm,
      submitUpdateCompetitorForm,
      changeUpdateCompetitorForm,
      changeAddPlannedVisitsSearchFilters,
      visitInfoMapping,
      clearAddInfoForm,
      fetchVisitInfoLoader,
      competitorLoader,
      stockLoader,
      visitInfoForm,
      changeVisitInfoForm,
      pgid,
      executeVisitData,
      uploadLocalImage,
      uploadLocalImageLoader,
      userId,
      imagelist,
    } = this.props;

    let id = executeVisitData.Id;

    // let brandsNode = [];

    // if (competitorData.length) {
    //   competitorData.map((obj, index) => {
    //     brandsNode.push(
    //       <AddCompetitorFormEntity
    //         form={obj}
    //         key={obj.id}
    //         show={true}
    //         changeForm={(params) =>
    //           changeUpdateCompetitorForm({ ...params, id: obj.id })
    //         }
    //         submitForm={(params) =>
    //           submitUpdateCompetitorForm({ ...params, token })
    //         }
    //         editForm={(params) =>
    //           changeAddPlannedVisitsSearchFilters({ ...params })
    //         }
    //       />
    //     );
    //   });
    // } else if (competitorLoader) {
    //   brandsNode = <Loading />;
    // }

    // console.log("visitInfoForm",visitInfoForm)
    // let brandsNode1= [];

    // if (stockData.length) {
    // 	stockData.map((obj, index) => {
    //     		brandsNode1.push(<AddStockFormEntity form={obj} key={obj.id} show={true} changeForm={(params) => changeUpdateStockForm({...params, id: obj.id})}
    //         submitForm={(params)=> submitUpdateStockForm({...params, token})}
    //         editForm= {(params)=>changeAddPlannedVisitsSearchFilters({...params}) }
    //         />)
    //       });

    // }
    // else if (stockLoader){
    //   brandsNode1 = <Loading />;
    // }
    return (
      <>
        <ImageBackground
          style={Styles.imgBackground}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          {/* <View style={{ flex: 1, marginBottom: hp("30%") }}> */}
          <HeaderNew
            title={"VISIT FORM"}
            buttonTitle={"BACK"}
            textStyle={{ top: hp("-1.8%"), marginLeft: wp("-8%") }}
            onPress={() => NavigationService.goback()}
            // onPress={() => NavigationService.navigate("MerchandiserForm")}
          />
          <VisitFormHeader />
          <ScrollView>
            <FormBackground
              cardStyle={{ marginTop: hp("5%"), height: hp("85%") }}
              content={<Form />}
            />
            
          </ScrollView>
          <View style={{ alignItems: "center", marginBottom: wp("15%"), marginTop: wp("0%") }}>
              <TouchableOpacity
                style={{ position:"absolute" }}

                // onPress={() => {this.props.closeModal(),NavigationService.navigate("EndDayScreen")}}
              >
                <LinearGradient
                  colors={[Colors.primary, Colors.darkRed]}
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.7 }}
                  style={{
                    height: 50,
                    width: 200,
                    borderRadius: 10,
                    alignSelf: "center",
                    marginTop: hp("0.5%"),
                  }}
                >
                  <Text
                    style={{
                      ...Styles.buttontextStyle,
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",
                      fontWeight: "bold",
                      alignSelf: "center",
                      paddingVertical: 10,
                      fontSize: 19,
                    }}
                  >
                    {"SUBMIT"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
        </ImageBackground>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.loginDetails.userId,
  token: state.user.token,
  visitInfoForm: state.visits.visitInfoForm,
  loader: state.visits.visitInfoFormLoader,
  validation: state.visits.visitInfoFormValidation,
  visibilityLevelList: state.visits.visibilityLevelList,
  retailerCompetitors: state.retailers.retailerCompetitors,
  visitInfoFormMultiple: state.visits.visitInfoFormMultiple,
  productCategoryDisplayList: state.products.productCategoryDisplayList,
  competitorData: state.visits.visitCompetitor,
  competitorLoader: state.visits.getVisitCompetitorLoader,
  stockData: state.visits.visitStock,
  stockLoader: state.visits.getVisitStockLoader,
  Competitors: state.retailers.retailerCompetitors,
  productCategory: state.products.productCategoryDisplayList,
  uploadImageLoading: state.common.uploadImageLoader,
  uploadImageField: state.common.uploadImageField,
  // pgid    : state.visits.executeVisitData.pg_id__c,
  fetchVisitInfoLoader: state.visits.fetchVisitInfoLoader,
  visitInfoMapping: state.visits.visitInfoMapping,
  executeVisitData: state.visits.executeVisitData,
  user_details: state.user.user_details,
  visitInfoImage: state.visits.visitInfoImage,
  uploadLocalImageLoader: state.local.uploadLocalImageLoader,
  showPicker: state.visits.showPicker,
  showInput: state.visits.showInput,
  showButton: state.visits.showButton,
  dropPicker: state.visits.dropPicker,
  imagelist: state.local.localImageList,
});

const mapDispatchToProps = (dispatch) => ({
  changeVisitInfoForm: (params) =>
    dispatch(VisitsActions.changeVisitInfoForm(params)),
  add: (params) => dispatch(VisitsActions.addVisitInfo(params)),
  fetchVisitImage: (params) => dispatch(VisitsActions.fetchVisitImage(params)),
  fetchAttachmentsData: (params) =>
    dispatch(VisitsActions.fetchVisitAttachmentsDetails(params)),
  addVisitInfoEntity: (params) =>
    dispatch(VisitsActions.addVisitInfoEntity(params)),
  removeVisitInfoEntity: (params) =>
    dispatch(VisitsActions.removeVisitInfoEntity(params)),
  editVisitInfoEntity: (params) =>
    dispatch(VisitsActions.editVisitInfoEntity(params)),
  getCompetitor: (params) => dispatch(VisitsActions.getCompetitor(params)),
  getStock: (params) => dispatch(VisitsActions.getStock(params)),
  uploadImage: (params) => dispatch(CommonActions.uploadImage(params)),
  submitUpdateStockForm: (params) =>
    dispatch(VisitsActions.submitUpdateStockForm(params)),
  changeUpdateStockForm: (params) =>
    dispatch(VisitsActions.changeUpdateStockForm(params)),
  submitUpdateCompetitorForm: (params) =>
    dispatch(VisitsActions.submitUpdateCompetitorForm(params)),
  changeUpdateCompetitorForm: (params) =>
    dispatch(VisitsActions.changeUpdateCompetitorForm(params)),
  changeAddPlannedVisitsSearchFilters: (params) =>
    dispatch(VisitsActions.changeAddPlannedVisitsSearchFilters(params)),
  clearAddInfoForm: () => dispatch(VisitsActions.clearAddInfoForm()),
  fetchVisitInfo: (params) => dispatch(VisitsActions.fetchVisitInfo(params)),
  fetchProductCategories: (params) =>
    dispatch(ProductActions.fetchProductCategories(params)),
  uploadLocalImage: (params) => dispatch(LocalActions.uploadLocalImage(params)),
  fetchVisitImageAttach: (params) =>
    dispatch(LocalActions.fetchVisitImageAttach(params)),
  createVisitInfo: (params) => dispatch(VisitsActions.createVisitInfo(params)),
  enabledForm: (params) => dispatch(VisitsActions.enabledForm(params)),
  disabledForm: (params) => dispatch(VisitsActions.disabledForm(params)),
  updateVisitInfo: (params) => dispatch(VisitsActions.updateVisitInfo(params)),
  fetchLocalImage: (params) => dispatch(LocalActions.fetchLocalImage(params)),
  fetchVisitImageAttach: (params) =>
    dispatch(LocalActions.fetchVisitImageAttach(params)),
  selectfile: (params) => dispatch(VisitsActions.selectFile(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitInfoForm);

/*<View style={{flexDirection:'row', justifyContent:'space-between'}}>

      
      <Text style={Style.formHeading}>{'Stock'}</Text>
      <TouchableOpacity
          style={Style.plusIcon}
          onPress={() => NavigationService.navigate('AddStockForm')}>
          <GenericIcon
            name={'add-circle'}
            style={{ color: Colors.button, fontSize: 30, alignSelf: 'center',marginBottom:'45%' }}
          />
        </TouchableOpacity>   
    </View>
    <View style={{ ...Style.bottomMargin, ...Style.checkboxContainer }}>
              <View>
                <Label
                  style={{ ...Style.label }}
                  onPress={(event) => {
                    let updatedValue = form.market_material_required__c == true ? false : true;
                    changeForm({ edited_field: 'market_material_required__c', edited_value: updatedValue })
                  }
                  }>
                  {'Marketing Visibility Material Required'}
                </Label>
              </View>
              <View>
                <CheckBox
                  style={{ borderRadius: 2, borderColor:Colors.grey, color: Colors.grey , marginLeft:10 }}
                  checked={form.market_material_required__c == true}
                  onPress={(event) => {
                    let updatedValue = form.market_material_required__c == true? false : true
                    changeForm({ edited_field: 'market_material_required__c', edited_value: updatedValue })
                  }
                  }
                />
              </View>
            </View>*/

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("0%"),
  },
  cardstyle: {
    backgroundColor: Colors.darkRedPink,
    width: wp("100%"),
    top: hp("-1%"),
    height: hp("18%"),
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  backarrow: {
    color: Colors.background,
    fontSize: 34,
    paddingRight: 360,
    paddingTop: 15,
  },
  title: {
    fontFamily: "Rubik",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    bottom: hp("1%"),
  },
  titleText: {
    color: Colors.black,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 28,
    fontWeight: "bold",
  },

  date: {
    fontSize: 28,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("2%"),
    top: hp("2%"),
  },
  month: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("-0.5%"),
    top: hp("1.5%"),
  },
  head: {
    fontSize: 15,
    fontFamily: "Rubik",
    // left: hp("1%"),
    fontWeight: "bold",
    color: Colors.background,
    top: hp("-1%"),
    // width:wp("15%"),
    position: "absolute",
  },
  head1: {
    fontSize: 14,
    fontFamily: "Rubik",
    left: hp("0%"),
    top: hp("0%"),
  },
  head2: {
    fontSize: 14,
    fontFamily: "Rubik",
    left: hp("-0.4%"),
    top: hp("1.5%"),
    color: Colors.lightGrey,
  },

  ttl: {
    color: Colors.lightGrey,
    fontSize: wp("2.5%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    top: hp("3%"),
    // right: wp("32%"),
    position: "relative",
    // width:wp("20%")
  },
  detail: {
    color: Colors.black,
    fontSize: wp("2.5%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    left: wp("10%"),
    top: hp("3%"),
    position: "relative",
    width: wp("30%"),
    textAlign: "right",
  },
  plusIcon: {
    borderRadius: 50,
    // bottom: 40,
    position: "absolute",
    // left: 10,
    top: hp("75%"),
    left: wp("80%"),
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  searchBar: {
    opacity: 0.2,
  },
});
