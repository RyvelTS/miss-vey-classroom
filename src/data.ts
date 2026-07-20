import { Course, Testimonial, FAQItem } from "./types";

export const COURSES_DATA: Course[] = [
  {
    id: "echidna",
    name: "Echidna Class",
    subtitle: "I can talk about myself.",
    description: "Perfect for young learners beginning their public speaking journey, the Echidna Class helps children become comfortable expressing themselves. Through Show & Tell, simple role-playing, and performance-based activities, students learn to introduce themselves, share their thoughts, and speak with growing confidence in a fun and encouraging environment.",
    ageRange: "Ages 5 - 7",
    duration: "10 weeks • 45 mins/week",
    keyOutcome: "Build comfort and basic expressiveness",
    outcomes: [
      "Introduce themselves warmly and share basic personal facts",
      "Participate enthusiastically in Show & Tell activities",
      "Maintain comfortable eye contact and friendly posture",
      "Develop foundational vocal projection and clarity"
    ],
    imageSrc: "/src/assets/images/echidna_class_1784539773350.jpg",
  },
  {
    id: "kasuari",
    name: "Kasuari Class",
    subtitle: "I can tell stories with confidence.",
    description: "Encourages children to think creatively and communicate with confidence through storytelling, role-playing, and performance-based activities. Students learn to organise their ideas, engage an audience, and express themselves with clarity while enjoying imaginative and interactive lessons.",
    ageRange: "Ages 8 - 10",
    duration: "10 weeks • 60 mins/week",
    keyOutcome: "Master storytelling and creative communication",
    outcomes: [
      "Structure narratives using introduction, climax, and conclusion",
      "Vary voice projection, tone, and pace to create excitement",
      "Utilize purposeful hand gestures and facial expressions",
      "Listen actively and respond constructively to peers"
    ],
    imageSrc: "/src/assets/images/kasuari_class_1784539786425.jpg",
  },
  {
    id: "bear",
    name: "Bear Class",
    subtitle: "I can present ideas and make a difference.",
    description: "Designed for children who are ready to take the next step, the Bear Class focuses on presenting ideas with purpose and confidence. Students explore engaging topics such as STEAM and sustainability while developing presentation, critical thinking, and persuasive communication skills that prepare them for school and beyond.",
    ageRange: "Ages 11 - 14",
    duration: "10 weeks • 75 mins/week",
    keyOutcome: "Excellence in formal presentations and persuasion",
    outcomes: [
      "Prepare and deliver formal presentations with slide outlines",
      "Synthesize facts and formulate logical, persuasive arguments",
      "Speak fluently off-the-cuff on a variety of educational topics",
      "Respond professionally to audience questions and feedback"
    ],
    imageSrc: "/src/assets/images/bear_class_1784539797025.jpg",
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    parentName: "Sarah Miller",
    childName: "Clara",
    childAge: "6",
    relationship: "Mother",
    text: "My daughter Clara was incredibly shy and would hide behind my back when meeting new people. After just one term in the Echidna Class, she is excited to speak in front of others and even volunteered for a presentation at school! Miss Velita's approach is absolute magic.",
    rating: 5,
    avatarBg: "bg-amber-100 text-amber-700"
  },
  {
    id: "t2",
    parentName: "David Kim",
    childName: "Leo",
    childAge: "9",
    relationship: "Father",
    text: "The Kasuari Class has been amazing for Leo. He always had a lot of energy and stories but struggled to structure his thoughts. Now he knows how to prepare a clear speech, use hand gestures, and pause for dramatic effect. He loves the games we play!",
    rating: 5,
    avatarBg: "bg-emerald-100 text-emerald-700"
  },
  {
    id: "t3",
    parentName: "Elena Rostova",
    childName: "Ryan",
    childAge: "12",
    relationship: "Mother",
    text: "The Bear Class gave Ryan the confidence he needed to present his science project. He learned how to argue points clearly, research effectively, and handle questions with grace. He absolutely loves the STEAM-integrated topics! This course was a game-changer.",
    rating: 5,
    avatarBg: "bg-indigo-100 text-indigo-700"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "What age groups do you teach?",
    answer: "We offer tailored classes for children aged 5 to 14 years old. The students are grouped into Echidna Class (ages 5-7), Kasuari Class (ages 8-10), and Bear Class (ages 11-14) to ensure that curriculum materials and speech themes match their social and cognitive development."
  },
  {
    id: "faq2",
    question: "Are classes online or in-person?",
    answer: "We conduct interactive online sessions where children can safely join from the comfort of home. Our online classrooms are highly engaging, keeping groups small with plenty of active speech practice, digital whiteboards, and digital presentation games so no child is left idle."
  },
  {
    id: "faq3",
    question: "How many children are in each class?",
    answer: "We maintain a low student-to-teacher ratio, with a maximum of 6 to 8 children per class. This guarantees that every child receives highly personalized guidance, has multiple opportunities to speak during each session, and gets friendly feedback on their progress."
  },
  {
    id: "faq4",
    question: "Do children need prior public speaking experience?",
    answer: "Not at all! Over 80% of our students start as complete beginners with varying levels of shyness. Our specialized, step-by-step curriculum is designed to gently guide them from saying simple sentences to giving fully structured presentations, celebrating every small win."
  },
  {
    id: "faq5",
    question: "How long is each term and what is included?",
    answer: "Each standard term runs for 10 weeks, with one live session per week. The tuition includes all digital learning worksheets, a weekly feedback report card for parents, access to our digital class speech games, and a personalized graduation certificate at the end of the course."
  }
];
