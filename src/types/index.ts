export type PageRoute = 
  | 'home' 
  | 'bread' 
  | 'yoghurt' 
  | 'hospital' 
  | 'distribution' 
  | 'about' 
  | 'quality' 
  | 'careers' 
  | 'contact';

export type DivisionId = 'bread' | 'yoghurt' | 'hospital';

export interface DivisionInfo {
  id: DivisionId;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  route: PageRoute;
  heroHeadline: string;
  heroSub: string;
}

export interface TradeEnquiryData {
  fullName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  locationState: string;
  businessType: 'Retailer' | 'Distributor' | 'Institution' | 'Other';
  productInterest: 'AZG Bread' | 'AZG Yoghurt' | 'Both Divisions';
  details: string;
}

export interface ProductItem {
  id: string;
  name: string;
  division: 'bread' | 'yoghurt';
  category: string;
  packSize: string;
  description: string;
  format: string;
  statusText: string;
}
