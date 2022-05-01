import { View, Text, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import React from "react";

const FocusStatusBar = (props) => {
  const isFocus = useIsFocused();
  return isFocus ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusStatusBar;
