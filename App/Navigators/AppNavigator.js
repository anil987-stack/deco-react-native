import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from 'App/Containers/Login'
import LoginOtpScreen from 'App/Containers/Login/LoginOtpScreen'
import UserScreen from 'App/Containers/Login/ResetPassword/UserScreen'
import ResetScreen from 'App/Containers/Login/ResetPassword/ResetScreen'
import ChangePassword from 'App/Containers/Login/ResetPassword/ChangePassword'
import NewPassword from 'App/Containers/Login/ResetPassword/NewPassword'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import StartDayScreen from 'App/Containers/StartDay'
import AbsentModal from 'App/Containers/StartDay/AbsentModal'
import StartDaySelectionScreen from 'App/Containers/StartDay/StartDaySelectionScreen'
import PresentScreen from 'App/Containers/Present'
import WorkFromHomeScreen from 'App/Containers/Present/WorkFromHomeScreen'
import MarketScreen from 'App/Containers/Present/MarketScreen'
import InOfficeScreen from 'App/Containers/Present/InOfficeScreen'
import TravelModeScreen from 'App/Containers/Present/TravelModeScreen'
import AbsentScreen from 'App/Containers/Absent'
import SelectCalendar from 'App/Containers/Absent/SelectCalendar'
import EndDayScreen from 'App/Containers/EndDay'
import EndDayHome from 'App/Containers/EndDay/EndDayHome'
import CompletedDayScreen from 'App/Containers/CompletedDay'
import VisitsScreen from 'App/Containers/Visits/VisitsDisplayScreen'
import SelectedVisitsScreen from 'App/Containers/Visits/PlannedVisit/SelectedPlannedVisitsScreen'
import TicketingScreen from 'App/Containers/Visits/VisitsDisplayScreen/TicketingScreen'
import EndVisitModal from 'App/Containers/Visits/VisitsDisplayScreen/EndVisitModal'
import DashboardScreen from 'App/Containers/Dashboard'
import NewRetailer from 'App/Containers/Retailers/NewRetailer'
import UpdateRetailer from 'App/Containers/Retailers/NewRetailer/UpdateRetailer'
import RetailerList from 'App/Containers/Retailers/RetailerList'
import RetailerInfoScreen from 'App/Containers/Retailers/RetailerInfoScreen'
import DealerInfoScreen from 'App/Containers/Retailers/DealerInfoScreen'
import RetailerOrdersListScreen from 'App/Containers/Retailers/RetailerOrdersListScreen'
import Retailer360 from '../Containers/Retailers/Retailer360/Retailer360'
import OrdersListScreen from 'App/Containers/Orders/OrdersListScreen'
import OrderInfoScreen from 'App/Containers/Orders/OrderInfoScreen'
import ReOrderInfoScreen from 'App/Containers/Orders/ReOrderInfoScreen'
import UnplannedOptionsScreen from 'App/Containers/UnplannedVisits/OptionsScreen'
import RetailerResultListScreen from 'App/Containers/UnplannedVisits/RetailerResultList'
import StartVisitForm from 'App/Containers/Visits/VisitForm'
import ScoutingVisitInfo from 'App/Containers/Visits/VisitForm/ScoutingVisitInfo'
import AddPlannedVisitsScreen from 'App/Containers/Visits/PlannedVisit/AddPlannedVisitsScreen'
import SuggestionScreen from 'App/Containers/Visits/PlannedVisit/SuggestionScreen'
import VisitTabs from 'App/Containers/Visits/PlannedVisit/VisitTabs'
import SelectedPlannedVisitsScreen from 'App/Containers/Visits/PlannedVisit/SelectedPlannedVisitsScreen'
import SearchByAreaScreen from 'App/Containers/UnplannedVisits/SearchByAreaScreen'
import SearchByLocationScreen from 'App/Containers/UnplannedVisits/SearchByLocationScreen'
import VisitBookOrder from 'App/Containers/Visits/VisitBookOrder'
import VisitPerformance from 'App/Containers/Retailers/Retailer360/VisitPerformance/VisitPerformance'

import VisitBookOrderHeader from 'App/Containers/Visits/VisitBookOrder/VisitBookOrderHeader'
import VisitOrderCart from 'App/Containers/Visits/VisitOrderCart'
import VisitInfoScreen from 'App/Containers/Visits/VisitInfoScreen'
import VisitRetailerInfo from 'App/Containers/Visits/VisitRetailerInfo'
import EventList from 'App/Containers/Event/EventList'
import InfluencersListScreen from '../Containers/Influencers/InfluencerList'
import ProfileScreen from 'App/Containers/Profile'

