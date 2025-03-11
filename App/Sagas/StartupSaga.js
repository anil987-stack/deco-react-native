import { put, select, call } from "redux-saga/effects";
import NavigationService from "App/Services/NavigationService";
import UserActions from "App/Stores/User/Actions";
import RetailersActions from "App/Stores/Retailers/Actions";
import ProductActions from "App/Stores/Products/Actions";
import InfluencerActions from "App/Stores/Influencers/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import TourAction from "App/Stores/Tour/Actions";
import LocalAction from "../Stores/LocalExpense/Actions";
import VisitAction from "../Stores/Visits/Actions";
import StartDayActions from "App/Stores/StartDay/Actions";
import CommonActions from "App/Stores/Common/Actions";
import MenuActions from "App/Stores/Menu/Actions";
//import StartDayActions from '../Stores/StartDay/Actions';
import { userService } from "App/Services/Api/UserService";
import { visitService } from "../Services/Api/VisitsService";
import moment from "moment";

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */

export function* startup({ params }) {
  let user = yield select((state) => state.user);
  let retailers = yield select((state) => state.retailers);
  let products = yield select((state) => state.products);
  let influencers = yield select((state) => state.influencers);
  let tours = yield select((state) => state.tours);

  const {
    id,
    token,
    monthNumber,
    startDayTime,
    endDayTime,
    absentDayTime,
    loginDetails,
  } = user;

  const { retailersOffset, retailersLimit } = retailers;

  const {
    productOffset,
    productLimit,
    categoryOffset,
    categoryLimit,
  } = products;

  const { influencerOffset, influencerLimit } = influencers;

  let startedToday = startDayTime ? HelperService.isToday(startDayTime) : false;
  let endedToday = endDayTime ? HelperService.isToday(endDayTime) : false;
  let absentToday = absentDayTime
    ? HelperService.isToday(absentDayTime)
    : false;

  let logged_in = token && id;
  if (logged_in) {
    // if user us already logged in
    if (startedToday) {
      // user has started the day
      NavigationService.navigateAndReset("DashboardScreen");
    } else if (endedToday) {
      // user has ended the day
      NavigationService.navigateAndReset("DashboardScreen");
    } else if (absentToday) {
      // user has ended the day
      NavigationService.navigateAndReset("DashboardScreen");
    } else {
      // user has neither started or ended the day
      NavigationService.navigateAndReset("DashboardScreen");
    }

    let monthIndex = moment().format("M") - 1;
    // console.log("monthIndex",monthIndex)
    yield put(StartDayActions.fetchGlobleToken());
    yield put(
      UserActions.updateMonthNumber(
        HelperService.getMonthMappingFullName(monthIndex)
      )
    );
    // yield put(
    //   UserActions.getImageOnboarding({
    //     token,
    //   })
    // );
    // console.log("monthIndex",month)
    //fetch user areas if logged in already
    //  yield put(UserActions.fetchAllAreas({
    //    token,
    //    agentid: id
    //  }));

    //fetch user areas if logged in already
    // yield put(UserActions.fetchAgentDetails({
    // token,
    //agentid: id
    //}));

    //api to check agent attendance details : Todo=> uncomment
   
    // yield put(
    //   UserActions.checkAttendance({
    //     token,
    //   })
    // );
    // yield put(
    //   UserActions.getImageOnboarding({
    //     token,
    //   })
    // );
    // yield put(
    //   RetailersActions.fetchRetailers({
    //     token,
    //   })
    // );
    // yield put(
    //   UserActions.getBranchMaster({
    //     token,
    //   })
    // );
    // yield put(
    //   UserActions.fetchAllPsm({
    //     token,
    //   })
    // );
    // yield put(
    //   MenuActions.getCompetitorMaster({
    //     token,
    //   })
    // );
    // yield put(UserActions.getDivision({
    //   token
    // }));
    // yield put(UserActions.fetchPjp({
    //   userId:loginDetails.userId,
    //   m:HelperService.getMonthMappingFullName(monthIndex),
    //   token,
    // }));
    // yield put(LocalAction.fetchLocalExpenseData({
    //   token
    // }));
    // yield put(
    //   CommonActions.getAllTerritory({
    //     token,
    //     userId: loginDetails.userId,
    //   })
    // );
    // yield put(CommonActions.getUserTerritory({
    //    token,
    //    userId:loginDetails.userId,
    //  }));

    // yield put(CommonActions.fetchAllCity({
    //    token,
    //  }));
    // yield put(CommonActions.fetchObjective({
    //    token,
    //  }));
    //  yield put(RetailersActions.fetchRetailerCompetitors({
    //   token,
    // }));
    // yield put(RetailersActions.fetchProducts({
    //   token,
    // }));
    // yield put(RetailersActions.fetchRetailers({
    //   token,
    // }));

    // yield put(VisitAction.cleanBulkVisitData(

    // ));

    // UserActions.fetchPjp({

    //   userId:id,
    //   m:monthNumber,
    //   token,
    //   // agentid: id,
    //   // startDate: searchFilters['startDate'],
    //   // endDate: searchFilters['endDate']
    // })

    //fetch all PSMs for a agent
    //  yield put(UserActions.fetchAllPsm({
    //  token,
    // agentid: id
    //}));

    //fetch all competitors logged in already
    //  yield put(RetailersActions.fetchRetailerCompetitors({
    //    token
    //   }));

    //  yield put(RetailersActions.fetchProducts({
    //    token,
    //    competitorId:'a0FO000000TD0HoMAL'
    //   }));

    //fetch all retailers on startup if logged in already

    // yield put(VisitAction.fetchVisitsDisplayList({
    //   token,

    // }));
    // yield put(VisitAction.getCompetitor({
    //   token,
    //   visitId:"a01O000000uaG11IAE",
    // }));

    // yield put(VisitAction.getCompetitor({
    //   token,
    // }));
    // yield put(UserActions.fetchAllPsm({
    //   token,

    // }));

    //fetch all dealers on startup if logged in already
    // yield put(RetailersActions.fetchDealers({
    //  token,
    //  agentid: id,
    //offset: retailersOffset,
    // limit: retailersLimit

    // }));

    // yield put(ProductActions.getAllProducts({
    //   token
    // }));

    // yield put(
    //   ProductActions.fetchProductCategories({
    //     token,
    //     //   agentid: id,
    //     //  offset: categoryOffset,
    //     //   limit: categoryLimit
    //   })
    // );
    //   yield put(ProductActions.getColorMixMaster({
    //     token,
    //    //   agentid: id,
    //    //  offset: categoryOffset,
    //    //   limit: categoryLimit
    //    }));
    //    yield put(ProductActions.getProductSeries({
    //     token,
    //    //   agentid: id,
    //    //  offset: categoryOffset,
    //    //   limit: categoryLimit
    //    }));
    //    yield put(ProductActions.getAllPackSize({
    //     token,
    //    //   agentid: id,
    //    //  offset: categoryOffset,
    //    //   limit: categoryLimit
    //    }));

    // yield put(
    //   ProductActions.getProductSeries({
    //     token,
    //     // agentid: id,
    //     // offset: productOffset,
    //     // limit: productLimit
    //   })
    // );

    // yield put(
    //   ProductActions.getAllPackSize({
    //     token,
    //     // agentid: id,
    //     // offset: categoryOffset,
    //     // limit: categoryLimit
    //   })
    // );
    // yield put(
    //   ProductActions.getColorMixMaster({
    //     token,
    //     // agentid: id,
    //     // offset: categoryOffset,
    //     // limit: categoryLimit
    //   })
    // );

    // yield put(InfluencerActions.fetchInfluencers({
    //  token,
    //agentid: id,
    // offset: influencerOffset,
    //limit: influencerLimit
    // }));

    //  yield put(TourAction.fetchCities({
    //  token,
    //  agentid: id
    // }))

    // yield put(CommonActions.fetchObjective({ token,})),

    //yield put(CommonActions.fetchState({ token,})),
    //yield put(CommonActions.fetchCity({ token,
    // }))

    //yield put(CommonActions.fetchAllCity({ token,
    //}))

    ///yield put(CommonActions.fetchBeat({ token,}),)

    //yield put(CommonActions.fetchRetailerArea({ token,}),)

    // yield put(CommonActions.fetchDealerType({ token,}),)
    // console.log("hehehhehehhehehehheh")
    const appData = yield call(userService.getAppVersion, { token });
    // console.log("appData",appData)
    //  let android_version = appData?appData[0].Name:'';

    // appData ? HelperService.checkAppVersion(android_version) : '';
  } else {
    // if user is not logged in
    NavigationService.navigateAndReset("LoginScreen");
  }
}
