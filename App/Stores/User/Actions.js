import { createActions } from "reduxsauce";

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  loginUser: ["data"], // data coming from from will go into 'data' key when we call this action
  userLoginLoading: null,
  userLoginSuccess: ["user"],
  userLoginFailure: ["errorMessage"],

  updateLoginDetails: ["payload"],

  loginUserOtp: ["data"], // data coming from from will go into 'data' key when we call this action
  userLoginOtpLoading: null,
  userLoginOtpSuccess: ["user"],
  userLoginOtpFailure: ["errorMessage"],

  logoutUser: ["data"],
  userLogoutLoading: null,
  userLogoutSuccess: ["user"],
  userLogoutFailure: ["errorMessage"],
  changeLoginForm: ["user"],
  userLoginValidationFailed: ["validation"],
  userStartDayValidationFailed: ["validation"],
  updateUserLocation: ["location"],
  updateUserStartDayTime: ["startDayTime"],
  updateUserArea: ["area"],
  fetchAllAreas: ["user"],
  fetchAllAreasLoading: [null],
  fetchAllAreasSuccess: ["areas"],
  fetchAllAreasFailure: [null],
  startUserDay: ["user"],
  endUserDay: ["user"],
  markUserAbsent: ["user"],
  userStartDaySuccess: ["user"],
  userStartDayFailure: null,
  userEndDaySuccess: ["user"],
  userEndDayFailure: null,
  userStartDayLoading: null,
  userStartDayLoadingStop: null,
  userEndDayLoadingStop: null,
  userEndDayLoading: null,
  userMarkedAbsentSuccess: ["user"],
  userMarkedAbsentFailure: null,
  userMarkedAbsentLoading: null,
  userMarkedAbsentLoadingStop: null,
  updateUserMarkedAbsentReason: ["reason"],
  fetchAgentDetails: ["payload"],
  fetchAgentDetailsSuccess: ["payload"],
  fetchAgentDetailsFailure: null,
  checkAttendance: ["payload"],
  updateAgentAttendanceDetails: ["payload"],
  checkAttendanceFailure: null,
  doNothing: null,
  updateAttendance: ["payload"],
  updateStartDayId: ["payload"],
  fetchAllPsm: ["payload"],
  fetchAllPsmLoading: null,
  fetchAllPsmLoadingStop: null,
  fetchAllPsmSuccess: ["payload"],
  fetchAllPsmFailure: null,

  fetchPjp: ["payload"],
  fetchPjpSuccess: ["payload"],
  fetchPjpFailure: null,
  fetchPjpLoading: null,
  fetchPjpLoadingStop: null,
  makePjpSearchList: ["payload"],
  makePjpSearchListSuccess: ["payload"],
  makePjpSearchListLoading: null,
  makePjpSearchListFailure: null,

  fetchFilteredPjpDisplayListSuccess: ["payload"],

  updateMonthNumber: ["payload"],
  updateSearchFilters: ["payload"],

  addBeatList: ["payload"],

  createPjp: ["payload"],
  createPjpSuccess: ["payload"],
  createPjpFailure: null,
  createPjpLoading: null,
  createPjpLoadingStop: null,

  // GET_ONBOARDING
  getOnboarding: ["payload"],
  getOnboardingSuccess: ["payload"],
  getOnboardingFailure: null,
  getOnboardingLoading: null,
  getOnboardingLoadingStop: null,

  getImageOnboarding: ["payload"],
  getImageOnboardingSuccess: ["payload"],
  getImageOnboardingFailure: null,
  getImageOnboardingLoading: null,
  getImageOnboardingLoadingStop: null,

  fetchBeatPjp: ["payload"],
  fetchBeatPjpSuccess: ["payload"],
  fetchBeatPjpFailure: null,
  fetchBeatPjpLoading: null,

  fetchBeatTotalOutlet: ["payload"],
  // fetchBeatPjpLoadingStop:null,

  fetchTotalOutlet: ["payload"],
  fetchTotalOutletSuccess: ["payload"],
  fetchTotalOutletFailure: null,
  fetchTotalOutletLoading: null,

  pressTagPjp: ["payload"],
  pressTagPjpSuccess: ["payload"],

  managerList: ["payload"],
  managerListSuccess: ["payload"],
  managerListFailure: null,
  managerListLoading: null,

  selectManager: ["payload"],

  submitApproval: ["payload"],
  submitApprovalSuccess: ["payload"],
  submitApprovalFailure: null,
  submitApprovalLoading: null,

  approveRejectPjp: ["payload"],
  approveRejectPjpSuccess: ["payload"],
  approveRejectPjpFailure: null,
  approveRejectPjpLoading: null,

  getDivision: ["payload"],
  getDivisionSuccess: ["payload"],
  getDivisionFailure: null,
  getDivisionLoading: null,

  getBranchMaster: ["payload"],
  getBranchMasterSuccess: ["payload"],
  getBranchMasterFailure: null,
  getBranchMasterLoading: null,

  getAllPartMaster: ["payload"],
  getAllPartMasterSuccess: ["payload"],
  getAllPartBulkMasterSuccess: ["payload"],

  getAllPartMasterFailure: null,
  getAllPartMasterLoading: null,
  clearPart: null,
});

export const UserTypes = Types;
export default Creators;
