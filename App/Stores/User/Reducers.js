/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from "./InitialState";
import { createReducer } from "reduxsauce";
import { UserTypes } from "./Actions";
import _ from "lodash";

export const userLoginLoading = (state) => ({
  ...state,
  userLoginIsLoading: true,
});

export const userLoginSuccess = (state, { user }) => ({
  ...state,
  id: user.Id,
  token: user.access_token,
  userLoginIsLoading: false,
  userLoginErrorMessage: null,
  ...user,
});

export const userLoginFailure = (state, { errorMessage }) => ({
  ...state,
  id: null,
  token: null,
  userLoginIsLoading: false,
  userLoginErrorMessage: errorMessage,
});

export const changeLoginForm = (state, { user }) => ({
  ...state,
  username: user.username,
  password: user.password,
  validation: { ...INITIAL_STATE.validation },
});

export const userLoginValidationFailed = (state, { validation }) => ({
  ...state,
  validation: { ...state.validation, ...validation },
});

export const updateUserLocation = (state, { location }) => ({
  ...state,
  latitude: location.latitude,
  longitude: location.longitude,
});

export const updateMonthNumber = (state, { payload }) => ({
  ...state,
  monthNumber: _.cloneDeep(payload),
});

export const updateUserStartDayTime = (state, { startDayTime }) => ({
  ...state,
  startDayTime: startDayTime.AttendanceDate,
});

export const updateUserArea = (state, { area }) => ({
  ...state,
  area: area,
  validation: { ...INITIAL_STATE.validation },
});

export const fetchAllAreasLoading = (state) => ({
  ...state,
  fetchAllAreasLoading: true,
});
export const updateLoginDetails = (state, { payload }) => ({
  ...state,
  loginDetails: payload,
});

export const fetchAllAreasSuccess = (state, { areas }) => ({
  ...state,
  agentAreas: areas.data2,
  agentCity: areas.data1,
  agentbeat: areas.data,
  fetchAllAreasLoading: false,
});

export const fetchAllAreasFailure = (state, { areas }) => ({
  ...state,
  fetchAllAreasLoading: false,
});

export const userStartDayLoading = (state) => ({
  ...state,
  userStartDayLoading: true,
});

export const userStartDayLoadingStop = (state) => ({
  ...state,
  userStartDayLoading: false,
});
export const updateStartDayId = (state, { payload }) => ({
  ...state,
  startDayId: payload,
  // userStartDayLoading: false
});

export const userStartDaySuccess = (state, { user }) => ({
  ...state,
  endDayTime: null,
  absentDayTime: null,
  //startDayDate:user.AttendanceDate,
  startDayTime: user.StartTime,
  logitude: user.Logitude,
  latitude: user.Latitude,
  // area: user.area,
  //startDetails:user,
  userStartDayLoading: false,
});

export const userStartDayFailure = (state) => ({
  ...state,
  endDayTime: null,
  startDayTime: null,
  absentDayTime: null,
  userStartDayLoading: false,
});

export const userEndDaySuccess = (state, { user }) => ({
  ...state,
  endDayTime: user.EndTime,
  //startDayTime: user.AttendanceDate,
  //endDayDate:user.EndTime,
  absentDayTime: null,
  userEndDayLoading: false,
});

export const userEndDayLoading = (state) => ({
  ...state,
  userEndDayLoading: true,
});

export const userEndDayLoadingStop = (state) => ({
  ...state,
  userEndDayLoading: false,
});

export const userEndDayFailure = (state) => ({
  ...state,
  endDayTime: null,
  userEndDayLoading: false,
});

export const userMarkedAbsentSuccess = (state, { user }) => ({
  ...state,
  absentDayTime: user.StartTime,
  startDayTime: null,
  endDayTime: null,
  userMarkedAbsentLoading: false,
});

export const userMarkedAbsentFailure = (state) => ({
  ...state,
  absentDayTime: null,
  startDayTime: null,
  endDayTime: null,
  userMarkedAbsentLoading: false,
});

export const userMarkedAbsentLoading = (state) => ({
  ...state,
  userMarkedAbsentLoading: true,
});
export const userMarkedAbsentLoadingStop = (state) => ({
  ...state,
  userMarkedAbsentLoading: false,
});

export const updateUserMarkedAbsentReason = (state, { reason }) => ({
  ...state,
  absentReason: reason.absentReason,
});

export const userStartDayValidationFailed = (state, { validation }) => ({
  ...state,
  userStartDayLoading: false,
  validation: { ...state.validation, ...validation },
});

export const fetchAgentDetailsSuccess = (state, { payload }) => ({
  ...state,
  agentDetails: payload,
  isASM: payload["Name"] == "ASM",
});

