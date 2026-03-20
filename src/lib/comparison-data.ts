export interface ComparisonProduct {
  name: string;
  brand: string;
  price: number;
  rating: number;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  affiliateUrl: string;
  vendorPrices: { retailer: string; price: number; url: string }[];
}

export interface ComparisonPage {
  slug: string;
  type: 'best' | 'vs';
  title: string;
  category: string;
  description: string;
  winner?: string;
  products: ComparisonProduct[];
  verdict: string;
}

export const COMPARISONS: ComparisonPage[] = [
  {
    slug: 'best-refrigerator-water-filters-whirlpool-lg',
    type: 'best',
    title: 'Top 5 Refrigerator Water Filters of 2026 (OEM vs Aftermarket)',
    category: 'Water Filter',
    description: 'We tested the leading NSF-certified filters for contaminants, flow rate, and taste quality across major refrigerator brands.',
    winner: 'EveryDrop Filter 1 (Whirlpool)',
    verdict: 'For Whirlpool and Maytag owners, the EveryDrop Filter 1 remains the gold standard for contaminant reduction and fit.',
    products: [
      {
        name: 'EveryDrop Refrigerator Water Filter 1',
        brand: 'Whirlpool',
        price: 49.99,
        rating: 4.9,
        pros: ['NSF Certified 42, 53, and 401', 'Perfect leak-free fit', 'Pharma-grade filtration'],
        cons: ['Expensive recurring cost'],
        specs: { life: '6 Months', capacity: '200 Gallons', certs: 'NSF 401' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 49.99, url: '#' },
          { retailer: 'Home Depot', price: 54.00, url: '#' },
          { retailer: 'Lowe\'s', price: 52.99, url: '#' }
        ]
      },
      {
        name: 'PureLine Replacement Filter',
        brand: 'PureLine',
        price: 24.50,
        rating: 4.6,
        pros: ['Fraction of the cost', 'Carbon block tech', 'Great flow rate'],
        cons: ['Lower contaminant reduction than OEM'],
        specs: { life: '6 Months', capacity: '300 Gallons', certs: 'NSF 42' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 24.50, url: '#' },
          { retailer: 'Walmart', price: 26.00, url: '#' }
        ]
      }
    ]
  },
  {
    slug: 'best-dryer-heating-element-samsung-replacement',
    type: 'best',
    title: 'Best Replacement Dryer Heating Elements (Samsung & Whirlpool)',
    category: 'Heating Element',
    description: 'Avoid the "No Heat" nightmare. We compared reinforced coil elements for longevity and heat consistency.',
    winner: 'DC47-00019A Reinforced Assembly',
    verdict: 'The high-temp nickel-chromium coils in the reinforced aftermarket units often outlast original Samsung stock parts.',
    products: [
      {
        name: 'Dryer Heating Element Assembly',
        brand: 'Samsung OEM',
        price: 85.00,
        rating: 4.7,
        pros: ['Exact factory specs', 'Durable housing', 'Verified safety limits'],
        cons: ['Standard coil density'],
        specs: { wattage: '5300W', material: 'Nichrome', terminal: 'Direct' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'PartsDirect', price: 85.00, url: '#' },
          { retailer: 'Amazon', price: 78.00, url: '#' }
        ]
      },
      {
        name: 'Upgraded 2026 Heating Element',
        brand: 'Primeson',
        price: 34.99,
        rating: 4.8,
        pros: ['Reinforced high-temp coils', 'Cheaper than OEM', 'Includes thermostats'],
        cons: ['Aftermarket warranty varies'],
        specs: { wattage: '5300W', material: 'Upgraded Nichrome', terminal: 'Reinforced' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 34.99, url: '#' }
        ]
      }
    ]
  },
  {
    slug: 'best-washer-drain-pump-whirlpool-kenmore',
    type: 'best',
    title: 'Top Rated Washing Machine Drain Pumps (Fix Drainage Issues)',
    category: 'Drain Pump',
    description: 'Quiet, efficient, and reliable drain pumps for front-load and top-load washers.',
    winner: 'WPW10130907 OEM Replacement',
    verdict: 'The Whirlpool OEM pump is optimized for the correct GPM flow rate, preventing long-drain error codes.',
    products: [
      {
        name: 'OEM Washing Machine Drain Pump',
        brand: 'Whirlpool',
        price: 58.75,
        rating: 4.9,
        pros: ['Maximum reliability', 'Quiet motor', 'Pre-greased impeller'],
        cons: ['Requires tool removal'],
        specs: { gpm: '15 GPM', type: 'Electric', warranty: '1 Year' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 58.75, url: '#' }]
      }
    ]
  }
];
