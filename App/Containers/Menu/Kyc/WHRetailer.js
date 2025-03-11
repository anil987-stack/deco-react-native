import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./FormStyle";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import Colors from "App/Theme/Colors";
import { HelperService } from "App/Services/Utils/HelperService";
import { connect } from "react-redux";
import menuActions from "App/Stores/Menu/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  Icon,
  Input,
  ScrollableTab,
  Container,
  TabHeading,
  Tab,
  Tabs,
  Content,
} from "native-base";
import WHRetailerInfo from "./WHRetailerInfo";
import WHRetailerOther from "./WHRetailerOthre";
import WhiteButton from "App/Components/WhiteButton";
import Communication from "./Communication";
import Financial from "./Financial";
import BusinessType from "./BusinessType";
class WHRetailer extends Component {
  submit(params) {
    // console.log("params", params);
    const { token, userid, managerId, submitForApproval } = this.props;

    let requestData = {
      requests: [
        {
          actionType: "Submit",
          contextId: "0010p0000148waNAAQ", //Account record id here
          nextApproverIds: [""],
          comments: "this is a test",
          contextActorId: userid, //Current User
          processDefinitionNameOrId: "Approval_Process2",
          skipEntryCriteria: "true",
        },
      ],
    };

    submitForApproval({ payload: requestData, token });
  }
  validatePhoneNumber(value) {
    let error = true;
    if (!value) {
      error = true;
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
    ) {
      error = false;
    }
    return error;
  }