export const fetchAgentDetailsFailure = (state, { payload }) => ({
  ...state,
  agentDetails: {},
});

export const updateAgentAttendanceDetails = (state, { payload }) => ({
  ...state,
  absentDayTime: payload.absentDayTime,
  startDayTime: payload.startDayTime,
  endDayTime: payload.endDayTime,
  recordId: payload.recordId,
});

export const checkAttendanceFailure = (state, { payload }) => ({
  ...state,
  startDayTime: null,
  endDayTime: null,
  absentDayTime: null,
});

export const doNothing = (state) => ({
  ...state,
});

export const fetchAllPsmLoading = (state) => ({
  ...state,
  fetchAllPsmLoader: true,
});

export const fetchAllPsmLoadingStop = (state) => ({
  ...state,
  fetchAllPsmLoader: false,
});

export const fetchAllPsmSuccess = (state, { payload }) => ({
  ...state,
  fetchAllPsmLoader: false,
  psmList: payload,
});

export const fetchAllPsmFailure = (state, { payload }) => ({
  ...state,
  fetchAllPsmLoader: false,
});

export const userLogoutLoading = (state) => ({
  ...state,
  userLogoutIsLoading: true,
});

export const userLogoutSuccess = (state, { user }) => ({
  ...INITIAL_STATE,
});

export const userLogoutFailure = (state, { errorMessage }) => ({
  ...state,
  id: null,
  token: null,
  userLogoutIsLoading: false,
  userLoginErrorMessage: errorMessage,
});

export const fetchPjpLoading = (state) => ({
  ...state,
  fetchPjpLoading: true,
});

export const fetchPjpSuccess = (state, { payload }) => ({
  ...state,
  pjpList: payload,
  fetchPjpLoading: false,
});
export const makePjpSearchListSuccess = (state, { payload }) => ({
  ...state,
  pjpSearchList: payload,
  makePjpSearchListLoading: false,
});
export const makePjpSearchListLoading = (state) => ({
  ...state,
  makePjpSearchListLoading: true,
});
export const makePjpSearchListFailure = (state, { payload }) => ({
  ...state,
  makePjpSearchListLoading: false,
});
export const fetchPjpFailure = (state, { errorMessage }) => ({
  ...state,
  fetchPjpLoading: false,
  pjpList: [],
});

export const fetchFilteredPjpDisplayListSuccess = (state, { payload }) => {
  return {
    ...state,
    filteredPjpDisplayData: _.cloneDeep(payload),
  };
};

export const updateSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.searchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;

  return {
    ...state,
    searchFilters: {
      ...state.searchFilters,
      ...updated_search_filters,
    },
  };
};
export const addBeatList = (state, { payload }) => {
  return {
    ...state,
    beatlistadded: payload,
  };
};

export const createPjpSuccess = (state, { payload }) => {
  return {
    ...state,
    beatlistadded: {},
    createPjpLoading: false,
  };
};

export const createPjpFailure = (state, { payload }) => {
  return {
    ...state,
    createPjpLoading: false,
  };
};

export const createPjpLoading = (state, { payload }) => {
  return {
    ...state,
    createPjpLoading: true,
  };
};

export const createPjpLoadingStop = (state, { payload }) => {
  return {
    ...state,
    createPjpLoading: false,
  };
};

export const getOnboardingSuccess = (state, { payload }) => ({
  ...state,
  onboardingList: payload,
  getOnboardingLoading: false,
});

export const getOnboardingFailure = (state, { payload }) => {
  return {
    ...state,
    onboardingList: [],
    getOnboardingLoading: false,
  };
};
export const getOnboardingLoading = (state, { payload }) => {
  return {
    ...state,
    getOnboardingLoading: true,
  };
};
export const getOnboardingLoadingStop = (state, { payload }) => {
  return {
    ...state,
    getOnboardingLoading: false,
  };
};
// getImageOnboardingSuccess:['payload'],
export const getImageOnboardingSuccess = (state, { payload }) => ({
  ...state,
  getonboardingImage: payload,
  getImageOnboardingLoading: false,
});
export const getImageOnboardingFailure = (state, { payload }) => {
  return {
    ...state,
    getonboardingImage: [],
    getImageOnboardingLoading: false,
  };
};
export const getImageOnboardingLoading = (state, { payload }) => {
  return {
    ...state,
    getImageOnboardingLoading: true,
  };
};

export const fetchBeatPjpLoading = (state) => ({
  ...state,
  fetchBeatPjpLoading: true,
});

