
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform, Pressable, ScrollView, StyleSheet, Text,
    TextInput, View
} from "react-native";
import { colors } from "../theme/colors";
import { radius, spacing } from "../theme/spacing";
import { typography } from "../theme/typography";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password) {
      console.log("Please enter email and password");
      return;
    }
  
    router.replace("/dashboard");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>F</Text>
        </View>

        <Text style={styles.appName}>FitPro Gym</Text>
        <Text style={styles.heading}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Sign in to manage your gym
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={colors.textSecondary}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor={colors.textSecondary}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              style={styles.passwordInput}
            />

            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              accessibilityRole="button"
            >
              <Text style={styles.showPassword}>
                {showPassword ? "Hide" : "Show"}
              </Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.forgotButton}
            onPress={() => console.log("Forgot password")}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </Pressable>

          <Pressable
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Sign In</Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          Gym management made simple.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    padding: spacing.xl,
  },
  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: spacing.md,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    color: colors.white,
  },
  appName: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  heading: {
    ...typography.title,
    color: colors.textPrimary,
    textAlign: "center",
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
  form: {
    gap: spacing.sm,
  },
  label: {
    ...typography.body,
    fontWeight: "600",
    color: colors.textPrimary,
    marginTop: spacing.sm,
  },
  input: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    color: colors.textPrimary,
    fontSize: 15,
  },
  passwordContainer: {
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: spacing.md,
    color: colors.textPrimary,
    fontSize: 15,
  },
  showPassword: {
    color: colors.primary,
    fontWeight: "600",
    paddingLeft: spacing.sm,
  },
  forgotButton: {
    alignSelf: "flex-end",
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  forgotText: {
    color: colors.primary,
    fontWeight: "600",
  },
  loginButton: {
    minHeight: 52,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
  },
  loginButtonText: {
    ...typography.button,
    color: colors.white,
  },
  footer: {
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: spacing.xxl,
  },
});
