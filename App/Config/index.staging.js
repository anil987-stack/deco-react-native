export const Config = {

	// API_URL: 'https://paragonsfa-dev.herokuapp.com/',
	API_URL: 'https://ppsfa.azurewebsites.net/',

	USER_SERVICE: {
		FETCH_AREAS_URL: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetAllBeats/',
		START_DAY_URL: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/StartDayAPI/',
		END_DAY_URL:  'https://myklaticrete--myk.my.salesforce.com/services/apexrest/EndDayAPI/',
		LOGIN_URL: 'https://test.salesforce.com/services/oauth2/token',
		LOG_OUT :'https://cs76.salesforce.com/services/apexrest/LoginLogoutAPI/',
		MARK_ABSENT_URL: 'agents/markAbsent',
		FETCH_AGENT_DETAILS: 'agents/detail',
		CHECK_ATTENDANCE:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,User__r.Name,Name,Attendance_Date__c,CheckIn_Address__c,Checkout_Address__c,Type__c,Present_Type__c,End_Time__c,Start_Time__c,Start_Day__c,End_Day__c,Working_Hour__c+from+Attendance__c+Where+createddate+=+TODAY+AND+User__c+=+',
		FETCH_PJP: "https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetMonthPJP/?UserId=userId",
		FETCH_ALL_PSM: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,ManagerId+from+user+where+ManagerId+=+',
		GET_APP_VERSION: 'https://cs74.salesforce.com/services/data/v45.0/query/?q=select+id,Name,	IOS__c+ from+App_version__c',

		CREATE_PJP:'https://myklaticrete--myk.my.salesforce.com/services/apexrest/CreatePjpApi/',
		GET_ONBOARDING:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=Select+id,Aadhar_Number__c,	Account_Group__c,	Address_Proof_Partner_Director__c,	Alternative_Mobile__c,	Bank_Account_No__c,	Banker_Name__c,	Billing_Address__c,	Branch__c,	CAF_Limit__c,	CAF_Period_Days__c,	Category_Type__c,	Cheque_Signed_Interest_Free_Deposit__c,	City__c,	City__r.name,	Company_Code__c,	Country__c,	Credit_Application_Form_duly_filled__c,	Credit_Limit_Requested__c,	Credit_Period_Requested__c,	Dealer_Application_Form_duly_filled__c,	Dealer_Evaluation_report_approved_H_O__c,	Dealer_Photograph_With_Application__c,	Dealing_With_Competitive_Product__c,	Distribution_Channel__c,	Distribution_Channel__r.name,	District__c,	Division__r.name,	Division__c,	Email__c,	Expected_Average__c,	Firm_Name__c,	GST_IN__c,	Have_own_arrangements_for_Transport__c,	Manpower_allocate_for_marketing__c,	Mobile__c,	Nature_Of_Business__c,	Name,	On_Boarding_Request_Raised_By__c,	On_Boarding_Request_Raised_By__r.name,	OwnerId,	PAN_CARD__c,	PAN_Number__c,Partnership_Deed_Association_Memorandum__c,	Pending_On__c,	Pin_Code__c,Proprietor_name__c,Remarks_By_SE__c,	Request_letter_of_the_Dealer_in_the_firm__c,	Sales_of_Adhesives_in_M_T_s__c,	Sales_of_Marble_Granite_in_S_ft__c,	Sales_of_Tiles_in_S_ft__c,	Sales_Office__c,	Sales_Office__r.name,	Sales_Organization__c,	Sales_Tax_Registration_Certificate__c,	Sales_Turnover__c,	SAP_Code__c,	Security_Check_No__c,	Security_Deposit_Amount__c,	Shipping_Address__c,	Shop_Photo_With_Name_And_Entrance__c,	State__c,	State__r.name,	Status__c,	Terms_of_payment__c,	Territory__c,	Territory__r.name,	Transportation_Zone__c,	Transportation_Zone__r.name,	Undated_Blank_Cheque_Intial_Consignment__c,	Undated_Cheque_As_Security_Future_Use__c,	Why_do_you_want_to_take_the_Distributors__c,	Year_of_Establishment__c,	Zone__c,ASM__c,	Zone__r.name+from+on_boarding__c+where+ownerid+=userId +OR+(ASM__c+=asmId +AND+Status__c+!=+draft)',
		FETCH_BEAT_PJP:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,Beat__c,beat__r.name,beat__r.Beat_Code__c,PJP_Line__r.visit_date__c,Total_Party_Under_Beat__c,(Select+id,pjp__r.Ownerid,pjp__r.owner.name+from+PJP_Beats__r)+From+PJP_Beats__c+Where+PJP__c+=+beatId',
		FETCH_TOTAL_OUTLET:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+Id,Name+from+account+Where+beat__c+=+beatId',
		MANAGER_LIST:"https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetManagerAPI/?UserId=userId",
		SUBMIT_APPROVAL:'https://cs74.salesforce.com/services/data/v34.0/composite/batch/',
		APPROVE_REJECT_PJP:'https://cs74.salesforce.com/services/data/v34.0/composite/batch/'
	

	},


	MENU_SERVICE:{
		CREATE_ONBOARDING:'https://myklaticrete--myk.my.salesforce.com/services/apexrest/CreateOnBoarding/',
		UPDATE_ONBOARDING:'https://myklaticrete--myk.my.salesforce.com/services/apexrest/UpdateOnboarding/',
		GET_IMAGE_ONBOARDING:'https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetOnBoardingAPI/',
		UPLOAD_IMAGE:'https://cs74.salesforce.com/services/data/v34.0/composite/batch/',
		SUBMIT_APPROVAL:'https://cs74.salesforce.com/services/data/v30.0/process/approvals/',
		GET_VISIT_ONBOARDING:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,Description,Subject,CreatedDate+from+Task+Where+WhatId+=+',
		CREATE_AGAINST_VISIT:'https://cs74.salesforce.com/services/data/v45.0/composite/tree/Task',
		GET_LAST_VISIT:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+Id,Name,Customer_Name__c,Customer_Name__r.Location__c,Customer_Name__r.Name,Customer_Name__r.Category__c,Beat__c,Beat__r.Name,Concerned_Person_Name__c,Concerned_Person_No__c,Objective__c,PJP_Beats__r.Name,Summary__c,Manager_Remarks__c,Type__c,Visit_Type__c,Visit_Date__c,Status__c,Assigned_By__c,Cancelled_Reason__c,Manager__r.Name,Location_Matched__c,Tagged_On_Visit__c,Check_in_Time__c,Check_out_Time__c,Check_in_Address__c,Check_out_Address__c,Activity__c,Ownerid,(select+owner.name,Ownerid+from+Visits__r),(Select id,name,Competitor__c,Competitor__r.name,Competitor_Product__c,Competitor_Product__r.name from Visit_Competitors__r)+from+Visits__c+Where+Status__c+=+status+AND+Customer_Name__c+=+distributorId+ORDER+BY+Visit_Date__c+DESC+LIMIT+3',
	},




	RETAILER_SERVICE:{
		CREATE: 'party/addRetailer',
		UPDATE: 'sellers/update',
		EDIT_RETAILER:'party/editRetailer',

		FETCH_RETAILERS:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,X0_30_Days__c,X30_60_Days__c,X60_90_Days__c,X90_Days__c,Account_Type__c,Parent.name,Description,Phone,E_mail__c,Mobile__c,GST_IN__c,NumberOfEmployees,Potential_Value__c,Beat__c,Beat__r.name,Terms_of_Payment__c,SAP_Code__c,Total_Credit_Limit__c,Pending_Credit_Limit__c,Aadhar_No__c,BillingAddress,Location__c,ShippingAddress,Category__c,(select+id,	Visit_Date__c+from+Visits__r+where+Status__c +=userId+ORDER BY+Visit_Date__c Desc limit 1),(select+id,Order_Date__c+from+Orders__r+ORDER BY+Order_Date__c+DESC+LIMIT 1)+FROM+Account+Where +Active__c+=+TRUE',
		FETCH_DEALERS: 'sellers/getAll',
		SUBMIT_PAYMENT: 'payments/makePayment',
		FETCH_ORDERS: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,From__c,From__r.id,From__r.name,Bill_To_Id__c,Block_Error__c,Credit_Limit_Status__c,Delivery_Plant_Depot__c,Delivery_Plant_Depot__r.id,Delivery_Plant_Depot__r.name,Distribution_Channel__c,Distribution_Channel__r.id,Distribution_Channel__r.name,SFDC_Division__c,SFDC_Division__r.id,SFDC_Division__r.name,	Division__c,Division__r.id,Division__r.name,Gross_Weight__c,Net_Weight__c,Order_Date__c,Order_Reason__c,Order_Type__c,PO_Number__c,Pricing_Date__c,Pricing_Procedure__c,Proposed_Dispatch_Date__c,Reason_of_Rejection__c,Remarks__c,Requested_Delivery_Date__c,Sales_Order_Type__c,Sales_Organization__c,SAP_SO_ID__c,Ship_To_Address__c,Ship_To_City__c,Ship_To_Id__c,Ship_to_Postal_Code__c,Ship_To_Region__c,Ship_to_Street__c,Ship_to_Telephone__c,Source__c,Status__c,Terms_of_payment__c,Terms_of_payment__r.id,Terms_of_payment__r.name,To__c,To__r.id,To__r.name,Total_CGST_Value__c,Total_Ex_Fac_Val__c,Total_IGST_Value__c,Total_Quantity__c,Total_SGST_Value__c,User__c,User__r.id,User__r.name,(select+id,name,Ex_Fac_Val__c,Dealer_Margin__c,Value_Discounts__c,Walputty_Discount__c,Gross_Weight_Discounts__c,Commission__c,Orders__c,Primary_UOM__c,Primary_Weight__c,Quantity__c,Quantity_Discounts__c,Reporting_UOM__c,Reporting_Weight__c,SFDC_Subdivision__c,SPA_Percentage__c,Stock_UOM__c,Stock_Weight__c,State_GST_Value__c,Central_GST_Value__c,Integrated_GST_Value__c,Union_Territory_GST__c,Total_of_Free_Samples_Value__c,Free_Samples__c,Frieght_Value__c,IN_206C_1H_Goods__c,IN_206C_Others__c,Operational_Discount__c,Trade_Discount__c,TCS__c,Tonnage_Discounts__c,Total_Discount__c,Net_Weight__c,Material__c,ITM_Total_Tax__c,ITM_Total_Net_Value__c,Rounding_Off__c,ITM_Amount__c,Item_Quantity__c,Item_Gross_Price__c,Item_Category__c,Gross_Weight__c,MYK_Cash_Discount__c,Special_Cash_Discount__c,Total_Cash_Discount__c, X100_Discount__c+from+Order_lines__r)+from+Order__c+where+From__c=',
		DELETE_ORDER_LINE:'order/deleteOrderLine',
		EDIT_ORDER_LINE:'order/editOrderLine',
		ADD_ORDER_LINE:'order/addOrderLine',
		UPDATE_LOCATION: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/UpdatePartyLocation/',
		FETCH_COMPETITORS: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=Select+Id,Name+FROM+Competitor_Master__c+ORDER+BY+Name',
		FETCH_COMPETITORS_PRODUCTS:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=Select+Id,Name,Competitor__r.Name+FROM+Competitor_Products__c',
		// FETCH_COMPETITORS_ALL_PRODUCTS:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=Select+Id,Name,Competitor__r.Name+FROM+Competitor_Products__c',
		SEARCH_BY_LOCATION: 'sellers/searchByLocation',
		FETCH_DEALER_ORDERS: 'order/partyOrder',
		FETCH_DEALER_INVOICE: 'invoices/getAll',
		FETCH_DEALER_OUTSTANDING: 'outstandings/getAll',
		FETCH_DEALER_PAYMENTS: 'payments/getAll',
		INVOICE_DETAIL: 'invoice-line-items/getAll?offset=0&limit=1000',
		DEALER_ORDER_DETAILS: 'dealer-order-line-items/getAll',

		GET_COMPLAINT_TYPE:'complaints/getComplaintType',
		GET_COMPLAINTS:'complaints/getComplaint',

		FETCH_CREDIT_LIMIT:'division/getCreditLimit',
		CREATE_COMPETITOR: 'competitor/createCompetitor',
		GET_DSR:'dsr/getDSR',
		GET_DSR_AREA_L4:'dsr/getLevel4Area',
		CREATE_DSR:'dsr/createtDSR',
		ADD_DSR_AREA:'dsr/addAreaDSR',
		GET_DSR_AREA: 'dsr/getDSRArea',

	},

	ORDERS_SERVICE: {
		DETAIL: 'order-line/getAll',
		FETCH_ORDERS: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetUserOrderAPIPrimary/',
		FETCH_SECONDARY_ORDERS: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetUserOrderAPISecondary/',
		DEALER_ORDER_DETAIL: 'order-line/getAll',
		REPEAT_ORDER: '/orders/repeatOrder'
	},


	VISITS_SERVICE: {
		FETCH_VISITS_DISPLAY_LIST: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+Id,Name,Customer_Name__c,Customer_Name__r.Location__c,Customer_Name__r.Category__c,Customer_Name__r.Name,Beat__c,Beat__r.Name,Concerned_Person_Name__c,Concerned_Person_No__c,Objective__c,PJP_Beats__r.Name,Summary__c,Manager_Remarks__c,Type__c,Visit_Type__c,Visit_Date__c,Status__c,Assigned_By__c,Cancelled_Reason__c,Manager__r.Name,Location_Matched__c,Check_in_Time__c,Check_out_Time__c,Check_in_Address__c,Check_out_Address__c,Activity__c,Ownerid,(select+owner.name,Ownerid+from+Visits__r)+from+Visits__c+Where+OwnerId+=+userId +AND+Visit_Date__c>=startDate+AND+Visit_Date__c<=endDate',
		PLAN_VISIT: 'https://cs74.salesforce.com/services/data/v45.0/composite/tree/Visits__c',
		CANCEL_VISIT: 'https://cs74.salesforce.com/services/data/v34.0/composite/batch/',
		EDIT_VISIT: 'https://cs74.salesforce.com/services/data/v34.0/composite/batch',
		PLACE_ORDER: 'order/placeOrder',
		ADD_VISIT_INFO: 'https://cs74.salesforce.com/services/data/v34.0/composite/batch/',
		START_VISIT: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/StartVisit/',
		END_VISIT: 'https://myklaticrete--myk.my.salesforce.com/services/apexrest/VisitEnd/',
		FETCH_VISIT_INFO: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+Id,Name,Customer_Name__c,Customer_Name__r.Location__c,Customer_Name__r.Name,Beat__c,Beat__r.Name,Concerned_Person_Name__c,Concerned_Person_No__c,Objective__c,PJP_Beats__r.Name,Summary__c,Manager_Remarks__c,Type__c,Visit_Type__c,Visit_Date__c,Status__c,Assigned_By__c,Cancelled_Reason__c,Manager__r.Name,Location_Matched__c,Check_in_Time__c,Check_out_Time__c,Check_in_Address__c,Check_out_Address__c,Activity__c,Ownerid+from+Visits__c+Where+Id+=',
		FETCH_VISIT_IMAGE: 'https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+ ContentDocument.Title,ContentDocument.FileExtension,ContentDocumentId +FROM+ContentDocumentLink +WHERE+ LinkedEntityId = ',
		SUBMIT_COMPETITOR:'https://cs74.salesforce.com/services/data/v45.0/composite/tree/Visit_Competitor__c',
		SUBMIT_STOCK: 'visitInfo/addStock',
		GET_COMPETITOR:'https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+Id,Name,Visit__c,	Scheme__c,Price__c ,Competitor_Product__c,Competitor_Product__r.name,Competitor__c,Competitor__r.name+FROM+Visit_Competitor__c+WHERE+ Visit__c= ',
		GET_STOCK:'visitInfo/getStock',
		UPDATE_STOCK: 'visitInfo/editStock',
		UPDATE_COMPETITOR:'visitInfo/editCompetitor',
		GET_PARENT_AREAS:'area/getParentAreas',

	},


	PRODUCT_SERVICE: {
		GET_PRODUCTS:'https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetAllProducts/?SalesOffice=salesoffice&Plant=plant&Division=division&OrderType=ordertype&Party=distributor',
		GET_SECONDARY_PRODUCTS:'https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetAllProducts/?SalesOffice=salesoffice&Division=division&OrderType=ordertype&Party=distributor',
		GET_PRODUCT_BRAND: 'product/getBrand',
		GET_CATEGORIES: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Code__c from Product_Category_Master__c',
		GET_PRODUCT_GSM: 'product/getGSM',
		GET_PRODUCT_ITEM: 'product/getItem',
		GET_PRODUCT_ITEM_PRICE: 'product/getPrice',
		GET_SUBSUBCATEGORIES: '/productCategories/getAllSubSubCategory',
		GET_SCHEMES: '/scheme/getSchemeMaster',
		GET_COLORMIX:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+Colormix__r.id id,Colormix__r.name name,Colormix__r.Code__c Code__c+from+ Item_Master__c+where+Product_Category__c+=+ProductCategory+and+ +Product_Series__c+=+ProductSeries+and+Packsize__c+=+packSize+group+by+Colormix__r.id,Colormix__r.name,Colormix__r.Code__c',
		GET_PRODUCT_SERIES:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Code__c,Product_Category__c,Product_Category__r.name,Product_Category__r.Code__c from Product_Series__c+WHERE+Product_Category__c=',
		GET_PACK_SIZE:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+Packsize__r.id id,Packsize__r.name name from Item_Master__c where Product_Category__c+=+ProductCategory+and +Product_Series__c+=+ProductSeries+group+by+Packsize__r.id,Packsize__r.name',
		FETCH_PLANT:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+Default__c,Plant__r.id ,Plant__r.name,Plant__r.Type__c,Plant__r.Code__c,Plant__r.City__c,Plant__r.Address__c+from+Customer_Plant_Mapping__c +where+Account__c+='
	},


	EVENT_SERVICE: {
		// CREATE: 'event/add',
		// UPDATE: 'event/edit',
		FETCH_EVENTS: 'event/getEvents',
		// FETCH_PARTICIPANTS: 'eventParticipant/getAll',
		// ADD_PARTICIPANTS: 'eventParticipant/add'
	},

	DASHBOARD_SERVICE: {
		ORDER_VALUE: '/dashboard/getOrderValue',
		COUNTERS: '/dashboard/getCounters',
		SITE_COUNT: '/dashboard/getSiteCount',
		VISIT_COUNT: '/dashboard/getVisitCount',
		EVENTS_COUNT: '/dashboard/getEventCount',
		DASHBOARD_DETAILS:'dashboard/getDashboardDetails'
	},


	INFLUENCERS_SERVICE: {
		FETCH_INFLUENCERS: 'influencers/getAll',
		CREATE: 'influencers/add',
		UPDATE: 'influencers/edit',
		FETCH_INFLUENCER_DETAIL: 'influencers/detail',
		FETCH_INFLUENCER_SITES: 'sites/getAll'
	},


	SITES_SERVICE: {
		CREATE: 'sites/add',
		UPDATE: 'sites/edit',
		CREATE_SITE_PRODUCT: 'siteProducts/add',
		UPDATE_SITE_PRODUCT: 'siteProducts/edit',
		FETCH_SITES: 'sites/getAll',
		FETCH_SITE_PRODUCTS: 'siteProducts/getAll'
	},

	EXPENSE_SERVICE: {
		FETCH_LOCAL_ITEM: 'expense-item/getAllLocalExpenseItem',
		FETCH_OUTSTATION_ITEM: 'expense-item/getAllOutstationExpenseItem',
		MOVE_LOCAL_TO_OUTSTATION: 'expense-item/moveToOutstationExpense',
		MOVE_OUTSTATION_TO_LOCAL: 'expense-item/moveToLocalExpense'
	},

	LOCAL_EXPENSE_SERVICE: {
		FETCH_EXPENSES: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name,OwnerId,Employee_Approver__c,Employee__c,Overall_Amount__c,Month__c, Expense_Type__c,Expense_Status__c,Total_Amount__c,Remarks__c,Expense_Approver__c,(select id,Name, Allowed_Rate_Per_Km__c,Approved_By_Manager__c,Date__c,Expense__c,Expense_Item_Approver__c,From__c,From_Location__c,From_Locations__c,From_Text_Location__c,Kilometer_Travelled__c, Month__c,Party_Name__c,Start_Day__c,System_Calculated_Kilometer__c,To__c,To_Location__c,To_Locations__c,To_Text_Location__c,Visit__c,Expense_Day__c,Expense_Status__c,Expense_Type__c FROM Expense_Lines__r)+FROM+Expense_Header__c+where+Month__c=month+AND+OwnerId+=+',
		FETCH_TEAM_EXPENSES: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Expense_Approver__c,Expense_Status__c,Expense_Type__c,Month__c,OwnerId,Owner.Name,Overall_Amount__c,Overall_Amount_System__c,Remarks__c,(select+id,Name,Expense_date__c,Expense_Header__c,Food__c,KM_Travelled_Amount__c,Status__c,System_Calculated_KM_Amount__c,Today_System_Total_Amount__c,Today_Total_Amount__c,Toll__c,KM_Travelled_By_User__c,User_KM_Amount__c+from+Expense_Days__r+order by+Expense_date__c+Desc)+from+Expense_Header__c+where+Expense_Status__c+=+pending+AND+Month__c=month+AND+Expense_Approver__c+=+',
		FETCH_EXPENSE_ITEM: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,Expense_date__c,Expense_Header__c,Food__c,Toll__c,KM_Travelled_Amount__c,System_Calculated_KM_Amount__c,Today_System_Total_Amount__c,Today_Total_Amount__c,Status__c,KM_Travelled_By_User__c,User_KM_Amount__c,(select+id,Name,Approved_By_Manager__c,Expense_Item_Approver__c,Expense_Status__c,Expense_Type__c,From__c,Kilometer_Travelled__c,Kilometer_Travelled_Amount__c,System_Calculated_Kilometer__c,System_Calculated_KM_Amount__c,To__c,Visit__c,Date__c,Month__c,Allowed_Rate_Per_Km__c,Mode_Of_Travel__c+from+Expense_Lines__r)+from+Expense_Days__c+where+Expense_Header__c=expenseId+AND+Expense_date__c+<=+',
		UPDATE_EXPENSES: 'https://myklaticrete--myk.my.salesforce.com/services/data/v34.0/composite/batch/',
		SEND_APPROVAL: 'https://cs74.salesforce.com/services/data/v34.0/composite/batch/',
		APPROVE_REJECT_EXPENSE: 'https://cs74.salesforce.com/services/data/v34.0/composite/batch/',
		ADD_REMARK: 'expense-item/addRemark',

		FETCH_LOCAL_IMAGE_ID: 'https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+ ContentDocument.Title,ContentDocument.FileExtension,ContentDocumentId +FROM+ContentDocumentLink +WHERE+ LinkedEntityId = ',
		FETCH_LOCAL_IMAGE_ATTACHMENT: 'https://cs76.salesforce.com/services/data/v45.0/connect/files/Attach/content?versionNumber=1',
		UPLOAD_LOCAL_IMAGE: 'https://cs76.salesforce.com/services/data/v44.0/sobjects/ContentVersion',
		FETCH_DOCUMENT_ID:  'https://cs74.salesforce.com/services/data/v45.0/query/?q=SELECT+ContentDocumentId +FROM+ContentVersion +where+id = ',
		ASSIGN_ATTACTMENT: 'https://cs76.salesforce.com/services/data/v44.0/sobjects/ContentDocumentLink',
	},

	TOUR_SERVICE: {
		FETCH_CITIES: 'cities/getAll',
		CREATE_TOUR: 'tours/create',
		UPDATE_TOUR: 'tours/updateTour',
		SEND_APPROVAL: 'tours/sendingForApproval',
		FETCH_TOUR: 'tours/getAll',
		APPROVE_REJECT_TOUR: 'tours/approveRejectTour'
	},

	OUTSTATION_EXPENSE_SERVICE: {
		FETCH_EXPENSES: 'expenses/getAll',
		FETCH_EXPENSE_ITEM: 'expense-item/getAll',
		UPDATE_EXPENSES: 'expense-item/addExpenseItem',
		UPDATE_EXPENSE_ITEM: 'expense-item/updateExpenseItem',
		UPDATE_LOCAL_EXPENSE: 'expense-item/updateExpense',
		SEND_APPROVAL: 'expenses/sendingForApproval',
		APPROVE_REJECT_EXPENSE: 'expenses/approveRejectExpence',
		ADD_REMARK: 'expense-item/addRemark',
		APPROVED_TOUR: 'expense-item/expenseItemByTour',
		VISITS_BY_TOUR: 'visits/visitbytours',
		ADD_EXPENSES: 'expenses/add',
		SUBMIT_EXPENSE_ITEM: 'expense-item/addExpenseItemNew',
		UPDATE_EXPENSE_STATUS: 'expense-item/moveToLocalExpense',
		UPDATE_EMAIL_STATUS: 'expenses/updateEmailStatus',
		ADD_EXPENSE_ITEM: 'expense-item/addExpenseItem',
		FETCH_EXPENSE_IMAGE: 'files/getExpenseItemFiles'
	},

	COMMON_SERVICE: {
		AREA_PJP:'visitInfo/getPjp',
		GET_OBJECTIVE:'https://myklaticrete--myk.my.salesforce.com/services/apexrest/GetObjectiveAPI/',
		GET_STATE: 'state/getState',
		GET_CITY: 'city/getCity',
		GET_ALL_CITY: 'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,City_Code__c,District__c+from+City__c',
		GET_ALL_TERRITORY:'https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Code__c,Parent_District__c,Parent_State__c,Parent_Zone__c+from+Geography_Master__c+where+level__c+=+4',
		UPLOAD_IMAGE: 'image/upload',
		GET_BEAT:'beat/getBeat',
		GET_RETAILER_AREA:'area/getAreaRetailer',
		GET_DEALER_TYPE:'party/getDealerType',
		DIST_CHANNEL:'distChannel/getAll',
		GET_ALL_PLANT:'plant/getAll',
		GET_ALL_INCOTERM:'incoterm/getAll',
		GET_ALL_ROUTE:'route/getAll',
		GET_ALL_INSURANCE:'insurancetype/getAll',
		GET_BILL_PARTY:'party/billToParty',

	},

	
	START_DAY_SERVICE: {
		FETCH_GLOBLE_TOKEN_SERVICE: "https://test.salesforce.com/services/oauth2/token?password=passwordId&client_secret=D2E97D55E08A8AC4F6CB012F6D8FAAE30F61F5E9D43313DEE88F93A4154B2F84&client_id=3MVG9Nvmjd9lcjRnH.f49S5798ZVWCzyqi8UiNjchgMqXTBu574OxAcOzs8252H6eUN7uZmK5a1N9bp1K6dMG&username=userId&grant_type=password",

		 GLOBLE_USER_DETAIL_SERVICE: "https://myklaticrete--myk.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Username,Email,MobilePhone,CompanyName,ManagerId,Manager.Name,Designation__c,Aadhar_Number__c,IsActive,Address,Date_of_Birth__c,Date_Of_Joining__c,Date_of_Leaving__c,Department__c,Employee_Category__c,Employee_Code__c,Father_s_Name__c,Grade__c,Married_Date__c,Martial_Status__c,Phone,Spouse_Name__c,User_Category__c,(select+id,name,Division__c,Sales_Office__c,City__c,City__r.name,City__r.City_Code__c,Sales_Channel__c,Sales_Channel__r.name,Reporting_Manager__c+from+Employees__r)+from+User+Where+id+=+",
	
		// GET_APP_VERSION: 'https://sanghi.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name,IOS_Version__c+ from+App_version__c',

		// GET_BRAND_LIST: 'https://sanghi.my.salesforce.com/services/data/v45.0/query/?q=select+id,Name  from Brand__c+Order By+Name+ASC',

		// GET_OTP: 'https://sanghi.my.salesforce.com/services/apexrest/CreateOTPAPI/',

		// MATCH_OTP: 'https://sanghi.my.salesforce.com/services/apexrest/GetCurrentUserOTP/?UserId='

	},
}
