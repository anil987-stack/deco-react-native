/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from "./InitialState";
import { createReducer } from "reduxsauce";
import { MenuTypes } from "./Actions";
import _ from "lodash";

export const createOnboardingSuccess = (state, { payload }) => {
  return {
    ...state,
    ASuccessfulOnboarding: payload,
    createOnboardingLoading: false,
  };
};
export const createOnboardingFailure = (state, { payload }) => {
  return {
    ...state,
    createOnboardingLoading: false,
  };
};

export const createOnboardingLoading = (state, { payload }) => {
  return {
    ...state,
    createOnboardingLoading: true,
  };
};

export const UpdateOnboardingSuccess = (state, { payload }) => {
  return {
    ...state,
    updateOnboardinglist: payload,
    UpdateOnboardingLoading: false,
  };
};
export const UpdateOnboardingFailure = (state, { payload }) => {
  return {
    ...state,
    UpdateOnboardingLoading: false,
  };
};

export const UpdateOnboardingLoading = (state, { payload }) => {
  return {
    ...state,
    UpdateOnboardingLoading: true,
  };
};

//   Updatelist
export const SelectOnboardingList = (state, { payload }) => {
  return {
    ...state,
    createOnboardinglist: payload,
    //  UpdateOnboardingLoading: false
  };
};

export const changeOnboardingForm = (state, { payload }) => {
  let updated_add_visit_info_form = _.cloneDeep(state.createOnboardinglist);
  updated_add_visit_info_form[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    createOnboardinglist: {
      ...state.createOnboardinglist,
      ...updated_add_visit_info_form,
    },
    OnboardingInfoFormValidation: {
      invalid: false,
      invalid_field: "",
      error_message: "",
    },
  };
};

export const changeKycForm = (state, { payload }) => {
  let updated_add_visit_info_form = _.cloneDeep(state.kycform);
  updated_add_visit_info_form[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    kycform: {
      ...state.kycform,
      ...updated_add_visit_info_form,
    },
    OnboardingInfoFormValidation: {
      invalid: false,
      invalid_field: "",
      error_message: "",
    },
  };
};

export const changeImageForm = (state, { payload }) => {
  let updated_image_form = _.cloneDeep(state.imageform);
  updated_image_form[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    imageform: {
      ...state.imageform,
      ...updated_image_form,
    },
    OnboardingInfoFormValidation: {
      invalid: false,
      invalid_field: "",
      error_message: "",
    },
  };
};
export const OnBoardingValidationFailed = (state, { payload }) => {
  return {
    ...state,
    OnboardingInfoFormValidation: {
      invalid: true,
      ...payload,
    },
    createOnboardingLoading: false,
  };
};
// clearOnboardingList:null
export const clearOnboardingList = (state) => ({
  ...state,
  selectedFilter: "",
  createOnboardinglist: {},
});

export const changeMenuSelectedFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.selectedBeatFilter);
  updated_search_filters[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    selectedBeatFilter: updated_search_filters,
  };
};
// UploadImageSuccess:['payload'],
// UploadImageFailure:null,
// UploadImageLoading:null,
export const UploadImageSuccess = (state, { payload }) => {
  return {
    ...state,
    ImageList: payload,
    UploadImageLoading: false,
  };
};
export const UploadImageFailure = (state, { payload }) => {
  return {
    ...state,
    UploadImageLoading: false,
  };
};

export const UploadImageLoading = (state, { payload }) => {
  return {
    ...state,
    UploadImageLoading: true,
  };
};

export const clearImageList = (state) => ({
  ...state,
  selectedFilter: "",
  imageform: {},
});

export const submitForApprovalLoading = (state, { payload }) => {
  return {
    ...state,
    submitForApprovalLoader: true,
  };
};

export const submitForApprovalFailure = (state, { payload }) => {
  return {
    ...state,
    submitForApprovalLoader: false,
  };
};

export const submitForApprovalSuccess = (state, { payload }) => {
  return {
    ...state,
    approvereject: {},
    submitForApprovalLoader: false,
  };
};

