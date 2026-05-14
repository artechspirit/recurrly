import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href={"/(auth)/sign-up"}>Create Account</Link>
      <Link
        href={"/(tabs)/subscriptions/spotify"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Spotify Subscriptions
      </Link>
    </View>
  );
};

export default SignIn;
