import { Filter, MapPin, Tag, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';
import type { AdFilters } from '../../types/ad';

interface AdFiltersProps {
  filters: AdFilters;
  onFilterChange: (filters: AdFilters) => void;
}

export function AdFilters({ filters, onFilterChange }: AdFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="space-y-4">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-400 ml-2" />
          <span className="text-sm font-medium text-gray-700">تصفية الإعلانات</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">نوع الإعلان</label>
            <select
              className="block w-full pr-3 pl-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.type}
              onChange={(e) => onFilterChange({ ...filters, type: e.target.value as 'rent' | 'sale' })}
            >
              <option value="">الكل</option>
              <option value="rent">للإيجار</option>
              <option value="sale">للبيع</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الموقع</label>
            <select
              className="block w-full pr-3 pl-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.location}
              onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            >
              <option value="">كل المواقع</option>
              <option value="الجزائر العاصمة">الجزائر العاصمة</option>
              <option value="وهران">وهران</option>
              <option value="قسنطينة">قسنطينة</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">السعر الأدنى</label>
            <input
              type="number"
              className="block w-full pr-3 pl-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.minPrice || ''}
              onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
              placeholder="السعر الأدنى"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">السعر الأقصى</label>
            <input
              type="number"
              className="block w-full pr-3 pl-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.maxPrice || ''}
              onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
              placeholder="السعر الأقصى"
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button
            variant="outline"
            onClick={() => onFilterChange({})}
            className="text-sm"
          >
            مسح الفلترة
          </Button>
        </div>
      </div>
    </div>
  );
}