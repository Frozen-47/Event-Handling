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
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1626785774573-4b79931256ce?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d28?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1616892556525-46c596323433?auto=format&fit=crop&w=800&q=80',
    icon: 'fa-star',
    time: '1:00 PM – 3:00 PM',
    venue: 'Individual / Pair',
    details: 'Traditional beauty',
    regLink: 'https://forms.gle/TAMIL_STYLE'
  }
];