import React, { Component } from "react";
import { View, Alert, TouchableOpacity , TextInput} from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./TravelStyle";
import Style from "App/Containers/Present/PresentScreenStyle";
// import BlueButton from "../../Components/BlueButton";
// import WhiteButton from "../../Components/WhiteButton";
// import LayoutScreen from "../Layout/LayoutScreen";
// import { START, ABSENT, GOOD, MORNING, LEAVE } from "../../Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
// import Wave from "../../Components/WaveCurls/Wave";
import menuActions from "App/Stores/Menu/Actions";
import ImageSlider from "App/Components/ImageSlider";
import GenericIcon from "App/Components/GenericIcon/GenericIcon";
import ImagePicker from "App/Components/ImagePicker/ImagePicker";
import { heightPercentageToDP } from "react-native-responsive-screen";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import { watchPosition } from "react-native-geolocation-service";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DatePicker from "App/Components/DatePicker";


class ChangeDateModal extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  dateFilter() {
    const {
      changeSearchFilters,
      searchFilters,
      primarySummary,
      secondarySummary,
    } = this.props;
    let datePickerNode = (
      <>
        <GenericIcon
          name={"calendar-month-outline"}
          show={true}
          style={{
            color: "white",
            fontSize: wp("15%"),
            alignSelf: "center",
          }}
        />
      </>
    );

    let monthPickerNode = (
      <View style={Style.monthPicker}>
        <Text style={Style.dateText}>
          {HelperService.getMonthMappingName(searchFilters["selectedMonth"])}
        </Text>
      </View>
    );

    let visiblePickerNode = [];

    visiblePickerNode = (
      <View style={{ top: hp("1.5%"), height: hp("8%") }}>
        <DatePicker
          allowRangeSelection={true}
          selectedStartDate={searchFilters["startDate"]}
          selectedEndDate={searchFilters["endDate"]}
          // onDateChange={(params) => this.onDateChange(params)}
          onDateChange={(params) => console.log("hehe")}
          maxDate={HelperService.dateReadableFormatWithHyphen(
            HelperService.getNext60DayTimestamp()
          )}
          minDate={"01/01/1980"}
        >
          {datePickerNode}
        </DatePicker>
      </View>
    );

    return visiblePickerNode;
  }

  render() {
    const { form, changeForm } = this.props;

    return (
      // <View>
      <View style={{ ...Style.box1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <View style={{ ...Style.buttonBox, marginTop: hp("7%") }}>
          

          <View style={{ marginTop: "3%" }}>
            {/* <GenericIcon
              name="calendar-month-outline"
              style={{
                color: "white",
                fontSize: wp("15%"),
                alignSelf: "center",
              }}
              show={true}
            /> */}
            {this.dateFilter()}
          </View>
          <View style={{ flexDirection: "column", alignSelf: "center" , width:wp("80%"), marginTop:wp("7%")}}>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                color: "white",
                fontWeight: "bold",
                marginLeft: wp("-5%"),
                marginTop:wp("-1%"),
                fontSize: wp("3.25%"),
              }}
            >
              {"REMARKS"}
            </Text>
            <TextInput
              style={{
                height: hp("4.7%"),
                borderWidth: 1,
                borderBottomColor: Colors.grey,
                width: wp("83%"),
                //   left: wp("1%"),
                marginLeft: wp("-4.25%"),
                borderColor: "transparent",
                marginTop: hp("-1%"),

                // backgroundColor:"black"
              }}
              placeholderTextColor="white"
              // placeholder={"Source Of Lead"}
              // onChangeText={(text) =>
              //   changeForm({
              //     edited_field: "Number_Planned__c",
              //     edited_value: text,
              //   })
              // }
              // keyboardType="numeric"
              // value={form.Number_Planned__c}
            />
          </View>
          {/* </ImagePicker>
          </View>
        </View>
      </View>  */}

          <View style={{ alignSelf: "center",  }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                this.props.closeModal();
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  alignSelf: "center",
                  marginTop: "8%",
                }}
              >
                <Text
                  style={{
                    ...Style.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                    fontSize: 19,
                  }}
                >
                  {"SUBMIT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(ChangeDateModal);
