import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header: React.FC = () => (
  <View className="flex-row items-center justify-between bg-white px-4 pb-3 pt-6">
    <TouchableOpacity>
      <Ionicons name="menu-outline" size={24} />
    </TouchableOpacity>
    <Text className="text-lg font-semibold">Online Grocery</Text>
    <TouchableOpacity>
      <Ionicons name="notifications-outline" size={24} />
    </TouchableOpacity>
  </View>
);

export default Header;
