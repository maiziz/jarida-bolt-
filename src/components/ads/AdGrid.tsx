import type { Ad } from '../../types/ad';
import { AdCard } from './AdCard';
import { EmptyState } from '../ui/EmptyState';
import { Store } from 'lucide-react';

interface AdGridProps {
  ads: Ad[];
  onViewDetails: (id: string) => void;
}

export function AdGrid({ ads, onViewDetails }: AdGridProps) {
  if (ads.length === 0) {
    return (
      <EmptyState
        icon={Store}
        title="لا توجد إعلانات"
        description="لم يتم العثور على إعلانات تطابق معايير البحث الخاصة بك"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ads.map((ad) => (
        <AdCard
          key={ad.id}
          ad={ad}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}