import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import ProductCard from './ProductCard';
import { Product } from '../types/Product';

const recommended: Product[] = [
  {
    id: '3',
    name: 'Strawberry',
    brand: '',
    price: '6.00',
    image: require('../assets/images/strawbery.jpeg'), // ← ../ ile bir seviye
  },
  {
    id: '4',
    name: 'Orange',
    brand: '',
    price: '5.00',
    image: require('../assets/images/tangarine.jpeg'),
  },
];

const RecommendedSection: React.FC = () => (
  <View className="mb-16 mt-6">
    <View className="flex-row justify-between px-4">
      <Text className="text-lg font-semibold">Recommended for you</Text>
      <Text className="text-green-600">View All</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 px-4">
      {recommended.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ScrollView>
  </View>
);

export default RecommendedSection;
