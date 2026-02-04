export const categories = [
  { id: 'communication', label: 'Communication', icon: 'fa-microphone', bgClass: 'comm-bg', description: 'Speak • Persuade • Express', coordinator: 'Ms. P. Priya Dharshini' },
  { id: 'business', label: 'Business', icon: 'fa-briefcase', bgClass: 'business-bg', description: 'Plan • Create • Coordinate', coordinator: 'Mrs. K. Bhargavi' },
  { id: 'technical', label: 'Technical', icon: 'fa-code', bgClass: 'tech-bg', description: 'Code • Debug • Design', coordinator: 'Mr. L. Dharma Prakash & Ms. Anupama M Kumar' },
  { id: 'tamil', label: 'Tamil', icon: 'fa-feather', bgClass: 'tamil-bg', description: 'தமிழ் மொழியும் கலாச்சாரமும்', coordinator: 'Mr. Sridhar' },
];

export const events = [
  // Communication
  {
    id: 1,
    category: 'communication',
    title: 'JAM (Just a Minute)',
    shortDesc: 'Speak on a surprise topic for 1 minute',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-microphone',
    time: '10:00 AM – 11:00 AM',
    venue: 'Seminar Hall',
    details: 'Ms. P. Priya Dharshini',
    regLink: 'https://forms.gle/COMM_JAM_FORM'
  },
  {
    id: 2,
    category: 'communication',
    title: 'Convince Me If You Can',
    shortDesc: 'Sell a fun idea to the audience',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-comments',
    time: '11:00 AM – 12:00 PM',
    venue: 'Room 102',
    details: 'Persuasion skills test',
    regLink: 'https://forms.gle/COMM_CONVINCE_FORM'
  },
  {
    id: 3,
    category: 'communication',
    title: 'Picture Talk',
    shortDesc: 'Describe and interpret random pictures',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-image',
    time: '12:00 PM – 12:30 PM',
    venue: 'Seminar Hall',
    details: '30s think, 1min speak',
    regLink: 'https://forms.gle/COMM_PICTURE_FORM'
  },
  // Business
  {
    id: 4,
    category: 'business',
    title: 'Pipe & Ball',
    shortDesc: 'Team coordination challenge',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-users',
    time: '10:00 AM – 11:00 AM',
    venue: 'Group event',
    details: 'Strategy & teamwork',
    regLink: 'https://forms.gle/PIPE_BALL'
  },
  {
    id: 5,
    category: 'business',
    title: 'Poster Designing',
    shortDesc: 'Creative marketing poster',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-palette',
    time: '11:00 AM – 12:30 PM',
    venue: 'Individual event',
    details: 'Design skills',
    regLink: 'https://forms.gle/POSTER_DESIGN'
  },
  {
    id: 6,
    category: 'business',
    title: 'Paper Art',
    shortDesc: 'Creative art using paper',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-cut',
    time: '11:00 AM – 12:30 PM',
    venue: 'Group event',
    details: 'Craft + innovation',
    regLink: 'https://forms.gle/PAPER_ART'
  },
  // Technical
  {
    id: 7,
    category: 'technical',
    title: 'Bug Blaster',
    shortDesc: 'Find and fix code errors',
    image: 'https://images.unsplash.com/photo-1561518776-e76a5e48f731?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-bug',
    time: '10:00 AM – 11:00 AM',
    venue: 'Debugging challenge',
    details: 'Logic-based',
    regLink: 'https://forms.gle/BUG_BLASTER'
  },
  {
    id: 8,
    category: 'technical',
    title: 'Code Warrior',
    shortDesc: 'Competitive coding event',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-code',
    time: '11:00 AM – 12:00 PM',
    venue: 'Individual contest',
    details: 'Problem solving',
    regLink: 'https://forms.gle/CODE_WARRIOR'
  },
  {
    id: 9,
    category: 'technical',
    title: 'Shadow Designer',
    shortDesc: 'UI / UX design challenge',
    image: 'https://images.unsplash.com/photo-1561518776-e76a5e48f731?auto=format&fit=crop&w=1000&q=80', // Placeholder or use base64 from original
    icon: 'fa-pencil-ruler',
    time: 'Full Day Event',
    venue: 'Creativity + UX',
    details: 'Design screens',
    regLink: 'https://forms.gle/SHADOW_DESIGNER'
  },
  // Tamil
  {
    id: 10,
    category: 'tamil',
    title: 'Bharathi Pattarai',
    shortDesc: 'Poetry competition',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-book',
    time: '11:30 AM – 12:30 PM',
    venue: 'Tamil poetry recital',
    details: 'Literary expression',
    regLink: 'https://forms.gle/TAMIL_POETRY'
  },
  {
    id: 11,
    category: 'tamil',
    title: 'Valluvar Vaakku',
    shortDesc: 'Thirukkural recitation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-scroll',
    time: '1:00 PM – 2:00 PM',
    venue: 'Memory + meaning',
    details: 'Thirukkural wisdom',
    regLink: 'https://forms.gle/TAMIL_KURAL'
  },
  {
    id: 12,
    category: 'tamil',
    title: 'Stylish Thamizha',
    shortDesc: 'Traditional styling',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    icon: 'fa-star',
    time: '1:00 PM – 3:00 PM',
    venue: 'Individual / Pair',
    details: 'Traditional beauty',
    regLink: 'https://forms.gle/TAMIL_STYLE'
  }
];