import SiteListScreen from '../Containers/Sites/SitesList/SiteList'
import NewEvent from 'App/Containers/Event/NewEvent'
import EventInfoScreen from 'App/Containers/Event/EventInfoScreen'
import UpdateEvent from 'App/Containers/Event/NewEvent/UpdateEvent'
import AddParticipantScreen from '../Containers/Event/AddParticipantScreen'
import EventParticipantListScreen from 'App/Containers/Event/EventParticipantListScreen'
import NewInfluencers from '../Containers/Influencers/NewInfluencer'
import InfluencerInfoScreen from '../Containers/Influencers/InfluencerInfoScreen';
import UpdateInfluencer from '../Containers/Influencers/NewInfluencer/updateInfluencer';
import NewSites from '../Containers/Sites/NewSites'
import UpdateSite from '../Containers/Sites/NewSites/UpdateSite'
import SitesList from '../Containers/Sites/SitesList'
import SitesInfoScreen from '../Containers/Sites/SitesInfoScreen'
import NewSiteProduct from '../Containers/Sites/AddSiteProduct/AddSiteProduct'
import UpdateSiteProduct from '../Containers/Sites/AddSiteProduct/UpdateSiteProduct'
import SiteProductListScreen from '../Containers/Sites/SiteProductListScreen'
import SiteProductInfoScreen from '../Containers/Sites/SiteProductInfoScreen'
import InfluencerSiteList from 'App/Containers/Influencers/InfluencerSiteList'
import DealerInvoiceListScreen from 'App/Containers/Retailers/DealerInvoiceListScreen'
import DealerOrdersListScreen from 'App/Containers/Retailers/DealerOrdersListScreen'
import DealerOutstandingListScreen from 'App/Containers/Retailers/DealerOutstandingListScreen'
import InvoiceInfoScreen from 'App/Containers/Invoice'
import DealerOrderInfoScreen from 'App/Containers/Orders/OrderInfoScreen/DealerOrderInfoScreen'

import VisitRetailerOutstanding from 'App/Containers/Visits/VisitRetailerOutstanding';
import OutstandingPaymentInfo from 'App/Containers/Visits/VisitRetailerOutstanding/OutstandingPaymentInfo'
import DealerPaymentsListScreen from 'App/Containers/Retailers/DealerPaymentsListScreen'



import MenuScreen from 'App/Containers/Menu'
import MenuDetailScreen from 'App/Containers/Menu/MenuDetailScreen'

import Bookorder from './../Containers/Bookorder/bookorder'
import Addtocart from './../Containers/Bookorder/addtocart'
import EventListScreen from './../Containers/Event/EventList/EventList'
import Selectproduct from './../Containers/Product/selectproduct'
import Selectbrand from './../Containers/Product/selectbrand'
import Selectgsm from './../Containers/Product/selectgsm'
import MyDetails from '../Containers/Dashboard/SummaryTables/MyDetails'
import ComplaintsScreen from 'App/Containers/Retailers/Complaints'
import NewComplaintsScreen from 'App/Containers/Retailers/Complaints/NewComplaints'
import DailyReport from '../Containers/Dashboard/DailyReport'
import AddCompetitorForm from 'App/Containers/Visits/VisitForm/AddCompetitorForm'
import AddStockForm from 'App/Containers/Visits/VisitForm/AddStockForm'
import UpdateStockForm from 'App/Containers/Visits/VisitForm/UpdateStockForm'
import UpdateCompetitorForm from 'App/Containers/Visits/VisitForm/UpdateCompetitorForm'

import NewDsrScreen from 'App/Containers/Retailers/RetailerInfoScreen/DsrScreen/NewDsrScreen'
import DsrListScreen from 'App/Containers/Retailers/RetailerInfoScreen/DsrScreen/DsrListScreen'
import CreditLimit from 'App/Containers/CreditLimit'

import SurveyListScreen from 'App/Containers/Survey'
import SurveyFormScreen from 'App/Containers/Survey/SurveyForm'

import { Easing, Animated } from 'react-native'
import ComplaintScreen from 'App/Containers/Complaints/ComplaintScreen'
import NewComplaint from "App/Containers/Complaints/NewComplaint/NewComplaint";
import ComplaintSecondScreen from 'App/Containers/Complaints/ComplaintSecondScreen/ComplaintSecond'
import BeatPlan from "../Containers/Menu/BeatPlan/index";
import BeatSecondScreen from "../Containers/Menu/BeatPlan/BeatSecondScreen/index";
import BeatForthScreen from "../Containers/Menu/BeatPlan/BeatForthScreen/index";
import BeatThirdScreen from "../Containers/Menu/BeatPlan/GetBeatScreen/index";

