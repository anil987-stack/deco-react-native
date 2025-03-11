import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import BackArrowButton from "App/Components/BackArrowButton";
import { ApplicationStyles, Colors } from "App/Theme";
import { Card } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import DetailCard from "../../Components/DetailCard/DetailCard";
// import DetailCardStrip from "../../Components/DetailCard/DetailCardStrip";
import SearchBar from "App/Components/SearchBar";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";

function EnrollTraining() {
  const [data, setdata] = useState([
    {
      order: "Training A",
      date: "16",
      id: "1",
      month: "AUG 2021",
      name: "Training C",
      dateTitle: "Enrolled Date",
      complaintTpe: "Functional",
      enddate: "1 June",
      category: "19/07/2021",
      groupCode: "19/08/2021",
      img:
        "https://t3.ftcdn.net/jpg/01/76/87/08/360_F_176870808_CH5WYqYtEUsjUyWXWUCmrL6rUp5zZYlc.jpg",
    },
  ]);
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <FlatList
      // style={{ top: hp("2%%"), marginBottom: "10%" }}
      contentContainerStyle={{ paddingBottom: 90, paddingTop: 10 }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ImageBackground
          source={{ uri: item.img }}
          //  resizeMode="cover"
          style={{
            justifyContent: "center",
            width: wp("90%"),
            alignSelf: "center",
            marginTop: hp("2%"),
            // marginBottom: hp("0.5%"),
            height: hp("18%"),
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              opacity: 0.8,
              top: hp("5.8%"),
              flexDirection: "row",
            }}
          >
            <View>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  // lineHeight: 84,
                  fontWeight: "bold",
                  textAlign: "left",
                  // backgroundColor: "white",
                  // opacity:0.8,
                  // top:hp("5.3%"),
                  left: wp("1%"),
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 15,
                  // lineHeight: 84,
                  fontWeight: "bold",
                  textAlign: "left",
                  // backgroundColor: "white",
                  // opacity:0.8,
                  // top:hp("5.3%"),
                  left: wp("1%"),
                }}
              >
                Ended {item.enddate}
              </Text>
            </View>
            <View style={{ left: wp("45%"), alignSelf: "center" }}>
              <TouchableOpacity style={{ backgroundColor: "red", padding: 5 }}>
                <Text style={{ color: "white" }}>JOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        // <DetailCard
        //   dark={false}
        //   style={{
        //     backgroundColor: Colors.white,
        //     borderWidth: 0.5,
        //     width: wp("89%"),
        //     right: wp("1%"),
        //     borderColor: "#F66A676B",
        //   }}
        //   heading={item.order}
        //   headstyle={Styles.head}
        //   date={item.date}
        //   datestyle={Styles.date}
        //   month={item.month}
        //   monthstyle={Styles.month}
        //   heading1={item.dateTitle}
        //   head1style={Styles.head1}
        //   // heading2={item.name1}
        //   // head2style={Styles.head2}

        //   content={[
        //     <DetailCardStrip
        //       labelStyle={Styles.ttl}
        //       valueStyle={Styles.detail}
        //       label={"Category"}
        //       value={item.complaintTpe}
        //     />,
        //     <DetailCardStrip
        //       labelStyle={Styles.ttl}
        //       valueStyle={Styles.detail}
        //       label={"Start Date"}
        //       value={item.category}
        //     />,
        //     <DetailCardStrip
        //       labelStyle={Styles.ttl}
        //       valueStyle={Styles.detail}
        //       label={"End Date"}
        //       value={item.groupCode}
        //     />,

        //   ]}
        // />
      )}
    />
  );
}

export default EnrollTraining;
const Styles = StyleSheet.create({
  date: {
    fontSize: 25,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("2%"),
    top: hp("1.5%"),
    fontWeight: "bold",
  },
  month: {
    fontSize: 12,
    fontFamily: "Rubik",
    color: Colors.background,
    left: hp("0%"),
    top: hp("1%"),
    fontWeight: "bold",
  },
  head: {
    fontSize: 18,
    fontFamily: "Rubik",
    left: hp("0%"),
    fontWeight: "bold",
    color: Colors.black,
  },
  head1: {
    fontSize: 13,
    fontFamily: "Rubik",
    left: hp("-0.4%"),
    top: hp("1.5%"),
  },
  head2: {
    fontSize: 13,
    fontFamily: "Rubik",
    left: hp("-0.4%"),
    top: hp("1.5%"),
    color: Colors.lightGrey,
  },

  ttl: {
    color: Colors.lightGrey,
    fontSize: wp("4%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    top: hp("4%"),
    left: wp("7%"),
  },
  detail: {
    color: Colors.black,
    fontSize: wp("4%"),
    fontFamily: "Rubik",
    fontWeight: "bold",
    bottom: hp("1%"),
    left: wp("13%"),
    top: hp("4%"),
  },
});
