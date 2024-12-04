import { LucideIcon } from 'lucide-react'


export interface PropertyProps {
  title: string,
  location: string,
  beds : number,
  bathRooms : number,
  type: string,
  images: string[] 
}

export type TestimonialProps = {
  name : string,
  title: string,
  rating  : number,
  testimony: string
}


export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'apartment' | 'villa' | 'land' | 'commercial';
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  amenities: string[];
  images: string[];
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ServiceItem {
  icon: unknown;
  title: string;
  description: string;
}

export interface StatItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}