import * as LucideIcons from "lucide-react";
import { ReactNode } from "react";

type IconType = keyof typeof LucideIcons;

export interface Menu {
  Title: string;
  ArTitle: string;
  Url: string;
  Icon?: IconType;
}

export interface Iproject {
  $id?: string;
  title: string;
  description: string;
  image: string;
  DemoLink: string;
  githubLink: string;
  Technologies: string[];
  categories?: [
    {
      name: string;
    }
  ];
}

export interface ICategories {
  id: string;
  name: string;
}

export interface Education {
  title: string;
  history: string;
  description: string;
  arabicTitle: string;
  arabicHistory: string;
  arabicDescription: string;
  icon: ReactNode;
  link: string;
}

export interface SoftSkills {
  triggerTitle: string;
  arTriggerTitle: string;
  description: string;
  arDescription: string;
  icon: IconType;
  direction: "top" | "left" | "right" | "bottom";
}

export interface CustomerReviewProps {
  id: number;
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

export interface Project {
  $id?: string;
  title: string;
  description: string;
  image: string;
  DemoLink?: string;
  githubLink?: string;
  categories?: string[];
  Technologies?: string[];
}

export interface Category {
  $id?: string;
  name: string;
  project?: string[];
}

export interface Message {
  $id?: string;
  $createdAt?: string;
  name: string;
  email: string;
  message: string;
  PhoneNumber: string;
}

export interface VisitorStats {
  $id?: string;
  total_visits: number;
  last_updated: string;
}

export interface Review {
  $id?: string;
  $createdAt?: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface Experience {
  $id?: string;
  $createdAt?: string;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  link?: string;
  titleLink?: string;
  arabicTitleLink?: string;
  motion: number;
  duration: number;
}

export interface Statistics {
  $id?: string;
  $createdAt?: string;
  title: string;
  arTitle: string;
  number: number;
}

export interface About {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  arabicName: string;
  position: string;
  arabicPosition: string;
  description: string;
  arabicDescription: string;
  CV: string;
  email: string;
  socialMedia: { name: string; link: string; icon: string }[];
}

export interface Certificates {
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  name: string;
  certificate: string;
}

export interface Certificates {
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  name: string;
  certificate: string;
}