export const doNothing = (state) => ({
  ...state,
});
export const getVisitOnboardingSuccess = (state, { payload }) => {
  return {
    ...state,
    getVisitAgainstOnboarding: payload,
    getVisitOnboardingLoading: false,
  };
};
export const getVisitOnboardingFailure = (state, { payload }) => {
  return {
    ...state,
    getVisitOnboardingLoading: false,
  };
};

export const getVisitOnboardingLoading = (state, { payload }) => {
  return {
    ...state,
    getVisitOnboardingLoading: true,
  };
};

export const showOnboardingModalSuccess = (state, { payload }) => ({
  ...state,
  showmodaList: payload,
  isShowmodal: true,
});

// export const  hideOnboardingModal = (state) => ({
//   ...state,
//   // isObjModalList:{},
//   isShowmodal: false,

// });

export const CreateAgainstVisitSuccess = (state, { payload }) => {
  return {
    ...state,
    OnboardingVisitList: payload,
    CreateAgainstVisitLoading: false,
  };
};
export const CreateAgainstVisitFailure = (state, { payload }) => {
  return {
    ...state,
    CreateAgainstVisitLoading: false,
  };
};

export const CreateAgainstVisitLoading = (state, { payload }) => {
  return {
    ...state,
    CreateAgainstVisitLoading: true,
  };
};

export const getLastVisitSuccess = (state, { payload }) => {
  return {
    ...state,
    lastvisitList: payload,
    getLastVisitLoading: false,
  };
};
export const getLastVisitFailure = (state, { payload }) => {
  return {
    ...state,
    lastvisitList: [],
    getLastVisitLoading: false,
  };
};

export const getLastVisitLoading = (state, { payload }) => {
  return {
    ...state,
    getLastVisitLoading: true,
  };
};
export const getCityListSuccess = (state, { payload }) => {
  return {
    ...state,
    cityList: payload,
    getcityListLoading: false,
  };
};
export const getCityListFailure = (state, { payload }) => {
  return {
    ...state,
    cityList: [],
    getcityListLoading: false,
  };
};

export const getCityListLoading = (state, { payload }) => {
  return {
    ...state,
    getcityListLoading: true,
  };
};

export const submitForApprovaRejectLoading = (state, { payload }) => {
  return {
    ...state,
    submitForApprovaRejectLoader: true,
  };
};

export const submitForApprovaRejectFailure = (state, { payload }) => {
  return {
    ...state,
    submitForApprovaRejectLoader: false,
  };
};

export const submitForApprovaRejectSuccess = (state, { payload }) => {
  // console.log("payloadhh", payload);
  return {
    ...state,
    approvereject: payload,
    submitForApprovaRejectLoader: false,
  };
};

export const getCampaignAttendeesSuccess = (state, { payload }) => {
  return {
    ...state,
    CampaignAttendees: payload,
    getCampaignAttendeesLoading: false,
  };
};
export const getCampaignAttendeesFailure = (state, { payload }) => {
  return {
    ...state,
    CampaignAttendees: [],
    getCampaignAttendeesLoading: false,
  };
};

export const getCampaignAttendeesLoading = (state, { payload }) => {
  return {
    ...state,
    getCampaignAttendeesLoading: true,
  };
};

export const fetchTicketSuccess = (state, { payload }) => {
  return {
    ...state,
    TicketList: payload,
    fetchTicketLoading: false,
  };
};

export const fetchTicketFailure = (state, { payload }) => {
  return {
    ...state,
    TicketList: [],
    fetchTicketLoading: false,
  };
};

export const fetchTicketLoading = (state, { payload }) => {
  return {
    ...state,
    fetchTicketLoading: true,
  };
};

export const CreateTicketSuccess = (state, { payload }) => {
  return {
    ...state,
    Createticket: payload,
    createdticket:payload,
    CreateTicketLoading: false,
  };
};

export const CreateTicketFailure = (state, { payload }) => {
  return {
    ...state,
    Createticket: {},
    CreateTicketLoading: false,
  };
};

export const CreateTicketLoading = (state, { payload }) => {
  return {
    ...state,
    CreateTicketLoading: true,
  };
};

