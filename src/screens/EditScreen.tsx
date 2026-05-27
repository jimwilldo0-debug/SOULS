import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { useTheme, SPACING, RADII, MOTION } from '../theme/ThemeContext';
import { Chip, PillButton } from '../components/CommonUI';
import { searchStickers, getCategories } from '../data/stickerCatalog';

interface EditScreenProps {
  imageUri: string;
  onSave: (post: any) => void;
  onShare: (destination: 'instagram' | 'threads') => void;
}

export const EditScreen: React.FC<EditScreenProps> = ({ imageUri, onSave, onShare }) => {
  const { theme } = useTheme();
  const [caption, setCaption] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [layers, setLayers] = useState<any[]>([]);
  const [showStickerPicker, setShowStickerPicker] = useState(false);
  const [stickers, setStickers] = useState(searchStickers());
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const filtered = searchStickers(category);
    setStickers(filtered);
  };

  const handleStickerSelect = (stickerId: string) => {
    const sticker = stickers.find((s) => s.id === stickerId);
    if (sticker) {
      setLayers([
        ...layers,
        {
          id: Math.random().toString(),
          type: 'sticker',
          assetId: stickerId,
          x: 0.5,
          y: 0.5,
          scale: 1,
          rotation: 0,
          zIndex: layers.length,
        },
      ]);
    }
    setShowStickerPicker(false);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSave = async () => {
    const post = {
      imageUri,
      layers,
      caption,
      tags: selectedTags,
      isWidgetReady: false,
      visibility: 'private',
      createdAt: new Date().toISOString(),
    };
    onSave(post);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Canvas */}
      <View style={styles.canvasSection}>
        <Image source={{ uri: imageUri }} style={styles.canvasImage} />

        {/* Overlaid Stickers (simplified - in production, these would be draggable) */}
        <View style={styles.layersContainer}>
          {layers.map((layer, idx) => (
            <View
              key={layer.id}
              style={[
                styles.layer,
                {
                  left: `${layer.x * 100}%`,
                  top: `${layer.y * 100}%`,
                  transform: [
                    { scale: layer.scale },
                    { rotate: `${layer.rotation}deg` },
                  ],
                },
              ]}
            >
              <Text style={{ fontSize: 32 }}>
                {layer.assetId === 'emoji-party' && '🎉'}
                {layer.assetId === 'emoji-fire' && '🔥'}
                {layer.assetId === 'drink-champagne' && '🍾'}
                {layer.assetId === 'food-pizza' && '🍕'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setLayers(layers.filter((l) => l.id !== layer.id));
                }}
                style={styles.deleteButton}
              >
                <Text style={{ fontSize: 12 }}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* Caption Input */}
      <View style={styles.captionSection}>
        <TextInput
          placeholder="Add a caption..."
          value={caption}
          onChangeText={setCaption}
          placeholderTextColor={theme.colors.muted}
          style={[
            styles.captionInput,
            {
              color: theme.colors.white,
              borderColor: theme.colors.muted,
            },
          ]}
          multiline
        />
      </View>

      {/* Sticker Picker Toggle */}
      <TouchableOpacity
        onPress={() => setShowStickerPicker(!showStickerPicker)}
        style={[
          styles.toolButton,
          {
            backgroundColor: showStickerPicker ? theme.colors.primary : theme.colors.navy,
          },
        ]}
      >
        <Text
          style={{
            color: showStickerPicker ? theme.colors.background : theme.colors.white,
            fontWeight: '600',
          }}
        >
          ✨ Add Sticker
        </Text>
      </TouchableOpacity>

      {/* Sticker Picker Expanded */}
      {showStickerPicker && (
        <View style={[styles.pickerSheet, { borderColor: theme.colors.muted }]}>
          <ScrollView horizontal style={{ marginBottom: SPACING.md }}>
            {getCategories().map((category) => (
              <Chip
                key={category}
                label={category.charAt(0).toUpperCase() + category.slice(1)}
                selected={selectedCategory === category}
                onPress={() => handleCategorySelect(category)}
              />
            ))}
          </ScrollView>

          <ScrollView horizontal>
            {stickers.map((sticker) => (
              <TouchableOpacity
                key={sticker.id}
                onPress={() => handleStickerSelect(sticker.id)}
                style={styles.stickerOption}
              >
                <Text style={{ fontSize: 40 }}>{sticker.srcUrl}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Tag Selection */}
      <View style={styles.tagsSection}>
        <Text style={[styles.sectionLabel, { color: theme.colors.white }]}>
          Lifestyle Tags
        </Text>
        <ScrollView horizontal style={{ marginBottom: SPACING.md }}>
          {[
            'cigarette',
            'champagne',
            'cocktail',
            'wine',
            'beer',
            'pizza',
            'sushi',
            'nightlife',
            'celebration',
          ].map((tag) => (
            <Chip
              key={tag}
              label={tag}
              selected={selectedTags.includes(tag)}
              onPress={() => handleTagToggle(tag)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <PillButton
          title="Save Moment"
          onPress={handleSave}
          variant="primary"
          style={{ flex: 1, marginRight: SPACING.md }}
        />
        <PillButton
          title="Share to Stories"
          onPress={() => onShare('instagram')}
          variant="secondary"
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvasSection: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  canvasImage: {
    width: '100%',
    height: '100%',
  },
  layersContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  layer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionSection: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  captionInput: {
    borderWidth: 1,
    borderRadius: RADII.md,
    padding: SPACING.md,
    height: 60,
    textAlignVertical: 'top',
  },
  toolButton: {
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    paddingVertical: SPACING.md,
    borderRadius: RADII.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerSheet: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderTopWidth: 1,
    maxHeight: 200,
  },
  stickerOption: {
    marginRight: SPACING.md,
    padding: SPACING.md,
    borderRadius: RADII.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagsSection: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.lg,
  },
});
