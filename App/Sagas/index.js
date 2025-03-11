import { DashboardTypes } from "App/Stores/Dashboard/Actions";
import { OrdersTypes } from "App/Stores/Orders/Actions";
import { ProductTypes } from "App/Stores/Products/Actions";
import { RetailersTypes } from "App/Stores/Retailers/Actions";
import { StartupTypes } from "App/Stores/Startup/Actions";
import { UserTypes } from "App/Stores/User/Actions";
import { VisitsTypes } from "App/Stores/Visits/Actions";
import { networkSaga, offlineActionTypes } from "react-native-offline";
import { all, fork, takeLatest } from "redux-saga/effects";
import { EventTypes } from "App/Stores/Events/Actions";
import { InfluencersTypes } from "App/Stores/Influencers/Actions";
import { SitesTypes } from "App/Stores/Sites/Actions";
import { LocalTypes } from "App/Stores/LocalExpense/Actions";
import { TourTypes } from "../Stores/Tour/Actions";
import { OutstationTypes } from "../Stores/OutstationExpense/Actions";
import { ExpenseTypes } from "../Stores/ExpenseItem/Actions";
import { CommonTypes } from "../Stores/Common/Actions";
import { StartDayTypes } from "../Stores/StartDay/Actions";
import { MenuTypes } from "../Stores/Menu/Actions";

import {
  getCounters,
  getEventCount,
  getOrderValue,
  getSiteCount,
  getVisitCount,
  getDashboardSummary,
  getDashboardBanner,
  getPrimarySummary,
  getDashboardCampaign,
  getDashboardVisit,
  getSalesGeneral,
  getSalesFocus,
  getDashboardTicker,
} from "./DashboardSaga";

import {
  addParticipants,
  fetchEvents,
  fetchParticipants,
  watchCreateEventRequest,
  watchUpdateEventRequest,
} from "./EventsSaga";

import {
  extractInfluencerInfoData,
  fetchInfluencers,
  watchCreateInfluencerRequest,
  watchUpdateInfluencerRequest,
  fetchInfluencerSites,
} from "./InfluencersSaga";

import { runQueue } from "./OfflineSaga";

import {
  repeatOrder,
  fetchAllOrders,
  fetchOrderDetails,
  fetchDealerOrderDetails,
  fetchSecondaryOrder,
  createPrimaryOrder,
  createSecondaryOrder,
  getCustomerPrimaryOrder,
  OrderPrice,
} from "./OrdersSaga";

import {
  getAllProducts,
  fetchProductCategories,
  fetchSchemes,
  fetchProductBrand,
  fetchProductGsm,
  fetchProductSubSubCategories,
  makeCategoryDisplayList,
  makeSubCategoryDisplayList,
  makeSubSubCategoryDisplayList,
  fetchProductItem,
  fetchProductItemPrice,
  changeDealerDiscount,
  getColorMixMaster,
  getProductSeries,
  getAllPackSize,
  fetchPlant,
  addProductCart,
  removeProductCart,
  getSecondaryProduct,
  addPriceProductCart,
  removePriceProductCart,
  changeCount,
} from "./ProductSaga";

import {
  extractRetailerInfoData,
  fetchDealers,
  fetchRetailerCompetitors,
  fetchRetailerDealerSearchByLocation,
  fetchRetailerOrders,
  fetchRetailers,
  updateRetailerLocation,
  watchCreateRetailerRequest,
  watchUpdateRetailerRequest,
  fetchDealerOrders,
  fetchDealerInvoice,
  fetchDealerOutstanding,
  fetchInvoiceDetail,
  watchsubmitPaymentsForm,
  fetchDealerPayments,
  createCompetitor,
  fetchDsr,
  fetchDsrArea,
  createDsrArea,
  watchCreateDsrRequest,
  fetchDsrAreaList,
  fetchCreditLimit,
  deleteOrderLine,
  editOrderQuantity,
  addOrderLine,
  fetchProducts,
  getDealerTicket,
  getDealerInfo,
  getCustomerFocus,
  getCustomerGeneral,
  getDealerPoints,
  getDealerGift,
} from "./RetailersSaga";

