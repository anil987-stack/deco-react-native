import { put, call, take, select } from "redux-saga/effects";
import { MenuTypes } from "App/Stores/Menu/Actions";
import MenuActions from "App/Stores/Menu/Actions";
import { MenuService } from "App/Services/Api/MenuService";
import { ValidationService } from "App/Services/ValidationService";
import { Toast } from "native-base";
import RetailerActions from "App/Stores/Retailers/Actions";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import { getConnectionStatus } from "App/Stores/Common/Selectors";
import ActionQueuesActions from "App/Stores/ActionQueues/Actions";
import { offlineApiCall } from "./OfflineSaga";
import StartupActions from "App/Stores/Startup/Actions";
import InfluencerActions from "../Stores/Influencers/Actions";
import SiteActions from "../Stores/Sites/Actions";
import _ from "lodash";
import moment from "moment";
import StartDayActions from "App/Stores/StartDay/Actions";
import { startDayService } from "App/Services/Api/StartDayService";
import UserActions from "App/Stores/User/Actions";
import CommonActions from "App/Stores/Common/Actions";

var deviceId = HelperService.getDeviceId();

export function* createOnboarding(payload) {
  // console.log(payload, "payload");
  yield put(MenuActions.createOnboardingLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.createOnboarding,
      resource: "createOnboarding",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.createOnboardingSuccess,
      failureCallback: MenuActions.createOnboardingFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);
    console.log(successData, "successDataonb");
    let location = yield select((state) => state.common.currentLocation);

    if (successData) {
      //Todo : change it to userData
      yield put(MenuActions.createOnboardingSuccess(successData));
      let user = yield select((state) => state.user);
      let token = user.token;
      let userId = user.loginDetails.userId;
      let asmId = user.loginDetails.userId;

      yield put(
        UserActions.getOnboarding({
          token,
        })
      );
      yield put(
        RetailerActions.updateRetailerLocation({
          recordID: successData.results[0].id,
          Latitude: String(location.latitude),
          Longitude: String(location.longitude),
          token: token,

          // "Sector 17 Bus Stand Road Chandigarh 160022 India"
        })
      );

      // 			}

      NavigationService.navigate("OnboardingSuccess", {
        message: "Onboarding Created",
      });
      HelperService.showToast({
        message: "create Onboarding Successfull.",
        duration: 1000,
        buttonText: "",
      });
    } else {
      console.log("aaaaa", error);
      yield put(MenuActions.createOnboardingFailure());
      HelperService.showToast({
        message: "Error Submittingggg Onboarding",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.createOnboardingFailure());
    console.log("eeeeee", error);
    HelperService.showToast({
      message: "Error Submitting Onboarding",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* UploadImage(payload) {
  yield put(MenuActions.UploadImageLoading());
  try {
    let user = yield select((state) => state.user);
    let offlinActionData = {
      apiCall: MenuService.UploadImage,
      resource: "createOnboarding",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.UploadImageSuccess,
      failureCallback: MenuActions.UploadImageFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);

    if (successData) {
      //Todo : change it to userData
      yield put(MenuActions.UploadImageSuccess(payload));
      // NavigationService.navigate('OnBoarding');
      HelperService.showToast({
        message: "image upload Successfull.",
        duration: 1000,
        buttonText: "",
      });
      yield put(
        UserActions.getImageOnboarding({
          token: user.token,
        })
      );
    } else {
      // console.log("aaaaa", error);
      yield put(MenuActions.UploadImageFailure());
      HelperService.showToast({
        message: "Error ",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.UploadImageFailure());
    // console.log("eeeeee", error);
    HelperService.showToast({
      message: "Error Submitting ",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}
export function* UpdateOnboarding(payload) {
  // console.log(payload,"uuuuauauauuaau");
  yield put(MenuActions.UpdateOnboardingLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.UpdateOnboarding,
      resource: "UpdateOnboarding",
      callName: "update",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.UpdateOnboardingSuccess,
      failureCallback: MenuActions.UpdateOnboardingFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);

    if (successData) {
      //Todo : change it to userData

      yield put(MenuActions.UpdateOnboardingSuccess(successData));
      let user = yield select((state) => state.user);
      let token = user.token;
      let userId = user.loginDetails.userId;
      let asmId = user.loginDetails.userId;
      yield put(
        UserActions.getOnboarding({
          token,
          userId: userId,
        })
      );

      NavigationService.navigate("OnboardingSuccess", {
        message: "Onboarding Updated",
      });
      // yield put(CommonActions.showAttachmentModal({successData}))
      HelperService.showToast({
        message: "Update Onboarding Submitted.",
        duration: 1000,
        buttonText: "",
      });
    } else {
      // console.log("aaaaa",error)
      yield put(MenuActions.UpdateOnboardingFailure());
      HelperService.showToast({
        message: "Error Submittingggg Onboarding",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.UpdateOnboardingFailure());
    // console.log(error)
    HelperService.showToast({
      message: "Error Submitting Onboarding",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}
export function* submitForApproval(payload) {
  yield put(MenuActions.submitForApprovalLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.submitForApproval,
      resource: "submitForApproval",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.submitForApprovalSuccess,
      failureCallback: MenuActions.submitForApprovalFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);
    // console.log(successData[0].instanceStatus,"hhhhhh");
    if (successData) {
      //Todo : change it to userData
      yield put(MenuActions.submitForApprovalSuccess(payload));
      let user = yield select((state) => state.user);
      let token = user.token;
      let userId = user.loginDetails.userId;
      let asmId = user.loginDetails.userId;
      // successData[0].instanceStatus=="Rejected"?HelperService.showToast({
      // 	message: 'Rejected.',
      // 	duration: 1000,
      // 	buttonText: ''
      // }):HelperService.showToast({
      // 	message: 'Approved.',
      // 	duration: 1000,
      // 	buttonText: ''
      // })
      yield put(
        MenuActions.getCampaignRecord({
          token,
          userId: userId,
        })
      );
      yield put(
        UserActions.getOnboarding({
          token,
          userId: userId,
          asmId: asmId,
          draft: "Draft",
        })
      );
      // NavigationService.navigate('OnBoarding');
    } else {
      // console.log("aaaaa", error);
      yield put(MenuActions.submitForApprovalFailure());
      HelperService.showToast({
        message: "Error Submitting approval",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.submitForApprovalFailure());
    // console.log("ahjhhjjhaaaa", error);
    HelperService.showToast({
      message: "Error Submitting Approval",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* watchOnboardingForm() {
  while (true) {
    const { payload } = yield take(MenuTypes.CREATE_ONBOARDING);

    try {
    	const validationFailed = yield call(ValidationService.validateOnboardingForm, payload.form);
    	if (validationFailed) {
    		HelperService.showToast({
    			message: validationFailed.error_message,
    			duration: 2000,
    			buttonText: 'Okay'
    		});

    		yield put(MenuActions.OnBoardingValidationFailed(validationFailed));
    		continue;
    	}
    } catch (err) {
    	console.log("err",err)
    }

    var formPayload = _.cloneDeep(payload);

    yield call(createOnboarding, payload);
  }
}

export function* watchUpdateOnboardingForm() {
  while (true) {
    const { payload } = yield take(MenuTypes.UPDATE_ONBOARDING);

    // try {
    // 	const validationFailed = yield call(ValidationService.validateUpdateOnboardingForm, payload.form);
    // 	if (validationFailed) {
    // 		HelperService.showToast({
    // 			message: validationFailed.error_message,
    // 			duration: 2000,
    // 			buttonText: 'Okay'
    // 		});

    // 		yield put(MenuActions.OnBoardingValidationFailed(validationFailed));
    // 		continue;
    // 	}
    // } catch (err) {
    // 	console.log("err",err)
    // }
    var formPayload = _.cloneDeep(payload);
    console.log(payload, "payloadddd");
    yield call(UpdateOnboarding, payload);
  }
}

export function* getVisitOnboarding({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.getVisitOnboardingLoading());
    let data = yield call(MenuService.getVisitOnboarding, payload);
    if (data) {
      yield put(MenuActions.getVisitOnboardingSuccess(data));
    } else {
      console.log(error);
      yield put(MenuActions.getVisitOnboardingFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(MenuActions.getVisitOnboardingFailure());
  }
}
export function* getLastVisit({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.getLastVisitLoading());
    let data = yield call(MenuService.getLastVisit, payload);
    if (data) {
      yield put(MenuActions.getLastVisitSuccess(data));
    } else {
      console.log(error);
      yield put(MenuActions.getLastVisitFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(MenuActions.getLastVisitFailure());
  }
}

export function* showOnboardingModal({ payload }) {
  // console.log("payload",payload)
  let modalData = payload.modalData;
  const { content, heading, bodyFlexHeight } = modalData;
  yield put(MenuActions.showOnboardingModalSuccess());

  yield put(
    CommonActions.openModal({
      content,
      heading,
      bodyFlexHeight,
    })
  );
}

export function* CreateAgainstVisit({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.CreateAgainstVisitLoading());

    let successData = yield call(MenuService.CreateAgainstVisit, payload);
    if (successData) {
      yield put(MenuActions.CreateAgainstVisitSuccess(payload));
      yield put(MenuActions.clearOnboardingList());

      let user = yield select((state) => state.user);
      let token = user.token;

      yield put(
        MenuActions.getVisitOnboarding({
          onboardingId: payload.id,
          token,
        })
      );
      yield put(CommonActions.closeModal());
      HelperService.showToast({
        message: " Create successfully!!",
        duration: 2000,
        buttonText: "Okay",
      });
    } else {
      yield put(MenuActions.CreateAgainstVisitFailure());

      HelperService.showToast({
        message: " Create failed!!",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    console.log(error);
    yield put(MenuActions.CreateAgainstVisitFailure());
    HelperService.showToast({
      message: " Create failed!!",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}
export function* getCityList({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.getCityListLoading());
    let data = yield call(MenuService.getcity, payload);
    if (data) {
      data1 = HelperService.convertToSearchableListFormat({
        list: data,
        id_key: "Id",
        label_key: "Name",
      });

      yield put(MenuActions.getCityListSuccess(data1));
    } else {
      console.log(error);
      yield put(MenuActions.getCityListFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(MenuActions.getCityListFailure());
  }
}

export function* submitForApprovaReject({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.submitForApprovaRejectLoading());
    let data = yield call(MenuService.submitForApprovaReject, payload);
    if (data) {
      // data1 = HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id' , label_key: 'Name' });

      yield put(MenuActions.submitForApprovaRejectSuccess(data));
    } else {
      console.log(error);
      yield put(MenuActions.submitForApprovaRejectFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(MenuActions.submitForApprovaRejectFailure());
  }
}

export function* getCampaignAttendees({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.getCampaignAttendeesLoading());
    let data = yield call(MenuService.getCampaign, payload);
    if (data) {
      // data1 = HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id' , label_key: 'Name' });

      yield put(MenuActions.getCampaignAttendeesSuccess(data));
    } else {
      console.log(error);
      yield put(MenuActions.getCampaignAttendeesFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(MenuActions.getCampaignAttendeesFailure());
  }
}

export function* fetchTicket({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.fetchTicketLoading());
    let user = yield select((state) => state.user);

    payload.userId = user.loginDetails.userId;

    let data = yield call(MenuService.fetchTicket, payload);
    if (data) {
      // data1 = HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id' , label_key: 'Name' });

      yield put(MenuActions.fetchTicketSuccess(data));
    } else {
      // console.log(error);
      yield put(MenuActions.fetchTicketFailure());
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(MenuActions.fetchTicketFailure());
  }
}

export function* CreateTicket({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.CreateTicketLoading());
    let user = yield select((state) => state.user);

    let data = yield call(MenuService.createTicket, payload);
    if (data) {
      // data1 = HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id' , label_key: 'Name' });

      yield put(MenuActions.CreateTicketSuccess(data));
      yield put(MenuActions.clearTicketForm());

      yield put(
        MenuActions.fetchTicket({
          token: user.token,
        })
      );
      NavigationService.navigate("TicketSuccess");

      HelperService.showToast({
        message: " Created Ticket Successfully...",
        duration: 2000,
        buttonText: "Okay",
      });
    } else {
      // console.log(error);
      yield put(MenuActions.CreateTicketFailure());
      HelperService.showToast({
        message: " Create Ticket Failed!!",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(MenuActions.CreateTicketFailure());
    HelperService.showToast({
      message: " Create Ticket Failed!!",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* getCompetitorScheme({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  yield put(MenuActions.getCompetitorSchemeLoading());

  try {
    let successData = yield call(MenuService.getCompetitorScheme, payload);
    if (successData) {
      yield put(MenuActions.getCompetitorSchemeSuccess(successData));
    } else {
      yield put(MenuActions.getCompetitorSchemeFailure());
    }
  } catch (error) {
    yield put(MenuActions.getCompetitorSchemeFailure());
  }
}

export function* createCampaign({ payload }) {
  yield put(MenuActions.createCampaignLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.createCampaign,
      resource: "createCampaign",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.createCampaignSuccess,
      failureCallback: MenuActions.createCampaignFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);

    if (successData) {
      //Todo : change it to userData
      yield put(MenuActions.createCampaignSuccess(payload));
      // let user = yield select((state) => state.user);
      // let token = user.token;
      // let userId = user.loginDetails.userId;
      // let asmId = user.loginDetails.userId;

      // yield put(
      //   UserActions.getOnboarding({
      //     token,
      //     userId: userId,
      //     asmId: asmId,
      //     draft: "Draft",
      //   })
      // );
      HelperService.showToast({
        message: "Campaign Requisition is Successfully Created.",
        duration: 1000,
        buttonText: "",
      });
      NavigationService.navigate("CampaignSuccess");
      yield put(MenuActions.clearCampaignForm());
    } else {
      // console.log("aaaaa", error);
      yield put(MenuActions.createCampaignFailure());
      HelperService.showToast({
        message: "Error Creating Campaign Requisition",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.createCampaignFailure());
    // console.log("eeeeee", error);
    HelperService.showToast({
      message: "Error Creating Campaign Requisition",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* getCampaignRecord({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.getCampaignRecordLoading());
    let user = yield select((state) => state.user);

    payload.userId = user.loginDetails.userId;

    let data = yield call(MenuService.getCampaignRecord, payload);
    if (data) {
      // data1 = HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id' , label_key: 'Name' });

      yield put(MenuActions.getCampaignRecordSuccess(data));
    } else {
      // console.log(error);
      yield put(MenuActions.getCampaignRecordFailure());
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(MenuActions.getCampaignRecordFailure());
  }
}

export function* createCompetitorScheme({ payload }) {
  yield put(MenuActions.createCompetitorSchemeLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.createCompetitorScheme,
      resource: "createCompetitorScheme",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.createCompetitorSchemeSuccess,
      failureCallback: MenuActions.createCompetitorSchemeFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);

    if (successData) {
      //Todo : change it to userData
      yield put(MenuActions.createCompetitorSchemeSuccess(payload));
      // let user = yield select((state) => state.user);
      // let token = user.token;
      // let userId = user.loginDetails.userId;
      // let asmId = user.loginDetails.userId;

      // yield put(
      //   UserActions.getOnboarding({
      //     token,
      //     userId: userId,
      //     asmId: asmId,
      //     draft: "Draft",
      //   })
      // );
      HelperService.showToast({
        message: "Competitor Scheme Info is Successfully Created.",
        duration: 1000,
        buttonText: "",
      });

      NavigationService.navigate("CompetitorSuccess");
      yield put(MenuActions.clearCompetitorSchemeForm());
    } else {
      // console.log("aaaaa", error);
      yield put(MenuActions.createCompetitorSchemeFailure());
      HelperService.showToast({
        message: "Error Creating Competitor Scheme Info",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.createCompetitorSchemeFailure());
    // console.log("eeeeee", error);
    HelperService.showToast({
      message: "Error Creating Competitor Scheme Info",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* createAttendee({ payload }) {
  yield put(MenuActions.createAttendeeLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.createAttendee,
      resource: "createAttendee",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.createAttendeeSuccess,
      failureCallback: MenuActions.createAttendeeFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);
    let user = yield select((state) => state.user);

    if (successData) {
      console.log("fffffff", successData);
      //Todo : change it to userData
      yield put(MenuActions.createAttendeeSuccess(payload));
      // let user = yield select((state) => state.user);
      // let token = user.token;
      // let userId = user.loginDetails.userId;
      // let asmId = user.loginDetails.userId;

      // yield put(
      //   UserActions.getOnboarding({
      //     token,
      //     userId: userId,
      //     asmId: asmId,
      //     draft: "Draft",
      //   })
      // );
      HelperService.showToast({
        message: "Attendee is Successfully Created.",
        duration: 1000,
        buttonText: "",
      });

      NavigationService.navigate("CompleteTab");
      yield put(MenuActions.clearAttendeeForm());
      yield put(
        MenuActions.getCampaignAttendees({
          Id: payload.form.records[0].Campaign_Requisition__c,
          token: user.token,
        })
      );
    } else {
      // console.log("aaaaa", error);
      yield put(MenuActions.createAttendeeFailure());
      HelperService.showToast({
        message: "Error Creating Attendee",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.createAttendeeFailure());
    // console.log("eeeeee", error);
    HelperService.showToast({
      message: "Error Creating Attendee",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* updateCampaign({ payload }) {
  yield put(MenuActions.updateCampaignLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.updateCampaign,
      resource: "updateCampaign",
      callName: "update",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.updateCampaignSuccess,
      failureCallback: MenuActions.updateCampaignFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);
    let user = yield select((state) => state.user);
    if (successData) {
      //Todo : change it to userData
      yield put(MenuActions.updateCampaignSuccess(payload));
      // let user = yield select((state) => state.user);
      // let token = user.token;
      // let userId = user.loginDetails.userId;
      // let asmId = user.loginDetails.userId;

      // yield put(
      //   UserActions.getOnboarding({
      //     token,
      //     userId: userId,
      //     asmId: asmId,
      //     draft: "Draft",
      //   })
      // );
      HelperService.showToast({
        message: "Campaign Requisition is Successfully Updated.",
        duration: 1000,
        buttonText: "",
      });

      NavigationService.navigate("Campaign");
      yield put(
        MenuActions.getCampaignRecord({
          userId: user.loginDetails.userId,
          token: user.token,
        })
      );
    } else {
      // console.log("aaaaa", error);
      yield put(MenuActions.updateCampaignFailure());
      HelperService.showToast({
        message: "Error Updating Campaign Requisition",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.updateCampaignFailure());
    // console.log("eeeeee", error);
    HelperService.showToast({
      message: "Error Updating Campaign Requisition",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* getCompetitorMaster({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.getCompetitorMasterLoading());
    let user = yield select((state) => state.user);

    // payload.userId = user.loginDetails.userId;

    let data = yield call(MenuService.competitorMaster, payload);
    if (data) {
      // data1 = HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id' , label_key: 'Name' });

      yield put(MenuActions.getCompetitorMasterSuccess(data));
    } else {
      // console.log(error);
      yield put(MenuActions.getCompetitorMasterFailure());
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(MenuActions.getCompetitorMasterFailure());
  }
}

export function* CreateKycForm({ payload }) {
  console.log("payloadddddd", payload);
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(MenuActions.doNothing());
    return;
  }

  try {
    yield put(MenuActions.CreateKycFormLoading());
    let user = yield select((state) => state.user);
    let location = yield select((state) => state.common.currentLocation);
    // payload.userId = user.loginDetails.userId;

    let data = yield call(MenuService.createKycForm, payload);
    if (data) {
      // data1 = HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id' , label_key: 'Name' });

      yield put(MenuActions.CreateKycFormSuccess(data));
      yield put(
        RetailerActions.updateRetailerLocation({
          recordID: data.results[0].id,
          Latitude: String(location.latitude),
          Longitude: String(location.longitude),
          token: user.token,
        })
      );
      yield put(
        MenuActions.submitForApproval({
          payload: {
            requests: [
              {
                actionType: "Submit",
                contextId: data.results[0].id, //Account record id here
                nextApproverIds: [""],
                comments: "this is a test",
                contextActorId: user.loginDetails.userId, //Current User
                processDefinitionNameOrId: "KYC_Approval_Process",
                skipEntryCriteria: "true",
              },
            ],
          },
          token: user.token,
        })
      );
      NavigationService.navigate("RetailerList");
    } else {
      // console.log(error);
      yield put(MenuActions.CreateKycFormFailure());
    }
  } catch (error) {
    // console.log("Error", error);
    yield put(MenuActions.CreateKycFormFailure());
  }
}

export function* updateKyc({ payload }) {
  yield put(MenuActions.updateKycLoading());
  try {
    let offlinActionData = {
      apiCall: MenuService.updateKyc,
      resource: "updateKyc",
      callName: "update",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: MenuActions.updateKycSuccess,
      failureCallback: MenuActions.updateKycFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);
    let user = yield select((state) => state.user);
    if (successData) {
      //Todo : change it to userData
      yield put(MenuActions.updateKycSuccess(payload));
      // let user = yield select((state) => state.user);
      // let token = user.token;
      // let userId = user.loginDetails.userId;
      // let asmId = user.loginDetails.userId;

      // yield put(
      //   UserActions.getOnboarding({
      //     token,
      //     userId: userId,
      //     asmId: asmId,
      //     draft: "Draft",
      //   })
      // );
      HelperService.showToast({
        message: "Kyc is Successfully Updated.",
        duration: 1000,
        buttonText: "",
      });

      NavigationService.navigate("RetailerList");
      // yield put(
      //   MenuActions.getKycRecord({
      //     userId: user.loginDetails.userId,
      //     token: user.token,
      //   })
      // );
    } else {
      // console.log("aaaaa", error);
      yield put(MenuActions.updateKycFailure());
      HelperService.showToast({
        message: "Error Updating Kyc ",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(MenuActions.updateKycFailure());
    // console.log("eeeeee", error);
    HelperService.showToast({
      message: "Error Updating Kyc ",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}
