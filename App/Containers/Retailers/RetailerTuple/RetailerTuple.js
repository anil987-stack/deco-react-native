import React from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import styles from "./RetailerTupleStyle";
import moment from "moment";
import { Icon, Input, Button, Item } from "native-base";
import {
  AREA,
  PREV_ORDER_VAL,
  VISIT_THIS_WEEK,
  MAIN_COMPETETOR,
} from "App/Constants";
import {
  Colors,
  Metrics,
  Helpers,
  Fonts,
  ApplicationStyles,
  StyleSheet,
} from "App/Theme";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import GenericIcon from "App/Components/GenericIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RetailerTuple = ({
  onPress,
  id,
  item,
  areas,
  competitors,
  select,
  bgcolor,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ ...styles.surface }}>
        <View style={styles.row}>
          <Text style={styles.head}>{item.Name}</Text>
        </View>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: -25, marginRight: 10 }}>

          <Image
            style={{ height: 25, width: 25, left: 10, justifyContent: 'flex-end' }}
            source={require("App/Assets/Images/coin.png")}
          />
        </View> */}
        <View style={{ marginTop: 1, marginLeft: 0, width: wp("55") }}>
          <Text style={{ ...Fonts.Small, fontWeight: "700", color: "grey" }}>
            {item.Address__c ? item.Address__c : ""}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            position: "absolute",
            left: wp("50%"),
            top: hp("2%"),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <GenericIcon
              show={true}
              name={"phone"}
              style={{
                marginTop: 3,
                width: wp("5"),
                height: wp("6"),
                fontSize: hp("2.4"),
                color: Colors.primary,
                zIndex: 200,
              }}
              onPress={() => HelperService.callNumber(item.Phone || "")}
            />
            <Text
              style={{
                color: Colors.primary,
                marginLeft: 5,
                fontSize: hp("2"),
              }}
            >
              Call
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <GenericIcon
              show={true}
              name={"target"}
              style={{
                marginTop: 1,
                width: wp("5"),
                height: wp("6"),
                fontSize: hp("2.4"),
                color: Colors.primary,
                zIndex: 200,
              }}
              onPress={() => {
                item.Location__c &&
                item.Location__c.latitude &&
                item.Location__c.longitude
                  ? HelperService.showDirectionInGoogleMaps(
                      item.Location__c.latitude,
                      item.Location__c.longitude
                    )
                  : HelperService.showToast({
                      message: "Geo Location Not Available",
                      duration: 2000,
                      buttonText: "Okay",
                    });
              }}
            />
            <Text
              style={{
                color: Colors.primary,
                marginLeft: 4,
                fontSize: hp("2"),
              }}
            >
              Direction
            </Text>
          </View>
        </View>
        <View style={{ marginTop: wp("1") }}>
         
          {/* <View style={[styles.keyvalue]}>
            <Text style={styles.key}>Last Order Qty</Text>
            <Text style={styles.value}>
              {'25'}
            </Text>
          </View> */}
          <View style={[styles.keyvalue]}>
            <Text style={styles.key}>Last Visit Date</Text>
            <Text style={styles.value}>
            27-04-2022
              {/* {item.Visits__r && item.Visits__r.records[0].Visit_Date__c
                ? item.Visits__r.records[0].Visit_Date__c
                : "27-04-2022"} */}
            </Text>
          </View>

          {item.Sub_Category__c == "RETAILER" ||
          item.Sub_Category__c == "2WH MECHANIC" ||
          item.Sub_Category__c == "2WH RETAILER" ||
          item.Sub_Category__c == "JODIDARS" ? (
            <View style={[styles.keyvalue]}>
              <Text style={styles.key}>Total Points</Text>
              <Text style={styles.value}>
                {item.Sum_Points__c ? item.Sum_Points__c : ""}
              </Text>
            </View>
          ) : null}

          {item.Sub_Category__c == "PROSPECT- PRIMARY" ||
          item.Sub_Category__c == "PROSPECT- SECONDARY" ? (
            <View style={[styles.keyvalue]}>
              <Text style={styles.key}>Status</Text>
              <Text style={styles.value}>
                {item.Overall_Status__c ? item.Overall_Status__c : ""}
              </Text>
            </View>
          ) :  <View style={[styles.keyvalue]}>
          <Text style={styles.key}>Last Order Date</Text>
          <Text style={styles.value}>
            {item.Orders__r && item.Orders__r.records[0].Order_Date__c
              ? item.Orders__r.records[0].Order_Date__c
              : "27-04-2022"}
          </Text>
        </View>}
          {/* <View style={[styles.keyvalue]}>
            <Text style={styles.key}>MTD Sales</Text>
            <Text style={styles.value}>
              {item.last_visit_date__c !== null
                ? item.last_visit_date__c
                : "NA"}
            </Text>
          </View> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RetailerTuple;
