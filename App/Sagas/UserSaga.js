import { put, call, take, select } from "redux-saga/effects";
import { UserTypes } from "App/Stores/User/Actions";
import UserActions from "App/Stores/User/Actions";
import { userService } from "App/Services/Api/UserService";
import { ValidationService } from "App/Services/ValidationService";
import { Toast } from "native-base";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import { getConnectionStatus } from "App/Stores/Common/Selectors";
import ActionQueuesActions from "App/Stores/ActionQueues/Actions";
import { offlineApiCall } from "./OfflineSaga";
import StartupActions from "App/Stores/Startup/Actions";
import InfluencerActions from "../Stores/Influencers/Actions";
import SiteActions from "../Stores/Sites/Actions";
import CommonActions from "App/Stores/Common/Actions";
import MenuActions from "App/Stores/Menu/Actions";

import _ from "lodash";
import moment from "moment";
import StartDayActions from "App/Stores/StartDay/Actions";
import { startDayService } from "App/Services/Api/StartDayService";
import VisitsActions from "App/Stores/Visits/Actions";
var deviceId = HelperService.getDeviceId();

export function* loginUser(data) {
  yield put(UserActions.userLoginLoading());
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.userLoginFailure());
    HelperService.showToast({
      message: "Cannot Login. No Internet connection.",
      duration: 2000,
      buttonText: "Okay",
    });
    return;
  }

  data.device_id = deviceId;

  try {
    const user = yield call(userService.loginUser, data);

    if (user) {
      yield put(UserActions.userLoginSuccess(user));
      yield put(StartDayActions.fetchGlobleTokenSuccess(user));
      HelperService.showToast({
        message: " Login Successfull !!",
        duration: 1000,
        buttonText: "",
      });
      let userData = yield call(startDayService.fetchUserId, {
        url: user.id,
        access_token: user.access_token,
      });
      if (userData) {
        yield put(
          UserActions.updateLoginDetails({
            userId: userData && userData.user_id ? userData.user_id : "",
          })
        );

        yield put(
          StartDayActions.fetchGlobleUserDetail({
            token: user.access_token,
            show: "true",
          })
        );
        //yield put(UserActions.getOtp({userId: userData&&userData.user_id?userData.user_id:'',token: user.access_token}));
        yield put(StartupActions.startup());
      } else {
        console.log(error);
        yield put(UserActions.userLoginFailure());
        HelperService.showToast({
          message: "Login Failed!! Invalid Credentials",
          duration: 2000,
          buttonText: "Okay",
        });
      }

      //const appData = yield call(startDayService.getAppVersion, {access_token: user.access_token});

      //appData ? HelperService.checkAppVersion(appData.Name) : '';
      // to initiate fetch global token at regular intervals
      // yield call(userService.statusUser, {token: user.access_token, payload:{  "sessionstatus":"Logged in",
      // "userid":	userData.user_id}} )
      /* 	let userlogged = yield select(state => state.user)
			const {startDayTime,endDayTime,absentDayTime, } = userlogged;
			let startedToday = startDayTime ? HelperService.isToday(startDayTime) : false;
			 let endedToday = endDayTime ? HelperService.isToday(endDayTime) : false;
			let absentToday = absentDayTime ? HelperService.isToday(absentDayTime) : false;
			 if (startedToday) { // user has started the day
				NavigationService.navigateAndReset('DashboardScreen');
			  } else if (endedToday) { // user has ended the day
				NavigationService.navigateAndReset('DashboardScreen');
			  } else if (absentToday) { // user has ended the day
				NavigationService.navigateAndReset('DashboardScreen');
			  } else { // user has neither started or ended the day
				NavigationService.navigateAndReset('DashboardScreen');
			  }
			 */
    } else {
      yield put(UserActions.userLoginFailure());
      HelperService.showToast({
        message: "Login Failed!! Invalid Credentials",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(UserActions.userLoginFailure());
    console.log(error);
    HelperService.showToast({
      message: error,
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* startDay(data) {
  yield put(UserActions.userStartDayLoading());
  try {
    let offlinActionData = {
      apiCall: userService.startDay,
      resource: "startDay", //specify for which reducer we are using it
      callName: "create", //specify operation
      params: HelperService.decorateWithLocalId(data),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: UserActions.userStartDaySuccess,
      failureCallback: UserActions.userStartDayFailure,
      replaceServerParams: false,
    };

    const userData = yield call(offlineApiCall, offlinActionData);
    console.log(userData, "userData");
    if (userData) {
      yield put(UserActions.userStartDaySuccess(data));
      let message = "Marked Present Successfully";
      switch (data.Present_Type) {
        case "In Office":
          message = "Marked In Office Successfully";
          break;
        case "Work From Home":
          message = "Marked Work From Home Successfully";
          break;
        case "Market Visit":
          message = "Marked Present Successfully";
          break;
        default:
          message = "Marked Present Successfully";
      }
      HelperService.showToast({
        message: message,
        duration: 1000,
        buttonText: "",
      });
      yield put(UserActions.checkAttendance({ token: data.token }));
      NavigationService.navigateAndReset("VisitsScreen");
    } else {
      yield put(UserActions.userStartDayFailure());
      HelperService.showToast({
        message: "Cannot Repeat action, Marked Present Already.",
        duration: 2000,
        buttonText: "Okay",
        style: {
          backgroundColor: "green",
          zIndex: 5,
        },
      });
    }
  } catch (error) {
    console.log(error);
    yield put(UserActions.userStartDayFailure());
    HelperService.showToast({
      message: error,
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* endDay({ user }) {
  yield put(UserActions.userEndDayLoading());
  try {
    let offlinActionData = {
      apiCall: userService.endDay,
      resource: "endDay", //specify for which reducer we are using it
      callName: "create", //specify operation
      params: HelperService.decorateWithLocalId(user),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: UserActions.userEndDaySuccess,
      failureCallback: UserActions.userEndDayFailure,
      replaceServerParams: false,
    };

    const userData = yield call(offlineApiCall, offlinActionData);

    //console.log(userData);
    if (userData) {
      yield put(UserActions.userEndDaySuccess(user));
      HelperService.showToast({
        message: "Day Ended Successfully.",
        duration: 1000,
        buttonText: "",
      });
      NavigationService.navigateAndReset("CompletedDayScreen");
      setTimeout(() => {
        NavigationService.navigateAndReset("DashboardScreen");
      }, 2000);
    } else {
      yield put(UserActions.userEndDayFailure());
      HelperService.showToast({
        message: "Error Occurred , Try Again",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(UserActions.userEndDayFailure());
    HelperService.showToast({
      message: "Error Occurred , Try Again",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* markAbsent({ user }) {
  yield put(UserActions.userMarkedAbsentLoading());
  try {
    let offlinActionData = {
      apiCall: userService.markUserAbsent,
      resource: "markAbsent", //specify for which reducer we are using it
      callName: "create", //specify operation
      params: HelperService.decorateWithLocalId(user),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: UserActions.userMarkedAbsentSuccess,
      failureCallback: UserActions.userMarkedAbsentFailure,
      replaceServerParams: false,
    };

    const userData = yield call(offlineApiCall, offlinActionData);
    console.log(userData);
    if (userData) {
      //Todo : change it to user
      yield put(UserActions.userMarkedAbsentSuccess(user));
      HelperService.showToast({
        message: "Absent Marked successfully.",
        duration: 1000,
        buttonText: "",
      });
      NavigationService.navigateAndReset("DashboardScreen");
    } else {
      yield put(UserActions.userMarkedAbsentFailure());
      HelperService.showToast({
        message: "Cannot Repeat action, Absent Already Marked.",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(UserActions.userMarkedAbsentFailure());
    HelperService.showToast({
      message: "Cannot Repeat action, Absent Already Marked.",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* fetchAllAreas(payload) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }

  yield put(UserActions.fetchAllAreasLoading());

  try {
    let user = yield select((state) => state.user);
    payload.userId = user.loginDetails.userId;
    payload.token = user.token;

    let data = yield call(userService.getAgentAreas, payload);
    //console.log(data);
    if (data) {
      let data2 = HelperService.sortListFilter(data, "Name", "ASC");
      data2 = HelperService.convertToSearchableListFormat({
        list: data,
        id_key: "Id",
        label_key: "Beat_Code__c",
      });
      let data1 = HelperService.sortListFilter(data, "Name", "ASC");
      data1 = HelperService.convertToSearchableListFormat({
        list: data,
        id_key: "Id",
        label_key: "Name",
      });
      yield put(UserActions.fetchAllAreasSuccess({ data1, data2, data }));
      //yield put(UserActions.fetchareabeat(data));
    } else {
      yield put(UserActions.fetchAllAreasFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.fetchAllAreasFailure());
  }
}

export function* logoutUser(data) {
  console.log(data, "data");
  yield put(UserActions.userLogoutLoading());
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.userLogoutFailure());
    HelperService.showToast({
      message: "Cannot Logout. No Internet connection.",
      duration: 2000,
      buttonText: "Okay",
    });
    return;
  }
  try {
    let user = yield select((state) => state.user);

    let userData = yield call(userService.logoutUser, data);
    if (userData) {
      yield put(UserActions.userLogoutSuccess(userData.data));
      HelperService.showToast({
        message: "Logged Out successfully!!",
        duration: 500,
        buttonText: "",
      });
      NavigationService.navigateAndReset("LoginScreen");
    } else {
      yield put(UserActions.userLogoutFailure());
      HelperService.showToast({
        message: "Cannot Logout. ",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(UserActions.userLogoutFailure());
    HelperService.showToast({
      message: error,
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* fetchAgentDetails({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }

  try {
    let startday = yield select((state) => state.startday);

    payload.userId = startday.userDetailList.ManagerId;

    let data = yield call(userService.getAgentDetails, payload);
    if (data) {
      yield put(UserActions.fetchAgentDetailsSuccess(data));
    } else {
      console.log(error);
      yield put(UserActions.fetchAgentDetailsFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.fetchAgentDetailsFailure());
  }
}

export function* checkAttendance({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  try {
    let user = yield select((state) => state.user);

    payload.userId = user.loginDetails.userId;

    let data = yield call(userService.checkAttendance, payload);
    // console.log("data,",data)
    if (data && !_.isEmpty(data)) {
      yield put(UserActions.updateStartDayId(data));
      yield call(updateAttendance, data);
    } else {
      console.log("checkAttendance Error", error);
      yield put(UserActions.checkAttendanceFailure());
    }
  } catch (error) {
    console.log("checkAttendance Error", error);
    yield put(UserActions.checkAttendanceFailure());
  }
}

export function* fetchAllPsm(payload) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }

  try {
    let startday = yield select((state) => state.startday);

    payload.userId = startday.userDetailList.Id;

    let data = yield call(userService.getAllPSM, payload);
    if (data) {
      data = HelperService.sortListFilter(data, "Name", "ASC");
      yield put(
        UserActions.fetchAllPsmSuccess(
          HelperService.convertToSearchableListFormat({
            list: data,
            id_key: "Id",
            label_key: "Name",
          })
        )
      );
    } else {
      yield put(UserActions.fetchAllPsmFailure());
    }
  } catch (error) {
    console.log("error", error);
    yield put(UserActions.fetchAllPsmFailure());
  }
}

export function* updateAttendance(payload) {
  console.log("update", payload);

  try {
    let currentDate = HelperService.getCurrentTimestamp();
    let absentDayTime = payload.type == "Absent" ? currentDate : null;
    let startDayTime = null;
    let endDayTime = null;
    let recordId = payload.Id;
    // console.log(moment.unix(currentDate/1000).format("YYYY-MM-DD"));
    if (payload.Start_Day__c && !payload.End_Day__c) {
      startDayTime = moment.unix(currentDate / 1000).format("YYYY-MM-DD");
      startDayTime = startDayTime + " " + payload.Start_Time__c;
      startDayTime = HelperService.convertStringToDate(startDayTime);
    }

    if (payload.Start_Day__c && payload.End_Day__c) {
      endDayTime = currentDate;
    }

    yield put(
      UserActions.updateAgentAttendanceDetails({
        absentDayTime,
        startDayTime,
        endDayTime,
        recordId,
      })
    );
  } catch (error) {
    console.log("updateAttendance: ", error);
  }
}

export function* fetchPjp({ payload }) {
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  yield put(UserActions.fetchPjpLoading());
  try {
    let user = yield select((state) => state.user);

    //   payload.userId = user.loginDetails.userId;
    //   payload.m="july"
    let successData = yield call(userService.fetchPjp, payload);
    if (successData) {
      //console.log("successData",successData['header'])
      yield put(
        UserActions.fetchPjpSuccess(
          successData["header"] != null ? successData["header"] : ""
        )
      );

      let data = [];
      data =
        successData["header"] && successData["header"].length
          ? successData["header"].filter((obj) => obj.OwnerId == payload.userId)
          : [];

      yield put(
        UserActions.fetchBeatPjp({
          token: payload.token,
          beatId: data && data.length ? data[0].Id : "",
        })
      );
      yield put(
        UserActions.fetchBeatTotalOutlet(
          successData["party_count"] != null ? successData["party_count"] : ""
        )
      );

      // let dataList = successData['header'];

      //  let data = yield call(searchInDisplayList, payload)
      let pjpSearchableList = HelperService.convertToSearchableListFormat({
        list: successData["header"] != null ? successData["header"] : [],
        id_key: "Id",
        label_key: "Name",
      });

      //   yield put( VisitsActions.changeAddPlannedVisitsSearchFilters({ edited_field: 'beat', edited_value: pjpSearchableList[0].id }))

      //yield put(LocalActions.fetchRetailerList(retailerSearchableList));
      //yield put(SiteActions.makeRetailerSearchableList(retailerSearchableList));
      //yield put(InfluencerAction.makeRetailerSearchableList(retailerSearchableList));
      //yield put(UserActions.makePjpSearchList(pjpSearchableList));
      yield put(
        UserActions.fetchFilteredPjpDisplayListSuccess(pjpSearchableList)
      );
    } else {
      yield put(UserActions.fetchPjpFailure());
      yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.fetchPjpFailure());
    yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
  }
}

export function* searchInDisplayList(payload) {
  let filterResultsData = [];
  let pjpDisplayList = yield select((state) => state.user.pjpList);

  pjpDisplayList.map((obj) => {
    if (obj.Month__c == payload.m) {
      filterResultsData = filterResultsData.concat(obj);
    }
  });

  return filterResultsData;
}

export function* watchUserLoginRequest() {
  while (true) {
    const { data } = yield take(UserTypes.LOGIN_USER);

    try {
      const validationFailed = yield call(
        ValidationService.validateLoginForm,
        data
      );
      if (validationFailed) {
        HelperService.showToast({
          message: validationFailed.error_message,
          duration: 2000,
          buttonText: "Okay",
        });
        yield put(UserActions.userLoginValidationFailed(validationFailed));
        continue;
      }
    } catch (err) {}

    yield call(loginUser, data);
  }
}

export function* watchUserStartDayRequest() {
  while (true) {
    const { user } = yield take(UserTypes.START_USER_DAY);
    try {
      const validationFailed = yield call(
        ValidationService.validateStartDay,
        user
      );
      if (validationFailed) {
        HelperService.showToast({
          message: validationFailed.error_message,
          duration: 2000,
          buttonText: "Okay",
        });
        yield put(UserActions.userStartDayValidationFailed(validationFailed));
        continue;
      }
    } catch (err) {
      console.log(err);
    }
    yield call(startDay, user);
  }
}

export function* watchUserLogoutRequest() {
  while (true) {
    const { data } = yield take(UserTypes.LOGOUT_USER);

    yield call(logoutUser, data);
  }
}

export function* watchSubmitBeatPlan() {
  while (true) {
    const { payload } = yield take(UserTypes.CREATE_PJP);
    let user = yield select((state) => state.user);
    let startDay = yield select((state) => state.startDay);

    var formPayload = _.cloneDeep(payload);
    //console.log(formPayload)

    //console.log(formPayload)

    yield call(createPjp, formPayload);
  }
}
export function* createPjp(payload) {
  yield put(UserActions.createPjpLoading());
  try {
    let offlinActionData = {
      apiCall: userService.createPjp,
      resource: "createPjp",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: UserActions.createPjpSuccess,
      failureCallback: UserActions.createPjpFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);
    console.log("successData", successData);
    if (successData) {
      //Todo : change it to userData
      console.log("successData",successData)
      if (successData.result.length == 0) {
        yield put(UserActions.createPjpSuccess(payload));
        HelperService.showToast({
          message: "Beat is already added.",
          duration: 1000,
          buttonText: "",
        });
      } else {
        yield put(UserActions.createPjpSuccess(payload));
        NavigationService.navigate("BeatPlan");
        HelperService.showToast({
          message: "Beat Added.",
          duration: 1000,
          buttonText: "",
        });
      }

      yield put(CommonActions.closeModal());
      //yield call(refreshVisitsDisplayList);
      //yield call(refreshVisitsStorageList);
    } else {
      console.log("aaaaa", error);
      yield put(UserActions.createPjpFailure());
      HelperService.showToast({
        message: "Error Submitting beat",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(UserActions.createPjpFailure());
    console.log(error);
    HelperService.showToast({
      message: "Error Submitting beat",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

// getOnboardingSuccess:['payload'],
// getOnboardingFailure:null,
// getOnboardingLoading:null,
// getOnboardingLoadingStop:null,
export function* getOnboarding({ payload }) {
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  yield put(UserActions.getOnboardingLoading());
  try {
    let user = yield select((state) => state.user);

    payload.userId = user.loginDetails.userId;

    let successData = yield call(userService.getOnboarding, payload);
    if (successData) {
      yield put(UserActions.getOnboardingSuccess(successData));
    } else {
      yield put(UserActions.getOnboardingFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.getOnboardingFailure());
  }
}
export function* getImageOnboarding({ payload }) {
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  yield put(UserActions.getImageOnboardingLoading());
  try {
    let user = yield select((state) => state.user);

    payload.userId = user.loginDetails.userId;

    let successData = yield call(userService.getImageOnboarding, payload);
    if (successData) {
      yield put(UserActions.getImageOnboardingSuccess(successData));
      yield put(
        MenuActions.changeImageForm({
          edited_field: "image",
          edited_value: "data:image/jpeg;base64," + successData.Uss,
        })
      );
    } else {
      yield put(UserActions.getImageOnboardingFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.getImageOnboardingFailure());
  }
}

export function* fetchBeatPjp({ payload }) {
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  yield put(UserActions.fetchBeatPjpLoading());
  try {
    let user = yield select((state) => state.user);
    // let beat = yield select(state => state.user)

    //  payload.beatId = user.filteredPjpDisplayData[0].id;
    //   payload.m="july"
    let successData = yield call(userService.fetchBeatPjp, payload);
    if (successData) {
      console.log(successData, "pjp");
      yield put(UserActions.fetchBeatPjpSuccess(successData));

      yield put(
        VisitsActions.changeAddPlannedVisitsSearchFilters({
          edited_field: "beat",
          edited_value: "",
        })
      );

      //  let data = yield call(searchInDisplayList, payload)
      //  let pjpSearchableList = HelperService.convertToSearchableListFormat({ list: successData, id_key: 'Id',label_key:'Name'});

      //yield put(LocalActions.fetchRetailerList(retailerSearchableList));
      //yield put(SiteActions.makeRetailerSearchableList(retailerSearchableList));
      //yield put(InfluencerAction.makeRetailerSearchableList(retailerSearchableList));
      //yield put(UserActions.makePjpSearchList(pjpSearchableList));
      // yield put(UserActions.fetchFilteredPjpDisplayListSuccess(pjpSearchableList));
    } else {
      yield put(UserActions.fetchBeatPjpFailure());
      // yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.fetchBeatPjpFailure());
    // yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
  }
}

export function* fetchTotalOutlet({ payload }) {
  // console.log("payload",payload)
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  yield put(UserActions.fetchTotalOutletLoading());
  try {
    let user = yield select((state) => state.user);

    payload.token = user.access_token;
    // let beat_c = payload.beatId
    let successData = yield call(userService.fetchTotalOutlet, payload);
    if (successData) {
      // console.log("successData",successData)
      yield put(
        UserActions.fetchTotalOutletSuccess({
          edited_field: payload.Beat__c,
          edited_value: successData,
        })
      );

      //  let data = yield call(searchInDisplayList, payload)
      //  let pjpSearchableList = HelperService.convertToSearchableListFormat({ list: successData, id_key: 'Id',label_key:'Name'});

      //yield put(LocalActions.fetchRetailerList(retailerSearchableList));
      //yield put(SiteActions.makeRetailerSearchableList(retailerSearchableList));
      //yield put(InfluencerAction.makeRetailerSearchableList(retailerSearchableList));
      //yield put(UserActions.makePjpSearchList(pjpSearchableList));
      // yield put(UserActions.fetchFilteredPjpDisplayListSuccess(pjpSearchableList));
    } else {
      yield put(UserActions.fetchTotalOutletFailure());
      // yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.fetchBeatPjpFailure());
    // yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
  }
}

export function* pressTagPjp({ payload }) {
  // console.log("payload",payload)
  let modalData = payload.modalData;
  const { content, heading, bodyFlexHeight } = modalData;
  yield put(UserActions.pressTagPjpSuccess());

  yield put(
    CommonActions.openModal({
      content,
      heading,
      bodyFlexHeight,
    })
  );
}

export function* managerList({ payload }) {
  const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  yield put(UserActions.managerListLoading());
  try {
    let user = yield select((state) => state.user);
    let successData = yield call(userService.managerList, payload);
    if (successData) {
      yield put(UserActions.managerListSuccess(successData));

      //  let data = yield call(searchInDisplayList, payload)
      //  let pjpSearchableList = HelperService.convertToSearchableListFormat({ list: successData, id_key: 'Id',label_key:'Name'});
    } else {
      yield put(UserActions.managerListFailure());
      // yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
    }
  } catch (error) {
    console.log("Error", error);
    yield put(UserActions.managerListFailure());
    // yield put(UserActions.fetchFilteredPjpDisplayListSuccess([]));
  }
}
// submitApprovalSuccess:['payload'],
// submitApprovalFailure:null,
// submitApprovalLoading:null,
export function* submitApproval(payload) {
  yield put(UserActions.submitApprovalLoading());
  try {
    let offlinActionData = {
      apiCall: userService.submitApproval,
      resource: "submitApproval",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: UserActions.submitApprovalSuccess,
      failureCallback: UserActions.submitApprovalFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);
    let user = yield select((state) => state.user);
    let userid = user.loginDetails.userId;
    let token = user.token;
    let month = user.monthNumber;
    if (successData) {
      //Todo : change it to userData
      // console.log("successData",successData)

      yield put(UserActions.submitApprovalSuccess(payload));
      HelperService.showToast({
        message: "Send Approval successfull.",
        duration: 1000,
        buttonText: "",
      });
      yield put(
        UserActions.fetchPjp({
          userId: userid,
          m: month,
          token: token,
        })
      );
    } else {
      yield put(UserActions.submitApprovalFailure());
      HelperService.showToast({
        message: "Error Sending Approval",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(UserActions.submitApprovalFailure());
    console.log(error);
    HelperService.showToast({
      message: "Error Sending Approval",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}
export function* approveRejectPjp(payload) {
  yield put(UserActions.submitApprovalLoading());
  try {
    let offlinActionData = {
      apiCall: userService.approveRejectPjp,
      resource: "approveRejectPjp",
      callName: "create",
      params: HelperService.decorateWithLocalId(payload),
      timestamp: HelperService.getCurrentTimestamp(),
      successCallback: UserActions.approveRejectPjpSuccess,
      failureCallback: UserActions.approveRejectPjpFailure,
      replaceServerParams: false,
    };

    const successData = yield call(offlineApiCall, offlinActionData);

    if (successData) {
      //Todo : change it to userData

      let user = yield select((state) => state.user);
      let userid = user.loginDetails.userId;
      let token = user.token;
      let month = user.monthNumber;
      yield put(UserActions.approveRejectPjpSuccess(payload));
      yield put(
        UserActions.fetchPjp({
          userId: userid,
          m: month,
          token: token,
        })
      );
      HelperService.showToast({
        message: "Send  successfull.",
        duration: 1000,
        buttonText: "",
      });
    } else {
      yield put(UserActions.approveRejectPjpFailure());
      HelperService.showToast({
        message: "Error ",
        duration: 2000,
        buttonText: "Okay",
      });
    }
  } catch (error) {
    yield put(UserActions.approveRejectPjpFailure());
    console.log(error);
    HelperService.showToast({
      message: "Error ",
      duration: 2000,
      buttonText: "Okay",
    });
  }
}

export function* getDivision({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }

  try {
    let startday = yield select((state) => state.startday);

    payload.userId = 1;

    let data = yield call(userService.getDivision, payload);
    if (data) {
      // data =HelperService.sortListFilter(data, 'Name' , 'ASC');
      yield put(
        UserActions.getDivisionSuccess(
          HelperService.convertToSearchableListFormat({
            list: data,
            id_key: "Id",
            label_key: "Name",
          })
        )
      );
    } else {
      console.log("errorvvv", error);
      yield put(UserActions.getDivisionFailure());
    }
  } catch (error) {
    console.log("error", error);
    yield put(UserActions.getDivisionFailure());
  }
}

export function* getBranchMaster({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }

  try {
    let startday = yield select((state) => state.startday);

    let data = yield call(userService.getBranchMaster, payload);
    if (data) {
      data = HelperService.sortListFilter(data, "Name", "ASC");
      yield put(
        UserActions.getBranchMasterSuccess(
          HelperService.convertToSearchableListFormatWithCode({
            list: data,
            id_key: "Id",
            label_key: "Branch_Name__c",
            name_key: "Name",
          })
        )
      );
    } else {
      console.log("errorvvv", error);
      yield put(UserActions.getBranchMasterFailure());
    }
  } catch (error) {
    console.log("error", error);
    yield put(UserActions.getBranchMasterFailure());
  }
}

export function* getAllPartMaster({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(UserActions.doNothing());
    return;
  }
  yield put(UserActions.getAllPartMasterLoading());
  try {
    let startday = yield select((state) => state.startday);

    let data = yield call(userService.getAllPartMaster, payload);
    if (data) {
      data = HelperService.sortListFilter(data, "Name", "ASC");
      if (payload.type == "bulk") {
        yield put(UserActions.getAllPartBulkMasterSuccess(data));
      } else {
        yield put(UserActions.getAllPartMasterSuccess(data));
      }
      // yield put(UserActions.getAllPartMasterSuccess(HelperService.convertToSearchableListFormat({ list: data, id_key: 'Id', label_key: 'Name' })));
    } else {
      // console.log('errorvvv', Error)
      yield put(UserActions.getAllPartMasterFailure());
    }
  } catch (error) {
    // console.log('error', error)
    yield put(UserActions.getAllPartMasterFailure());
  }
}
