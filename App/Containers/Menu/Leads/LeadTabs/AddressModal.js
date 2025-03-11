import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Style from './LeadsStyle'
// import { Headerbar } from '../../../Components/Headerbar'
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
// import InputText from '../../../Components/FormInput/InputText'
// import GenericIcon from '../../../Components/GenericIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Badge,Form,Icon } from 'native-base'
import BlueButton from 'App/Components/BlueButton'
// import SearchableDropdown from '../../../Components/SearchableDropdown'
// import InputText2 from '../../../Components/FormInput/inputText2'
import { ScrollView } from 'react-navigation'
import NavigationService from '../../../Services/NavigationService'
import Map from  'App/Components/Map'
import Address from 'App/Components/Address'
import { Fonts } from '../../../Theme'
import { connect } from 'react-redux';
// import InputNumber from '../../../Components/FormInput/InputNumber'
import MenuActions from 'App/Stores/Menu/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import InfluencerActions from 'App/Stores/Influencers/Actions'
class AddressModal extends Component {
render(){
    const{
        id,
        changeform,form,
        closeModal,
        getStatus,
        // currentLocation
    }=this.props;
    // console.log('id',id)
    // if(form.dmi_contractor_name__c &&!this.props.influencerserror ){
    //   closeModal();
    // }
return(
<View style={{flex:1}}>
<View style={{height:60,width:'90%',alignSelf:'center',marginTop:hp('6%'),width:wp('80')}}>
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <Text style={{fontWeight:'bold',fontSize:wp('4'),color:Colors.subtitle }}>Select the address option</Text>
{/* <Text style={{color:Colors.labelcolor,fontSize:wp('4')}}>{form.site_status&&form.site_status}</Text> */}
</View>
<View style={{alignSelf:'center',justifyContent:'space-between',width:'100%',marginTop:hp('6'),flexDirection:'row'}}>

<BlueButton
title={"Automatic"}
textStyle={{fontSize:17}}
onPress={()=>{
    this.props.closeModal();
    // NavigationService.navigate('SetLocation',{location:id,type:'Lead'})
}}
style={{backgroundColor:Colors.primary,width:wp('38'), height:hp('5%')}}
/>
<BlueButton
title={"Manual"}
textStyle={{fontSize:17}}
onPress={()=>{
    this.props.closeModal();
    // changeform({ edited_field: 'geocoordinate__longitude__s', edited_value:id.longitude  });
    // changeform({ edited_field: 'geocoordinate__latitude__s', edited_value:id.latitude  });
    NavigationService.navigate('NewAddress',{type:'Lead', editState:true});
}}
style={{backgroundColor:Colors.primary,width:wp('35'), height:hp('5%')}}
/>
</View>
</View>

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
    phoneData:state.influencers.influencersList,
    influencerserror:state.influencers.fetchFailure,
    getStatus:state.menu.GetSiteStatus
    
  });
  
  const mapDispatchToProps = (dispatch) => ({
    openModal:(params)     => dispatch(CommonActions.openModal(params)),
    closeModal:(params)    => dispatch(CommonActions.closeModal(params)),
    changeform:(params)    => dispatch(MenuActions.changeLeadForm(params)),
    fetchInfluencers:(params) =>dispatch(InfluencerActions.fetchInfluencers(params))

  });

export default connect( mapStateToProps,mapDispatchToProps)(AddressModal)