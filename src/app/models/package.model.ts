export interface ItineraryItem {
  day: string;          // Day 1, Day 2, etc.
  title: string;        // Short heading
  description: string[];  // Detailed explanation
}

export interface PackageItem {
  id: number;
  name: string;

  location: 'Tirupati' | 'Ujjain' | 'Custom';   // WHERE
  type: 'Darshan Only' | 'Package' | 'Custom';  // WHAT KIND

  services: string[];   // WHAT YOU PROVIDE
  priceNote: string;
  importantPoints?: string[]; 

  itinerary?: ItineraryItem[]; // DAY-WISE PLAN (DETAILS PAGE ONLY)
  availability?: string;       // BOOKING NOTICE

  image?: string;
  duration?: string;
  idealFor?: string;
  discountNote?: string;

  tags?: string[];
  featured?: boolean;
}