import PaymentScreen from '../Containers/Menu/Collections'
import BookOrderForm from '../Containers/Visits/BookOrderForm'
import Complaints from "../Containers/Menu/Complaint/index"
import PurchaseOrder from '../Containers/Menu/PurchaseOrder/PurchaseOrder'
import ApprovedCard from '../Containers/Menu/PurchaseOrder/ApprovedCard'
import OnHoldCard from '../Containers/Menu/PurchaseOrder/OnHoldCard'
import RejectedCard from '../Containers/Menu/PurchaseOrder/RejectedCard'
import CancelledCard from '../Containers/Menu/PurchaseOrder/CancelledCard'
import SalesOrder from '../Containers/Menu/SalesOrder/SalesOrder'
import SalesOrderTrack from '../Containers/Menu/SalesOrder/SalesOrderTrack'
import LineOrder from '../Containers/Menu/SalesOrder/LineOrder'

import BookOrder from '../Containers/Menu/BookOrder/BookOrder'
import Notification from '../Containers/Menu/Notification/Notification'
import Competitors from '../Containers/Menu/Competitors/Competitors'
import ProductPrice from '../Containers/Menu/Competitors/ProductPrice'
import DataRepository from '../Containers/Menu/DataRepository/DataRepository'

import Invoice from '../Containers/Menu/Invoice/Invoice'
import InvoiceDetail from '../Containers/Menu/Invoice/InvoiceDetail'
import InvoiceOrderCard from '../Containers/Menu/Invoice/InvoiceOrderCard'
import InvoiceDetailCard from '../Containers/Menu/Invoice/InvoiceDetailCard'
import InfoCard from '../Containers/Menu/Invoice/InfoCard'

import SecondaryOrder from '../Containers/Menu/SecondaryOrder/SecondaryOrder'
import BrandRequisition from '../Containers/Menu/BrandRequisition/BrandRequisition'
import Expense from '../Containers/Menu/Expense/Expense'
import MyExpenses from '../Containers/Menu/Expense/MyExpenses'
import Twowheeler from '../Containers/Present/Travelmode/Twowheeler'
import Fourwheeler from '../Containers/Present/Travelmode/Fourwheeler'
import Publictransport from '../Containers/Present/Travelmode/Publictransport'
import SalesReport from '../Containers/Menu/SalesReport/SalesReport'
import OnBoarding from '../Containers/Menu/OnBoarding/OnBoarding'
import RetailerKYCForm from '../Containers/Menu/OnBoarding/RetailerKYCForm'
import KYCForm from '../Containers/Menu/OnBoarding/KYCForm'
import InfluencerKYCForm from '../Containers/Menu/ContractorOnboarding/InfluencerKYCForm'
import RetailerForm from '../Containers/Menu/ContractorOnboarding/RetailerForm'
import RetailerMainScreen from '../Containers/Menu/ContractorOnboarding/RetailerMainScreen'
import TagScreen from '../Containers/Visits/TagScreen/TagScreen'
import TagGetScreen from '../Containers/Visits/TagScreen/TagGetScreen'
import TaggedScreen from '../Containers/Visits/TagScreen/TaggedScreen'
import fileShow from '../Containers/Visits/fileShow'

import ActivityScreen from '../Containers/Menu/OnBoarding/ActivityScreen'
import PurchaseOrderfilter from 'App/Containers/Menu/PurchaseOrder/PurchaseOrderfilter'

import LastVisitTagScreen from '../Containers/Retailers/RetailerInfoScreen/Last3Viait/LastVisitTagScreen'
import cartScreen from '../Containers/Menu/BookOrder/cartScreen'
import SecondarycartScreen from "../Containers/Menu/SecondaryBookOrder/cartScreen"
import SecondaryBookOrder from '../Containers/Menu/SecondaryBookOrder/SecondaryBookOrder'
import DealerOrder from '../Containers/Retailers/DealerOrdersListScreen/DealerOrder'

