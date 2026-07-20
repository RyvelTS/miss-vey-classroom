export interface Course {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  ageRange: string;
  duration: string;
  outcomes: string[];
  keyOutcome: string;
  imageSrc: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  childAge: string;
  relationship: string;
  text: string;
  rating: number;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInquiry {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}
