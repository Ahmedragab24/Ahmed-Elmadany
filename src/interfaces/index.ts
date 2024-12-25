import { ReactNode } from "react";
import * as LucideIcons from "lucide-react";

type IconType = keyof typeof LucideIcons;

export interface Menu {
  Title: string;
  Url: string;
}

export interface Iproject {  
  $id?: string;
  title: string;
  description: string;
  image: string;
  DemoLink: string;
  githubLink: string;
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
  id: number,
  name: string
  avatar: string
  review: string
  rating: number
}