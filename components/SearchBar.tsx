import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

const SearchBar: React.FC = () => (
  <View className="mx-4 flex-row items-center rounded-lg bg-white px-3 py-2 shadow">
    <Ionicons name="search-outline" size={20} />
    <TextInput placeholder="Search..." className="flex-1 px-2 text-base" />
    <TouchableOpacity className="px-2">
      <Ionicons name="mic-outline" size={20} />
    </TouchableOpacity>
    <TouchableOpacity className="px-2">
      <Ionicons name="options-outline" size={20} />
    </TouchableOpacity>
  </View>
);

export default SearchBar;
