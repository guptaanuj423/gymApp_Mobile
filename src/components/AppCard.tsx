import { colors } from "@/app/theme/colors";
import { radius, spacing } from "@/app/theme/spacing";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";


type Props = ViewProps & {
  children: React.ReactNode;
};

export default function AppCard({ children, style, ...props }: Props) {
  return (
    <View {...props} style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
});