import {
  watchCreateSiteRequest,
  watchUpdateSiteRequest,
  fetchSites,
  fetchSiteProducts,
  watchCreateSiteProductRequest,
  watchUpdateSiteProductRequest,
} from "./SitesSaga";

import { startup } from "./StartupSaga";
import {
  fetchGlobleUserDetail,
  fetchGlobalTokenTaskWatcher,
} from "./StartDaySaga";

import {
  fetchLocalExpenseData,
  fetchLocalItemExpenses,
  fetchTeamItemExpenses,
  fetchTeamExpenses,
  watchUpdateExpenseRequest,
  watchSendForApprovalLocalExpenseRequest,
  watchApproveRejectLocalRequest,
  watchaddRemarkRequest,
  watchUploadLocalImageRequest,
  fetchLocalImage,
  fetchVisitImageAttach,
  fetchExpenseAttachmentsDetails,
} from "./LocalExpenseSaga";

import {
  fetchLocalItem,
  fetchOutstationItem,
  moveOutstationToLocalExpense,
  moveLocalToOutstationExpense,
} from "./ExpenseItemSaga";

import {
  fetchMyOutstationExpenses,
  fetchMyOutstationItemExpenses,
  fetchTeamOutstationExpenses,
  watchUpdateConvenienceExpenseRequest,
  watchUpdateTravelExpenseRequest,
  watchApproveRejectOutstationRequest,
  watchUpdateHotelExpenseRequest,
  fetchApprovedTour,
  watchVisitsByTourRequest,
  watchAddExpenseRequest,
  submitExpenseItem,
  fetchTravelExpenses,
  fetchHotelExpenses,
  fetchFoodExpenses,
  fetchIncidentalExpenses,
  fetchOtherExpenses,
  fetchLocalExpensesType,
  watchUpdateFoodExpenseRequest,
  watchUpdateIncidentalExpenseRequest,
  watchUpdateOtherExpenseRequest,
  watchUpdateLocalExpenseRequest,
  updateLocalExpenseStatus,
  updateEmailStatus,
  watchAddTravelExpenseRequest,
  watchAddHotelExpenseRequest,
  watchAddLocalExpenseRequest,
  watchAddOtherExpenseRequest,
  watchAddIncidentalExpenseRequest,
  watchAddFoodExpenseRequest,
  watchAddConvenienceExpenseRequest,
  fetchConvenienceExpenses,
  watchVisitExpenseItemRequest,
  watchSendForApprovalOutstationExpenseRequest,
  fetchExpenseImage,
} from "./OutstationSaga";

import {
  checkAttendance,
  endDay,
  fetchAllAreas,
  fetchAgentDetails,
  fetchAllPsm,
  fetchPjp,
  markAbsent,
  updateAttendance,
  watchUserLoginRequest,
  watchUserStartDayRequest,
  watchUserLogoutRequest,
  watchSubmitBeatPlan,
  getOnboarding,
  getImageOnboarding,
  fetchBeatPjp,
  fetchTotalOutlet,
  pressTagPjp,
  managerList,
  selectManager,
  submitApproval,
  approveRejectPjp,
  getDivision,
  getBranchMaster,
  getAllPartMaster,
} from "./UserSaga";

import {
  addItemToCart,
  cancelVisit,
  editCartOrder,
  fetchVisitInfo,
  editVisit,
  endVisit,
  fetchVisitsDisplayList,
  fetchVisitsStorageList,
  getVisitsDisplayList,
  removeItemFromCart,
  startVisit,
  watchSubmitSelectedUnplannedVisits,
  watchSubmitSelectedPlannedVisits,
  watchAddVisitInfo,
  watchPlaceOrder,
  pressStartVisit,
  pressEndVisit,
  pressEditVisit,
  pressCancelVisit,
  fetchVisitImage,
  watchCompetitorForm,
  watchStockForm,
  getCompetitor,
  getStock,
  watchUpdateStockForm,
  watchUpdateCompetitorForm,
  getParentAreas,
  addBulkVisitsToPlan,
  removeBulkVisitsToPlan,
  createVisitInfo,
  updateVisitInfo,
} from "./VisitsSaga";

import {
  fetchCities,
  watchCreateTourRequest,
  watchUpdateTourRequest,
  fetchMyTour,
  fetchTeamTour,
  watchSendForApprovalTourRequest,
  watchApproveRejectTourRequest,
} from "./TourSaga";

