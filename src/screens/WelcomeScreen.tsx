import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTheme, SPACING, MOTION } from '../theme/ThemeContext';
import { PillButton } from '../components/CommonUI';
import { useAuthStore } from '../store/authStore';

export const WelcomeScreen: React.FC<{
  onSignupPress?: () => void;
  onSigninPress?: () => void;
}> = ({ onSignupPress, onSigninPress }) => {
  const { theme } = useTheme();
  const [mode, setMode] = useState<'welcome' | 'signin' | 'signup'>('welcome');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signin, signup, isLoading, error } = useAuthStore();

  const handleSignup = async () => {
    if (!email || !password || !displayName) return;
    await signup(email, password, displayName);
    // On success, would navigate to home
  };

  const handleSignin = async () => {
    if (!email || !password) return;
    await signin(email, password);
    // On success, would navigate to home
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {mode === 'welcome' ? (
          <View style={styles.welcomeContent}>
            {/* Logo Section */}
            <View style={styles.logoSection}>
              <Text style={[styles.logo, { color: theme.colors.primary }]}>◆</Text>
              <Text style={[styles.title, { color: theme.colors.white }]}>SOULS</Text>
              <Text style={[styles.tagline, { color: theme.colors.muted }]}>
                Where style meets story
              </Text>
            </View>

            {/* Features Preview */}
            <View style={styles.featuresSection}>
              <FeatureCard
                icon="📷"
                title="Capture"
                description="Take or select photos"
                color={theme.colors.primary}
              />
              <FeatureCard
                icon="✨"
                title="Customize"
                description="Add stickers & effects"
                color={theme.colors.navy}
              />
              <FeatureCard
                icon="🚀"
                title="Share"
                description="Post to Stories instantly"
                color={theme.colors.marbleRed}
              />
            </View>

            {/* CTA Buttons */}
            <View style={styles.buttonGroup}>
              <PillButton
                title="Sign Up"
                onPress={() => {
                  setMode('signup');
                  onSignupPress?.();
                }}
                variant="primary"
                size="large"
                style={{ marginBottom: SPACING.md }}
              />
              <PillButton
                title="Sign In"
                onPress={() => {
                  setMode('signin');
                  onSigninPress?.();
                }}
                variant="outline"
                size="large"
              />
            </View>
          </View>
        ) : (
          <View style={styles.formContent}>
            <TouchableOpacity
              onPress={() => setMode('welcome')}
              style={styles.backButton}
            >
              <Text style={{ color: theme.colors.primary }}>← Back</Text>
            </TouchableOpacity>

            <Text style={[styles.formTitle, { color: theme.colors.white }]}>
              {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
            </Text>

            {error && (
              <View style={[styles.errorBox, { backgroundColor: theme.colors.marbleRed }]}>
                <Text style={{ color: theme.colors.white }}>{error}</Text>
              </View>
            )}

            {/* Form Inputs */}
            {mode === 'signup' && (
              <FormInput
                placeholder="Display Name"
                value={displayName}
                onChangeText={setDisplayName}
                theme={theme}
              />
            )}

            <FormInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              theme={theme}
            />

            <FormInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              theme={theme}
            />

            <PillButton
              title={mode === 'signup' ? 'Create Account' : 'Sign In'}
              onPress={mode === 'signup' ? handleSignup : handleSignin}
              variant="primary"
              size="large"
              disabled={isLoading}
              style={{ marginTop: SPACING.lg }}
            />

            <View style={styles.footer}>
              <Text style={{ color: theme.colors.muted, fontSize: 12 }}>
                {mode === 'signup'
                  ? 'Already have an account? '
                  : "Don't have an account? "}
              </Text>
              <TouchableOpacity
                onPress={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
              >
                <Text style={{ color: theme.colors.primary, fontWeight: '600' }}>
                  {mode === 'signup' ? 'Sign In' : 'Sign Up'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => (
  <View style={[styles.featureCard, { borderColor: color }]}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={[styles.featureTitle, { color }]}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

interface FormInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: string;
  secureTextEntry?: boolean;
  theme: any;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  theme,
}) => (
  <View
    style={[
      styles.input,
      {
        borderColor: theme.colors.muted,
        backgroundColor: theme.colors.glass,
      },
    ]}
  >
    <Text
      style={{
        color: value ? theme.colors.white : theme.colors.muted,
        fontSize: 14,
      }}
    >
      {value || placeholder}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContent: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: 'space-around',
  },
  logoSection: {
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
  logo: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: SPACING.sm,
  },
  tagline: {
    fontSize: 14,
    letterSpacing: 0.5,
  },
  featuresSection: {
    gap: SPACING.md,
    marginVertical: SPACING.lg,
  },
  featureCard: {
    padding: SPACING.md,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  featureDescription: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  buttonGroup: {
    marginBottom: SPACING.xl,
  },
  formContent: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
  },
  backButton: {
    marginBottom: SPACING.lg,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: SPACING.lg,
  },
  errorBox: {
    padding: SPACING.md,
    borderRadius: 8,
    marginBottom: SPACING.md,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.lg,
  },
});
