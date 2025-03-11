import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, ApplicationStyles, Metrics } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BlueButton from "App/Components/BlueButton";
import GenericIcon from "App/Components/GenericIcon";
import { TextInput } from "react-native";
//import DisplayCardStrip from '../GenericDisplayCard/GenericDisplayCardStrip';
import { Fonts } from "App/Theme";
import InputNumber from "App/Components/FormInput/InputNumber";
import NavigationService from "App/Services/NavigationService";
import WhiteButton from "App/Components/WhiteButton";

const ProductsTuple = ({
  item,
  id,
  select,
  form,
  changeForm,
  isAddedInCart,
  onRemoveClick,
}) => {
  return (
    <View
      style={{
        alignSelf: "center",
        marginBottom: "3%",
        marginTop: "1%",
        width: wp("88%"),
        elevation: 5,
        backgroundColor: item.FocLst ? "#e6ffe6" : "white",
        borderColor: "white",
        borderWidth: 0,
        borderRadius: 5,
      }}
    >
      <TouchableOpacity
        // transparent
        // activeOpacity={5}
        onPress={isAddedInCart ? onRemoveClick : select}
        style={{
          zIndex: 10,
        }}
      >
        {isAddedInCart ? (
          <GenericIcon
            name={"check-circle"}
            style={{
              marginLeft: wp("78%"),
              fontSize: 35,
              color: Colors.green,
              top: hp("2%"),
            }}
          />
        ) : (
          <GenericIcon
            name={"add-circle"}
            style={{
              marginLeft: wp("78%"),
              fontSize: 35,
              color: Colors.primary,
              top: hp("2%"),
            }}
          />
        )}
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 0,
          // margin: 10,
          // marginTop: -wp("8"),
        }}
      >
        <View style={{ flexDirection: "column" }}>
        {item.Product_Image_1?<Image
            style={{
              height: hp("13%"),
              width: wp("25%"),
              resizeMode: "stretch",
              marginTop: hp("3%"),
            }}
            source={{ uri: "data:image/jpeg;base64," + item.Product_Image_1 }}
            // source={require("../../../Assets/Images/battery.jpeg")}
          />:<Image
          style={{
            height: hp("13%"),
            width: wp("25%"),
            resizeMode: "stretch",
            marginTop: hp("3%"),
          }}
          // source={{ uri: "data:image/jpeg;base64," + item.Product_Image_1 }}
          source={require("../../../Assets/Images/no_image_availabl.png")}
        />}
          {item.NewProduct ? (
            <WhiteButton
              style={{
                height: hp("3%"),
                width: wp("20%"),
                backgroundColor: "#D4F1F4",
                left: wp("2%"),
              }}
              title={"NEW"}
              textStyle={{ fontSize: hp("1.3"), color: "black" }}
            />
          ) : (
            []
          )}
          {item.FocLst ? (
            <Text
              style={{ textAlign: "center", fontSize: 13, top: hp("0.5%") }}
            >
              MOQ:
              {item.FocLst[0].MOQ__c ? item.FocLst[0].MOQ__c : "0"}
            </Text>
          ) : (
            []
          )}
          {item.FocLst ? (
            <Text
              style={{ textAlign: "center", fontSize: 13, top: hp("0.5%") }}
            >
              FOC:
              {item.FocLst[0].FOC_Quantity__c
                ? item.FocLst[0].FOC_Quantity__c
                : "0"}
            </Text>
          ) : (
            []
          )}
        </View>
        <View style={{ marginLeft: 6, top: hp("-2%") }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                // margin: "1%",
                // fontFamily: ApplicationStyles.textMsgFont,
                flexDirection: "row",
                width: wp("40%"),
                fontSize: wp("4"),

                color: Colors.primary,
              }}
            >
              {item.name}
            </Text>
            {item.Focused_Product ? (
              <GenericIcon
                show={true}
                name={"star"}
                style={{
                  fontSize: 24,
                  color: "#FFD700",
                  top: hp("-0.5%"),
                }}
              />
            ) : (
              []
            )}
          </View>
          <View style={{ marginHorizontal: 0, width: wp("50") }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                width: wp("50"),
              }}
            >
              {item.Description}
            </Text>
          </View>
          <View style={{ marginHorizontal: 0, width: wp("60%") }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                width: wp("50"),
              }}
            >
              {item.Application}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: wp("28%") }}>
              {/* <Text style={{}}>Application</Text> */}
              <Text style={{}}>Division</Text>
              <Text style={{ marginTop: wp("0") }}>Avlb Stock:</Text>
              {/* <Text style={{ marginTop: wp("0") }}>Stock Available</Text> */}
              <Text style={{ marginTop: wp("0") }}>MRP:</Text>
            </View>
            <View style={{ width: wp("25%"), left: wp("3%") }}>
              {/* <Text style={{ fontWeight: "bold" }}>
              {item.Application__c ? item.Application__c : ""}
            </Text> */}
              <Text style={{ fontWeight: "bold" }}>
                {item.Division_l ? item.Division_l : ""}
              </Text>
              <Text style={{ fontWeight: "bold", marginTop: wp("0") }}>
                {item.MRPUOS ? item.MRPUOS : ""}
              </Text>
              {/* <Text style={{ fontWeight: "bold", marginTop: wp("0") }}> */}
                {/* {item.Branch_Inventories__r
                  ? item.Branch_Inventories__r.records[0].Product_Quantity__c
                  : "0"} */}
              {/* </Text> */}
              <Text style={{ fontWeight: "bold", marginTop: wp("0") }}>
                {item.MRP ? "₹" + item.MRP : ""}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "69%",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ marginTop: wp("0") }}>Quantity</Text>
              <View style={{ width: wp("13%") }}>
                <InputNumber
                  value={item.id == form.id ? form.quantity__c : ""}
                  placeholder=""
                  styles={{
                    height: hp("4%"),
                    padding: 2,
                    width: 10,
                    fontSize: hp("2"),
                    textAlign: "center",
                  }}
                  onChange={(value) =>
                    changeForm({
                      edited_field: "quantity__c",
                      edited_field1: "id",
                      edited_value: value,
                      edited_value1: item.id,
                    })
                  }
                />
              </View>
            </View>
            <View style={{ marginLeft: wp("5") }}>
              <Text>Total Quantity</Text>
              <View style={{ width: wp("13%") }}>
                <InputNumber
                  editable={false}
                  value={item.id == form.id ? form.quantity__c : ""}
                  placeholder=""
                  styles={{
                    height: hp("4%"),
                    padding: 2,
                    width: 10,
                    fontSize: hp("2"),
                    textAlign: "center",
                    elevation: 0,
                    borderColor: "transparent",
                    color: "black",
                  }}
                  // onChange={(value) =>
                  //   changeForm({
                  //     edited_field: "quantity__c",
                  //     edited_field1: "id",
                  //     edited_value: { value, id: item.Id },
                  //   })
                  // }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProductsTuple;
