import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  changeDashboardSearchFilters: ["payload"],

  getOrderValue: ["payload"],
  getVisitCount: ["payload"],
  getSiteCount: ["payload"],
  getCounters: ["payload"],
  getEventCount: ["payload"],
  getDashboardSummary: ["payload"],
  getDashboardBanner: ["payload"],
  getDashboardTicker: ["payload"],
  getPrimarySummary: ["payload"],
  getDashboardCampaign: ["payload"],
  getDashboardVisit: ["payload"],
  getSalesGeneral: ["payload"],
  getSalesFocus: ["payload"],

  getOrderValueSuccess: ["payload"],
  getVisitCountSuccess: ["payload"],
  getSiteCountSuccess: ["payload"],
  getCountersSuccess: ["payload"],
  getEventCountSuccess: ["payload"],
  getDashboardSummarySuccess: ["payload"],
  getDashboardBannerSuccess: ["payload"],
  getDashboardTickerSuccess: ["payload"],
  getPrimarySummarySuccess: ["payload"],
  getDashboardCampaignSuccess: ["payload"],
  getDashboardVisitSuccess: ["payload"],
  getSalesGeneralSuccess: ["payload"],
  getSalesFocusSuccess: ["payload"],

  getOrderValueFailure: null,
  getVisitCountFailure: null,
  getSiteCountFailure: null,
  getCountersFailure: null,
  getEventCountFailure: null,
  getDashboardSummaryFailure: null,
  getDashboardBannerFailure: null,
  getDashboardTickerFailure: null,
  getPrimarySummaryFailure: null,
  getDashboardCampaignFailure: null,
  getDashboardVisitFailure: null,
  getSalesGeneralFailure: null,
  getSalesFocusFailure: null,

  getOrderValueLoading: null,
  getVisitCountLoading: null,
  getSiteCountLoading: null,
  getCountersLoading: null,
  getEventCountLoading: null,
  getDashboardSummaryLoading: null,
  getDashboardBannerLoading: null,
  getDashboardTickerLoading: null,
  getPrimarySummaryLoading: null,
  getDashboardCampaignLoading: null,
  getDashboardVisitLoading: null,
  getSalesGeneralLoading: null,
  getSalesFocusLoading: null,

  getOrderValueLoadingStop: null,
  getVisitCountLoadingStop: null,
  getSiteCountLoadingStop: null,
  getCountersLoadingStop: null,
  getEventCountLoadingStop: null,
  getDashboardSummaryLoadingStop: null,
  getDashboardBannerLoadingStop: null,
  getDashboardTickerLoadingStop: null,
  getPrimarySummaryLoadingStop: null,
  getDashboardCampaignLoadingStop: null,
  getDashboardVisitLoadingStop: null,
  getSalesGeneralLoadingStop: null,
  getSalesFocusLoadingStop: null,

  doNothing: null,
});

export const DashboardTypes = Types;
export default Creators;
