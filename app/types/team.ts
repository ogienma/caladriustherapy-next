export interface TeamMember {
  id: string;
  name: string;
  email: string;
  gender: string;
  // Optional fields
  headshot?: string;
  populations?: string[];
  credentials?: string[];
  // Additional fields from Provider interface
  letters?: string;
  title?: string;
  image?: string;
  accepted_patient_types?: string[];
} 