export const changeTicketForm = (state, { payload }) => {
  let updated_add_visit_info_form = _.cloneDeep(state.Createticket);
  updated_add_visit_info_form[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    Createticket: {
      ...state.Createticket,
      ...updated_add_visit_info_form,
    },
    OnboardingInfoFormValidation: {
      invalid: false,
      invalid_field: "",
      error_message: "",
    },
  };
};

export const clearTicketForm = (state, { payload }) => {
  return {
    ...state,
    Createticket: {},
  };
};

export const getCompetitorSchemeSuccess = (state, { payload }) => {
  return {
    ...state,
    competitorList: payload,
    getCompetitorSchemeLoader: false,
  };
};

export const getCompetitorSchemeFailure = (state, { payload }) => {
  return {
    ...state,
    getCompetitorSchemeLoader: false,
    competitorList: [],
  };
};

export const getCompetitorSchemeLoading = (state) => {
  return {
    ...state,
    getCompetitorSchemeLoader: true,
  };
};

export const getCompetitorSchemeLoadingStop = (state) => {
  return {
    ...state,
    getCompetitorSchemeLoader: false,
  };
};

export const createCampaignSuccess = (state, { payload }) => {
  return {
    ...state,
    createCampaignlist: payload,
    createCampaignLoading: false,
  };
};
export const createCampaignFailure = (state, { payload }) => {
  return {
    ...state,
    createCampaignLoading: false,
  };
};

export const createCampaignLoading = (state, { payload }) => {
  return {
    ...state,
    createCampaignLoading: true,
  };
};
export const selectCampaign = (state, { payload }) => {
  return {
    ...state,
    createCampaignlist: payload,
    //  UpdateCampaignLoading: false
  };
};

export const changeCampaignForm = (state, { payload }) => {
  let updated_form = _.cloneDeep(state.createCampaignlist);
  updated_form[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    createCampaignlist: {
      ...state.createCampaignlist,
      ...updated_form,
    },
  };
};

export const clearCampaignForm = (state) => ({
  ...state,
  createCampaignlist: {},
});

export const getCampaignRecordSuccess = (state, { payload }) => {
  return {
    ...state,
    campaignRecord: payload,
    getCampaignRecordLoading: false,
  };
};

export const getCampaignRecordFailure = (state, { payload }) => {
  return {
    ...state,
    campaignRecord: [],
    getCampaignRecordLoading: false,
  };
};

export const getCampaignRecordLoading = (state, { payload }) => {
  return {
    ...state,
    getCampaignRecordLoading: true,
  };
};

export const createCompetitorSchemeSuccess = (state, { payload }) => {
  return {
    ...state,
    createCompetitorSchemelist: payload,
    createCompetitorSchemeLoading: false,
  };
};
export const createCompetitorSchemeFailure = (state, { payload }) => {
  return {
    ...state,
    createCompetitorSchemeLoading: false,
  };
};

export const createCompetitorSchemeLoading = (state, { payload }) => {
  return {
    ...state,
    createCompetitorSchemeLoading: true,
  };
};
export const selectCompetitorScheme = (state, { payload }) => {
  return {
    ...state,
    createCompetitorSchemelist: payload,
    //  UpdateCompetitorSchemeLoading: false
  };
};

export const changeCompetitorSchemeForm = (state, { payload }) => {
  let updated_form = _.cloneDeep(state.createCompetitorSchemelist);
  updated_form[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    createCompetitorSchemelist: {
      ...state.createCompetitorSchemelist,
      ...updated_form,
    },
  };
};

export const clearCompetitorSchemeForm = (state) => ({
  ...state,
  createCompetitorSchemelist: {},
});

export const createAttendeeSuccess = (state, { payload }) => {
  return {
    ...state,
    createAttendeelist: payload,
    createAttendeeLoading: false,
  };
};
export const createAttendeeFailure = (state, { payload }) => {
  return {
    ...state,
    createAttendeeLoading: false,
  };
};

