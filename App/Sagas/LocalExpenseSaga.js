import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { LocalExpenseService } from '../Services/Api/LocalExpenseService';
import { HelperService } from '../Services/Utils/HelperService';
import { ValidationService } from '../Services/ValidationService';
import LocalActions, { LocalTypes } from '../Stores/LocalExpense/Actions';
import NavigationService from '../Services/NavigationService'
import CommonActions from 'App/Stores/Common/Actions';
import VisitAction from '../Stores/Visits/Actions'


export function* watchUpdateExpenseRequest() {
    while (true) {
        const { payload } = yield take(LocalTypes.UPDATE_EXPENSE);
        console.log("payload",payload)
        try {
            const validationFailed = yield call(ValidationService.validateLocalExpenseForm, payload);
            if (validationFailed) {
                HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
                yield put(LocalActions.expenseFormValidationFailed(validationFailed));
                continue;
            }
        } catch (err) {
            console.log(err)
        }

        let PayloadData = {data: {batchRequests:[
            {
                "method" : "PATCH",
                "url" : "v34.0/sobjects/Expense_Days__c/"+`${payload.Id}`,
               
                "richInput" : { 
                  
                    "Food__c":payload.food__c,
                    "Toll__c":payload.toll_parking_charges__c,
                    "KM_Travelled_By_User__c": payload.kilometers_travelled__c

                  }
                },
            

        ] }}
        // const startDay = yield select(state => state.startDay);
        let user = yield select(state => state.user)
        // console.log("startDay",user)
		const access_token = user.token;
		PayloadData.access_token = access_token;



        yield call(updateExpenses, PayloadData)
    }
}

export function* watchUpdateExpenseDetailRequest() {
    while (true) {
        const { payload } = yield take(LocalTypes.UPDATE_EXPENSE_DETAIL);
        try {
            const validationFailed = yield call(ValidationService.validateLocalExpenseDetailForm, payload);
            if (validationFailed) {
                HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
                yield put(LocalActions.expenseFormValidationFailed(validationFailed));
                continue;
            }
        } catch (err) {
            console.log(err)
        }

        let PayloadData = {data: {batchRequests:[
            {
                "method" : "PATCH",
                "url" : "v34.0/sobjects/Expense_Lines__c/"+`${payload.sfid}`,
               
                "richInput" : { 
                  
                    "Kilometer_Travelled__c":payload.Kilometer_Travelled__c


                  }
                },
            

        ] }}
        const startDay = yield select(state => state.startDay);
		const access_token = startDay.access_token;
		PayloadData.access_token = access_token;



        yield call(updateExpensesDetail, PayloadData)
    }
}

export function* watchSendForApprovalLocalExpenseRequest() {
    while (true) {
        const { payload } = yield take(LocalTypes.SEND_APPROVAL_LOCAL_EXPENSE);
        yield call(sendForApprovalLocalExpense, payload)
    }
}

export function* watchUploadLocalImageRequest() {
    while (true) {
        const { payload } = yield take(LocalTypes.UPLOAD_LOCAL_IMAGE);
        yield call(uploadLocalImage, payload)
    }
}

// export function* watchLocalExpenseDetailsRequest() {
//     while (true) {
//         const { payload } = yield take(LocalTypes.FETCH_LOCAL_EXPENSE_DETAILS);
//         yield call(fetchLocalExpenseDetails, payload)
//     }
// }


export function* watchApproveRejectLocalRequest() {
    while (true) {
        const { payload } = yield take(LocalTypes.APPROVE_REJECT_LOCAL_EXPENSE);
        yield call(approveRejectLocalExpense, payload)
    }
}

// export function* watchaddRemarkRequest() {
//     while (true) {
//         const { payload } = yield take(LocalTypes.ADD_REMARK);
//         try {
//             const validationFailed = yield call(ValidationService.validateLocalRemarkExpenseForm, payload);
//             if (validationFailed) {
//                 HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
//                 yield put(LocalActions.expenseFormValidationFailed(validationFailed));
//                 continue;
//             }
//             else {
//                 yield call(addRemark, payload)
//             }
//         } catch (err) {
//             console.log(err)
//         }

//     }
// }



