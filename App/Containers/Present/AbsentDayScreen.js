import React, { Component } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./TravelStyle";
import Style from "./PresentScreenStyle";
import BlueButton from "../../Components/BlueButton";
import WhiteButton from "../../Components/WhiteButton";
import LayoutScreen from "../Layout/LayoutScreen";
import { START, ABSENT, GOOD, MORNING, LEAVE } from "../../Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import Wave from "../../Components/WaveCurls/Wave";
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

class AbsentDayScreen extends React.Component {
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
          <Text
            style={{ ...Style.header, ...Style.titleText, marginTop: hp("4%") }}
          >
            {"You'll be allowed to perform "}
          </Text>
          <Text
            style={{
              ...Style.header,
              ...Style.titleText,
              fontWeight: "bold",
              textAlign: "center",
              fontStyle: "italic",
              marginTop: hp("0%"),
            }}
          >
            "Call Based Activities"
          </Text>

          <View style={{ marginTop: "3%" }}>
            {this.dateFilter()}

            {/* <GenericIcon
                name="calendar-month-outline"
                style={{
                  color: "white",
                  fontSize: wp("15%"),
                  alignSelf: "center",
                }}
                show={true}
               
              /> */}
          </View>
          {/* </ImagePicker>
          </View>
        </View>
      </View>  */}

          <View style={{ alignSelf: "center", marginTop: "-6%" }}>
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
            {/* <WhiteButton
              style={{ ...Style.buttons1 }}
              textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
              title={"Cancel"}
              onPress={() =>
                this.props.closeModal()
              }
            />
            <WhiteButton
              loading={this.props.userStartDayLoader}
              disabled={this.props.userStartDayLoader}
              style={Style.buttons1}
              textStyle={{ ...Style.buttontextStyle }}
              title={"Submit"}
              // onPress={() => this.submit()}
              onPress={() => {this.props.closeModal(),NavigationService.navigate("EndDayScreen")}}

            /> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(AbsentDayScreen);
