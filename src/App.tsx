import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Container } from './components/layout/Container';
import { PageWrapper } from './components/layout/PageWrapper';
import { FilterBar } from './components/dashboard/FilterBar';
import { TenderGrid } from './components/dashboard/TenderGrid';
import { AdSection } from './components/ads/AdSection';
import { TenderDetailsModal } from './components/modals/TenderDetailsModal';
import { AdDetailsModal } from './components/modals/AdDetailsModal';
import type { TenderFilters } from './types/tender';
import type { Ad } from './types/ad';
import { mockTenders } from './data/mockTenders';

function App() {
  const [filters, setFilters] = useState<TenderFilters>({});
  const [activeTab, setActiveTab] = useState<'tenders' | 'ads'>('tenders');
  const [selectedTender, setSelectedTender] = useState<typeof mockTenders[number] | null>(null);
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);

  const handleViewTenderDetails = (id: string) => {
    const tender = mockTenders.find(t => t.id === id);
    if (tender) {
      setSelectedTender(tender);
    }
  };

  const handleViewAdDetails = (id: string) => {
    // In a real app, you would fetch the ad details from your API
    const ad = mockAds.find(a => a.id === id);
    if (ad) {
      setSelectedAd(ad);
    }
  };

  const filteredTenders = mockTenders.filter((tender) => {
    if (filters.status && tender.status !== filters.status) return false;
    if (filters.location && tender.location !== filters.location) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <PageWrapper>
        <Container className="py-8">
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('tenders')}
                  className={`${
                    activeTab === 'tenders'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  المناقصات
                </button>
                <button
                  onClick={() => setActiveTab('ads')}
                  className={`${
                    activeTab === 'ads'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  الإعلانات العقارية
                </button>
              </nav>
            </div>
          </div>

          {activeTab === 'tenders' ? (
            <>
              <FilterBar
                filters={filters}
                onFilterChange={setFilters}
              />
              <TenderGrid
                tenders={filteredTenders}
                onViewDetails={handleViewTenderDetails}
              />
            </>
          ) : (
            <AdSection onViewDetails={handleViewAdDetails} />
          )}
        </Container>
      </PageWrapper>

      {selectedTender && (
        <TenderDetailsModal
          tender={selectedTender}
          onClose={() => setSelectedTender(null)}
        />
      )}

      {selectedAd && (
        <AdDetailsModal
          ad={selectedAd}
          onClose={() => setSelectedAd(null)}
        />
      )}
    </div>
  );
}

export default App;