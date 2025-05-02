import './global-build.css';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import BottomNav from './components/BottomNav';
import CategoryScroll from './components/CategoryScroll';
import Header from './components/Header';
import OffersSection from './components/OffersSection';
import RecommendedSection from './components/RecommendedSection';
import SearchBar from './components/SearchBar';

const App: React.FC = () => (
  <SafeAreaView className="flex-1 bg-green-50">
    <Header />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
      <SearchBar />
      <CategoryScroll />
      <OffersSection />
      <RecommendedSection />
    </ScrollView>
    <BottomNav />
  </SafeAreaView>
);

export default App;
