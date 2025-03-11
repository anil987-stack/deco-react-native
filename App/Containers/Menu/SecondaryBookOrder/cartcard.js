import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import EditQuantity from "../../../Components/EditQuantity/EditQuantity";
import { Picker, Input } from "native-base";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "App/Services/Utils/HelperService";
import InputNumber from "App/Components/FormInput/InputNumber";

const cartCard = ({
  name,
  qty,
  onRemoveClick,
  unit,
  desc,
  amount,
  onChangeQuantity,
}) => (
  <View style={styles.head}>
  <View style={styles.v2}>
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View style={{ flex: 2.5, width: "100%" }}>
        <Text style={styles.name_text}>{name}</Text>
      </View>

      {/* <View style={styles.qty}>
                  <EditQuantity value={Number(quantity)} onChange={(value) => onChangeQuantity(Number(value))} key={quantity} />
              </View> */}
      <View style={styles.v3}>
        <TouchableOpacity onPress={onRemoveClick}>
          <GenericIcon name="delete" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
    <View>
      <Text
        style={{
          marginLeft: wp("4%"),
          // marginTop: hp("1%"),
          fontWeight: "bold",
        }}
      >
        {desc}
      </Text>
    </View>

    <View style={styles.ndp}>
      <View style={{ flexDirection: "row", marginTop:3, width: wp("55%"),left:wp("1%") }}>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#666666C4",
              fontWeight: "bold",
              right: wp("12%"),
              marginTop: hp("0.8%"),
              width: wp("15%"),
            }}
          >
            Qty
          </Text>
        </View>
        <View style={{ marginRight: wp("10%") }}>
          <EditQuantity
            // value={5}
            value={Number(qty)}
            onChange={(qty) => onChangeQuantity(Number(qty))}
            key={qty}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          right: 5,
          marginTop: hp("1%"),
          width: wp("100%"),
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{ fontWeight: "bold", marginLeft: 0, textAlign: "center" }}
          >
            {qty}
          </Text>
          <Text
            style={{
              color: "#9A9A9A",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Total Qty
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{ fontWeight: "bold", marginLeft: 5, textAlign: "center" }}
          >
            {unit}
          </Text>
          <Text
            style={{
              color: "#9A9A9A",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Unit Price
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{ fontWeight: "bold", marginLeft: 5, textAlign: "center" }}
          >
            {amount}
          </Text>
          <Text
            style={{
              color: "#9A9A9A",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Net Amount
          </Text>
        </View>
      </View>

      {/* <View style={{ flexDirection: "row", marginTop: 10, width: wp("35%") }}>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#666666C4",
              marginTop: 1,
              fontWeight: "bold",
            }}
          >
            Location
          </Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#F66A67",
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            {data ? data : 0}
          </Text>
        </View>
      </View> */}

      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: wp("100%"),
          marginLeft: wp("20%"),
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#666666C4",
              marginTop: 1,
              fontWeight: "bold",
            }}
          >
            Total Qty
          </Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#ed1b24",
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 1,
              marginRight: wp("8%"),
            }}
          >
            {value
              ? HelperService.currencyValue(
                  HelperService.FixedDecimalValue(value)
                )
              : "₹234"}
          </Text>
        </View>
      </View> */}
      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          width: wp("65%"),
          height: hp("4%"),
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14.5,
              color: "#666666C4",
              marginTop: 1,
              fontWeight: "bold",
              right: hp("4%"),
            }}
          >
            Variable Discount
          </Text>
        </View>

        <View style={{ width: "100%", flex: 1, left: wp("15%") }}>
          <Input
            value={String(discount)}
            style={{
              color: Colors.clr66,
              fontFamily: ApplicationStyles.textMediumFont,
              fontSize: wp("3.4%"),
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              height: hp("4%"),
              borderBottomWidth: 2.5,
              borderColor: Colors.darkRedPink,
              borderRadius: 3,
              alignSelf: "center",
              textAlign: "center",
              width: wp("15%"),
              top: hp("-1.5%"),
            }}
            onChangeText={(discount) => onChangeDiscount(Number(discount))}
            // onChangeText={(value) => this.setNumber(value)}
            keyboardType={"phone-pad"}
          />
         
        </View>
      </View> */}

      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: wp("100%"),
          marginLeft: wp("20%"),
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#666666C4",
              marginTop: 1,
              fontWeight: "bold",
            }}
          >
            Total discount
          </Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#ed1b24",
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 1,
              marginRight: wp("8%"),
            }}
          >
            {value * (discount / 100)
              ? HelperService.currencyValue(value * (discount / 100))
              : 0}
          </Text>
        </View>
      </View> */}
      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: wp("100%"),
          marginLeft: wp("20%"),
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#666666C4",
              marginTop: 1,
              fontWeight: "bold",
            }}
          >
            Order Value(with discount)
          </Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#ed1b24",
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 1,
              marginRight: wp("8%"),
            }}
          >
            {value - value * (discount / 100)
              ? HelperService.currencyValue(value - value * (discount / 100))
              : 0}
          </Text>
        </View>
      </View> */}
      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: wp("100%"),
          marginLeft: wp("20%"),
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#666666C4",
              marginTop: 1,
              fontWeight: "bold",
            }}
          >
            MRP
          </Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#ed1b24",
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 1,
              marginRight: wp("8%"),
            }}
          >
            {tax ? HelperService.currencyValue(tax) : "₹234"}
          </Text>
        </View>
      </View> */}
      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: wp("100%"),
          marginLeft: wp("20%"),
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#666666C4",
              marginTop: 1,
              fontWeight: "bold",
            }}
          >
            Division
          </Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#ed1b24",
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 1,
              marginRight: wp("8%"),
            }}
          >
            {"AE"}
          </Text>
        </View>
      </View> */}
    </View>
  </View>
</View>
);

const styles = StyleSheet.create({
  head: {
    alignItems: "center",
    marginTop: 0,
    margin: 10,
  },
  name_text: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
  v2: {
    width: "95%",
    paddingBottom: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00000026",
    backgroundColor: "#F4F4F4E8",
    elevation: 5,
  },
  qty: {
    width: "100%",
    flex: 2,
    height: 20,
    marginLeft: 10,
    marginTop: 15,
  },
  v3: {
    marginLeft: 10,
    marginTop: 2.13,
    width: "100%",
    flex: 1,
  },
  icon: {
    color: "black",
    fontSize: 20,
    marginRight: 15,
    alignSelf: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  ndp: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  view2: {
    width: 104,
    height: 26,
    marginTop: 11,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#70707078",
  },
  picker2: {
    borderRadius: 0,
    width: wp("36%"),
    height: hp("4.5%"),
    elevation: 0,
    paddingHorizontal: 0,
    backgroundColor: Colors.white,
    borderWidth: 0.5,
  },
  pickerLabel: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row",
  },
});

export default cartCard;