export const createAttendeeLoading = (state, { payload }) => {
  return {
    ...state,
    createAttendeeLoading: true,
  };
};
export const selectAttendee = (state, { payload }) => {
  return {
    ...state,
    createAttendeelist: payload,
    //  UpdateAttendeeLoading: false
  };
};

export const changeAttendeeForm = (state, { payload }) => {
  let updated_form = _.cloneDeep(state.createAttendeelist);
  updated_form[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    createAttendeelist: {
      ...state.createAttendeelist,
      ...updated_form,
    },
  };
};

export const clearAttendeeForm = (state) => ({
  ...state,
  createAttendeelist: {},
});

export const updateCampaignSuccess = (state, { payload }) => {
  return {
    ...state,
    updateCampaign: payload,
    updateCampaignLoader: false,
  };
};
export const updateCampaignFailure = (state, { payload }) => {
  return {
    ...state,
    updateCampaignLoader: false,
  };
};

export const updateCampaignLoading = (state, { payload }) => {
  return {
    ...state,
    updateCampaignLoader: true,
  };
};

export const CreateKycFormSuccess = (state, { payload }) => {
  return {
    ...state,
    kycform: payload,
    createKycFormLoading: false,
  };
};
export const CreateKycFormFailure = (state, { payload }) => {
  return {
    ...state,
    createKycFormLoading: false,
  };
};

export const CreateKycFormLoading = (state, { payload }) => {
  return {
    ...state,
    createKycFormLoading: true,
  };
};
export const clearKycForm = (state) => {
  return {
    ...state,
    kycform: {},
  };
};

export const getCompetitorMasterSuccess = (state, { payload }) => {
  return {
    ...state,
    CompetitorMasterlist: payload,
    getCompetitorMasterLoading: false,
  };
};
export const getCompetitorMasterFailure = (state, { payload }) => {
  return {
    ...state,
    getCompetitorMasterLoading: false,
  };
};

export const getCompetitorMasterLoading = (state, { payload }) => {
  return {
    ...state,
    getCompetitorMasterLoading: true,
  };
};

export const selectKyc = (state, { payload }) => ({
  ...state,
  kycform: payload,
});

export const selectKycSuccess = (state, { payload }) => ({
  ...state,
  kycform: _.cloneDeep(payload),
});

export const updateKycSuccess = (state, { payload }) => {
  return {
    ...state,
    kycform: payload,
    updateKycLoading: false,
  };
};
export const updateKycFailure = (state, { payload }) => {
  return {
    ...state,
    updateKycLoading: false,
  };
};

