export const Config = {
  // API_URL: 'https://paragonsfa-dev.herokuapp.com/',
  API_URL: "https://ppsfa.azurewebsites.net/",

  USER_SERVICE: {
    FETCH_AREAS_URL:
      "https://myklaticrete--uat.my.salesforce.com/services/apexrest/GetAllBeats/",
    START_DAY_URL:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/StartDayAPI/",
    END_DAY_URL:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/EndDayAPI/",
    LOGIN_URL: "https://test.salesforce.com/services/oauth2/token",
    LOG_OUT:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/LoginLogoutAPI/",
    MARK_ABSENT_URL: "agents/markAbsent",
    FETCH_AGENT_DETAILS: "agents/detail",
    CHECK_ATTENDANCE:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,User__r.Name,Name,Attendance_Date__c,CheckIn_Address__c,Checkout_Address__c,Type__c,Present_Type__c,End_Time__c,Start_Time__c,Start_Day__c,End_Day__c,Working_Hour__c+from+Attendance__c+Where+createddate+=+TODAY+AND+User__c+=+",
    FETCH_PJP:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetMonthPJP/?UserId=userId&Month=month",
    FETCH_ALL_PSM:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+id,name,ManagerId+from+user+where+ManagerId+=+",
    GET_APP_VERSION:
      "https://myklaticrete--uat.my.salesforce.com/data/v45.0/query/?q=select+id,Name,	IOS__c+ from+App_version__c",

    CREATE_PJP:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/CreatePjpApi/",
    // GET_ONBOARDING:'https://cs74.salesforce.com/services/data/v45.0/query/?q=Select+id,Aadhar_Number__c,	Account_Group__c,	Address_Proof_Partner_Director__c,	Alternative_Mobile__c,	Bank_Account_No__c,	Banker_Name__c,	Billing_Address__c,	Branch__c,	CAF_Limit__c,	CAF_Period_Days__c,	Category_Type__c,	Cheque_Signed_Interest_Free_Deposit__c,	City__c,	City__r.name,	Company_Code__c,	Country__c,	Credit_Application_Form_duly_filled__c,	Credit_Limit_Requested__c,	Credit_Period_Requested__c,	Dealer_Application_Form_duly_filled__c,	Dealer_Evaluation_report_approved_H_O__c,	Dealer_Photograph_With_Application__c,	Dealing_With_Competitive_Product__c,	Distribution_Channel__c,	Distribution_Channel__r.name,	District__c,	Division__r.name,	Division__c,	Email__c,	Expected_Average__c,	Firm_Name__c,	GST_IN__c,	Have_own_arrangements_for_Transport__c,	Manpower_allocate_for_marketing__c,	Mobile__c,	Nature_Of_Business__c,	Name,	On_Boarding_Request_Raised_By__c,	On_Boarding_Request_Raised_By__r.name,	OwnerId,	PAN_CARD__c,	PAN_Number__c,Partnership_Deed_Association_Memorandum__c,	Pending_On__c,	Pin_Code__c,Proprietor_name__c,Remarks_By_SE__c,	Request_letter_of_the_Dealer_in_the_firm__c,	Sales_of_Adhesives_in_M_T_s__c,	Sales_of_Marble_Granite_in_S_ft__c,	Sales_of_Tiles_in_S_ft__c,	Sales_Office__c,	Sales_Office__r.name,	Sales_Organization__c,	Sales_Tax_Registration_Certificate__c,	Sales_Turnover__c,	SAP_Code__c,	Security_Check_No__c,	Security_Deposit_Amount__c,	Shipping_Address__c,	Shop_Photo_With_Name_And_Entrance__c,	State__c,	State__r.name,	Status__c,	Terms_of_payment__c,	Territory__c,	Territory__r.name,	Transportation_Zone__c,	Transportation_Zone__r.name,	Undated_Blank_Cheque_Intial_Consignment__c,	Undated_Cheque_As_Security_Future_Use__c,	Why_do_you_want_to_take_the_Distributors__c,	Year_of_Establishment__c,	Zone__c,ASM__c,ASM_Approval_Status__c,IFSC_code__c,Zone__r.name+from+on_boarding__c+where+ownerid+=userId +OR+(ASM__c+=asmId +AND+Status__c+!=+draft)',
    GET_ONBOARDING:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Name,Prospect_Type__c,Sub_Category__c,Address__c,Area_Master__c,Address1__c,Address2__c,Phone,Mobile__c,WEB_address__c,States__c,States__r.name,States__r.id,Branch_Code__c,Branch_Code__r.name,Branch_Code__r.id,City_Master__c,City_Master__r.id,City_Master__r.name,District__c,District__r.name,District__r.id,Branch_Manager__c,Branch_Manager__r.Name,Branch_Manager__r.id,Branch_Head__c,Branch_Head__r.name,Branch_Head__r.id,Branch_Accountant__c,Branch_Accountant__r.id,Branch_Accountant__r.name,FSO_Name__c,FSO_Name__r.id,FSO_Name__r.name,Email__c,PERCENTAGE_OF_LUCAS_TVS__c,PERCENTAGE_OF_LISPART__c,PERCENTAGE_OF_FIE_PARTS__c,PAN_No__c,Aadhar_No__c,GST_No__c,Credit_Score__c,Location__c,Years_of_operation_in_current_location__c,Customer_Vertical__c,Bank_Account_Number__c,Bank_Guarantee__c,Bank_Name__c,Amount__c,Trade_license_where_applicable__c,own_primesis__c,Does_he_has_own_vehicle_2WH_4WH__c,Are_you_dealing_with_other_brand__c,Volume_of_business_of_other_brand__c,Three_year_GSTIN_history__c,Disc_applicable_2_WH__c,Disc_applicable_SFL__c,Existing_Code_with_vertical_details__c,Disc_Applicable_Others__c,LTVS_Monthly_volume__c,DTVS_Monthly_volume__c,L_O_Monthly_volume__c,X2WH_Monthly_volume__c,Battery_Monthly_volume__c,Lube_Monthly_volume__c,Service_Monthly_volume__c,Others_Monthly_volume__c,Nationality_Proof_Voter_id_Aadhar__c,Overall_Status__c,Identity_Proof_PAN_Driving_license__c,Address_Proof_GSTIN_EB_Latest_receipt__c,Billing_Details_name_address_details__c,Contact_Details__c,Alternate_Contact_Details__c,GST_certificate_ITR_filing_3yrs_if_not_a__c,Security_cheque__c,dealer_agreement__c,Portal_agreement__c,CreatedById,CreatedDate  from Account where Ownerid=ownerid",
    FETCH_BEAT_PJP:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,Area_Master__c,Area_Master__r.name,Area_Master__r.Area_Name__c,PJP_Line__r.visit_date__c,Total_Party_Under_Beat__c,(Select+id,name,pjp__r.Ownerid,pjp__r.owner.name,Total_Party_Under_Beat__c+from+PJP_Beats__r),CreatedDate+From+PJP_Beats__c+Where+PJP__c+=+beatId",
    FETCH_TOTAL_OUTLET:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+Id,Name+from+account+Where+beat__c+=+beatId",
    MANAGER_LIST:
      "https://myklaticrete--uat.my.salesforce.com/services/apexrest/GetManagerAPI/?UserId=userId",
    SUBMIT_APPROVAL:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/Batch/",
    APPROVE_REJECT_PJP:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/Batch/",
    GET_DIVISION:
      "https://myklaticrete--uat.my.salesforce.com/services/data/v45.0/query/?q=select+Id,Name,Code__c,Parent__c+from+Division__c+where+Level__c+=+",
    GET_BRANCH_MASTER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Name,Branch_Name__c from Branch_Master__c",
    GET_PART_MASTER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetPartMasterApi/?Vertical2=vertical&Branch=branch",
  },

  MENU_SERVICE: {
    CREATE_ONBOARDING:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/tree/Account",
    UPDATE_ONBOARDING:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/batch/",
    GET_IMAGE_ONBOARDING:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetProflePicAPI/?UserId=",
    UPLOAD_IMAGE:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/batch/",
    SUBMIT_APPROVAL:
      "https://cs74.salesforce.com/services/data/v45.0/process/approvals/",
    SEND_APPROV_REJECT:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT Id, ProcessInstance.ProcessDefinitionId, ProcessInstance.TargetObjectId, ProcessInstance.Status FROM  ProcessInstanceWorkItem  WHERE ProcessInstance.Status = status AND ProcessInstance.TargetObjectId=OnboardingId",
    GET_VISIT_ONBOARDING:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+id,Description,Subject,CreatedDate+from+Task+Where+WhatId+=+",
    CREATE_AGAINST_VISIT:
      "https://cs74.salesforce.com/services/data/v45.0/composite/tree/Task",
    GET_LAST_VISIT:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select +Id,Name,Customer_Name__c,Customer_Name__r.Location__c,Customer_Name__r.Name,Customer_Name__r.Category__c,Beat__c,Beat__r.Name,Concerned_Person_Name__c,Concerned_Person_No__c,Objective__c,PJP_Beats__r.Name,Summary__c,Manager_Remarks__c,Type__c,Visit_Type__c,Visit_Date__c,Status__c,Assigned_By__c,Cancelled_Reason__c,Manager__r.Name,Location_Matched__c,Tagged_On_Visit__c,Check_in_Time__c,Check_out_Time__c,Check_in_Address__c,Check_out_Address__c,Activity__c,Ownerid+from+Visits__c+Where+Status__c+=+'Completed'+AND+Customer_Name__c+=+distributorId+ORDER+BY+Visit_Date__c+DESC+LIMIT+3",
    GET_ON_CITY:
      "https://myklaticrete--uat.my.salesforce.com/services/apexrest/GetUserCity/?UserId=",
    GET_CAMPAIGN_ATTENDEES:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Name,Attendee_Name__c,Address__c,Phone__c,Remarks__c ,Campaign_Requisition__c,Campaign_Requisition__r.Name,Campaign_Requisition__r.id from Campaign_Attendees__c where  Campaign_Requisition__c=",
    FETCH_TICKET:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=Select id,Complaint_Open_Date__c,Name,Ticket_Category__c,Ticket_Type__c,Dealer__c,Dealer__r.Name,Field_Team_Remarks__c,Complaint_Status__c,Complaint_Description__c,Solution_Provided__c,Close_Date__c from Ticket__c where ownerID=userId",
    CREATE_TICKET:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/tree/Ticket__c",
    GET_COMPETITOR_SCHEME:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,OwnerId,Competition_Type__c,Brand_name__c, Part_No__c,Segment__c, Application__c, OE_Status__c, MRP__c, Landing_Price__c, GST_Rate__c, Scheme__c, Scheme_MLP__c, Scheme_RLP__c,Remarks__c, Proof_Image__c, Tentative_Quantity__c,Tentative_Value__c,CreatedDate,Comparison_with_LIS_Product__c+from+Competition_Information__c+where+OwnerId+=+",
    CREATE_CAMPAIGN:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/tree/Campaign_Requisition__c",
    GET_CAMPAIGN:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Branch__c,Branch__r.id,Branch__r.name,Outcome_of_the_Campaign__c,BTL_activity_type__c,Other_BTL_activity__c,Number_Planned__c,Budget_Planned__c,Number_Actual__c,Branch_Manager_Approval_status__c,Budget_Actual__c,Campaign_Status__c,Complaint_raised__c,Campaign_created_date__c,Campaign_on__c,Approval_status__c,Budget_allocated__c,Remarks__c,Give_aways_required__c,Finance_Head_Approval_Status__c,Snacks_Planned__c,Overall_Status__c,Marketing_Head_Approval_Status__c,Campaign_Requisition_raised_by__c,Campaign_Requisition_raised_by__r.name+from+Campaign_Requisition__c+where+OwnerId+=+",
    CREATE_COMPETITOR_SCHEME:
      "https://cs74.salesforce.com/services/data/v45.0/composite/tree/Competition_Information__c",
    CREATE_ATTENDEE:
      "https://cs74.salesforce.com/services/data/v45.0/composite/tree/Campaign_Attendees__c",
    UPDATE_CAMPAIGN:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/batch/",
    CREATE_KYC:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/tree/Account",
    COMPETITOR_MASTER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com//services/data/v45.0/query/?q=select+id,name,OwnerId,CreatedById,LastModifiedById  from+Competitor_Master__c",
    UPDATE_KYC:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/batch/",
  },

  RETAILER_SERVICE: {
    CREATE: "party/addRetailer",
    UPDATE: "sellers/update",
    EDIT_RETAILER: "party/editRetailer",

    // FETCH_RETAILERS:'https://cs74.salesforce.com/services/data/v45.0/query/?q=select+id,name,X0_30_Days__c,X30_60_Days__c,X60_90_Days__c,X90_Days__c,Account_Type__c,Parent.name,Description,Phone,E_mail__c,Mobile__c,GST_IN__c,NumberOfEmployees,Potential_Value__c,Beat__c,Beat__r.name,Terms_of_Payment__c,SAP_Code__c,Total_Credit_Limit__c,Pending_Credit_Limit__c,Aadhar_No__c,BillingAddress,Location__c,ShippingAddress,Category__c,(select+id,	Visit_Date__c+from+Visits__r+where+Status__c +=userId+ORDER BY+Visit_Date__c Desc limit 1),(select+id,Order_Date__c+from+Orders__r+ORDER BY+Order_Date__c+DESC+LIMIT 1)+FROM+Account+Where +Active__c+=+TRUE',
    FETCH_RETAILERS:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetPartyApi/?UserId=",
    FETCH_DEALERS: "sellers/getAll",
    SUBMIT_PAYMENT: "payments/makePayment",
    FETCH_ORDERS:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+id,name,From__c,From__r.id,From__r.name,Bill_To_Id__c,Block_Error__c,Credit_Limit_Status__c,Delivery_Plant_Depot__c,Delivery_Plant_Depot__r.id,Delivery_Plant_Depot__r.name,Distribution_Channel__c,Distribution_Channel__r.id,Distribution_Channel__r.name,SFDC_Division__c,SFDC_Division__r.id,SFDC_Division__r.name,	Division__c,Division__r.id,Division__r.name,Gross_Weight__c,Net_Weight__c,Order_Date__c,Order_Reason__c,Order_Type__c,PO_Number__c,Pricing_Date__c,Pricing_Procedure__c,Proposed_Dispatch_Date__c,Reason_of_Rejection__c,Remarks__c,Requested_Delivery_Date__c,Sales_Order_Type__c,Sales_Organization__c,SAP_SO_ID__c,Ship_To_Address__c,Ship_To_City__c,Ship_To_Id__c,Ship_to_Postal_Code__c,Ship_To_Region__c,Ship_to_Street__c,Ship_to_Telephone__c,Source__c,Status__c,Terms_of_payment__c,Terms_of_payment__r.id,Terms_of_payment__r.name,To__c,To__r.id,To__r.name,Total_CGST_Value__c,Total_Ex_Fac_Val__c,Total_IGST_Value__c,Total_Quantity__c,Total_SGST_Value__c,User__c,User__r.id,User__r.name,(select+id,name,Ex_Fac_Val__c,Dealer_Margin__c,Value_Discounts__c,Walputty_Discount__c,Gross_Weight_Discounts__c,Commission__c,Orders__c,Primary_UOM__c,Primary_Weight__c,Quantity__c,Quantity_Discounts__c,Reporting_UOM__c,Reporting_Weight__c,SFDC_Subdivision__c,SPA_Percentage__c,Stock_UOM__c,Stock_Weight__c,State_GST_Value__c,Central_GST_Value__c,Integrated_GST_Value__c,Union_Territory_GST__c,Total_of_Free_Samples_Value__c,Free_Samples__c,Frieght_Value__c,IN_206C_1H_Goods__c,IN_206C_Others__c,Operational_Discount__c,Trade_Discount__c,TCS__c,Tonnage_Discounts__c,Total_Discount__c,Net_Weight__c,Material__c,ITM_Total_Tax__c,ITM_Total_Net_Value__c,Rounding_Off__c,ITM_Amount__c,Item_Quantity__c,Item_Gross_Price__c,Item_Category__c,Gross_Weight__c,MYK_Cash_Discount__c,Special_Cash_Discount__c,Total_Cash_Discount__c, X100_Discount__c+from+Order_lines__r)+from+Order__c+where+From__c=",
    DELETE_ORDER_LINE: "order/deleteOrderLine",
    EDIT_ORDER_LINE: "order/editOrderLine",
    ADD_ORDER_LINE: "order/addOrderLine",
    UPDATE_LOCATION:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/UpdatePartyLocation/",
    FETCH_COMPETITORS:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=Select+Id,Name+FROM+Competitor_Master__c+ORDER+BY+Name",
    FETCH_COMPETITORS_PRODUCTS:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=Select+Id,Name,Competitor__r.Name+FROM+Competitor_Products__c",
    // FETCH_COMPETITORS_ALL_PRODUCTS:'https://cs74.salesforce.com/services/data/v45.0/query/?q=Select+Id,Name,Competitor__r.Name+FROM+Competitor_Products__c',
    SEARCH_BY_LOCATION: "sellers/searchByLocation",
    FETCH_DEALER_ORDERS: "order/partyOrder",
    FETCH_DEALER_INVOICE: "invoices/getAll",
    FETCH_DEALER_OUTSTANDING: "outstandings/getAll",
    FETCH_DEALER_PAYMENTS: "payments/getAll",
    INVOICE_DETAIL: "invoice-line-items/getAll?offset=0&limit=1000",
    DEALER_ORDER_DETAILS: "dealer-order-line-items/getAll",

    GET_COMPLAINT_TYPE: "complaints/getComplaintType",
    GET_COMPLAINTS: "complaints/getComplaint",

    FETCH_CREDIT_LIMIT: "division/getCreditLimit",
    CREATE_COMPETITOR: "competitor/createCompetitor",
    GET_DSR: "dsr/getDSR",
    GET_DSR_AREA_L4: "dsr/getLevel4Area",
    CREATE_DSR: "dsr/createtDSR",
    ADD_DSR_AREA: "dsr/addAreaDSR",
    GET_DSR_AREA: "dsr/getDSRArea",
    RETAILER_TICKET:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com//services/data/v45.0/query/?q=select+id,name,OwnerId,Complaint_Open_Date__c,Ticket_Category__c,Ticket_Type__c,Other_Ticket_Type__c,Dealer__c,Dealer__r.Name,Field_Team_Remarks__c,Complaint_Status__c,Complaint_Description__c,Solution_Provided__c,Close_Date__c+from+Ticket__c+Where+Dealer__c=dealer_id",
    RETAILER_INFO:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=Select+Name,A_c_Holder_Name__c, Aadhar_No__c, AccountNumber, AccountSource, Account_Group_Text__c, Account_Group__c, Account_No__c, Account_Number__c, Account_type__c, Achievement1__c, Achievement_YTD__c, Achievement__c, Action_Item_Status__c, Action_Items__c, Active__c, Actual_Call__c, Actual_Meeting__c, Additional_limit__c, Address1__c, Address2__c, Address_Proof_GSTIN_EB_Latest_receipt__c, Address__c, Alternate_Contact_Details__c, Alternate_WhatsApp_No__c, AnnualRevenue,Any_Quality_issue_with_product_Part_No__c,Whatsapp_Number__c,Apex_Monthly_Business_done_by_retailer__c, Application_Date__c, Approval_Status__c,AE_items1__c,AE_items1__r.name,AE_items2__c,AE_items2__r.name,Approximate_volume_of_business_of_other__c, Are_you_dealing_with_other_brand__c, Area1__c, Area_Address__c, Area_Master__c, Area_Name__c, Area__c, Associated_Date__c, Authorized_LAD_Dealer_Name_Attached_with__c, Available_Credit_Limit__c, Bank_Account_Number__c, Bank_Name__c, Battery_Monthly_volume__c, Battery_Value__c, Beat__c, Best_Selling_Product__c, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, BillingLatitude, BillingLongitude, BillingPostalCode, BillingState, BillingStreet, Billing_Details_name_address_details__c, Branch_Accountant__c, Branch_Code__c, Branch_Head__c, Branch_Manager__c, Branch_Name1__c, Branch_Name__c, Branch_accountant_approval_status__c, Brand_2_3_Wheel_ranges__c, Brand_2_3_Wheel_ranges__r.name,Brand_Battery__c,Brand_Battery__r.name,Brand_Filters__c, Brand_Filters__r.name,Brand_Lube__c,Brand_Lube__r.name, Brand_No_1_Value__c, Brand_No_1__c, Brand_No_2_Value__c, Brand_No_2__c, Brand_No_3_Value__c, Brand_No_3__c, Brand_No_4_Value__c, Brand_No_4__c, Brand_No_5_Value__c, Brand_No_5__c, Brand_No_6__c, Budget__c, Business_Category__c, Call_Performance__c, Call_This_Quarter__c, Category__c, City_Master__c, City_Name__c, City__c, Closure_Date__c, Collection_Due__c, Company_Code__c, Competition__c, Contact_Details__c, Contract_Signed__c, CreatedById, CreatedDate, Credit_Area__c, Credit_Block__c, Credit_Days__c, Credit_Exposure__c, Credit_Left__c, Credit_Limit__c, Credit_Score__c, Credit_Used__c, Currency__c, Current_Month_Achievement__c, Current_Month_Target__c, Current_Weeks_Sale__c, Current_Weeks_Seasonality__c, Current_limit__c, CustomerCode__c, Customer_Care_Officer_Email__c, Customer_Care_Officer_Mobile__c, Customer_Care_Officer_Name__c, Customer_Class__c, Customer_Created__c, Customer_DOB__c, Customer_Group__c, Customer_Status__c, Customer_Type__c, Customer_Vertical__c, DOB__c, DTVS_Monthly_volume__c, DTVS_Value__c, Date_Of_Joining__c, Date_of_Dealer_Agreement_signed_received__c, Days_to_Order__c, Dealer_Loyalty_Points__c, Dealer_No_1_Mobile_No__c, Dealer_No_1_Name__c, Dealer_No_1_SAP_Code__c, Dealer_No_2_Mobile_No__c, Dealer_No_2_Name__c, Dealer_No_2_SAP_Code__c, Dealer_No_3_Mobile_No__c, Dealer_No_3_Name__c, Dealer_No_3_SAP_Code__c, Dealer__c, Demo_Name__c, Demo__c, Description, Disc_Applicable_Others__c, Disc_applicable_2_WH__c, Disc_applicable_SFL__c, Distribution_Channel__c, Distributor_Code__c, District_Name__c, District__c, Division_Products_extended_to_customer__c, Division__c, Does_he_has_own_vehicle_2WH_4WH__c, Due_Amount__c, E_mail__c, Email__c, Engagement_Stage__c, Estimated_Annual_sales_from_the_customer__c, Exclusivity__c, Executed_Influencer_Meets_FY__c, Existing_Code_with_vertical_details__c, Expected_purchase_date__c, FSO_Name__c, F_NF__c, Fax, Filters_LTVS_DTVS__c, Finance_required__c, First_Name__c, Foretasted_Business_for_this_year__c, Fridge_Delivered__c, From_Date__c, GSTIN_No__c, GST_IN__c, GST_No__c, GST_Type__c, GST_certificate_ITR_filing_3yrs_if_not_a__c, Gender__c, Have_you_got_all_you_settlement__c, Health_Status_Full_Family__c, Highlighted_points_to_be_captured__c, IFSC_Code__c, INEL_Value__c, Id, Identity_Proof_PAN_Driving_license__c, Inco_Terms__c, Incoterm2__c, Industry, Industry__c, Influencer_Type__c, Interested_Product__c, Inventory_Turnover__c, IsDeleted, Jigsaw, JigsawCompanyId, Key__c, LISS_No_1_10_digit_code__c, LISS_No_1_Name__c, LISS_No_2_10_digit_code__c, LISS_No_2_Name__c, LISS_No_3_10_digit_code__c, LIS_No_1_Name__c, LIS_Product_range__c, LTVS_Monthly_volume__c, LTVS_Value__c, LUCAS_Batteries_Value__c, L_O_Monthly_volume__c, LastActivityDate, LastModifiedById, LastModifiedDate, LastReferencedDate, LastViewedDate, Last_Meeting_Date__c, Last_Name__c, Last_Order_Date__c, Last_Order_Qty_in_MT__c, Last_Order_Value__c, Last_Order__c, Last_Visit__c, Last_Visitt__c, Last_Year_Current_Month_Sales__c, Leads_Value_Number__c, Leads__c, Least_Selling_Product__c, LiSS_No_3_Name__c, Lispart_Value__c, Location__Latitude__s, Location__Longitude__s, Location__c, Loyalty_Point_Value__c, Loyalty_Points_Redeemed__c, Lube_Monthly_volume__c, Lubes_Value__c, MTD_Qty_in_MT__c, Mail_Id__c, Major_Repair_in_No_s__c, Marriage_Anniversary__c, MasterRecordId, Mechanic_Type__c, Meeting_This_Quarter__c, Minor_Repair_in_No_s__c, Mobile__c, Month__c, Monthly_Material_used_by_workshop_in_Lac__c, Monthly_Offtake_Fitment_Value_in_Lacs__c, Nationality_Proof_Voter_id_Aadhar__c, Next_Action_Date__c, Next_Meeting_Date__c, No_Of_Days__c, NumberOfEmployees, Number_of_Retailers__c, Number_of_Staff__c, On_Boarding_Reference__c, Onboarding_stage__c, Optional_Picklist__c, Order_Frequency_Per_Week__c, Order_Gain_Drop__c, Order_Value1__c, Orders__c, Orders_prior_to_delivery__c, Other_category__c, Other_Feedbacks__c, Others_Monthly_volume__c, Outstanding__c, Overall_Feedback_about_LIS_LAD_concept__c, Overall_Status__c, Overall_opinion_of_LIS_products_quality__c, Overdue_Amount__c, OwnerId, Ownership, PAN_No__c, PAN_Number__c, PERCENTAGE_OF_FIE_PARTS__c, PERCENTAGE_OF_LISPART__c, PERCENTAGE_OF_LUCAS_TVS__c, PIN_CODE__c, PRICOL_Value__c, PhotoUrl, Points_Punch__c, Portal_agreement__c, Product_No_1_Issue_faced_Description__c, Product_No_1_Part_No__c, Product_No_1__c, Product_No_2_Issue_faced_Description__c, Product_No_2_Part_No__c, Product_No_2__c, Product_No_3_Issue_faced_Description__c, Product_No_3_Part_No__c, Product_No_3__c, Product_No_4__c, Product_No_5__c, Prospect_Type__c, RAM__c, RAM_approval_status__c, Reason_for_not_recieving_gifts__c, RecordTypeId, Region_Code__c, Region_Name__c, Registered_under__c, Retailer_No_1_Mobile_No__c, Retailer_No_1_Name__c, Retailer_No_1_Proprietor_Name__c, Retailer_No_2_Mobile_No__c, Retailer_No_2_Name__c, Retailer_No_2_Proprietor_Name__c, Retailer_No_3_Mobile_No__c, Retailer_No_3_Name__c, Retailer_No_3_Proprietor_Name__c, Retailer_Owner_Name__c, SAP_Customer_No__c, SAP_number__c, SFDC_Customer_Code__c, SFL_Value__c, Score3__c, Security_cheque__c, Service_Monthly_volume__c, ShippingAddress, ShippingCity, ShippingCountry, ShippingGeocodeAccuracy, ShippingLatitude, ShippingLongitude, ShippingPostalCode, ShippingState, ShippingStreet, SicDesc, Site, State_Name__c, States__c, Status__c, Sub_Category__c, Suggestions_on_New_Product_launch__c, SystemModstamp, TVS_Automotive_Value__c, Territory_L__c, Three_year_GSTIN_history__c, To_Date__c, Total_Repair_in_No_s__c, Total_Score__c,Trade_license_where_applicable__c,Type__c,Value_2_3_Wheel_ranges__c, Value_AE_items1__c, Value_AE_items2__c, Value_Battery__c, Value_Lube__c, Value_filters__c, Vehicle_Brand_he_is_dealing_with__c, Vehicle_Category_he_is_repairing__c, Vertical_Head_Approval_Status__c, Vertical_Head__c, Volume_of_business_of_other_brand__c, WEB_address__c, Website, Weekly_Holiday__c, What_s_your_view_on_LIS_product_Quality__c, Which_products_you_like_deal_in_Future__c, Workshop_No_1_Mobile_No__c, Workshop_Owner_Name__c, Workshop_name__c, X0_30_Days__c, X2WH_Monthly_volume__c, X30_60_Days__c, X60_90_Days__c, X90_Days__c, Year_of_Establishment__c, Years_of_operation_in_current_location__c, Zonal_Head__c, Zonal_head_status__c, Zone_Name__c, Zone__c, dealer_agreement__c, occupation__c, other_brand_evaluated__c, own_primesis_Y_N__c, own_primesis__c+FROM Account+where Id=dealer_id",
    CUSTOMER_FOCUS:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Name,Achievement__c,Achievement_Quantity__c,CreatedById,Customer__c,Customer__r.id,Customer__r.name,Employee__c,Employee__r.id,Employee__r.name,Focused_part_no_type__c,From_Date__c,Part_No__c,Part_No__r.Id,Part_No__r.Name,Part_No__r.Description__c,Status__c,Ach_Quantity__c,Ach_Value__c,Target__c,Target_Quantity__c,Target_Type__c,To_Date__c from Sales_Target__c where Customer__c=dealer_idand Target_Type__c='Focused'",
    CUSTOMER_GENERAL:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Name,Achievement__c,Achievement_Quantity__c,CreatedById,Customer__c,Customer__r.id,Customer__r.name,Employee__c,Employee__r.id,Employee__r.name,Focused_part_no_type__c,From_Date__c,Part_No__c,Part_No__r.Id, Part_No__r.Description__c,Status__c,Ach_Value__c,Ach_Quantity__c,Target__c,Target_Quantity__c,Target_Type__c,To_Date__c from Sales_Target__c where Customer__c=dealer_idand Target_Type__c='General'",

    DEALER_POINTS:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Branch__c,Branch__r.name,City__c,Description__c,District_Name__c,Division__c,Mechanic__c,Mechanic__r.name,Mechanic_Code__c,Mechanic_Name__c,Mode_of_Valuation__c,OwnerId,Points__c,Product_Heirachy_Desc__c,Product_Heirarchy__c,Validate_Days__c,Validated_On__c+from+Jodidar_Retailer_Points_vaildated__c+where+Mechanic__c+=+",
    DEALER_GIFT:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Sr_No__c,Delivered__c,Delivered_Date__c,Mechanic__c,Mechanic__r.name,Mechanic_Code__c,Mechanic_Name__c,Photo_Uploaded__c,OwnerId,Photo_Uploaded_Date__c,Product_Code__c,Product_Name__c,Redemption_Date__c,Rejected__c+from+Jodidar_Retailer_Gift__c+where+Mechanic__c+=+",
  },

  ORDERS_SERVICE: {
    DETAIL: "order-line/getAll",
    FETCH_ORDERS:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select Id,Name,Order_Type__c,Order_Status__c,Order_Date__c,Total_Order_Value__c,Gross_Amount__c, Quantity__c,Sales_Order_Type__c,Order_From__c,Order_From__r.Name,Order_From__r.id,Order_TO__c,Order_TO__r.Name,Order_TO__r.Id,Total_order_Quantity__c,User__r.id,User__r.name,SAP_Order_ID__c,Remarks__c,Gross_Weight__c,Discount_1__c,Discount_2__c,Total_Tax__c+from+Order__c+where+OwnerId=ownerid+and+Order_Type__c+=+type",
    FETCH_SECONDARY_ORDERS:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Quantity__c,Part_No_Description__c,Unit_Price__c,Part_No__c,Part_No__r.Name,Total_Order_Value__c from Order_Line__c where Orders__c =orderid",
    DEALER_ORDER_DETAIL: "order-line/getAll",
    REPEAT_ORDER: "/orders/repeatOrder",
    ORDER_PRICE: "https://cs74.salesforce.com/services/apexrest/Getprice3/",
    // CREATE_PRIMARY_ORDER: ' https://myklaticrete--myk.my.salesforce.com/services/apexrest/PrimaryOrderAPI/'
    CREATE_PRIMARY_ORDER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/CreateOrderAPI/",
    // CREATE_SECONDARY_ORDER: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/CreateOrderSecondaryAPI/'
    CREATE_SECONDARY_ORDER:
      "https://myklaticrete--uat.my.salesforce.com/services/apexrest/CreateOrderSecondaryAPI/",
    GET_CUSTOMER_PRIMARY_ORDER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com//services/data/v45.0/query/?q=select+id,name,OwnerId,Order_Type__c,Order_Status__c,Sales_Order_Type__c,Order_From__c,Order_TO__c,Total_order_Quantity__c,SAP_Order_ID__c,Remarks__c,Gross_Amount__c,Discount_1__c,Discount_2__c,Total_Tax__c,Total_Order_Value__c   from+Order__c+where+Order_From__c=partyId",
  },

  VISITS_SERVICE: {
    FETCH_VISITS_DISPLAY_LIST:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+Id,Name,Customer_Name__c,Customer_Name__r.Location__c,Customer_Name__r.Name,Customer_Name__r.Category__c,Customer_Name__r.SFDC_Customer_Code__c,Area__c,Area__r.Name,Area__r.Area_Name__c,Customer_Type__c,Concerned_Person_Name__c,Concerned_Person_No__c,Objective__c,PJP_Beats__r.Name,Summary__c,Manager_Remarks__c,Type__c,Visit_Type__c,Visit_Date__c,Status__c,Assigned_By__c,Cancelled_Reason__c,Manager__r.Name,Location_Matched__c,Check_in_Time__c,Check_out_Time__c,Check_in_Address__c,Check_out_Address__c,Activity__c,Ownerid,Tagged_On_Visit__c,Tagged_On_Visit__r.name,(select+owner.name,Ownerid+from+Visits__r+ORDER BY+Visit_Date__c Desc limit 1),Customer_Phone__c,SAP_Customer_Number__c+from+Visits__c+Where+OwnerId+=+userId+AND+Visit_Date__c>=startDate+AND+Visit_Date__c<=endDate+ORDER BY+Visit_Date__c+Desc",
    PLAN_VISIT:
      "https://cs74.salesforce.com/services/data/v45.0/composite/tree/Visits__c",
    CANCEL_VISIT:
      "https://cs74.salesforce.com/services/data/v45.0/composite/Batch/",
    EDIT_VISIT:
      "https://cs74.salesforce.com/services/data/v45.0/composite/Batch/",
    PLACE_ORDER: "order/placeOrder",
    ADD_VISIT_INFO:
      "https://myklaticrete--uat.my.salesforce.com/services/data/v34.0/composite/batch/",
    START_VISIT:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/StartVisit/",
    END_VISIT:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/VisitEnd/",
    FETCH_VISIT_INFO:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Any_issues_with_Jodidars__c,Any_issues_with_retailers__c,Collection_Amt__c,Visit_Summary__c,Retailer_Voice_Warranty_issue_c__c,Collection_Type__c,Feedback__c,Feedback_Type__c,FSO__c,FSO__r.id,FSO__r.name,How_is_the_payment_from_Jodidars__c,How_is_the_payment_from_retailer__c,New_Product_Introduction__c,Number_of_Mechanics_Under_this_DLR__c,Number_of_Retailers_Under_this_DLR__c,Parts_availability_at_LIS__c,Visit_Date__c,Assist_on_Part_no_s__c,Assist_on_point_Validation__c,Assist_on_pricing__c,Assist_on_gift_redemption__c,Marketing_New_Ranges_and_Sharing_Fitment__c,Mapping_Prospect_Mechanics_with_LAD__c,Investigation_on_Duplicate_Validation__c,Update_on_Gift_status__c,Selling_old_stock__c,Sharing_Product_Catalogues__c,Jodidars_Voice_Warranty_issue__c from Visit_Info__c where Visit__c=",
    FETCH_VISIT_IMAGE:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+ ContentDocument.Title,ContentDocument.FileExtension,ContentDocumentId +FROM+ContentDocumentLink +WHERE+ LinkedEntityId = ",
    SUBMIT_COMPETITOR:
      "https://cs74.salesforce.com/services/data/v45.0/composite/tree/Visit_Competitor__c",
    SUBMIT_STOCK: "visitInfo/addStock",
    GET_COMPETITOR:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+Id,Name,Visit__c,	Scheme__c,Price__c ,Competitor_Product__c,Competitor_Product__r.name,Competitor__c,Competitor__r.name+FROM+Visit_Competitor__c+WHERE+ Visit__c= ",
    GET_STOCK: "visitInfo/getStock",
    UPDATE_STOCK: "visitInfo/editStock",
    UPDATE_COMPETITOR: "visitInfo/editCompetitor",
    GET_PARENT_AREAS: "area/getParentAreas",
    UPDATE_VISIT_INFO:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/batch/",
    VISIT_INFO:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/tree/Visit_Info__c",
  },

  PRODUCT_SERVICE: {
    GET_PRODUCTS:
      "https://myklaticrete--uat.my.salesforce.com/services/apexrest/GetAllProducts/?SalesOffice=salesoffice&Plant=plant&Division=division&OrderType=ordertype&Party=distributor",
    GET_SECONDARY_PRODUCTS:
      "https://myklaticrete--uat.my.salesforce.com/services/apexrest/GetAllProducts/?SalesOffice=salesoffice&Division=division&OrderType=ordertype&Party=distributor",
    GET_PRODUCT_BRAND: "product/getBrand",
    GET_CATEGORIES:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetProductType1Api/",
    GET_PRODUCT_GSM: "product/getGSM",
    GET_PRODUCT_ITEM: "product/getItem",
    GET_PRODUCT_ITEM_PRICE: "product/getPrice",
    GET_SUBSUBCATEGORIES: "/productCategories/getAllSubSubCategory",
    GET_SCHEMES: "/scheme/getSchemeMaster",
    GET_COLORMIX:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetVehicleSegmentApi/",
    GET_PRODUCT_SERIES:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetProductType2Api/",
    GET_PACK_SIZE:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/GetApplicationDetailsApi/",
    FETCH_PLANT:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+Default__c,Plant__r.id ,Plant__r.name,Plant__r.Type__c,Plant__r.Code__c,Plant__r.City__c,Plant__r.Address__c+from+Customer_Plant_Mapping__c +where+Account__c+=",
  },

  EVENT_SERVICE: {
    // CREATE: 'event/add',
    // UPDATE: 'event/edit',
    FETCH_EVENTS: "event/getEvents",
    // FETCH_PARTICIPANTS: 'eventParticipant/getAll',
    // ADD_PARTICIPANTS: 'eventParticipant/add'
  },

  DASHBOARD_SERVICE: {
    ORDER_VALUE: "/dashboard/getOrderValue",
    COUNTERS: "/dashboard/getCounters",
    SITE_COUNT: "/dashboard/getSiteCount",
    VISIT_COUNT: "/dashboard/getVisitCount",
    EVENTS_COUNT: "/dashboard/getEventCount",
    DASHBOARD_DETAILS:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,User__r.Name,Name,Attendance_Date__c,CheckIn_Address__c,Checkout_Address__c,Type__c,Present_Type__c,End_Time__c,Start_Time__c,Start_Day__c,End_Day__c,Working_Hour__c+from+Attendance__c+Where+createddate+=+TODAY+AND+User__c+=+",
    DASHBOARD_BANNER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Type__c,URL__c,Body__c,Routing_URL__c+from+Branding__c+where+Type__c+=+'Banners'",
    PRIMARY_ORDER_SUMMARY:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/OrderSummaryApi/?userId=user_id",
    DASHBOARD_CAMPAIGN:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/CampaignAnalysisApi/?userId=user_id",
    DASHBOARD_VISIT:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/apexrest/visitSummaryApi/?userId=user_id",
    FSO_GENERAL:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Name,Achievement__c,Achievement_Quantity__c,CreatedById,Customer__c,Customer__r.id,Customer__r.name,Employee__c,Employee__r.id,Employee__r.name,Ach_Quantity__c,Ach_Value__c,Focused_part_no_type__c,From_Date__c,Part_No__c,Part_No__r.Id,Part_No__r.Description__c,Status__c,Target__c,Target_Quantity__c,Target_Type__c,To_Date__c from Sales_Target__c where Employee__c=user_idand Target_Type__c='General'",
    FSO_FOCUSED:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Name,Achievement__c,Achievement_Quantity__c,CreatedById,Customer__c,Customer__r.id,Customer__r.name,Employee__c,Employee__r.id,Employee__r.name,Ach_Value__c,Ach_Quantity__c,Focused_part_no_type__c,From_Date__c,Part_No__c,Part_No__r.Id,Part_No__r.Name,Part_No__r.Description__c,Status__c,Target__c,Target_Quantity__c,Target_Type__c,To_Date__c from Sales_Target__c where Employee__c=user_idand Target_Type__c='Focused'",
    DASHBOARD_TICKER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Type__c,URL__c,Body__c,Routing_URL__c+from+Branding__c+where+Type__c+=+'Tickers'",
  },

  INFLUENCERS_SERVICE: {
    FETCH_INFLUENCERS: "influencers/getAll",
    CREATE: "influencers/add",
    UPDATE: "influencers/edit",
    FETCH_INFLUENCER_DETAIL: "influencers/detail",
    FETCH_INFLUENCER_SITES: "sites/getAll",
  },

  SITES_SERVICE: {
    CREATE: "sites/add",
    UPDATE: "sites/edit",
    CREATE_SITE_PRODUCT: "siteProducts/add",
    UPDATE_SITE_PRODUCT: "siteProducts/edit",
    FETCH_SITES: "sites/getAll",
    FETCH_SITE_PRODUCTS: "siteProducts/getAll",
  },

  EXPENSE_SERVICE: {
    FETCH_LOCAL_ITEM: "expense-item/getAllLocalExpenseItem",
    FETCH_OUTSTATION_ITEM: "expense-item/getAllOutstationExpenseItem",
    MOVE_LOCAL_TO_OUTSTATION: "expense-item/moveToOutstationExpense",
    MOVE_OUTSTATION_TO_LOCAL: "expense-item/moveToLocalExpense",
  },

  LOCAL_EXPENSE_SERVICE: {
    FETCH_EXPENSES:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+Id,Name,OwnerId,Employee__c,Employee__r.name,Employee__r.Employee_Name__c,Employee_Approver__c,Employee_Approver__r.name,Employee_Approver__r.Employee_Name__c,Expense_Approver__c,Expense_Approver__r.name,Expense_Status__c,Expense_Type__c,Month__c,Overall_Amount__c,Overall_Amount_System__c,Remarks__c,Total_Amount__c,CreatedDate,(select+id,Name,Allowed_Rate_Per_Km__c,Approved_By_Manager__c,Date__c,Expense__c,Expense__r.name,Expense_Item_Approver__c,Expense_Item_Approver__r.name,From__c,From_Location__c,From_Locations__c,From_Text_Location__c,Kilometer_Travelled__c,Month__c,Party_Name__c,Start_Day__c,System_Calculated_Kilometer__c,To__c,To_Location__c,To_Locations__c,To_Text_Location__c,Visit__c,Visit__r.name,Visit_Time__c,Expense_Day__c,Expense_Status__c,Expense_Type__c FROM Expense_Lines__r)+FROM+Expense_Header__c+where+Month__c=month+AND+OwnerId+=+",
    FETCH_TEAM_EXPENSES:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Expense_Approver__c,Expense_Status__c,Expense_Type__c,Month__c,OwnerId,Owner.Name,Overall_Amount__c,Overall_Amount_System__c,Remarks__c,(select+id,Name,Expense_date__c,Expense_Header__c,Food__c,KM_Travelled_Amount__c,Status__c,System_Calculated_KM_Amount__c,Today_System_Total_Amount__c,Today_Total_Amount__c,Toll__c,KM_Travelled_By_User__c,User_KM_Amount__c+from+Expense_Days__r+order by+Expense_date__c+Desc)+from+Expense_Header__c+where+Expense_Status__c+=+pending+AND+Month__c=month+AND+Expense_Approver__c+=+",
    FETCH_EXPENSE_ITEM:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,Expense_date__c,Expense_Header__c,Food__c,Toll__c,System_Calculated_KM_Amount__c,Today_System_Total_Amount__c,Today_Total_Amount__c,Status__c,KM_Travelled_By_User__c,User_KM_Amount__c,(select+id,Name,Approved_By_Manager__c,Expense_Item_Approver__c,Expense_Status__c,Expense_Type__c,From__c,Kilometer_Travelled__c,Kilometer_Travelled_Amount__c,System_Calculated_Kilometer__c,System_Calculated_KM_Amount__c,To__c,Visit__c,Date__c,Month__c,Allowed_Rate_Per_Km__c,Mode_Of_Travel__c+from+Expense_Lines__r)+from+Expense_Days__c+where+Expense_Header__c=expenseId+AND+Expense_date__c+<=+",
    UPDATE_EXPENSES:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/batch/",
    SEND_APPROVAL:
      "https://cs74.salesforce.com/services/data/v45.0/composite/Batch/",
    APPROVE_REJECT_EXPENSE:
      "https://myklaticrete--uat.my.salesforce.com/services/data/v34.0/composite/batch/",
    ADD_REMARK: "expense-item/addRemark",

    FETCH_LOCAL_IMAGE_ID:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+ ContentDocument.Title,ContentDocument.FileExtension,ContentDocumentId +FROM+ContentDocumentLink +WHERE+ LinkedEntityId = ",
    FETCH_LOCAL_IMAGE_ATTACHMENT:
      "https://cs74.salesforce.com/services/data/v45.0/connect/files/Attach/content?versionNumber=1",
    UPLOAD_LOCAL_IMAGE:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/sobjects/ContentVersion",
    FETCH_DOCUMENT_ID:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+ContentDocumentId +FROM+ContentVersion +where+id = ",
    ASSIGN_ATTACTMENT:
      "https://cs74.salesforce.com/services/data/v45.0/sobjects/ContentDocumentLink",
  },

  TOUR_SERVICE: {
    FETCH_CITIES: "cities/getAll",
    CREATE_TOUR: "tours/create",
    UPDATE_TOUR: "tours/updateTour",
    SEND_APPROVAL: "tours/sendingForApproval",
    FETCH_TOUR: "tours/getAll",
    APPROVE_REJECT_TOUR: "tours/approveRejectTour",
  },

  OUTSTATION_EXPENSE_SERVICE: {
    FETCH_EXPENSES: "expenses/getAll",
    FETCH_EXPENSE_ITEM: "expense-item/getAll",
    UPDATE_EXPENSES: "expense-item/addExpenseItem",
    UPDATE_EXPENSE_ITEM: "expense-item/updateExpenseItem",
    UPDATE_LOCAL_EXPENSE: "expense-item/updateExpense",
    SEND_APPROVAL: "expenses/sendingForApproval",
    APPROVE_REJECT_EXPENSE: "expenses/approveRejectExpence",
    ADD_REMARK: "expense-item/addRemark",
    APPROVED_TOUR: "expense-item/expenseItemByTour",
    VISITS_BY_TOUR: "visits/visitbytours",
    ADD_EXPENSES: "expenses/add",
    SUBMIT_EXPENSE_ITEM: "expense-item/addExpenseItemNew",
    UPDATE_EXPENSE_STATUS: "expense-item/moveToLocalExpense",
    UPDATE_EMAIL_STATUS: "expenses/updateEmailStatus",
    ADD_EXPENSE_ITEM: "expense-item/addExpenseItem",
    FETCH_EXPENSE_IMAGE: "files/getExpenseItemFiles",
  },

  COMMON_SERVICE: {
    AREA_PJP: "visitInfo/getPjp",
    GET_OBJECTIVE:
      "https://myklaticrete--uat.my.salesforce.com/services/apexrest/GetObjectiveAPI/",
    GET_STATE: "state/getState",
    GET_CITY: "city/getCity",
    GET_ALL_CITY:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+id,name,City_Code__c,District__c+from+City__c",
    GET_ALL_TERRITORY:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=SELECT id,name,Area__c,Area__r.Name,Area__r.Area_Name__c,Area__r.Branch_Master__c,Area__r.Branch_Master__r.Name,Area__r.Branch_Master__r.Branch_Name__c,Area__r.Parent_District_Code__c,Area__r.Parent_District_Code__r.Name,Area__r.Parent_District_Code__r.District_Name__c,Area__r.Parent_Region_Code__c,Area__r.Parent_Region_Code__r.Name,Area__r.Parent_State_Code__c,Area__r.Parent_State_Code__r.Name,Area__r.Parent_State_Code__r.State_Name__c,Area__r.Parent_Territory_Code__c,Area__r.Parent_Territory_Code__r.Name,Area__r.Parent_Zone_Code__c ,Area__r.Parent_Zone_Code__r.Name , Area__r.Parent_City_Code__c,Area__r.Parent_City_Code__r.Name,Area__r.Parent_City_Code__r.City_Name__c from User_Area_Mapping__c+where+User__c+=+",
    GET_USER_TERRITORY:
      "https://cs74.salesforce.com/services/data/v45.0/query/?q=select+Territory__r.id,Territory__r.name,Territory__r.code__c,Territory__r.Parent_District__c,Territory__r.Parent_State__c,Territory__r.Parent_Zone__c,Territory__r.Level__c+from+Employee_Territory__c+where+Employee__c+=+",
    UPLOAD_IMAGE: "image/upload",
    GET_BEAT: "beat/getBeat",
    GET_RETAILER_AREA: "area/getAreaRetailer",
    GET_DEALER_TYPE: "party/getDealerType",
    DIST_CHANNEL: "distChannel/getAll",
    GET_ALL_PLANT: "plant/getAll",
    GET_ALL_INCOTERM: "incoterm/getAll",
    GET_ALL_ROUTE: "route/getAll",
    GET_ALL_INSURANCE: "insurancetype/getAll",
    GET_BILL_PARTY: "party/billToParty",
    GET_PART_NUMBER:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=SELECT+id,name,Description__c,Division_l__c,MRP_UOS__c,Pack_Size__c,New_Product__c,MRP__c,Focused_Product__c,Vertical_1__c,Vertical_2__c,Product_Image_1__c,Application__c,Product_Type1__c,Product_Type_2__c,Vehicle_Segment__c,Obsolete__c,Supersede__c,(SELECT+id,name,Description__c,FOC_Quantity__c,MOQ__c,Normal_Quantity__c,Part_No__c+from+FOC_Schemes__r),(SELECT+id,name,Branch__c,Branch__r.name,Product_Quantity__c+from+Branch_Inventories__r)+from+Item_Master__c+where+name+like+ 'part_no'+LIMIT+1000",
    GET_INVENTORY:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select id,Battery_Batch_Date__c,Battery_Batch_Number__c,Product_Quantity__c,Price__c,Part_Number__c,Part_Number__r.id,Part_Number__r.Name,Part_Number__r.Application__c,Part_Number__r.Description__c,Part_Number__r.MRP__c from Branch_Inventory__c  where Branch__c =branch_no and Part_Number__c=part_no",
    ACCOUNT_REPORT:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/composite/tree/Account_statement__c",
  },

  START_DAY_SERVICE: {
    // FETCH_GLOBLE_TOKEN_SERVICE: "https://test.salesforce.com/services/oauth2/token?password=passwordId&client_secret=D2E97D55E08A8AC4F6CB012F6D8FAAE30F61F5E9D43313DEE88F93A4154B2F84&client_id=3MVG9Nvmjd9lcjRnH.f49S5798ZVWCzyqi8UiNjchgMqXTBu574OxAcOzs8252H6eUN7uZmK5a1N9bp1K6dMG&username=userId&grant_type=password",

    ///uat url
    //  FETCH_GLOBLE_TOKEN_SERVICE: "https://test.salesforce.com/services/oauth2/token?password=passwordId&client_secret=7E3F93151130C3BB34C8B0791B58152EDD335616EAB8DAD0E21EDE8BA0F92B99&client_id=3MVG9N6eDmZRVJOmzqfzoeMy2wOD.d4jwJQeTqye_o5mCBk4uFvSzCYBxqOL8uuEyFHPFzp8CMfZMOsJbumF9&username=userId&grant_type=password",
    FETCH_GLOBLE_TOKEN_SERVICE:
      "https://test.salesforce.com/services/oauth2/token?password=passwordId&client_secret=90F566A69295C68CB2F3A3AEE7410C6571B01411C8CC550DFCBC3AF5DD1AE27F&client_id=3MVG9aWdXtdHRrI2DEKLnydcde0es8GafoVPW1wdKwEpqR5EpitkZVSvR8ltpbRtiIigZOqBbddLsgBcfqISJ&username=userId&grant_type=password",

    //poduction url
    //FETCH_GLOBLE_TOKEN_SERVICE: "https://login.salesforce.com/services/oauth2/token?password=passwordId&client_secret=D5007C7B068907BC22B631A0D4D4394AE6B6C3ABA5EDC00B275B23D8938531E6&client_id=3MVG9fe4g9fhX0E5NSp4D2n_mh8q7h69n4N8ejAyPdzQX7gl4AEyAYxxp04bn_OwUMMFR7svvh32bGPDhbar.&username=userId&grant_type=password",

    GLOBLE_USER_DETAIL_SERVICE:
      "https://lucasindianservice2--sfauat2022.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Username,Email,MobilePhone,CompanyName,ManagerId,Manager.Name,Designation__c,Aadhar_Number__c,IsActive,Address,Date_of_Birth__c,Date_Of_Joining__c,Date_of_Leaving__c,Department__c,Employee_Category__c,Employee_Code__c,Father_s_Name__c,Grade__c,Married_Date__c,Martial_Status__c,Phone,Spouse_Name__c,User_Category__c,(select+id,name,Phone__c,Branch_Head__c,Branch_Head__r.id,Branch_Head__r.Name,Vertical_Head__c,Vertical_Head__r.id,Vertical_Head__r.Name,President__c,President__r.id,President__r.Name,Employee_Name__c,Designation__c,Email_ID__c,Date_of_Birth__c,Date_Of_Joining__c,Division__c,Sales_Office__c,Region_Master__c,Region_Master__r.name,Vertical__c,Grade__c,Vendor_Code__c,City__c,City__r.name,City__r.City_Code__c,Sales_Channel__c,Sales_Channel__r.name,Manager__c,Manager__r.name,Reporting_Manager__c,Base_Location_employee__c,Branch_Master__c,Branch_Master__r.name,Branch_Master__r.Branch_Name__c,Branch_Accountant__c,Branch_Accountant__r.name+from+Employees__r+LIMIT+1)+from+User+Where+id+=+",
    // GET_APP_VERSION: 'https://sanghi.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name,IOS_Version__c+ from+App_version__c',

    // GET_BRAND_LIST: 'https://sanghi.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name  from Brand__c+Order By+Name+ASC',

    // GET_OTP: 'https://sanghi.my.salesforce.com/services/apexrest/CreateOTPAPI/',

    // MATCH_OTP: 'https://sanghi.my.salesforce.com/services/apexrest/GetCurrentUserOTP/?UserId='
  },
};
