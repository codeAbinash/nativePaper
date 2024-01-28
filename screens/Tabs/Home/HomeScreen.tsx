import { faker } from "@faker-js/faker";
import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import {
  Appbar,
  Avatar,
  FAB,
  Tooltip,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";
import { LightTheme } from "../../../theme/LightTheme";
import EndText from "../../EndText";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Whatsapp" />
        <Tooltip title="Camera">
          <Appbar.Action
            style={{ margin: 3 }}
            icon="camera"
            onPress={() => {}}
          />
        </Tooltip>
        <Tooltip title="Search">
          <Appbar.Action
            style={{ margin: 3 }}
            icon="magnify"
            onPress={() => {}}
          />
        </Tooltip>
        <Tooltip title="More options">
          <Appbar.Action
            style={{ margin: 3 }}
            icon="dots-vertical"
            onPress={() => {}}
          />
        </Tooltip>
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
          }}
        >
          {Array.from(Array(20).keys()).map((item) => (
            <Chat key={item} value={item} />
          ))}
        </View>

        <EndText />
      </ScrollView>
      <FAB
        icon="message-text"
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
};

function Chat({ value }: { value: number }) {
  const isNewMessage = faker.datatype.boolean();

  return (
    <TouchableRipple
      onPress={() => console.log("Pressed")}
      rippleColor="#00000015"
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          paddingBottom: 12,
          paddingTop: 12,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View>
          {/* <Avatar.Icon size={50} icon='folder' /> */}
          <Avatar.Image
            size={50}
            style={{ backgroundColor: "#00000015" }}
            source={{ uri: `https://picsum.photos/${50 + value}` }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 17 }} numberOfLines={1}>
              {faker.person.fullName()}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
              }}
            >
              <Icon name="check" color={"gray"} size={17} />
              {/* <Icon name='sticker' color={'gray'} size={17} /> */}
              <Text
                numberOfLines={1}
                style={{ color: "gray", maxWidth: width * 0.5 }}
              >
                {faker.lorem.paragraph({ min: 1, max: 1 })}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 7,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                color: isNewMessage ? LightTheme.colors.primary : "gray",
                fontSize: 12,
              }}
            >
              {fixZero(faker.number.bigInt({ min: 1, max: 31 })).toString()}/
              {fixZero(faker.number.bigInt({ min: 1, max: 12 })).toString()}/
              {faker.number.bigInt({ min: 20, max: 24 }).toString()}
            </Text>

            {isNewMessage && (
              <View
                style={{
                  backgroundColor: LightTheme.colors.primary,
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 12 }}>
                  {faker.number.bigInt({ min: 1, max: 10 }).toString()}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
}

function fixZero(num: bigint) {
  return num < 10 ? `0${num}` : num;
}

export default HomeScreen;
