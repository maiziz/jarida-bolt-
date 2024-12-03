import { useState } from 'react';
import type { Ad, AdFilters } from '../../types/ad';
import { AdGrid } from './AdGrid';
import { AdFilters as AdFiltersComponent } from './AdFilters';

// Mock data for demonstration
const mockAds: Ad[] = [
  {
    id: '1',
    title: 'شقة فاخرة للبيع',
    description: 'شقة حديثة مع إطلالة رائعة على البحر، 3 غرف نوم، 2 حمام، مطبخ مجهز',
    price: 25000000,
    location: 'الجزائر العاصمة',
    type: 'sale',
    category: 'سكني',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    contactInfo: {
      name: 'أحمد محمد',
      phone: '0555123456',
      email: 'ahmed@example.com'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: 'محل تجاري للإيجار',
    description: 'محل تجاري في موقع حيوي، مساحة 100 متر مربع، واجهة زجاجية',
    price: 120000,
    location: 'وهران',
    type: 'rent',
    category: 'تجاري',
    images: ['https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800'],
    contactInfo: {
      name: 'سمير علي',
      phone: '0555789012',
      email: 'samir@example.com'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export function AdSection() {
  const [filters, setFilters] = useState<AdFilters>({});

  const handleViewDetails = (id: string) => {
    alert(`عرض تفاصيل الإعلان ${id}`);
  };

  const filteredAds = mockAds.filter((ad) => {
    if (filters.type && ad.type !== filters.type) return false;
    if (filters.location && ad.location !== filters.location) return false;
    if (filters.minPrice && ad.price < filters.minPrice) return false;
    if (filters.maxPrice && ad.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">الإعلانات العقارية</h2>
        <p className="mt-1 text-sm text-gray-500">
          تصفح أحدث الإعلانات العقارية للبيع والإيجار
        </p>
      </div>
      
      <AdFiltersComponent
        filters={filters}
        onFilterChange={setFilters}
      />
      
      <AdGrid
        ads={filteredAds}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}