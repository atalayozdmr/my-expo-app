import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const BottomNav: React.FC = () => {
  const icons: React.ComponentProps<typeof Ionicons>['name'][] = [
    'home-outline',
    'cart-outline',
    'location-outline',
    'heart-outline',
    'person-outline',
  ];

  return (
    <View className="absolute bottom-0 h-16 w-full flex-row items-center justify-around bg-green-600">
      {icons.map((name) => (
        <TouchableOpacity key={name}>
          <Ionicons name={name} size={24} color="white" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
