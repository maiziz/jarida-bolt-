import { Calendar, MapPin, Wallet } from 'lucide-react';
import type { Tender } from '../../types/tender';
import { Button } from '../ui/Button';

interface TenderCardProps {
  tender: Tender;
  onViewDetails: (id: string) => void;
}

const statusTranslations = {
  open: 'مفتوح',
  closed: 'مغلق',
  draft: 'مسودة'
};

export function TenderCard({ tender, onViewDetails }: TenderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{tender.title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{tender.description}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          tender.status === 'open' 
            ? 'bg-green-100 text-green-800'
            : tender.status === 'closed'
            ? 'bg-red-100 text-red-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {statusTranslations[tender.status]}
        </span>
      </div>
      
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Wallet className="h-4 w-4 ml-1" />
          {new Intl.NumberFormat('ar-DZ', { 
            style: 'currency', 
            currency: 'DZD',
            maximumFractionDigits: 0 
          }).format(tender.budget)}
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 ml-1" />
          {tender.location}
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 ml-1" />
          {new Date(tender.deadline).toLocaleDateString('ar-DZ')}
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          نشر بواسطة: {tender.clientName}
        </div>
        <Button
          variant="outline"
          onClick={() => onViewDetails(tender.id)}
        >
          عرض التفاصيل
        </Button>
      </div>
    </div>
  );
}