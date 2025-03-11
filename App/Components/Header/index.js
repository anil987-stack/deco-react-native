import NavigationService from 'App/Services/NavigationService'
import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from '../../Theme/Colors';

 const Header = ({ title }) => {
  

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header style={[{ marginTop: 2 }, styles.color]}>
      <Appbar.BackAction onPress={NavigationService.goback} />
      <Appbar.Content style={{alignSelf:'center'}}title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  color: { backgroundColor: Colors.primary },
});

export default Header
