import { Filter } from 'lucide-react';
import { Button } from '../ui/Button';
import type { TenderFilters } from '../../types/tender';

interface FilterBarProps {
  filters: TenderFilters;
  onFilterChange: (filters: TenderFilters) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-400 ml-2" />
            <span className="text-sm font-medium text-gray-700">الفلترة</span>
          </div>
          <select
            className="block w-full pr-3 pl-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value as any })}
          >
            <option value="">جميع الحالات</option>
            <option value="open">مفتوح</option>
            <option value="closed">مغلق</option>
            <option value="draft">مسودة</option>
          </select>
          <select
            className="block w-full pr-3 pl-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          >
            <option value="">جميع المواقع</option>
            <option value="الجزائر العاصمة">الجزائر العاصمة</option>
            <option value="وهران">وهران</option>
            <option value="قسنطينة">قسنطينة</option>
          </select>
        </div>
        <Button
          variant="outline"
          onClick={() => onFilterChange({})}
          className="text-sm"
        >
          مسح الفلترة
        </Button>
      </div>
    </div>
  );
}