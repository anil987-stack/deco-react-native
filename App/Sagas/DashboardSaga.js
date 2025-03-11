import { dashboardService } from "App/Services/Api/DashboardService";
import { getConnectionStatus } from "App/Stores/Common/Selectors";
import DashboardActions from "App/Stores/Dashboard/Actions";
import { call, put, select } from "redux-saga/effects";

// getOrderValue
// getVisitCount
// getSiteCount
// getCounters
// getEventCount

export function* getOrderValue({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getOrderValueLoading());

  try {
    let successData = yield call(dashboardService.getOrderValue, payload);
    if (successData) {
      yield put(DashboardActions.getOrderValueSuccess(successData));
    } else {
      yield put(DashboardActions.getOrderValueFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getOrderValueFailure());
  }
}

export function* getVisitCount({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getVisitCountLoading());

  try {
    let successData = yield call(dashboardService.getVisitCount, payload);
    if (successData) {
      yield put(DashboardActions.getVisitCountSuccess(successData));
    } else {
      yield put(DashboardActions.getVisitCountFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getVisitCountFailure());
  }
}

export function* getSiteCount({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getSiteCountLoading());

  try {
    let successData = yield call(dashboardService.getSiteCount, payload);
    if (successData) {
      yield put(DashboardActions.getSiteCountSuccess(successData));
    } else {
      yield put(DashboardActions.getSiteCountFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getSiteCountFailure());
  }
}

export function* getCounters({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getCountersLoading());

  try {
    let successData = yield call(dashboardService.getCounters, payload);
    if (successData) {
      yield put(DashboardActions.getCountersSuccess(successData));
    } else {
      yield put(DashboardActions.getCountersFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getCountersFailure());
  }
}

export function* getEventCount({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getEventCountLoading());

  try {
    let successData = yield call(dashboardService.getEventCount, payload);
    if (successData) {
      yield put(DashboardActions.getEventCountSuccess(successData));
    } else {
      yield put(DashboardActions.getEventCountFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getEventCountFailure());
  }
}

export function* getDashboardSummary({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getDashboardSummaryLoading());

  try {
    let user = yield select((state) => state.user);
    payload.team__c = user.id;
    let successData = yield call(dashboardService.getDashboardSummary, payload);
    if (successData) {
      yield put(DashboardActions.getDashboardSummarySuccess(successData));
    } else {
      yield put(DashboardActions.getDashboardSummaryFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getDashboardSummaryFailure());
  }
}

export function* getDashboardBanner({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getDashboardBannerLoading());

  try {
    let user = yield select((state) => state.user);
    payload.team__c = user.id;
    let successData = yield call(dashboardService.getDashboardBanner, payload);
    if (successData) {
      yield put(DashboardActions.getDashboardBannerSuccess(successData));
    } else {
      yield put(DashboardActions.getDashboardBannerFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getDashboardBannerFailure());
  }
}

export function* getPrimarySummary({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getPrimarySummaryLoading());

  try {
    let successData = yield call(dashboardService.getPrimarySummary, payload);
    if (successData) {
      yield put(DashboardActions.getPrimarySummarySuccess(successData));
    } else {
      yield put(DashboardActions.getPrimarySummaryFailure());
    }
  } catch (error) {
    // console.log('Error', error)
    yield put(DashboardActions.getPrimarySummaryFailure());
  }
}

export function* getDashboardCampaign({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getDashboardCampaignLoading());

  try {
    let successData = yield call(
      dashboardService.getDashboardCampaign,
      payload
    );
    if (successData) {
      yield put(DashboardActions.getDashboardCampaignSuccess(successData));
    } else {
      yield put(DashboardActions.getDashboardCampaignFailure());
    }
  } catch (error) {
    // console.log('Error', error)
    yield put(DashboardActions.getDashboardCampaignFailure());
  }
}

export function* getDashboardVisit({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getDashboardVisitLoading());

  try {
    let successData = yield call(dashboardService.getDashboardVisit, payload);
    if (successData) {
      yield put(DashboardActions.getDashboardVisitSuccess(successData));
    } else {
      yield put(DashboardActions.getDashboardVisitFailure());
    }
  } catch (error) {
    // console.log('Error', error)
    yield put(DashboardActions.getDashboardVisitFailure());
  }
}

export function* getSalesGeneral({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getSalesGeneralLoading());

  try {
    let successData = yield call(dashboardService.getSalesGeneral, payload);
    if (successData) {
      yield put(DashboardActions.getSalesGeneralSuccess(successData));
    } else {
      yield put(DashboardActions.getSalesGeneralFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getSalesGeneralFailure());
  }
}
export function* getSalesFocus({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getSalesFocusLoading());

  try {
    let successData = yield call(dashboardService.getSalesFocus, payload);
    if (successData) {
      yield put(DashboardActions.getSalesFocusSuccess(successData));
    } else {
      yield put(DashboardActions.getSalesFocusFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getSalesFocusFailure());
  }
}

export function* getDashboardTicker({ payload }) {
  const isOnline = yield select(getConnectionStatus);
  if (!isOnline) {
    yield put(DashboardActions.doNothing());
    return;
  }

  yield put(DashboardActions.getDashboardTickerLoading());

  try {
    let user = yield select((state) => state.user);
    payload.team__c = user.id;
    let successData = yield call(dashboardService.getDashboardTicker, payload);
    if (successData) {
      yield put(DashboardActions.getDashboardTickerSuccess(successData));
    } else {
      yield put(DashboardActions.getDashboardTickerFailure());
    }
  } catch (error) {
    console.log("Error", error);
    yield put(DashboardActions.getDashboardTickerFailure());
  }
}
