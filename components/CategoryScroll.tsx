import React from 'react';
import { ScrollView, TouchableOpacity, Text, Image } from 'react-native';

import { Category } from '../types/Category';

const categories: Category[] = [
  {
    id: '1',
    title: 'Fruits',
    icon: require('../assets/images/categories/fruits.jpeg'),
  },
  {
    id: '2',
    title: 'Vegita',
    icon: require('../assets/images/categories/vegita.jpeg'),
  },
  {
    id: '3',
    title: 'Grocery',
    icon: require('../assets/images/categories/grocery.jpeg'),
  },
  {
    id: '4',
    title: 'Bakery',
    icon: require('../assets/images/categories/bakery.jpeg'),
  },
  {
    id: '5',
    title: 'Foods',
    icon: require('../assets/images/categories/hamburger.jpeg'),
  },
];

export default function CategoryScroll() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 px-4">
      {categories.map((cat, i) => (
        <TouchableOpacity
          key={cat.id}
          className={`mr-3 items-center rounded-xl p-2 ${
            i === 0 ? 'bg-green-100' : 'bg-white'
          } shadow`}>
          <Image
            source={typeof cat.icon === 'string' ? { uri: cat.icon } : cat.icon}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              marginBottom: 4,
              resizeMode: 'cover',
            }}
          />
          <Text className={`text-sm ${i === 0 ? 'text-green-700' : 'text-gray-700'}`}>
            {cat.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
