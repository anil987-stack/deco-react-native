import { INITIAL_STATE } from "./InitialState";
import { createReducer } from "reduxsauce";
import { DashboardTypes } from "./Actions";
import _ from "lodash";

export const changeDashboardSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.searchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;
  return {
    ...state,
    searchFilters: updated_search_filters,
  };
};

export const getOrderValueSuccess = (state, { payload }) => {
  return {
    ...state,
    data: _.cloneDeep({
      ...state.data,
      orderValue: payload,
    }),
    loaders: {
      ...state.loaders,
      orderValueLoader: false,
    },
  };
};

export const getVisitCountSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      visitCount: payload,
    },
    loaders: {
      ...state.loaders,
      visitCountLoader: false,
    },
  };
};

export const getSiteCountSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      siteCount: payload,
    },
    loaders: {
      ...state.loaders,
      siteCountLoader: false,
    },
  };
};

export const getCountersSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      counters: payload,
    },
    loaders: {
      ...state.loaders,
      countersLoader: false,
    },
  };
};

export const getEventCountSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      eventsCount: payload,
    },
    loaders: {
      ...state.loaders,
      eventsCountLoader: false,
    },
  };
};

export const getDashboardSummarySuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      dashboardSummary: payload,
    },
    loaders: {
      ...state.loaders,
      dashboardSummaryLoader: false,
    },
  };
};
export const getDashboardSummaryFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      dashboardSummary: [],
    },
    loaders: {
      ...state.loaders,
      dashboardSummaryLoader: false,
    },
  };
};
export const getDashboardSummaryLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      dashboardSummaryLoader: true,
    },
  };
};

export const getDashboardSummaryLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      dashboardSummaryLoader: false,
    },
  };
};

export const getOrderValueFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      orderValue: [],
    },
    loaders: {
      ...state.loaders,
      orderValueLoader: false,
    },
  };
};

export const getVisitCountFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      visitCount: [],
    },
    loaders: {
      ...state.loaders,
      visitCountLoader: false,
    },
  };
};

export const getSiteCountFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      siteCount: [],
    },
    loaders: {
      ...state.loaders,
      siteCountLoader: false,
    },
  };
};

export const getCountersFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      counters: [],
    },
    loaders: {
      ...state.loaders,
      countersLoader: false,
    },
  };
};

export const getEventCountFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      eventsCount: [],
    },
    loaders: {
      ...state.loaders,
      eventsCountLoader: false,
    },
  };
};

export const getOrderValueLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      orderValueLoader: true,
    },
  };
};

export const getVisitCountLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      visitCountLoader: true,
    },
  };
};

export const getSiteCountLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      siteCountLoader: true,
    },
  };
};

export const getCountersLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      countersLoader: true,
    },
  };
};

export const getEventCountLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      eventsCountLoader: true,
    },
  };
};

export const getOrderValueLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      orderValueLoader: false,
    },
  };
};

export const getVisitCountLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      visitCountLoader: false,
    },
  };
};

export const getSiteCountLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      siteCountLoader: false,
    },
  };
};

export const getCountersLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      countersLoader: false,
    },
  };
};

export const getEventCountLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      eventsCountLoader: false,
    },
  };
};

export const doNothing = (state) => ({
  ...state,
});

export const getDashboardBannerSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      dashboardBanner: payload,
    },
    loaders: {
      ...state.loaders,
      dashboardBannerLoader: false,
    },
  };
};
export const getDashboardBannerFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      dashboardBanner: [],
    },
    loaders: {
      ...state.loaders,
      dashboardBannerLoader: false,
    },
  };
};
export const getDashboardBannerLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      dashboardBannerLoader: true,
    },
  };
};

export const getDashboardBannerLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      dashboardBannerLoader: false,
    },
  };
};

export const getPrimarySummarySuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      primarySummary: payload,
    },
    loaders: {
      ...state.loaders,
      primarySummaryLoader: false,
    },
  };
};
export const getPrimarySummaryFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      primarySummary: [],
      secondarySummary: {},
    },
    loaders: {
      ...state.loaders,
      primarySummaryLoader: false,
    },
  };
};
export const getPrimarySummaryLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      primarySummaryLoader: true,
    },
  };
};

export const getPrimarySummaryLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      primarySummaryLoader: false,
    },
  };
};

