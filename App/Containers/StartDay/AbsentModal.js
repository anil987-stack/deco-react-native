import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Badge,Icon } from 'native-base'
import BlueButton from 'App/Components/BlueButton'
import { ScrollView } from 'react-navigation'
import NavigationService from 'App/Services/NavigationService'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { connect } from 'react-redux';
import CommonActions from 'App/Stores/Common/Actions';
import MenuActions from 'App/Stores/Menu/Actions';
// import DateTab from './DateTab'
import { HelperService } from 'App/Services/Utils/HelperService'
import moment from 'moment'
import WhiteButton from '../../Components/WhiteButton';
import { Headerbar } from '../../Components/Headerbar';
import Style from "../Absent/AbsentScreenStyle";
import SearchableDropdown from "../../Components/SearchableDropdown";


class AbsentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
          markedObj:{},
          masterObj:{},
          data:{call_count:0,visit_count:0}
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    componentDidMount(){
      this.functionDate();
    }
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
        this.props.changeform({
                edited_field: "taskDate",
                edited_value: HelperService.dateReadableFormatWithHyphen(date.toString()),
              })

      }
      

      functionDate=()=>{
        let obj={};
        const {getTaskPerDay,dateTaskFlag}=this.props;
        if(getTaskPerDay&&getTaskPerDay.length){
          getTaskPerDay.map((item)=>{
             let datesNew=moment(item.date).format('YYYY-MM-DD');
             let count=Number(item.visit_count); 
             let greenValidation =  dateTaskFlag && dateTaskFlag.length ? dateTaskFlag[0].parameterized_value__c : 0
             let yellowValidation =  dateTaskFlag && dateTaskFlag.length ? dateTaskFlag[1].parameterized_value__c : 6 
             let redValidation =  dateTaskFlag && dateTaskFlag.length ? dateTaskFlag[2].parameterized_value__c : 10 

            return(
              obj[datesNew]={
                    customStyles: {
                      container: {
                        backgroundColor: count > redValidation?'red':count > yellowValidation?'yellow':count > greenValidation?'green':'white'
                      },
                      text: {
                        color: count>greenValidation?'white':'black',
                        fontWeight: 'bold'
                      }
                    }
                  }
                
            )
            
          })
          this.setState({markedObj:obj,masterObj:obj});

    
    }
      }

    getSelectedDayEvents = date => {
     
      const {getTaskPerDay,maxDates}=this.props;
      let markedDate={...this.state.masterObj};

      markedDate[date] ={
        customStyles: {
          container: {
            backgroundColor:Colors.darkPink
          },
          text: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
      };
      this.setState({markedObj:markedDate});

      getTaskPerDay.map((item)=>{
       
        let date1=HelperService.dateReadableFormatWithHyphen(item.date);
        let newdate=HelperService.dateReadableFormatWithHyphen(date);
        // let matchDate= date > this.props.maxDates;
        // let dateTo = date > HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())
        // console.log("daterr",matchDate)
        if(date1==newdate){
         this.setState({data:item}) 
        }
      })
      if(this.props.create){
        // console.log("fagsfahkk",date,this.props.maxDates)
        // if(date == this.props.maxDates){
        //   alert("Date should be between today's date and EMD date")
        // }else if(date = HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())){
        //   alert("Date should be between today's date and EMD date")
        // }else{
        this.props.changeTask(date)
        // }
      }
      else{
       
      this.props.changeform({ edited_field: "taskDate",edited_value:date});
      this.props.changeform({ edited_field: 'postponed_date_task', edited_value: date })
      }     
  };

  dateFilter() {
    const {
      changeSearchFilters,
      searchFilters,
      primarySummary,
      secondarySummary,
    } = this.props;
    let datePickerNode = (
      <View>
        <View
          style={{
            alignSelf: "center",
            backgroundColor: Colors.bluebackground,
            borderRadius: 100,
            flexDirection: "row",
            width: wp("43%"),
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
          }}
        >
          {/* <Text style={Styles.dateText}>
        {HelperService.getDashboardDisplayDate(
          searchFilters["startDate"],
          searchFilters["endDate"]
        )}
      </Text> */}
          <GenericIcon
            name={"calendar"}
            show={true}
            style={{
              ...DatePickerStyles.icon,
              ...DatePickerStyles.iconActive,
              ...Style.dateIcon,
            }}
          />
        </View>
      </View>
    );

    let monthPickerNode = (
      <View style={Style.monthPicker}>
        <Text style={Style.dateText}>
          {/* {HelperService.getMonthMappingName(searchFilters["selectedMonth"])} */}
        </Text>
      </View>
    );

    let visiblePickerNode = [];

    if (searchFilters["selectedDateType"] == "Month") {
      visiblePickerNode = (
        <View style={{ flexDirection: "row", width: wp("35%") }}>
          <TouchableOpacity
            transparent
            // onPress={() =>
            //   this.onMonthChange(
            //     HelperService.dateReadableFormatWithHyphen(
            //       HelperService.getPreviousMonth(searchFilters["selectedMonth"])
            //     )
            //   )
            // }
          >
            <Icon
              name={"ios-arrow-back"}
              ios={"ios-arrow-back"}
              android={"md-arrow-dropleft"}
              style={Style.dateChangeIcon}
            />
          </TouchableOpacity>
          {monthPickerNode}
          <TouchableOpacity
            transparent
            // onPress={() =>
            //   this.onMonthChange(
            //     HelperService.getNextMonth(searchFilters["selectedMonth"])
            //   )
            // }
          >
            <Icon
              name={"ios-arrow-forward"}
              ios={"ios-arrow-forward"}
              android={"md-arrow-dropright"}
              style={Style.dateChangeIcon}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      visiblePickerNode = (
        <View style={{ top: hp("1.5%"), height: hp("8%") }}>
          <DatePicker
            allowRangeSelection={true}
            selectedStartDate={searchFilters["startDate"]}
            selectedEndDate={searchFilters["endDate"]}
            onDateChange={(params) => this.onDateChange(params)}
            // maxDate={HelperService.dateReadableFormatWithHyphen(
            //   HelperService.getNext60DayTimestamp()
            // )}
            // minDate={"01/01/1980"}
          >
            {datePickerNode}
          </DatePicker>
        </View>
      );
    }
    return visiblePickerNode;
  }

  // onMonthChange(month) {
  //   // console.log("aaaassd",month)
  //   const { token, agentid, searchFilters, changeSearchFilters } = this.props;

  //   changeSearchFilters({
  //     edited_field: "selectedMonth",
  //     edited_value: month,
  //   });

  //   let timestamps = HelperService.getMonthStartAndEndDateTimestamp(month);

  //   changeSearchFilters({
  //     edited_field: "startDate",
  //     edited_value: timestamps[0],
  //   });

  //   changeSearchFilters({
  //     edited_field: "endDate",
  //     edited_value: timestamps[1],
  //   });

  //   this.props.getlead({
  //     id: agentid,
  //     from_date: HelperService.dateReadableFormatWithHyphen(
  //       params.selectedStartDate
  //     ),
  //     to_date: HelperService.dateReadableFormatWithHyphen(
  //       params.selectedStartDate
  //     ),
  //     token,
  //   });
  // }

  // onDateChange(params) {
  //   const {
  //     token,
  //     agentid,
  //     searchFilters,
  //     changeSearchFilters,
  //     searchDashboardOrderFilters,
  //   } = this.props;
  //   // console.log("paramssss", params);
  //   // changeSearchFilters({
  //   //   edited_field: "startDate",
  //   //   edited_value:HelperService.dateReadableFormatWithHyphen( params.selectedStartDate),
  //   // });

  //   // changeSearchFilters({
  //   //   edited_field: "endDate",
  //   //   edited_value:HelperService.dateReadableFormatWithHyphen( params.selectedEndDate),
  //   // });
    
  //       this.props.getlead(
  //         {
  //           id: agentid,
  //           from_date: HelperService.dateReadableFormatWithHyphen( params.selectedStartDate),
  //           to_date: HelperService.dateReadableFormatWithHyphen( params.selectedEndDate),
  //           token: token
  //         }
          
  //        )
    
  // }




render(){
  const{maxDates,dateTaskFlag,getTaskPerDayDate,token}=this.props;

//   let obj={};
   
//     const { selectedStartDate } = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : '';
//     const{changeform,form,getTaskPerDay}=this.props;
//     let data=this.props.navigation?.state?.params
//     let defaultdata=data&&data.postponedid
//     let itemData=data&&data.item;
//     let leadData=data&&data.lead;
//     let visitData=data && data.visits
    // let date=[{date:'2021-12-02',count:'11'},{date:'2021-12-07',count:'7'},{date:'2021-12-10',count:'2'}]

// console.log("dassvv",HelperService.dateReadableFormatWithHyphen(itemData.lead_emd))

return(
<ScrollView>

<View style={{flex:1,backgroundColor:'transparent'}}>

<Headerbar
    title={'Absent Date'}
//  show={true}
    name={'play'}
    onPress={()=>NavigationService.goback()}
/>
<View style={{width:'95%',alignSelf:'center',marginTop:hp('5'),elevation:0,borderWidth:1,borderColor:'transparent',borderRadius:10,backgroundColor:'white'}}>
    
{/* <CalendarPicker
date={'Select'}
selectedDayColor={Colors.buttonyellow}
customDatesStyles={this.customDatesStylesCallback}
todayBackgroundColor={'transparent'}
onDateChange={this.onDateChange}
/> */}

<Calendar
//  minDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
 
//  maxDate={itemData? HelperService.dateReadableFormatWithHyphen(itemData.lead_emd) :maxDates?HelperService.dateReadableFormatWithHyphen(maxDates):""}

  markingType={'custom'}
  markedDates={this.state.markedObj}
//   onDayPress={day => {
 
//     HelperService.isNotPast(day.timestamp)  ?
//     this.getSelectedDayEvents(day.dateString):
//    HelperService.showToast({ message: 'Past date cannot be selected!!', duration: 500, buttonText: '' }); 
   
//   }}
//   onMonthChange={month => {
//     getTaskPerDayDate({token:token,month__c:month.month})
//     setTimeout(() => {
//       this.functionDate()
//     }, 3000)
    
//   }}
/>

</View>

{/* <View style={{width:'90%',alignSelf:'center',marginTop:hp('5'),elevation:10,borderWidth:1,borderColor:'transparent',borderRadius:10,backgroundColor:'white'}}> */}
{/* <DateTab/> */}

{/* <View style={{flexDirection:'row',width:wp('90%'),marginTop:hp('3%'),justifyContent:'space-around',alignSelf:'center'}}>
<View style={{flexDirection:'row',borderRadius:10}}>
<BlueButton
style={{backgroundColor:Colors.primary,width:wp('30%')}}
// title={`Call ${this.state.data.call_count}`}
textStyle={{fontSize:hp('2.5%')}}
/>


</View>
<View style={{flexDirection:'row',marginLeft:5,borderRadius:5}}>
<BlueButton
style={{backgroundColor:Colors.primary,width:wp('30%')}}
// title={`Visit ${this.state.data.visit_count}`}
textStyle={{fontSize:hp('2.5%')}}

/>


</View>
</View> */}



{/* <View style={{alignSelf:'center',marginTop:hp('6'),width:wp('65')}}>
<WhiteButton
title={"Confirm and Proceed"}
onPress={()=>{NavigationService.navigate("AbsentScreen")}}
textStyle={{fontSize:17}}

// onPress={()=>{
  
//   if(defaultdata){
    
//        this.props.openModal({
//         content: <Postponed id={itemData} lead={leadData} visits={visitData}/>, 
//         heading: 'Postponed Task', 
//         bodyFlexHeight: .5
//     })
//     NavigationService.goback()
    
//   }else{
//     this.props.closeModal()
//   }
//  }}
style={{backgroundColor:"white",height:hp('6'),marginBottom:hp('12'),borderColor:Colors.primary,borderWidth:1}}
/>

</View> */}

{/* <View style={Style.buttonBox}> */}
          <Text style={{ ...Style.header,...Style.title,width:"90%" }}>
            {"You will be marked absent"}
            <Text style={{ ...Style.header, ...Style.clr, }}>
              {" for today"}
            </Text>
          </Text>

          <View
          style={{
            width: "100%",
            // borderWidth: 1.2,
            // borderColor: Colors.grey,
            // borderRadius: 30,
            marginVertical: 35,
            alignSelf: "center",
            height: hp("3%"),
          }}
        >
          <SearchableDropdown
            dataSource={[
              // { id: "a050w000003PjLbAAK", name: "Architect" },
              // { id: "a050w000003RDvuAAG", name: "ID" },
              // { id: "a050w000003PjLdAAK", name: "Engineer" },
              // { id: "a050w000003PjLgAAK", name: "Contractor" },
              // { id: "a050w000003PjLlAAK", name: "Carpenter" },
            ]}
            placeHolderText={"Select Reason"}
            
            // selectedValue={influencersForm.influencer_type__c}
            // selectedValue={data.sfid == form.id ? form.colour__c : ""}
            // onChange={(value) => {
            //   this.props.changeInfluencersForm({
            //     edited_field: "influencer_type__c",
            //     edited_value: value,
            //   });
            //   this.props.changeform({
            //     edited_field: "contact_type",
            //     edited_value: null,
            //   });
            // }}
            placeholder={"Type or Select Reason"}
            invalid={false}
            dropDownSize={{ marginLeft: 0, width: 14, height: 12 }}
            stylelabel={{
              color: Colors.subtitle,
              marginLeft: 2,
              marginBottom: 18,
            }}
            customPickerStyles={{
              // width: "95%",
              // height: 30,
              // borderBottomColor: Colors.underline,
              // borderWidth: 0.5,
              // borderColor: "transparent",
              // borderRadius: 0,
              // marginLeft: 5,

              marginTop: 0,
		backgroundColor: 'white',
    paddingVertical: 8,
    
		paddingHorizontal: '8%',
		width: '98%',
		flexDirection: 'row',
	//	justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'center',
		borderRadius: 25,
		elevation: 5,
            }}
            // labelStyles={{
            //   color: Colors.black,
            //   fontFamily: ApplicationStyles.textFont,
            //   textAlign: "center",

            //   fontSize: 13,
            //   flexDirection: "row",
            // }}

            // headerStyle={{
            //   fontFamily: ApplicationStyles.textMsgFont,
            //   color: Colors.black,
            //   fontSize: wp("4.4%"),
            //   width: "106%",
            //   textAlign: "left",
            //   marginLeft: wp("2%"),
            // }}
            // customPickerStyles={{

            //   width: "85%",
            //   height: hp("5%"),
            //   elevation: 5,
            //   alignSelf: "center",
            //   backgroundColor: "white",

            // }}
            // key={form.id}
          />
        </View>
          {/* <WhiteButton
            style={reason=="Planned"?{ ...Style.actionButton1, ...Style.mv10, }:{ ...Style.actionButton, ...Style.mv10, }}
            title={"Planned"}
            textStyle={reason=="Planned"?{color:"white"}:{color:"black"}}
            onPress={() => this.updateAbsentReason("Planned")}
          />
          <WhiteButton
            style={reason=="Ad-hoc"?{ ...Style.actionButton1, ...Style.mv10, }:{ ...Style.actionButton, ...Style.mv10, }}
            title={"Ad-hoc"}
            textStyle={reason=="Ad-hoc"?{color:"white"}:{color:"black"}}
            onPress={() => this.updateAbsentReason("Ad-hoc")}
          /> */}

<View style={Style.action}>
                            <WhiteButton style={Style.button} textStyle={{...Style.buttontextStyle,...Style.clr}} rounded title={"CANCEL"} disabled={!!this.props.userMarkedAbsentLoader} onPress={() => { NavigationService.goback() }} />
                            <WhiteButton style={Style.button} rounded large title={"SUBMIT"} disabled={!!this.props.userMarkedAbsentLoader} loading={this.props.userMarkedAbsentLoader} />
                        </View>
        {/* </View> */}
     
{/* </View> */}


</View>
</ScrollView>
)

}

}
const mapStateToProps = (state) => ({
    token: state.user.token,
    agentid: state.user.id,
    leadSourcelist:state.menu.leadsourceList,
    leadlist:state.menu.leadlist,
    form:state.menu.createleadlist,
    data:state.menu.taskList,
    loading:state.menu.GetTaskLoading,
    getTaskPerDay:state.menu.getTaskPerDay,
    dateTaskFlag:state.menu.dateTaskFlag
   
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
    openModal: (params) => dispatch(CommonActions.openModal(params)),
    closeModal:(params)    => dispatch(CommonActions.closeModalTwo(params)),
    changeform:(params)    => dispatch(MenuActions.changeLeadForm(params)),
    gettask:(params)    => dispatch(MenuActions.GetTask(params)),
    getTaskPerDayDate:(params) => dispatch(MenuActions.getTaskPerDay(params)),

  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AbsentModal)
// export default Date