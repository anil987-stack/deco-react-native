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
import SearchBar from 'App/Components/SearchBar';

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
  sortStyle={},
  filterStyle={},
  icon,
  icon1,
  icon2,
  onPressMore,
  onInputChange,
  onInputSubmit,
  onInputClear,
  valueSearch,
  searchContainers,
  filter
}) => {
  return (
    <View
      style={{
        height: hp("7%"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor:Colors.primary,
        top:"-4%",
        borderRadius:5,
        width:"90%",
        left:"12%",
        ...style
      }}
    >
         <SearchBar
                        placeholder={`Search`}
                        onInputChange={onInputChange}
                        onInputSubmit={onInputSubmit}
                        onInputClear={onInputClear}
                        value={valueSearch}
                        ContainerStyles={{...Styles.searchContainer,...searchContainers}}
             inputStyles={{fontSize: wp('3%'),}}
             IconStyles={{fontSize: wp('4%')}}

                    />
      {/* <SearchableDropdown
        key={key}
        dataSource={dataSource}
        placeHolderText={"Select"}
        selectedValue={selectedValue}
        onChange={onChange}
        placeholder={placeholder}
        invalid={false}
        customPickerStyles={ {...Styles.customPickerStyles, ...customPickerStyles}}
      /> */}

      <TouchableOpacity
        style={{...Styles.sort, ...sortStyle  }}
        onPress={onPressSort}
        /*  onPress={() => 
NavigationService.navigate('ComplaintFilters')
} */
      >
         {icon ?
        <GenericIcon
          name={icon}
          style={{
            color: Colors.black,
            fontSize: wp("6.5%"),
            paddingRight: 0,
            paddingLeft: wp("1%"),
            marginTop: hp("-0.7%"),
          }}
        />
        : []}
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
        style={{...Styles.filter, ...filterStyle  }}

        onPress={onPressFilter}
        >

       
        {icon1 ?
        <GenericIcon
          name={icon1}
          style={{
            color:Colors.black ,
            fontSize: wp("6.5%"),
            paddingRight: 0,
            paddingLeft: wp("1%"),
            marginTop: hp("-0.4%"),

            // marginTop: hp("0.2%"),
          }}
        />
        : []}
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
        style={{...Styles.filters, ...filterStyle  }}

        onPress={onPressMore}
        >
        {icon2 ?
        <GenericIcon
          name={icon2}
          style={{
            color:Colors.black ,
            fontSize: wp("6.5%"),
            paddingRight: 0,
            paddingLeft: wp("1%"),
            marginTop: hp("-0.4%"),

            // marginTop: hp("0.2%"),
          }}
        />
        : []}
      </TouchableOpacity>

      { filter ? <View style={{left:"-15%",width:"8%",top:"-1%"}}>{filter}</View> : []}
    </View>
  );
};

export default Filters;
const Styles = StyleSheet.create({
    customPickerStyles:{
        marginTop: -4,
		backgroundColor: 'white',
		paddingVertical: 8,
		paddingHorizontal: '8%',
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// borderRadius: 4,
		elevation: 5,
    marginLeft:"16%",
    
		

    },
    sort:{
    flexDirection: "row",
    marginRight: "5%",
    left:"8%"

    },
    filter:{
      flexDirection: "row",
       marginRight: "5%",
    left:"6%"

    },
    filters:{
      flexDirection: "row",
       marginRight: "5%",
    left:"3%"

    },
    searchContainer: {
             

        width: wp("58%"),
        borderRadius: 2,
        paddingHorizontal: 3,
        paddingTop: 0,
        elevation: 10,
        backgroundColor: "white",
        fontSize: wp("1%"),
        // fontWeight: "700",
        top: hp("0%"),
        borderColor:Colors.primary,
         borderWidth:1,
        // color: Colors.blue,
        height: hp("5%"),
        left:"4%",
        //  alignSelf: "center",
        // right:wp("18%")

},

});