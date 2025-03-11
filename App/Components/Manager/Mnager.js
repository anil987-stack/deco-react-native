import React,{ useState } from "react";
import { View,Text ,StyleSheet, Dimensions,Image, TouchableOpacity } from "react-native";
import { CheckBox,Badge} from 'native-base';
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon';
import DisplayCardStrip from '../GenericDisplayCard/GenericDisplayCardStrip';
import { Fonts } from "../../Theme";
import UserActions from 'App/Stores/User/Actions'

import { connect } from 'react-redux';

import NavigationService from "App/Services/NavigationService";
// const Manager = ({loading,datechange,pjplist,totalpjp,fetch,data,item,onSelect,visit_date})=>{
class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          item:this.props.item,
          beat:this.props.beat,
          onSelect:this.props.onSelect
        };
        // console.log("beat",this.props.beat)
      }

      componentWillUnmount(){
        const{
          selectManager
        }=this.props;
        selectManager({ edited_field: 'owner', edited_value:'' })
      }

    // const [isSelected, setSelection] = useState(false);
    // console.log("list",isSelected,setSelection)
    // this.state = {
    //     count: 0
    //   }
    //   console.log("state",state)
    // function hello(isSelected){
    //     if(isSelected){
    //         onSelect({edited_field:"owner",edited_value:item.ManagerId})
    //         onSelect({edited_field:"Visit_date__c",edited_value:visit_date})
    //     }else{
    //         onSelect({edited_field:"owner",edited_value:""})
    //         onSelect({edited_field:"Visit_date__c",edited_value:""})
    //     }
    // }
    render() {
        const{selectManagerForm,selectManager,searchFilters,pjpList}=this.props
        console.log('selecte Manager Form',this.props.item,this.props.beat,selectManagerForm.owner);
return(
    <View  style={styles.Screen1} >
        <View style={{flexDirection:'row'}}>
          </View>
          <View style={{width:wp('10%'),marginHorizontal:20,paddingHorizontal:10}}>
    
        
                <View style={{width:wp('50%'),flexDirection: "row",marginTop:hp('2%')}}>
                    <DisplayCardStrip  label={this.state.item.name} value={''}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',color:'red',fontSize: 15}} labelStyle={{marginRight:wp('10%'),fontWeight:'700',fontSize: 15,color:Colors.primary,width:100}} />
                        <View style={styles.checkboxContainer}>
                        <CheckBox
                          style={{ borderRadius: 2, borderColor:Colors.grey, color: Colors.grey , marginLeft:4 }}
                          checked={this.state.beat?.PJP_Beats__r?.records[0]?.PJP__r?.OwnerId==this.state.item.sfid?true:false || selectManagerForm.owner==this.state.item.sfid?true:false }

                        onPress={(event) => {
                          // console.log("event",event)
                          let updatedValue = selectManagerForm?.owner == this.state.item?.sfid? false : true
                          if(updatedValue){
                              selectManager({ edited_field: 'Visit_date__c', edited_value: searchFilters.Visit_date__c })
                              selectManager({ edited_field: 'owner', edited_value: this.state.item.sfid })
                              selectManager({ edited_field: 'beat', edited_value:  this.state.beat.Id})
                              selectManager({ edited_field: 'taggedBeat', edited_value: this.state.beat.Beat__c })
                          }else{
                              selectManager({ edited_field: 'Visit_date__c', edited_value: "" })
                              selectManager({ edited_field: 'owner', edited_value: "" })
                              selectManager({ edited_field: 'beat', edited_value: "" })
                              selectManager({ edited_field: 'taggedBeat', edited_value: "" })
                          }
                    

                    
                  }
                  }
                />
                        </View>
                </View>
                <View style={{width:wp('50%')}}>
                <DisplayCardStrip  label={this.state.item.Name} value={''}  valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700'}} labelStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',color:'red'}} />
                    {/* <DisplayCardStrip  label={'Emp Code'} value={''}  valueStyle={{...Fonts.Small,fontWeight:'500'}} labelStyle={{...Fonts.Small,fontWeight:'400'}} /> */}
                    <DisplayCardStrip  label={'Mobile'} value={""} valueStyle={{...Fonts.Small,fontWeight:'500'}} labelStyle={{...Fonts.Small,fontWeight:'400'}} />
                    
                </View>
        </View>

    </View>
);

}
}
const mapStateToProps = (state) => ({
    token						: state.user.token,
    userid					    :state.user.loginDetails.userId,
    agentid 					: state.user.id,
    editVisitData				: state.visits.editVisit.formData,
    cancelVisitLoader			: state.visits.editVisit.cancelVisitLoader,
    editVisitLoader			    : state.visits.editVisit.editVisitLoader,
    validation 				    : state.visits.editVisit.editVisitValidation,
    isASM                 	    : state.user.isASM,
    psmList               	    : state.user.psmList,
    managerListData			    : state.user.managerListData,
    managerListLoader           :state.user.managerListLoader,
    selectManagerForm           :state.user.selectManagerForm,
    searchFilters				: state.user.searchFilters,
    pjpList:state.user.pjpList
  
  });
  
  const mapDispatchToProps = (dispatch) => ({
    fetchRetailers:(params)    		=> dispatch(RetailersActions.fetchRetailers(params)),
    addVisitToPlan:(params) 	 		=> dispatch(VisitsActions.addVisitToPlan(params)),
    openModal     :(params)    		=> dispatch(CommonActions.openModal(params)),
    cancelVisit   :(params)    		=> dispatch(VisitsActions.cancelVisit(params)),
    editVisit   	:(params)    		=> dispatch(VisitsActions.editVisit(params)),
    cancelVisitLoadingStop:()  		=> dispatch(VisitsActions.cancelVisitLoadingStop()),
    editVisitLoadingStop:()    		=> dispatch(VisitsActions.editVisitLoadingStop()),
    updateVisitFormChange:(params)	=> dispatch(VisitsActions.updateVisitFormChange(params)),
    managerList			:(params)	=> dispatch(UserActions.managerList(params)),
    selectManager		:(params)		=>dispatch(UserActions.selectManager(params))
  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Manager)
const styles = StyleSheet.create({
    Screen1:{
        width:wp('78%'),
        height:hp("15%"),
        paddingBottom:10,
        backgroundColor:'#fff',
        marginTop:'1%',
        marginBottom:10,
        marginHorizontal:20,
        shadowOffset: {
                width: 0,
                height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: "#000",
        elevation:6,borderRadius:2,borderWidth:1,borderColor:'#fff'
},
checkboxContainer: {
    // flexDirection: "row",
    marginLeft: hp('10%'),
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },




});