export const fetchBeatPjpSuccess = (state, { payload }) => ({
  ...state,
  filteredBeatPjpDisplayData: payload,
  fetchBeatPjpLoading: false,
});
export const fetchBeatPjpFailure = (state, { errorMessage }) => ({
  ...state,
  fetchBeatPjpLoading: false,
  filteredBeatPjpDisplayData: [],
});

export const fetchTotalOutletLoading = (state) => ({
  ...state,
  fetchTotalOutletLoader: true,
});

// export const fetchTotalOutletSuccess = (state, {payload}) => ({
//   ...state,
//   totalOutlet: payload,
//   fetchTotalOutletLoader: false

// });
export const fetchTotalOutletSuccess = (state, { payload }) => {
  // console.log("payload",payload)
  let updated_fetchTotalOutletSuccess = _.cloneDeep(state.totalOutlet);
  updated_fetchTotalOutletSuccess[payload.edited_field] = payload.edited_value;

  return {
    ...state,
    totalOutlet: {
      ...state.totalOutlet,
      ...updated_fetchTotalOutletSuccess,
    },
  };
};
export const fetchTotalOutletFailure = (state, { errorMessage }) => ({
  ...state,
  fetchTotalOutletLoader: false,
  totalOutlet: {},
});
export const pressTagPjpSuccess = (state, { payload }) => {
  return {
    ...state,
  };
};

export const managerListSuccess = (state, { payload }) => {
  // console.log("payload",payload)
  // let updated_fetchTotalOutletSuccess = _.cloneDeep(state.totalOutlet);
  // updated_fetchTotalOutletSuccess[payload.edited_field] = payload.edited_value;

  return {
    ...state,
    managerListData: payload,
    managerListLoader: false,
  };
};
export const managerListFailure = (state, { errorMessage }) => ({
  ...state,
  managerListLoader: false,
  managerListData: [],
});
export const managerListLoading = (state) => ({
  ...state,
  managerListLoader: true,
});

export const selectManager = (state, { payload }) => {
  // console.log("payload",payload)
  let updated_selectManager = _.cloneDeep(state.selectManagerForm);
  updated_selectManager[payload.edited_field] = payload.edited_value;

  return {
    ...state,
    selectManagerForm: updated_selectManager,
  };
};

export const fetchBeatTotalOutlet = (state, { payload }) => {
  // console.log("payload",payload)
  return {
    ...state,
    BeatTotalOutlet: payload,
  };
};

export const submitApprovalLoading = (state) => ({
  ...state,
  submitApprovalLoader: true,
});

export const submitApprovalSuccess = (state) => ({
  ...state,
  submitApprovalLoader: false,
});

export const submitApprovalFailure = (state) => ({
  ...state,
  submitApprovalLoader: false,
});
// approveRejectLocalPjpSuccess:['payload'],
// 	approveRejectLocalPjpFailure:null,
// 	approveRejectLocalPjpLoading:null,
export const approveRejectPjpLoading = (state) => ({
  ...state,
  pjpform: {},
  approveRejectLocalPjpLoader: true,
});

export const approveRejectPjpSuccess = (state) => ({
  ...state,
  approveRejectLocalPjpLoader: false,
});

export const approveRejectPjpFailure = (state) => ({
  ...state,
  approveRejectLocalPjpLoader: false,
});

export const getDivisionLoading = (state) => ({
  ...state,
  pjpform: {},
  getDivisionLoading: true,
});

export const getDivisionSuccess = (state, { payload }) => ({
  ...state,
  divisionlist: payload,
  getDivisionLoading: false,
});

export const getDivisionFailure = (state) => ({
  ...state,
  getDivisionLoading: false,
});

export const getBranchMasterLoading = (state) => ({
  ...state,

  getBranchMasterLoading: true,
});

export const getBranchMasterSuccess = (state, { payload }) => ({
  ...state,
  branchMasterList: payload,
  getBranchMasterLoading: false,
});

export const getBranchMasterFailure = (state) => ({
  ...state,
  getBranchMasterLoading: false,
});

export const getAllPartMasterLoading = (state) => ({
  ...state,

  getAllPartMasterLoading: true,
});

export const getAllPartMasterSuccess = (state, { payload }) => ({
  ...state,
  AllPartMasterList: payload,
  getAllPartMasterLoading: false,
});

export const getAllPartBulkMasterSuccess = (state, { payload }) => ({
  ...state,
  AllPartBulkMasterList: payload,
  getAllPartMasterLoading: false,
});

export const getAllPartMasterFailure = (state) => ({
  ...state,
  getAllPartMasterLoading: false,
});

