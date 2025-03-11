import { SliderBox } from "react-native-image-slider-box";

import React, { Component } from "react";
import { View } from "react-native";

export default class ImageSilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
          require("App/Assets/Images/bot_card.png"),
        // "https://www.mrfpaint.com/uploads/banner/new-banner3.jpg",
        // "https://www.mrfpaint.com/uploads/banner/new-banner2.jpg",
        // "https://www.mrfpaint.com/uploads/banner/new-banner1.jpg"
        require("App/Assets/Images/book_card.png"),
        // require("App/Assets/Images/banner1.jpeg"),
        // require("App/Assets/Images/banner2.jpeg"),
        // require("App/Assets/Images/banner3.jpeg"),
      ],
    };
  }
  render() {
    return (
      <View>
        <SliderBox
          sliderBoxHeight={200}
          autoplay
          circleLoop
          // images={this.props.data}
          images={this.state.images}
          // onCurrentImagePressed={this.props.onclick}
        />
      </View>
    );
  }
}
