import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Style from './LeadsStyle'
import { Headerbar } from '../../../Components/Headerbar'
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import InputText from '../../../Components/FormInput/InputText'
import GenericIcon from '../../../Components/GenericIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Badge,Icon } from 'native-base'
import BlueButton from '../../../Components/BlueButton'
import SearchableDropdown from '../../../Components/SearchableDropdown'
import InputText2 from '../../../Components/FormInput/inputText2'
import { ScrollView } from 'react-navigation'
import NavigationService from '../../../Services/NavigationService'
import Map from  'App/Components/Map'
import Address from 'App/Components/Address'
import MapView, { PROVIDER_GOOGLE, AnimatedRegion , Polygon, Marker} from 'react-native-maps';
import { Fonts } from '../../../Theme'
import Geolocation from "@react-native-community/geolocation";
import Geocoder from 'react-native-geocoding';
import { connect } from 'react-redux';
import CommonActions from 'App/Stores/Common/Actions';
import MenuActions from 'App/Stores/Menu/Actions';
Geocoder.init("AIzaSyB5k9phAT1ZcYKX0qW4MjHW26vax07fmMA");
class SetLocation extends Component {
  state={
    coordinates:{
      latitude:0,
      longitude:0
    },
    Address:'',
    disabled:true,
    addressData:[]

  }
//   componentDidMount() {
//     // let location=this.props.navigation.state.params.location;
//     // console.log('location',location);
//     this.setState({
//       coordinates: {
//           latitude: Number(this.props.navigation?.state?.params?.location?.latitude),
//           longitude: Number(this.props.navigation?.state?.params?.location?.longitude)
//       }
//   },()=>{
//     this.getAddressFromCoordinates();
//   });
//   this.props.changeform({ edited_field: 'geocoordinate__longitude__s', edited_value:this.props.navigation?.state?.params?.location?.longitude });
//   this.props.changeform({ edited_field: 'geocoordinate__latitude__s', edited_value:this.props.navigation?.state.params?.location?.latitude });
//     }
//     getAddressFromCoordinates=()=>{
//       Geocoder.from(this.state.coordinates.latitude, this.state.coordinates.longitude).then(json=>{
// var addressComponent = json.results[0].formatted_address;
//                   this.setState({
//                            Address: addressComponent,
//                            addressData:json.results[0]

//                         });

//                     })

//                     .catch(error => console.warn(error));
   
//     }
//     saveAddress=()=>{
//       const {changeform}=this.props;
//        let address=this.state.addressData;
//        console.log(address);
//        changeform({ edited_field: 'building_name__c', edited_value: address.formatted_address });
//        address.address_components.map((e,index)=>{
//          console.log('e',e)
//          e.types.map((n,i)=>{
//            if(n=='sublocality'){
//             changeform({ edited_field: 'sublocality', edited_value:e.long_name });
//            }
//            if(n=='locality'){
//             changeform({ edited_field: 'locality', edited_value:e.long_name });
//            }
//            if(n=="administrative_area_level_1"){
//             changeform({ edited_field: 'state__c', edited_value:e.long_name });
//            }
//            if(n=="postal_code"){
//             changeform({ edited_field: 'pincode_as_per_gps__c', edited_value:e.long_name });
//            }
//            if(n=="landmark"){
//             changeform({ edited_field: 'landmark__c', edited_value:e.long_name });

//            }
//          })
//        })
       
//       NavigationService.navigate('NewAddress',{type:this.props.navigation.state.params.type, editState:false, scouting:this.props.navigation.state.params.scouting});
//     }
render(){
  
    const {
        location
      } = this.props.navigation.state.params;

return(
<View style={{flex:1}}>

<Headerbar
    title={'Set Location'}
//  show={true}
    name={'play'}
    onPress={()=>NavigationService.goback()}
/>
<View style={{height:hp('60')}}>
{/* <Map styles={{height:hp('60')}}
show={true}
showMarker={true}

content={
 
  <>
  <Marker coordinate={
    { latitude: location.latitude,
      longitude:  location.longitude,
      latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    }
  } 
  />
  <Marker
  coordinate={{
    latitude:location.latitude,
    longitude:location.longitude,
  }}
  title={"Your Location"}
  draggable
/>
</>
}
/> */}
{/* <MapView
initialRegion={{
latitudeDelta: 0.0005,
longitudeDelta: 0.0005,
latitude: Number(location.latitude),
longitude: Number(location.longitude)
}}
onRegionChange={(result) => {this.setState({coordinates: result})}}
onRegionChangeComplete={this.getAddressFromCoordinates}
showsUserLocation={true}
style={{height:hp('60%')}}
>
    <Marker draggable coordinate={this.state.coordinates} />

</MapView> */}

</View>
<View >
<Address
iconstyle={{fontSize:hp('4'),color:'#03465b',marginLeft:wp('2')}}
        value={'Identify your location'}
        style={{fontSize:hp('2.5'),color:'#03465b',marginTop:'1%',marginLeft:wp('-2')}}
 />
<View style={{flexDirection:'row'}}>
    <Text style={{marginLeft:wp('5%'),width:wp('70'),marginTop:hp('1'),fontFamily:ApplicationStyles.textMsgFont}}>{this.state.Address}</Text>
    {/* <TouchableOpacity disabled={this.state.disabled} onPress={this.state.disabled?this.setState({disabled:false}):this.getAddressFromCoordinates} >
    <View style={{backgroundColor:'#fae9bd',width:wp('20'),borderRadius:7,height:hp('3'),justifyContent:'center'}}>
        <Text style={{color:'white',textAlign:'center',color:'#aeb096'}}>{this.state.disabled?'CHANGE':'Confirm'}</Text>
    </View>
        </TouchableOpacity> */}
</View>

</View>
{this.state.Address?<View style={{alignSelf:'center',marginTop:hp('2')}}>
<BlueButton
title={"Confirm And Proceed"}
textStyle={{fontSize:17}}
// onPress={()=>{this.saveAddress()}}
style={{backgroundColor:Colors.button,width:wp('80')}}
/>
</View>:[]}
</View>
)

}

}
const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  loader:state.menu.CreateLeadLoading,
  leadSourcelist:state.menu.leadsourceList,
  leadlist:state.menu.leadlist,
  form:state.menu.createleadlist,
  psmList:state.user.psmList,
  id:state.user.id,
  currentLocation: state.common.currentLocation,
  edit:state.menu.editable
  
});
const mapDispatchToProps = (dispatch) => ({
  openModal:(params)     => dispatch(CommonActions.openModal(params)),
  closeModal:(params)    => dispatch(CommonActions.closeModal(params)),
  changeform:(params)    => dispatch(MenuActions.changeLeadForm(params)),
  submitform:(params)    => dispatch(MenuActions.CreateLead(params)),
  extractFormData:(params)    => dispatch(MenuActions.extractFormData(params)),
  clearLeadForm:() => dispatch(MenuActions.clearLeadForm()),
  editable:(params)    => dispatch(MenuActions.Editable(params)),

});
export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(SetLocation) 
