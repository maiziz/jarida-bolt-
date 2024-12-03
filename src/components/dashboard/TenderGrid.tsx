import type { Tender } from '../../types/tender';
import { TenderCard } from './TenderCard';

interface TenderGridProps {
  tenders: Tender[];
  onViewDetails: (id: string) => void;
}

export function TenderGrid({ tenders, onViewDetails }: TenderGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tenders.map((tender) => (
        <TenderCard
          key={tender.id}
          tender={tender}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}