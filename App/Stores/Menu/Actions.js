import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  // CREATE_ONBOARDING
  createOnboarding: ["payload"],
  createOnboardingSuccess: ["payload"],
  createOnboardingFailure: null,
  createOnboardingLoading: null,
  createOnboardingLoadingStop: null,

  // UPDATE_ONBOARDING
  UpdateOnboarding: ["payload"],
  UpdateOnboardingSuccess: ["payload"],
  UpdateOnboardingFailure: null,
  UpdateOnboardingLoading: null,
  SelectOnboardingList: ["payload"],
  clearOnboardingList: null,

  OnBoardingValidationFailed: ["payload"],

  changeOnboardingForm: ["payload"],
  changeMenuSelectedFilters: ["payload"],
  // onboardingInfoValidationFailed:['payload'],

  UploadImage: ["payload"],
  UploadImageSuccess: ["payload"],
  UploadImageFailure: null,
  UploadImageLoading: null,

  changeImageForm: ["payload"],
  clearImageList: null,
  doNothing: null,

  submitForApproval: ["payload"],
  submitForApprovalLoading: null,
  submitForApprovalFailure: null,
  submitForApprovalSuccess: ["payload"],

  submitForApprovaReject: ["payload"],
  submitForApprovaRejectLoading: null,
  submitForApprovaRejectFailure: null,
  submitForApprovaRejectSuccess: ["payload"],

  //get visit against Onboarding
  getVisitOnboarding: ["payload"],
  getVisitOnboardingSuccess: ["payload"],
  getVisitOnboardingFailure: null,
  getVisitOnboardingLoading: null,

  CreateAgainstVisit: ["payload"],
  CreateAgainstVisitSuccess: ["payload"],
  CreateAgainstVisitFailure: null,
  CreateAgainstVisitLoading: null,

  showOnboardingModal: ["payload"],
  showOnboardingModalSuccess: ["payload"],

  getLastVisit: ["payload"],
  getLastVisitSuccess: ["payload"],
  getLastVisitFailure: null,
  getLastVisitLoading: null,

  getTicket: ["payload"],
  getTicketSuccess: ["payload"],
  getTicketFailure: null,
  getTicketLoading: null,

  getCityList: ["payload"],
  getCityListSuccess: ["payload"],
  getCityListFailure: ["payload"],
  getCityListLoading: ["payload"],

  getCampaignAttendees: ["payload"],
  getCampaignAttendeesSuccess: ["payload"],
  getCampaignAttendeesFailure: null,
  getCampaignAttendeesLoading: null,

  fetchTicket: ["payload"],
  fetchTicketSuccess: ["payload"],
  fetchTicketFailure: null,
  fetchTicketLoading: null,

  CreateTicket: ["payload"],
  CreateTicketSuccess: ["payload"],
  CreateTicketFailure: null,
  CreateTicketLoading: null,

  changeTicketForm: ["payload"],
  clearTicketForm: null,

  getCompetitorScheme: ["payload"],
  getCompetitorSchemeLoading: null,
  getCompetitorSchemeSuccess: ["payload"],
  getCompetitorSchemeFailure: null,
  getCompetitorSchemeLoadingStop: null,

  createCampaign: ["payload"],
  createCampaignSuccess: ["payload"],
  createCampaignFailure: null,
  createCampaignLoading: null,
  createCampaignLoadingStop: null,
  selectCampaign: ["payload"],
  clearCampaignForm: null,
  changeCampaignForm: ["payload"],

  getCampaignRecord: ["payload"],
  getCampaignRecordSuccess: ["payload"],
  getCampaignRecordFailure: null,
  getCampaignRecordLoading: null,

  createCompetitorScheme: ["payload"],
  createCompetitorSchemeSuccess: ["payload"],
  createCompetitorSchemeFailure: null,
  createCompetitorSchemeLoading: null,
  createCompetitorSchemeLoadingStop: null,
  selectCompetitorScheme: ["payload"],
  clearCompetitorSchemeForm: null,
  changeCompetitorSchemeForm: ["payload"],

  createAttendee: ["payload"],
  createAttendeeSuccess: ["payload"],
  createAttendeeFailure: null,
  createAttendeeLoading: null,
  createAttendeeLoadingStop: null,
  selectAttendee: ["payload"],
  clearAttendeeForm: null,
  changeAttendeeForm: ["payload"],

  updateCampaign: ["payload"],
  updateCampaignSuccess: ["payload"],
  updateCampaignFailure: null,
  updateCampaignLoading: null,
  updateCampaignLoadingStop: null,
  changeKycForm: ["payload"],
  clearKycForm: null,

  CreateKycForm: ["payload"],
  CreateKycFormSuccess: ["payload"],
  CreateKycFormFailure: null,
  CreateKycFormLoading: null,

  getCompetitorMaster: ["payload"],
  getCompetitorMasterSuccess: ["payload"],
  getCompetitorMasterFailure: null,
  getCompetitorMasterLoading: null,

  selectKyc: ["payload"],
  selectKycSuccess: ["payload"],

  updateKyc: ["payload"],
  updateKycSuccess: ["payload"],
  updateKycFailure: null,
  updateKycLoading: null,
});

export const MenuTypes = Types;
export default Creators;
