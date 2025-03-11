// import React from 'react';
// import { View, StyleSheet, Text } from "react-native";
// import Svg, { G, Circle } from "react-native-svg";

// const App = () => {
//   const radius = 70;
//   const circleCircumference = 2 * Math.PI * radius;

//   const groceries = 241;
//   const bills = 372;
//   const regular = 188;
//   const total = groceries + bills + regular;

//   const groceriesPercentage = (groceries / total) * 100;
//   const billsPercentage = (bills / total) * 100;
//   const regularPercentage = (regular / total) * 100;

//   const groceriesStrokeDashoffset =
//     circleCircumference - (circleCircumference * groceriesPercentage) / 100;
//   const billsStrokeDashoffset =
//     circleCircumference - (circleCircumference * billsPercentage) / 100;
//   const regularStrokeDashoffset =
//     circleCircumference - (circleCircumference * regularPercentage) / 100;

//   const groceriesAngle = (groceries / total) * 360;
//   const billsAngle = (bills / total) * 360;
//   const regularAngle = groceriesAngle + billsAngle;

//   return (
//     <View style={styles.container}>
//       <View style={styles.graphWrapper}>
//         <Svg height="160" width="160" viewBox="0 0 180 180">
//           <G rotation={-90} originX="90" originY="90">
//             { total === 0 ? (
//               <Circle
//                 cx="50%"
//                 cy="50%"
//                 r={radius}
//                 stroke="#F1F6F9"
//                 fill="transparent"
//                 strokeWidth="40"
//               />
//              ) : (
//                <>
//                  <Circle
//                   cx="50%"
//                   cy="50%"
//                   r={radius}
//                   stroke="#F05454"
//                   fill="transparent"
//                   strokeWidth="40"
//                   strokeDasharray={circleCircumference}
//                   strokeDashoffset={groceriesStrokeDashoffset}
//                   rotation={0}
//                   originX="90"
//                   originY="90"
//                   strokeLinecap="round"
//                  />
//                  <Circle
//                   cx="50%"
//                   cy="50%"
//                   r={radius}
//                   stroke="#30475E"
//                   fill="transparent"
//                   strokeWidth="40"
//                   strokeDasharray={circleCircumference}
//                   strokeDashoffset={billsStrokeDashoffset}
//                   rotation={groceriesAngle}
//                   originX="90"
//                   originY="90"
//                   strokeLinecap="round"
//                  />
//                  <Circle
//                   cx="50%"
//                   cy="50%"
//                   r={radius}
//                   stroke="#222831"
//                   fill="transparent"
//                   strokeWidth="40"
//                   strokeDasharray={circleCircumference}
//                   strokeDashoffset={regularStrokeDashoffset}
//                   rotation={regularAngle}
//                   originX="90"
//                   originY="90"
//                   strokeLinecap="round"
//                 />
//                </>
//              )
//             }
//           </G>
//         </Svg>
//         <Text style={styles.label}>{total}€</Text>
//       </View>
//     </View>
//   );
// };

// export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   graphWrapper: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   label: {
//     position: "absolute",
//     textAlign: "center",
//     fontWeight: "700",
//     fontSize: 24,
//   },
// });


import React, { Component } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./TravelStyle";
// import Style from "./PresentScreenStyle";

import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";

import menuActions from "App/Stores/Menu/Actions";
import ImageSlider from "App/Components/ImageSlider";
import GenericIcon from "App/Components/GenericIcon/GenericIcon";
import ImagePicker from "App/Components/ImagePicker/ImagePicker";
import { heightPercentageToDP } from "react-native-responsive-screen";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import { VictoryPie } from "victory-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LeadsPerformance from "../Retailers/Retailer360/LeadsPerformance/LeadsPerformance";
import { ScrollView } from "react-navigation";


class pie extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

 
  render() {
    const { form, changeForm } = this.props;
    const graphicData= [
        { y: 10, x: '5%'},
        { y: 90, x: '90%'},
        { y: 50, x: '50%'},
        { y: 20, x: '20%'},
        { y: 70, x: '70%'},
        ]
    
     const graphicColor= ['red', 'blue', 'yellow', 'green', 'tomato']

    return (
      // <View>
      <View style={{alignSelf:"center",marginTop:"-135%"}}>
      
      
      <VictoryPie
data={graphicData}
width={250}
height={250}
innerRadius={50}
style={{
labels: {
fill: 'white', fontSize: 15, padding: 7,

},
 }}
 colorScale={graphicColor}
/> 

<Text style={{
position: 'absolute',
top: 115,
left:'26%',
color: '#FFE600',
}}> 85% </Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.user.onboardingList,
  loading: state.user.getOnboardingLoading,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
  token: state.user.token,
  image: state.user.getonboardingImage,
  form: state.menu.createOnboardinglist,
  territorylist: state.common.TerritoryAllList,
  selectlist: state.menu.selectlist,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (params) => dispatch(menuActions.changeOnboardingForm(params)),

  openModal: (params) => dispatch(CommonActions.openModal(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(pie);
