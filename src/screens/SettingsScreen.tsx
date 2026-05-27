import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useTheme, SPACING, RADII } from '../theme/ThemeContext';
import { PillButton, Card } from '../components/CommonUI';
import { useAuthStore } from '../store/authStore';

export const SettingsScreen: React.FC = () => {
  const { theme, updateTheme, settings, updateSettings } = useTheme();
  const { user, logout } = useAuthStore();

  const themeOptions = ['darkGold', 'navyMarble', 'silverWhite'];
  const fontOptions = ['Inter', 'System', 'Serif'];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ paddingBottom: SPACING.xl }}
    >
      {/* Account Section */}
      <Section title="Account" theme={theme}>
        <Card>
          <Text style={[styles.labelText, { color: theme.colors.white }]}>
            {user?.displayName || 'User'}
          </Text>
          <Text style={[styles.valueText, { color: theme.colors.muted }]}>
            {user?.email}
          </Text>
        </Card>
        <PillButton
          title="Log Out"
          onPress={logout}
          variant="outline"
          style={{ marginTop: SPACING.md }}
        />
      </Section>

      {/* Appearance Section */}
      <Section title="Appearance" theme={theme}>
        <View style={{ marginBottom: SPACING.lg }}>
          <Text style={[styles.subtitle, { color: theme.colors.white }]}>Themes</Text>
          <View style={{ gap: SPACING.md }}>
            {themeOptions.map((themeId) => (
              <TouchableOpacity
                key={themeId}
                onPress={() => updateTheme(themeId)}
                style={[
                  styles.optionCard,
                  {
                    backgroundColor: theme.colors.glass,
                    borderColor:
                      settings.themeId === themeId
                        ? theme.colors.primary
                        : theme.colors.muted,
                    borderWidth: settings.themeId === themeId ? 2 : 1,
                  },
                ]}
              >
                <Text style={[styles.optionLabel, { color: theme.colors.white }]}>
                  {themeId === 'darkGold'
                    ? 'Dark Gold'
                    : themeId === 'navyMarble'
                    ? 'Navy Marble'
                    : 'Silver White'}
                </Text>
                {settings.themeId === themeId && (
                  <Text style={{ color: theme.colors.primary }}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Text style={[styles.subtitle, { color: theme.colors.white }]}>Fonts</Text>
          <View style={{ gap: SPACING.md }}>
            {fontOptions.map((font) => (
              <TouchableOpacity
                key={font}
                onPress={() => updateSettings({ fontFamily: font })}
                style={[
                  styles.optionCard,
                  {
                    backgroundColor: theme.colors.glass,
                    borderColor:
                      settings.fontFamily === font
                        ? theme.colors.primary
                        : theme.colors.muted,
                    borderWidth: settings.fontFamily === font ? 2 : 1,
                  },
                ]}
              >
                <Text style={[styles.optionLabel, { color: theme.colors.white }]}>
                  {font}
                </Text>
                {settings.fontFamily === font && (
                  <Text style={{ color: theme.colors.primary }}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Section>

      {/* Accessibility Section */}
      <Section title="Accessibility" theme={theme}>
        <View
          style={[
            styles.accessibilityOption,
            {
              backgroundColor: theme.colors.glass,
              borderColor: theme.colors.muted,
            },
          ]}
        >
          <Text style={[styles.optionLabel, { color: theme.colors.white }]}>
            Reduce Motion
          </Text>
          <Switch
            value={settings.reduceMotion}
            onValueChange={(value) => updateSettings({ reduceMotion: value })}
            trackColor={{ false: theme.colors.muted, true: theme.colors.primary }}
          />
        </View>
      </Section>

      {/* Analytics Section */}
      <Section title="Privacy & Data" theme={theme}>
        <View
          style={[
            styles.accessibilityOption,
            {
              backgroundColor: theme.colors.glass,
              borderColor: theme.colors.muted,
            },
          ]}
        >
          <Text style={[styles.optionLabel, { color: theme.colors.white }]}>
            Allow Analytics
          </Text>
          <Switch
            value={settings.analyticsEnabled}
            onValueChange={(value) => updateSettings({ analyticsEnabled: value })}
            trackColor={{ false: theme.colors.muted, true: theme.colors.primary }}
          />
        </View>
        <Card style={{ marginTop: SPACING.md }}>
          <Text style={[styles.valueText, { color: theme.colors.muted, fontSize: 12 }]}>
            We collect minimal usage data to improve your experience. Your data is never sold.
          </Text>
        </Card>
      </Section>

      {/* About Section */}
      <Section title="About" theme={theme}>
        <Card>
          <Text style={[styles.labelText, { color: theme.colors.white }]}>SOULS</Text>
          <Text style={[styles.valueText, { color: theme.colors.muted }]}>
            Version 1.0.0
          </Text>
          <Text style={[styles.valueText, { color: theme.colors.muted, marginTop: SPACING.md }]}>
            Where style meets story. © 2026
          </Text>
        </Card>
      </Section>
    </ScrollView>
  );
};

interface SectionProps {
  title: string;
  theme: any;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, theme, children }) => (
  <View style={styles.section}>
    <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
      {title.toUpperCase()}
    </Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: SPACING.md,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '600',
  },
  valueText: {
    fontSize: 14,
    marginTop: SPACING.sm,
  },
  optionCard: {
    borderRadius: RADII.md,
    padding: SPACING.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  accessibilityOption: {
    borderWidth: 1,
    borderRadius: RADII.md,
    padding: SPACING.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