import {
  fetchAgentAreaPjp,
  fetchObjective,
  uploadImage,
  fetchState,
  fetchCity,
  fetchBeat,
  fetchRetailerArea,
  fetchDealerType,
  fetchTodayAreaPjp,
  fetchDistChannel,
  fetchAllPlant,
  fetchIncoTerm,
  fetchAllRoute,
  fetchAllInsurance,
  getBillParty,
  fetchAllCity,
  fetchCurrentLocation,
  getAllTerritory,
  getUserTerritory,
  getPartNumber,
  getInventory,
  accountReport,
} from "./CommonSaga";

import {
  createOnboarding,
  UpdateOnboarding,
  watchOnboardingForm,
  UploadImage,
  watchUpdateOnboardingForm,
  getVisitOnboarding,
  submitForApproval,
  showOnboardingModal,
  CreateAgainstVisit,
  getLastVisit,
  getCityList,
  submitForApprovaReject,
  getCampaignAttendees,
  fetchTicket,
  CreateTicket,
  getCompetitorScheme,
  createCampaign,
  getCampaignRecord,
  createCompetitorScheme,
  createAttendee,
  updateCampaign,
  CreateKycForm,
  getCompetitorMaster,
  updateKyc,
} from "./MenuSaga";

// import {
//   createOnboarding,
//   UpdateOnboarding,
//   watchOnboardingForm,
//   UploadImage,
//   watchUpdateOnboardingForm,
//   getVisitOnboarding,
//   submitForApproval,
//   showOnboardingModal,
//   CreateAgainstVisit,
//   getLastVisit,
//   getCityList,
//   submitForApprovaReject,
// } from "./MenuSaga";

