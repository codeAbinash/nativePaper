import { View } from "react-native";
import { LightTheme } from "../theme/LightTheme";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function EndText() {
  return (
    <View
      style={{
        backgroundColor: LightTheme.colors.background,
        paddingBottom: 100,
        paddingTop: 20,
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "gray",
          textAlign: "center",
          marginTop: 10,
          fontSize: 12,
        }}
      >
        <Icon name="lock" color={"gray"} size={14} /> Your personal messages are{" "}
        <Text style={{ color: LightTheme.colors.primary }}>
          end-to-end encrypted
        </Text>
      </Text>
    </View>
  );
}
