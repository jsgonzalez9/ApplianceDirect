// Static dataset for Appliance Parts Engine
// Focus: Major Appliances (Washers, Dryers, Refrigerators, Dishwashers)

export interface StaticPart {
  id: string;
  part_number: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  oem_flag: boolean;
  fits: string[];
  symptoms: {
    description: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    urgency: 'DIY' | 'Soon' | 'ASAP';
    drivable: boolean;
    diagnostic_steps: string[];
  }[];
  install: {
    difficulty: 1 | 2 | 3 | 4 | 5;
    skill_level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
    labor_hours: number;
    tools: string[];
    pro_tips: string;
    common_mistakes: string;
  };
  prices: {
    retailer: string;
    price: number;
    shipping: number;
    url: string;
  }[];
}

export const STATIC_PARTS: StaticPart[] = [
  // WASHERS
  {
    id: "app-101",
    part_number: "W10310240",
    name: "Washing Machine Suspension Rod Kit",
    description: "Set of 4 suspension rods and springs for top-load washers. Directs vibration and stabilizes the tub during spin cycles.",
    brand: "Whirlpool",
    category: "Washers",
    price: 58.99,
    oem_flag: true,
    fits: ["Whirlpool WTW5000DW", "Maytag MVWX655DW", "Kenmore 110.2223"],
    symptoms: [
      {
        description: "Washer banging or vibrating excessively",
        severity: "High",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check if washer is level", "Test for 'tub bounce' when empty", "Inspect rod anchors for wear"]
      },
      {
        description: "uL or oL error codes",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Redistribute load", "Check for broken spring on rods"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 0.75,
      tools: ["Putty knife", "Duct tape", "Lithium grease"],
      pro_tips: "Tape the lid down before tilting the washer. Use plenty of lithium grease on the rod sockets.",
      common_mistakes: "Not replacing all 4 rods at once, leading to rapid wear of new parts."
    },
    prices: [
      { retailer: "Amazon", price: 58.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "PartsDr", price: 54.50, shipping: 9.99, url: "https://partsdr.com" }
    ]
  },
  {
    id: "app-102",
    part_number: "WPW10594481",
    name: "Washer Lid Switch Assembly",
    description: "Safety switch that detects if the lid is closed before starting the spin cycle.",
    brand: "Whirlpool",
    category: "Washers",
    price: 24.50,
    oem_flag: true,
    fits: ["Whirlpool Cabrio", "Maytag Bravos", "Kenmore Oasis"],
    symptoms: [
      {
        description: "Washer fills but won't agitate or spin",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Listen for click when closing lid", "Test switch continuity with multimeter"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["Phillips screwdriver", "Multimeter"],
      pro_tips: "Unplug the washer before removing the console. The plastic tabs on the switch are fragile.",
      common_mistakes: "Buying a bypass kit instead of the safety switch, which can lead to injury."
    },
    prices: [
      { retailer: "Amazon", price: 24.50, shipping: 0, url: "https://amazon.com" },
      { retailer: "RepairClinic", price: 28.99, shipping: 0, url: "https://repairclinic.com" }
    ]
  },
  // DRYERS
  {
    id: "app-201",
    part_number: "DC97-14486A",
    name: "Dryer Heating Element Assembly",
    description: "Full heating element assembly for Samsung electric dryers. Restores heat for efficient drying.",
    brand: "Samsung",
    category: "Dryers",
    price: 45.00,
    oem_flag: true,
    fits: ["Samsung DV42H5000EW", "Samsung DV45H7000EW"],
    symptoms: [
      {
        description: "Dryer runs but has no heat",
        severity: "High",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Check circuit breaker (dryers use two)", "Test element for continuity", "Inspect for broken coils"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 1.0,
      tools: ["Phillips screwdriver", "Vacuum cleaner"],
      pro_tips: "Vacuum the entire inside of the dryer while you have it open to prevent future fires.",
      common_mistakes: "Replacing the element without checking the thermal fuse (which often blows at the same time)."
    },
    prices: [
      { retailer: "Amazon", price: 45.00, shipping: 0, url: "https://amazon.com" },
      { retailer: "PartsDr", price: 41.25, shipping: 7.99, url: "https://partsdr.com" }
    ]
  },
  {
    id: "app-202",
    part_number: "3392519",
    name: "Dryer Thermal Fuse",
    description: "Safety fuse that blows if the dryer overheats, preventing fires.",
    brand: "Whirlpool",
    category: "Dryers",
    price: 8.99,
    oem_flag: true,
    fits: ["Whirlpool", "Kenmore", "KitchenAid", "Estate"],
    symptoms: [
      {
        description: "Dryer won't start at all",
        severity: "Critical",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Test fuse continuity", "Check exhaust vent for clogs"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.5,
      tools: ["1/4 inch nut driver"],
      pro_tips: "If this fuse blew, your vent is likely clogged. Clean the vent to the outside of the house.",
      common_mistakes: "Replacing the fuse and ignoring the clogged vent, causing the new fuse to blow immediately."
    },
    prices: [
      { retailer: "Amazon", price: 8.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "O'Reilly", price: 12.99, shipping: 0, url: "https://oreilly.com" }
    ]
  },
  // REFRIGERATORS
  {
    id: "app-301",
    part_number: "MWF",
    name: "SmartWater Refrigerator Water Filter",
    description: "Certified replacement water filter for GE refrigerators. Removes lead, Mercury, and cysts.",
    brand: "GE",
    category: "Refrigerators",
    price: 38.99,
    oem_flag: true,
    fits: ["GE Profile", "GE Cafe", "Hotpoint"],
    symptoms: [
      {
        description: "Slow water flow from dispenser",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Check filter 'Replace' light", "Check for ice buildup in line"]
      },
      {
        description: "Ice cubes look small or cloudy",
        severity: "Low",
        urgency: "DIY",
        drivable: true,
        diagnostic_steps: ["Check filter age", "Flush water system"]
      }
    ],
    install: {
      difficulty: 1,
      skill_level: "Beginner",
      labor_hours: 0.1,
      tools: ["None"],
      pro_tips: "Turn the filter slowly; water might spray if disconnected too quickly. Flush 2 gallons after install.",
      common_mistakes: "Not pushing the filter in far enough before turning."
    },
    prices: [
      { retailer: "Amazon", price: 38.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "Lowes", price: 42.00, shipping: 0, url: "https://lowes.com" }
    ]
  },
  {
    id: "app-302",
    part_number: "WR17X11451",
    name: "Refrigerator Ice Bucket Auger",
    description: "Auger assembly that rotates to push ice from the bucket into the dispenser.",
    brand: "GE",
    category: "Refrigerators",
    price: 52.00,
    oem_flag: true,
    fits: ["GE Side-by-Side Models"],
    symptoms: [
      {
        description: "Dispenser motor runs but no ice comes out",
        severity: "Medium",
        urgency: "Soon",
        drivable: true,
        diagnostic_steps: ["Inspect auger for cracks", "Check if ice is clumped"]
      }
    ],
    install: {
      difficulty: 2,
      skill_level: "Beginner",
      labor_hours: 0.3,
      tools: ["Nut driver"],
      pro_tips: "Remove the ice bucket and empty it before service. Warm it up to prevent plastic cracking.",
      common_mistakes: "Forcing the auger if ice is jammed, which can strip the motor gears."
    },
    prices: [
      { retailer: "Amazon", price: 52.00, shipping: 0, url: "https://amazon.com" }
    ]
  },
  // DISHWASHERS
  {
    id: "app-401",
    part_number: "WD19X24829",
    name: "Dishwasher Drain Pump",
    description: "Removes waste water from the dishwasher during the drain cycle.",
    brand: "GE",
    category: "Dishwashers",
    price: 49.99,
    oem_flag: true,
    fits: ["GE GDT695SMJ0ES", "GE PDT845SMJ0ES"],
    symptoms: [
      {
        description: "Water standing at the bottom at end of cycle",
        severity: "High",
        urgency: "ASAP",
        drivable: false,
        diagnostic_steps: ["Clean the fine filter", "Check for clogs in the air gap", "Test pump motor for continuity"]
      }
    ],
    install: {
      difficulty: 3,
      skill_level: "Intermediate",
      labor_hours: 1.0,
      tools: ["1/4 nut driver", "Channel locks", "Pliers"],
      pro_tips: "Check the check valve at the pump inlet for debris like glass or toothpicks.",
      common_mistakes: "Replacing the pump when the drain hose is actually clogged under the sink."
    },
    prices: [
      { retailer: "Amazon", price: 49.99, shipping: 0, url: "https://amazon.com" },
      { retailer: "PartsDr", price: 46.50, shipping: 8.99, url: "https://partsdr.com" }
    ]
  }
];

// Export helper functions
export const getPartByNumber = (partNumber: string): StaticPart | undefined => {
  return STATIC_PARTS.find(p => p.part_number.toLowerCase() === partNumber.toLowerCase());
};

export const getPartsByCategory = (category: string): StaticPart[] => {
  return STATIC_PARTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getPartsBySymptom = (symptomQuery: string): StaticPart[] => {
  const query = symptomQuery.toLowerCase();
  return STATIC_PARTS.filter(p => 
    p.symptoms.some(s => s.description.toLowerCase().includes(query))
  );
};

export const getAllPartNumbers = (): string[] => {
  return STATIC_PARTS.map(p => p.part_number);
};

export const getCategories = (): string[] => {
  return [...new Set(STATIC_PARTS.map(p => p.category))];
};
