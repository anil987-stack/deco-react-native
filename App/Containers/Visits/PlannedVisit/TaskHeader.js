import { View, Text } from "native-base";
import React,  { Component } from "react";
import SearchableDropdown from "App/Components/SearchableDropdown";
import CircularProgressBar from "App/Components/CircularProgressBar";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity,ScrollView } from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";

  class TaskHeader extends Component {

    getPending(list){
      let count = 0;
     list.map((obj)=>{ if(obj.owner_number__c==null){ count=count+1}})
      return count
    }

    getEmd(list){
      let count = 0;
     list.map((obj)=>{ if(obj.expected_maturity_date__c&& !HelperService.isNotPast(obj.expected_maturity_date__c))
      { 
      
        count=count+1}})
      return count
    }

    getDMI(list){
      let count = 0;
     list.map((obj)=>{ if(!obj.dmi_attachment__c&&obj.site_name=='Hot Hot'&&(obj.site_quality=='Premium'||obj.site_quality=='Semi Premium'))
      { 
      
        count=count+1}})
      return count
    }

    getDMIEn(list){
      let count = 0;
     list.map((obj)=>{ if(!obj.ilp_registered__c&&obj.dmi_attachment__c&&obj.site_name=='Hot Hot'&&(obj.site_quality=='Premium'||obj.site_quality=='Semi Premium'))
      { 
      
        count=count+1}})
      return count
    }

    checkOverDueTask(list)
    {
      let value = false
      list.map((obj)=>
      {
        if(!HelperService.isNotPast(obj.task_date__c)&&obj.task_status_name!='Closed')
        {
          value=true
        }

      }
      )
      return value
    }
   
    getOverDueTask(list)
    {
     
      let count = 0;
 
      list.map((obj)=>{ if(this.checkOverDueTask(obj.Task_data))
        { 
       
          count=count+1}})
        return count
      }
          
           

          
     

  
    

    // getOverdue(list){
    //   let count = 0;
    //   list.map((obj)=> {obj.town.map((obj.town)) => {
    //     if(obj.town.owner_number__c==null)
    //     { count=count+1}}}
   
    //   return count
    // }

    render(){
      const{data}=this.props;
      // console.log("filter",this.getEmd(data))
      // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

  return (
   
    
    <View style={{width:wp('100%'),height:hp('10%'),justifyContent:'center'}}>
         <ScrollView 
            horizontal={true}
            style={{ flexDirection: 'row',
            width: wp('100%'),
            height: hp('9%'),
            paddingHorizontal: wp('1.5%')}}>

    <View style={{justifyContent:'space-evenly',flexDirection:'row',alignSelf:'center'}}>

    <TouchableOpacity 
    //  onPress={()=>this.props.onchange('')}
     style={{width:wp('32.1%'),height:hp('9%'),backgroundColor:'#FFD580',alignSelf:'center',justifyContent:'center'}}>

     <Text style={{textAlign:'center',fontSize:12,}}>
      Lead Task
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}>
     {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.fixOverDueSauda?
       dashboardDetail.data.currentMonth.fixOverDueSauda:'0'}`} */}
       {/* {"(" +data.length+ ")"} */}
     </Text>

   </TouchableOpacity>

     <TouchableOpacity 
    //  onPress={()=>this.props.onchange('PFO')}
     style={{width:wp('32.1%'),height:hp('9%'),backgroundColor:'#C1F6CB',alignSelf:'center',justifyContent:'center'}}>

     <Text style={{textAlign:'center',fontSize:12,}}>
       War Task
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}>
     {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.fixOverDueSauda?
       dashboardDetail.data.currentMonth.fixOverDueSauda:'0'}`} */}
       {/* {"(" +this.getPending(data)+ ")"} */}
     </Text>

   </TouchableOpacity>
   <TouchableOpacity 
    //  onPress={()=>this.props.onchange('NEL')}
   style={{width:wp('32.1%'),height:hp('9%'),backgroundColor:'#C7E4FF',alignSelf:'center',justifyContent:'center'}}>
   <Text style={{textAlign:'center',fontSize:11,}}>
    AIDP Task
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}>
      {/* {dashboardDetail&&dashboardDetail.data.currentMonth?dashboardDetail.data.currentMonth.sauda:"NA"} */}
      {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.sauda?
       dashboardDetail.data.currentMonth.sauda:'0'}`} */}
       {/* {"(" +this.getEmd(data)+ ")"} */}
     </Text>

   </TouchableOpacity >
  
  

  

   </View>

   </ScrollView>
 </View>
    
  );
}}
const mapStateToProps = (state) => ({
 
  token: state.user.token,
  agentid: state.user.id,
pjpFilters: state.menu.leadFilters,

leadlist: state.menu.leadlist,



});
const mapDispatchToProps = (dispatch) => ({
  getlead: (params) => dispatch(MenuActions.GetLead(params)),


});
export default connect(mapStateToProps, mapDispatchToProps)(TaskHeader);
