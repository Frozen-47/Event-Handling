export interface Category {
  id: string;
  label: string;
  icon: string;
  bgClass: string;
  description: string;
  coordinator: string;
}

export interface Event {
  id: number;
  category: string;
  title: string;
  shortDesc: string;
  image: string;
  icon: string;
  time: string;
  venue: string;
  details: string;
  regLink: string;
}