import KycScreen from '../Containers/Menu/Kyc/KycScreen'
import Jodidar from '../Containers/Menu/Kyc/Jodidar'
import Retailer from '../Containers/Menu/Kyc/Retailer'
import Mechanic from '../Containers/Menu/Kyc/Mechanic'
import WHRetailer from '../Containers/Menu/Kyc/WHRetailer'
import AccountStatement from '../Containers/Menu/AccountStatement/AccountStatement'
import Inventory from '../Containers/Menu/Inventory/Inventory'
import CompetitorInfoScreen from '../Containers/Menu/CompetitiorInfo'
import NewCompetitorScreen from '../Containers/Menu/CompetitiorInfo/New_Competitor'
import ExistingCompetitorScreen from '../Containers/Menu/CompetitiorInfo/Existing_Competitor'
import CreateNewCompetitor from '../Containers/Menu/CompetitiorInfo/New_Competitor/CreateNewCompetitor'
import CreateExistingProduct from '../Containers/Menu/CompetitiorInfo/Existing_Competitor/CreateExistingProduct'
import BeatForm from '../Containers/Menu/BeatPlan/BeatForm'
import BulkOrder from '../Containers/Menu/BookOrder/BulkOrder'
import SecondaryBulkOrder from '../Containers/Menu/SecondaryBookOrder/SecondaryBulkOrder'
import PrimarySuccess from '../Containers/Menu/BookOrder/PrimarySuccess'
import SecondarySuccess from '../Containers/Menu/SecondaryBookOrder/SecondarySuccess'
import AccountSuccess from '../Containers/Menu/AccountStatement/AccountSuccess'
import CompetitorSuccess from '../Containers/Menu/CompetitiorInfo/CompetitorSuccess'
import VisitSuccess from '../Containers/Visits/VisitForm/VisitSuccess'
import VisitUpdateSuccess from '../Containers/Visits/VisitForm/VisitUpdateSuccess'
import AttachmentShow from '../Containers/Menu/Attachment/AttachmentShow'
import VisitAttachmentScreen from '../Containers/Visits/VisitAttachment/VisitAttachmentScreen'
import OnboardingSuccess from '../Containers/Menu/OnBoarding/OnboardingSuccess'

import TicketSuccess from '../Containers/Complaints/TicketSucces'
import ShowAttachment from '../Containers/Menu/Attachment/ShowAttachment'
import Offer from '../Containers/Menu/BookOrder/Offer'
import Training from "App/Containers/Training/Training";
import Leads from '../Containers/Menu/Leads/Leads';
import LeadsForm from '../Containers/Menu/Leads/LeadsForm';
import LeadScreen from '../Containers/Menu/Leads/LeadScreen';
import ProjectInfo from '../Containers/Menu/Leads/LeadTabs/ProjectInfo';
import ContractorOnboard from '../Containers/Menu/ContractorOnboarding/OnBoarding'
import KYCFormOnboard from '../Containers/Menu/ContractorOnboarding/KYCForm'
import Document from '../Containers/DocumentManagement/Document'
import DocumentForm from '../Containers/DocumentManagement/DocumentForm'
import Merchandiser from '../Containers/Merchandiser/Merchandiser'
import MerchandiserForm from '../Containers/Merchandiser/MerchandiserFormLayout'

import AddSupply from '../Containers/Menu/Leads/LeadTabs/AddSupply'
import TeleSales from '../Containers/Menu/TaskManagement/TeleSales'
import Aidp from '../Containers/Menu/TaskManagement/Aidp'
import TaskHistoryScreen from '../Containers/Menu/Leads/LeadTabs/TaskHistoryScreen';
import SupplyHistory from '../Containers/Menu/Leads/LeadTabs/SupplyHistory'
import ProductSupply from '../Containers/Menu/Leads/LeadTabs/ProductSupply'
import InfluencerManagement from '../Containers/Menu/ContractorOnboarding/InfluencerManagement/InfluencerManagement'
import Ticket from '../Containers/Menu/TaskManagement/Ticket'
import Influencer360 from '../Containers/Menu/Influencer/Influencer360' 
import LeadPerformance from 'App/Containers/Retailers/Retailer360/LeadsPerformance/LeadsPerformance'
import DealerMainScreen from '../Containers/Menu/Dealer/DealerMainScreen'
/**
 * The root screen contains the application's navigation.
 *
 */
