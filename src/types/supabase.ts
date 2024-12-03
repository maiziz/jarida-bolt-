export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tenders: {
        Row: {
          id: string
          title: string
          description: string
          budget: number
          location: string
          deadline: string
          client_name: string
          status: 'open' | 'closed' | 'draft'
          category: string
          source_url: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          budget: number
          location: string
          deadline: string
          client_name: string
          status?: 'open' | 'closed' | 'draft'
          category: string
          source_url: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          budget?: number
          location?: string
          deadline?: string
          client_name?: string
          status?: 'open' | 'closed' | 'draft'
          category?: string
          source_url?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}