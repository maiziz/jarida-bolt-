import { X, Download, Share2, Bookmark, Calendar, MapPin, Wallet, Building } from 'lucide-react';
import type { Tender } from '../../types/tender';
import { Button } from '../ui/Button';

interface TenderDetailsModalProps {
  tender: Tender;
  onClose: () => void;
}

export function TenderDetailsModal({ tender, onClose }: TenderDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900">{tender.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 ml-2" />
                <span>الموعد النهائي: {new Date(tender.deadline).toLocaleDateString('ar-DZ')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 ml-2" />
                <span>الموقع: {tender.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Wallet className="h-5 w-5 ml-2" />
                <span>الميزانية: {new Intl.NumberFormat('ar-DZ', { 
                  style: 'currency', 
                  currency: 'DZD',
                  maximumFractionDigits: 0 
                }).format(tender.budget)}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Building className="h-5 w-5 ml-2" />
                <span>الجهة المعلنة: {tender.clientName}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">وصف المشروع</h3>
              <p className="text-gray-600">{tender.description}</p>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Download className="h-4 w-4 ml-2" />
                    تحميل المستندات
                  </Button>
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
                  تقديم عرض
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}