import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Input,
  Item,
  Right,
  Badge,
  Spinner,
} from "native-base";
import NavigationService from "App/Services/NavigationService";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
import GenericIcon from "App/Components/GenericIcon";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _ from "lodash";
import CommonActions from "App/Stores/Common/Actions";
import { TextInput } from "react-native";

const Filters = ({
  style = {},
  textStyle = {},
  onPress,
  title,
  target,
  month,
  text,
  value,
  key,
  dataSource,
  selectedValue,
  customPickerStyles,
  onPressFilter,
  onPressSort,
  onChange,
  placeholder,
  sortStyle = {},
  filterStyle = {},
  icon,
  icon1,
  icon2,
  onPressMore,
  onKeyPress,
  textInput,
  filter,
}) => {
  return (
    <View
      style={{
        height: hp("7%"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: Colors.primary,
        top: "0%",
        borderRadius: 5,
        width: "90%",
        left: "12%",
        ...style,
      }}
    >
      {!textInput ? (
        <SearchableDropdown
          key={key}
          dataSource={dataSource}
          placeHolderText={"Select"}
          selectedValue={selectedValue}
          onChange={onChange}
          placeholder={placeholder}
          invalid={false}
          customPickerStyles={{
            ...Styles.customPickerStyles,
            ...customPickerStyles,
          }}
        />
      ) : (
        <TextInput
          style={{ ...Styles.customPickerStyles, ...customPickerStyles }}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          value={selectedValue}
          onChangeText={onChange}
        />
      )}

      <TouchableOpacity
        style={{ ...Styles.sort, ...sortStyle }}
        onPress={onPressSort}
        /*  onPress={() => 
NavigationService.navigate('ComplaintFilters')
} */
      >
        {icon ? (
          <GenericIcon
            name={icon}
            style={{
              color: Colors.black,
              fontSize: wp("6.5%"),
              paddingRight: 0,
              paddingLeft: wp("1%"),
              marginTop: hp("-0.8%"),
            }}
          />
        ) : (
          []
        )}
        {/* <Text
          style={{
            fontSize: wp("5.0%"),
            color: Colors.white,
            fontFamily: ApplicationStyles.textMsgFont,
            marginTop: hp("-0.8%"),

          }}
        >
          Sort
        </Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...Styles.filter, ...filterStyle }}
        onPress={onPressFilter}
      >
        {icon1 ? (
          <GenericIcon
            name={icon1}
            style={{
              color: Colors.black,
              fontSize: wp("6.5%"),
              paddingRight: 0,
              paddingLeft: wp("1%"),
              marginTop: hp("-0.4%"),

              // marginTop: hp("0.2%"),
            }}
          />
        ) : (
          []
        )}
        {/* <Text
          style={{
            fontSize: wp("5.0%"),
            color: Colors.white,
            fontFamily: ApplicationStyles.textMsgFont,
            marginTop: hp("-0.4%"),

          }}
        >
          Filter
        </Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...Styles.filters, ...filterStyle }}
        onPress={onPressMore}
      >
        {icon2 ? (
          <GenericIcon
            name={icon2}
            style={{
              color: Colors.black,
              fontSize: wp("6.5%"),
              paddingRight: 0,
              paddingLeft: wp("1%"),
              marginTop: hp("-0.4%"),

              // marginTop: hp("0.2%"),
            }}
          />
        ) : (
          []
        )}
      </TouchableOpacity>
      {filter ? (
        <View style={{ left: "-52%", width: "8%", top: "-1%" }}>{filter}</View>
      ) : (
        []
      )}
    </View>
  );
};

export default Filters;
const Styles = StyleSheet.create({
  customPickerStyles: {
    marginTop: -4,
    backgroundColor: "white",
    paddingVertical: 2,
    paddingHorizontal: "8%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderRadius: 4,
    elevation: 5,
    marginLeft: "16%",
  },
  sort: {
    flexDirection: "row",
    marginRight: "5%",
    left: "9%",
  },
  filter: {
    flexDirection: "row",
    marginRight: "5%",
    left: "6.5%",
  },
  filters: {
    flexDirection: "row",
    marginRight: "5%",
    left: "3.5%",
  },
});
