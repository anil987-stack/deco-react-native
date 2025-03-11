import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";
import BackArrowButton from "App/Components/BackArrowButton";
import { ApplicationStyles, Colors } from "App/Theme";
import { Card } from "react-native-paper";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import DisplayCard from "../../Components/DisplayCard/DisplayCard";
// import DisplayCardStrip from "../../Components/DisplayCard/DisplayCardStrip";
import NavigationService from "App/Services/NavigationService";
import GenericIcon from "App/Components/GenericIcon";
import WhiteButton from "App/Components/WhiteButton";

function TrainingAll() {
  const [data, setdata] = useState([
    {
      name: "Training A",
      category: "Functional",
      id: "1",
      startdate: "19/07/2021",
      enddate: "26 April",
      img:
        "https://t3.ftcdn.net/jpg/01/76/87/08/360_F_176870808_CH5WYqYtEUsjUyWXWUCmrL6rUp5zZYlc.jpg",
    },
    {
      name: "Training B",
      category: "Awareness",
      id: "2",
      startdate: "19/07/2021",
      enddate: "1 June",
      img:
        "https://positivepsychologylearning.com/wp-content/uploads/2018/08/Online-Course-Banner.jpg",
    },
  ]);
  const [isModalVisible, setModalVisible] = useState(false);
  function onCloseModal() {
    setModalVisible(false);
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const image = {
    uri:
      "https://t3.ftcdn.net/jpg/01/76/87/08/360_F_176870808_CH5WYqYtEUsjUyWXWUCmrL6rUp5zZYlc.jpg",
  };
  console.log("gggggggggg", isModalVisible);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        //    initialNumToRender={7}
        renderItem={({ item }) => (
          // <View
          //   style={{
          //     width: wp("90%"),
          //     // marginTop: hp("2%"),
          //     // marginBottom: hp("0.5%"),
          //     // alignSelf: "center",
          //     // height:hp("25%")
          //   }}
          // >
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
                <TouchableOpacity
                  style={{ backgroundColor: "red", padding: 5 }}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={{ color: "white" }}>ENROLL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          // </View>
          // <DisplayCard
          //   dark={false}
          //   style={{
          //     backgroundColor: Colors.white,
          //     borderColor: Colors.darkRedPink,
          //     borderWidth: 0.5,
          //   }}
          //   heading={item.name}
          //   Styletitle={Styles.head}
          //   //   icon={"check"}
          //   //   iconstyle={Styles.checkicon}
          //   status={"ENROLL"}
          //   Stylestatus={Styles.status}
          //   onPressstatus={toggleModal}
          //   content={[
          //     <DisplayCardStrip
          //       stylettl={Styles.ttl}
          //       styledetail={Styles.detail}
          //       label={"Category"}
          //       value={item.category}
          //     />,
          //     <DisplayCardStrip
          //       stylettl={Styles.ttl}
          //       styledetail={Styles.detail}
          //       label={"Start Date"}
          //       value={item.startdate}
          //     />,
          //     <DisplayCardStrip
          //       stylettl={Styles.ttl}
          //       styledetail={Styles.detail}
          //       label={"End Date"}
          //       value={item.enddate}
          //     />,
          //   ]}
          // />
        )}
      />
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isModalVisible}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E7F9D7",
            height: 200,
            width: "80%",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#fff",
            marginTop: 250,
            marginLeft: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{ left: wp("30%") }}
          >
            <GenericIcon
              name={"cancel"}
              style={{
                fontSize: 25,
                color: Colors.black,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "black",
              marginTop: 10,
              fontWeight: "bold",
              fontSize:20,
              width:wp("55%"),
              textAlign:"center"
            }}
          >
            You have successfully enrolled for training!
          </Text>
          <View style={{ height: hp("4%") }}></View>
          <WhiteButton
            style={{
              backgroundColor: Colors.primary,
              // top: hp("2%"),
              borderRadius: 10,
              height: hp("5%"),
              width: wp("25%"),
            }}
            // onPress={ () => this.props.sendApproval({form: item,token,id:item.Id})}
            onPress={() => {
              onCloseModal();
            }}
            title={"OK"}
            textStyle={{ color: Colors.white, fontSize: 12 }}
          ></WhiteButton>
        </View>
      </Modal>
    </View>
  );
}

export default TrainingAll;
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("0%"),
  },
  cardstyle: {
    backgroundColor: Colors.darkRedPink,
    width: wp("100%"),
    top: hp("-1%"),
    height: hp("15%"),
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  backarrow: {
    color: Colors.white,
    fontSize: 32,
    paddingLeft: 7,
    paddingTop: 20,
  },
  title: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 28,
    fontWeight: "bold",
    left: wp("15%"),
    top: hp("-1%"),
  },
  head: {
    color: Colors.black,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: 18,
    marginBottom: 5,
    textTransform: "capitalize",
  },
  titleText: {
    color: Colors.black,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 28,
    fontWeight: "bold",
  },
  checkicon: {
    left: wp("75%"),
    top: hp("-4%"),
    backgroundColor: Colors.darkRedPink,
    color: Colors.white,
    borderRadius: 50,
    height: hp(4),
    width: wp(8),
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  ttl: {
    color: Colors.lightGrey,
    fontSize: wp("3.5%"),
    fontFamily: ApplicationStyles.textFont,
    left: wp("18%"),
    fontWeight: "bold",
  },
  detail: {
    color: Colors.black,
    fontSize: wp("3.7%"),
    fontFamily: ApplicationStyles.textMsgFont,
    right: wp("18%"),
    fontWeight: "bold",
  },
  status: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    backgroundColor: Colors.darkRedPink,
    fontSize: 12,
    width: wp("20%"),
    padding: wp(1.4),
    borderRadius: 2,
    // top: hp("-0.2%"),
    marginLeft: wp("38%"),
    height: hp("3.7%"),
    textAlign: "center",
    elevation: 3,
  },
});
