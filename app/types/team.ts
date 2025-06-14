export interface TeamMember {
  id: string;
  name: string;
  email: string;
  headshot?: string;
  isProvider: boolean;
  gender: string;
  populations?: string[];
  credentials?: string[];
  appointmentModes?: string[];
  paymentOptions?: string[];
  specialties?: string[];
  availability: string;
  // Additional fields from Provider interface
  image?: string;
} 