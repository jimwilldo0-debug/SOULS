import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme, SPACING, RADII, MOTION } from '../theme/ThemeContext';

interface PillButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
}

export const PillButton: React.FC<PillButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
}) => {
  const { theme } = useTheme();

  const sizeMap = {
    small: { height: 36, paddingHorizontal: SPACING.md },
    medium: { height: 48, paddingHorizontal: SPACING.lg },
    large: { height: 56, paddingHorizontal: SPACING.lg },
  };

  const variantStyles = {
    primary: {
      backgroundColor: theme.colors.primary,
      borderWidth: 0,
    },
    secondary: {
      backgroundColor: theme.colors.navy,
      borderWidth: 0,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        styles.button,
        sizeMap[size],
        variantStyles[variant],
        disabled && { opacity: 0.5 },
        style,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color:
              variant === 'outline' ? theme.colors.primary : theme.colors.background,
            fontSize: size === 'small' ? 14 : 16,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style, onPress }) => {
  const { theme } = useTheme();

  const content = (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.colors.glass, borderColor: theme.colors.muted },
        style,
      ]}
    >
      {children}
    </View>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      {content}
    </TouchableOpacity>
  ) : (
    content
  );
};

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
  icon?: string;
}

export const Chip: React.FC<ChipProps> = ({ label, selected = false, onPress, icon }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.chip,
        {
          backgroundColor: selected ? theme.colors.primary : 'transparent',
          borderColor: theme.colors.primary,
        },
      ]}
    >
      <Text
        style={[
          styles.chipText,
          { color: selected ? theme.colors.background : theme.colors.primary },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

interface InputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  style?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  multiline = false,
  style,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: theme.colors.muted, backgroundColor: theme.colors.glass },
      ]}
    >
      <Text style={[styles.inputText, { color: value ? theme.colors.white : theme.colors.muted }, style]}>
        {value || placeholder}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: RADII.pill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  card: {
    borderRadius: RADII.md,
    padding: SPACING.md,
    borderWidth: 1,
  },
  chip: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADII.pill,
    borderWidth: 1.5,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: RADII.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginVertical: SPACING.sm,
  },
  inputText: {
    fontSize: 14,
  },
});
