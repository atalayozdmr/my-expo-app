import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import ProductCard from './ProductCard';
import { Product } from '../types/Product';

const offers: Product[] = [
  {
    id: '1',
    name: 'Apple',
    brand: 'Darrell Steward',
    price: '10.00',
    image: require('../assets/images/apple.jpeg'), // ← tek seviye
    discount: '15% Off',
  },
  {
    id: '2',
    name: 'Pomegranate',
    brand: 'Darrell Steward',
    price: '8.00',
    image: require('../assets/images/progranate.jpeg'),
    discount: '10% Off',
  },
];

export default function OffersSection() {
  return (
    <View style={{ marginTop: 24 }}>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Offers for you</Text>
        <Text style={{ color: '#16a34a' }}>View All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 16, paddingHorizontal: 16 }}>
        {offers.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ScrollView>
    </View>
  );
}