export const updateKycLoading = (state, { payload }) => {
  return {
    ...state,
    updateKycLoading: true,
  };
};
export const reducer = createReducer(INITIAL_STATE, {
  [MenuTypes.CREATE_ONBOARDING_SUCCESS]: createOnboardingSuccess,
  [MenuTypes.CREATE_ONBOARDING_FAILURE]: createOnboardingFailure,
  [MenuTypes.CREATE_ONBOARDING_LOADING]: createOnboardingLoading,

  [MenuTypes.UPDATE_ONBOARDING_SUCCESS]: UpdateOnboardingSuccess,
  [MenuTypes.UPDATE_ONBOARDING_FAILURE]: UpdateOnboardingFailure,
  [MenuTypes.UPDATE_ONBOARDING_LOADING]: UpdateOnboardingLoading,
  [MenuTypes.SELECT_ONBOARDING_LIST]: SelectOnboardingList,
  [MenuTypes.CLEAR_ONBOARDING_LIST]: clearOnboardingList,
  [MenuTypes.CLEAR_IMAGE_LIST]: clearImageList,
  [MenuTypes.ON_BOARDING_VALIDATION_FAILED]: OnBoardingValidationFailed,
  [MenuTypes.CHANGE_ONBOARDING_FORM]: changeOnboardingForm,
  [MenuTypes.CHANGE_KYC_FORM]: changeKycForm,

  [MenuTypes.CHANGE_IMAGE_FORM]: changeImageForm,

  [MenuTypes.CHANGE_MENU_SELECTED_FILTERS]: changeMenuSelectedFilters,

  [MenuTypes.UPLOAD_IMAGE_SUCCESS]: UploadImageSuccess,
  [MenuTypes.UPLOAD_IMAGE_FAILURE]: UploadImageFailure,
  [MenuTypes.UPLOAD_IMAGE_LOADING]: UploadImageLoading,
  //  [MenuTypes.ON_BOARDING_INFO_VALIDATION_FAILED] 		: onboardingInfoValidationFailed,
  [MenuTypes.SUBMIT_FOR_APPROVAL_LOADING]: submitForApprovalLoading,
  [MenuTypes.SUBMIT_FOR_APPROVAL_FAILURE]: submitForApprovalFailure,
  [MenuTypes.SUBMIT_FOR_APPROVAL_SUCCESS]: submitForApprovalSuccess,

  [MenuTypes.SUBMIT_FOR_APPROVA_REJECT_LOADING]: submitForApprovaRejectLoading,
  [MenuTypes.SUBMIT_FOR_APPROVA_REJECT_FAILURE]: submitForApprovaRejectFailure,
  [MenuTypes.SUBMIT_FOR_APPROVA_REJECT_SUCCESS]: submitForApprovaRejectSuccess,
  [MenuTypes.DO_NOTHING]: doNothing,

  [MenuTypes.GET_VISIT_ONBOARDING_LOADING]: getVisitOnboardingLoading,
  [MenuTypes.GET_VISIT_ONBOARDING_FAILURE]: getVisitOnboardingFailure,
  [MenuTypes.GET_VISIT_ONBOARDING_SUCCESS]: getVisitOnboardingSuccess,
  // CreateAgainstVisitSuccess:['payload'],
  // CreateAgainstVisitFailure:null,
  // CreateAgainstVisitLoading:null,
  [MenuTypes.CREATE_AGAINST_VISIT_LOADING]: CreateAgainstVisitLoading,
  [MenuTypes.CREATE_AGAINST_VISIT_FAILURE]: CreateAgainstVisitFailure,
  [MenuTypes.CREATE_AGAINST_VISIT_SUCCESS]: CreateAgainstVisitSuccess,

  [MenuTypes.GET_CITY_LIST_LOADING]: getCityListLoading,
  [MenuTypes.GET_CITY_LIST_FAILURE]: getCityListFailure,
  [MenuTypes.GET_CITY_LIST_SUCCESS]: getCityListSuccess,

  [MenuTypes.SHOW_ONBOARDING_MODAL_SUCCESS]: showOnboardingModalSuccess,

  [MenuTypes.GET_LAST_VISIT_SUCCESS]: getLastVisitSuccess,
  [MenuTypes.GET_LAST_VISIT_FAILURE]: getLastVisitFailure,
  [MenuTypes.GET_LAST_VISIT_LOADING]: getLastVisitLoading,

  [MenuTypes.GET_CAMPAIGN_ATTENDEES_SUCCESS]: getCampaignAttendeesSuccess,
  [MenuTypes.GET_CAMPAIGN_ATTENDEES_FAILURE]: getCampaignAttendeesFailure,
  [MenuTypes.GET_CAMPAIGN_ATTENDEES_LOADING]: getCampaignAttendeesLoading,

  [MenuTypes.FETCH_TICKET_SUCCESS]: fetchTicketSuccess,
  [MenuTypes.FETCH_TICKET_FAILURE]: fetchTicketFailure,
  [MenuTypes.FETCH_TICKET_LOADING]: fetchTicketLoading,

  [MenuTypes.CREATE_TICKET_SUCCESS]: CreateTicketSuccess,
  [MenuTypes.CREATE_TICKET_FAILURE]: CreateTicketFailure,
  [MenuTypes.CREATE_TICKET_LOADING]: CreateTicketLoading,

  [MenuTypes.CHANGE_TICKET_FORM]: changeTicketForm,
  [MenuTypes.CLEAR_TICKET_FORM]: clearTicketForm,

  [MenuTypes.GET_COMPETITOR_SCHEME_LOADING]: getCompetitorSchemeLoading,
  [MenuTypes.GET_COMPETITOR_SCHEME_LOADING_STOP]: getCompetitorSchemeLoadingStop,
  [MenuTypes.GET_COMPETITOR_SCHEME_SUCCESS]: getCompetitorSchemeSuccess,
  [MenuTypes.GET_COMPETITOR_SCHEME_FAILURE]: getCompetitorSchemeFailure,

  [MenuTypes.CREATE_CAMPAIGN_SUCCESS]: createCampaignSuccess,
  [MenuTypes.CREATE_CAMPAIGN_FAILURE]: createCampaignFailure,
  [MenuTypes.CREATE_CAMPAIGN_LOADING]: createCampaignLoading,
  [MenuTypes.SELECT_CAMPAIGN]: selectCampaign,
  [MenuTypes.CLEAR_CAMPAIGN_FORM]: clearCampaignForm,
  [MenuTypes.CHANGE_CAMPAIGN_FORM]: changeCampaignForm,

  [MenuTypes.GET_CAMPAIGN_RECORD_SUCCESS]: getCampaignRecordSuccess,
  [MenuTypes.GET_CAMPAIGN_RECORD_FAILURE]: getCampaignRecordFailure,
  [MenuTypes.GET_CAMPAIGN_RECORD_LOADING]: getCampaignRecordLoading,

  [MenuTypes.CREATE_COMPETITOR_SCHEME_SUCCESS]: createCompetitorSchemeSuccess,
  [MenuTypes.CREATE_COMPETITOR_SCHEME_FAILURE]: createCompetitorSchemeFailure,
  [MenuTypes.CREATE_COMPETITOR_SCHEME_LOADING]: createCompetitorSchemeLoading,
  [MenuTypes.SELECT_COMPETITOR_SCHEME]: selectCompetitorScheme,
  [MenuTypes.CLEAR_COMPETITOR_SCHEME_FORM]: clearCompetitorSchemeForm,
  [MenuTypes.CHANGE_COMPETITOR_SCHEME_FORM]: changeCompetitorSchemeForm,

  [MenuTypes.CREATE_ATTENDEE_SUCCESS]: createAttendeeSuccess,
  [MenuTypes.CREATE_ATTENDEE_FAILURE]: createAttendeeFailure,
  [MenuTypes.CREATE_ATTENDEE_LOADING]: createAttendeeLoading,
  [MenuTypes.SELECT_ATTENDEE]: selectAttendee,
  [MenuTypes.CLEAR_ATTENDEE_FORM]: clearAttendeeForm,
  [MenuTypes.CHANGE_ATTENDEE_FORM]: changeAttendeeForm,

  [MenuTypes.UPDATE_CAMPAIGN_SUCCESS]: updateCampaignSuccess,
  [MenuTypes.UPDATE_CAMPAIGN_FAILURE]: updateCampaignFailure,
  [MenuTypes.UPDATE_CAMPAIGN_LOADING]: updateCampaignLoading,

  [MenuTypes.CREATE_KYC_FORM_SUCCESS]: CreateKycFormSuccess,
  [MenuTypes.CREATE_KYC_FORM_FAILURE]: CreateKycFormFailure,
  [MenuTypes.CREATE_KYC_FORM_LOADING]: CreateKycFormLoading,
  [MenuTypes.CLEAR_KYC_FORM]: clearKycForm,

  [MenuTypes.GET_COMPETITOR_MASTER_SUCCESS]: getCompetitorMasterSuccess,
  [MenuTypes.GET_COMPETITOR_MASTER_FAILURE]: getCompetitorMasterFailure,
  [MenuTypes.GET_COMPETITOR_MASTER_LOADING]: getCompetitorMasterLoading,
  [MenuTypes.SELECT_KYC]: selectKyc,

  [MenuTypes.SELECT_KYC_SUCCESS]: selectKycSuccess,

  [MenuTypes.UPDATE_KYC_SUCCESS]: updateKycSuccess,
  [MenuTypes.UPDATE_KYC_FAILURE]: updateKycFailure,
  [MenuTypes.UPDATE_KYC_LOADING]: updateKycLoading,
});
