import { Link, router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SignIn = () => {
  const goToHome = () => {
    router.replace("/");
  };

  return (
    <View>
      <Text>SignIn</Text>
      <Link href={"/(auth)/sign-up"}>Create Account</Link>
      <TouchableOpacity onPress={goToHome}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