export function* fetchLocalExpenseData({ payload }) {
    const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchLocalExpenseLoading());
    try {
        let successData = yield call(LocalExpenseService.fetchLocalExpense, payload);
        if (successData) {
            yield put(LocalActions.fetchLocalExpenseSuccess(successData));
        } else {
            yield put(LocalActions.fetchLocalExpenseFailure());
        }
    } catch (error) {
        yield put(LocalActions.fetchLocalExpenseFailure());
    }
}

export function* fetchTeamExpenses({ payload }) {
    const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchTeamExpenseLoading());
    try {
        let successData = yield call(LocalExpenseService.fetchTeamExpense, payload);
        if (successData) {
            yield put(LocalActions.fetchTeamExpenseSuccess(successData));
        } else {
            yield put(LocalActions.fetchTeamExpenseFailure());
        }
    } catch (error) {
        //console.log('Error', error)
        yield put(LocalActions.fetchTeamExpenseFailure());
    }
}


export function* fetchLocalItemExpenses({ payload }) {
    //console.log(payload, "LOCAL ITEM");
    const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchLocalExpenseItemLoading());
    try {
        let successData = yield call(LocalExpenseService.fetchExpenseItem, payload);
        if (successData) {
            yield put(LocalActions.fetchLocalExpenseItemSuccess(successData));
        } else {
            yield put(LocalActions.fetchLocalExpenseItemFailure());
        }
    } catch (error) {
        console.log('Error', error)
        yield put(LocalActions.fetchLocalExpenseItemFailure());
    }
}


export function* fetchTeamItemExpenses({ payload }) {

    const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchTeamExpenseItemLoading());
    try {
        let successData = yield call(LocalExpenseService.fetchExpenseItem, payload);
        if (successData) {
            yield put(LocalActions.fetchTeamExpenseItemSuccess(successData));
        } else {
            yield put(LocalActions.fetchTeamExpenseItemFailure());
        }
    } catch (error) {
        console.log('Error', error)
        yield put(LocalActions.fetchTeamExpenseItemFailure());
    }
}

export function* fetchLocalImage({ payload }) {
    // console.log("payload",payload)

    const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchLocalImageLoading());
    try {
        let successData = yield call(LocalExpenseService.fetchLocalImageId, payload);
        if (successData) {
            yield put(LocalActions.fetchLocalImageSuccess(successData));
        } else {
            yield put(LocalActions.fetchLocalImageFailure());
        }
    } catch (error) {
        console.log('Error', error)
        yield put(LocalActions.fetchLocalImageFailure());
    }
}


