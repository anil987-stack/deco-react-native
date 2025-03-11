import React, { Component } from 'react'
import { View, Text, Alert,Image } from 'react-native'
import { Card } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Style from './EndDayScreenStyle'
import BlueButton from '../../Components/BlueButton'
import { END } from '../../Constants'
import NavigationService from 'App/Services/NavigationService'
import LayoutScreen from '../Layout/LayoutScreen'
import UserActions from 'App/Stores/User/Actions'
import {HelperService} from 'App/Services/Utils/HelperService';

import _, { filter } from 'lodash';

class EndDayHome extends Component {

  async submit(){
   // this.props.userEndDayLoading();// starts btn loading

    let location = await HelperService.requestLocation();
    if (location == 'DENIED'){
      Alert.alert("Location permission is required to proceed.", 
        "Go App Permissions and Turn on Location Permission for CenturyPly."
      );
      this.props.userEndDayLoadingStop();// stops btn loading
      return;
    }else if (!location) {
      this.props.userEndDayLoadingStop();
      return;
    }
   if( _.isEmpty(this.props.executeVisitData)&& location.latitude&& location.longitude){
    this.props.userEndDayLoadingStop();
    Alert.alert(
      'End Day',
   'Do you want to end the day?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () =>  this.props.endUserDay({date: HelperService.getCurrentTimestamp(), latitude: location.latitude, longitude: location.longitude, token: this.props.token, team__c: this.props.sfid, })},
    ],
    {cancelable: false},
  );
   
   }
   else{
    HelperService.showToast({
      message: 'Day cannot ended , Visit is started .',
      duration: 1000,
      buttonText: ''
    });
   }
  }

  async submitPause(){
   
    let status= false
    if(!this.props.endDayPauseTime&&this.props.startDayPauseTime)
    {
      status=true
    }
   else if(this.props.endDayPauseTime >this.props.startDayPauseTime)
    {
      status= false
    }
    else if(this.props.endDayPauseTime <this.props.startDayPauseTime)
    {
      status= true
    }
    let location = await HelperService.requestLocation();
    if (location == 'DENIED'){
      Alert.alert("Location permission is required to proceed.", 
        "Go App Permissions and Turn on Location Permission for Century Ply."
      );
     
      return;
    }else if (!location) {
    
      return;
    }
    if(location.latitude&& location.longitude){
    this.props.userPauseDay({date: HelperService.getCurrentTimestamp(), latitude: location.latitude, longitude: location.longitude, token: this.props.token, sfid: this.props.recordId, type :  status?'End': 'Start'});
    }
  }

  render() {
    const{ startDayPauseTime, endDayPauseTime }=this.props
    let status= false
    let finalStatus= false
    if(!this.props.endDayPauseTime&&this.props.startDayPauseTime)
    {
      status=true
    }
    else if(this.props.endDayPauseTime >this.props.startDayPauseTime)
    {finalStatus= true
      status= false
    }
    else if(this.props.endDayPauseTime>0 &&this.props.startDayPauseTime>0)
    {
      status= true
      finalStatus= true
    }
    return (
      <View style={Style.container}>
      <Card style={Style.card}>
        <View style={Style.buttonBox}>
         <View style={{elevation:100,alignSelf:"center",borderRadius:153,top:"6%",borderWidth:8,height:"78.2%"}}> 
          <Image
          source={require("App/Assets/Images/ClockImg.jpg")}
          style={{ width: 250, height: 250,alignSelf:"center",borderRadius:200,}}
          resizeMode="contain"
        />
            {/* <Text style={Style.time}>{HelperService.showElapsedTime(this.props.startDayTime)}</Text> */}
            <Text style={Style.time}>{HelperService.showElapsedTime(HelperService.getCurrentTimestamp())}</Text>

          </View>
        </View>
       {/* { !finalStatus?
      
        <View style={Style.action}>
          <BlueButton style={Style.buttons}  textStyle={Style.buttontextStyle} title={ status?'END PAUSE':'BREAK'} disabled={!!this.props.userPauseDayLoading} loading={!!this.props.userPauseDayLoading} onPress={() => this.submitPause()} />
        </View> 
        :[]}  */}
        {/* <View style={Style.action}>
          <BlueButton style={Style.buttons}  textStyle={Style.buttontextStyle} title={'Day End'} disabled={!!this.props.userEndDayLoader} loading={!!this.props.userEndDayLoader} 
          // onPress={() => this.submit()} 
          />
        </View> */}
       
     
        </Card>
      </View>
    )
  }
}

// EndDayScreen.propTypes = {
//   area: PropTypes.string,
//   validation: PropTypes.object,
//   userStartDayLoader: PropTypes.bool,
//   agentAreas: PropTypes.array, 
//   token: PropTypes.string,
//   agentid: PropTypes.string
// }

const mapStateToProps = (state) => ({
  area: state.user.area,
  userEndDayLoader: state.user.userEndDayLoading,
  token: state.user.token,
  agentid: state.user.id,
  startDayTime: state.user.startDayTime,
  sfid: state.user.id,
  recordId: state.user.recordId,
  startDayPauseTime: state.user.startDayPauseTime,
  endDayPauseTime : state.user.endDayPauseTime,
  userPauseDayLoading : state.user. userPauseDayLoading,
  executeVisitData: state.user.executeVisitData
})

const mapDispatchToProps = (dispatch) => ({
  endUserDay: (params)   => dispatch(UserActions.endUserDay(params)),
  userPauseDay: (params) => dispatch(UserActions.userPauseDay(params)),
  userEndDayLoading: ()  => dispatch(UserActions.userEndDayLoading()),
  updateUserLocation: (location) => dispatch(UserActions.updateUserLocation(location)),
  userEndDayLoadingStop:()     => dispatch(UserActions.userEndDayLoadingStop()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndDayHome)
