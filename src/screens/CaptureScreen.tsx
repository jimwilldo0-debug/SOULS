import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useTheme, SPACING, RADII } from '../theme/ThemeContext';
import { PillButton } from '../components/CommonUI';

interface CaptureScreenProps {
  onImageSelected: (uri: string) => void;
}

export const CaptureScreen: React.FC<CaptureScreenProps> = ({ onImageSelected }) => {
  const { theme } = useTheme();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState<CameraType>('back');
  const [flash, setFlash] = useState<'on' | 'off'>('off');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const cameraRef = useRef<Camera>(null);

  const { width: screenWidth } = Dimensions.get('window');

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={{ color: theme.colors.white, marginBottom: SPACING.md }}>
          Camera permission required
        </Text>
        <PillButton
          title="Grant Permission"
          onPress={requestPermission}
          variant="primary"
        />
      </View>
    );
  }

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  const handlePickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setCapturedImage(result.assets[0].uri);
    }
  };

  const handleAccept = () => {
    if (capturedImage) {
      onImageSelected(capturedImage);
    }
  };

  if (capturedImage) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.previewSection}>
          <Image
            source={{ uri: capturedImage }}
            style={[
              styles.previewImage,
              isWidgetReady && { borderWidth: 2, borderColor: theme.colors.primary },
            ]}
          />
          {isWidgetReady && (
            <View style={styles.widgetMarker}>
              <Text style={{ color: theme.colors.primary, fontSize: 12 }}>Widget Safe Area</Text>
            </View>
          )}
        </View>

        <View style={styles.controlsSection}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              {
                backgroundColor: isWidgetReady ? theme.colors.primary : theme.colors.navy,
              },
            ]}
            onPress={() => setIsWidgetReady(!isWidgetReady)}
          >
            <Text
              style={{
                color: isWidgetReady ? theme.colors.background : theme.colors.white,
                fontWeight: '600',
              }}
            >
              {isWidgetReady ? '✓ Widget Ready' : 'Widget Ready'}
            </Text>
          </TouchableOpacity>

          <View style={styles.actionButtons}>
            <PillButton
              title="Retake"
              onPress={() => setCapturedImage(null)}
              variant="outline"
              style={{ flex: 1 }}
            />
            <View style={{ width: SPACING.md }} />
            <PillButton
              title="Proceed to Edit"
              onPress={handleAccept}
              variant="primary"
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
        <View style={styles.cameraOverlay}>
          {/* Top Controls */}
          <View style={styles.topControls}>
            <TouchableOpacity
              onPress={() => setFlash(flash === 'on' ? 'off' : 'on')}
              style={[
                styles.controlButton,
                {
                  backgroundColor: flash === 'on' ? theme.colors.primary : theme.colors.glass,
                },
              ]}
            >
              <Text style={{ fontSize: 18 }}>⚡</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setType(type === 'back' ? 'front' : 'back')}
              style={[styles.controlButton, { backgroundColor: theme.colors.glass }]}
            >
              <Text style={{ fontSize: 18 }}>🔄</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Shutter */}
          <View style={styles.shutterSection}>
            <TouchableOpacity
              onPress={handleCapture}
              style={[
                styles.shutterButton,
                { borderColor: theme.colors.primary },
              ]}
            >
              <View
                style={[
                  styles.shutterInner,
                  { backgroundColor: theme.colors.primary },
                ]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handlePickFromGallery}
              style={[styles.galleryButton, { backgroundColor: theme.colors.glass }]}
            >
              <Text style={{ fontSize: 24 }}>🖼️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: SPACING.lg,
  },
  topControls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: SPACING.md,
  },
  controlButton: {
    width: 44,
    height: 44,
    borderRadius: RADII.pill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shutterSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.xl,
    marginBottom: SPACING.lg,
  },
  shutterButton: {
    width: 70,
    height: 70,
    borderRadius: RADII.pill,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shutterInner: {
    width: 56,
    height: 56,
    borderRadius: RADII.pill,
  },
  galleryButton: {
    width: 56,
    height: 56,
    borderRadius: RADII.pill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '80%',
    borderRadius: RADII.md,
  },
  widgetMarker: {
    marginTop: SPACING.md,
    padding: SPACING.md,
    backgroundColor: 'rgba(255,204,0,0.1)',
    borderRadius: RADII.md,
  },
  controlsSection: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.md,
    gap: SPACING.md,
  },
  toggleButton: {
    paddingVertical: SPACING.md,
    borderRadius: RADII.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
  },
});