export default function* root() {
  yield all([
    fork(networkSaga, {
      pingInterval: 30000,
    }),
    takeLatest(StartupTypes.STARTUP, startup), // Run the startup saga when the application starts
    takeLatest(offlineActionTypes.CONNECTION_CHANGE, runQueue),

    fork(watchUserLoginRequest),
    fork(watchUserStartDayRequest),
    fork(watchUserLogoutRequest),
    fork(watchSubmitBeatPlan),
    takeLatest(UserTypes.FETCH_ALL_AREAS, fetchAllAreas),
    takeLatest(UserTypes.FETCH_AGENT_DETAILS, fetchAgentDetails),
    takeLatest(UserTypes.END_USER_DAY, endDay),
    takeLatest(UserTypes.MARK_USER_ABSENT, markAbsent),
    takeLatest(UserTypes.CHECK_ATTENDANCE, checkAttendance),
    takeLatest(UserTypes.FETCH_ALL_PSM, fetchAllPsm),
    takeLatest(UserTypes.FETCH_PJP, fetchPjp),
    takeLatest(UserTypes.UPDATE_ATTENDANCE, updateAttendance),
    takeLatest(UserTypes.GET_ONBOARDING, getOnboarding),
    takeLatest(UserTypes.GET_IMAGE_ONBOARDING, getImageOnboarding),
    takeLatest(UserTypes.FETCH_BEAT_PJP, fetchBeatPjp),
    takeLatest(UserTypes.FETCH_TOTAL_OUTLET, fetchTotalOutlet),
    takeLatest(UserTypes.PRESS_TAG_PJP, pressTagPjp),
    takeLatest(UserTypes.MANAGER_LIST, managerList),
    takeLatest(UserTypes.SUBMIT_APPROVAL, submitApproval),
    takeLatest(UserTypes.APPROVE_REJECT_PJP, approveRejectPjp),
    takeLatest(UserTypes.GET_DIVISION, getDivision),
    takeLatest(UserTypes.GET_BRANCH_MASTER, getBranchMaster),
    takeLatest(UserTypes.GET_ALL_PART_MASTER, getAllPartMaster),
    // takeLatest(UserTypes.SELECT_MANAGER, selectManager),

    fork(watchCreateRetailerRequest),
    fork(watchUpdateRetailerRequest),
    fork(watchsubmitPaymentsForm),
    fork(watchCreateDsrRequest),
    takeLatest(RetailersTypes.FETCH_RETAILERS, fetchRetailers),
    takeLatest(RetailersTypes.FETCH_DEALERS, fetchDealers),
    takeLatest(RetailersTypes.FETCH_RETAILER_ORDERS, fetchRetailerOrders),
    takeLatest(RetailersTypes.UPDATE_RETAILER_LOCATION, updateRetailerLocation),
    takeLatest(
      RetailersTypes.FETCH_RETAILER_COMPETITORS,
      fetchRetailerCompetitors
    ),
    takeLatest(
      RetailersTypes.FETCH_RETAILER_DEALER_SEARCH_BY_LOCATION,
      fetchRetailerDealerSearchByLocation
    ),
    takeLatest(
      RetailersTypes.EXTRACT_RETAILER_INFO_DATA,
      extractRetailerInfoData
    ),
    takeLatest(RetailersTypes.FETCH_INVOICE_DETAIL, fetchInvoiceDetail),
    takeLatest(RetailersTypes.FETCH_DEALER_ORDERS, fetchDealerOrders),
    takeLatest(RetailersTypes.FETCH_DEALER_INVOICE, fetchDealerInvoice),
    takeLatest(RetailersTypes.FETCH_DEALER_OUTSTANDING, fetchDealerOutstanding),
    takeLatest(RetailersTypes.FETCH_DEALER_PAYMENTS, fetchDealerPayments),
    takeLatest(RetailersTypes.CREATE_COMPETITOR, createCompetitor),
    takeLatest(RetailersTypes.FETCH_DSR, fetchDsr),
    takeLatest(RetailersTypes.FETCH_DSR_AREA, fetchDsrArea),
    takeLatest(RetailersTypes.FETCH_DSR_AREA_LIST, fetchDsrAreaList),
    takeLatest(RetailersTypes.CREATE_DSR_AREA, createDsrArea),

    takeLatest(RetailersTypes.FETCH_CREDIT_LIMIT, fetchCreditLimit),
    takeLatest(RetailersTypes.DELETE_ORDER_LINE, deleteOrderLine),
    takeLatest(RetailersTypes.EDIT_ORDER_QUANTITY, editOrderQuantity),
    takeLatest(RetailersTypes.ADD_ORDER_LINE, addOrderLine),
    takeLatest(RetailersTypes.FETCH_PRODUCTS, fetchProducts),
    takeLatest(RetailersTypes.GET_DEALER_TICKET, getDealerTicket),
    takeLatest(RetailersTypes.GET_DEALER_INFO, getDealerInfo),
    takeLatest(RetailersTypes.GET_DEALER_POINTS, getDealerPoints),

    takeLatest(RetailersTypes.GET_DEALER_GIFT, getDealerGift),

    takeLatest(RetailersTypes.GET_CUSTOMER_FOCUS, getCustomerFocus),

    takeLatest(RetailersTypes.GET_CUSTOMER_GENERAL, getCustomerGeneral),

    fork(watchCreateEventRequest),
    fork(watchUpdateEventRequest),
    takeLatest(EventTypes.FETCH_EVENTS, fetchEvents),
    takeLatest(EventTypes.FETCH_PARTICIPANTS, fetchParticipants),
    takeLatest(EventTypes.ADD_PARTICIPANTS, addParticipants),

    fork(watchCreateSiteRequest),
    fork(watchUpdateSiteRequest),
    fork(watchCreateSiteProductRequest),
    fork(watchUpdateSiteProductRequest),
    takeLatest(SitesTypes.FETCH_SITES, fetchSites),
    takeLatest(SitesTypes.FETCH_SITE_PRODUCTS, fetchSiteProducts),

    fork(watchCreateInfluencerRequest),
    fork(watchUpdateInfluencerRequest),
    takeLatest(InfluencersTypes.FETCH_INFLUENCERS, fetchInfluencers),
    takeLatest(InfluencersTypes.FETCH_INFLUENCER_SITES, fetchInfluencerSites),
    takeLatest(
      InfluencersTypes.EXTRACT_INFLUENCER_INFO_DATA,
      extractInfluencerInfoData
    ),

    fork(watchUpdateExpenseRequest),
    fork(watchSendForApprovalLocalExpenseRequest),
    fork(watchApproveRejectLocalRequest),
    fork(watchUploadLocalImageRequest),
    takeLatest(LocalTypes.FETCH_LOCAL_EXPENSE_DATA, fetchLocalExpenseData),
    takeLatest(LocalTypes.FETCH_LOCAL_ITEM_EXPENSES, fetchLocalItemExpenses),
    takeLatest(LocalTypes.FETCH_TEAM_EXPENSES, fetchTeamExpenses),
    takeLatest(LocalTypes.FETCH_TEAM_ITEM_EXPENSES, fetchTeamItemExpenses),
    takeLatest(LocalTypes.FETCH_LOCAL_IMAGE, fetchLocalImage),
    takeLatest(LocalTypes.FETCH_VISIT_IMAGE_ATTACH, fetchVisitImageAttach),
    takeLatest(
      LocalTypes.FETCH_EXPENSE_ATTACHMENTS_DETAILS,
      fetchExpenseAttachmentsDetails
    ),

    takeLatest(ExpenseTypes.FETCH_OUTSTATION_ITEM, fetchOutstationItem),
    takeLatest(ExpenseTypes.FETCH_LOCAL_ITEM, fetchLocalItem),
    takeLatest(
      ExpenseTypes.MOVE_LOCAL_TO_OUTSTATION_EXPENSE,
      moveLocalToOutstationExpense
    ),
    takeLatest(
      ExpenseTypes.MOVE_OUTSTATION_TO_LOCAL_EXPENSE,
      moveOutstationToLocalExpense
    ),

    fork(watchUpdateTravelExpenseRequest),
    fork(watchUpdateConvenienceExpenseRequest),
    fork(watchUpdateFoodExpenseRequest),
    fork(watchUpdateIncidentalExpenseRequest),
    fork(watchUpdateOtherExpenseRequest),
    fork(watchUpdateLocalExpenseRequest),
    fork(watchUpdateHotelExpenseRequest),
    fork(watchAddTravelExpenseRequest),
    fork(watchAddConvenienceExpenseRequest),
    fork(watchAddFoodExpenseRequest),
    fork(watchAddExpenseRequest),
    fork(watchAddIncidentalExpenseRequest),
    fork(watchAddOtherExpenseRequest),
    fork(watchAddLocalExpenseRequest),
    fork(watchAddHotelExpenseRequest),
    fork(watchUpdateConvenienceExpenseRequest),
    fork(watchUpdateHotelExpenseRequest),
    fork(watchVisitsByTourRequest),
    fork(watchSendForApprovalOutstationExpenseRequest),
    fork(watchApproveRejectOutstationRequest),
    fork(watchVisitExpenseItemRequest),
    takeLatest(OutstationTypes.SUBMIT_EXPENSE_ITEM, submitExpenseItem),
    takeLatest(
      OutstationTypes.FETCH_MY_OUTSTATION_EXPENSES,
      fetchMyOutstationExpenses
    ),
    takeLatest(
      OutstationTypes.FETCH_MY_OUTSTATION_ITEM_EXPENSES,
      fetchMyOutstationItemExpenses
    ),
    takeLatest(
      OutstationTypes.FETCH_TEAM_OUTSTATION_EXPENSES,
      fetchTeamOutstationExpenses
    ),
    takeLatest(OutstationTypes.FETCH_TRAVEL_EXPENSES, fetchTravelExpenses),
    takeLatest(
      OutstationTypes.FETCH_CONVENIENCE_EXPENSES,
      fetchConvenienceExpenses
    ),
    takeLatest(OutstationTypes.FETCH_HOTEL_EXPENSES, fetchHotelExpenses),
    takeLatest(OutstationTypes.FETCH_FOOD_EXPENSES, fetchFoodExpenses),
    takeLatest(
      OutstationTypes.FETCH_INCIDENTAL_EXPENSES,
      fetchIncidentalExpenses
    ),
    takeLatest(OutstationTypes.FETCH_OTHER_EXPENSES, fetchOtherExpenses),
    takeLatest(OutstationTypes.FETCH_LOCAL_EXPENSES, fetchLocalExpensesType),
    takeLatest(OutstationTypes.FETCH_APPROVED_TOUR, fetchApprovedTour),
    takeLatest(
      OutstationTypes.UPDATE_LOCAL_EXPENSE_STATUS,
      updateLocalExpenseStatus
    ),
    takeLatest(OutstationTypes.UPDATE_EMAIL_STATUS, updateEmailStatus),
    takeLatest(OutstationTypes.FETCH_EXPENSE_IMAGE, fetchExpenseImage),

    fork(watchCreateTourRequest),
    fork(watchUpdateTourRequest),
    fork(watchApproveRejectTourRequest),
    fork(watchSendForApprovalTourRequest),
    takeLatest(TourTypes.FETCH_CITIES, fetchCities),
    takeLatest(TourTypes.FETCH_MY_TOUR, fetchMyTour),
    takeLatest(TourTypes.FETCH_TEAM_TOUR, fetchTeamTour),

    fork(watchPlaceOrder),
    fork(watchAddVisitInfo),
    fork(watchCompetitorForm),
    fork(watchStockForm),
    fork(watchSubmitSelectedPlannedVisits),
    fork(watchSubmitSelectedUnplannedVisits),
    fork(watchUpdateStockForm),
    fork(watchUpdateCompetitorForm),
    takeLatest(VisitsTypes.FETCH_VISITS_STORAGE_LIST, fetchVisitsStorageList),
    takeLatest(VisitsTypes.FETCH_VISITS_DISPLAY_LIST, fetchVisitsDisplayList),
    takeLatest(VisitsTypes.GET_VISITS_DISPLAY_LIST, getVisitsDisplayList),
    // takeLatest(VisitsTypes.SUBMIT_SELECTED_PLANNED_VISITS, submitSelectedPlannedVisits),
    // takeLatest(VisitsTypes.SUBMIT_SELECTED_UNPLANNED_VISIT, submitSelectedUnplannedVisit),
    takeLatest(VisitsTypes.CANCEL_VISIT, cancelVisit),
    takeLatest(VisitsTypes.EDIT_VISIT, editVisit),
    takeLatest(VisitsTypes.ADD_ITEM_TO_CART, addItemToCart),
    takeLatest(VisitsTypes.REMOVE_ITEM_FROM_CART, removeItemFromCart),
    takeLatest(VisitsTypes.EDIT_CART_ORDER, editCartOrder),
    takeLatest(VisitsTypes.START_VISIT, startVisit),
    takeLatest(VisitsTypes.END_VISIT, endVisit),
    takeLatest(VisitsTypes.PRESS_START_VISIT, pressStartVisit),
    takeLatest(VisitsTypes.PRESS_END_VISIT, pressEndVisit),
    takeLatest(VisitsTypes.PRESS_EDIT_VISIT, pressEditVisit),
    takeLatest(VisitsTypes.PRESS_CANCEL_VISIT, pressCancelVisit),
    takeLatest(VisitsTypes.FETCH_VISIT_INFO, fetchVisitInfo),
    takeLatest(VisitsTypes.FETCH_VISIT_IMAGE, fetchVisitImage),
    takeLatest(VisitsTypes.GET_COMPETITOR, getCompetitor),
    takeLatest(VisitsTypes.GET_STOCK, getStock),
    takeLatest(VisitsTypes.GET_PARENT_AREAS, getParentAreas),
    takeLatest(VisitsTypes.ADD_BULK_VISITS_TO_PLAN, addBulkVisitsToPlan),
    takeLatest(VisitsTypes.REMOVE_BULK_VISITS_TO_PLAN, removeBulkVisitsToPlan),
    takeLatest(VisitsTypes.CREATE_VISIT_INFO, createVisitInfo),
    takeLatest(VisitsTypes.UPDATE_VISIT_INFO, updateVisitInfo),

    takeLatest(ProductTypes.FETCH_PRODUCTS_BRAND, fetchProductBrand),
    takeLatest(ProductTypes.FETCH_SCHEMES, fetchSchemes),
    takeLatest(ProductTypes.GET_ALL_PRODUCTS, getAllProducts),
    takeLatest(ProductTypes.FETCH_PRODUCT_CATEGORIES, fetchProductCategories),
    //takeLatest(ProductTypes.FETCH_PRODUCT_CATEGORIES, fetchProductCategories),
    takeLatest(ProductTypes.FETCH_PRODUCT_GSM, fetchProductGsm),
    takeLatest(
      ProductTypes.FETCH_PRODUCT_SUB_SUB_CATEGORIES,
      fetchProductSubSubCategories
    ),
    takeLatest(
      ProductTypes.MAKE_CATEGORY_DISPLAY_LIST,
      makeCategoryDisplayList
    ),
    takeLatest(
      ProductTypes.MAKE_SUB_CATEGORY_DISPLAY_LIST,
      makeSubCategoryDisplayList
    ),
    takeLatest(
      ProductTypes.MAKE_SUB_SUB_CATEGORY_DISPLAY_LIST,
      makeSubSubCategoryDisplayList
    ),
    takeLatest(ProductTypes.FETCH_PRODUCT_ITEM, fetchProductItem),
    takeLatest(ProductTypes.FETCH_PRODUCT_ITEM_PRICE, fetchProductItemPrice),
    takeLatest(ProductTypes.CHANGE_DEALER_DISCOUNT, changeDealerDiscount),
    takeLatest(ProductTypes.GET_COLOR_MIX_MASTER, getColorMixMaster),
    takeLatest(ProductTypes.GET_PRODUCT_SERIES, getProductSeries),
    takeLatest(ProductTypes.GET_ALL_PACK_SIZE, getAllPackSize),
    takeLatest(ProductTypes.FETCH_PLANT, fetchPlant),
    takeLatest(ProductTypes.ADD_PRODUCT_CART, addProductCart),
    takeLatest(ProductTypes.REMOVE_PRODUCT_CART, removeProductCart),
    takeLatest(ProductTypes.ADD_PRICE_PRODUCT_CART, addPriceProductCart),
    takeLatest(ProductTypes.REMOVE_PRICE_PRODUCT_CART, removePriceProductCart),
    takeLatest(ProductTypes.GET_SECONDARY_PRODUCT, getSecondaryProduct),
    takeLatest(ProductTypes.CHANGE_COUNT, changeCount),


    takeLatest(OrdersTypes.FETCH_ALL_ORDERS, fetchAllOrders),
    takeLatest(OrdersTypes.FETCH_ORDER_DETAILS, fetchOrderDetails),
    takeLatest(OrdersTypes.FETCH_DEALER_ORDER_DETAILS, fetchDealerOrderDetails),
    takeLatest(OrdersTypes.REPEAT_ORDER, repeatOrder),
    takeLatest(OrdersTypes.FETCH_SECONDARY_ORDER, fetchSecondaryOrder),
    takeLatest(OrdersTypes.CREATE_PRIMARY_ORDER, createPrimaryOrder),
    takeLatest(OrdersTypes.CREATE_SECONDARY_ORDER, createSecondaryOrder),
    takeLatest(OrdersTypes.GET_CUSTOMER_PRIMARY_ORDER, getCustomerPrimaryOrder),
    takeLatest(OrdersTypes.ORDER_PRICE, OrderPrice),

    takeLatest(CommonTypes.FETCH_ALL_AREA_PJP, fetchAgentAreaPjp),
    takeLatest(CommonTypes.FETCH_OBJECTIVE, fetchObjective),
    takeLatest(CommonTypes.FETCH_STATE, fetchState),
    takeLatest(CommonTypes.FETCH_CITY, fetchCity),
    takeLatest(CommonTypes.UPLOAD_IMAGE, uploadImage),
    takeLatest(CommonTypes.FETCH_BEAT, fetchBeat),
    takeLatest(CommonTypes.FETCH_DIST_CHANNEL, fetchDistChannel),
    takeLatest(CommonTypes.FETCH_ALL_PLANT, fetchAllPlant),
    takeLatest(CommonTypes.FETCH_ALL_INSURANCE, fetchAllInsurance),
    takeLatest(CommonTypes.FETCH_ALL_ROUTE, fetchAllRoute),
    takeLatest(CommonTypes.FETCH_INCO_TERM, fetchIncoTerm),
    takeLatest(CommonTypes.FETCH_RETAILER_AREA, fetchRetailerArea),
    takeLatest(CommonTypes.FETCH_DEALER_TYPE, fetchDealerType),
    takeLatest(CommonTypes.FETCH_TODAY_AREA_PJP, fetchTodayAreaPjp),
    takeLatest(CommonTypes.GET_BILL_PARTY, getBillParty),
    takeLatest(CommonTypes.FETCH_ALL_CITY, fetchAllCity),
    takeLatest(CommonTypes.FETCH_CURRENT_LOCATION, fetchCurrentLocation),
    takeLatest(CommonTypes.GET_ALL_TERRITORY, getAllTerritory),
    takeLatest(CommonTypes.GET_USER_TERRITORY, getUserTerritory),
    takeLatest(CommonTypes.GET_PART_NUMBER, getPartNumber),
    takeLatest(CommonTypes.GET_INVENTORY, getInventory),
    takeLatest(CommonTypes.ACCOUNT_REPORT, accountReport),
    takeLatest(DashboardTypes.GET_ORDER_VALUE, getOrderValue),
    takeLatest(DashboardTypes.GET_VISIT_COUNT, getVisitCount),
    takeLatest(DashboardTypes.GET_SITE_COUNT, getSiteCount),
    takeLatest(DashboardTypes.GET_COUNTERS, getCounters),
    takeLatest(DashboardTypes.GET_EVENT_COUNT, getEventCount),
    takeLatest(DashboardTypes.GET_DASHBOARD_SUMMARY, getDashboardSummary),
    takeLatest(DashboardTypes.GET_DASHBOARD_BANNER, getDashboardBanner),
    takeLatest(DashboardTypes.GET_DASHBOARD_TICKER, getDashboardTicker),
    takeLatest(DashboardTypes.GET_PRIMARY_SUMMARY, getPrimarySummary),
    takeLatest(DashboardTypes.GET_DASHBOARD_CAMPAIGN, getDashboardCampaign),
    takeLatest(DashboardTypes.GET_DASHBOARD_VISIT, getDashboardVisit),
    takeLatest(DashboardTypes.GET_SALES_GENERAL, getSalesGeneral),
    takeLatest(DashboardTypes.GET_SALES_FOCUS, getSalesFocus),

    fork(fetchGlobalTokenTaskWatcher),
    takeLatest(StartDayTypes.FETCH_GLOBLE_USER_DETAIL, fetchGlobleUserDetail),

    fork(watchOnboardingForm),
    fork(watchUpdateOnboardingForm),
    // takeLatest(MenuTypes.CREATE_ONBOARDING, createOnboarding),
    // takeLatest(MenuTypes.UPDATE_ONBOARDING, UpdateOnboarding),
    takeLatest(MenuTypes.UPLOAD_IMAGE, UploadImage),
    takeLatest(MenuTypes.GET_VISIT_ONBOARDING, getVisitOnboarding),
    takeLatest(MenuTypes.GET_LAST_VISIT, getLastVisit),
    takeLatest(MenuTypes.SUBMIT_FOR_APPROVAL, submitForApproval),
    takeLatest(MenuTypes.SHOW_ONBOARDING_MODAL, showOnboardingModal),
    takeLatest(MenuTypes.CREATE_AGAINST_VISIT, CreateAgainstVisit),
    takeLatest(MenuTypes.GET_CITY_LIST, getCityList),
    takeLatest(MenuTypes.SUBMIT_FOR_APPROVA_REJECT, submitForApprovaReject),
    takeLatest(MenuTypes.GET_CAMPAIGN_ATTENDEES, getCampaignAttendees),

    takeLatest(MenuTypes.FETCH_TICKET, fetchTicket),
    takeLatest(MenuTypes.CREATE_TICKET, CreateTicket),
    takeLatest(MenuTypes.GET_COMPETITOR_SCHEME, getCompetitorScheme),
    takeLatest(MenuTypes.CREATE_CAMPAIGN, createCampaign),
    takeLatest(MenuTypes.GET_CAMPAIGN_RECORD, getCampaignRecord),

    takeLatest(MenuTypes.CREATE_COMPETITOR_SCHEME, createCompetitorScheme),
    takeLatest(MenuTypes.CREATE_ATTENDEE, createAttendee),
    takeLatest(MenuTypes.UPDATE_CAMPAIGN, updateCampaign),
    takeLatest(MenuTypes.CREATE_KYC_FORM, CreateKycForm),
    takeLatest(MenuTypes.GET_COMPETITOR_MASTER, getCompetitorMaster),
    takeLatest(MenuTypes.UPDATE_KYC, updateKyc),

  ]);
}
