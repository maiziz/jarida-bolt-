import { X, Phone, Mail, MapPin, Camera, Share2, Bookmark } from 'lucide-react';
import type { Ad } from '../../types/ad';
import { Button } from '../ui/Button';

interface AdDetailsModalProps {
  ad: Ad;
  onClose: () => void;
}

export function AdDetailsModal({ ad, onClose }: AdDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {ad.images.length > 0 ? (
            <img
              src={ad.images[0]}
              alt={ad.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
              <Camera className="h-12 w-12 text-gray-400" />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{ad.title}</h2>
              <p className="mt-1 text-lg font-semibold text-blue-600">
                {new Intl.NumberFormat('ar-DZ', {
                  style: 'currency',
                  currency: 'DZD',
                  maximumFractionDigits: 0
                }).format(ad.price)}
              </p>
            </div>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
              {ad.type === 'rent' ? 'للإيجار' : 'للبيع'}
            </span>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">الوصف</h3>
              <p className="text-gray-600">{ad.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 ml-2" />
                <span>الموقع: {ad.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 ml-2" />
                <span>الهاتف: {ad.contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 ml-2" />
                <span>البريد الإلكتروني: {ad.contactInfo.email}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 ml-2" />
                    مشاركة
                  </Button>
                  <Button variant="outline">
                    <Bookmark className="h-4 w-4 ml-2" />
                    حفظ
                  </Button>
                </div>
                <Button>
                  اتصال بالمعلن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}