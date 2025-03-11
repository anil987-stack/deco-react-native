import { HelperService } from 'App/Services/Utils/HelperService';
export const INITIAL_STATE = {

    localExpenseList: [],
    teamExpenseList: [],
    localExpenseItemList: [],
    teamExpenseItemList: [],

    retailerList: [],
    dealerList: [],

    type: '',

    fetchLocalExpenseLoader: false,
    fetchTeamExpenseLoader: false,
    fetchLocalExpenseItemLoader: false,
    fetchTeamExpenseItemLoader: false,

    updateExpenseLoader: false,
    sendApprovalLoader: false,

    monthNumber: '',

    searchFilters: {
        selectedMonth: (new Date(HelperService.getCurrentTimestamp())).getMonth(),
    },

    localImageList: [],
    uploadLocalImageLoader: false,
    fetchLocalImageLoader: false,

    selectLocalExpense: {},
    selectTeamExpense: {},
    selectLocalExpenseItem: {},
    selectTeamExpenseItem: {},
    
    localExpanseDetails:{},
    localExpanseDetailsLoading:false,
    localExpanseDetailsSuccess:[],

    expenseForm: {
        

    },
    expenseFormValidation: {
        invalid: false,
        invalid_field: ''
    },

    expenseOffset: 0,
    expenseLimit: 1000,

    modeOfTravelList: [
        {
            'label': 'Two Wheeler',
            'value': 'Two Wheeler'
        }, {
            'label': 'Car',
            'value': 'Car'
        }],

        ExpenseAttachmentsDetailsList:[], 
        fetchExpenseAttachmentsDetailsLoader: false,


        searchFilter: {
            startDate: HelperService.getCurrentTimestamp(),
           
        }, 
        
        updateExpenseDetailLoader: false,
        VisitAttachmentsDetailsList:{},
        fetchVisitAttachmentsDetailsLoader:false



}
