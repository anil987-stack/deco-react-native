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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class StartDaySelectionScreen extends React.Component {
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm } = this.props;

    return (
      // <View>
      <View style={{ ...Style.box1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <View style={{ ...Style.buttonBox, marginTop: hp("10%") }}>
          <Text
            style={{ ...Style.header, ...Style.titleText, marginTop: "6%" }}
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
                marginTop:hp("0%")
              }}
            >
              "All Activities"
            </Text>
          {/* <View>
              <Text style={{ ...Style.header, ...Style.titleText }}>
                {"HOW ARE YOU"}
              </Text>
              <Text
                style={{ ...Style.header, ...Style.clr, ...Style.titleText }}
              >
                {"TRAVELLING ?"}
              </Text>
            </View> */}
          {/* <WhiteButton
              style={{ ...Style.buttons1 }}
              textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
              title={"Two Wheeler"}
              onPress={() =>
                NavigationService.navigate("Twowheeler", { data: form })
              }
            />
            <WhiteButton
              style={Style.buttons1}
              textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
              title={"Four wheeler"}
              onPress={() =>
                NavigationService.navigate("Fourwheeler", { data: form })
              }
            />
            <WhiteButton
              style={Style.buttons1}
              textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
              title={"Public transport"}
              onPress={() =>
                NavigationService.navigate("Publictransport", { data: form })
              }
            /> */}
          {/* <WhiteButton  style={Style.buttons1} textStyle={Style.buttontextStyle} title={'WORK FROM HOME'} onPress={() => this.goTo('WorkFromHomeScreen')}/>  */}
          {/* </View>
        </View>
        <View
          style={{ marginTop: heightPercentageToDP("5%"), alignSelf: "center" }}
        >
          <View>
            <Text>Click Photo </Text>

            <ImagePicker
              image={form.Address_proof}
              onImageSuccess={({ image }) =>
                changeForm({
                  edited_field: "Address_proof",
                  edited_value: image,
                })
              }
            >
              <View style={Style.recurringActionButton}>
                <Text style={Style.recurringActionButtonText}>
                  <GenericIcon
                    name="add"
                    style={Style.recurringActionButtonIcon}
                  />
                </Text>
              </View>
            </ImagePicker>
          </View>
        </View>
      </View> */}
          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                this.props.closeModal(),
                  NavigationService.navigate("EndDayScreen");
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
                  // borderColor: "grey",
                  // borderWidth: 1,
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartDaySelectionScreen);
