import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Alert } from 'react-native'
import { Root } from "native-base";
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import CommonActions from 'App/Stores/Common/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import NetworkStatusBanner from "App/Components/NetworkStatusBanner";
import GenericApplicationModal from "App/Components/GenericApplicationModal";
import GenericApplicationModalTwo from "App/Components/GenericApplicationModal/GenericApplicationModalTwo";
import GenericApplicationModalThree from "App/Components/GenericApplicationModal/GenericApplicationModalThree";
import {HelperService} from 'App/Services/Utils/HelperService';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Layout from 'App/Containers/Layout/LayoutScreen';
import SplashScreen from 'react-native-splash-screen';

class RootScreen extends Component {
  async componentDidMount() {
    const {
      id,
      token,
      startup,
      startedToday,
      endedToday,
      absentToday,
      retailersOffset,
      retailersLimit,
      categoryOffset,
      categoryLimit,
      productLimit,
      productOffset,
      fetchCurrentLocation,
      fetchCurrentLocationSuccess
    } = this.props;

    let permission = await HelperService.requestMultipleStoragePermission();
    fetchCurrentLocation()
    if (!permission) {
      Alert.alert(
        "Storage permission Denied.",
        'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for HeroElectric.'
      );
    }

    //let locationPermission = await HelperService.requestLocationPermission();

    //if (locationPermission) {
      //HelperService.watchLocation({callback: (fetchCurrentLocationSuccess)});
    //}else {
      //Alert.alert(
        //"Location permission Denied.Cannot Proceed",
        //'If you have denied permanently then Go "App Permissions" and Turn on "Location" Permission for JK Paper.'
      //);
   // }

    startup({
      id,
      token,
      startedToday,
      endedToday,
      absentToday,
      retailersOffset,
      retailersLimit,
      categoryOffset,
      categoryLimit,
      productLimit,
      productOffset
    });

    SplashScreen.hide();
  }


  // gets the current screen from navigation state
  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  }

  render() {
    const {
      modalVisible2,
      modalContent2,
      modalHeading2,
      modalDisabled2,
      modalBodyFlexHeight2,

      closeModalTwo,
      isConnected,
      isVisible,
      closeModal,
      modalVisible,
      modalContent,
      modalHeading,
      modalDisabled,
      modalBodyFlexHeight,

      modalVisible3,
      modalContent3,
      modalHeading3,
      modalDisabled3,
      modalBodyFlexHeight3,

      closeModalThree,
      headingStyle3,
    } = this.props;
    return (
          <Root>
          <SafeAreaView style={{flex: 1}}>
            <Layout>
              <View style={Helpers.fill}>
                <NetworkStatusBanner
                  isConnected={this.props.isConnected}
                  isVisible={this.props.isVisible}
                />

                <GenericApplicationModal 
                  close={() => closeModal()} 
                  visible={modalVisible} 
                  content={modalContent}
                  heading={modalHeading}
                  bodyFlexHeight={modalBodyFlexHeight}
                  disabled={modalDisabled}
                />

<GenericApplicationModalTwo 
                  close={() => closeModalTwo()} 
                  visible={modalVisible2} 
                  content={modalContent2}
                  heading={modalHeading2}
                  bodyFlexHeight={modalBodyFlexHeight2}
                  disabled={modalDisabled2}
                />


<GenericApplicationModalThree
                  close={() => closeModalThree()} 
                  visible={modalVisible3} 
                  content={modalContent3}
                  heading={modalHeading3}
                  bodyFlexHeight={modalBodyFlexHeight3}
                  disabled={modalDisabled3}
                  headingStyle={headingStyle3}
                />

                <AppNavigator
                  onNavigationStateChange={(prevState, currentState, action) => {
                    const currentRouteName = this.getActiveRouteName(currentState);
                    this.props.screenChanged(currentRouteName);
                  }}
                  // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
                  ref={(navigatorRef) => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                  }}
                />
              </View>
            </Layout>
            </SafeAreaView>
          </Root>
        
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
  isConnected: PropTypes.bool,
  isVisible: PropTypes.bool
}

const mapStateToProps = (state) => ({
  id: state.user.id,
  token: state.user.token,
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  modalVisible: state.common.genericActionModal.visible,
  modalContent: state.common.genericActionModal.content,
  modalHeading: state.common.genericActionModal.heading,
  modalDisabled: state.common.genericActionModal.disable,
  modalBodyFlexHeight: state.common.genericActionModal.bodyFlexHeight,

  modalVisible2: state.common.genericActionModalTwo.visible2,
  modalContent2: state.common.genericActionModalTwo.content2,
  modalHeading2: state.common.genericActionModalTwo.heading2,
  modalDisabled2: state.common.genericActionModalTwo.disable2,
  modalBodyFlexHeight2: state.common.genericActionModalTwo.bodyFlexHeight2,

  modalVisible3: state.common.genericActionModalThree.visible3,
  modalContent3: state.common.genericActionModalThree.content3,
  modalHeading3: state.common.genericActionModalThree.heading3,
  modalDisabled3: state.common.genericActionModalThree.disable3,
  modalBodyFlexHeight3: state.common.genericActionModalThree.bodyFlexHeight3,
  headingStyle3: state.common.genericActionModalThree.headingStyle3,


  retailersOffset: state.retailers.retailersOffset,
  retailersLimit: state.retailers.retailersLimit,
  startedToday: state.user.startDayTime ? HelperService.isToday(state.user.startDayTime) : false,
  endedToday: state.user.endDayTime ? HelperService.isToday(state.user.endDayTime) : false,
  absentToday: state.user.absentDayTime ? HelperService.isToday(state.user.absentDayTime) : false,
  categoryOffset: state.products.categoryOffset,
  categoryLimit: state.products.categoryLimit,
  productLimit: state.products.productLimit,
  productOffset: state.products.productOffset
});

const mapDispatchToProps = (dispatch) => ({
  startup: (params)                  => dispatch(StartupActions.startup(params)),
  screenChanged: (previousRouteName) => dispatch(CommonActions.screenChanged(previousRouteName)),
  closeModal:()                      => dispatch(CommonActions.closeModal()),
  closeModalTwo:()                      => dispatch(CommonActions.closeModalTwo()),
  closeModalThree:()                      => dispatch(CommonActions.closeModalThree()),
  fetchCurrentLocationSuccess:(params)=> dispatch(CommonActions.fetchCurrentLocationSuccess(params)),
  fetchCurrentLocation: () =>
  dispatch(CommonActions.fetchCurrentLocation()),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
