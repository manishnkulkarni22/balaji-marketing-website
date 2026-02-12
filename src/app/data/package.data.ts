import { PackageItem } from '../models/package.model';

export const PACKAGES: PackageItem[] = [
  {                                        //Tirupati standard Darshan Final
    id: 1,
    name: 'Tirupati Standard Darshan Package',
    location: 'Tirupati',
    type: 'Package',

    services: [
      'Two way Non AC Sleeper Class Railway Tickets',
      'Darshan Pass for Balaji Temple',
      'Accommodation for 1 day in Tirumala',
    ],

    priceNote: 'Starting from ₹3500 per person',
    duration: '📅 4 Days / 3 Nights',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/standardTirupati.jpg',

    availability: 'Bookings must be done at least 2.5–3 months in advance',

    itinerary: [
     {
        day: '🗓️ Day 1',
        title: 'Journey Begins',
        description:
          [
            'Departure by 3 Tier AC Class train from Pune / (Your Selected Destination) in the evening or night',
            'Comfortable overnight train journey'
          ]
      },
      {
        day: '🗓️ Day 2',
        title: 'Arrival & Tirumala Darshan',
        description:
          [
            'Arrival at Tirupati',
            'Proceed for Tirumala Darshan as per the allotted darshan slot',
            'Accommodation at Tirumala provided by us',
            'Overnight stay at Tirumala'
          ]
      },
      {
        day: '🗓️ Day 3',
        title: 'Return Journey Starts',
        description:
          [
            'Check-out from tirumala room',
            'Free time until departure local sight seeing',
            'Departure by train from Tirupati in the evening or night',
            'Return ticket provided to Pune OR Kolhapur (as selected at the time of booking)',
            'Overnight train journey',
            'Days to be decided for your self travel are to be decided while package booking or Return Railway tickets opening 2 months before.'
          ]
      },
      {
        day: '🗓️ Day 4',
        title: 'Arrival Back Home',
        description:
          [
            'Arrival at Pune / Kolhapur / (Your Selected Destination)',
            'Tour concludes with divine blessings of Lord Balaji'
          ]
      },
    ],
    importantPoints: [
     'Package includes only: Two-way 3 tier AC Class railway tickets',
      'Tirumala Darshan Pass',
      '1 Day Accommodation at Tirumala',
      'Local food and local transportation are not included in the package',
      'Return ticket can be provided till kolhapur.',
      'If the return ticket is booked till Kolhapur, travel from Kolhapur to Pune must be self-arranged',
      'Extension of stay is possible, however: Additional stay is not included in the package',
      'Any extra expenses during the extended stay will be borne by the pilgrim',
      'Days to be decided for your self travel are to be decided while package booking or Return Railway tickets opening 2 months before.'
    ]

  },
  {                                      //Ujjain standard Darshan Final
    id: 2,
    name: 'Ujjain Standard Darshan Package',
    location: 'Ujjain',
    type: 'Package',

    services: [
      'Two way Non AC Sleeper Class Railway Tickets',
      'Sheeghra Darshan Pass for Mahakal Temple',
      'Accommodation for 1 day in Hotel Room in Ujjain',
    ],

    priceNote: 'Starting from ₹3000 per person',
    duration: '📅 4 Days / 3 Nights',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/standardUjjain.png',

    availability: 'Bookings must be done at least 2.5–3 months in advance',

    itinerary: [
      {
        day: '🗓️ Day 1',
        title: 'Journey Begins',
        description:
          [
            'Departure by Sleeper Class train from Pune / (Your Selected Destination) in the evening or night.',
            'Comfortable overnight train journey'
          ]
      },
      {
        day: '🗓️ Day 2',
        title: 'Arrival & Ujjain Darshan',
        description:
          [
            'Arrival at Ujjain',
            'Check-in at Hotel Accommodation at Ujjain arranged by us',
            'Proceed for Ujjain Darshan as per the allotted darshan slot',
            'Free time for local sightseeing in Ujjain',
            'Overnight stay at Ujjain'
          ]
      },
      {
        day: '🗓️ Day 3',
        title: 'Return Journey Starts',
        description:
          [
            'Check-out from ujjain room',
            'Free time until departure local sight seeing',
            'Departure by train from Ujjain in the evening or night',
            'Return ticket provided to Pune or the selected destination',
            'Overnight train journey'
          ]
      },
      {
        day: '🗓️ Day 4',
        title: 'Arrival Back Home',
        description:
          [
            'Arrival at Pune / (Your Destination)',
            'Tour concludes with divine blessings of Lord Mahakal'
          ]
      },
    ],
    importantPoints: [
      'Package includes only: Two-way Sleeper Class train tickets',
      'Mahakal Darshan Pass',
      '1 Day Accommodation at Ujjain',
      'Local food and local transportation are not included in the package',
      'Return ticket can be provided till kolhapur.',
      'Customization is available for Omkareshwar and Indore, Additional cost will be applicable',
      'Extension of stay is possible, however: Additional stay is not included in the package',
      'Any extra expenses during the extended stay will be borne by the pilgrim',
      'Days to be decided for your self travel are to be decided while package booking or Return Railway tickets opening 2 months before.',
    ]

  },
  {                                      //Custom tour final
    id: 3,
    name: 'Custom Tour Package',
    location: 'Custom',
    type: 'Package',

    services: [
      'Customized itinerary',
      'Personal assistance'
    ],

    priceNote: 'Contact us for pricing',
    duration: '📅 As per your schedule.',
    idealFor: 'All',
    image: 'assets/images/customTour.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: 'Package Overview',
        title: 'Custom Tour',
        description:
          [
            'Customized tour packages are available for individuals, families, and groups based on their desired destination, subject to availability with us.',
            'Packages are also provided for school and college groups.',
            'Tours can be planned for spiritual destinations as well as tourist places, fully customized as per your requirements.'
          ]
      },
      {
        day: '🗓️ Tour Planning',
        title: 'Customization',
        description:
          [
            'Destination planned as per customer’s demand',
            'Itinerary designed based on group size and travel preference',
            'Suitable for: Family groups',
            'Group tours',
            'School and college groups'
          ]
      },
      {
        day: 'Custom',
        title: 'Package Inclusions',
        description:
          [
            'Services are customized as per selected destination and requirement',
            'Travel plan and stay arranged based on customer preference and availability'
          ]
      },
    ],
    importantPoints: [
      'All packages are customized as per customer demand',
      'Availability of destinations and services is subject to feasibility with us',
      'Package details, duration, and inclusions may vary based on destination and group size',
      'Final itinerary and cost will be shared after requirement confirmation'
    ]

  },
  {                                        //Tirupati comfort Darshan Final
    id: 4,
    name: 'Tirupati Comfort Darshan Package',
    location: 'Tirupati',
    type: 'Package',

    services: [
      'Two way 3 Tier AC Class Railway Tickets',
      'Darshan Pass for Balaji Temple',
      'Accommodation for 1 day in Tirumala',
    ],

    priceNote: 'Starting from ₹5500 per person',
    duration: '📅 4 Days / 3 Nights',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/comfortTirupati.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: '🗓️ Day 1',
        title: 'Journey Begins',
        description:
          [
            'Departure by 3 Tier AC Class train from Pune / (Your Selected Destination) in the evening or night',
            'Comfortable overnight train journey'
          ]
      },
      {
        day: '🗓️ Day 2',
        title: 'Arrival & Tirumala Darshan',
        description:
          [
            'Arrival at Tirupati',
            'Proceed for Tirumala Darshan as per the allotted darshan slot',
            'Accommodation at Tirumala provided by us',
            'Overnight stay at Tirumala'
          ]
      },
      {
        day: '🗓️ Day 3',
        title: 'Return Journey Starts',
        description:
          [
            'Check-out from tirumala room',
            'Free time until departure local sight seeing',
            'Departure by train from Tirupati in the evening or night',
            'Return ticket provided to Pune OR Kolhapur (as selected at the time of booking)',
            'Overnight train journey',
            'Days to be decided for your self travel are to be decided while package booking or Return Railway tickets opening 2 months before.'
          ]
      },
      {
        day: '🗓️ Day 4',
        title: 'Arrival Back Home',
        description:
          [
            'Arrival at Pune / Kolhapur / (Your Selected Destination)',
            'Tour concludes with divine blessings of Lord Balaji'
          ]
      },
    ],
    importantPoints: [
      'Package includes only: Two-way 3 tier AC Class railway tickets',
      'Tirumala Darshan Pass',
      '1 Day Accommodation at Tirumala',
      'Local food and local transportation are not included in the package',
      'Return ticket can be provided till kolhapur.',
      'If the return ticket is booked till Kolhapur, travel from Kolhapur to Pune must be self-arranged',
      'Extension of stay is possible, however: Additional stay is not included in the package',
      'Any extra expenses during the extended stay will be borne by the pilgrim',
      'Days to be decided for your self travel are to be decided while package booking or Return Railway tickets opening 2 months before.'
    ]

  },
  {                                      //Tirupati Premium Darshan Final
    id: 5,
    name: 'Tirupati Premium Darshan Package',
    location: 'Tirupati',
    type: 'Package',

    services: [
      'Two way 2 Tier AC Class Railway Tickets',
      'Darshan Pass for Balaji Temple',
      'Accommodation for 1 day in Tirumala',
    ],

    priceNote: 'Starting from ₹7500 per person',
    duration: '📅 4 Days / 3 Nights',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/premiumTirupati.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: '🗓️ Day 1',
        title: 'Journey Begins',
        description:
          [
            'Departure by 2 Tier AC Class train from Pune / (Your Selected Destination) in the evening or night',
            'Comfortable overnight train journey'
          ]
      },
      {
        day: '🗓️ Day 2',
        title: 'Arrival & Tirumala Darshan',
        description:
          [
            'Arrival at Tirupati/Renigunta',
            'Check-in at Accommodation at Tirumala arranged by us',
            'Proceed for Tirumala Darshan as per the allotted darshan slot',
            'Overnight stay at Tirumala'
          ]
      },
      {
        day: '🗓️ Day 3',
        title: 'Return Journey Starts',
        description:
          [
            'Check-out from tirumala room',
            'Free time until departure local sight seeing',
            'Departure by train from Tirupati in the evening or night',
            'Return ticket provided to Pune OR Kolhapur (as selected at the time of booking)',
            'Overnight train journey',
          ]
      },
      {
        day: '🗓️ Day 4',
        title: 'Arrival Back Home',
        description:
          [
            'Arrival at Pune / Kolhapur / (Your Selected Destination)',
            'Tour concludes with divine blessings of Lord Balaji'
          ]
      },
    ],
    importantPoints: [
      'Package includes only: Two-way Sleeper Class train tickets',
      'Tirumala Darshan Pass',
      '1 Day Accommodation at Tirumala',
      'Local food and local transportation are not included in the package',
      'Return ticket can be provided till kolhapur.',
      'If the return ticket is booked till Kolhapur, travel from Kolhapur to Pune must be self-arranged',
      'Extension of stay is possible, however: Additional stay is not included in the package',
      'Any extra expenses during the extended stay will be borne by the pilgrim',
      'Days to be decided for your self travel are to be decided while package booking or Return Railway tickets opening 2 months before.'
    ]

  },
  {                                      //Tirupati Flight Final     
    id: 6,
    name: 'Tirupati Flight Darshan Package',
    location: 'Tirupati',
    type: 'Package',

    services: [
      'Two way Flight Tickets',
      'Darshan Pass for Balaji Temple',
      'Accommodation for 1 day in Tirumala/Tirupati',
    ],

    priceNote: 'Starting from ₹18,500 per person',
    duration: '📅 As per demand',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/flightTirupati.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: 'Flight',
        title: 'Package Overview',
        description:
          [
            'This Customized Flight Package is designed to offer flexibility in planning your Tirupati Balaji pilgrimage as per your preferred travel dates and comfort.',
            'The package is thoughtfully planned by Us to ensure a smooth and well-managed darshan experience.',

          ]
      },
      {
        day: 'Flight',
        title: 'Planning Assistance',
        description:
          [
            'Assistance provided for flight planning',
            'Advance booking recommended (3.5 to 4 months prior) for better fare availability',
            'Travel planning support for a smoother journey'
          ]
      },
      {
        day: 'Flight',
        title: 'Package Inclusions',
        description:
          [
            'Tirumala Darshan Pass',
            'Premium accommodation in Tirupati or Tirumala',
            'Peaceful stay in a temple-oriented environment for a spiritual experience.'
          ]
      },
      {
        day: 'Custom',
        title: 'Customization Options',
        description:
          [
            'This is a customized package, planned as per individual requirements',
            'Flight booking is recommended 3.5–4 months in advance for better availability',
            'Final itinerary and inclusions will be confirmed after requirement discussion',
            'Package details may vary based on travel dates and service selection.'
          ]
      },
    ],
    importantPoints: [
      'This is a customized package, planned as per individual requirement.',
      'Flight booking is recommended 3.5–4 months in advance for better availability.',
      'Final itinerary and inclusions will be confirmed after requirement discussion.',
      'Package details may vary based on travel dates and service selection.'
    ]

  },
  {                                    //Summer vacation Final
    id: 7,
    name: 'Summer Vacation special Tirupati Darshan Package',
    location: 'Tirupati',
    type: 'Package',

    services: [
      'All-Inclusive 3-Tier AC Transportation',
      'Premium Stay & Darshan Pass',
      'Local Sightseeing and Complete Amenity Package.'
    ],

    priceNote: 'Starting from ₹15000 per person',
    duration: '📅 5 Days / 4 Nights',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/summerTirupati.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: '🗓️ Day 1',
        title: 'Journey Begins',
        description:
          [
            'Departure by train from Pune / (Your Destination) in the evening or night',
            'Overnight train journey'
          ]
      },
      {
        day: '🗓️ Day 2',
        title: 'Tirumala Darshan & Local Sightseeing',
        description:
          [
            'Arrival at Tirupati / Renigunta Railway Station.',
            'Pickup by private vehicle.',
            'Lunch (Pure Veg)',
            'Tirumala Local Sightseeing',
            'Bhu Varaha Swami Temple',
            'Srivari Padalu',
            'Akasha Ganga Theertham',
            'Papavinasanam',
            'Japali Hanuman Temple',
            'Darshan at Sri Venkateshwara Swami Temple, Tirumala',
            '(Darshan Pass – faster than free darshan line, as per TTD allotted slot)',
            'Dinner (Pure Veg)',
            'Accommodation in Tirumala provided by us',
            'Overnight stay',
          ]
      },
      {
        day: '🗓️ Day 3',
        title: 'Tirupati & Vellore Darshan',
        description:
          [
            'Breakfast and checkout from Tirumala',
            'Transfer to AC Hotel Room in Tirupati',
            'Lunch (Pure Veg)',
            'Visit to Sri Golden Temple, Vellore',
            'Return to Tirupati',
            'Tirupati Local Sightseeing',
            'ISKCON Temple',
            'Kapila Theertham',
            'Overnight stay in AC Hotel, Tirupati'
          ]
      },
      {
        day: '🗓️ Day 4',
        title: 'Arrival Back Home',
        description:
          [
            'Breakfast & Lunch (Pure Veg)',
            'Tirupati Local Sightseeing',
            'Padmavathi Ammavari Temple',
            'Vakulamatha Temple',
            'Srinivasa Mangapuram Temple',
            'Sri Govindaraja Swamy Temple',
            'Dinner (Pure Veg)',
            'Departure by train in the evening or night',
          ]
      },
      {
        day: '🗓️ Day 5',
        title: 'Arrival Back',
        description:
          [
            'Arrival at Pune / (Your Destination)',
            'Package concludes'
          ]
      },
    ],
    importantPoints: [
      "Darshan timing is strictly as per TTD allotment",
      "Package operates on limited slots due to summer rush",
      "If return ticket is booked till Kolhapur, travel from Kolhapur to Pune is self-arranged",
      "Kolhapur to Pune / your destination ticket can be arranged at additional cost"
    ]

  },
  {                                    //Tirupati Darshan Pass Final
    id: 8,
    name: 'Tirupati Balaji Darshan Pass',
    location: 'Tirupati',
    type: 'Darshan Only',

    services: [
      'Experience the divine blessings of Lord Venkateswara with the Tirupati Balaji Darshan Pass offered by Us.',
      'This is a one-time usable darshan pass, designed to provide a quick and hassle-free darshan at the Balaji Temple, Tirumala.'
    ],

    priceNote: 'Starting from ₹1200 per person',
    duration: '1 time darshan',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/darshanTirupati.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: 'Darshan Pass',
        title: 'Details',
        description:
          [
            'One-time darshan pass for the individual',
            'Enables faster darshan with reduced waiting time',
            'Suitable for pilgrims seeking a smooth and well-managed darshan experience',]
      },
      {
        day: 'Darshan Pass',
        title: 'Booking Information',
        description:
          [
            'Darshan pass is available for booking 4 to 3.5 months prior to the intended travel date.'
          ]
      },
    ],
    importantPoints: [
      "This is a single-time usable Tirupati Balaji darshan pass",
      "Darshan is provided only at Tirupati Balaji Temple, Tirumala",
      "Darshan timing is strictly as per TTD allotment",
      "Booking is available 4 to 3.5 months prior to the travel date",
      "Darshan pass includes darshan only; travel and accommodation are not included",
      "Please Carry Original Aadhar Card with you while darshan"
    ]

  },
  {                                     //Tirupati VIP Darshan Pass Final
    id: 9,
    name: 'Tirupati VIP Break Darshan Pass',
    location: 'Tirupati',
    type: 'Darshan Only',

    services: [
      "Experience the divine with the VIP Break Darshan Pass for Tirupati Balaji, designed for a seamless and quick darshan experience.",
      "This one-time usable darshan pass is managed by Us and is intended for pilgrims seeking the easiest and quickest way to have darshan at Tirumala."
    ],

    priceNote: 'Starting from ₹12,500 per person',
    duration: '1 time darshan',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/vipDarshanTirupati.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: 'Darshan Pass',
        title: 'Details',
        description:
          [
            'One-time usable VIP Break Darshan Pass',
            'Provides the quickest darshan among available darshan options',
            'Ensures minimum waiting time and a smooth temple visit',
            'Darshan conducted at Tirupati Balaji Temple, Tirumala'
          ]
      },
      {
        day: 'Darshan pass',
        title: 'Booking Information',
        description:
          [
            'Booking available 4 to 3.5 months prior to the intended travel date'
          ]
      },
    ],
    importantPoints: [
      "This is a single-time usable VIP Break Darshan Pass",
      "VIP Break Darshan is the quickest darshan option at Tirupati Balaji",
      "Darshan timing is strictly as per TTD allotment",
      "Booking is available 4 to 3.5 months prior to the travel date",
      "Darshan pass includes darshan only; travel, food, and accommodation are not included",
      "Please Carry Original Aadhar Card with you while darshan"
    ]

  },
  {                                     //Ujjain Comfort Final
    id: 10,
    name: 'Ujjain Comfort Darshan Package',
    location: 'Ujjain',
    type: 'Package',

    services: [
      'Two way 3 Tier AC Class Railway Tickets',
      'Sheeghra Darshan Pass for Mahakal Temple',
      'Accommodation for 1 day in Ujjain',
    ],

    priceNote: 'Starting from ₹5000 per person',
    duration: '📅 4 Days / 3 Nights',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/comfortUjjain.png',

    availability: 'Bookings must be done at least 2.5–3 months in advance',

    itinerary: [
      {
        day: '🗓️ Day 1',
        title: 'Journey Begins',
        description:
          [
            "Departure by train from Pune / (Your Selected Destination) in the evening or night",
            "Overnight train journey"
          ]
      },
      {
        day: '🗓️ Day 2',
        title: 'Ujjain Mahakal Darshan',
        description:
          [
            "Arrival at Ujjain",
            "Mahakal Darshan as per the allotted time slot",
            "Free time for local sightseeing in Ujjain",
            "Overnight stay"
          ]
      },
      {
        day: '🗓️ Day 3',
        title: 'Return Journey',
        description:
          [
            "Departure by train from Ujjain in the evening or night",
            "Return ticket provided to Pune or selected destination"
          ]
      },
      {
        day: '🗓️ Day 4',
        title: 'Arrival Back Home',
        description:
          [
            "Arrival at Pune / (Your Destination)",
            "Package concludes."
          ]
      },
    ],
    importantPoints: [
      "Package includes two-way train tickets, darshan pass, and accommodation only",
      "Local food and local transportation are not included",
      "Customization available for Omkareshwar and Indore (additional cost applicable)",
      "Extension of stay is possible; extra stay is not included in the package",
      "Additional expenses will be borne by the pilgrim"
    ]

  },
  {                                      //Ujjain Premium Final
    id: 11,
    name: 'Ujjain Comfort Darshan Package',
    location: 'Ujjain',
    type: 'Package',

    services: [
      'Two way 2 Tier AC Class Railway Tickets',
      'Sheeghra Darshan Pass for Mahakal Temple',
      'Accommodation for 1 day in Ujjain',
    ],

    priceNote: 'Starting from ₹7000 per person',
    duration: '📅 4 Days / 3 Nights',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/premiumUjjain.png',

    availability: 'Bookings must be done at least 2.5–3 months in advance',

    itinerary: [
      {
        day: '🗓️ Day 1',
        title: 'Journey Begins',
        description:
          [
            "Departure by train from Pune / (Your Selected Destination) in the evening or night",
            "Overnight train journey"
          ]
      },
      {
        day: '🗓️ Day 2',
        title: 'Ujjain Mahakal Darshan',
        description:
          [
            "Arrival at Ujjain",
            "Mahakal Darshan as per the allotted time slot",
            "Free time for local sightseeing in Ujjain",
            "Overnight stay"
          ]
      },
      {
        day: '🗓️ Day 3',
        title: 'Return Journey',
        description:
          [
            "Departure by train from Ujjain in the evening or night",
            "Return ticket provided to Pune or selected destination"
          ]
      },
      {
        day: '🗓️ Day 4',
        title: 'Arrival Back Home',
        description:
          [
            "Arrival at Pune / (Your Destination)",
            "Package concludes."
          ]
      },
    ],
    importantPoints: [
      "Package includes two-way train tickets, darshan pass, and accommodation only",
      "Local food and local transportation are not included",
      "Customization available for Omkareshwar and Indore (additional cost applicable)",
      "Extension of stay is possible; extra stay is not included in the package",
      "Additional expenses will be borne by the pilgrim"
    ]

  },
  {                                     //Ujjain Flight package
    id: 12,
    name: 'Ujjain Flight Darshan Package',
    location: 'Ujjain',
    type: 'Package',

    services: [
      'Two way Flight Tickets',
      'Darshan Pass for Mahakal Temple',
      'Accommodation for 1 day in Ujjain/Indore',
    ],

    priceNote: 'Starting from ₹17000 per person',
    duration: '📅 As per demand',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/flightUjjain.jpg',

    availability: 'Bookings must be done at least 3.5–4 months in advance',

    itinerary: [
      {
        day: 'Flight',
        title: 'Package Overview',
        description:
          [
            'Experience a divine journey to Ujjain Mahakal with this Customized Flight Package, thoughtfully designed by Balaji Marketing.',
            'The package offers flexibility to plan your pilgrimage according to your preferred travel dates and comfort.'
          ]
      },
      {
        day: 'Flight',
        title: 'Planning Assistance',
        description:
          [
            'Assistance provided for flight planning',
            'Advance booking recommended (2.5 to 3 months prior) to secure better fares',
            'Support for smooth and convenient travel arrangements'
          ]
      },
      {
        day: 'Flight',
        title: 'Package Inclusions',
        description:
          [
            'Mahakal Darshan Pass',
            'Premium accommodation in Ujjain'
          ]
      },
      {
        day: 'Custom',
        title: 'Customization Options',
        description:
          [
            'Accommodation options can be selected as per requirement',
            'Services can be customized based on customer preference'
          ]
      },
    ],
    importantPoints: [
      'Travel dates can be customized',
      'Accommodation options can be selected as per requirement',
      'Services can be customized based on customer preference'
    ]

  },
  {                                    //Ujjain Darshan Pass 
    id: 13,
    name: 'Ujjain Sheeghra Darshan Pass',
    location: 'Ujjain',
    type: 'Darshan Only',

    services: [
      "Experience the spiritual essence of Ujjain with the Ujjain Darshan Pass offered by Us.",
      "This is a one-time usable darshan pass that allows pilgrims and visitors to access the Ujjain Mahakal Temple and immerse themselves in the divine atmosphere of one of India’s most sacred cities."
    ],

    priceNote: 'Starting from ₹300 per person',
    duration: '1 time darshan',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/darshanUjjain.png',

    availability: 'Bookings must be done at least 0.5–1 months in advance',

    itinerary: [
      {
        day: 'Darshan Pass',
        title: 'Details',
        description:
          [
            "One-time usable Ujjain Darshan Pass",
            "Provides access to Ujjain Mahakal Temple",
            "Suitable for pilgrims as well as tourists seeking a smooth darshan experience"
          ]
      },
      {
        day: 'Darshan Pass',
        title: 'Booking information',
        description:
          [
            "Darshan pass is available for booking up to 1 months prior to the intended travel date"
          ]
      },
    ],
    importantPoints: [
      "This is a single-time usable Ujjain Mahakal darshan pass",
      "Darshan is applicable only at Ujjain Mahakal Temple",
      "Booking is available up to 2 months prior to the travel date",
      "Darshan pass includes darshan only",
      "Travel, food, accommodation, and local transportation are not included"
    ]
  },
  {                                    // Ujjain Omkareshwar Darshan Pass
    id: 14,
    name: 'Ujjain & Omkareshwar Darshan Pass',
    location: 'Ujjain',
    type: 'Darshan Only',

    services: [
      'Experience the spiritual essence of Ujjain and Omkareshwar with the Ujjain & Omkareshwar Darshan Pass offered by us.',
      'This is a one-time usable darshan pass that provides access to both Ujjain Mahakal Temple and Omkareshwar Temple, allowing pilgrims and visitors to immerse themselves in the divine atmosphere of these sacred sites.'
    ],

    priceNote: 'Starting from ₹800 per person',
    duration: '1 time darshan',
    idealFor: 'First-time darshan, families, group travellers',
    image: 'assets/images/ujjainOmkarDarshan.png',

    availability: 'Bookings must be done at least 0.5–1 months in advance',

    itinerary: [
      {
        day: 'Darshan Pass Details',
        title: 'Details',
        description:
          [
            "One-time usable darshan pass.",
            "Darshan access for two temples: Ujjain Mahakal Temple, Omkareshwar Temple",
            "Suitable for pilgrims as well as tourists seeking a smooth darshan experience"
          ]
      },
      {
        day: 'Darshan Pass',
        title: 'Booking Information',
        description:
          [
            'Darshan pass is available for booking up to 1 months prior to the intended travel date'
          ]
      },
    ],
    importantPoints: [
      "This is a single-time usable darshan pass",
      "Darshan is applicable at Ujjain Mahakal Temple and Omkareshwar Temple",
      "Booking is available up to 2 months prior to the travel date",
      "Darshan pass includes darshan only for both temples",
      "Travel, food, accommodation, and local transportation are not included"
    ]

  },
];