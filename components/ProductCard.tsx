import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Product } from '../types/Product';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => (
  <View
    style={{
      width: 160,
      backgroundColor: 'white',
      borderRadius: 16,
      padding: 12,
      marginRight: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    }}>
    {product.discount && (
      <View
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: '#D1FAE5', // green-100
          borderRadius: 8,
          paddingHorizontal: 6,
          paddingVertical: 2,
        }}>
        <Text style={{ fontSize: 10, color: '#047857' /* green-700 */ }}>{product.discount}</Text>
      </View>
    )}

    <View
      style={{
        width: '100%',
        height: 120,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 8,
      }}>
      <Image
        source={typeof product.image === 'string' ? { uri: product.image } : product.image}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
      />
    </View>

    <Text style={{ fontSize: 14, fontWeight: '600', marginBottom: 2 }}>{product.name}</Text>
    <Text style={{ fontSize: 12, color: '#6B7280' /* gray-500 */ }}>{product.brand}</Text>

    <View
      style={{
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{ fontSize: 14, fontWeight: '700' }}>${product.price}/kg</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#16A34A', // green-600
          padding: 6,
          borderRadius: 24,
        }}>
        <Ionicons name="add" size={16} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

export default ProductCard;
