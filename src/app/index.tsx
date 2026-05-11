import React, { useState } from "react"
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const index = () => {
  const [isEmailFocused, setEmailFocused] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* LOGO */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Image source={require("@/assets/images/icon.png")} />
          </View>

          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              fontWeight: "700",
              color: "#1f1f1f",
              marginBottom: 12,
            }}
          >
            Sign In
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: "#111",
              marginBottom: 40,
              lineHeight: 22,
              fontSize: 15,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing
          </Text>

          {/* From  */}

          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 12,
              color: "#1f1f1f",
            }}
          >
            Email Id
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 58,
              backgroundColor: "#fff",
              borderRadius: 24,
              paddingHorizontal: 20,
              borderWidth: 2,
              borderColor: isEmailFocused ? "#9BE000" : "#d9d9d9",
              marginBottom: 24,
            }}
          >
            <TextInput
              placeholder="Enter your email..."
              placeholderTextColor="#7a7a7a"
              keyboardType="email-address"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={{
                paddingLeft: 0,
                flex: 1,
                fontSize: 16,
                color: "#1f1f1f",
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 12,
              color: "#1f1f1f",
            }}
          >
            Password
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 58,
              backgroundColor: "#fff",
              borderRadius: 24,
              paddingHorizontal: 20,
              borderWidth: 2,
              borderColor: isEmailFocused ? "#9BE000" : "#d9d9d9",
              marginBottom: 24,
            }}
          >
            <TextInput
              placeholder="Enter your password..."
              placeholderTextColor="#7a7a7a"
              keyboardType="email-address"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={{
                paddingLeft: 0,
                flex: 1,
                fontSize: 16,
                color: "#1f1f1f",
              }}
            />
          </View>

          <Pressable
            style={({ pressed }) => ({
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              backgroundColor: "#9BE000",
              height: 50,
              marginBottom: 42,
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <Text
              style={{
                color: "#101010",
                fontSize: 17,
                fontFamily: "700",
              }}
            >
              Sign In →
            </Text>
          </Pressable>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => ({
                width: 68,
                height: 68,
                borderRadius: 24,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#e5e5e5",
                marginHorizontal: 10,
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <Image
                source={require("@/assets/images/facebook.png")}
                style={{
                  width: 32,
                  height: 32,
                  resizeMode: "contain",
                }}
              />
            </Pressable>

            <Pressable
              style={({ pressed }) => ({
                width: 68,
                height: 68,
                borderRadius: 24,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#e5e5e5",
                marginHorizontal: 10,
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <Image
                source={require("@/assets/images/instagram.png")}
                style={{
                  width: 32,
                  height: 32,
                  resizeMode: "contain",
                }}
              />
            </Pressable>

            <Pressable
              style={({ pressed }) => ({
                width: 68,
                height: 68,
                borderRadius: 24,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#e5e5e5",
                marginHorizontal: 10,
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <Image
                source={require("@/assets/images/google.png")}
                style={{
                  width: 32,
                  height: 32,
                  resizeMode: "contain",
                }}
              />
            </Pressable>
          </View>

          <Text
            style={{
              marginTop: 40,
              textAlign: "center",
              color: "#555",
              fontSize: 15,
            }}
          >
            Don't have an account?{" "}
            <Text
              style={{
                color: "#9BE000",
                fontWeight: "600",
              }}
            >
              Sign Up
            </Text>
          </Text>

          <Text
            style={{
              textAlign: "center",
              marginTop: 14,
              color: "#9be000",
              textDecorationLine: "underline",
              fontWeight: "600",
              fontSize: 15
            }}
          >Forgot Password?</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