export const getDashboardCampaignSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      campaign: payload,
    },
    loaders: {
      ...state.loaders,
      campaignLoader: false,
    },
  };
};
export const getDashboardCampaignFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      campaign: {},
      secondarySummary: {},
    },
    loaders: {
      ...state.loaders,
      campaignLoader: false,
    },
  };
};
export const getDashboardCampaignLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      campaignLoader: true,
    },
  };
};

export const getDashboardCampaignLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      campaignLoader: false,
    },
  };
};

export const getDashboardVisitSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      visitSummary: payload,
    },
    loaders: {
      ...state.loaders,
      visitSummaryLoader: false,
    },
  };
};
export const getDashboardVisitFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      visitSummary: {},
      secondarySummary: {},
    },
    loaders: {
      ...state.loaders,
      visitSummaryLoader: false,
    },
  };
};
export const getDashboardVisitLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      visitSummaryLoader: true,
    },
  };
};

export const getDashboardVisitLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      visitSummaryLoader: false,
    },
  };
};

export const getSalesGeneralSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      salesGeneral: payload,
    },
    loaders: {
      ...state.loaders,
      salesGeneralLoader: false,
    },
  };
};
export const getSalesGeneralFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      salesGeneral: {},
      secondarySummary: {},
    },
    loaders: {
      ...state.loaders,
      salesGeneralLoader: false,
    },
  };
};
export const getSalesGeneralLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      salesGeneralLoader: true,
    },
  };
};

export const getSalesGeneralLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      salesGeneralLoader: false,
    },
  };
};

export const getSalesFocusSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      salesFocus: payload,
    },
    loaders: {
      ...state.loaders,
      salesFocusLoader: false,
    },
  };
};
export const getSalesFocusFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      salesFocus: {},
      secondarySummary: {},
    },
    loaders: {
      ...state.loaders,
      salesFocusLoader: false,
    },
  };
};
export const getSalesFocusLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      salesFocusLoader: true,
    },
  };
};

export const getSalesFocusLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      salesFocusLoader: false,
    },
  };
};

export const getDashboardTickerSuccess = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      dashboardTicker: payload,
    },
    loaders: {
      ...state.loaders,
      dashboardTickerLoader: false,
    },
  };
};
export const getDashboardTickerFailure = (state, { payload }) => {
  return {
    ...state,
    data: {
      ...state.data,
      dashboardTicker: [],
    },
    loaders: {
      ...state.loaders,
      dashboardTickerLoader: false,
    },
  };
};
export const getDashboardTickerLoading = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      dashboardTickerLoader: true,
    },
  };
};

