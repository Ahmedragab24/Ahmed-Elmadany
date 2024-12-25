"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomerReview } from "../Components/CustomerReviews";
import { CustomerReviewProps } from "@/interfaces";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";

interface ReviewCarouselProps {
  reviews: CustomerReviewProps[];
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lang } = useLanguage();

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="section" id="CustomerReviews">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sectionTitle"
      >
        {lang == "English" ? "Customer Reviews" : "آراء العملاء"}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-2xl mx-auto"
      >
        <CustomerReview {...reviews[currentIndex]} />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevReview}
            className="rounded-full border-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
          <Button
            variant="outline"
            size="icon"
            onClick={nextReview}
            className="rounded-full border-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
