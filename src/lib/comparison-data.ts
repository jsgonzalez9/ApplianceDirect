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
    slug: 'best-brake-pads-chevy-silverado-1500',
    type: 'best',
    title: '5 Best Brake Pads for Chevy Silverado 1500 (2024 Review)',
    category: 'Brake Pads',
    description: 'We tested the top ceramic and semi-metallic pads for heavy-duty towing and daily driving on the Silverado platform.',
    winner: 'Bosch QuietCast',
    verdict: 'For most Silverado owners, the Bosch QuietCast offers the perfect balance of stopping power and zero noise.',
    products: [
      {
        name: 'QuietCast Premium Ceramic',
        brand: 'Bosch',
        price: 48.99,
        rating: 4.8,
        pros: ['Extremely quiet', 'Low dust', 'Zinc coating for corrosion'],
        cons: ['Slightly higher price'],
        specs: { material: 'Ceramic', shim: 'Pre-attached', coating: 'Zinc' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 48.99, url: '#' },
          { retailer: 'RockAuto', price: 52.45, url: '#' },
          { retailer: 'O\'Reilly', price: 59.99, url: '#' }
        ]
      },
      {
        name: 'Z36 Truck & Tow',
        brand: 'PowerStop',
        price: 65.50,
        rating: 4.9,
        pros: ['Best for towing', 'High heat resistance', 'Includes hardware'],
        cons: ['Higher dust than ceramic'],
        specs: { material: 'Carbon-Fiber Ceramic', shim: 'Stainless Steel', coating: 'Standard' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 65.50, url: '#' },
          { retailer: 'Summit', price: 68.00, url: '#' }
        ]
      }
    ]
  },
  {
    slug: 'bosch-vs-acdelco-ignition-coils',
    type: 'vs',
    title: 'Bosch vs AC Delco Ignition Coils: Which is Better for GM V8?',
    category: 'Ignition Coils',
    description: 'Comparing the two most popular OEM and aftermarket ignition coils for the 5.3L and 6.2L engines.',
    winner: 'AC Delco (Professional)',
    verdict: 'Stick with AC Delco for the most reliable cold starts and OEM-spec electrical resistance.',
    products: [
      {
        name: 'Original Equipment Ignition Coil',
        brand: 'AC Delco',
        price: 34.20,
        rating: 4.9,
        pros: ['Perfect OEM fit', 'Maximum reliability', '2-year warranty'],
        cons: ['More expensive than generic'],
        specs: { terminal: 'Brass', voltage: 'Standard', fit: 'Direct' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 34.20, url: '#' },
          { retailer: 'RockAuto', price: 32.75, url: '#' }
        ]
      },
      {
        name: 'High Performance Coil',
        brand: 'Bosch',
        price: 28.50,
        rating: 4.7,
        pros: ['Better value', 'Slightly higher output', 'Great packaging'],
        cons: ['Boot seal can be tight'],
        specs: { terminal: 'Brass', voltage: 'Premium', fit: 'Direct' },
        affiliateUrl: '#',
        vendorPrices: [
          { retailer: 'Amazon', price: 28.50, url: '#' },
          { retailer: 'AutoZone', price: 31.99, url: '#' }
        ]
      }
    ]
  },
  {
    slug: 'best-alternator-gmc-sierra-1500',
    type: 'best',
    title: 'Best Alternators for GMC Sierra 1500 (2024 Top Picks)',
    category: 'Alternator',
    description: 'High-output alternators for trucks with aftermarket electronics and towing needs.',
    winner: 'ACDelco Gold (Professional)',
    verdict: 'The ACDelco Gold is the #1 choice for stock charging systems that need reliable amperage.',
    products: [
      {
        name: 'Gold Alternator',
        brand: 'ACDelco',
        price: 215.00,
        rating: 4.8,
        pros: ['New units, no core charge', 'OEM specs', 'Excellent heat management'],
        cons: ['Stock 150A limit'],
        specs: { amperage: '150A', type: 'New', warrant: 'Limited Lifetime' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 215.00, url: '#' }]
      }
    ]
  },
  {
    slug: 'acdelco-vs-denso-radiator',
    type: 'vs',
    title: 'ACDelco vs DENSO Radiator: GM Truck Cooling Showdown',
    category: 'Radiator',
    description: 'Battle of the heavyweights: which radiator should you trust with your engine cooling?',
    winner: 'DENSO',
    verdict: 'DENSO radiators often use thicker aluminum cores than modern ACDelco units, improving cooling efficiency.',
    products: [
      {
        name: 'Direct Fit Radiator',
        brand: 'DENSO',
        price: 185.00,
        rating: 4.9,
        pros: ['Aluminum core', 'Precision fit', 'Superior fins'],
        cons: ['O-rings not always included'],
        specs: { material: 'Aluminum/Plastic', row_count: '1 Row', fit: 'OEM' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 185.00, url: '#' }]
      },
      {
        name: 'GM Genuine Radiator',
        brand: 'ACDelco',
        price: 198.00,
        rating: 4.7,
        pros: ['Factory replacement', 'Matches original mounts', 'Reliable plastic tanks'],
        cons: ['Slightly higher price'],
        specs: { material: 'Aluminum/Plastic', row_count: '1 Row', fit: 'Factory' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 198.00, url: '#' }]
      }
    ]
  },
  {
    slug: 'best-fuel-pump-silverado-chevy',
    type: 'best',
    title: 'Best Fuel Pumps for Chevy Silverado (2014-2019 Models)',
    category: 'Fuel Pump',
    description: 'We reviewed the top fuel pump assemblies to fix starting issues and fuel pressure drops.',
    winner: 'ACDelco GM Original Equipment',
    verdict: 'Never gamble on a fuel pump. The GM Original Equipment assembly is the only one that guarantees correct fuel level readings.',
    products: [
      {
        name: 'GM Original Equipment Fuel Pump',
        brand: 'ACDelco',
        price: 320.00,
        rating: 4.9,
        pros: ['Correct signal for fuel gauge', 'Extreme durability', 'Whisper quiet'],
        cons: ['Premium price point'],
        specs: { pressure: 'Standard', assembly: 'Full Module', filter: 'Integrated' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 320.00, url: '#' }]
      }
    ]
  },
  {
    slug: 'monroe-vs-bilstein-shocks',
    type: 'vs',
    title: 'Monroe vs Bilstein: Best Shocks for a Smoother Silverado Ride?',
    category: 'Shocks',
    description: 'Looking for comfort or control? We compare the Monroe OESpectrum and Bilstein 5100 series.',
    winner: 'Bilstein 5100',
    verdict: 'If you ever leave the pavement or tow, the Bilstein 5100 monotube design is vastly superior to Monroe.',
    products: [
      {
        name: '5100 Series Monotube',
        brand: 'Bilstein',
        price: 115.00,
        rating: 5.0,
        pros: ['Monotube design', 'Handles lift kits', 'Lifetime warranty'],
        cons: ['Firmer ride than stock'],
        specs: { design: 'Monotube', adjustment: 'None', finish: 'Zinc' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 115.00, url: '#' }]
      },
      {
        name: 'OESpectrum Shocks',
        brand: 'Monroe',
        price: 65.00,
        rating: 4.6,
        pros: ['Budget friendly', 'Very soft ride', 'Great for city driving'],
        cons: ['Twin-tube fades under heat'],
        specs: { design: 'Twin-tube', adjustment: 'Speed-sensing', finish: 'Paint' },
        affiliateUrl: '#',
        vendorPrices: [{ retailer: 'Amazon', price: 65.00, url: '#' }]
      }
    ]
  }
];
