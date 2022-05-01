import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

import { COLORS, NFTData } from "../constants";
import React, { useState } from "react";
import { NFTCard, FocusStatusBar, HomeHeader } from "../components/index";

const Home = () => {
  return (
    // <View>
    //   <Text>Home</Text>
    // </View>
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View
            style={{ flex: 1, height: 300, backgroundColor: COLORS.white }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
