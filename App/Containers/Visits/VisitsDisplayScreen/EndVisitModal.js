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
import WhiteButton from 'App/Components/WhiteButton';
import { Headerbar } from 'App/Components/Headerbar';
class EndVisitModal extends Component {
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
<View style={{flex:1,backgroundColor:'transparent'}}>

<Headerbar
    title={'Visit Date'}
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



<View style={{alignSelf:'center',marginTop:hp('6'),width:wp('65')}}>
<WhiteButton
title={"Confirm and Proceed"}
onPress={()=>{ NavigationService.goback()}}
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

</View>
{/* </View> */}


</View>
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
    openModal:(params)     => dispatch(CommonActions.openModal(params)),
    closeModal:(params)    => dispatch(CommonActions.closeModal(params)),
    changeform:(params)    => dispatch(MenuActions.changeLeadForm(params)),
    gettask:(params)    => dispatch(MenuActions.GetTask(params)),
    getTaskPerDayDate:(params) => dispatch(MenuActions.getTaskPerDay(params)),

  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EndVisitModal)
// export default Date