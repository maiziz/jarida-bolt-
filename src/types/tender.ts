export interface Tender {
  id: string;
  title: string;
  description: string;
  budget: number;
  location: string;
  deadline: Date;
  clientName: string;
  status: 'open' | 'closed' | 'draft';
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TenderFilters = {
  status?: 'open' | 'closed' | 'draft';
  category?: string;
  location?: string;
  minBudget?: number;
  maxBudget?: number;
};