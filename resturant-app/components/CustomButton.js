import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
}) {
  const isPressable = !disabled && !loading;

  const containerStyle = [styles.base];
  if (variant === 'primary') containerStyle.push(styles.primary);
  if (variant === 'secondary') containerStyle.push(styles.secondary);
  if (disabled || loading) containerStyle.push(styles.disabled);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !isPressable }}
      style={({ pressed }) => [...containerStyle, pressed && isPressable && styles.pressed]}
      onPress={onPress}
      disabled={!isPressable}
    >
      <Text style={[styles.label]}>
        {title}
      </Text>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  primary: {
    backgroundColor: colors.primaryText,
  },
  secondary: {
    backgroundColor: colors.secondaryText,
  },
  disabled: {
    opacity: 0.6,
  },
  pressed: {
    opacity: 0.75,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});