  validateAadhaar(value) {
    let error = true;
    if (!value) {
      error = true;
    } else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(value)) {
      error = false;
    }
    return error;
  }

  validateGstNumber(value) {
    let error = true;
    if (!value) {
      error = true;
    } else if (
      !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(value)
    ) {
      error = false;
    }
    return error;
  }
  // validateAadhaar(value) {
  //   let error;
  //   if (!value) {
  //     error = "";
  //   } else if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(value)) {
  //     error = "Invalid Aadhaar Number";
  //   }
  //   return error;
  // }

  validateEmail(value) {
    let error = true;
    if (!value) {
      error = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      error = false;
    }
    return error;
  }
  onCheck() {
    const { form, userid, token, userdetail } = this.props;
    let data = {
      records: [
        {
          attributes: { type: "Account", referenceId: "ref1" },

          Workshop_name__c: form.Workshop_name__c ? form.Workshop_name__c : "",
          Phone: form.Phone,
          Alternate_WhatsApp_No__c: form.Alternate_WhatsApp_No__c
            ? form.Alternate_WhatsApp_No__c
            : "",
          Whatsapp_Number__c: form.Whatsapp_Number__c
            ? form.Whatsapp_Number__c
            : "",
          Email__c: form.Email__c ? form.Email__c : "",
          Type__c: form.Type__c,
          Address__c: form.Address__c,
          PIN_CODE__c: form.PIN_CODE__c,
          Aadhar_No__c: form.Aadhar_No__c,
          Points_Punch__c: form.Points_Punch__c ? form.Points_Punch__c : "",
          Mechanic_Type__c: form.Mechanic_Type__c ? form.Mechanic_Type__c : "",
          Registered_under__c: form.Registered_under__c
            ? form.Registered_under__c
            : "",
          FSO_Name__c: userid,
          Health_Status_Full_Family__c: form.Health_Status_Full_Family__c
            ? form.Health_Status_Full_Family__c
            : "",
          Monthly_Offtake_Fitment_Value_in_Lacs__c: form.Monthly_Offtake_Fitment_Value_in_Lacs__c
            ? form.Monthly_Offtake_Fitment_Value_in_Lacs__c
            : "",
          Category__c: form.Category__c,
          LTVS_Value__c: form.LTVS_Value__c ? form.LTVS_Value__c : "",
          Filters_LTVS_DTVS__c: form.Filters_LTVS_DTVS__c
            ? form.Filters_LTVS_DTVS__c
            : "",
          SFL_Value__c: form.SFL_Value__c ? form.SFL_Value__c : "",
          Battery_Value__c: form.Battery_Value__c ? form.Battery_Value__c : "",
          Lubes_Value__c: form.Lubes_Value__c ? form.Lubes_Value__c : "",
          Lispart_Value__c: form.Lispart_Value__c ? form.Lispart_Value__c : "",
          DTVS_Value__c: form.DTVS_Value__c ? form.DTVS_Value__c : "",
          AE_items1__c: form.AE_items1__c ? form.AE_items1__c : "",
          Value_AE_items1__c: form.Value_AE_items1__c
            ? form.Value_AE_items1__c
            : "",
          AE_items2__c: form.AE_items2__c ? form.AE_items2__c : "",
          Value_AE_items2__c: form.Value_AE_items2__c
            ? form.Value_AE_items2__c
            : "",
          Brand_Battery__c: form.Brand_Battery__c ? form.Brand_Battery__c : "",
          Value_Battery__c: form.Value_Battery__c ? form.Value_Battery__c : "",
          Brand_2_3_Wheel_ranges__c: form.Brand_2_3_Wheel_ranges__c
            ? form.Brand_2_3_Wheel_ranges__c
            : "",
          Value_2_3_Wheel_ranges__c: form.Value_2_3_Wheel_ranges__c
            ? form.Value_2_3_Wheel_ranges__c
            : "",
          Which_products_you_like_deal_in_Future__c: form.Which_products_you_like_deal_in_Future__c
            ? form.Which_products_you_like_deal_in_Future__c
            : "",
          What_s_your_view_on_LIS_product_Quality__c:
            form.What_s_your_view_on_LIS_product_Quality__c,
          Any_Quality_issue_with_product_Part_No__c: form.Any_Quality_issue_with_product_Part_No__c
            ? form.Any_Quality_issue_with_product_Part_No__c
            : "",
          Weekly_Holiday__c: form.Weekly_Holiday__c
            ? form.Weekly_Holiday__c
            : "",
          Have_you_got_all_you_settlement__c: form.Have_you_got_all_you_settlement__c
            ? form.Have_you_got_all_you_settlement__c
            : "",
          Reason_for_not_recieving_gifts__c: form.Reason_for_not_recieving_gifts__c
            ? form.Reason_for_not_recieving_gifts__c
            : "",
          Suggestions_on_New_Product_launch__c:
            form.Suggestions_on_New_Product_launch__c,
          Overall_Feedback_about_LIS_LAD_concept__c: form.Overall_Feedback_about_LIS_LAD_concept__c
            ? form.Overall_Feedback_about_LIS_LAD_concept__c
            : "",
          Other_category__c: form.Other_category__c,
          GSTIN_No__c: form.GSTIN_No__c ? form.GSTIN_No__c : "",
          Other_Feedbacks__c: form.Other_Feedbacks__c,
          Product_No_1_Part_No__c: form.Product_No_1_Part_No__c
            ? form.Product_No_1_Part_No__c
            : "",
          Product_No_1__c: form.Product_No_1__c ? form.Product_No_1__c : "",
          Product_No_1_Issue_faced_Description__c: form.Product_No_1_Issue_faced_Description__c
            ? form.Product_No_1_Issue_faced_Description__c
            : "",
          Product_No_2__c: form.Product_No_2__c ? form.Product_No_2__c : "",
          Product_No_2_Part_No__c: form.Product_No_2_Part_No__c
            ? form.Product_No_2_Part_No__c
            : "",
          Product_No_2_Issue_faced_Description__c: form.Product_No_2_Issue_faced_Description__c
            ? form.Product_No_2_Issue_faced_Description__c
            : "",
          Product_No_3__c: form.Product_No_3__c ? form.Product_No_3__c : "",
          Product_No_3_Part_No__c: form.Product_No_3_Part_No__c
            ? form.Product_No_3_Part_No__c
            : "",
          Product_No_3_Issue_faced_Description__c: form.Product_No_3_Issue_faced_Description__c
            ? form.Product_No_3_Issue_faced_Description__c
            : "",
          Brand_Filters__c: form.Brand_Filters__c ? form.Brand_Filters__c : "",
          Value_filters__c: form.Value_filters__c ? form.Value_filters__c : "",
          Workshop_No_1_Mobile_No__c: form.Workshop_No_1_Mobile_No__c
            ? form.Workshop_No_1_Mobile_No__c
            : "",
          Workshop_Owner_Name__c: form.Workshop_Owner_Name__c,
          Retailer_No_1_Name__c: form.Retailer_No_1_Name__c
            ? form.Retailer_No_1_Name__c
            : "",
          Retailer_No_1_Mobile_No__c: form.Retailer_No_1_Mobile_No__c
            ? form.Retailer_No_1_Mobile_No__c
            : "",
          Retailer_No_1_Proprietor_Name__c: form.Retailer_No_1_Proprietor_Name__c
            ? form.Retailer_No_1_Proprietor_Name__c
            : "",
          Retailer_No_2_Mobile_No__c: form.Retailer_No_2_Mobile_No__c
            ? form.Retailer_No_2_Mobile_No__c
            : "",
          Retailer_No_2_Name__c: form.Retailer_No_2_Name__c
            ? form.Retailer_No_2_Name__c
            : "",
          Name: form.Name,
          Retailer_No_2_Proprietor_Name__c: form.Retailer_No_2_Proprietor_Name__c
            ? form.Retailer_No_2_Proprietor_Name__c
            : "",
          Retailer_No_3_Mobile_No__c: form.Retailer_No_3_Mobile_No__c
            ? form.Retailer_No_3_Mobile_No__c
            : "",
          Retailer_No_3_Name__c: form.Retailer_No_3_Mobile_No__c
            ? form.Retailer_No_3_Mobile_No__c
            : "",
          Retailer_No_3_Proprietor_Name__c: form.Retailer_No_3_Proprietor_Name__c
            ? form.Retailer_No_3_Proprietor_Name__c
            : "",
          Branch_Manager__c: userdetail.ManagerId,
          Branch_Head__c: userdetail.ManagerId,
          Branch_Accountant__c:
            userdetail.Employees__r &&
              userdetail.Employees__r.records[0] &&
              userdetail.Employees__r.records[0].Branch_Accountant__c
              ? userdetail.Employees__r.records[0].Branch_Accountant__c
              : "",
          Prospect_Type__c: form.Prospect_Type__c ? form.Prospect_Type__c : "",
          Sub_Category__c: "PROSPECT- SECONDARY",
          Area_Master__c: form.Area_Master__c,
          States__c: form.States__c,
          Branch_Code__c: form.Branch_Code__c,
          District__c: form.District__c,
          City_Master__c: form.City_Master__c,
          Vehicle_Category_he_is_repairing__c: form.Vehicle_Category_he_is_repairing__c
            ? form.Vehicle_Category_he_is_repairing__c
            : "",
          LIS_Product_range__c: form.LIS_Product_range__c
            ? form.LIS_Product_range__c
            : "",
          Vehicle_Brand_he_is_dealing_with__c: form.Vehicle_Brand_he_is_dealing_with__c
            ? form.Vehicle_Brand_he_is_dealing_with__c
            : "",
          LISS_No_1_Name__c: form.LISS_No_1_Name__c
            ? form.LISS_No_1_Name__c
            : "",
          LISS_No_1_10_digit_code__c: form.LISS_No_1_10_digit_code__c
            ? form.LISS_No_1_10_digit_code__c
            : "",
          LISS_No_2_Name__c: form.LISS_No_2_Name__c
            ? form.LISS_No_2_Name__c
            : "",
          LISS_No_2_10_digit_code__c: form.LISS_No_2_10_digit_code__c
            ? form.LISS_No_2_10_digit_code__c
            : "",
          LiSS_No_3_Name__c: form.LiSS_No_3_Name__c
            ? form.LiSS_No_3_Name__c
            : "",
          LISS_No_3_10_digit_code__c: form.LISS_No_3_10_digit_code__c
            ? form.LISS_No_3_10_digit_code__c
            : "",
          Dealer_No_1_Name__c: form.Dealer_No_1_Name__c
            ? form.Dealer_No_1_Name__c
            : "",
          Dealer_No_1_Mobile_No__c: form.Dealer_No_1_Mobile_No__c
            ? form.Dealer_No_1_Mobile_No__c
            : "",
          Dealer_No_2_Name__c: form.Dealer_No_2_Name__c
            ? form.Dealer_No_2_Name__c
            : "",
          Dealer_No_2_Mobile_No__c: form.Dealer_No_2_Mobile_No__c
            ? form.Dealer_No_2_Mobile_No__c
            : "",
          Dealer_No_3_Name__c: form.Dealer_No_3_Name__c
            ? form.Dealer_No_3_Name__c
            : "",
          Dealer_No_3_Mobile_No__c: form.Dealer_No_3_Mobile_No__c
            ? form.Dealer_No_3_Mobile_No__c
            : "",
          Monthly_Material_used_by_workshop_in_Lac__c: form.Monthly_Material_used_by_workshop_in_Lac__c
            ? form.Monthly_Material_used_by_workshop_in_Lac__c
            : "",
          Major_Repair_in_No_s__c: form.Major_Repair_in_No_s__c
            ? form.Major_Repair_in_No_s__c
            : "",
          Total_Repair_in_No_s__c: form.Total_Repair_in_No_s__c
            ? form.Total_Repair_in_No_s__c
            : "",
          INEL_Value__c: form.INEL_Value__c ? form.INEL_Value__c : "",
          TVS_Automotive_Value__c: form.TVS_Automotive_Value__c
            ? form.TVS_Automotive_Value__c
            : "",
          LUCAS_Batteries_Value__c: form.LUCAS_Batteries_Value__c
            ? form.LUCAS_Batteries_Value__c
            : "",
          PRICOL_Value__c: form.PRICOL_Value__c ? form.PRICOL_Value__c : "",
          Brand_No_5_Value__c: form.Brand_No_5_Value__c
            ? form.Brand_No_5_Value__c
            : "",
          Brand_No_5__c: form.Brand_No_5__c ? form.Brand_No_5__c : "",
          Brand_No_4__c: form.Brand_No_4__c ? form.Brand_No_4__c : "",
          Brand_No_4_Value__c: form.Brand_No_4_Value__c
            ? form.Brand_No_4_Value__c
            : "",
          Brand_No_3__c: form.Brand_No_3__c ? form.Brand_No_3__c : "",
          Brand_No_3_Value__c: form.Brand_No_3_Value__c
            ? form.Brand_No_3_Value__c
            : "",
          Brand_No_2__c: form.Brand_No_2__c ? form.Brand_No_2__c : "",
          Brand_No_2_Value__c: form.Brand_No_2_Value__c
            ? form.Brand_No_2_Value__c
            : "",
          Brand_No_1__c: form.Brand_No_1__c ? form.Brand_No_1__c : "",
          Brand_No_1_Value__c: form.Brand_No_1_Value__c
            ? form.Brand_No_1_Value__c
            : "",
          Are_you_interested_for_Lucas_Service_Val__c: form.Are_you_interested_for_Lucas_Service_Val__c
            ? form.Are_you_interested_for_Lucas_Service_Val__c
            : "",
          Apex_Monthly_Business_done_by_retailer__c: form.Apex_Monthly_Business_done_by_retailer__c
            ? form.Apex_Monthly_Business_done_by_retailer__c
            : "",
          Dealer_No_1_SAP_Code_c: form.Dealer_No_1_SAP_Code_c
            ? form.Dealer_No_1_SAP_Code_c
            : "",
          Dealer_No_2_SAP_Code_c: form.Dealer_No_2_SAP_Code_c
            ? form.Dealer_No_2_SAP_Code_c
            : "",
          Dealer_No_3_SAP_Code_c: form.Dealer_No_3_SAP_Code_c
            ? form.Dealer_No_3_SAP_Code_c
            : "",
          Other_Language_Known: form.Other_Language_Known ? form.Other_Language_Known : "",
          Mother_Tongue: form.Mother_Tongue ? form.Mother_Tongue : "",
          Contact_Name: form.Contact_Name ? form.Contact_Name : "",
          Primary_Mob_No: form.Primary_Mob_No ? form.Primary_Mob_No : "",
          Primary_No_Whatsapp: form.Primary_No_Whatsapp ? form.Primary_No_Whatsapp : "",
          Secondary_Mob_No: form.Secondary_Mob_No ? form.Secondary_Mob_No : "",
          Secondary_No_Whatsapp: form.Secondary_No_Whatsapp ? form.Secondary_No_Whatsapp : "",
          Marriage_Anniversary: form.Marriage_Anniversary ? form.Marriage_Anniversary : "",
          DOB: form.DOB ? form.DOB : "",
          Account_Type__c: form.Account_Type__c ? form.Account_Type__c : "",
          Business_Category1: form.Business_Category1 ? form.Business_Category1 : "",
          Business_Category2: form.Business_Category2 ? form.Business_Category2 : "",
          Spray_GUN: form.Spray_GUN ? form.Spray_GUN : "",
          Compressor: form.Compressor ? form.Compressor : "",
          Buffing_Machine: form.Buffing_Machine ? form.Buffing_Machine : "",
          Sanding_Machine: form.Sanding_Machine ? form.Sanding_Machine : "",
          Own_Workshop: form.Own_Workshop ? form.Own_Workshop : "",
          Partner_in_Team: form.Partner_in_Team ? form.Partner_in_Team : "",
          Partner_Training_Required: form.Partner_Training_Required ? form.Partner_Training_Required : "",
          Account_Code: form.Account_Code ? form.Account_Code : "",
          Account_Name: form.Account_Name ? form.Account_Name : "",
          Account_Type: form.Account_Type ? form.Account_Type : "",
          Voter_ID: form.Voter_ID ? form.Voter_ID : "",
          Driving_License: form.Driving_License ? form.Driving_License : "",
          Bank_Name: form.Bank_Name ? form.Bank_Name : "",
          Account_No: form.Account_No ? form.Account_No : "",
          Branch: form.Branch ? form.Branch : "",
          IFSC_Code: form.IFSC_Code ? form.IFSC_Code : "",
        },
      ],
    };

    if (!form.Name) {
      HelperService.showToast({
        message: "Retailer Name Field is empty",
      });
    } else if (!form.Workshop_Owner_Name__c) {
      HelperService.showToast({
        message: "Retailer Owner Name Field is empty",
      });
    } else if (!form.Phone) {
      HelperService.showToast({
        message: "Mobile Number Field is empty",
      });
    } else if (!this.validatePhoneNumber(form.Phone)) {
      HelperService.showToast({
        message: "Mobile Number is not Valid",
      });
    } else if (!this.validatePhoneNumber(form.Whatsapp_Number__c)) {
      HelperService.showToast({
        message: "WhtsaApp Number is not Valid",
      });
    }
    // else if (!this.validatePhoneNumber(form.Whatsapp_Number__c)) {
    //   HelperService.showToast({
    //     message: "Whatsapp No. is not Valid",
    //   });
    // }
    else if (!this.validateEmail(form.Email__c)) {
      HelperService.showToast({
        message: "Email-Id is not Valid",
      });
    } else if (!form.Aadhar_No__c) {
      HelperService.showToast({
        message: "Aadhar no. field is empty",
      });
    } else if (!this.validateAadhaar(form.Aadhar_No__c)) {
      HelperService.showToast({
        message: "Aadhar No. is not valid",
      });
    } else if (!this.validateGstNumber(form.GSTIN_No__c)) {
      HelperService.showToast({
        message: "GST no. is not valid",
      });
    } else if (!form.Address__c) {
      HelperService.showToast({
        message: "Address Field is empty",
      });
    } else if (!form.PIN_CODE__c) {
      HelperService.showToast({
        message: "Pincode Field is empty",
      });
    } else if (!form.Area_Master__c) {
      HelperService.showToast({
        message: "Area Field is empty",
      });
    } else if (!form.District__c) {
      HelperService.showToast({
        message: "District Field is empty",
      });
    } else if (!form.City_Master__c) {
      HelperService.showToast({
        message: "City Field is empty",
      });
    } else if (!form.Branch_Code__c) {
      HelperService.showToast({
        message: "Branch Field is empty",
      });
    } else if (!form.States__c) {
      HelperService.showToast({
        message: "State field is empty",
      });
    } else if (!form.Type__c) {
      HelperService.showToast({
        message: "Select Type of Business",
      });
    }
    // else if (!form.Aadhar_No__c) {
    //   HelperService.showToast({
    //     message: "Aadhar no. field is empty",
    //   });
    // }
    // else if (!this.validateAadhaar(form.Aadhar_No__c)) {
    //   HelperService.showToast({
    //     message: "Aadhar No. is not valid",
    //   });
    // }
    else if (!form.Category__c) {
      HelperService.showToast({
        message: "Segment field is empty",
      });
    } else if (!form.Other_category__c) {
      HelperService.showToast({
        message: "Category field is empty",
      });
    } else if (!form.Suggestions_on_New_Product_launch__c) {
      HelperService.showToast({
        message:
          "Which new product he would like to be introduced in LIS field is empty",
      });
    } else if (!form.What_s_your_view_on_LIS_product_Quality__c) {
      HelperService.showToast({
        message:
          "What is your overall opinion about LIS products quality (Rating) field is empty",
      });
    } else if (!form.Other_Feedbacks__c) {
      HelperService.showToast({
        message: "Other Feedbacks field is empty",
      });
    } else {
      this.props.CreateKycForm({
        form: data,
        token,
      });
    }
  }
  onUpdate() {
    const { form, userid, token, userdetail } = this.props;
    let data = {
      batchRequests: [
        {
          method: "PATCH",
          url: "v45.0/sobjects/Account/" + form.Id,
          richInput: {
            Workshop_name__c: form.Workshop_name__c
              ? form.Workshop_name__c
              : "",
            Phone: form.Phone ? form.Phone : "",
            Alternate_WhatsApp_No__c: form.Alternate_WhatsApp_No__c
              ? form.Alternate_WhatsApp_No__c
              : "",
            Whatsapp_Number__c: form.Whatsapp_Number__c
              ? form.Whatsapp_Number__c
              : "",
            Email__c: form.Email__c ? form.Email__c : "",
            Type__c: form.Type__c ? form.Type__c : "",
            Address__c: form.Address__c ? form.Address__c : "",
            PIN_CODE__c: form.PIN_CODE__c ? form.PIN_CODE__c : "",
            Aadhar_No__c: form.Aadhar_No__c ? form.Aadhar_No__c : "",
            Points_Punch__c: form.Points_Punch__c ? form.Points_Punch__c : "",
            Mechanic_Type__c: form.Mechanic_Type__c
              ? form.Mechanic_Type__c
              : "",
            Registered_under__c: form.Registered_under__c
              ? form.Registered_under__c
              : "",
            FSO_Name__c: userid,
            Health_Status_Full_Family__c: form.Health_Status_Full_Family__c
              ? form.Health_Status_Full_Family__c
              : "",
            Monthly_Offtake_Fitment_Value_in_Lacs__c: form.Monthly_Offtake_Fitment_Value_in_Lacs__c
              ? form.Monthly_Offtake_Fitment_Value_in_Lacs__c
              : "",
            Category__c: form.Category__c ? form.Category__c : "",
            LTVS_Value__c: form.LTVS_Value__c ? form.LTVS_Value__c : "",
            Filters_LTVS_DTVS__c: form.Filters_LTVS_DTVS__c
              ? form.Filters_LTVS_DTVS__c
              : "",
            SFL_Value__c: form.SFL_Value__c ? form.SFL_Value__c : "",
            Battery_Value__c: form.Battery_Value__c
              ? form.Battery_Value__c
              : "",
            Lubes_Value__c: form.Lubes_Value__c ? form.Lubes_Value__c : "",
            Lispart_Value__c: form.Lispart_Value__c
              ? form.Lispart_Value__c
              : "",
            DTVS_Value__c: form.DTVS_Value__c ? form.DTVS_Value__c : "",
            AE_items1__c: form.AE_items1__c ? form.AE_items1__c : "",
            Value_AE_items1__c: form.Value_AE_items1__c
              ? form.Value_AE_items1__c
              : "",
            AE_items2__c: form.AE_items2__c ? form.AE_items2__c : "",
            Value_AE_items2__c: form.Value_AE_items2__c
              ? form.Value_AE_items2__c
              : "",
            Brand_Battery__c: form.Brand_Battery__c
              ? form.Brand_Battery__c
              : "",
            Value_Battery__c: form.Value_Battery__c
              ? form.Value_Battery__c
              : "",
            Brand_2_3_Wheel_ranges__c: form.Brand_2_3_Wheel_ranges__c
              ? form.Brand_2_3_Wheel_ranges__c
              : "",
            Value_2_3_Wheel_ranges__c: form.Value_2_3_Wheel_ranges__c
              ? form.Value_2_3_Wheel_ranges__c
              : "",
            Which_products_you_like_deal_in_Future__c: form.Which_products_you_like_deal_in_Future__c
              ? form.Which_products_you_like_deal_in_Future__c
              : "",
            What_s_your_view_on_LIS_product_Quality__c: form.What_s_your_view_on_LIS_product_Quality__c
              ? form.What_s_your_view_on_LIS_product_Quality__c
              : "",
            Any_Quality_issue_with_product_Part_No__c: form.Any_Quality_issue_with_product_Part_No__c
              ? form.Any_Quality_issue_with_product_Part_No__c
              : "",
            Weekly_Holiday__c: form.Weekly_Holiday__c
              ? form.Weekly_Holiday__c
              : "",
            Have_you_got_all_you_settlement__c: form.Have_you_got_all_you_settlement__c
              ? form.Have_you_got_all_you_settlement__c
              : "",
            Reason_for_not_recieving_gifts__c: form.Reason_for_not_recieving_gifts__c
              ? form.Reason_for_not_recieving_gifts__c
              : "",
            Suggestions_on_New_Product_launch__c: form.Suggestions_on_New_Product_launch__c
              ? form.Suggestions_on_New_Product_launch__c
              : "",
            Overall_Feedback_about_LIS_LAD_concept__c: form.Overall_Feedback_about_LIS_LAD_concept__c
              ? form.Overall_Feedback_about_LIS_LAD_concept__c
              : "",
            Other_category__c: form.Other_category__c
              ? form.Other_category__c
              : "",
            GSTIN_No__c: form.GSTIN_No__c ? form.GSTIN_No__c : "",
            Other_Feedbacks__c: form.Other_Feedbacks__c
              ? form.Other_Feedbacks__c
              : "",
            Product_No_1_Part_No__c: form.Product_No_1_Part_No__c
              ? form.Product_No_1_Part_No__c
              : "",
            Product_No_1__c: form.Product_No_1__c ? form.Product_No_1__c : "",
            Product_No_1_Issue_faced_Description__c: form.Product_No_1_Issue_faced_Description__c
              ? form.Product_No_1_Issue_faced_Description__c
              : "",
            Product_No_2__c: form.Product_No_2__c ? form.Product_No_2__c : "",
            Product_No_2_Part_No__c: form.Product_No_2_Part_No__c
              ? form.Product_No_2_Part_No__c
              : "",
            Product_No_2_Issue_faced_Description__c: form.Product_No_2_Issue_faced_Description__c
              ? form.Product_No_2_Issue_faced_Description__c
              : "",
            Product_No_3__c: form.Product_No_3__c ? form.Product_No_3__c : "",
            Product_No_3_Part_No__c: form.Product_No_3_Part_No__c
              ? form.Product_No_3_Part_No__c
              : "",
            Product_No_3_Issue_faced_Description__c: form.Product_No_3_Issue_faced_Description__c
              ? form.Product_No_3_Issue_faced_Description__c
              : "",
            Brand_Filters__c: form.Brand_Filters__c
              ? form.Brand_Filters__c
              : "",
            Value_filters__c: form.Value_filters__c
              ? form.Value_filters__c
              : "",
            Workshop_No_1_Mobile_No__c: form.Workshop_No_1_Mobile_No__c
              ? form.Workshop_No_1_Mobile_No__c
              : "",
            Workshop_Owner_Name__c: form.Workshop_Owner_Name__c
              ? form.Workshop_Owner_Name__c
              : "",
            Retailer_No_1_Name__c: form.Retailer_No_1_Name__c
              ? form.Retailer_No_1_Name__c
              : "",
            Retailer_No_1_Mobile_No__c: form.Retailer_No_1_Mobile_No__c
              ? form.Retailer_No_1_Mobile_No__c
              : "",
            Retailer_No_1_Proprietor_Name__c: form.Retailer_No_1_Proprietor_Name__c
              ? form.Retailer_No_1_Proprietor_Name__c
              : "",
            Retailer_No_2_Mobile_No__c: form.Retailer_No_2_Mobile_No__c
              ? form.Retailer_No_2_Mobile_No__c
              : "",
            Retailer_No_2_Name__c: form.Retailer_No_2_Name__c
              ? form.Retailer_No_2_Name__c
              : "",
            Name: form.Name ? form.Name : "",
            Retailer_No_2_Proprietor_Name__c: form.Retailer_No_2_Proprietor_Name__c
              ? form.Retailer_No_2_Proprietor_Name__c
              : "",
            Retailer_No_3_Mobile_No__c: form.Retailer_No_3_Mobile_No__c
              ? form.Retailer_No_3_Mobile_No__c
              : "",
            Retailer_No_3_Name__c: form.Retailer_No_3_Mobile_No__c
              ? form.Retailer_No_3_Mobile_No__c
              : "",
            Retailer_No_3_Proprietor_Name__c: form.Retailer_No_3_Proprietor_Name__c
              ? form.Retailer_No_3_Proprietor_Name__c
              : "",
            Branch_Manager__c: userdetail.ManagerId,
            Branch_Head__c: userdetail.ManagerId,
            Branch_Accountant__c:
              userdetail.Employees__r &&
                userdetail.Employees__r.records[0] &&
                userdetail.Employees__r.records[0].Branch_Accountant__c
                ? userdetail.Employees__r.records[0].Branch_Accountant__c
                : "",
            Prospect_Type__c: form.Prospect_Type__c
              ? form.Prospect_Type__c
              : "",
            Area_Master__c: form.Area_Master__c ? form.Area_Master__c : "",
            States__c: form.States__c ? form.States__c : "",
            Branch_Code__c: form.Branch_Code__c ? form.Branch_Code__c : "",
            District__c: form.District__c ? form.District__c : "",
            City_Master__c: form.City_Master__c ? form.City_Master__c : "",
            Vehicle_Category_he_is_repairing__c: form.Vehicle_Category_he_is_repairing__c
              ? form.Vehicle_Category_he_is_repairing__c
              : "",
            LIS_Product_range__c: form.LIS_Product_range__c
              ? form.LIS_Product_range__c
              : "",
            Vehicle_Brand_he_is_dealing_with__c: form.Vehicle_Brand_he_is_dealing_with__c
              ? form.Vehicle_Brand_he_is_dealing_with__c
              : "",
            LISS_No_1_Name__c: form.LISS_No_1_Name__c
              ? form.LISS_No_1_Name__c
              : "",
            LISS_No_1_10_digit_code__c: form.LISS_No_1_10_digit_code__c
              ? form.LISS_No_1_10_digit_code__c
              : "",
            LISS_No_2_Name__c: form.LISS_No_2_Name__c
              ? form.LISS_No_2_Name__c
              : "",
            LISS_No_2_10_digit_code__c: form.LISS_No_2_10_digit_code__c
              ? form.LISS_No_2_10_digit_code__c
              : "",
            LiSS_No_3_Name__c: form.LiSS_No_3_Name__c
              ? form.LiSS_No_3_Name__c
              : "",
            LISS_No_3_10_digit_code__c: form.LISS_No_3_10_digit_code__c
              ? form.LISS_No_3_10_digit_code__c
              : "",
            Dealer_No_1_Name__c: form.Dealer_No_1_Name__c
              ? form.Dealer_No_1_Name__c
              : "",
            Dealer_No_1_Mobile_No__c: form.Dealer_No_1_Mobile_No__c
              ? form.Dealer_No_1_Mobile_No__c
              : "",
            Dealer_No_2_Name__c: form.Dealer_No_2_Name__c
              ? form.Dealer_No_2_Name__c
              : "",
            Dealer_No_2_Mobile_No__c: form.Dealer_No_2_Mobile_No__c
              ? form.Dealer_No_2_Mobile_No__c
              : "",
            Dealer_No_3_Name__c: form.Dealer_No_3_Name__c
              ? form.Dealer_No_3_Name__c
              : "",
            Dealer_No_3_Mobile_No__c: form.Dealer_No_3_Mobile_No__c
              ? form.Dealer_No_3_Mobile_No__c
              : "",
            Monthly_Material_used_by_workshop_in_Lac__c: form.Monthly_Material_used_by_workshop_in_Lac__c
              ? form.Monthly_Material_used_by_workshop_in_Lac__c
              : "",
            Major_Repair_in_No_s__c: form.Major_Repair_in_No_s__c
              ? form.Major_Repair_in_No_s__c
              : "",
            Total_Repair_in_No_s__c: form.Total_Repair_in_No_s__c
              ? form.Total_Repair_in_No_s__c
              : "",
            INEL_Value__c: form.INEL_Value__c ? form.INEL_Value__c : "",
            TVS_Automotive_Value__c: form.TVS_Automotive_Value__c
              ? form.TVS_Automotive_Value__c
              : "",
            LUCAS_Batteries_Value__c: form.LUCAS_Batteries_Value__c
              ? form.LUCAS_Batteries_Value__c
              : "",
            PRICOL_Value__c: form.PRICOL_Value__c ? form.PRICOL_Value__c : "",
            Brand_No_5_Value__c: form.Brand_No_5_Value__c
              ? form.Brand_No_5_Value__c
              : "",
            Brand_No_5__c: form.Brand_No_5__c ? form.Brand_No_5__c : "",
            Brand_No_4__c: form.Brand_No_4__c ? form.Brand_No_4__c : "",
            Brand_No_4_Value__c: form.Brand_No_4_Value__c
              ? form.Brand_No_4_Value__c
              : "",
            Brand_No_3__c: form.Brand_No_3__c ? form.Brand_No_3__c : "",
            Brand_No_3_Value__c: form.Brand_No_3_Value__c
              ? form.Brand_No_3_Value__c
              : "",
            Brand_No_2__c: form.Brand_No_2__c ? form.Brand_No_2__c : "",
            Brand_No_2_Value__c: form.Brand_No_2_Value__c
              ? form.Brand_No_2_Value__c
              : "",
            Brand_No_1__c: form.Brand_No_1__c ? form.Brand_No_1__c : "",
            Brand_No_1_Value__c: form.Brand_No_1_Value__c
              ? form.Brand_No_1_Value__c
              : "",
            Are_you_interested_for_Lucas_Service_Val__c: form.Are_you_interested_for_Lucas_Service_Val__c
              ? form.Are_you_interested_for_Lucas_Service_Val__c
              : "",
            Apex_Monthly_Business_done_by_retailer__c: form.Apex_Monthly_Business_done_by_retailer__c
              ? form.Apex_Monthly_Business_done_by_retailer__c
              : "",
            Dealer_No_1_SAP_Code_c: form.Dealer_No_1_SAP_Code_c
              ? form.Dealer_No_1_SAP_Code_c
              : "",
            Dealer_No_2_SAP_Code_c: form.Dealer_No_2_SAP_Code_c
              ? form.Dealer_No_2_SAP_Code_c
              : "",
            Dealer_No_3_SAP_Code_c: form.Dealer_No_3_SAP_Code_c
              ? form.Dealer_No_3_SAP_Code_c
              : "",
            Other_Language_Known: form.Other_Language_Known ? form.Other_Language_Known : "",
            Mother_Tongue: form.Mother_Tongue ? form.Mother_Tongue : "",
            Contact_Name: form.Contact_Name ? form.Contact_Name : "",
            Primary_Mob_No: form.Primary_Mob_No ? form.Primary_Mob_No : "",
            Primary_No_Whatsapp: form.Primary_No_Whatsapp ? form.Primary_No_Whatsapp : "",
            Secondary_Mob_No: form.Secondary_Mob_No ? form.Secondary_Mob_No : "",
            Secondary_No_Whatsapp: form.Secondary_No_Whatsapp ? form.Secondary_No_Whatsapp : "",
            Marriage_Anniversary: form.Marriage_Anniversary ? form.Marriage_Anniversary : "",
            DOB: form.DOB ? form.DOB : "",
            Account_Type__c: form.Account_Type__c ? form.Account_Type__c : "",
            Business_Category1: form.Business_Category1 ? form.Business_Category1 : "",
            Business_Category2: form.Business_Category2 ? form.Business_Category2 : "",
            Spray_GUN: form.Spray_GUN ? form.Spray_GUN : "",
            Compressor: form.Compressor ? form.Compressor : "",
            Buffing_Machine: form.Buffing_Machine ? form.Buffing_Machine : "",
            Sanding_Machine: form.Sanding_Machine ? form.Sanding_Machine : "",
            Own_Workshop: form.Own_Workshop ? form.Own_Workshop : "",
            Partner_in_Team: form.Partner_in_Team ? form.Partner_in_Team : "",
            Partner_Training_Required: form.Partner_Training_Required ? form.Partner_Training_Required : "",
            Account_Code: form.Account_Code ? form.Account_Code : "",
            Account_Name: form.Account_Name ? form.Account_Name : "",
            Account_Type: form.Account_Type ? form.Account_Type : "",
            Voter_ID: form.Voter_ID ? form.Voter_ID : "",
            Driving_License: form.Driving_License ? form.Driving_License : "",
            Bank_Name: form.Bank_Name ? form.Bank_Name : "",
            Account_No: form.Account_No ? form.Account_No : "",
            Branch: form.Branch ? form.Branch : "",
            IFSC_Code: form.IFSC_Code ? form.IFSC_Code : "",
          },
        },
        {
          method: "GET",
          url: "v45.0/sobjects/Account/" + form.Id + "?fields=id",
        },
      ],
    };

    if (!form.Name) {
      HelperService.showToast({
        message: "Retailer Name Field is empty",
      });
    } else if (!form.Workshop_Owner_Name__c) {
      HelperService.showToast({
        message: "Retailer Owner Name Field is empty",
      });
    } else if (!form.Phone) {
      HelperService.showToast({
        message: "Mobile Number Field is empty",
      });
    } else if (!this.validatePhoneNumber(form.Phone)) {
      HelperService.showToast({
        message: "Mobile Number is not Valid",
      });
    } else if (!this.validatePhoneNumber(form.Whatsapp_Number__c)) {
      HelperService.showToast({
        message: "WhtsaApp Number is not Valid",
      });
    }
    // else if (!this.validatePhoneNumber(form.Whatsapp_Number__c)) {
    //   HelperService.showToast({
    //     message: "Whatsapp No. is not Valid",
    //   });
    // }
    else if (!this.validateEmail(form.Email__c)) {
      HelperService.showToast({
        message: "Email-Id is not Valid",
      });
    } else if (!form.Aadhar_No__c) {
      HelperService.showToast({
        message: "Aadhar no. field is empty",
      });
    } else if (!this.validateAadhaar(form.Aadhar_No__c)) {
      HelperService.showToast({
        message: "Aadhar No. is not valid",
      });
    } else if (!this.validateGstNumber(form.GSTIN_No__c)) {
      HelperService.showToast({
        message: "GST no. is not valid",
      });
    } else if (!form.Address__c) {
      HelperService.showToast({
        message: "Address Field is empty",
      });
    } else if (!form.PIN_CODE__c) {
      HelperService.showToast({
        message: "Pincode Field is empty",
      });
    } else if (!form.Area_Master__c) {
      HelperService.showToast({
        message: "Area Field is empty",
      });
    } else if (!form.District__c) {
      HelperService.showToast({
        message: "District Field is empty",
      });
    } else if (!form.City_Master__c) {
      HelperService.showToast({
        message: "City Field is empty",
      });
    } else if (!form.Branch_Code__c) {
      HelperService.showToast({
        message: "Branch Field is empty",
      });
    } else if (!form.States__c) {
      HelperService.showToast({
        message: "State field is empty",
      });
    } else if (!form.Type__c) {
      HelperService.showToast({
        message: "Select Type of Business",
      });
    }
    // else if (!form.Aadhar_No__c) {
    //   HelperService.showToast({
    //     message: "Aadhar no. field is empty",
    //   });
    // }
    // else if (!this.validateAadhaar(form.Aadhar_No__c)) {
    //   HelperService.showToast({
    //     message: "Aadhar No. is not valid",
    //   });
    // }
    else if (!form.Category__c) {
      HelperService.showToast({
        message: "Segment field is empty",
      });
    } else if (!form.Other_category__c) {
      HelperService.showToast({
        message: "Category field is empty",
      });
    } else if (!form.Suggestions_on_New_Product_launch__c) {
      HelperService.showToast({
        message:
          "Which new product he would like to be introduced in LIS field is empty",
      });
    } else if (!form.What_s_your_view_on_LIS_product_Quality__c) {
      HelperService.showToast({
        message:
          "What is your overall opinion about LIS products quality (Rating) field is empty",
      });
    } else if (!form.Other_Feedbacks__c) {
      HelperService.showToast({
        message: "Other Feedbacks field is empty",
      });
    } else {
      this.props.updateKyc({
        form: data,
        token,
      });
    }
  }

  render() {
    let id = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={Styles.head}>
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Text style={Styles.t1}>
              {"KYC "}
              <Text style={Styles.t3}>Form</Text>{" "}
            </Text>
            <WhiteButton
              style={{ height: hp("6%"), width: wp("25%") }}
              title={"SUBMIT"}
              textStyle={{ fontSize: hp("2") }}
              onPress={() => {
                id.show ? this.onCheck() : this.onUpdate();
                // HelperService.showToast({
                //   message: "Geo Location captured Successfully.",
                //   duration: 1000,
                //   buttonText: "",
                // });
              }}
            />
          </View>
        </View>
        <View style={Styles.tabs}>
          {/* <Container   >
        <Content  theme={{backgroundColor:"red"}} > */}
          <Tabs
            tabBarUnderlineStyle={{
              backgroundColor: Colors.white,
              marginBottom: 1,
              borderRadius: 5,
            }}
            style={{ width: wp("95%"), alignSelf: "center" }}
            renderTabBar={() => (<ScrollableTab />)}
          >
            <Tab
              heading="INFO"
              textStyle={{ color: "#fff", fontSize: 15 }}
              tabStyle={{ backgroundColor: Colors.primary, flex: 1 }}
              activeTextStyle={{ color: "#fff", fontSize: 15 }}
              activeTabStyle={{ backgroundColor: Colors.primary }}
            >
              <WHRetailerInfo Id={id.show} />
            </Tab>
            <Tab
              heading="OTHER DETAILS"
              textStyle={{ color: "#fff", fontSize: 15, textAlign: "center" }}
              tabStyle={{ backgroundColor: Colors.primary, flex: 1 }}
              activeTextStyle={{
                color: "#fff",
                fontSize: 15,
                textAlign: "center",
              }}
              activeTabStyle={{ backgroundColor: Colors.primary }}
            >
              <WHRetailerOther Id={id.show} />
            </Tab>
            <Tab
              heading="COMMUNICATION"
              textStyle={{ color: "#fff", fontSize: 15, textAlign: "center" }}
              tabStyle={{ backgroundColor: Colors.primary, flex: 1 }}
              activeTextStyle={{
                color: "#fff",
                fontSize: 15,
                textAlign: "center",
              }}
              activeTabStyle={{ backgroundColor: Colors.primary }}
            >
              <Communication />
            </Tab>
            <Tab
              heading="FINANCIAL"
              textStyle={{ color: "#fff", fontSize: 15, textAlign: "center" }}
              tabStyle={{ backgroundColor: Colors.primary, flex: 1 }}
              activeTextStyle={{
                color: "#fff",
                fontSize: 15,
                textAlign: "center",
              }}
              activeTabStyle={{ backgroundColor: Colors.primary }}
            >
              <Financial />
            </Tab>
            <Tab
              heading="BUSINESS TYPE"
              textStyle={{ color: "#fff", fontSize: 15, textAlign: "center" }}
              tabStyle={{ backgroundColor: Colors.primary, flex: 1 }}
              activeTextStyle={{
                color: "#fff",
                fontSize: 15,
                textAlign: "center",
              }}
              activeTabStyle={{ backgroundColor: Colors.primary }}
            >
              <BusinessType />
            </Tab>
          </Tabs>
          {/* </Content></Container> */}
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
  managerId: state.startday.userDetailList.ManagerId,
  loader: state.menu.submitForApprovalLoader,
  form: state.menu.kycform,
  userdetail: state.startday.userDetailList,
});

const mapDispatchToProps = (dispatch) => ({
  changeType: (params) => dispatch(LocalActions.changeType(params)),
  fetchOnBoarding: (params) => dispatch(userActions.getOnboarding(params)),
  CreateKycForm: (params) => dispatch(menuActions.CreateKycForm(params)),
  submitForApproval: (params) =>
    dispatch(menuActions.submitForApproval(params)),
  updateKyc: (params) => dispatch(menuActions.updateKyc(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WHRetailer);
