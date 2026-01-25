export interface FetchUsersType {
  id: number;
  name: string;
  gender: string;
  age: number;
  dob: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  address: string;
  role: string;
  department: string;
  salary: number;
  currency: string;
  joiningDate: string;
  isActive: boolean;
  skills: string[];
  languages: string[];
  experience: number;
  projects: string[];
  performanceScore: number;
  bonus: number;
  lastPromotionDate: string;
}
export interface FetchUsersTypeData {
  data: FetchUsersType[];
}
