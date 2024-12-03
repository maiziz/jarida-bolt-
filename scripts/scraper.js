import { load } from 'cheerio';
import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_KEY
);

const SOURCES = [
  {
    name: 'BOMOP',
    url: 'https://www.bomop.anep.dz/ar/marches-publics',
    selector: '.tender-item',
  },
  // Add more sources as needed
];

async function scrapeTenders() {
  for (const source of SOURCES) {
    try {
      console.log(`Scraping from ${source.name}...`);
      
      const response = await fetch(source.url);
      const html = await response.text();
      const $ = load(html);
      
      const tenders = [];
      
      $(source.selector).each((_, element) => {
        const tender = {
          title: $(element).find('.tender-title').text().trim(),
          description: $(element).find('.tender-description').text().trim(),
          deadline: $(element).find('.tender-deadline').text().trim(),
          client_name: $(element).find('.tender-client').text().trim(),
          location: $(element).find('.tender-location').text().trim(),
          budget: parseFloat($(element).find('.tender-budget').text().replace(/[^0-9]/g, '')),
          category: $(element).find('.tender-category').text().trim(),
          source_url: $(element).find('.tender-link').attr('href'),
          status: 'open',
        };
        
        if (tender.title && tender.description) {
          tenders.push(tender);
        }
      });
      
      if (tenders.length > 0) {
        const { error } = await supabase
          .from('tenders')
          .upsert(tenders, {
            onConflict: 'source_url',
            ignoreDuplicates: false,
          });
          
        if (error) {
          console.error(`Error inserting tenders from ${source.name}:`, error);
        } else {
          console.log(`Successfully inserted ${tenders.length} tenders from ${source.name}`);
        }
      }
    } catch (error) {
      console.error(`Error scraping from ${source.name}:`, error);
    }
  }
}

// Run the scraper
scrapeTenders();