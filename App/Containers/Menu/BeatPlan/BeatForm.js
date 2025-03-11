import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import SelectDate from "App/Components/SelectDate";
import BlueButton from "App/Components/BlueButton";
export class BeatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    let status = this.props.navigation.state.params;
    // console.log("ssssssss", status);
    return (
      <View>
        <View style={Styles.header}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity transparent>
              <GenericIcon
                name={"arrow-back"}
                onPress={NavigationService.goback}
                style={{
                  color: Colors.white,
                  fontSize: wp("8%"),
                  marginTop: hp("1"),
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: "28%",
                marginTop: hp("4%"),
                color: Colors.white,
                fontWeight: "bold",
                fontSize: 23,
              }}
            >
              Beat Plan
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            top: hp("4%"),
            width: wp("90"),
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              width: wp("30%"),
              fontSize: wp("4.2"),
              top: hp("1%"),
              color: Colors.primary,
              fontWeight: "bold",
            }}
          >
            Area
          </Text>
          <Text
            style={{
              width: wp("30%"),
              fontSize: wp("4.2"),
              top: hp("1%"),
              color: Colors.primary,
              fontWeight: "bold",
            }}
          >
            Select Date
          </Text>
          {this.state.text ? (
            <Text
              style={{
                width: wp("30%"),
                fontSize: wp("4.2"),
                top: hp("1%"),
                color: Colors.primary,
                fontWeight: "bold",
              }}
            >
              Select Date
            </Text>
          ) : null}
        </View>
        <View style={{ top: hp("6%"), left: wp("2%") }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: wp("90"),
              alignSelf: "center",
            }}
          >
            <Text
              style={{ width: wp("30%"), fontSize: wp("4.2"), top: hp("1%") }}
            >
              Ajmer Raod
            </Text>
            <SelectDate
              // style={{backgroundColor:'red'}}
              date={this.state.text}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              onDateChange={(date) => this.setState({ text: date })}
            />
            {this.state.text ? (
              <SelectDate
                // style={{backgroundColor:'red'}}
                date={"2021-10-04"}
                // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
                //   onDateChange={(date) =>
                //     changeForm({
                //       edited_field: "Date_of_birth",
                //       edited_value: date,
                //     })
                //   }
              />
            ) : null}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: wp("90"),
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                width: wp("30%"),
                fontSize: wp("4.2"),
                top: hp("1%"),
                // left: wp("2%"),
              }}
            >
              Sikandra
            </Text>
            <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            />
            {/* <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            /> */}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: wp("90"),
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                width: wp("30%"),
                fontSize: wp("4.2"),
                top: hp("1%"),
                // left: wp("2%"),
              }}
            >
              Mahuwa
            </Text>
            <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            />
            {/* <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: wp("90"),
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                width: wp("30%"),
                fontSize: wp("4.2"),
                top: hp("1%"),
                // left: wp("2%"),
              }}
            >
              Gangapur
            </Text>
            <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              onDateChange={(date) =>
                changeForm({
                  edited_field: "Date_of_birth",
                  edited_value: date,
                })
              }
            />
            {/* <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: wp("90"),
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                width: wp("30%"),
                fontSize: wp("4.2"),
                top: hp("1%"),
                // left: wp("2%"),
              }}
            >
              Hindon
            </Text>
            <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            />
            {/* <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: wp("90"),
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                width: wp("30%"),
                fontSize: wp("4.2"),
                top: hp("1%"),
                // left: wp("2%"),
              }}
            >
              Tonk
            </Text>
            <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            />
            {/* <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: wp("90"),
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                width: wp("30%"),
                fontSize: wp("4.2"),
                top: hp("1%"),
                // left: wp("3%"),
              }}
            >
              Dasu
            </Text>
            <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            />
            {/* <SelectDate
              // style={{backgroundColor:'red'}}
              date={"2021-10-04"}
              // maxDate={HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp())}
              //   onDateChange={(date) =>
              //     changeForm({
              //       edited_field: "Date_of_birth",
              //       edited_value: date,
              //     })
              //   }
            /> */}
          </View>
        </View>
        {status.status == false ? (
          []
        ) : (
          <View style={{ top: hp("8%"), right: wp("2%") }}>
            <BlueButton
              //   onPress={() => this.onSubmit()}
              title={"SUBMIT"}
              style={{
                width: wp("60%"),
                height: 40,
                top: hp("3%"),
                alignSelf: "center",
              }}
            />
          </View>
        )}
      </View>
    );
  }
}

export default BeatForm;
const Styles = StyleSheet.create({
  header: {
    height: hp("10%"),
    width: wp("100%"),
    backgroundColor: Colors.primary,

    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    alignSelf: "center",
  },
});
