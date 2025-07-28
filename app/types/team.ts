export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  email: string;
  headshot: string;
  isProvider: boolean;
  gender: string;
  populations: string[];
  credentials: string[];
  appointmentModes: string[];
  paymentOptions: string[];
  specialties: string[];
  availability: string;
  // Additional fields from Provider interface
  image?: string;
}

export const DEFAULT_TEAM_MEMBER: Omit<TeamMember, 'id' | 'name' | 'slug' | 'email' | 'isProvider' | 'gender'> = {
  headshot: '',
  populations: [],
  credentials: [],
  appointmentModes: [],
  paymentOptions: [],
  specialties: [],
  availability: ''
}; 