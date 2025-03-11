import { HelperService } from 'App/Services/Utils/HelperService';
import { number } from 'prop-types';

function validateLoginForm(params) {

	if (!validateFieldIsEmpty(params.username)) {
		return {
			invalid_username: true,
			error_message: 'Invalid Username Number'
		}


	}

	if (!validateFieldIsEmpty(params.password)) {
		return {
			invalid_password: true,
			error_message: 'Invalid Password'
		}
	}

	return false;
}

function validateStartDay(params) {


	return false;
}


function validateRetailerForm(params) { //Todo: write validations
	if (!validateFieldIsEmpty(params.customer_name__c)) {
		return {
			invalid_area: true,
			invalid_field: 'customer_name__c',
			error_message: 'Partner Name field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.parentid)) {
		return {
			invalid_area: true,
			invalid_field: 'parentid',
			error_message: 'Whole Saler / Distributor is empty'
		}
	}

	 if (!validateFieldIsEmpty(params.postal_code__c)) {
	 	return {
	 		invalid_area: true,
	 		invalid_field: 'postal_code__c',
		error_message: 'Postal Code field is empty.'
	 	}
	 }

	if (params.postal_code__c && !validatePostalNumber(params.postal_code__c)) {
		return {
			invalid_area: true,
			invalid_field: 'postal_code__c',
			error_message: 'Please Enter Valid Postal Code.'
		}
	}

	if (params.postal_code__c &&!validateNumber(params.postal_code__c)) {
		return {
			invalid_area: true,
			invalid_field: 'postal_code__c',
			error_message: 'Please Enter Valid Postal Code.'
		}}


	if (params.account_type__c == 'Retailer' && !validateFieldIsEmpty(params.area__c)) {
		return {
			invalid: true,
			invalid_field: 'area__c',
			error_message: 'Area is not selected.'
		}
	}

	if (params.account_type__c == 'CRM_Customer' && !validateFieldIsEmpty(params.area__c)) {
		return {
			invalid: true,
			invalid_field: 'area__c',
			error_message: 'City is not selected.'
		}
	}

	if (params.account_type__c == 'Retailer' && !validateFieldIsEmpty(params.beat__c)) {
		return {
			invalid: true,
			invalid_field: 'beat__c',
			error_message: 'Beat is not selected.'
		}
	}


	if (!validateFieldIsEmpty(params.mobile__c)) {
		return {
			invalid: true,
			invalid_field: 'mobile__c',
			error_message: 'Mobile Number field is empty.'
		}
	}

	if (!validatePhoneNumber(params.mobile__c)) {
		return {
			invalid: true,
			invalid_field: 'mobile__c',
			error_message: 'Mobile Number not valid.'
		}
	}

	if (params.alternate_phone&&!validatePhoneNumber(params.alternate_phone)) {
		return {
			invalid: true,
			invalid_field: 'alternate_phone',
			error_message: 'ALternate Mobile Number not valid.'
		}
	}




	if (!validateFieldIsEmpty(params.first_name__c)) {
		return {
			invalid_area: true,
			invalid_field: 'first_name__c',
			error_message: 'Owner First Name field is Empty.'
		}
	}

	if (!validateFieldIsEmpty(params.last_name__c)) {
		return {
			invalid_area: true,
			invalid_field: 'last_name__c',
			error_message: 'Owner Last Name field is Empty.'
		}
	}

	if (!validateFieldIsEmpty(params.dealer_type__c)) {
		return {
			invalid_area: true,
			invalid_field: 'dealer_type__c',
			error_message: 'Dealer Type is not selected.'
		}
	}

	if (params.gst_in__c && !validateGstNumber(params.gst_in__c)) {
		return {
			invalid: true,
			invalid_field: 'gst_in__c',
			error_message: 'Please Enter valid GST number.'
		}
	}

	if (params.account_type__c == 'CRM_Customer' && !validateFieldIsEmpty(params.parentid)) {
		return {
			invalid: true,
			invalid_field: 'parentid',
			error_message: 'Whole Saler Attach to is not selected.'
		}
	}

	if (params.account_type__c == 'Retailer' && !validateFieldIsEmpty(params.parentid)) {
		return {
			invalid: true,
			invalid_field: 'parentid',
			error_message: 'Dealer is not selected.'
		}
	}


	if (params.email&&!validateEmail(params.email)) {
		return {
			invalid: true,
			invalid_field: 'email',
			error_message: 'Please Enter valid Email Id'
		}
	}


	return false;
}

function validateUpdateRetailerForm(params) { //Todo: write validations
	

	if (!validateFieldIsEmpty(params.postal_code)) {
	 	return {
	 		invalid_area: true,
	 		invalid_field: 'postal_code',
	 		error_message: 'Postal Code field is empty.'
	 	}
	 }

	if (params.postal_code && !validatePostalNumber(params.postal_code)) {
		return {
			invalid_area: true,
			invalid_field: 'postal_code',
			error_message: 'Please Enter Valid Postal Code.'
		}
	}
	if (params.postal_code&&!validateNumber(params.postal_code)) {
		return {
			invalid_area: true,
			invalid_field: 'postal_code',
			error_message: 'Please Enter Valid Postal Code.'
		}}


		if (params.mobile__c&&!validatePhoneNumber(params.mobile__c)) {
			return {
				invalid: true,
				invalid_field: 'mobile__c',
				error_message: 'Alternate Mobile Number not valid.'
			}
		}
		if (params.e_mail__c&&!validateEmail(params.e_mail__c)) {
			return {
				invalid: true,
				invalid_field: 'email',
				error_message: 'Please Enter valid Email Id'
			}
		}


	

	return false;
}

// validate eventForm

function validateEventForm(params) { //Todo: write validations
	if (!validateFieldIsEmpty(params.name)) {
		return {
			invalid_area: true,
			invalid_field: 'name',
			error_message: 'Name field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.event_date__c)) {
		return {
			invalid: true,
			invalid_field: 'event_date__c',
			error_message: 'Date is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.area__c)) {
		return {
			invalid: true,
			invalid_field: 'area__c',
			error_message: 'Area is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.budget__c)) {
		return {
			invalid: true,
			invalid_field: 'budget__c',
			error_message: 'Budget field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.expected_participation__c)) {
		return {
			invalid: true,
			invalid_field: 'expected_participation__c',
			error_message: 'Expected Participation field is empty.'
		}
	} else if (!validateNumber(params.expected_participation__c)) {
		return {
			invalid: true,
			invalid_field: 'expected_participation__c',
			error_message: 'Only Number are allowed.'
		}
	}

	if (!validateFieldIsEmpty(params.venue_details__c)) {
		return {
			invalid: true,
			invalid_field: 'venue_details__c',
			error_message: 'Venue details is empty'
		}
	}

	return false;
}

//validate site form 

function validateSiteForm(params) {

	if (!validateFieldIsEmpty(params.name)) {
		return {
			invalid_area: true,
			invalid_field: 'name',
			error_message: 'Name field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.address_line_1__c)) {
		return {
			invalid: true,
			invalid_field: 'address_line_1__c',
			error_message: 'Address line 1 is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.area__c)) {
		return {
			invalid: true,
			invalid_field: 'area__c',
			error_message: 'Area is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.dealer__c)) {
		return {
			invalid: true,
			invalid_field: 'dealer__c',
			error_message: 'Dealer is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.retailer__c)) {
		return {
			invalid: true,
			invalid_field: 'retailer__c',
			error_message: 'Retailer is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.phone__c)) {
		return {
			invalid: true,
			invalid_field: 'phone__c',
			error_message: 'Phone field is empty.'
		}
	} else if (!validateNumber(params.phone__c)) {
		return {
			invalid: true,
			invalid_field: 'phone__c',
			error_message: 'Only Numbers are allowed.'
		}
	}

	if (!validateFieldIsEmpty(params.size__c)) {
		return {
			invalid: true,
			invalid_field: 'size__c',
			error_message: 'Size field is empty.'
		}
	} else if (!validateNumber(params.size__c)) {
		return {
			invalid: true,
			invalid_field: 'size__c',
			error_message: 'Only Numbers are allowed.'
		}
	}
	return false;
}

// validate siteProduct Form

function validateSiteProductForm(params) {
	console.log(params, "VALIDATIONPARAMS");

	if (!validateFieldIsEmpty(params.name)) {
		return {
			invalid_area: true,
			invalid_field: 'name',
			error_message: 'Name field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.psm__c)) {
		return {
			invalid: true,
			invalid_field: 'psm__c',
			error_message: 'PSM is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.product__c)) {
		return {
			invalid: true,
			invalid_field: 'product__c',
			error_message: 'Product is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.product_category__c)) {
		return {
			invalid: true,
			invalid_field: 'product_category__c',
			error_message: 'Product Category is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.product_sub_category__c)) {
		return {
			invalid: true,
			invalid_field: 'product_sub_category__c',
			error_message: 'Product Sub is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.product_sub_sub_category__c)) {
		return {
			invalid: true,
			invalid_field: 'product_sub_sub_category__c',
			error_message: 'Product Sub Sub category is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.quantity__c)) {
		return {
			invalid: true,
			invalid_field: 'quantity__c',
			error_message: 'Quantity field is empty.'
		}
	} else if (!validateNumber(params.quantity__c)) {
		return {
			invalid: true,
			invalid_field: 'quantity__c',
			error_message: 'Only Numbers are allowed.'
		}
	}

	return false;
}

//validate Local expense form

function validateLocalExpenseForm(params) {

	// if (!validateFieldIsEmpty(params.mode__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'mode__c',
	// 		error_message: 'Mode of travel is not selected.'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.kilometers_travelled__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'kilometers_travelled__c',
	// 		error_message: 'Kilometer travelled field is empty.'
	// 	}
	// } else if (!validateNumber(params.kilometers_travelled__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'kilometers_travelled__c',
	// 		error_message: 'Only Numbers are allowed.'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.food__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'food__c',
	// 		error_message: 'Food field is empty.'
	// 	}
	// } else if (!validateNumber(params.food__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'food__c',
	// 		error_message: 'Only Numbers are allowed.'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.toll_parking_charges__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'toll_parking_charges__c',
	// 		error_message: 'Toll parking field is empty.'
	// 	}
	// } else if (!validateNumber(params.toll_parking_charges__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'toll_parking_charges__c',
	// 		error_message: 'Only Numbers are allowed.'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.amount__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'amount__c',
	// 		error_message: 'Amount field is empty.'
	// 	}
	// } else if (!validateNumber(params.amount__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'amount__c',
	// 		error_message: 'Only Numbers are allowed.'
	// 	}
	// }

	return false;
}

function validateLocalRemarkExpenseForm(params) {
	if (!validateFieldIsEmpty(params.remark__c)) {
		return {
			invalid: true,
			invalid_field: 'remark__c',
			error_message: 'Remarks field is empty.'
		}
	}

	return false;
}

function validateOutstationRemarkExpenseForm(params) {
	if (!validateFieldIsEmpty(params.remark__c)) {
		return {
			invalid: true,
			invalid_field: 'remark__c',
			error_message: 'Remarks field is empty.'
		}
	}

	return false;
}

function validateTourRemarkForm(params) {
	if (!validateFieldIsEmpty(params.remark__c)) {
		return {
			invalid: true,
			invalid_field: 'remark__c',
			error_message: 'Remarks field is empty.'
		}
	}

	return false;
}

function validateTourForm(params) { //Todo: write validations

	if (!validateFieldIsEmpty(params.tour_from__c)) {
		return {
			invalid_area: true,
			invalid_field: 'tour_from__c',
			error_message: 'From date field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.tour_to__c)) {
		return {
			invalid_area: true,
			invalid_field: 'tour_to__c',
			error_message: 'To date field is empty.'
		}
	}

	return false;
}


function validateUpdateTourForm(params) {
	if (!validateFieldIsEmpty(params.food__c)) {
		return {
			invalid: true,
			invalid_field: 'food__c',
			error_message: 'Food field is empty.'
		}
	} else if (!validateNumber(params.food__c)) {
		return {
			invalid: true,
			invalid_field: 'food__c',
			error_message: 'Only Numbers are allowed.'
		}
	}


	if (!validateFieldIsEmpty(params.hotel__c)) {
		return {
			invalid: true,
			invalid_field: 'hotel__c',
			error_message: 'Hotel field is empty.'
		}
	} else if (!validateNumber(params.hotel__c)) {
		return {
			invalid: true,
			invalid_field: 'hotel__c',
			error_message: 'Only Numbers are allowed.'
		}
	}


	if (!validateFieldIsEmpty(params.Comapny_Paid__c)) {
		return {
			invalid: true,
			invalid_field: 'Comapny_Paid__c',
			error_message: 'Company Paid field is empty.'
		}
	} else if (!validateNumber(params.Comapny_Paid__c)) {
		return {
			invalid: true,
			invalid_field: 'Comapny_Paid__c',
			error_message: 'Only Numbers are allowed.'
		}
	}

	if (!validateFieldIsEmpty(params.Travel_By__c)) {
		return {
			invalid_area: true,
			invalid_field: 'Travel_By__c',
			error_message: 'Travel Mode field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.Travel_Details__c)) {
		return {
			invalid_area: true,
			invalid_field: 'Travel_Details__c',
			error_message: 'Travel detail field is empty.'
		}
	}


	return false;
}


//validate influencer form

// "category__c" : "ASM",
// "psm__c" : "a0H1m000000E92TEAS",

// "status__c" : "Active",
// "title" : "Mr."

function validateInfluencerForm(params) { //Todo: write validations

	if (!validateFieldIsEmpty(params.title)) {
		return {
			invalid_area: true,
			invalid_field: 'title',
			error_message: 'title field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.firstname)) {
		return {
			invalid_area: true,
			invalid_field: 'firstname',
			error_message: 'FirstName field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.lastname)) {
		return {
			invalid: true,
			invalid_field: 'lastname',
			error_message: 'LastName field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.phone)) {
		return {
			invalid: true,
			invalid_field: 'Phone',
			error_message: 'Phone field is empty.'
		}
	} else if (!validateNumber(params.phone)) {
		return {
			invalid: true,
			invalid_field: 'phone',
			error_message: 'Only Number are allowed.'
		}
	}

	if (!validateFieldIsEmpty(params.email)) {
		return {
			invalid: true,
			invalid_field: 'email',
			error_message: 'Email field is empty.'
		}
	}

	return false;
}


function validatePlaceOrderForm(cart) {
	if (!validateFieldIsEmpty(cart.order.order_value__c)) {
		return {
			invalid: true,
			invalid_field: 'order_value__c',
			error_message: 'Order value is empty'
		}
	}

	if (!validateFieldIsEmpty(cart.order.dealer__c)) {
		return {
			invalid: true,
			invalid_field: 'dealer__c',
			error_message: 'Fulfiller is not present.'
		}
	}

	if (!(cart.items.length)) {
		return {
			invalid: true,
			invalid_field: 'items',
			error_message: 'Cannot Place Order. No items in cart.'
		}
	}

	if (!validateFieldIsEmpty(cart.order.retailer__c)) {
		return {
			invalid: true,
			invalid_field: 'retailer__c',
			error_message: 'Retailer is not present.'
		}
	}

	if (!validateFieldIsEmpty(cart.order.order_date__c)) {
		return {
			invalid: true,
			invalid_field: 'order_date__c',
			error_message: 'Order date is not present'
		}
	}

	if (!validateFieldIsEmpty(cart.order.unique_product_count__c)) {
		return {
			invalid: true,
			invalid_field: 'unique_product_count__c',
			error_message: 'Unique Product Count is not present'
		}
	}

	return false;
}

function validateAddVisitForm(data) {
	// console.log("data",data)
	let values = data.batchRequests[0].richInput;
	console.log(values)

	// if (data.market_material_required__c == 'false') {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'market_material_required__c',
	// 		error_message: 'select market material required'
	// 	}
	// }

	if (!validateFieldIsEmpty(values.Concerned_Person_Name__c)) {
		return {
			invalid: true,
			invalid_field: 'Concerned_Person_Name__c',
			error_message: 'Name Cannot be Empty'
		}
	}
	
	if (!validateFieldIsEmpty(values.Concerned_Person_No__c)) {
		return {
			invalid: true,
			invalid_field: 'Concerned_Person_No__c',
			error_message: 'Phone field is empty.'
		}
	} else if (!validateNumber(values.Concerned_Person_No__c)) {
		return {
			invalid: true,
			invalid_field: 'Concerned_Person_No__c',
			error_message: 'Only Number are allowed.'
		}
	}else if(!validatePhoneNumber(values.Concerned_Person_No__c)){
		return {
			invalid: true,
			invalid_field: 'Concerned_Person_No__c',
			error_message: 'Phone no not valid.'
		}
	}
	if (!validateFieldIsEmpty(values.summary__c)) {
		return {
			invalid: true,
			invalid_field: 'summary__c',
			error_message: 'Remark Cannot be Empty'
		}
	}
	// if (!validateFieldIsEmpty(data.attachment_url__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'attachment_url__c',
	// 		error_message: 'Please Attach Image'
	// 	}
	// }



	return false;
}

function validatePaymentForm(params) {
	if (!validateFieldIsEmpty(params.payment_mode)) {
		return {
			invalid: true,
			invalid_field: 'payment_mode',
			error_message: 'Please select Payment Mode'
		}
	}

	if (params.payment_mode != 'Cash' && !validateFieldIsEmpty(params.payment_reference)) {
		return {
			invalid: true,
			invalid_field: 'payment_reference',
			error_message: 'Payment reference cannot be empty'
		}
	}
	if (!validateFieldIsEmpty(params.amount)) {
		return {
			invalid: true,
			invalid_field: 'amount',
			error_message: 'Amount cannot be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.date_of_payment__c)) {
		return {
			invalid: true,
			invalid_field: 'date_of_payment__c',
			error_message: 'Please enter date of payment'
		}
	}

	return false;
}

function validateCompetitor(params) {

	let validation = false;

	if (!params) {
		return {
			invalid: true,
			invalid_field: 'Competitor',
			error_message: 'Add atleast one Competitor details'
		}
	}

	if (!params.length) {
		return {
			invalid: true,
			invalid_field: 'Competitor',
			error_message: 'Add atleast one Competitor details'
		}
	}

	params.map((obj, index) => {
		validation = validateCompetitorForm(obj, index) || validation;
	});

	return validation;
}

function validateCompetitorForm(params, index) {

	if (!validateFieldIsEmpty(params.Competitor__c)) {
		return {
			invalid: true,
			invalid_field: 'Competitor__c',
			error_message: 'competitor name is  empty in Competitor form' + (index + 1)
		}
	}

	if (params.competitors__c == 'a0E2w000002q6koEAA' && !validateFieldIsEmpty(params.competitor_name__c)) {
		return {
			invalid: true,
			invalid_field: 'competitor_name__c',
			error_message: 'Other  is empty in Competitor form ' + (index + 1)
		}
	}
	if (params.competitors__c == 'a0E2w000002q6koEAA' && !validateCharacterLength(params.competitor_name__c)) {
		return {
			invalid: true,
			invalid_field: 'competitor_name__c',
			error_message: 'Please Enter valid Name.'
		}
	}

	if (!validateFieldIsEmpty(params.Competitor_Product__c)) {
		return {
			invalid: true,
			invalid_field: 'Competitor_Product__c',
			error_message: 'Product value is empty in Competitor form ' + (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.Price__c)) {
		return {
			invalid: true,
			invalid_field: 'Price__c',
			error_message: 'Price value is empty in Competitor form ' + (index + 1)
		}
	}
	// if (!validateFieldIsEmpty(params.potential_off_take__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'potential',
	// 		error_message: 'Potential value is empty in Competitor form ' + (index + 1)
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.payment_term__c)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'payment_term__c',
	// 		error_message: 'Payment Term is empty in Competitor form ' + (index + 1)
	// 	}
	// }





}

function validateCharacterLength(number) {
	return (number.length >= 3)
	// var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');    
	// if (gstinformat.test(number)) {    
	//        return true;    
	//    } else {    
	//        return false;    
	//    }    
}
function validateStock(params) {
	let validation = false;

	if (!params) {
		return {
			invalid: true,
			invalid_field: 'Stock',
			error_message: 'Add atleast one Stock details'
		}
	}
	if (!params.length) {
		return {
			invalid: true,
			invalid_field: 'Stock',
			error_message: 'Add atleast one Stock details'
		}
	}

	params.map((obj, index) => {
		validation = validateStockForm(obj, index) || validation;
	});

	return validation;
}

function validateStockForm(params, index) {


	if (!validateFieldIsEmpty(params.product_family__c)) {
		return {
			invalid: true,
			invalid_field: 'product',
			error_message: 'Product value is empty in Stock form ' + (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.quantity__c)) {
		return {
			invalid: true,
			invalid_field: 'quantity',
			error_message: 'quantity value is empty in Stock form ' + (index + 1)
		}
	}



}
function validateUpdateOnboardingForm(params) {
	// console.log("ooooo",params);
	if (!validateFieldIsEmpty(params.firmName)) {
		return {
			invalid: true,
			invalid_field: 'firmName',
			error_message: 'firmName  is empty.'
		}
	}
	if (!validateFieldIsEmpty(params.categoryType)) {
		return {
			invalid: true,
			invalid_field: 'categoryType',
			error_message: 'categoryType  is empty.'
		}
	}
	
	if (!validateFieldIsEmpty(params.mobile)) {
		return{
		invalid: true,
		invalid_field: 'mobile',
		error_message: 'mobile is empty'

	}}else if(!validatePhoneNumber(params.mobile)){
		return {
			invalid: true,
			invalid_field: 'mobile',
			error_message: 'Mobile Number not valid.'
		}
	}
	

	 if( !validateEmail(params.email)){
		return {
			invalid: true,
			invalid_field: 'email',
			error_message: 'Please Enter Valid Email.'
		}
	}
	
	
	
	if (!validateFieldIsEmpty(params.billing)) {
		return {
			invalid: true,
			invalid_field: 'billing',
			error_message: 'Billing Address is empty.'
		}
	}
	 if (!validateFieldIsEmpty(params.shipping)) {
		return {
			invalid: true,
			invalid_field: 'Shipping',
			error_message: 'Shipping Address  is empty.'
		}
	}
	
	if (!validateFieldIsEmpty(params.pinCode) && !validatePostalNumber(params.pinCode)) {
		return {
			invalid: true,
			invalid_field: 'pinCode',
			error_message: 'Please Enter Valid Postal Code.'
		}
	}
	
	if (!validateFieldIsEmpty(params.city)) {
		return {
			invalid: true,
			invalid_field: 'city',
			error_message: 'City is empty.'
		}
	}
	if (!validateFieldIsEmpty(params.territory)) {
		return {
			invalid: true,
			invalid_field: 'territory',
			error_message: 'Territory  is empty.'
		}
	}
	
		if ( !validateFieldIsEmpty(params.gstIn)) {
			return {
				invalid_area: true,
				invalid_field: 'gstIn',
				error_message: 'Please Enter gstIn No'
			}}else if (!validateGstNumber(params.gstIn)) {
				return {
					invalid: true,
					invalid_field: 'gstIn',
					error_message: 'Please Enter Valid gstIn Code.'
				}
			}

	
	return false;
}
function validateOnboardingForm(params) { //Todo: write validations
	// console.log(params.records[0],"onboardinggggggggg");
let param=params.records[0]
	 if (!validateFieldIsEmpty(param.Name)) {
		return {
			invalid: true,
			invalid_field: 'Name',
			error_message: 'Name of Customer is empty.'
		}
	}
	if (!validateFieldIsEmpty(param.Prospect_Type__c)) {
		return {
			invalid: true,
			invalid_field: 'Prospect Type__c',
			error_message: 'Category Type is empty.'
		}
	}
	if (!validateFieldIsEmpty(param.Customer_Vertical__c)) {
		return {
			invalid: true,
			invalid_field: 'Customer Vertical',
			error_message: 'Customer Vertical is empty.'
		}
	}
	
	if (!validateFieldIsEmpty(param.Mobile__c)) {
		return{
		invalid: true,
		invalid_field: 'Mobile',
		error_message: 'Mobile No. is empty'

	}}else if(!validatePhoneNumber(param.Mobile__c)){
		return {
			invalid: true,
			invalid_field: 'Mobile',
			error_message: 'Mobile No. not valid.'
		}
	}
	
	 if(!validatePhoneNumber(param.Phone)){
		return {
			invalid: true,
			invalid_field: 'Mobile',
			error_message: 'Alt. Mobile No. not valid.'
		}
	}
	
	if( !validateEmail(param.Email__c)){
		return {
			invalid: true,
			invalid_field: 'email',
			error_message: 'Please Enter Valid Email.'
		}
	}
	
	
	
	if (!validateFieldIsEmpty(param.Address__c)) {
		return {
			invalid: true,
			invalid_field: 'Address',
			error_message: 'Address is empty.'
		}
	}

	if (!validateFieldIsEmpty(param.Area_Master__c)) {
		return {
			invalid: true,
			invalid_field: 'Area',
			error_message: 'Area is empty.'
		}
	}
	if (!validateFieldIsEmpty(param.PAN_No__c)) {
		return {
			invalid: true,
			invalid_field: 'PAN No.',
			error_message: 'PAN No. is empty.'
		}
	}else if(!validatePan(param.PAN_No__c)){
		return {
			invalid: true,
			invalid_field: 'PAN No.',
			error_message: 'PAN No. not valid.'
		}
	}
	


	return false;
}

function validatePhoneNumber(number) {
	if (!number) return false;
	var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	return number.match(phoneNum);
}

function validateNumber(number) {
	if (!number) return false;
	var numValue = "^[0-9]*$"
	return number.match(numValue);
}

function validatePan(number) {
	if (!number) return false;
	var panNum=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
	return number.test(panNum);
}


function validateFieldIsEmpty(value) {
	return !!value;
}

function validatePostalNumber(number) {
	return (number.length == 6)
}
function validateAddharNumber(number) {
	return (number.length == 12)
}
function validatePanNumber(number) {
	return (number.length == 10)
}
function validateEmail(email) {
	var userEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return userEmail.test(email);
}

// function validateGstNumber(number) {

// 	var gstinformat = new RegExp(!/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(number));    
// 	if (gstinformat.test(number)) {    
// 	       return true;    
// 	   } else {    
// 	       return false;    
// 	   }    
// }

function validateGstNumber(value) {
	 console.log("vaueeee",value);
	let error;
	if (!value) {
	  error = "";

	} else if (
	  !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(value)
	) {
		
	  error = "Invalid GST Number";
	  console.log("true1",error);
	  return false
	 
	}
	else{
	   console.log("true2",error);
	  return true
	}
	console.log("gggggg",error);
	return false
  }

export const ValidationService = {
	validateLoginForm,
	validateStartDay,
	validateRetailerForm,
	validatePlaceOrderForm,
	validateAddVisitForm,
	validateEventForm,
	validateInfluencerForm,
	validateSiteForm,
	validateSiteProductForm,
	validateLocalExpenseForm,
	validateLocalRemarkExpenseForm,
	validateTourForm,
	validateUpdateTourForm,
	validateTourRemarkForm,
	validateOutstationRemarkExpenseForm,
	validatePaymentForm,
	validateCompetitor,
	validateStock,
	validateUpdateRetailerForm,
	validateOnboardingForm,
	validateUpdateOnboardingForm
	
}