const StackNavigator = createStackNavigator(
  {
    SplashScreen,
    ContractorOnboard,
    KYCFormOnboard,
    Training,
    Offer,
    TicketSuccess,
    VisitSuccess,
    VisitUpdateSuccess,
    CompetitorSuccess,
    PrimarySuccess,
    SecondarySuccess,
    SecondaryBulkOrder,
    AccountSuccess,
    BulkOrder,
    Inventory,
    AccountStatement,
    WHRetailer,
    Retailer,
    Jodidar,
    Mechanic,
    BeatForm,
    KycScreen,
   
    Document,
    DocumentForm,
    Merchandiser,
    MerchandiserForm,
    CreditLimit,
    EventListScreen,
    StartDayScreen,
    AbsentModal,
    Publictransport,
    Fourwheeler,
    Twowheeler,
    PurchaseOrder,
    SecondarycartScreen,
    ApprovedCard,
    OnHoldCard,
    RejectedCard,
    CancelledCard,
    SalesOrder,
    SalesOrderTrack,
    LineOrder,
    BookOrder,
    MarketScreen,
    OnBoarding,
    TaggedScreen,
    TagGetScreen,
    TagScreen,
    BookOrderForm,
    SalesReport,
    Expense,
    SecondaryBookOrder,
    BrandRequisition,

    Notification,
    Competitors,
    ProductPrice,

    SecondaryOrder,

    Invoice,
    InvoiceDetail,
    InvoiceOrderCard,
    InvoiceDetailCard,
    InfoCard,

    MyExpenses,
    KYCForm,
    InfluencerKYCForm,
    DataRepository,
    RetailerForm,
    RetailerMainScreen,
    Selectproduct,
    Selectbrand,
    Selectgsm,
    StartDaySelectionScreen,
    EndDayScreen,
    EndDayHome,
    PresentScreen,
    WorkFromHomeScreen,
    InOfficeScreen,
    TravelModeScreen,
    AbsentScreen,
    SelectCalendar,
    CompletedDayScreen,
    LoginScreen,
    UserScreen,
    ResetScreen,
    ChangePassword,
    NewPassword,
    LoginOtpScreen,
    VisitsScreen,
    SelectedVisitsScreen,
    TicketingScreen,
    EndVisitModal,
    DashboardScreen,
    NewRetailer,
    RetailerList,
    RetailerInfoScreen,
    Retailer360,
    DealerInfoScreen,
    DealerOrder,
    OrdersListScreen,
    OrderInfoScreen,
    RetailerOrdersListScreen,
    DealerInvoiceListScreen,
    DealerOrdersListScreen,
    DealerOutstandingListScreen,
    EventParticipantListScreen,
    AddParticipantScreen,
    UpdateRetailer,
    AddPlannedVisitsScreen,
    SuggestionScreen,
    VisitTabs,
    SelectedPlannedVisitsScreen,
    UnplannedOptionsScreen,
    RetailerResultListScreen,
    StartVisitForm,
    ScoutingVisitInfo,
    SearchByAreaScreen,
    SearchByLocationScreen,
    VisitBookOrder,
    VisitOrderCart,
    VisitRetailerInfo,
    VisitInfoScreen,
    EventList,
    NewEvent,
    EventInfoScreen,
    UpdateEvent,
    InfluencersListScreen,
    InfluencerInfoScreen,
    ProfileScreen,
   
    SiteListScreen,
    NewInfluencers,
    UpdateInfluencer,
    NewSites,
    UpdateSite,
    SitesList,
    SitesInfoScreen,
    NewSiteProduct,
    UpdateSiteProduct,
    SiteProductListScreen,
    SiteProductInfoScreen,
    InvoiceInfoScreen,
    InfluencerSiteList,
    DealerOrderInfoScreen,
    
    VisitRetailerOutstanding,
    OutstandingPaymentInfo,
    DealerPaymentsListScreen,
    
    ReOrderInfoScreen,
    MenuScreen,
    MenuDetailScreen,
    ComplaintsScreen,
    NewComplaintsScreen,
    MyDetails,

    AddCompetitorForm,
    AddStockForm,
    UpdateStockForm,
    UpdateCompetitorForm,
    PurchaseOrderfilter,
    Bookorder,
    Addtocart,
    DailyReport,
    NewDsrScreen,
    DsrListScreen,
    VisitBookOrderHeader,
    SurveyListScreen,
    SurveyFormScreen,
    ComplaintScreen,
    NewComplaint,
    ComplaintSecondScreen,
    BeatPlan,
    BeatSecondScreen,
    BeatThirdScreen,
    BeatForthScreen,
    PaymentScreen,
    Complaints,
    fileShow,
   
    ActivityScreen,
    LastVisitTagScreen,
    VisitPerformance,
    cartScreen,
    CompetitorInfoScreen,
    ExistingCompetitorScreen,
    NewCompetitorScreen,
    CreateNewCompetitor,
    CreateExistingProduct,
    AttachmentShow,
    VisitAttachmentScreen,
    OnboardingSuccess,
   
    ShowAttachment,
    Leads,
    LeadsForm,
    LeadPerformance,
    RetailerKYCForm,
    LeadScreen,
    ProjectInfo,
    AddSupply,
    TeleSales,
    Aidp,
    TaskHistoryScreen,
    SupplyHistory,
    ProductSupply,
    InfluencerManagement,
    Ticket,
    Influencer360,
    DealerMainScreen
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX: translateX }] };
      },
    })
  }
)

export default createAppContainer(StackNavigator)