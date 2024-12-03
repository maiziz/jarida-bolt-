import { MapPin, Phone, Mail, Camera } from 'lucide-react';
import type { Ad } from '../../types/ad';
import { Button } from '../ui/Button';

interface AdCardProps {
  ad: Ad;
  onViewDetails: (id: string) => void;
}

const typeTranslations = {
  rent: 'للإيجار',
  sale: 'للبيع'
};

export function AdCard({ ad, onViewDetails }: AdCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 relative">
        {ad.images.length > 0 ? (
          <img
            src={ad.images[0]}
            alt={ad.title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <Camera className="h-12 w-12 text-gray-400" />
          </div>
        )}
        <span className="absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
          {typeTranslations[ad.type]}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{ad.title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{ad.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 ml-1" />
            {ad.location}
          </div>
          <span className="text-lg font-bold text-blue-600">
            {new Intl.NumberFormat('ar-DZ', {
              style: 'currency',
              currency: 'DZD',
              maximumFractionDigits: 0
            }).format(ad.price)}
          </span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <Phone className="h-4 w-4 ml-1" />
              {ad.contactInfo.phone}
            </div>
            <Button
              variant="outline"
              onClick={() => onViewDetails(ad.id)}
            >
              عرض التفاصيل
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}