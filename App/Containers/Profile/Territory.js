import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";

class ProfileTerritory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          name: "Rajpura",
        },
        {
          name: "Patiala",
        },
        {
          name: "Barnala",
        },
      ],
    };
  }
  getList() {
    const { data } = this.props;
    let list = [];
    if (data && data.length) {
      data.map((obj) => {
        if (
          {
            id: obj.Id,
            name: obj.Area__r.Area_Name__c,
          }
        ) {
          list.push({
            id: obj.Id,
            name: obj.Area__r.Area_Name__c,
          });
        }
      });
    }
    return list;
  }

  render() {
    console.log("lllllllllll", this.props.data, this.getList());
    return (
      <View>
        <View>
          {/* <Text
            style={{
              ...Fonts.Medium,
              fontFamily: ApplicationStyles.textMsgFont,
              borderWidth: 1,
              marginTop: 7,
              borderColor: "transparent",
              borderBottomColor: Colors.grey,
              color: Colors.black,
            }}
          >
            {"Area"}
          </Text> */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 13,
              justifyContent: "flex-start",
              flexWrap: "wrap",
              width: wp("80%"),
              left: wp("5%"),
            }}
          >
            {this.getList().map((text) => (
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  marginBottom: 10,
                  marginRight: 10,
                  marginTop: "2%",
                  padding: 10,
                  justifyContent: "center",
                  fontSize: 13,
                  top: "8%",
                  borderWidth: 2,
                  borderColor: Colors.tabBorder,
                  borderRadius: 15,
                  marginLeft: 5,
                  alignSelf: "center",
                }}
              >
                {text.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  }
}
export default ProfileTerritory;
