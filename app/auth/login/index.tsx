import React, { useEffect, useRef, useState } from "react";
import GradientCircle from "../../../components/UI/GradientCircle";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../constants/colors";

import {
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../../assets/logo.png";
import AuthHolder, { useAuthContext } from "../../../components/UI/AuthHolder";

export default function index() {
  return <AuthHolder linkText="Login">
    <Login />
  </AuthHolder>;
}

function Login() {
  const { KeyboardVisible } = useAuthContext();
  const loginRef = useRef({ email: "", password: "" });
  function changeField(key: string, value: string) {
    loginRef.current[key] = value;
  }
  return (
    <SafeAreaView className="px-6 flex-1 flex-col justify-start items-center z-10">
      <Image
        style={{
          objectFit: "cover",
          width: KeyboardVisible ? 200 : 300,
          height: KeyboardVisible ? 50 : 300,
        }}
        source={Logo}
      />
      <View className="w-full">
        <Input
          isPassword={false}
          label="Email"
          placeholder="m@gmail.com"
          onChange={(text: string) => changeField("email", text)}
        />
        <Input
          isPassword={true}
          label="Password"
          placeholder="Your password"
          onChange={(text: string) => changeField("email", text)}
        />
      </View>
      <Button mode="contained" className="rounded-lg mt-4 mb-2 w-full">
        Login
      </Button>
      <Text>
        New User? <Text className="text-primary">Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
}

function Input({ onChange, label, placeholder, isPassword }) {
  return (
    <TextInput
      label={label}
      mode="outlined"
      secureTextEntry={isPassword}
      placeholder={placeholder}
      outlineStyle={{ borderColor: "gray", borderRadius: 15 }}
      style={{ marginBottom: 12 }}
      activeOutlineColor={"black"}
      onChangeText={onChange}
      textColor="black"
    />
  );
}
