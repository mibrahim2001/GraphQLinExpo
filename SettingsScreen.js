import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SectionList } from "react-native";
import { useEffect } from "react";
import { ColorPicker, fromHsv } from "react-native-color-picker";
import { Picker } from "@react-native-picker/picker";

export default function SettingsScreen({ navigation }) {
  const [fontColor, setFontColor] = useState(global.setting.fc);
  const [backgroundColor, setBackgroundColor] = useState(global.setting.bc);
  const [selectedFont, setSelectedFont] = useState(global.setting.fs);

  useEffect(() => {
    return () => {
      console.log("is this calling");
    };
  }, []);

  const saveSettings = () => {
    global.setting = {
      fs: selectedFont,
      fc: fontColor,
      bc: backgroundColor,
    };
    console.log("pressed");

    navigation.pop();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 0.25,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Please choose a font size:</Text>
        <Picker
          selectedValue={selectedFont}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedFont(itemValue);
            console.log(itemValue);
          }}
          mode={"dropdown"}
          style={{ width: 100, height: 20, backgroundColor: "white", marginTop: 10 }}
        >
          <Picker.Item label="10" value="10" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="34" value="34" />
          <Picker.Item label="50" value="50" />
        </Picker>
      </View>

      <View
        style={{
          flex: 0.35,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Please choose <Text style={{ color: fontColor }}>font</Text> color:{" "}
        </Text>
        <ColorPicker
          style={{ width: 150, height: 150 }}
          hideSliders
          onColorChange={(color) => {
            setFontColor(`${fromHsv(color)}`);
          }}
        />
      </View>

      <View
        style={{
          flex: 0.35,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Please choose <Text style={{ color: backgroundColor }}>background color</Text> color:{" "}
        </Text>
        <ColorPicker
          style={{ width: 150, height: 150 }}
          hideSliders
          onColorChange={(color) => {
            setBackgroundColor(`${fromHsv(color)}`);
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          width: 100,
          height: 40,
          backgroundColor: backgroundColor,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        onPress={saveSettings}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Save Settings </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
