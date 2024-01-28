import React from "react";
import { ScrollView, View } from "react-native";
import { Appbar, FAB, Searchbar } from "react-native-paper";
import { LightTheme } from "../../../theme/LightTheme";

export default function Calls() {
  const [isClicked, setIsClicked] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Calls" />
        <Appbar.Action
          style={{ margin: 3 }}
          icon="dots-vertical"
          onPress={() => {}}
        />
      </Appbar.Header>
      <ScrollView
        style={{
          backgroundColor: LightTheme.colors.background,
          flexGrow: 1,
          display: "flex",
        }}
      >
        <View
          style={{
            backgroundColor: LightTheme.colors.background,
            flexGrow: 1,
            display: "flex",
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
          />
        </View>
      </ScrollView>
      <FAB
        icon={isClicked ? "phone" : "phone-plus"}
        style={{
          position: "absolute",
          margin: 20,
          right: 0,
          bottom: 0,
        }}
        onPress={() => setIsClicked(!isClicked)}
      />
    </>
  );
}