export const getDashboardTickerLoadingStop = (state, { payload }) => {
  return {
    ...state,
    loaders: {
      ...state.loaders,
      dashboardTickerLoader: false,
    },
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [DashboardTypes.CHANGE_DASHBOARD_SEARCH_FILTERS]: changeDashboardSearchFilters,

  [DashboardTypes.GET_ORDER_VALUE_SUCCESS]: getOrderValueSuccess,
  [DashboardTypes.GET_VISIT_COUNT_SUCCESS]: getVisitCountSuccess,
  [DashboardTypes.GET_SITE_COUNT_SUCCESS]: getSiteCountSuccess,
  [DashboardTypes.GET_COUNTERS_SUCCESS]: getCountersSuccess,
  [DashboardTypes.GET_EVENT_COUNT_SUCCESS]: getEventCountSuccess,
  [DashboardTypes.GET_DASHBOARD_SUMMARY_SUCCESS]: getDashboardSummarySuccess,
  [DashboardTypes.GET_DASHBOARD_BANNER_SUCCESS]: getDashboardBannerSuccess,
  [DashboardTypes.GET_DASHBOARD_TICKER_SUCCESS]: getDashboardTickerSuccess,
  [DashboardTypes.GET_PRIMARY_SUMMARY_SUCCESS]: getPrimarySummarySuccess,
  [DashboardTypes.GET_DASHBOARD_CAMPAIGN_SUCCESS]: getDashboardCampaignSuccess,
  [DashboardTypes.GET_DASHBOARD_VISIT_SUCCESS]: getDashboardVisitSuccess,
  [DashboardTypes.GET_SALES_GENERAL_SUCCESS]: getSalesGeneralSuccess,
  [DashboardTypes.GET_SALES_FOCUS_SUCCESS]: getSalesFocusSuccess,

  [DashboardTypes.GET_ORDER_VALUE_FAILURE]: getOrderValueFailure,
  [DashboardTypes.GET_VISIT_COUNT_FAILURE]: getVisitCountFailure,
  [DashboardTypes.GET_SITE_COUNT_FAILURE]: getSiteCountFailure,
  [DashboardTypes.GET_COUNTERS_FAILURE]: getCountersFailure,
  [DashboardTypes.GET_EVENT_COUNT_FAILURE]: getEventCountFailure,
  [DashboardTypes.GET_DASHBOARD_SUMMARY_FAILURE]: getDashboardSummaryFailure,
  [DashboardTypes.GET_DASHBOARD_BANNER_FAILURE]: getDashboardBannerFailure,
  [DashboardTypes.GET_DASHBOARD_TICKER_FAILURE]: getDashboardTickerFailure,
  [DashboardTypes.GET_PRIMARY_SUMMARY_FAILURE]: getPrimarySummaryFailure,
  [DashboardTypes.GET_DASHBOARD_CAMPAIGN_FAILURE]: getDashboardCampaignFailure,
  [DashboardTypes.GET_DASHBOARD_VISIT_FAILURE]: getDashboardVisitFailure,
  [DashboardTypes.GET_SALES_GENERAL_FAILURE]: getSalesGeneralFailure,
  [DashboardTypes.GET_SALES_FOCUS_FAILURE]: getSalesFocusFailure,

  [DashboardTypes.GET_ORDER_VALUE_LOADING]: getOrderValueLoading,
  [DashboardTypes.GET_VISIT_COUNT_LOADING]: getVisitCountLoading,
  [DashboardTypes.GET_SITE_COUNT_LOADING]: getSiteCountLoading,
  [DashboardTypes.GET_COUNTERS_LOADING]: getCountersLoading,
  [DashboardTypes.GET_EVENT_COUNT_LOADING]: getEventCountLoading,
  [DashboardTypes.GET_DASHBOARD_SUMMARY_LOADING]: getDashboardSummaryLoading,
  [DashboardTypes.GET_DASHBOARD_BANNER_LOADING]: getDashboardBannerLoading,
  [DashboardTypes.GET_DASHBOARD_TICKER_LOADING]: getDashboardTickerLoading,
  [DashboardTypes.GET_PRIMARY_SUMMARY_LOADING]: getPrimarySummaryLoading,
  [DashboardTypes.GET_DASHBOARD_CAMPAIGN_LOADING]: getDashboardCampaignLoading,
  [DashboardTypes.GET_DASHBOARD_VISIT_LOADING]: getDashboardVisitLoading,
  [DashboardTypes.GET_SALES_GENERAL_LOADING]: getSalesGeneralLoading,
  [DashboardTypes.GET_SALES_FOCUS_LOADING]: getSalesFocusLoading,

  [DashboardTypes.GET_ORDER_VALUE_LOADING_STOP]: getOrderValueLoadingStop,
  [DashboardTypes.GET_VISIT_COUNT_LOADING_STOP]: getVisitCountLoadingStop,
  [DashboardTypes.GET_SITE_COUNT_LOADING_STOP]: getSiteCountLoadingStop,
  [DashboardTypes.GET_COUNTERS_LOADING_STOP]: getCountersLoadingStop,
  [DashboardTypes.GET_EVENT_COUNT_LOADING_STOP]: getEventCountLoadingStop,
  [DashboardTypes.GET_DASHBOARD_SUMMARY_LOADING_STOP]: getDashboardSummaryLoadingStop,
  [DashboardTypes.GET_DASHBOARD_BANNER_LOADING_STOP]: getDashboardBannerLoadingStop,
  [DashboardTypes.GET_DASHBOARD_TICKER_LOADING_STOP]: getDashboardTickerLoadingStop,
  [DashboardTypes.GET_PRIMARY_SUMMARY_LOADING_STOP]: getPrimarySummaryLoadingStop,
  [DashboardTypes.GET_DASHBOARD_CAMPAIGN_LOADING_STOP]: getDashboardCampaignLoadingStop,
  [DashboardTypes.GET_DASHBOARD_VISIT_LOADING_STOP]: getDashboardVisitLoadingStop,
  [DashboardTypes.GET_SALES_GENERAL_LOADING_STOP]: getSalesGeneralLoadingStop,
  [DashboardTypes.GET_SALES_FOCUS_LOADING_STOP]: getSalesFocusLoadingStop,

  [DashboardTypes.DO_NOTHING]: doNothing,
});