export const clearPart = (state, { payload }) => {
  return {
    ...state,
    AllPartBulkMasterList: [],
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_LOGIN_LOADING]: userLoginLoading,
  [UserTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [UserTypes.USER_LOGIN_FAILURE]: userLoginFailure,

  [UserTypes.UPDATE_LOGIN_DETAILS]: updateLoginDetails,
  [UserTypes.CLEAR_PART]: clearPart,


  [UserTypes.USER_LOGOUT_LOADING]: userLogoutLoading,
  [UserTypes.USER_LOGOUT_SUCCESS]: userLogoutSuccess,
  [UserTypes.USER_LOGOUT_FAILURE]: userLogoutFailure,

  [UserTypes.CHANGE_LOGIN_FORM]: changeLoginForm,
  [UserTypes.USER_LOGIN_VALIDATION_FAILED]: userLoginValidationFailed,
  [UserTypes.USER_START_DAY_VALIDATION_FAILED]: userStartDayValidationFailed,
  [UserTypes.UPDATE_USER_LOCATION]: updateUserLocation,
  [UserTypes.UPDATE_USER_START_DAY_TIME]: updateUserStartDayTime,
  [UserTypes.UPDATE_USER_AREA]: updateUserArea,
  [UserTypes.FETCH_ALL_AREAS_LOADING]: fetchAllAreasLoading,
  [UserTypes.FETCH_ALL_AREAS_SUCCESS]: fetchAllAreasSuccess,
  [UserTypes.FETCH_ALL_AREAS_FAILURE]: fetchAllAreasFailure,
  [UserTypes.USER_START_DAY_SUCCESS]: userStartDaySuccess,
  [UserTypes.USER_START_DAY_FAILURE]: userStartDayFailure,
  [UserTypes.USER_START_DAY_LOADING]: userStartDayLoading,
  [UserTypes.USER_END_DAY_SUCCESS]: userEndDaySuccess,
  [UserTypes.USER_END_DAY_FAILURE]: userEndDayFailure,
  [UserTypes.USER_END_DAY_LOADING]: userEndDayLoading,
  [UserTypes.USER_MARKED_ABSENT_SUCCESS]: userMarkedAbsentSuccess,
  [UserTypes.USER_MARKED_ABSENT_FAILURE]: userMarkedAbsentFailure,
  [UserTypes.USER_MARKED_ABSENT_LOADING]: userMarkedAbsentLoading,
  [UserTypes.USER_MARKED_ABSENT_LOADING_STOP]: userMarkedAbsentLoadingStop,
  [UserTypes.USER_START_DAY_LOADING_STOP]: userStartDayLoadingStop,
  [UserTypes.USER_END_DAY_LOADING_STOP]: userEndDayLoadingStop,
  [UserTypes.UPDATE_USER_MARKED_ABSENT_REASON]: updateUserMarkedAbsentReason,
  [UserTypes.FETCH_AGENT_DETAILS_SUCCESS]: fetchAgentDetailsSuccess,
  [UserTypes.FETCH_AGENT_DETAILS_FAILURE]: fetchAgentDetailsFailure,
  [UserTypes.UPDATE_AGENT_ATTENDANCE_DETAILS]: updateAgentAttendanceDetails,
  [UserTypes.CHECK_ATTENDANCE_FAILURE]: checkAttendanceFailure,
  [UserTypes.DO_NOTHING]: doNothing,

  [UserTypes.MAKE_PJP_SEARCH_LIST_SUCCESS]: makePjpSearchListSuccess,
  [UserTypes.MAKE_PJP_SEARCH_LIST_LOADING]: makePjpSearchListLoading,
  [UserTypes.MAKE_PJP_SEARCH_LIST_FAILURE]: makePjpSearchListFailure,
  //[UserTypes.DO_NOTHING]                      :   fetchAllPsm,
  [UserTypes.FETCH_ALL_PSM_LOADING]: fetchAllPsmLoading,
  [UserTypes.FETCH_ALL_PSM_LOADING_STOP]: fetchAllPsmLoadingStop,
  [UserTypes.FETCH_ALL_PSM_SUCCESS]: fetchAllPsmSuccess,
  [UserTypes.FETCH_ALL_PSM_FAILURE]: fetchAllPsmFailure,
  [UserTypes.UPDATE_START_DAY_ID]: updateStartDayId,

  [UserTypes.FETCH_PJP_LOADING]: fetchPjpLoading,
  [UserTypes.FETCH_PJP_SUCCESS]: fetchPjpSuccess,
  [UserTypes.FETCH_PJP_FAILURE]: fetchPjpFailure,

  [UserTypes.FETCH_FILTERED_PJP_DISPLAY_LIST_SUCCESS]: fetchFilteredPjpDisplayListSuccess,
  [UserTypes.UPDATE_MONTH_NUMBER]: updateMonthNumber,
  [UserTypes.UPDATE_SEARCH_FILTERS]: updateSearchFilters,
  [UserTypes.ADD_BEAT_LIST]: addBeatList,

  [UserTypes.CREATE_PJP_SUCCESS]: createPjpSuccess,
  [UserTypes.CREATE_PJP_FAILURE]: createPjpFailure,
  [UserTypes.CREATE_PJP_LOADING]: createPjpLoading,
  [UserTypes.CREATE_PJP_LOADING_STOP]: createPjpLoadingStop,

  [UserTypes.GET_ONBOARDING_SUCCESS]: getOnboardingSuccess,
  [UserTypes.GET_ONBOARDING_FAILURE]: getOnboardingFailure,
  [UserTypes.GET_ONBOARDING_LOADING]: getOnboardingLoading,
  [UserTypes.GET_ONBOARDING_LOADING_STOP]: getOnboardingLoadingStop,
  [UserTypes.GET_IMAGE_ONBOARDING_SUCCESS]: getImageOnboardingSuccess,
  [UserTypes.GET_IMAGE_ONBOARDING_FAILURE]: getImageOnboardingFailure,
  [UserTypes.GET_IMAGE_ONBOARDING_LOADING]: getImageOnboardingLoading,

  [UserTypes.FETCH_BEAT_PJP_SUCCESS]: fetchBeatPjpSuccess,
  [UserTypes.FETCH_BEAT_PJP_FAILURE]: fetchBeatPjpFailure,
  [UserTypes.FETCH_BEAT_PJP_LOADING]: fetchBeatPjpLoading,
  // [UserTypes.FETCH_BEAT_PJP_LOADING_STOP]                      : fetchBeatPjpLoadingStop,

  [UserTypes.FETCH_TOTAL_OUTLET_SUCCESS]: fetchTotalOutletSuccess,
  [UserTypes.FETCH_TOTAL_OUTLET_FAILURE]: fetchTotalOutletFailure,
  [UserTypes.FETCH_TOTAL_OUTLET_LOADING]: fetchTotalOutletLoading,
  [UserTypes.PRESS_TAG_PJP_SUCCESS]: pressTagPjpSuccess,

  [UserTypes.MANAGER_LIST_SUCCESS]: managerListSuccess,
  [UserTypes.MANAGER_LIST_FAILURE]: managerListFailure,
  [UserTypes.MANAGER_LIST_LOADING]: managerListLoading,

  [UserTypes.SUBMIT_APPROVAL_SUCCESS]: submitApprovalSuccess,
  [UserTypes.SUBMIT_APPROVAL_FAILURE]: submitApprovalFailure,
  [UserTypes.SUBMIT_APPROVAL_LOADING]: submitApprovalLoading,
  // approveRejectLocalPjpSuccess:['payload'],
  // 	approveRejectLocalPjpFailure:null,
  // 	approveRejectLocalPjpLoading:null,
  [UserTypes.APPROVE_REJECT_PJP_SUCCESS]: approveRejectPjpSuccess,
  [UserTypes.APPROVE_REJECT_PJP_FAILURE]: approveRejectPjpFailure,
  [UserTypes.APPROVE_REJECT_PJP_LOADING]: approveRejectPjpLoading,

  [UserTypes.GET_DIVISION_SUCCESS]: getDivisionSuccess,
  [UserTypes.GET_DIVISION_FAILURE]: getDivisionFailure,
  [UserTypes.GET_DIVISION_LOADING]: getDivisionLoading,

  [UserTypes.GET_BRANCH_MASTER_SUCCESS]: getBranchMasterSuccess,
  [UserTypes.GET_BRANCH_MASTER_FAILURE]: getBranchMasterFailure,
  [UserTypes.GET_BRANCH_MASTER_LOADING]: getBranchMasterLoading,

  [UserTypes.GET_ALL_PART_MASTER_SUCCESS]: getAllPartMasterSuccess,
  [UserTypes.GET_ALL_PART_BULK_MASTER_SUCCESS]: getAllPartBulkMasterSuccess,
  [UserTypes.GET_ALL_PART_MASTER_FAILURE]: getAllPartMasterFailure,
  [UserTypes.GET_ALL_PART_MASTER_LOADING]: getAllPartMasterLoading,

  [UserTypes.SELECT_MANAGER]: selectManager,

  [UserTypes.FETCH_BEAT_TOTAL_OUTLET]: fetchBeatTotalOutlet,
});
