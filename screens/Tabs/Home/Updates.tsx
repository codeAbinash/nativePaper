import React from "react";
import { ScrollView, Text, View } from "react-native";
import {
  Appbar,
  Button,
  Checkbox,
  FAB,
  Searchbar,
  TextInput,
} from "react-native-paper";
import { LightTheme } from "../../../theme/LightTheme";
import EndText from "../../EndText";
const CheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={{ fontSize: 16, marginLeft: 10 }}>
        Use less data for calls
      </Text>
    </View>
  );
};

export default function Updates({ navigation }: { navigation: any }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Updates" />
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
          <CheckBox />
          <TextInput
            mode="outlined"
            label="Outlined input"
            placeholder="Type something"
            right={<TextInput.Affix text="/100" />}
          />
        </View>
        <View
          style={{
            paddingBottom: 100,
            paddingTop: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Button
            icon="gesture-tap"
            mode="contained"
            onPress={() => {
              // Go to the update screen
              navigation.navigate("Update");
            }}
          >
            See images
          </Button>
        </View>

        <EndText />
      </ScrollView>

      <FAB
        icon="pencil"
        size="small"
        style={{
          position: "absolute",
          margin: 30,
          marginBottom: 95,
          right: 0,
          bottom: 0,
        }}
        onPress={() => console.log("Pressed")}
      />
      <FAB
        icon="camera"
        style={{
          position: "absolute",
          margin: 20,
          right: 0,
          bottom: 0,
        }}
        onPress={() => console.log("Pressed")}
      />
    </>
  );
}
