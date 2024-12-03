import { useQuery } from 'react-query';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Tender = Database['public']['Tables']['tenders']['Row'];

export function useTenders(filters: {
  status?: 'open' | 'closed' | 'draft';
  location?: string;
  category?: string;
}) {
  return useQuery<Tender[]>(
    ['tenders', filters],
    async () => {
      let query = supabase
        .from('tenders')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters.status) {
        query = query.eq('status', filters.status);
      }
      if (filters.location) {
        query = query.eq('location', filters.location);
      }
      if (filters.category) {
        query = query.eq('category', filters.category);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data;
    },
    {
      staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
      cacheTime: 30 * 60 * 1000, // Keep data in cache for 30 minutes
    }
  );
}