export function* uploadLocalImage(payload) {
    // console.log("uploadLocalImage",payload)
    yield put(LocalActions.uploadLocalImageLoading());
    // const successData = yield call(LocalExpenseService.uploadLocalImage, payload);
    //     console.log("successData",successData)
    try {
        let user = yield select(state => state.user)
         
        const successData = yield call(LocalExpenseService.uploadLocalImage, payload);
        // console.log("successData",successData)
        if (successData) { //Todo : change it to userData
           
          const data=  yield call(LocalExpenseService.fetchDocumentId, { id :successData.id, token: user.token});
         
            if(data)
            {
                // console.log("datata...image",data)
                
                const data1=yield call(LocalExpenseService.assignAttachment, { form:{"ContentDocumentId":data[0].ContentDocumentId, "Visibility":"AllUsers",
                "LinkedEntityId": payload.id   }, token: user.token});
                yield put(LocalActions.uploadLocalImageSuccess(data1));
                // if(payload.type!=="expense"){
                    yield put(VisitAction.fetchVisitImage({token:user.token,id:payload.id}));
                    yield put(LocalActions.fetchLocalImage({token:user.token,id:payload.id}));
                // }
                
            }
            else{
                yield put(LocalActions.uploadLocalImageFailure())
            HelperService.showToast({ message: 'File upload failed!! Try Again.', duration: 2000, buttonText: 'Okay' });

            }

        // yield put(LocalActions.uploadLocalImageSuccess());

            HelperService.showToast({ message: 'File Upload Successfully', duration: 1000, buttonText: '' });
        } else {
            yield put(LocalActions.uploadLocalImageFailure())
            HelperService.showToast({ message: 'File upload failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
        }
    } catch (error) {
        yield put(LocalActions.uploadLocalImageFailure());
        HelperService.showToast({ message: 'File upload failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
    }
}



export function* updateExpenses(payload) {
    yield put(LocalActions.updateExpenseLoading());
    try {
       
        const successData = yield call(LocalExpenseService.updateExpense, payload);
        if (successData) { //Todo : change it to userData
            let local = yield select(state => state.local)
            //console.log(payload)
            console.log(local)
            yield put(LocalActions.updateExpenseSuccess(payload));
            HelperService.showToast({ message: 'Expense Updated Successfully', duration: 1000, buttonText: '' });
            // yield put(LocalActions.fetchLocalItemExpenses({
            //     token :payload.access_token,
            //     startDate: local.searchFilters['startDate'],
            //     id: local.selectLocalExpense.Id
            // }));
           // NavigationService.navigate('LocalExpenseListScreen',{ 'Local': true });
        } else {
            yield put(LocalActions.updateExpenseFailure())
            HelperService.showToast({ message: 'Expense Updation failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
        }
    } catch (error) {
        yield put(LocalActions.updateExpenseFailure());
        HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
    }
}

export function* updateExpensesDetail(payload) {
    yield put(CommonActions.closeModal());
    yield put(LocalActions.updateExpenseDetailLoading());
    try {
        const successData = yield call(LocalExpenseService.updateExpense, payload);
        if (successData) { //Todo : change it to userData
            yield put(LocalActions.updateExpenseDetailSuccess(payload));
            HelperService.showToast({ message: 'Expense Updated Successfully', duration: 1000, buttonText: '' });
            NavigationService.navigate('LocalExpenseListScreen',{ 'Local': true });
        } else {
            yield put(LocalActions.updateExpenseDetailFailure())
            HelperService.showToast({ message: 'Expense Updation failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
        }
    } catch (error) {
        yield put(LocalActions.updateExpenseDetailFailure());
        HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
    }
}

export function* approveRejectLocalExpense(payload) {
    console.log("payload",payload)
    yield put(LocalActions.approveRejectLoading());
    try {
        const successData = yield call(LocalExpenseService.approveRejectLocalExpense, payload);
        if (successData) { //Todo : change it to userData
            let user = yield select(state => state.user)
			 	let userid = user.loginDetails.userId;
			 	let token = user.token;
			 	let month =user.monthNumber;
            yield put(LocalActions.approveRejectSuccess(payload));
            HelperService.showToast({ message: 'Expense Updated Successfully', duration: 1000, buttonText: '' });
            yield put(LocalActions.fetchTeamExpenses({
                token:token,
                userId:userid,
                pending:'Pending For Approval',
                month: month,
              
            }));

        } else {
            yield put(LocalActions.approveRejectFailure())
            HelperService.showToast({ message: 'Expense Updation failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
        }
    } catch (error) {
        yield put(LocalActions.approveRejectFailure());
        HelperService.showToast({ message: 'Expense Updation failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
    }
}

// export function* addRemark(payload) {
//     yield put(LocalActions.addRemarkLoading());
//     try {
//         const successData = yield call(LocalExpenseService.addRemarkExpense, payload);
//         if (successData) { //Todo : change it to userData
//             yield put(LocalActions.addRemarkSuccess(payload));
//             HelperService.showToast({ message: 'Expense Updated Successfully', duration: 1000, buttonText: '' });
//         } else {
//             yield put(LocalActions.addRemarkFailure())
//             HelperService.showToast({ message: 'Expense Updation failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
//         }
//     } catch (error) {
//         yield put(LocalActions.addRemarkFailure());
//         HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
//     }
// }


export function* sendForApprovalLocalExpense(payload) {
    yield put(LocalActions.sendApprovalLoading());
    try {
        const successData = yield call(LocalExpenseService.sendForApproval, payload);
        if (successData) { //Todo : change it to userData
            yield put(LocalActions.sendApprovalSuccess(payload));
            HelperService.showToast({ message: 'Approval Request Send Successfully', duration: 1000, buttonText: '' });
            NavigationService.navigateAndReset('LocalExpenseTabScreen');
        } else {
            yield put(LocalActions.sendApprovalFailure())
            HelperService.showToast({ message: 'Approval Request failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
        }
    } catch (error) {
        yield put(LocalActions.sendApprovalFailure());
        HelperService.showToast({ message: 'Approval Request failed!! Try Again.', duration: 2000, buttonText: 'Okay' });
    }
}

// export function* fetchExpenseAttachmentsDetails({ payload }) {
//     console.log("payload",payload)
// 	const isOnline = yield select(getConnectionStatus);
// 	if (!isOnline) {
// 		yield put(LocalActions.doNothing());
// 		return;
// 	}


// 	let filepath = HelperService.generateFilePath(payload.attachmentId, payload.extension);

// 	let fileExists = yield call(HelperService.fileExists, filepath);
// 	if (fileExists){
// 		yield put(LocalActions.doNothing());
// 		HelperService.viewFile(filepath);
// 		return;
// 	}

// 	yield put(LocalActions.fetchExpenseAttachmentsDetailsLoading({id: payload.attachmentId}));
// 	HelperService.showToast({ message: 'Please wait while the file is being downloaded.', duration: 1000, buttonText: '' });

// 	try {
// 		const user = yield select(state => state.startDay);
// 		const access_token = user.access_token
// 		payload.token = access_token;

// 		let successData = yield call(LocalExpenseService.fetchLocalImageAttach, payload);
// 		if (successData) {
// 			HelperService.writeFile(filepath, successData, payload.extension);
// 			yield put(LocalActions.fetchExpenseAttachmentsDetailsSuccess(successData));
// 		} else {
// 			HelperService.deleteFile(filepath);
// 			yield put(LocalActions.fetchExpenseAttachmentsDetailsFailure());
// 			HelperService.showToast({ message: 'Attachment Not Found.', duration: 1000, buttonText: '' });
// 		}
// 	} catch (error) {
// 		yield put(LocalActions.fetchExpenseAttachmentsDetailsFailure());
// 	}
// }

export function* fetchExpenseAttachmentsDetails({ payload }) {
    console.log("payload",payload)
	const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchExpenseAttachmentsDetailsLoading());
    try {

        let successData = yield call(LocalExpenseService.fetchLocalImageAttach, payload);
        // console.log("successDatasuccessData",successData)
        if (successData) {
            yield put(LocalActions.fetchExpenseAttachmentsDetailsSuccess(successData));
            // NavigationService.navigate('fileShowExpense',{ 'fileData': successData }); 

        } else {
            yield put(LocalActions.fetchExpenseAttachmentsDetailsFailure());
        }
    } catch (error) {
        console.log('Error', error)
        yield put(LocalActions.fetchExpenseAttachmentsDetailsFailure());
    }
}

export function* fetchLocalExpenseDetails({ payload }) {

    const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchLocalExpenseDetailsLoading());
    try {

        let successData = yield call(LocalExpenseService.localExpenseDetails, payload);
        if (successData) {
            yield put(LocalActions.fetchLocalExpenseDetailsSuccess(successData));
        } else {
            yield put(LocalActions.fetchLocalExpenseDetailsFailure());
        }
    } catch (error) {
        console.log('Error', error)
        yield put(LocalActions.fetchLocalExpenseDetailsFailure());
    }
}
export function* fetchVisitImageAttach({ payload }) {

    const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
    if (!isOnline) {
        yield put(LocalActions.doNothing());
        return;
    }
    yield put(LocalActions.fetchVisitImageAttachLoading());
    try {

        let successData = yield call(LocalExpenseService.fetchVisitImageAttach, payload);
        console.log("successDatasuccessData",payload)
        if (successData) {
            yield put(LocalActions.fetchVisitImageAttachSuccess(successData));

            if(payload.type=="onboarding"){
                NavigationService.navigate('ShowAttachment',{ 'fileData': successData });
            }else{
                NavigationService.navigate('fileShow',{ 'fileData': successData });
            }
           

        } else {
            yield put(LocalActions.fetchVisitImageAttachFailure());
        }
    } catch (error) {
        console.log('Error', error)
        yield put(LocalActions.fetchVisitImageAttachFailure());
    }
}


