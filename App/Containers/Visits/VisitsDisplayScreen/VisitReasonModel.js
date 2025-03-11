import React, { Component } from "react";
import {
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
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
import { watchPosition } from "react-native-geolocation-service";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchableDropdown from "App/Components/SearchableDropdown";
import VisitModal from "./VisitModal";

class MenuModal extends React.Component {
  state = {
    button: "",
  };
  componentDidMount() {
    this.props.changeForm({ edited_field: "Address_proof", edited_value: "" });
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    const { form, changeForm } = this.props;

    return (
      <View style={{ ...Style.box1 }}>
        {/* <Wave customStyles={Style.svgCurve} /> */}

        <View style={{ ...Style.buttonBox }}>
          <Text style={{ ...Style.header, ...Style.titleText }}>
            {"Do you want to "}
            <Text
              style={{
                ...Style.header,
                ...Style.titleText,
                fontWeight: "bold",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "END DISCUSSION"
            </Text>
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
            <View>
              <TouchableOpacity
                style={{ ...Style.buttons, marginTop: 1 }}
                onPress={() => {
                  this.props.closeModal(),
                    this.props.openModal({
                      content3: (
                        <VisitModal
                          onClose={() => {
                            closeModal();
                          }}
                        />
                      ),
                      heading3: "SELECT REASON",
                      bodyFlexHeight3: 0.8,
                    });
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
                    {"YES"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...Style.buttons }}
                onPress={() => {
                  // this.props.closeModal(),
                  //   NavigationService.navigate("EndDayScreen");
                  this.setState({ button: "Reject" });
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
                    {"NO"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
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

  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);

const Style = StyleSheet.create({
  box: {
    // backgroundColor: Colors.white,
    // color: Colors.error,
    display: "flex",
    flex: 1,
    // justifyContent: 'center',
    padding: Metrics.tiny,
    // textAlign: 'center',
    fontFamily: ApplicationStyles.textMsgFont,
    backgroundColor: Colors.white,
  },

  box1: {
    display: "flex",
    flex: 1,
    padding: Metrics.tiny,
    fontFamily: ApplicationStyles.textMsgFont,
    // backgroundColor: Colors.white,
  },

  header: {
    // marginBottom: 300,
    fontSize: wp("5.5%"),
    fontFamily: "HelveticaNeue_CondensedBold",
    color: "white",
    alignSelf: "auto",
    alignSelf: "center",
    marginTop: 20,
  },
  clr: {
    color: Colors.subtitle,
  },
  clr1: {
    color: Colors.white,
    alignSelf: "center",
    letterSpacing: 1,
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: 12,
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },

  buttons1: {
    marginTop: 30,
    width: wp("30%"),
    borderRadius: 7,
    height: hp("6%"),

    borderColor: Colors.primary,
    borderWidth: 1,
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
  input: {
    backgroundColor: Colors.error,
    borderRadius: 5,
    color: Colors.error,
    padding: 10,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  mb10: {
    marginBottom: 65,
  },
  ml52: {
    marginLeft: 52,
  },
  mt30: {
    marginTop: 110,
  },
  title: {
    // margin: 'auto',
    ...Fonts.regular,
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  wish: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: "capitalize",
    marginTop: 5,
    marginLeft: 20,
  },
  line: {
    marginLeft: 20,
    marginTop: -10,
    borderBottomWidth: 3,
    width: 180,
  },
  titleText: {
    marginTop: "20%",
    fontSize: wp("6.4%"),
    // alignSelf:'baseline',
    marginHorizontal: 25,
    flexWrap: "wrap",
    marginTop: "4%",
    textAlign: "center",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
    marginTop: hp("34%"),
  },
  buttonBox: {
    marginTop: wp("15%"),
    // backgroundColor:Colors.white,
    // width: '100%',
    // height:hp('45'),
    // marginTop:hp('25.9%')
  },
  picker: {
    borderRadius: 0,
    borderBottomColor: "grey",
    width: wp("84%"),
    borderWidth: 0.8,
    // elevation: 5,
    backgroundColor: "transparent",
    // height: hp('5.5%'),
    // marginTop: 5,
    // marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    borderColor: "transparent",
    // opacity:0.8
  },
  pickerLabel: {
    color: "lightgrey",
    fontSize: 15,
    textAlign: "left",
    width: "97%",
    // padding: 10,
    marginLeft: 15,
    flexDirection: "row",
    fontWeight: "100",
  },
});
